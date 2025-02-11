'use client';

import { useGetpetsQuery } from '@/redux/api/features/addPets';
import SinglepetCard, { Pet } from './singlepetCard';
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function PetCard() {
  const { data, isLoading, isSuccess } = useGetpetsQuery({});
  return (
    <Box sx={{}}>
      <Grid container spacing={1} sx={{ mt: '10px', mb: '25px' }}>
        {data?.data?.slice(0, 4).map((pet: Pet) => (
          <Grid key={pet?.id} item xs={6} md={3}>
            <SinglepetCard pet={pet} key={pet?.id}></SinglepetCard>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" sx={{ mx: 'auto', display: 'block' }}>
        <Link href="/allpets">More Pets</Link>
      </Button>
    </Box>
  );
}
