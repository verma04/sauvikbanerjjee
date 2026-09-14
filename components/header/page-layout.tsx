
import React from "react";
import Header from "./header";
import Footer from "../footer/footer";

const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default PageLayout;
