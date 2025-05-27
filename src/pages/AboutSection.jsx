import React from "react";

const AboutSection = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .featured-list ul {
              flex-direction: column !important;
              gap: 20px !important;
              padding: 10px !important;
            }
            .featured-list li .title {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
              margin-top: 8px !important;
            }
          }
          .featured-list li .title {
            white-space: nowrap; /* Prevent text from wrapping within each line */
            line-height: 1.2; /* Adjust line height for better spacing */
            display: flex;
            flex-direction: column; /* Stack lines vertically */
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-d1cc364 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="d1cc364"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-46c1e35"
            data-id="46c1e35"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-91261e0 elementor-widget elementor-widget-about_us__o"
                data-id="91261e0"
                data-element_type="widget"
                data-widget_type="about_us__o.default"
              >
                <div className="elementor-widget-container">
                  <section className="about-section-one">
                    <div className="auto-container">
                      <div className="row clearfix">
                        {/* Text Column */}
                        <div className="text-column col-lg-6 col-md-12 col-sm-12">
                          <div className="inner">
                            <div
                              className="sec-title dark-title wow fadeInLeft left"
                              data-wow-delay="0ms"
                              data-wow-duration="1000ms"
                            >
                              <div className="upper-text">
                                BHARTIYA SOLARS OFFERS YOU
                                <span className="icon flaticon-flash" />
                              </div>
                              <h2>Complete Solar Solutions</h2>
                              <div className="subtitle">
                                Sun-Powered Solutions For Every Space.
                              </div>
                              <div className="bottom-dots clearfix">
                                <span className="dot line-dot" />
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </div>
                            </div>
                            <div className="text">
                              <p>
                                Lighting Up India with Solar Energy At Bhartiya
                                Solar, we believe in a cleaner, brighter future
                                for all. We specialize in on-grid solar panel
                                installations for both residential and
                                commercial use, helping families and businesses
                                reduce electricity bills and their carbon
                                footprint. With a commitment to quality,
                                transparency, and reliable service, we're
                                empowering communities to embrace renewable
                                energy and save money every month.
                              </p>
                              <div
                                className="text-content wow fadeInLeft animated"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms"
                              >
                                <p>
                                  Driven by a vision of cleaner energy and a
                                  greener planet, Bhartiya Solars is committed
                                  to making solar power accessible, efficient,
                                  and affordable for everyone.
                                </p>
                              </div>
                            </div>
                            <div
                              className="text-content wow fadeInLeft"
                              data-wow-delay="0ms"
                              data-wow-duration="1000ms"
                            />
                          </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                          <div className="inner">
                            <div className="image-box">
                              <figure
                                className="image wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                              >
                                <img
                                  decoding="async"
                                  src="wp-content/uploads/2020/06/featured-image-1.jpg"
                                  alt="about"
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Featured List */}
                      <div
                        className="featured-list"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          marginTop: "20px",
                        }}
                      >
                        <ul
                          className="clearfix"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            listStyle: "none",
                            padding: 0,
                            gap: "10px",
                          }}
                        >
                          <li
                            className="wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                            style={{ textAlign: "center" }}
                          >
                            <div
                              className="icon"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <i
                                aria-hidden="true"
                                className="flaticon-solar-energy"
                              />
                            </div>
                            <div className="title">
                              Save Energy
                              <br />
                              For World
                            </div>
                          </li>
                          <li
                            className="wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                            style={{ textAlign: "center" }}
                          >
                            <div
                              className="icon"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <i
                                aria-hidden="true"
                                className="flaticon-power-7"
                              />
                            </div>
                            <div className="title">
                              RESIDENTIALS <br />
                              SOLUTIONS
                            </div>
                          </li>
                          <li
                            className="wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                            style={{ textAlign: "center" }}
                          >
                            <div
                              className="icon"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <i
                                aria-hidden="true"
                                className="flaticon-forest"
                              />
                            </div>
                            <div className="title">
                              COMMERCIAL <br />
                              SOLUTIONS
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
