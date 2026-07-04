import ProdectDelts from '@/app/Componet/ProdectDelts';
import { getProdectDtels } from '@/lib/data';
import React from 'react';

const page = async({ params }) => {
    const {id} = await params;
    const data = await getProdectDtels(id)
    const Prodect = data.data
    return (
        <div>
          <ProdectDelts Prodect={Prodect}></ProdectDelts>
        </div>
    );
};

export default page;