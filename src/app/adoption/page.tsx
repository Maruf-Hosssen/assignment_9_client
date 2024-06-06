'use client';
import Navbar from '@/component/navbar/Navbar';
import { useGetAdoptionQuery } from '@/redux/api/features/adoption';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Singleadoption from './component/singleadoption';

export type TAdoption = {
  createdAt: string;
  email: string;
  id: string;
  petId: string;
  petOwnershipExperience: string;
  status: string;
  updatedAt: string;
  userId: string;
  userName: string;
};

const AdoptionPage = () => {
  const { data, isLoading } = useGetAdoptionQuery({});
  const dataArr = data?.data;
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ mt: '30px' }}>
        <Typography
          sx={{
            fontSize: '25px',
            fontWeight: '600',
            textAlign: 'center',
            borderBottom: '2px solid gray',
            p: '20px',
          }}
        >
          My Adopted Pets
        </Typography>
        <Grid container spacing={2} direction="row" sx={{}}>
          {dataArr?.map((adoption: TAdoption) => {
            return (
              <Grid sx={{ mt: '40px' }} item xs={4} key={adoption?.id}>
                <Singleadoption
                  adoption={adoption}
                  key={adoption?.id}
                ></Singleadoption>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default AdoptionPage;
