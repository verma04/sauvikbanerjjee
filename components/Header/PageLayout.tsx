
import React from "react";

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'), {
  ssr: false
})

const Footer = dynamic(() => import('../Footer/Footer'), {
  ssr: false
})
const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default PageLayout;
