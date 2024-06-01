import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TUser } from '../page';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Switch } from '@mui/material';
import { useState } from 'react';
import UserDialague from './userdialog';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function UserTable({ users }: { users: TUser[] }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  //switch
  const [checked, setChecked] = useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">IsActive</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
                {row?.isActive === true ? 'Active' : 'Block'}
                <Switch
                  checked={checked}
                  onClick={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.role}
                <UserDialague></UserDialague>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
