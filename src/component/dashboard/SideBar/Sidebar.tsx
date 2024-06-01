import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { drawerItems } from '@/utils/drawerItems';
import { DrawerItem, UserRole } from '@/type/common';
import { getUserInfo } from '@/service/auth.service';
import SidebarItem from './SideBarItem';
import { usePathname } from 'next/navigation';

type IProps = {
  item: DrawerItem;
};

const SideBar = () => {
  const [userRole, setUserRole] = useState('');

  const pathname = usePathname();
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={logo} width={50} height={50} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: 'pointer',
          }}
        >
          Hopeful Tails
        </Typography>
      </Stack>
      <Box>
        <Typography
          sx={{
            textAlign: 'center',
            mt: '10px',
            fontSize: '18px',
            borderBottom: '2px solid gray',
            padding: '10px',
            fontWeight: 600,
          }}
        >
          Dashboard For Admin
        </Typography>
        <List sx={{ gap: '10px', fontSize: '17px' }}>
          <Link href="/dashboard/admin/user-management">
            <ListItem>Users</ListItem>
          </Link>
          <Link href="/dashboard/admin/add-pet">
            <ListItem>Add a pet</ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;

{
  /* {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))} */
}
