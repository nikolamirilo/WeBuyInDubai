import React from "react";
import { BsTelephone } from "react-icons/bs";
import { useGlobalState } from "./../../../../context/GlobalContext";

const Footer = () => {
  const { contactSection } = useGlobalState();
  const { width } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="call-us">
        <BsTelephone className="icon" size={25} color="#f4a950" />
        <a href="tel: +971 12 345 6789">+971 12 345 6789</a>
      </div>
      {/* <div className="website">
        <FiChrome size={25} className="icon" />
        <Link to="/">WeBuyInDubai.com</Link>
      </div> */}
    </footer>
  );
};

export default Footer;
