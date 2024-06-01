'use client';
import React from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { registerUser } from '@/service/actions/registerUser';
import { modifyPayload } from '@/utils/modifyPayload';
import { toast } from 'sonner';
import { userLogin } from '@/service/actions/userLogin';
import { storeUserInfo } from '@/service/auth.service';
import { useRouter } from 'next/navigation';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          email: values.email,
          password: values.password,
        });
        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          reset();
          router.push('/');
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.2)',
          padding: '30px',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h5"
            fontFamily="roboto"
            color="#212121"
          >
            Create a new account
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item sx={{ width: '100%' }}>
            <TextField
              label="User name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('name', { required: true, maxLength: 8 })}
            />
            {errors.name?.type === 'required' && (
              <p role="alert" className="text-red-500 font-thin">
                **user name is required
              </p>
            )}
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('email', { required: true })}
            />
            {errors.email?.type === 'required' && (
              <p role="alert" className="text-red-500 font-thin">
                **email is required
              </p>
            )}
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Grid item>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('password', { required: true, maxLength: 8 })}
              />
              {errors.password?.type === 'required' && (
                <p role="alert" className="text-red-500 font-thin">
                  **password is required
                </p>
              )}
            </Grid>
            <Grid item>
              <TextField
                label="Confirm password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('confirmPassword', {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.confirmPassword?.type === 'required' && (
                <p role="alert" className="text-red-500 font-thin">
                  **confirm password is required
                </p>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: '10px' }}
            >
              Sign up
            </Button>
          </Grid>
        </form>
        <Grid item>
          <Typography component="p" sx={{ fontWeight: 300, color: '#616161' }}>
            Already have an account?{' '}
            <Link
              href="/login"
              style={{ color: '#039be5', textDecoration: 'underline' }}
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;
