'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { getUserInfo, isLoggedIn, removeUser } from '@/service/auth.service';
import { useRouter } from 'next/navigation';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';

import dynamic from 'next/dynamic';
import { ListItem } from '@mui/material';

const AuthButton = dynamic(() => import('../UI/authbutton/authbutton'), {
  ssr: false,
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const userInfo = getUserInfo();
  //get user info
  const { isLoading, data, refetch } = useGetSingleUserQuery({});
  //avatar
  const [firstLetter, setFirstLetter] = React.useState('');
  React.useEffect(() => {
    if (userInfo?.email) {
      setFirstLetter(userInfo?.email.charAt(0).toUpperCase());
    }
  }, [userInfo?.email]);

  const router = useRouter();

  return (
    <AppBar position="sticky" sx={{ background: '#e0f7fa' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ borderRadius: '50%', display: { xs: 'none' } }}>
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={50}
              style={{ borderRadius: '50%' }}
            ></Image>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Hopeful Tails
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/aboutUs">About Us</Link>
              {data?.data?.role === 'ADMIN' && (
                <Link href="/dashboard">Dashboard</Link>
              )}
              <Link href="/adoption">My Adopted Pets</Link>

              <AuthButton></AuthButton>
            </Menu>
          </Box>

          <Box
            sx={{
              borderRadius: '50%',
            }}
          >
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={50}
              style={{ borderRadius: '50%' }}
            ></Image>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Hopeful Tails
          </Typography>
          {/* for large screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                gap: '20px',
                fontFamily: 'roboto',
                fontWeight: 400,
              },
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/aboutUs">About Us</Link>

            {data?.data?.role === 'ADMIN' && (
              <Link href="/dashboard">Dashboard</Link>
            )}
            <Link href="/adoption">My Adopted Pets</Link>

            <AuthButton></AuthButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{firstLetter}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  textAlign="center"
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <Link href="/profileupdate">Account</Link>

                  <Link href={`/profileupdate/${data?.data?.id}`}>
                    Edit Profile
                  </Link>
                  <Link href={``}>Change password</Link>
                  <AuthButton></AuthButton>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
