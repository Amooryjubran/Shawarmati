import React from "react";
import emailjs from "emailjs-com";
import {
  ContactContainer,
  ContactWrapperTop,
  ContactWrapperBottom,
  ContactForm,
  ContactInput,
  ContactH1,
  ContactTextArea,
  ContactButton,
} from "./ContactFunction";
import Map from "./Map";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_h92cjiq",
        e.target,
        "user_1qyFrsMoxFY3BJL4QfPw2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <ContactWrapperTop />
      <ContactH1>Contact Us</ContactH1>
      <ContactContainer>
        <Map />
        <ContactForm onSubmit={sendEmail}>
          <contactLabel name="number">Full Name</contactLabel>
          <ContactInput type="text" name="name" placeholder="Full Name" />
          <contactLabel>Email</contactLabel>
          <ContactInput
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <contactLabel>Message</contactLabel>
          <ContactTextArea
            name="message"
            placeholder="Type..."
          />

          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </ContactContainer>
      <ContactWrapperBottom />
    </>
  );
}

export default ContactUs