import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';

const Searchbar = ({ children }: { children: React.ReactNode }) => {
  const label = {
    inputProps: { 'aria-label': 'Checkbox demo' },
  };
  return (
    <Box
      sx={{
        display: 'flex', // Set display to flex
      }}
    >
      <Box
        sx={{
          display: 'flex', // Set display to flex
          flexDirection: 'column',
          width: '20%',
          background: '#e0f7fa',
          height: '100vh',
          flexShrink: 0,
          fontFamily: 'roboto',
        }}
      >
        <Box sx={{}}>
          <TextField
            id="filled-basic"
            label="Search fo pet"
            variant="filled"
            fullWidth
            sx={{}}
          />
        </Box>
        <Box sx={{ px: '15px' }}>
          <Typography
            component="h6"
            sx={{
              textAlign: 'center',
              mt: '20px',
              mb: '10px',
            }}
          >
            Filter pets by
            <Divider sx={{ mt: '5px', mb: '20px' }}></Divider>
          </Typography>
          <Box sx={{ mb: '10px' }}>
            <Typography component="p">
              size :<br></br>
              <FormControlLabel control={<Checkbox />} label="12cm" />
              <FormControlLabel control={<Checkbox />} label="16cm" />
            </Typography>
          </Box>
          <Box sx={{ mb: '10px' }}>
            <Typography component="p">
              Gender :<br></br>
              <FormControlLabel control={<Checkbox />} label="Male" />
              <FormControlLabel control={<Checkbox />} label="Female" />
            </Typography>
          </Box>
          <Box sx={{ mb: '10px' }}>
            <Typography component="p">
              Special needs : <br></br>
              <FormControlLabel control={<Checkbox />} label="Good looking" />
              <FormControlLabel control={<Checkbox />} label="Frienly" />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Searchbar;
