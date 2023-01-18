import React from "react";
import { useGlobalState } from "./../../../../context/GlobalContext";
import logo from "../../../../assets/images/logo.png";

const Footer = () => {
  const { contactSection } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="left-content">
        <img src={logo} alt="Logo" />
      </div>
      <div className="contact-us">
        <a href="tel: +957">Call us on: +957</a>
        <a href="mailto:webuyindubai.com@gmail.com">webuyindubai.com@gmail.com</a>
      </div>
      <div className="right-content">
        <p>Copyright @WeBuyInDubai 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;
