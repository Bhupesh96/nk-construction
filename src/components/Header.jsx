import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  useEffect(() => {
    const setupMobileNav = () => {
      // Clone menu
      const mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").html(mobileMenuContent);
      $(".sticky-header .main-menu").html(mobileMenuContent);

      // Dropdown toggle
      $(".mobile-menu li.dropdown .dropdown-btn")
        .off("click")
        .on("click", function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        });

      $(".mobile-menu li.menu-item-has-children .dropdown-btn")
        .off("click")
        .on("click", function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        });

      // Open mobile menu
      $(".mobile-nav-toggler")
        .off("click")
        .on("click", function () {
          $("body").addClass("mobile-menu-visible");
        });

      // Close mobile menu
      $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn")
        .off("click")
        .on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });
    };

    setupMobileNav();
  }, []);

  return (
    <>
      <style>
        {`
          .top-text {
            animation: colorBlink 3s infinite;
          }
          @keyframes colorBlink {
            0% { color: #ffffff; } /* White */
            20% { color: #ff4d4d; } /* Red */
            40% { color: #4dff4d; } /* Green */
            60% { color: #4d4dff; } /* Blue */
            80% { color: #ffff4d; } /* Yellow */
            100% { color: #ffffff; } /* Back to White */
          }
        `}
      </style>
      <header className="main-header header-style-one off">
        <div className="header-top header-top-one">
          <div className="auto-container">
            <div className="inner clearfix">
              <div className="top-left clearfix">
                <div className="top-text">Get upto ₹ 78000 Subsidy</div>
              </div>
              <div className="top-right clearfix">
                <div className="email">
                  <a href="mailto:info@bhartiyasolar.in">
                    Email: info@bhartiyasolar.in
                  </a>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <a
                      href="https://www.facebook.com/share/16ZzXfa81u/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sajal.kashyap._/profilecard/?igsh=ODQ2NHNlM2dxMnN6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main-box">
          <div className="auto-container">
            <div className="inner-container">
              <div className="upper-row clearfix">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="Bhartiya Solar_logo-website_01.png"
                        alt="Logo"
                        style={{
                          width: "200px",
                          height: "45px",
                          marginTop: "12px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="right-info clearfix">
                  <div className="info clearfix">
                    <div className="info-block">
                      <div className="icon-box">
                        <span className="icon">
                          <img
                            src="wp-content/uploads/2020/06/phone.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <strong> Mon to Sun: 8:00 AM - 9:00 PM </strong>
                      <div className="info-text">+919713311719</div>
                    </div>
                    <div className="info-block">
                      <div className="icon-box">
                        <span className="icon">
                          <img
                            src="wp-content/uploads/2020/06/cooment.svg"
                            alt=""
                          />
                        </span>
                      </div>
                      <strong> Mon to Sun: 8:00 AM - 9:00 PM </strong>
                      <div className="info-text">+919713311719</div>
                    </div>
                  </div>
                  <div className="link-box">
                    <Link to="/contact" className="theme-btn btn-style-one">
                      <div className="btn-title">
                        <span className="btn-txt">Free Consultation</span>
                        <span className="btn-icon">
                          <span className="icon flaticon-arrows-11" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lower-row">
                <div className="nav-box clearfix">
                  <div className="nav-outer clearfix">
                    <div className="mobile-nav-toggler">
                      <span className="icon flaticon-menu-1" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                      >
                        <NavigationMenu />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <Link to="/">
                <img
                  src="Bhartiya Solar_logo_website.svg"
                  alt="Logo"
                  style={{ width: "200px", height: "50px" }}
                />
              </Link>
            </div>
            <div className="pull-right">
              <nav className="main-menu clearfix">
                <NavigationMenu />
              </nav>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon flaticon-cancel" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img
                  src="Bhartiya Solar_logo-website_white.png"
                  alt="Logo"
                  style={{ width: "200px", height: "50px", background: "" }}
                />
              </Link>
            </div>
            <div className="menu-outer">
              <NavigationMenu />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
