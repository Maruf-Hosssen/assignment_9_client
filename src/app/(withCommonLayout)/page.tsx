import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Searchbar from '@/component/searchbar/Searchbar';
import PetCard from '@/component/UI/petCard/PetCard';
import PetDetails from '@/component/UI/petCard/petDetails';
import { useGetSingleUserQuery } from '@/redux/api/features/getuser';
import { getUserInfo } from '@/service/auth.service';
import Category from '@/component/category/category';

const Homepage = () => {
  return (
    <>
      <PetCard></PetCard>
    </>
  );
};

export default Homepage;
