import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Layout = ({ children }) => {
  const location = useLocation();
  const styleFunction = () => {
    switch (location.pathname) {
      case "/":
        return 200;
      case "/luxury-watches":
        return 200;
    }
  };
  return (
    <div className="layout">
      <div className="navbar-container">
        <Navbar />
      </div>
      <main
        className="app"
        style={{
          minHeight: `${styleFunction()}vh`,
        }}
      >
        {children}
      </main>
      <a className="whatsapp-button">
        <AiOutlineWhatsApp className="icon" size={80} />
      </a>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
