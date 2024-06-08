import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import { useUpdateUserMutation } from '@/redux/api/features/getuser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface IFormInput {
  isActive?: boolean;
}
export default function Userdialog() {
  const [open, setOpen] = React.useState(false);
  //   const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };
  //update user
  const [gender, setGender] = React.useState(true);

  const [updateUser] = useUpdateUserMutation();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    console.log(values);
    try {
      //       const res = await updateUser(values);
      //       if (res?.data?.data?.id) {
      //         toast.success(`User role changed to ${values.role}`);
      //         //   router.push('/');
      //       }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{ ml: '10px' }}>
        <EditIcon></EditIcon>
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Change Status</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm before change the status
            </DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 280 }}>
                <InputLabel htmlFor="max-width">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Status"
                  fullWidth
                  variant="outlined"
                  {...register('isActive', { required: true })}
                  onChange={(event) => setGender(false)}
                >
                  <MenuItem value="true">Active</MenuItem>
                  <MenuItem value="false">Block</MenuItem>
                </Select>
                <Button type="submit" onClick={handleClose} sx={{ mt: '10px' }}>
                  Submit
                </Button>
              </FormControl>
            </Box>
          </DialogContent>
        </Dialog>
      </form>
    </React.Fragment>
  );
}
