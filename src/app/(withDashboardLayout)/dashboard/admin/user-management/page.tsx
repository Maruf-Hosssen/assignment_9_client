'use client';
import { useGetAllUserQuery } from '@/redux/api/userManagementapi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { Box, Typography } from '@mui/material';
import React from 'react';
import UserTable from './component/table';

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  isActive: boolean;
};

const UsermanagementPage = () => {
  const { isLoading, data, isError } = useGetAllUserQuery({});

  const dataArray = data?.data;
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        textAlign="center"
        sx={{
          fontWeight: 600,
          borderBottom: '2px solid gray',
          padding: '20px',
          width: '60%',
          mx: 'auto',
        }}
      >
        Edit and Delete User Data
      </Typography>
      <Box sx={{ mt: '30px' }}>
        <UserTable users={dataArray}></UserTable>
      </Box>
    </Box>
  );
};

export default UsermanagementPage;
