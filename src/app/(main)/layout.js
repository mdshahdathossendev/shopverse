import React from 'react';
import Navbar from '../Componet/Navber';
import Footer from '../Componet/Footer';

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default layout;