import Head from "next/head";
import React from "react";
import ContactForm from "../components/contact/Contact";
import FooterContact from "../components/Footer/FooterContact";
import Header from "../components/Header/Header";
import PageLayout from "../components/layout/PageLayout";

const Contact = () => {
  return (
    <>
      <Header />

      <Head>
        <title>Sauvik Banerjjee | Mentorship | Master Class | Contact Us</title>
        <meta name="description" content="Sauvik Banerjjee | Contact Us for one-on-one mentorship, master class, board advisory for millennials, working professionals, c-suites, startups and companies" >

        </meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <ContactForm />
      <h1 style={{ display: 'none' }} >
        Contact Us - Sauvik Banerjjee
      </h1>
      <FooterContact />
    </>
  );
};

export default Contact;
