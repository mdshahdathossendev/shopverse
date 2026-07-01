import React from 'react';
import Navbar from '../Componet/Navber';

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;