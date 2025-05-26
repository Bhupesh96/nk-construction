import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      data-elementor-type="page"
      data-elementor-id={351}
      className="elementor elementor-351"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-9d701f3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="9d701f3"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-09c04ac"
            data-id="09c04ac"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4f0f27b elementor-widget elementor-widget-brand_info_area__o"
                data-id="4f0f27b"
                data-element_type="widget"
                data-widget_type="brand_info_area__o.default"
              >
                <div className="elementor-widget-container">
                  <div className="main-footer footer-style-one">
                    <div className="upper-section">
                      <div className="auto-container">
                        <div
                          className="outer clearfix"
                          style={{ justifyContent: "center", display: "flex" }}
                        >
                          <div className="service-block-two">
                            <div className="inner-box">
                              <div className="icon-box">
                                <i
                                  aria-hidden="true"
                                  className="flaticon-renewable-energy"
                                />
                              </div>
                              <div className="service-title">
                                <Link to="#">Energy Efficiency Solutions</Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-block-two">
                            <div className="inner-box">
                              <div className="icon-box">
                                <i
                                  aria-hidden="true"
                                  className="flaticon-power-7"
                                />
                              </div>
                              <div className="service-title">
                                <Link to="#">Solar panel Commissioning</Link>
                              </div>
                            </div>
                          </div>
                          <div className="service-block-two logo-block">
                            <div className="inner-box">
                              <div className="logo">
                                <Link to="#">
                                  <img
                                    src="wp-content/themes/strnix/assets/images/logo-nob.PNG"
                                    alt="footer"
                                  />
                                </Link>
                              </div>
                              <div className="social-links">
                                <ul className="clearfix">
                                  <li>
                                    <Link to="#">
                                      <span className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span className="fab fa-linkedin-in" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span className="fab fa-pinterest-p" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <div className="service-block-two">
                            <div className="inner-box">
                              <div className="icon-box">
                                <i
                                  aria-hidden="true"
                                  className="flaticon-car-battery"
                                />
                              </div>
                              <div className="service-title">
                                <Link to="#">
                                  Battery backup <br />
                                  Generator
                                </Link>
                              </div>
                            </div>
                          </div> */}
                          <div className="service-block-two">
                            <div className="inner-box">
                              <div className="icon-box">
                                <i
                                  aria-hidden="true"
                                  className="flaticon-solar-energy-2"
                                />
                              </div>
                              <div className="service-title">
                                <Link to="#">Whole House Surge Protection</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
