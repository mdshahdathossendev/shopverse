import React from 'react';
import AllProdect from '../../Componet/AllProdect';
import { getProdect } from '@/lib/data';

const page = async() => {
    const data =  await getProdect()
    return (
        <div>
            <AllProdect data={data}></AllProdect>
        </div>
    );
};

export default page;