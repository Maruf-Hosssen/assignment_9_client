'use client';

import Footer from '@/component/footer/Footer';
import Navbar from '@/component/navbar/Navbar';
import SinglepetCard, { Pet } from '@/component/UI/petCard/singlepetCard';
import { useGetpetsQuery } from '@/redux/api/features/addPets';

import { Box, Button, Grid } from '@mui/material';

export default function PetCard() {
  const { data, isLoading, isSuccess } = useGetpetsQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{}}>
      <Navbar></Navbar>
      <Grid container spacing={1} sx={{ mt: '10px', mb: '25px' }}>
        {data?.data?.map((pet: Pet) => (
          <Grid key={pet?.id} item xs={6} md={3}>
            <SinglepetCard pet={pet} key={pet?.id}></SinglepetCard>
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </Box>
  );
}
