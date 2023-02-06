import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import wha_logo from "../../assets/images/wha-logo.webp";
const Footer = React.lazy(() => import("./components/Footer/Footer.jsx"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar.jsx"));

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
        <Suspense fallback="">
          <Navbar />
        </Suspense>
      </div>
      <main
        className="app"
        style={{
          minHeight: `${styleFunction()}vh`,
        }}
      >
        {children}
      </main>
      <ReactWhatsapp className="whatsapp-button" number="+971-58-592-1070">
        <img src={wha_logo} alt="Whatsapp" />
      </ReactWhatsapp>
      <div className="footer-container">
        <Suspense fallback="">
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
