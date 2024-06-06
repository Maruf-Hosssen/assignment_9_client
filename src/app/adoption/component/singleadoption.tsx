import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TAdoption } from '../page';


export default function Singleadoption({ adoption }: { adoption: TAdoption }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User name: {adoption?.userName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Email: {adoption?.email}
        </Typography>

        <Typography sx={{}} color="text.secondary">
          Pet Id : {adoption?.petId}
        </Typography>
        <Typography
          sx={{ display: 'flex', fontSize: '16px', alignItems: 'center' }}
          color="text.secondary"
        >
          Ownership Experience :
          <Typography variant="body2" sx={{ fontSize: '14px', ml: '3px' }}>
            {adoption?.petOwnershipExperience}
          </Typography>
        </Typography>
        <Typography sx={{}} color="text.secondary">
          Adoption request date : {adoption?.createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
