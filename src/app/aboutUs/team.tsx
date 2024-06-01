import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import man1 from '@/assets/man1.jpg';
import man2 from '@/assets/man2.jpg';
import man3 from '@/assets/man3.jpg';
import Image from 'next/image';

export default function Team() {
  return (
    <Grid spacing={2} container>
      <Grid item xs={4} sx={{ textAlign: 'center' }}>
        <Card sx={{ maxWidth: 375 }}>
          <CardActionArea>
            <Image
              src={man1}
              alt="green iguana"
              style={{ width: '100%', height: '150px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age : 30
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Post: CEO
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={4} sx={{ textAlign: 'center' }}>
        <Card sx={{ maxWidth: 375 }}>
          <CardActionArea>
            <Image
              src={man2}
              alt="green iguana"
              style={{ width: '100%', height: '150px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Tom
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age : 35
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Post: Manager
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={4} sx={{ textAlign: 'center' }}>
        <Card sx={{ maxWidth: 375 }}>
          <CardActionArea>
            <Image
              src={man3}
              alt="green iguana"
              style={{ width: '100%', height: '150px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                component="p"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Alex
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age : 28
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Post: Admin
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
