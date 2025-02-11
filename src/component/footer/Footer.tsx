import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Email, Phone, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: '#000000',
        color: 'whitesmoke',
        padding: '50px',

        bottom: 0,
        width: '100%',
        mt: '50px',
      }}
    >
      <Grid container spacing={3}>
        {/* Contact Information */}
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body1">
            <Email /> petadoptionbd@egmail.com
          </Typography>
          <Typography variant="body1">
            <Phone /> 01711223344
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ mr: 1 }}
            >
              <GitHub />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ mr: 1 }}
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Twitter />
            </Link>
          </Box>
        </Grid>
        {/* Copyright Information */}
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h6">Copyright Information</Typography>
          <Typography variant="body1">
            © {new Date().getFullYear()} Pet-adoptionbd. All rights reserved.
          </Typography>
        </Grid>
        {/* Additional Links */}
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h6">Additional Links</Typography>
          <Typography variant="body1">
            <Link href="/terms" color="inherit">
              Terms of Use
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link href="/aboutUs" color="inherit">
              About Us
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
