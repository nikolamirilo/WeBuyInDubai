import React from "react";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { AiOutlineMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiChrome } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const { contactSection } = useGlobalState();
  const { width } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="call-us">
        <BsTelephone className="icon" size={25} color="#f4a950" />
        <a href="tel: +957">+957 676 9012</a>
      </div>
      <div className="website">
        <FiChrome size={25} className="icon" />
        <Link to="/">WeBuyInDubai.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
