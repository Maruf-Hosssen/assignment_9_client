'use client';
import DashboardDrawer from '@/component/dashboard/dashboardDrawer/DashboardDrawer';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //get user info
  const { isLoading, data, refetch } = useGetSingleUserQuery({});
  const userRoleCheck = data?.data?.role;

  // if (userRoleCheck !== 'ADMIN') {
  //   return (
  //     <>
  //       <div className="h-screen flex items-center justify-center flex-col">
  //         <h1 className=" text-red-600 font-bold text-xl">
  //           This dashboard is only for admin.Your are a user
  //         </h1>
  //         <Link href="/" className="text-blue-500 underline mt-1">
  //           Go to home
  //         </Link>
  //       </div>
  //     </>
  //   );
  // }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
