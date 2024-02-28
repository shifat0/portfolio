"use client";

import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

type Props = {};

const ContactMe = ({}: Props) => {
  return (
    <section
      id="contact-me"
      className="container relative mx-auto lg:w-1/2 h-screen flex flex-col items-center justify-around text-center snap-center"
    >
      <motion.h1
        initial={{ letterSpacing: 0 }}
        whileInView={{ letterSpacing: "10px" }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Contact Me
      </motion.h1>
      <div className="mx-auto flex flex-col lg:flex-row gap-10 items-center">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;
