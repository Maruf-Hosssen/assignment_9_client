'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import Navbar from '@/component/navbar/Navbar';

const Profile = () => {
  const { data: userProfile, isLoading } = useGetSingleUserQuery({});
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <>
      <Navbar></Navbar>
      <Box mt={12} sx={{ boxShadow: 1 }} p={3} borderRadius={4}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="body1" mb={1}>
              Name: {userProfile?.data?.name}
            </Typography>
            <Typography variant="body1" mb={1}>
              Email: {userProfile?.data?.email}
            </Typography>
            <Typography variant="body1" mb={1}>
              Role: {userProfile?.data?.role}
            </Typography>
            <Link href={`/profileupdate/${userProfile?.data?.id}`}>
              <Button variant="contained">Update Profile</Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Profile;
