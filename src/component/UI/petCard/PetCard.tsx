'use client';

import { useGetpetsQuery } from '@/redux/api/features/addPets';
import SinglepetCard from './singlepetCard';
import { Box, Grid } from '@mui/material';

export default function PetCard() {
  const { data, isLoading, isSuccess } = useGetpetsQuery({});
  return (
    <Grid container spacing={1} sx={{ mt: '10px', mb: '40px' }}>
      {data?.data?.map((pet) => (
        <Grid key={pet?.id} item xs={6} md={4}>
          <SinglepetCard pet={pet} key={pet?.id}></SinglepetCard>
        </Grid>
      ))}
    </Grid>
  );
}
