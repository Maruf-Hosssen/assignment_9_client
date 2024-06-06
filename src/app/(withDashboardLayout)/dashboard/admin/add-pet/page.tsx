'use client';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAddPetMutation } from '@/redux/api/features/addPets';
import { modifyPayload } from '@/utils/modifyPayload';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface IFormInput {
  name: string;
  photo: string;
  description: string;
  age: number;
  breed: string;
  gender: string;
  healthStatus: string;
  currentLocation: string;
}
const AddpetPage = () => {
  const router = useRouter();
  const [gender, setGender] = useState('');

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const [addPet] = useAddPetMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    values.age = Number(values.age);

    try {
      const res = await addPet(values);
      if (res?.data?.data?.id) {
        toast.success('Pet added successfully');
        reset();
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box sx={{ width: '100%', padding: '30px' }}>
      <Box>
        <Typography
          variant="h5"
          component="h5"
          textAlign="center"
          sx={{
            fontWeight: 600,
            borderBottom: '2px solid gray',
            padding: '20px',
            width: '60%',
            mx: 'auto',
          }}
        >
          Add a Pet
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ mt: '30px' }}>
          <Grid item xs={6}>
            <TextField
              required
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('name', { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('description', { required: true })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Age"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('age', { required: true })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Breed"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('breed', { required: true })}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '7px',
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                fullWidth
                variant="outlined"
                {...register('gender', { required: true })}
                onChange={(event) => setGender(event.target.value as string)}
              >
                <MenuItem value="male">male</MenuItem>
                <MenuItem value="female">female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Health status"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('healthStatus', { required: true })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              label="Current location"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('currentLocation')}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              {...register('photo', { required: true })}
              sx={{}}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button> */}
            <TextField
              required
              label="Photo"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('photo', { required: true })}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: '20px' }}
        >
          Add Pet
        </Button>
      </form>
    </Box>
  );
};

export default AddpetPage;
