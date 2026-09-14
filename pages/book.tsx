import React from "react";
import MyBook from "../components/book/my-book";
import PageLayout from "../components/header/page-layout";
import Seo from "../components/common/seo";

const BookPage = () => {
  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee: CEO Rezolve - Product, Tech & Digital Services, Tech Futurist, Author & Academic"
        description="22 years of building internet platforms, internet businesses and internet technologies across 4 continents and over 500 internet platforms launched across enterprise companies, SMEs, MSMEs and over 100 eCommerce platforms."
        canonical="https://sauvikbanerjjee.com/book"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <MyBook />
    </PageLayout>
  );
};

export default BookPage;
