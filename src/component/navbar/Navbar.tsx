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
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { getUserInfo, isLoggedIn, removeUser } from '@/service/auth.service';
import { useRouter } from 'next/navigation';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import { getFromLocalStorage } from '@/utils/local-storage';
import { useGetAllUserQuery } from '@/redux/api/userManagementapi';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
  const { isLoading, data } = useGetSingleUserQuery({});
  const userRoleCheck = data?.data?.role;
  const firstLetter = userInfo?.email.charAt(0).toUpperCase();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

  return (
    <AppBar position="static" sx={{ background: '#e0f7fa' }}>
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
              {userInfo?.email ? (
                <Button
                  onClick={handleLogOut}
                  variant="contained"
                  color="error"
                >
                  Logout
                </Button>
              ) : (
                <Button href="/login" variant="contained" color="primary">
                  Login
                </Button>
              )}
              {userRoleCheck === 'ADMIN' && (
                <Link href="/dashboard">Dashboard</Link>
              )}
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
            {userInfo?.email ? (
              <Button onClick={handleLogOut} variant="contained" color="error">
                Logout
              </Button>
            ) : (
              <Button href="/login" variant="contained" color="primary">
                Login
              </Button>
            )}
            {userRoleCheck === 'ADMIN' && (
              <Link href="/dashboard">Dashboard</Link>
            )}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
