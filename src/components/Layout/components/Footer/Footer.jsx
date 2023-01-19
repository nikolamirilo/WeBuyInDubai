import React from "react";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { AiOutlineMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  const { contactSection } = useGlobalState();
  const { width } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      {/* <div className="left-content">
        <img src={logo} alt="Logo" />
      </div> */}
      <div className="call-us">
        <BsTelephone className="icon" size={25} color="#f4a950" />
        <a href="tel: +957">+957 676 9012</a>
      </div>
      <div className="email-us">
        <AiOutlineMail className="icon" size={25} color="#f4a950" />
        <a href="mailto:webuyindubai.com@gmail.com">webuyindubai.com@gmail.com</a>
      </div>
      <div className="copyright">
        <span>&copy;</span>2023 WeBuyInDubai All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
