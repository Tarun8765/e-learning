import React from "react";
import Breadcrumb from "../components/templates/Breadcrumb/Breadcrumb";
import ContactSection from "../components/templates/ContactSection/ContactSection";

function Contact() {
  const breadcrumbList = [
    {
      href:'/',
      text:'Home'
    },
    {
      text:'Contact'
    }
  ]
  return( 
    <>
      <Breadcrumb 
          title='Contact With Us'
          linkList={breadcrumbList}
        />
        <ContactSection />
    </>
  );
}

export default Contact;
