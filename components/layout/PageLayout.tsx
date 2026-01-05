import Footer from "../Footer/Footer";
import React from "react";
import Header from "../Header/Header";

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
