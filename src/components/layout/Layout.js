// src/components/Layout.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ children, brandName, navLinks }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar brandName={brandName} navLinks={navLinks} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
