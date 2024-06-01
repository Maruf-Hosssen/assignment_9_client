import Navbar from '@/component/navbar/Navbar';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import pet from '@/assets/pet2.webp';
import Footer from '@/component/footer/Footer';
import SendIcon from '@mui/icons-material/Send';
import Team from './team';

const AboutUs = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box
        sx={{
          mt: '20px',
          width: 'full',
          '@media(min-width:900px)': { mt: '25px' },
          mx: '10%',

          py: '30px',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            textAlign: 'center',
          }}
        >
          Our Mission Statement
        </Typography>
        <Box
          sx={{
            display: 'block',
            width: '100%',
            gap: '20px',
            mt: '20px',
            '@media(min-width:900px)': {
              mt: '25px',
              gap: '50px',
              display: 'flex',
              width: '100%',
            },
            fontFamily: '',
          }}
        >
          <Box
            sx={{
              '@media(min-width:900px)': { width: '50%' },
              width: '100%',
              mb: '20px',
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: '18px', color: '#212121' }}
            >
              Mission
            </Typography>
            <Typography sx={{ textAlign: 'justify', color: '#424242' }}>
              Our mission at [Organization Name] is to rescue, rehabilitate, and
              rehome pets in need, while also promoting responsible pet
              ownership and advocating for animal welfare. We are committed to
              providing a safe haven for abandoned, abused, and neglected
              animals, and to finding loving forever homes where they can thrive
              and bring joy to their adoptive families.Euthanized due to lack of
              space or resources.Through education, outreach, and collaboration
              with our community, we strive to create a compassionate
            </Typography>
          </Box>
          <Box
            sx={{ width: '100%', '@media(min-width:900px)': { width: '50%' } }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: '18px', color: '#212121' }}
            >
              Vision
            </Typography>
            <Typography sx={{ textAlign: 'justify', color: '#424242' }}>
              Our vision is a world where every pet is valued, cherished, and
              given the opportunity to live a life free from suffering. We
              envision a society that prioritizes the well-being of animals,
              where adoption is the first choice for those seeking a companion,
              and where no animal is euthanized due to lack of space or
              resources. Through education, outreach, and collaboration with our
              community, we strive to create a compassionate and inclusive
              environment where the bond between humans and animals is
              celebrated and protected.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '65%',
            '@media(min-width:900px)': { mt: '50px' },
            mt: '20px',
            mx: 'auto',
          }}
        >
          <Image
            src={pet}
            alt="pet"
            style={{ width: '100%', height: '300px' }}
          ></Image>
        </Box>
      </Box>
      <Box
        sx={{
          my: '35px',
          py: '30px',
          mx: '10%',
          width: 'full',
          gap: '10px',
          display: 'block',
          '@media(min-width:900px)': { display: 'flex' },
        }}
      >
        <Box
          sx={{ width: '100%', '@media(min-width:900px)': { width: '50%' } }}
        >
          <Typography
            variant="h4"
            component="h4"
            style={{
              textAlign: 'center',
            }}
          >
            Meet Our Team
          </Typography>
          <Box
            sx={{
              width: '100%',
              mt: '25px',
              px: '25px',
            }}
          >
            <Team></Team>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            mt: '20px',
            '@media(min-width:900px)': { width: '50%', mt: '0px' },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            style={{
              textAlign: 'center',
            }}
          >
            Contact With Us
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              mt: '25px',
              gap: '20px',
              mx: 'auto',
              '@media(min-width:900px)': { width: '70%' },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Enter your email address"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Say something"
              multiline
              rows={4}
              defaultValue="I want to say,"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ width: '30%', mx: 'auto' }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default AboutUs;
