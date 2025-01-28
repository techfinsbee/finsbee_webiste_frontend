import React, { useState, useEffect, useRef } from "react";
import "./Header.component.css";

const dropdownData = [
  {
    title: "Home",
    link: "home"
  },
  {
    title: "Loans",
    link: "loan-section",
  },
  {
    title: "Mart",
    link: "mart",
  },
  {
    title: "About Us",
  },
  {
    title: "Contact Us",
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [currentSubItems, setCurrentSubItems] = useState(null);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (menuIndex) => {
    setCurrentMenu(menuIndex);
    setCurrentSubItems(null);
  };

  const handleBackClick = () => {
    if (currentSubItems) {
      setCurrentSubItems(null);
    } else {
      setCurrentMenu(null);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the burger button
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        burgerRef.current && 
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile) setOpenDropdown(index);
  };

  return (
    <header className="header">
      <a href="/" className="head">
        <div className="logo">
          <img src="/logo.png" className="w-[300px] max-w-[300px]" alt="FUNDSMAMA" />
        </div>
      </a>

      {isMobile && (
        <button ref={burgerRef} className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {isMobile ? (
        <nav ref={menuRef} className={`nav ${isMenuOpen ? "open" : ""}`}>
          {currentMenu === null && !currentSubItems && (
            <div className="menu">
              {dropdownData.map((menu, index) => (
                <div
                  key={index}
                  className="menu-title"
                  onClick={() => {
                    scrollToSection(menu.link);
                  }}
                >
                  {menu.title}
                </div>
              ))}
            </div>
          )}
        </nav>
      ) : (
        <nav
          ref={menuRef}
          className={`nav ${isMobile ? (isMenuOpen ? "open" : "closed") : ""}`}
        >
          {dropdownData.map((dropdown, index) => (
            <div className="nav-item dropdown" key={index}>
              <div
                className="content"
                onClick={() => {
                  if (isMobile) {
                    setOpenDropdown(openDropdown === index ? null : index);
                  }
                  scrollToSection(dropdown.link);
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                aria-haspopup="true"
                aria-expanded={openDropdown === index}
              >
                <span className="Items">{dropdown.title}</span>
                <div
                  className={`icon w-icon-dropdown-toggle drop ${
                    openDropdown === index ? "open" : ""
                  }`}
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;