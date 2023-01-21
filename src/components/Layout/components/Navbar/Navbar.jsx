import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalState } from "./../../../../context/GlobalContext";
import logo from "../../../../assets/images/logo.png";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useGlobalState();
  const location = useLocation();
  const [isActive, setIsActive] = useState({
    home: true,
    luxuryWatches: false,
  });
  const navigate = useNavigate();
  var nav = document.querySelector(".navbar");
  const handleHamburgerClick = () => {
    if (isClicked) {
      nav.classList.remove("active");
    } else {
      nav.classList.toggle("active");
    }
  };
  const closeSidebarOnLinkClick = () => {
    if (width <= 1000) {
      setIsClicked(false);
      nav.classList.remove("active");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsActive({ home: true });
    } else if (location.pathname === "/luxury-watches") {
      setIsActive({ luxuryWatches: true });
    } else {
      setIsActive({ home: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (width <= 1000) {
      setIsActive(false);
    }
  }, []);

  console.log(isActive);

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        {width < 1000 && (
          <div
            className="hamburger"
            onClick={() => {
              handleHamburgerClick();
            }}
          >
            <GiHamburgerMenu size={40} />
          </div>
        )}

        <div className="links">
          <button
            style={{ color: isActive.home && "#f4a950" }}
            onClick={() => {
              navigate("/");
              closeSidebarOnLinkClick();
            }}
          >
            Home
          </button>
          <button
            style={{ color: isActive.luxuryWatches && "#f4a950" }}
            onClick={() => {
              navigate("/luxury-watches");
              closeSidebarOnLinkClick();
            }}
          >
            Luxury Watches
          </button>
          <div className="phone">
            <a href="tel: +957" onClick={closeSidebarOnLinkClick}>
              +957 676 9012
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
