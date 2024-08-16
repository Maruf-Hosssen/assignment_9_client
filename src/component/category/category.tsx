import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import dog from '../../assets/dog.png';
import cat from '../../assets/cat.png';
import animal from '../../assets/animal.png';
import rescue from '../../assets/shelter.png';
import Link from 'next/link';

const Category = () => {
  return (
    <Box
      sx={{
        mt: { md: '50px' },
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 80%),
          url(https://i.pinimg.com/originals/f2/e2/5f/f2e25fa89ad3e970aeb994db60a81303.jpg)
        `,
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 600,

          color: '#F5F5F5',
        }}
        variant="h4"
      >
        Find Your New Best Friend
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '20px',
          color: '#F5F5F5',
        }}
      >
        Browse pets from our network of over 14,500 shelters and rescues.
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, mt: '20px' }}>
        <Link href="/dogs">
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              py: '15px',
              px: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              borderRadius: '10px',
              border: '3px solid transparent', // Initial border
              transition: 'border-color 0.3s ease', // Smooth transition
              '&:hover': {
                borderColor: '#2F4F4F', // Change to primary color on hover
              },
            }}
          >
            <Image src={dog} alt="dog" width={70}></Image>
            <Typography sx={{ color: '#6b6a75' }}>Dog</Typography>
          </Box>
        </Link>
        <Link href="/cats">
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              py: '15px',
              px: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              borderRadius: '10px',
              border: '3px solid transparent', // Initial border
              transition: 'border-color 0.3s ease', // Smooth transition
              '&:hover': {
                borderColor: '#2F4F4F', // Change to primary color on hover
              },
            }}
          >
            <Image src={cat} alt="dog" width={70}></Image>
            <Typography sx={{ color: '#6b6a75' }}>Cat</Typography>
          </Box>
        </Link>
        <Link href="/othersAnimal">
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              py: '15px',
              px: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              borderRadius: '10px',
              border: '3px solid transparent', // Initial border
              transition: 'border-color 0.3s ease', // Smooth transition
              '&:hover': {
                borderColor: '#2F4F4F', // Change to primary color on hover
              },
            }}
          >
            <Image src={animal} alt="dog" width={70}></Image>
            <Typography sx={{ color: '#6b6a75' }}>Other Animal</Typography>
          </Box>
        </Link>
        <Link href="/rescue">
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              py: '15px',
              px: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              borderRadius: '10px',
              border: '3px solid transparent', // Initial border
              transition: 'border-color 0.3s ease', // Smooth transition
              '&:hover': {
                borderColor: '#2F4F4F', // Change to primary color on hover
              },
            }}
          >
            <Image src={rescue} alt="dog" width={70}></Image>
            <Typography sx={{ color: '#6b6a75' }}>Rescues</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Category;
