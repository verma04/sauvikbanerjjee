import React from "react";
import ContactForm from "../components/contact/contact";
import FooterContact from "../components/footer/footer-contact";
import Header from "../components/header/header";
import Seo from "../components/common/seo";

const Contact = () => {
  return (
    <>
      <Header />
      <Seo
        title="Sauvik Banerjjee | Mentorship | Master Class | Contact Us"
        description="Sauvik Banerjjee | Contact Us for one-on-one mentorship, master class, board advisory for millennials, working professionals, c-suites, startups and companies"
        canonical="https://sauvikbanerjjee.com/contact-us"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <ContactForm />
      <h1 style={{ display: "none" }}>Contact Us - Sauvik Banerjjee</h1>
      <FooterContact />
    </>
  );
};

export default Contact;
