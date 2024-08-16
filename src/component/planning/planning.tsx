import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Planing = () => {
  return (
    <Box>
      <Typography
        sx={{ color: 'primary.main', textAlign: 'center' }}
        variant="h4"
        fontWeight={600}
        mt="50px"
      >
        Planning To Adopt A Pet?
      </Typography>
      <Box
        sx={{
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          mt: '40px',
          gap: { md: 2, xs: 2 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid transparent',
            gap: 2,
            borderRadius: '10px',
            transition: 'border-color 0.5s ease',
            padding: '20px',
            '&:hover': {
              border: '1px solid #2F4F4F', // Change to primary color on hover
            },
            width: '25vw',
          }}
        >
          <Typography
            sx={{
              color: 'primary.main',
              wordSpacing: '5px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            CHECKLIST FOR NEW ADOPTERS
          </Typography>
          <Typography
            sx={{ color: '#6b6a75', fontSize: '16px', textAlign: 'center' }}
          >
            Make the adoption transition as smooth as possible
          </Typography>
          <Button sx={{ mt: '40px' }}>Learn More</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid transparent',
            gap: 2,
            borderRadius: '10px',
            transition: 'border-color 0.5s ease',
            padding: '20px',
            '&:hover': {
              border: '1px solid #2F4F4F', // Change to primary color on hover
            },
            width: '25vw',
          }}
        >
          <Typography
            sx={{
              color: 'primary.main',
              wordSpacing: '5px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            HOW OLD A DOG IN HUMAN YEARS?
          </Typography>
          <Typography
            sx={{ color: '#6b6a75', fontSize: '16px', textAlign: 'center' }}
          >
            Learn to translate dog years to human years just for fun. Finally
            answer how old dog is!
          </Typography>
          <Button sx={{ mt: '40px' }}>Learn More</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            border: '1px solid transparent',
            gap: 2,
            borderRadius: '10px',
            transition: 'border-color 0.5s ease',
            padding: '20px',
            '&:hover': {
              border: '1px solid #2F4F4F', // Change to primary color on hover
            },
            width: '25vw',
          }}
        >
          <Typography
            sx={{ color: 'primary.main', wordSpacing: '5px', fontSize: '20px' }}
          >
            PET ADOPTION FAQS
          </Typography>
          <Typography
            sx={{ color: '#6b6a75', fontSize: '16px', textAlign: 'center' }}
          >
            Get answer all the questions you havent through of for your adoption
          </Typography>
          <Button sx={{ mt: '40px' }}>Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Planing;
