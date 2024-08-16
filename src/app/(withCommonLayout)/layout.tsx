'use client';
import Category from '@/component/category/category';
import Footer from '@/component/footer/Footer';
import Navbar from '@/component/navbar/Navbar';
import Planing from '@/component/planning/planning';
import Searchbar from '@/component/searchbar/Searchbar';
import { getUserInfo, isLoggedIn } from '@/service/auth.service';
import { useRouter } from 'next/navigation';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  if (!isLoggedIn()) {
    return router.push('/login');
  }
  return (
    <>
      <Navbar></Navbar>
      <Searchbar>{children}</Searchbar>
      <Category></Category>
      <Planing></Planing>
      <Footer></Footer>
      {/* <div className="min-h-screen"></div> */}
    </>
  );
};

export default CommonLayout;
