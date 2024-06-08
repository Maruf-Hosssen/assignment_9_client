'use client';

import Navbar from '@/component/navbar/Navbar';
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from '@/redux/api/features/getuser';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface IParams {
  id: string;
}
interface IFormInput {
  name?: string;
  email?: string;
}

const ProfileUpdate = ({ params }: { params: IParams }) => {
  const router = useRouter();
  const { data: userProfile, isLoading } = useGetSingleUserQuery({});
  const [updateUser] = useUpdateUserMutation();
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    try {
      const res = await updateUser(values);
      if (res?.data?.data?.id) {
        toast.success('Profile updated successfully');
        reset();
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ width: '60%', mx: 'auto', mt: '30px' }}>
        <Typography sx={{ fontSize: '20px', textAlign: 'center' }}>
          Update email or user-name
        </Typography>
        <Box sx={{ width: '60%', mx: 'auto', mt: '20px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                id="standard-basic"
                placeholder={userProfile?.data?.name}
                defaultValue={userProfile?.data?.name}
                variant="standard"
                {...register('name', { required: true })}
              />
              <TextField
                id="standard-basic"
                //                 label="enter new user-name"
                variant="standard"
                placeholder={userProfile?.data?.email}
                defaultValue={userProfile?.data?.email}
                disabled
              />
              <Typography sx={{ fontSize: '12px', color: 'red' }}>
                **Email can be update after 49 days
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: '10px' }}
              >
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ProfileUpdate;
