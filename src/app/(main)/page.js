import React from 'react';
import { ThemeSwitch } from '../Componet/ThemToogle';
import Hero from '../Componet/Hero';
import Categories from '../Componet/Categories';
import FlashSale from '../Componet/FlashSale';
import Newsletter from '../Componet/Newsletter';
import DisplayPordect from '../Componet/DisplayPordect';
import { getProdect } from '@/lib/data';

const page = async() => {
  const data =  await getProdect()
  return (
    <div>
     <Hero></Hero>
     <Categories></Categories>
      <DisplayPordect data={data}></DisplayPordect>
     <FlashSale></FlashSale>
    
     <Newsletter></Newsletter>
    </div>
  );
};

export default page;