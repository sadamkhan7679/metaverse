import React, { Fragment } from "react";
import ContactDetails from "@/src/components/Contact/ContactDetails";
import ContactForm from "@/src/components/Contact/Form";

const ContactUs = () => {
  return (
    <Fragment>
      <h1 className="contact-heading">Contact Us</h1>
      <div className="form-wrapper">
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="contact-details">
          <ContactDetails />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
