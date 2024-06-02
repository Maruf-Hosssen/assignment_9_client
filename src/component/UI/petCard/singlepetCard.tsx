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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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
const SinglepetCard = ({ pet }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card
      sx={{
        mt: '10px',
        ml: '10px',
        p: '12px',
        width: '350px',
        height: '420px',
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

        <Button variant="contained">Details</Button>
      </Box>
    </Card>
  );
};

export default SinglepetCard;
