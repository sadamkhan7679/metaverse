import React from "react";
import { MdPhoneInTalk, MdEmail, MdLocationOn } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div>
      <h2 className="form-subheading">Contact details</h2>
      <p className="contact-details-text">
        We&apos;re committed to helping you in any way we can. Leave us a note
        and we&apos;ll get in touch with you shortly.
      </p>

      <div className="contact-detail-item">
        <MdPhoneInTalk className="icon" />
        <p>+44 (0)20 7071 8888</p>
      </div>
      <div className="contact-detail-item">
        <MdEmail className="icon" />
        <p>marketing@theparadox.studio</p>
      </div>
      <div className="contact-detail-item">
        <MdLocationOn className="icon" />
        <p>Paradox Studios LTD 57 Tenter Road Northampton NN3 6AX England</p>
      </div>
    </div>
  );
};

export default ContactDetails;
