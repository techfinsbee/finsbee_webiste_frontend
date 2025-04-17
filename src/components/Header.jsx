import React, { useState, useEffect, useRef } from "react";
import "./Header.component.css";
import { useNavigate, useLocation } from "react-router-dom";

// const dropdownData = [
//   {
//     title: "Home",
//     link: "/home",
//   },
//   {
//     title: "Loans",
//     link: "loan-section",
//   },
//   {
//     title: "Mart",
//     link: "mart",
//   },
//   {
//     title: "About Us",
//     link: "/aboutus",
//   },
//   {
//     title: "Contact Us",
//     link: "contact-us",
//   },
// ];

const Header = ({ dropdownData = [], COLOR, Hover }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [currentSubItems, setCurrentSubItems] = useState(null);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    // Check if it's the aboutus route
    if (sectionId === "/aboutus") {
      navigate(sectionId);
      setIsMenuOpen(false);
      return;
    }

    if(location.pathname === "/home/landing" && sectionId === '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }
    
    // If we're on abou-us page and clicking a section link, first navigate to home
    if (
      location.pathname === "/aboutus" ||
      location.pathname === "/terms-and-conditions" ||
      location.pathname === "/faqs" ||
      location.pathname === "/privacy-policy" ||
      location.pathname === "/lending-partners" ||
      location.pathname === "/mama-calculator" ||
      location.pathname === "/mama-shoppingmall" ||
      location.pathname === "/features" ||
      location.pathname === "/testimonials" ||
      location.pathname === "/blog" ||
      location.pathname === "/cancellation-and-refund" ||
      location.pathname === "/sitemap" ||
      location.pathname === "/press-release" ||
      (location.pathname === "/customer-care" && !sectionId.startsWith("/"))
    ) {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }


    // Normal section scrolling on home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Handle scrolling after navigation from aboutus page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Clear the state after scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location]);

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
      setIsMobile(window.innerWidth <= 958 || window.innerHeight <= 512);
    };

    const handleClickOutside = (event) => {
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
    <header
      className={`header ${!isVisible ? "hidden" : ""}`}
      style={{ backgroundColor: `${COLOR ? "#fff" : "rgb(255, 252, 247)"}` }}
    >
      <a href="/" className="head">
        <div className="flex">
          <img
            src="/Funds.svg"
            className="w-[100px] relative -top-[1vh] sm:top-0 lg:-left-[2vw] -left-[8vw] sm:-left-[6vw] w-[150px] sm:w-[150px]"
            alt="FUNDSMAMA"
          />{" "}
          <span
            className="text-4xl header-fundmama -left-[15vw] sm:-left-[5vw] relative flex juistify-center items-center"
            style={{
              fontWeight: "800",
              fontFamily: "Helvetica",
            }}
          >
            FUNDSMAMA
          </span>
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
