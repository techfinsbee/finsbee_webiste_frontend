import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = ({ dropdownData = [], COLOR, Hover, TXTCOLOR }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Insert Affiliate and Blog items after Loans
  let enhancedNavItems = [...dropdownData];
  const loansIndex = enhancedNavItems.findIndex(item => item.title === "Loans");
  
  if (loansIndex !== -1) {
// Convert the existing Loans item into a dropdown
  enhancedNavItems[loansIndex] = {
    ...enhancedNavItems[loansIndex],
    hasDropdown: true,
    dropdownItems: [
      { title: "Personal Loan", link: "loan-section-home" },
      { title: "Business Loan", link: "loan-section-home" },
      { title: "Education Loan", link: "loan-section-home" },
    ]
  };
  
  // Insert Affiliate and Blog after Loans

    enhancedNavItems.splice(loansIndex + 1, 0, 
      {
        title: "Affiliate",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "Partner With Us", link: "/partner-with-us" },
          { title: "Refer a Friend", link: "/refer-a-friend" },
        ]
      },
      {
        title: "Blog",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "View Blogs", link: "/blogs" },
        ]
      }
    );
  } else {
    enhancedNavItems.push(
      {
        title: "Affiliate",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "Partner With Us", link: "/partner-with-us" },
          { title: "Refer a Friend", link: "/refer-a-friend" },
        ]
      },
      {
        title: "Blog",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "View Blogs", link: "/blogs" },
        ]
      }
    );
  }

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
    if (sectionId === "/aboutus" || 
        sectionId === "/partner-with-us" || 
        sectionId === "/refer-a-friend" || 
        sectionId === "/blogs") {
      navigate(sectionId);
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }
    
    if (location.pathname === "/" && sectionId === "home-home") {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }
    if (location.pathname === "/home" && sectionId === '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }
    if (location.pathname === "/" && sectionId === '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }

    // If we're on aboutus page and clicking a section link, first navigate to home
    if (
      (location.pathname === "/aboutus" ||
        location.pathname === "/terms-and-conditions" ||
        location.pathname === "/faqs" ||
        location.pathname === "/privacy-policy" ||
        location.pathname === "/lending-partners" ||
        location.pathname === "/mama-calculator" ||
        location.pathname === "/mama-shoppingmall" ||
        location.pathname === "/features" ||
        location.pathname === "/testimonials" ||
        location.pathname === "/blog" ||
        location.pathname === "/sitemap" ||
        location.pathname === "/cancellation-and-refund" ||
        location.pathname === "/press-release" || 
        location.pathname === "/customer-care" ||
        location.pathname === "/partner-with-us" ||
        location.pathname === "/refer-a-friend" ||
        location.pathname === "/blogs")
    ) {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }

    // Normal section scrolling on home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  // Handle scrolling after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

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

  // Introduce delay when leaving dropdown
  const handleDropdownMouseLeave = () => {
    // Don't hide immediately - let the user have time to move to submenu
    setTimeout(() => {
      // Only hide if user hasn't moved to another dropdown item
      if (openDropdown !== null) {
        setOpenDropdown(null);
      }
    }, 2000); // 300ms delay before hiding
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDropdownMouseEnter = (index) => {
  setOpenDropdown(index); // Keep dropdown open when hovering on it
};


  return (
    <header
      className={`header-home manrope ${!isVisible ? "hidden" : ""}`}
      style={{ backgroundColor: `${COLOR ? "#fff" : "rgb(255, 252, 247)"}` }}
    >
      {/* Original Logo and Text from HomeHeader.jsx */}
      <a href="/" className="head-fund">
        <div className="flex">
          <div className="w-[100px] object-cover">
            <img
              src="/Funds.svg"
              className="logo-img lg:w-[220px] -top-6 -left-8 lg:left-4 absolute object-cover"
              alt="FUNDSMAMA"
            />
          </div>
          <span
            className="text-4xl logo-head header-fundmama flex juistify-center items-center"
            style={{
              fontWeight: "800",
              fontFamily: "Helvetica",
              color: `${TXTCOLOR ? "black" : "#163312"}`,
            }}
          >
            FUNDSMAMA
          </span>
        </div>
      </a>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button ref={burgerRef} className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Mobile Navigation */}
      {isMobile ? (
        <nav ref={menuRef} className={`nav ${isMenuOpen ? "open" : ""}`}>
          {/* Mobile Menu Content */}
          <div className="menu">
            {enhancedNavItems.map((menu, index) => (
              <div key={index}>
                {menu.hasDropdown ? (
                  <div className="border-b border-gray-100">
                    <div 
                      className="menu-title"
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      {menu.title}
                      <ChevronDown 
                        className={`inline-block ml-1 h-4 w-4 transition-transform ${
                          openDropdown === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                    
                    {openDropdown === index && (
                      <div className="bg-gray-50">
                        {menu.dropdownItems.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="menu-title"
                            onClick={() => scrollToSection(subItem.link)}
                          >
                            {subItem.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="menu-title"
                    onClick={() => scrollToSection(menu.link)}
                  >
                    {menu.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      ) : (
        /* Desktop Navigation */
        <nav
          ref={menuRef}
          className={`nav ${isMobile ? (isMenuOpen ? "open" : "closed") : ""}`}
        >
          {enhancedNavItems.map((item, index) => (
            <div 
              className="nav-item-home dropdown" 
              key={index} 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div
                className="content"
                onClick={() => {
                  if (!item.hasDropdown) {
                    scrollToSection(item.link);
                  }
                }}
                aria-haspopup={item.hasDropdown ? "true" : "false"}
                aria-expanded={openDropdown === index}
              >
                <span className="Items">{item.title}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`inline-block ml-1 h-4 w-4 transition-transform ${
                      openDropdown === index ? 'transform rotate-180' : ''
                    }`}
                  />
                )}
              </div>
              
              {/* Dropdown Menu with Better Hover Behavior */}
              {item.hasDropdown && openDropdown === index && (
                <div 
                  className="dropdown-menu" 
                  style={{
                    opacity: 1, 
                    visibility: 'visible', 
                    transform: 'translateY(0)',
                    zIndex: 99999
                  }}
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <div 
                      key={subIndex}
                      className="dropdown-item"
                      onClick={() => scrollToSection(subItem.link)}
                    >
                      {subItem.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;