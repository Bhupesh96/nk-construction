import React, { useEffect } from "react";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import $ from "jquery";
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
    <header className="main-header header-style-one off">
      <div className="header-top header-top-one">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="top-left clearfix">
              <div className="top-text">The Nagy saving for us</div>
            </div>
            <div className="top-right clearfix">
              <div className="email">
                <a href="mailto:example@email.com">Email: example@email.com</a>
              </div>

              <ul className="social-links clearfix">
                <li>
                  <Link to="/">
                    <span className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-pinterest-p" />
                  </Link>
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
                  <Link to="index.html">
                    <img src="wp-content/uploads/2020/06/logo.svg" alt="Logo" />
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
                    <strong> Mon to Fri: 0800 - 1900 </strong>
                    <div className="info-text">+1-(222)-303-4500</div>
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
                    <strong> Mon to Fri: 0800 - 1900 </strong>
                    <div className="info-text">+1-(222)-303-4500</div>
                  </div>
                </div>
                <div className="link-box">
                  <a
                    href="get-in-touch/index.html"
                    className="theme-btn btn-style-one"
                  >
                    <div className="btn-title">
                      <span className="btn-txt">Free Consultation</span>
                      <span className="btn-icon">
                        <span className="icon flaticon-arrows-11" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lower-row">
              {/*Nav Box*/}
              <div className="nav-box clearfix">
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
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
      {/*End Header Upper*/}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/*Logo*/}
          <div className="logo pull-left">
            <Link to="index.html">
              <img
                src="wp-content/themes/strnix/assets/images/sticky-logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          {/*Right Col*/}
          <div className="pull-right">
            {/* Main Menu */}
            <nav className="main-menu clearfix">
              <NavigationMenu />
            </nav>
            {/* Main Menu End*/}
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
            <Link to="index.html">
              <img src="wp-content/uploads/2020/06/logo-3.png" alt="logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <NavigationMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
