import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const ContactDetails = ({}: Props) => {
  return (
    <div>
      <h2 className="text-2xl mb-6">
        Let's Have some chat about what you need. I got your back!
      </h2>
      <div className="contact-items">
        <FontAwesomeIcon icon={faPhone} className="text-xl" />
        <span>+8801685116294</span>
      </div>
      <div className="contact-items">
        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        <span>shoaib.akhter.shifat@gmail.com</span>
      </div>
      <div className="contact-items">
        <FontAwesomeIcon icon={faHouse} className="text-xl" />
        <span>Dhaka, Bangladesh</span>
      </div>
    </div>
  );
};

export default ContactDetails;
