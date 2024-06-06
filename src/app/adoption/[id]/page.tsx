'use client';
import Navbar from '@/component/navbar/Navbar';
import { useAdoptionMutation } from '@/redux/api/features/adoption';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import { modifyPayload } from '@/utils/modifyPayload';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type TParams = {
  id: string;
};
interface IFormInput {
  userName: string;
  email: string;
  petId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  petOwnershipExperience: string;
  term: boolean;
}

const AdoptionPage = ({ params }: { params: TParams }) => {
  const id = params?.id;
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [adoption] = useAdoptionMutation();
  const { isLoading, data, refetch } = useGetSingleUserQuery({});
  let username = data?.data?.name;
  const email = data?.data?.email;
  if (username) {
    username = username.charAt(0).toUpperCase() + username.slice(1);
  }
  //agreement
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const handleTermsAndConditionsChange = (event: any) => {
    setTermsAndConditions(event.target.checked);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    data.term = termsAndConditions;
    try {
      const res = await adoption(data);
      if (res?.data?.success) {
        toast.success('Requested for adoption successfully');
        reset();
        router.push('/');
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ mt: '30px', width: '70%', mx: 'auto' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', color: '#212121' }}>
                User Name
              </Typography>
              <TextField
                id="filled-read-only-input"
                defaultValue={username}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', color: '#212121' }}>
                Email
              </Typography>
              <TextField
                id="filled-read-only-input"
                defaultValue={email}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', color: '#212121' }}>
                Pet ID
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                value={id}
                InputProps={{
                  readOnly: true,
                }}
                {...register('petId', { required: true })}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: '16px', color: '#212121' }}>
                Ownership Experience
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                {...register('petOwnershipExperience', { required: true })}
              />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsAndConditions}
                    onChange={handleTermsAndConditionsChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{ p: '10px,15px' }}
                type="submit"
                disabled={!termsAndConditions}
              >
                Submit Adoption Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AdoptionPage;
