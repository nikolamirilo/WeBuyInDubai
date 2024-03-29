import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/WeBuyInDubai.webp";
import { useGlobalState } from "./../../../../context/GlobalContext";
import { phone_number } from "../../../../constants";

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
    if (width <= 600) {
      setIsActive(false);
    }
  }, []);

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
        {width < 600 && (
          <div
            className="hamburger"
            onClick={() => {
              handleHamburgerClick();
            }}
          >
            <GiHamburgerMenu className="icon" />
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
            <a href={`tel:${phone_number}`} onClick={closeSidebarOnLinkClick}>
              {phone_number}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
