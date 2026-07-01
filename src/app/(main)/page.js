import React from 'react';
import { ThemeSwitch } from '../Componet/ThemToogle';
import Hero from '../Componet/Hero';
import Categories from '../Componet/Categories';
import FlashSale from '../Componet/FlashSale';
import Newsletter from '../Componet/Newsletter';

const page = () => {
  return (
    <div>
     <Hero></Hero>
     <Categories></Categories>
     <FlashSale></FlashSale>
     <Newsletter></Newsletter>
    </div>
  );
};

export default page;