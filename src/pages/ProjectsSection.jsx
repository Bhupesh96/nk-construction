import { Link } from "react-router-dom";
import Counter from "./Counter";

const ProjectsSection = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c20ff2a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="c20ff2a"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b8b3a4a"
          data-id="b8b3a4a"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-6719b4d elementor-widget elementor-widget-react_project_area__o"
              data-id="6719b4d"
              data-element_type="widget"
              data-widget_type="react_project_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="recent-projects">
                  <div className="bg-pattern-layer" />
                  <div className="auto-container">
                    <div className="row clearfix">
                      {/*Title Column*/}
                      <div className="title-column col-lg-5 col-md-12 col-sm-12">
                        <div
                          className="inner wow fadeInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                        >
                          <div
                            className="sec-title dark-title wow fadeInLeft left"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms"
                          >
                            <div className="upper-text">
                              SUNLIGHT TO SAVINGS - SEE OUR SUCCEEDS
                              <span className="icon flaticon-flash" />
                            </div>
                            <h2>Trusted By Families Chosen By Businesses</h2>
                            <div className="subtitle">
                              Projects That Shine With Excellence
                            </div>
                            <div className="bottom-dots clearfix">
                              <span className="dot line-dot" />
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </div>
                          </div>
                          <div className="text">
                            Our successful solar installations across homes and
                            businesses. From rooftop systems to commercial
                            setups, each project reflects our commitment to
                            quality, efficiency, and clean energy
                          </div>
                          <div className="links-box">
                            <Link
                              to="/services"
                              rel="nofollow"
                              className="theme-btn btn-style-two"
                            >
                              <div className="btn-title">
                                <span className="btn-txt">
                                  View All Services
                                </span>
                                <span className="btn-icon">
                                  <span className="icon flaticon-arrows-11" />
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*Image Column*/}
                      <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div
                          className="inner wow fadeInRight"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                        >
                          {/*Tabs Box*/}
                          <div className="tabs-box recent-proj-tabs">
                            <div className="buttons-box">
                              <ul
                                className="tab-buttons"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  width: "100%",
                                  margin: 0,
                                  padding: 0,
                                  listStyle: "none",
                                }}
                              >
                                <li
                                  className="tab-btn active-btn"
                                  data-tab="#tab-0"
                                  style={{
                                    width: "50%",
                                    boxSizing: "border-box",
                                    margin: 0,
                                    padding: "10px",
                                    textAlign: "center",
                                  }}
                                >
                                  <span className="btn-title">Commercial</span>
                                  <span className="info">Installation</span>
                                </li>
                                <li
                                  className="tab-btn"
                                  data-tab="#tab-1"
                                  style={{
                                    width: "50%",
                                    boxSizing: "border-box",
                                    margin: 0,
                                    padding: "10px",
                                    textAlign: "center",
                                  }}
                                >
                                  <span className="btn-title">RESIDENTIAL</span>
                                  <span className="info">INSTALLATION</span>
                                </li>
                              </ul>
                            </div>
                            <div className="tabs-content">
                              <div className="tab active-tab" id="tab-0">
                                <div className="tab-inner">
                                  <figure className="image">
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/poster/commercial.jpg"
                                      alt="program"
                                    />
                                  </figure>
                                  <div className="cat-info">COMMERCIAL</div>
                                </div>
                              </div>
                              <div className="tab" id="tab-1">
                                <div className="tab-inner">
                                  <figure className="image">
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/poster/residential.jpg"
                                      alt="program"
                                    />
                                  </figure>
                                  <div className="cat-info">RESIDENTIAL</div>
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
            </div>
            <div
              className="elementor-element elementor-element-baec2b8 elementor-widget elementor-widget-counter_area__o"
              data-id="baec2b8"
              data-element_type="widget"
              data-widget_type="counter_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="fun-facts-section">
                  <div className="bg-pattern-layer" />
                  <div className="fact-counter">
                    <div className="auto-container">
                      <Counter />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
