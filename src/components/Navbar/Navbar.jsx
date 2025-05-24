import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import DownloadNowButton from "../Home/DownloadNowButton.jsx";
import { Link } from "react-router-dom";

const Navbar = ({ dropdownData = [], COLOR, Hover, TXTCOLOR }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Insert Affiliate and Blog items after Our Products
  let enhancedNavItems = [...dropdownData];
  const loansIndex = enhancedNavItems.findIndex(
    (item) => item.title === "Loans"
  );

  if (loansIndex !== -1) {
    // Convert the existing Loans item into "Our Products" with nested dropdowns
    enhancedNavItems[loansIndex] = {
      ...enhancedNavItems[loansIndex],
      title: "Our Products",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Personal Loan",
          link: "personal-loan",
          hasSubDropdown: true,
          subDropdownItems: [
            { title: "Personal Loan", link: "/personal-loan" },
            { title: "Instant Loan", link: "/personal-loan" },
          ],
        },
        {
          title: "Business Loan",
          link: "business-loan",
          hasSubDropdown: true,
          subDropdownItems: [
            { title: "Business Loan", link: "/business-loan" },
            { title: "Working Capital", link: "/business-loan" },
            { title: "Invoice Discounting", link: "/business-loan" },
          ],
        },
        {
          title: "Home Loan",
          link: "home-loan",
          hasSubDropdown: true,
          subDropdownItems: [
            { title: "Home Loan", link: "/home-loan" },
            { title: "Home Loan Balance Transfer", link: "/home-loan" },
          ],
        },
        {
          title: "Loan Against Property",
          link: "loan-against-property",
          hasSubDropdown: true,
          subDropdownItems: [
            { title: "Loan Against Property", link: "/loan-against-property" },
            { title: "LAP Balance Transfer", link: "/loan-against-property" },
          ],
        },
        {
          title: "Loan Against Securities",
          link: "loan-against-securities",
          hasSubDropdown: true,
          subDropdownItems: [
            {
              title: "Loan Against Securities",
              link: "/loan-against-securities",
            },
            {
              title: "Loan Against Mutual Funds",
              link: "/loan-against-securities",
            },
            { title: "Loan Against Stocks", link: "/loan-against-securities" },
          ],
        },
        {
          title: "Check Free Credit Score",
          link: "/check-credit-score",
          hasSubDropdown: true,
          subDropdownItems: [
            { title: "Credit Score", link: "/check-credit-score" },
          ],
        },
      ],
    };

    // Insert Affiliate and Blog after Our Products
    enhancedNavItems.splice(
      loansIndex + 2,
      0,
      {
        title: "Affiliate",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "Partner With Us", link: "/partner-with-us" },
          { title: "Refer a Friend", link: "/refer-a-friend" },
        ],
      },
      {
        title: "Blog",
        link: "#",
        hasDropdown: true,
        dropdownItems: [{ title: "View Blogs", link: "/blogs" }],
      }
    );
  } else {
    enhancedNavItems.push(
      {
        title: "Our Products",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          {
            title: "Personal Loan",
            link: "personal-loan",
            hasSubDropdown: true,
            subDropdownItems: [{ title: "Instant Loan", link: "instant-loan" }],
          },
          {
            title: "Business Loan",
            link: "business-loan",
            hasSubDropdown: true,
            subDropdownItems: [
              { title: "Working Capital", link: "working-capital" },
              { title: "Invoice Discounting", link: "invoice-discounting" },
            ],
          },
          {
            title: "Home Loan",
            link: "home-loan",
            hasSubDropdown: true,
            subDropdownItems: [
              {
                title: "Home Loan Balance Transfer",
                link: "home-loan-balance-transfer",
              },
            ],
          },
          {
            title: "Loan Against Property",
            link: "loan-against-property",
            hasSubDropdown: true,
            subDropdownItems: [
              { title: "LAP Balance Transfer", link: "lap-balance-transfer" },
            ],
          },
          {
            title: "Loan Against Securities",
            link: "loan-against-securities",
            hasSubDropdown: true,
            subDropdownItems: [
              {
                title: "Loan Against Mutual Funds",
                link: "loan-against-mutual-funds",
              },
              { title: "Loan Against Stocks", link: "loan-against-stocks" },
            ],
          },
          {
            title: "Check Free Credit Score",
            link: "check-credit-score",
            hasSubDropdown: false,
          },
        ],
      },
      {
        title: "Affiliate",
        link: "#",
        hasDropdown: true,
        dropdownItems: [
          { title: "Partner With Us", link: "/partner-with-us" },
          { title: "Refer a Friend", link: "/refer-a-friend" },
        ],
      },
      {
        title: "Blog",
        link: "#",
        hasDropdown: true,
        dropdownItems: [{ title: "View Blogs", link: "/blogs" }],
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
    // Check if it's a route navigation (starts with /)
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      return;
    }

    // Handle home page navigation with scroll
    if (location.pathname === "/" && (sectionId === "home-home" || sectionId === "mart-home")) {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      return;
    }

    if (location.pathname === "/home" && sectionId === "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      return;
    }

    if (location.pathname === "/" && sectionId === "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      return;
    }

    // If we're NOT on home page and clicking a section link, navigate to home first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      return;
    }

    // Normal section scrolling on home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      console.warn(`Section with ID '${sectionId}' not found`);
    }
  };

  // Handle scrolling after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Add a small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Section with ID '${location.state.scrollTo}' not found`);
        }
        // Clear the state
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250 || window.innerHeight <= 512);
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

  const handleSubMenuMouseEnter = (subIndex) => {
    if (!isMobile) setOpenSubDropdown(subIndex);
  };

  // Introduce delay when leaving dropdown
  const handleDropdownMouseLeave = () => {
    // Don't hide immediately - let the user have time to move to submenu
    setTimeout(() => {
      // Only hide if user hasn't moved to another dropdown item
      if (openDropdown !== null) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    }, 20000); // 9s delay before hiding
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownMouseEnter = (index) => {
    setOpenDropdown(index); // Keep dropdown open when hovering on it
  };

  const handleDropDownOnClick = (index) => {
    setOpenDropdown(index); // Keep dropdown open when hovering on it
  }

  return (
    <header
      className={`header-home manrope ${!isVisible ? "hidden" : ""}`}
      style={{ backgroundColor: `${COLOR ? "#fff" : "rgb(255, 252, 247)"}` }}
    >
      <Link to="/" className="logo-container">
        <img src="/Funds.svg" className="logo" alt="FUNDSMAMA" />
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
      </Link>

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
                      className="menu-title text-black"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      {menu.title}
                      <ChevronDown
                        className={`inline-block ml-1 h-4 w-4 transition-transform ${
                          openDropdown === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>

                    {openDropdown === index && (
                      <div className="bg-gray-50">
                        {menu.dropdownItems.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            <div
                              className={`menu-title pl-4 flex items-center justify-between ${
                                subItem.hasSubDropdown ? "pr-4" : ""
                              }`}
                              onClick={() => {
                                if (subItem.hasSubDropdown) {
                                  setOpenSubDropdown(
                                    openSubDropdown === subIndex
                                      ? null
                                      : subIndex
                                  );
                                } else {
                                  scrollToSection(subItem.link);
                                }
                              }}
                            >
                              {subItem.title}
                              {subItem.hasSubDropdown && (
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${
                                    openSubDropdown === subIndex
                                      ? "transform rotate-180"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>

                            {subItem.hasSubDropdown &&
                              openSubDropdown === subIndex && (
                                <div className="bg-gray-100">
                                  {subItem.subDropdownItems.map(
                                    (subSubItem, subSubIndex) => (
                                      <div
                                        key={subSubIndex}
                                        className="menu-title pl-8"
                                        onClick={() =>
                                          scrollToSection(subSubItem.link)
                                        }
                                      >
                                        {subSubItem.title}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
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
          className={`nav ${
            isMobile ? (isMenuOpen ? "open" : "closed") : ""
          } text-3xl`}
        >
          {enhancedNavItems.map((item, index) => (
            <div
              className="nav-item-home text-black dropdown"
              key={index}
              onMouseEnter={() => handleDropdownMouseEnter(index)}
              onClick={()=>
                handleDropDownOnClick(index)
              }
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
                <span className="Items text-lg">{item.title}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`inline-block ml-1 h-4 w-4 transition-transform ${
                      openDropdown === index ? "transform rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Menu with nested submenus */}
              {item.hasDropdown && openDropdown === index && (
                <div
                  className="dropdown-menu main-dropdown"
                  style={{
                    opacity: 1,
                    visibility: "visible",
                    transform: "translateY(0)",
                    zIndex: 99999,
                    minWidth: item.title === "Our Products" ? "100%" : "100%",
                  }}
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`dropdown-item ${
                        subItem.hasSubDropdown ? "has-submenu" : ""
                      } text-lg`}
                      onClick={() => {
                        if (!subItem.hasSubDropdown) {
                          scrollToSection(subItem.link);
                        }
                      }}
                      onMouseEnter={() => handleSubMenuMouseEnter(subIndex)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{subItem.title}</span>
                        {subItem.hasSubDropdown && (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>

                      {/* Sub-submenu */}
                      {subItem.hasSubDropdown &&
                        openSubDropdown === subIndex && (
                          <div
                            className="submenu text-lg"
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "100%",
                              backgroundColor: "white",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                              borderRadius: "4px",
                              width: "300px",
                              zIndex: 100000,
                            }}
                          >
                            {subItem.subDropdownItems.map(
                              (subSubItem, subSubIndex) => (
                                <div
                                  key={subSubIndex}
                                  className="dropdown-item text-lg"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    scrollToSection(subSubItem.link);
                                  }}
                                >
                                  {subSubItem.title}
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <DownloadNowButton COLOR={COLOR} />
        </nav>
      )}

      <style jsx>{`
        .dropdown-item.has-submenu {
          position: relative;
        }

        .submenu {
          padding: 8px 0;
        }

        .main-dropdown {
          padding: 0px 0;
        }

        .dropdown-item {
          padding: 10px 16px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: #f9f9f9;
          color: #7b549c;
        }

        /* Mobile styles */
        @media (max-width: 958px) {
          .menu-title {
            padding: 12px 16px;
            border-bottom: 1px solid #eee;
            font-size: 16px;
          }

          .menu-title:active {
            background-color: #f0f0f0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;