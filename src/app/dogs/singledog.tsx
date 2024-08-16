import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Box, Button, Grid } from '@mui/material';
import { toast } from 'sonner';
import Link from 'next/link';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export type Pet = {
  id: string;
  name: string;
  photo: string;
  description: string;
  age: number;
  breed: string;
  gender: 'male' | 'female';
  healthStatus: string;
  currentLocation: string;
};
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const SingleDog = ({ pet }: { pet: Pet }) => {
  console.log(pet);
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card
      sx={{
        mt: '10px',
        ml: '10px',
        p: '6px',
        width: '300px',
        height: '400px',
      }}
    >
      <CardHeader title={pet?.name} subheader={pet?.currentLocation} />
      <CardMedia
        component="img"
        image={pet?.photo}
        alt="petimage"
        sx={{ width: 'full', height: '180px' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {pet?.description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mx: '15px',
        }}
      >
        <Box>
          <Typography component="p" fontSize="13px">
            Age :{pet?.age}
          </Typography>
          <Typography component="p" fontSize="13px">
            Breed :{pet?.breed}
          </Typography>
        </Box>

        <Button variant="contained">
          <Link href={`/pet/${pet?.id}`}>Details</Link>
        </Button>
      </Box>
    </Card>
  );
};

export default SingleDog;
