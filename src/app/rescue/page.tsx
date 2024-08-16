import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <Box>
      <Typography
        sx={{ mt: '100px', textAlign: 'center', color: '#2F4F4F' }}
        variant="h2"
      >
        Comming Soon
      </Typography>
      <Button sx={{ mx: 'auto' }}>
        <Link href="/">Go Back Home</Link>
      </Button>
    </Box>
  );
};

export default page;
