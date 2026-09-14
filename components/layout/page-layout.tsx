import Footer from "../footer/footer";
import React from "react";
import Header from "../header/header";

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
