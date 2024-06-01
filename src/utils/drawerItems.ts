//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import TryIcon from '@mui/icons-material/Try';
import { DrawerItem, USER_ROLE, UserRole } from '@/type/common';

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: 'manage users',
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: 'add pet',
          path: `${role}/specialties`,
          icon: TryIcon,
        },
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push({
        title: 'see pet',
        path: `pet`,
        icon: DashboardIcon,
      });
      break;

    default:
      break;
  }

  return [...roleMenus];
};
