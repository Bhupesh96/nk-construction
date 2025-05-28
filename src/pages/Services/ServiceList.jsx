import { Link } from "react-router-dom";

const ServiceList = () => {
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://rjtechx.fun/solar/api/?api=getservicelist")
  //       .then((response) => {
  //         console.log(response.data);
  //         setServices(response.data.Response.List);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching service list:", error);
  //       });
  //   }, []);
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a79323c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="a79323c"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c3eeb5c"
          data-id="c3eeb5c"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-7531802 elementor-widget elementor-widget-services_area__o"
              data-id={7531802}
              data-element_type="widget"
              data-widget_type="services_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="services-section-four">
                  <div className="auto-container">
                    <div
                      className="sec-title dark-title wow fadeInLeft centered"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <h2>A Smarter Way Of Solving The Challenges</h2>
                      <div className="subtitle">
                        And For Controling Your Energy Production Smartly
                      </div>
                      <div className="bottom-dots clearfix">
                        <span className="dot line-dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                    </div>
                    <div className="text">
                      <div className="text" style={{ textAlign: "center" }}>
                        At Bhartiya Solar, we provide end-to-end solar energy
                        solutions designed to meet your unique power needs.
                        Whether you're a homeowner, a business, or an
                        organization, our expert team ensures a smooth
                        transition to clean, cost-saving solar energy. From
                        consultation and system design to installation and
                        maintenance-we handle everything with precision and
                        care.
                      </div>
                      {/* <p className="text" style={{ textAlign: "center" }}>
                        Our technologies allow you to optimize energy
                        production, ensuring that every resource is used
                        effectively. By managing your energy output, you can
                        minimize waste and maximize savings, helping you stay on
                        top of your energy costs while promoting sustainability.
                      </p>
                      <div className="text" style={{ textAlign: "center" }}>
                        We believe in the power of clean, renewable energy. Our
                        solutions help you take control of your energy
                        production and make environmentally conscious decisions
                        that not only benefit your operations but also
                        contribute to a greener planet.
                      </div> */}
                      <div>&nbsp;</div>
                      <div>&nbsp;</div>
                      <div>&nbsp;</div>
                    </div>
                    <div className="row clearfix">
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/assesment.jpeg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars ensures top-tier quality
                                    through rigorous assessments, guaranteeing
                                    reliable, efficient, and long-lasting energy
                                    solutions.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  Solar & Site Assessment
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/installation.jpg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars provides advanced energy
                                    storage solutions, enabling efficient
                                    storage of solar energy for reliable use
                                    during non-sunny hours or peak demand times.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  On-Grid Solar Panel Installation
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/inverter.jpeg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars specializes in renewable
                                    energy solutions, harnessing sustainable
                                    power sources like solar to reduce
                                    environmental impact and promote energy
                                    independence.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  Inverter Installation & Configuration
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/monitoring.jpeg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars specializes in the design
                                    and construction of large-scale dams,
                                    providing sustainable solutions for water
                                    management and infrastructure development.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  System Monitoring & Mobile App Setup
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/loan.jpeg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars promotes a powerful ecology
                                    by integrating sustainable practices and
                                    renewable energy solutions that support
                                    environmental preservation and reduce carbon
                                    footprints.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  Government Subsidy & Loan Assistance
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="service-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="2000ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                decoding="async"
                                src="/wp-content/uploads/poster/upgrade-service.jpeg"
                                alt="services"
                              />
                            </figure>
                            <div className="hover-box">
                              <div className="hover-inner">
                                <div className="content">
                                  <div className="text">
                                    Bhartiya Solars excels in plant
                                    construction, delivering efficient and
                                    sustainable solutions for industrial
                                    facilities, ensuring optimal performance and
                                    long-term reliability.
                                  </div>
                                  <div className="link-box">
                                    <Link rel="nofollow" to="#">
                                      <span className="txt">Read More </span>{" "}
                                      <span className="icon flaticon-arrows-11" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="title-inner">
                              <div className="icon">
                                <span className="flaticon-settings" />
                              </div>
                              <h3>
                                <Link rel="nofollow" to="#">
                                  Old System Upgrade & Expansion
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bottom-text wow fadeInUp"
                      data-wow-delay="500ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="text">
                        We’re Renewable Energy Generation Compant - Need
                        Emergency Help? <br />
                        Call or email us 24/7 support team at{" "}
                        <span className="phone">
                          <Link to="tel:+919713311719">+919713311719</Link>
                        </span>
                      </div>
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

export default ServiceList;
