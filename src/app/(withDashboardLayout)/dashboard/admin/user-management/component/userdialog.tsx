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

export default function Userdialog() {
  const [open, setOpen] = React.useState(false);
  //   const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e: any) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{ ml: '10px' }}>
        <EditIcon></EditIcon>
      </Button>
      <form>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Change the role</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Confirm before change the fole
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
                <InputLabel htmlFor="max-width">Role</InputLabel>
                <Select autoFocus label="role" defaultValue="USER">
                  <MenuItem value="USER">USER</MenuItem>
                  <MenuItem value="ADMIN">ADMIN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} type="submit">
              Confirm change
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
}
