'use client';
import Footer from '@/component/footer/Footer';
import Navbar from '@/component/navbar/Navbar';
import Searchbar from '@/component/searchbar/Searchbar';
import { isLoggedIn } from '@/service/auth.service';
import { useRouter } from 'next/navigation';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <Searchbar>{children}</Searchbar>
      <Footer></Footer>
      {/* <div className="min-h-screen"></div> */}
    </>
  );
};

export default CommonLayout;
