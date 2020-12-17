import React from "react";
import { ContactMap } from "./ContactFunction";
export default function Map() {
  return (
    <ContactMap
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92292.22685224366!2d-79.45578512972212!3d43.707803959716614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29970262ead54e3e!2sShawarma%20Q!5e0!3m2!1sen!2sca!4v1608168912441!5m2!1sen!2sca"
      allowFullscreen
      style={{ frameborder: "0" }}
    />
  );
}
