'use client';
import Navbar from '@/component/navbar/Navbar';
import { useGetSinglepetQuery } from '@/redux/api/features/addPets';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { isLoggedIn } from '@/service/auth.service';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type TParams = {
  id: string;
};

const SingleProduct = ({ params }: { params: TParams }) => {
  const petId = params?.id;
  const { data, isLoading, isError } = useGetSinglepetQuery(petId);
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push('/login');
  }
  if (isLoading) {
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>;
  }
  const petInfo = data?.data;
  return (
    <>
      <Navbar></Navbar>
      <Box
        sx={{
          width: '100%',
          mt: '30px',
          '@media(min-width:900px)': { mt: '40px' },
        }}
      >
        <Card sx={{ width: '50%', mx: 'auto' }}>
          <CardMedia
            sx={{ height: 250, width: 250 }}
            image={petInfo?.photo}
            title={petInfo?.name}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {petInfo?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {petInfo?.description}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: '5px' }}
              >
                <AddLocationIcon></AddLocationIcon>
                {petInfo?.currentLocation}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  sx={{
                    fontSize: '17px',
                    display: 'inline',
                    fontWeight: 500,
                    color: '#212121',
                  }}
                >
                  age :
                </Typography>{' '}
                {petInfo?.age}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  sx={{
                    fontSize: '17px',
                    display: 'inline',
                    fontWeight: 500,
                    color: '#212121',
                  }}
                >
                  Breed :
                </Typography>{' '}
                {petInfo?.breed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  sx={{
                    fontSize: '17px',
                    display: 'inline',
                    fontWeight: 500,
                    color: '#212121',
                  }}
                >
                  Gender :
                </Typography>{' '}
                {petInfo?.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  sx={{
                    fontSize: '17px',
                    display: 'inline',
                    fontWeight: 500,
                    color: '#212121',
                  }}
                >
                  Health status :
                </Typography>{' '}
                {petInfo?.healthStatus}
              </Typography>
            </CardContent>
          </Box>

          <CardActions>
            <Button size="small" variant="outlined" sx={{ p: '10px 15px' }}>
              <Link href={`/adoption/${petId}`}>Request for adoption</Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default SingleProduct;
