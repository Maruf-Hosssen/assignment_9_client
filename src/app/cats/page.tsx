'use client';

import Footer from '@/component/footer/Footer';
import Navbar from '@/component/navbar/Navbar';
import { Pet } from '@/component/UI/petCard/singlepetCard';
import { useGetpetsQuery } from '@/redux/api/features/addPets';

import { Box, Button, Grid, Typography } from '@mui/material';
import SingleCat from './singlecat';

export default function PetCard() {
  const { data, isLoading, isSuccess } = useGetpetsQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{}}>
      <Navbar></Navbar>
      <Typography
        sx={{ color: 'primary.main', textAlign: 'center' }}
        variant="h4"
        fontWeight={600}
        mt="20px"
      >
        ALL CATS ARE HERE
      </Typography>
      <Grid container spacing={1} sx={{ mt: '10px', mb: '25px' }}>
        {data?.data
          ?.filter((pet: Pet) => pet?.name.toLowerCase() === 'cat') // Case-insensitive comparison
          .map((pet: Pet) => (
            <Grid key={pet?.id} item xs={6} md={3}>
              <SingleCat pet={pet} key={pet?.id} />
            </Grid>
          ))}
      </Grid>
      <Footer></Footer>
    </Box>
  );
}
