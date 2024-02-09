import React from "react";
import { BsTelephone } from "react-icons/bs";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { phone_number } from "../../../../constants";

const Footer = () => {
  const { contactSection } = useGlobalState();
  const { width } = useGlobalState();
  return (
    <footer className="footer" ref={contactSection}>
      <div className="call-us">
        <BsTelephone className="icon" size={25} color="#f4a950" />
        <a href={`tel:${phone_number}`}>{phone_number}</a>
      </div>
      {/* <div className="website">
        <FiChrome size={25} className="icon" />
        <Link to="/">WeBuyInDubai.com</Link>
      </div> */}
    </footer>
  );
};

export default Footer;
