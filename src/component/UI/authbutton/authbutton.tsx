import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import { getUserInfo, removeUser } from '@/service/auth.service';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const AuthButton = () => {
  const userInfo = getUserInfo();
  const { isLoading, data, refetch } = useGetSingleUserQuery({});
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
    toast.success('Successfully Logout');
    router.push('/login');
  };
  return (
    <>
      {userInfo?.email ? (
        <Button
          onClick={handleLogOut}
          variant="contained"
          color="error"
          sx={{}}
        >
          Logout
        </Button>
      ) : (
        <Button href="/login" variant="contained" color="primary">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
