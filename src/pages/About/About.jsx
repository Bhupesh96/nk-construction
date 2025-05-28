import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2";
import Footer from "../../components/Footer";
import $ from "jquery";
import Counter from "../Counter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handlePreloader = () => {
      if ($(".preloader").length) {
        $("body").addClass("page-loaded");
        $(".preloader").delay(1000).fadeOut(0);
      }
    };

    handlePreloader();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#team") {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="page-wrapper">
        <div className="preloader">
          <div className="icon" />
        </div>
        <Header />
        <div id="search-popup" className="search-popup">
          <div className="close-search theme-btn">
            <span className="flaticon-cancel" />
          </div>
          <div className="popup-inner">
            <div className="overlay-layer" />
            <div className="search-form">
              <form method="post" action="https://strnix.smartdemowp.com/">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="s"
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      value="Search Now!"
                      className="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
        <section className="page-banner page-breadcrumb">
          <div className="image-layer" />
          <div className="auto-container">
            <div className="breadcrumb-box">
              <div className="auto-container">
                <span property="itemListElement" typeof="ListItem">
                  <Link
                    property="item"
                    typeof="WebPage"
                    title="Go to Bhartiya Solars World's Energy."
                    to="/about"
                    className="home"
                  >
                    <span property="name">Where Innovation Meets</span>
                  </Link>
                  <meta property="position" content={1} />
                </span>
                →
                <span className="post post-page current-item">
                  Solar Excellence
                </span>
              </div>
            </div>
            <h1>About Bhartiya Solars</h1>
          </div>
        </section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={587}
          className="elementor elementor-587"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-909fa24 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="909fa24"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b679774"
                data-id="b679774"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-34c1342 elementor-widget elementor-widget-programs_two_area__o"
                    data-id="34c1342"
                    data-element_type="widget"
                    data-widget_type="programs_two_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="about-section-four">
                        <div className="pattern-image-left">
                          <img
                            decoding="async"
                            src="/wp-content/themes/strnix/assets/images/background/pattern-image-1.png"
                            alt="about"
                          />
                        </div>
                        <div className="pattern-image-right">
                          <img
                            decoding="async"
                            src="/wp-content/themes/strnix/assets/images/background/pattern-image-2.png"
                            alt="about"
                          />
                        </div>
                        <div className="auto-container">
                          <div className="row clearfix">
                            <div
                              className="title-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft"
                              data-wow-delay="0ms"
                              data-wow-duration="2000ms"
                            >
                              <div className="inner">
                                <div
                                  className="sec-title dark-title wow fadeInLeft left"
                                  data-wow-delay="0ms"
                                  data-wow-duration="1000ms"
                                >
                                  <div className="upper-text">
                                    OUR WORK SPEAKS FOR ITSELF
                                    <span className="icon flaticon-flash" />
                                  </div>
                                  <h2>
                                    Helping Smart Homes & Businesses With Better
                                    Integrated Solar Solutions
                                  </h2>
                                  <div className="subtitle">
                                    THINK GREEN LIVE CLEAN
                                  </div>
                                  <div className="bottom-dots clearfix">
                                    <span className="dot line-dot" />
                                    <span className="dot" />
                                    <span className="dot" />
                                    <span className="dot" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-column col-lg-7 col-md-12 col-sm-12">
                              <div
                                className="inner wow fadeInRight"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                              >
                                <div className="text-content">
                                  <p>
                                    About Bhartiya Solar At Bhartiya Solar,
                                    we're on a mission to make clean, renewable
                                    energy accessible to everyone. Based in
                                    India, we specialize in on-grid solar panel
                                    installations for both residential and
                                    commercial spaces. Our team of trained
                                    professionals delivers end-to-end
                                    solutions—from consultation and site
                                    assessment to installation and maintenance.
                                    We use only top-quality solar panels and
                                    inverters backed by long-term warranties (30
                                    years on panels and 8 years on inverters),
                                    ensuring your investment is secure for
                                    decades. With a focus on customer
                                    satisfaction, efficiency, and affordable
                                    pricing, Bhartiya Solar is your trusted
                                    partner in the journey toward sustainable
                                    energy.
                                  </p>
                                  <p>Go solar with us—and power your future.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="row clearfix">
                              <div
                                className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                              >
                                <div className="inner-box">
                                  <div className="image-box">
                                    <Link to="#">
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/poster/residential.jpg"
                                        alt="Residential Solutions"
                                      />
                                    </Link>
                                  </div>
                                  <div className="lower-box">
                                    <div className="count">00</div>
                                    <h3>
                                      <Link
                                        to="#"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        Residential Solutions
                                      </Link>
                                    </h3>
                                    <div className="text">
                                      Bhartiya Solars provides reliable
                                      residential solar solutions to lower
                                      energy costs and promote sustainable
                                      living.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                              >
                                <div className="inner-box">
                                  <div className="image-box">
                                    <Link to="#">
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/poster/ground.jpeg"
                                        alt="Solar Thermal Systems"
                                        style={{ height: "259px" }}
                                      />
                                    </Link>
                                  </div>
                                  <div className="lower-box">
                                    <div className="count">01</div>
                                    <h3>
                                      <Link
                                        to="#"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        Residential And Commercial Ground
                                        Mounting
                                      </Link>
                                    </h3>
                                    <div className="text">
                                      Bhartiya Solars provides efficient solar
                                      solutions for residential and commercial
                                      ground mounting, offering easy
                                      installation, high durability, and optimal
                                      energy generation.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="default-block col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                              >
                                <div className="inner-box">
                                  <div className="image-box">
                                    <Link to="#">
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/poster/commercial.jpg"
                                        alt="Commercial Solutions"
                                      />
                                    </Link>
                                  </div>
                                  <div className="lower-box">
                                    <div className="count">02</div>
                                    <h3>
                                      <Link
                                        to="#"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        Commercial Solutions
                                      </Link>
                                    </h3>
                                    <div className="text">
                                      Bhartiya Solars offers tailored commercial
                                      solar solutions that reduce energy costs,
                                      improve sustainability, and enhance
                                      long-term profitability for businesses.
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
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-df45e06 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="df45e06"
            data-element_type="section"
            data-settings='{"stretch_section":"section-stretched"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba2527c"
                data-id="ba2527c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-f61c952 elementor-widget elementor-widget-project_area__o"
                    data-id="f61c952"
                    data-element_type="widget"
                    data-widget_type="project_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="projects-section-three">
                        <div className="outer-container clearfix">
                          <div className="text-column clearfix">
                            <div className="bg-layer" />
                            <div className="inner clearfix">
                              <div
                                className="content wow fadeInLeft"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                              >
                                <div className="title">
                                  <div className="sub-title">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-fan"
                                    />
                                    Projects For World
                                  </div>
                                  <h2>Works That Matters</h2>
                                </div>
                                <div className="text">
                                  At Bhartiya Solars, we focus on projects that
                                  drive positive change and sustainable growth.
                                  Our innovative solutions aim to create a
                                  lasting impact on communities and the
                                  environment. We are committed to delivering
                                  results that matter for a better future.
                                </div>
                                <div className="features">
                                  <ul>
                                    <li>
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-wrench"
                                      />
                                      Flexible Cost-Effective Solutions
                                    </li>
                                    <li>
                                      <i
                                        aria-hidden="true"
                                        className="far fa-star-half"
                                      />
                                      Produce Innovative Design Futuristic
                                      Blades
                                    </li>
                                    <li>
                                      <i
                                        aria-hidden="true"
                                        className="flaticon-world"
                                      />
                                      We Tailored For Specific Client’s Needs
                                    </li>
                                  </ul>
                                </div>
                                <div className="links-box">
                                  <Link
                                    rel="nofollow"
                                    to="/services"
                                    className="theme-btn btn-style-one"
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
                          </div>
                          <div className="image-column clearfix">
                            <div className="inner clearfix">
                              <div className="text-over-block">
                                <div className="inner-box">
                                  <div
                                    className="block-image-layer"
                                    style={{
                                      backgroundImage:
                                        "url(/wp-content/uploads/2020/06/bg-image-15.jpg)",
                                    }}
                                  />
                                  <div className="title">
                                    <i
                                      aria-hidden="true"
                                      className="flaticon-solar-panel"
                                    />
                                    <span className="txt">our Mission</span>
                                  </div>
                                  <div className="overlay">
                                    <div className="over-inner">
                                      <div className="icon-box">
                                        <i
                                          aria-hidden="true"
                                          className="flaticon-solar-panel"
                                        />
                                      </div>
                                      <h3>
                                        <Link to="#">our Mission</Link>
                                      </h3>
                                      <div className="text">
                                        To make clean, affordable solar energy
                                        accessible to every home and business.
                                        We aim to empower communities with
                                        sustainable power solutions that reduce
                                        costs and carbon footprints.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-over-block">
                                <div className="inner-box">
                                  <div
                                    className="block-image-layer"
                                    style={{
                                      backgroundImage:
                                        "url(/wp-content/uploads/2020/06/bg-image-16.jpg)",
                                    }}
                                  />
                                  <div className="title">
                                    <i
                                      aria-hidden="true"
                                      className="flaticon-dam"
                                    />
                                    <span className="txt">INNOVATION</span>
                                  </div>
                                  <div className="overlay">
                                    <div className="over-inner">
                                      <div className="icon-box">
                                        <i
                                          aria-hidden="true"
                                          className="flaticon-dam"
                                        />
                                      </div>
                                      <h3>
                                        <Link to="#">INNOVATION</Link>
                                      </h3>
                                      <div className="text">
                                        We use advanced technology and smart
                                        design to deliver efficient,
                                        future-ready solar systems. Our
                                        solutions are tailored, scalable, and
                                        built for long-term performance.
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
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-d17bb0a elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="d17bb0a"
            data-element_type="section"
            data-settings='{"stretch_section":"section-stretched"}'
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f6ab3f7"
                data-id="f6ab3f7"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-2466d80 elementor-widget elementor-widget-team_area__o"
                    data-id="2466d80"
                    data-element_type="widget"
                    data-widget_type="team_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="team-section" id="team">
                        <div className="auto-container">
                          <div className="title-box clearfix">
                            <div className="sec-title left hydro-theme">
                              <div
                                className="upper-text"
                                style={
                                  windowWidth >= 768
                                    ? { marginRight: "157px" }
                                    : {}
                                }
                              >
                                Offering Great Job With Good Hands
                              </div>
                              <h2>Dedicated Team Members</h2>
                              <div className="bottom-dots clearfix">
                                <span className="dot line-dot" />
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </div>
                            </div>
                          </div>
                          <div className="row clearfix">
                            <div
                              className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
                              data-wow-delay="0ms"
                              data-wow-duration="1500ms"
                              style={{
                                visibility: "visible",
                                animationDuration: "1500ms",
                                animationDelay: "0ms",
                                animationName: "fadeInUp",
                              }}
                            >
                              <div className="inner-box">
                                <div className="image-box">
                                  <div className="image">
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/Team/Chandrashekhar.jpeg"
                                        alt="Chandrashekhar Chandrakar"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <a
                                          href="https://www.instagram.com/chandrashekharchandrakar?igsh=aXhxY3hwaGdpMG94"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-instagram" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://www.facebook.com/share/14quDEtBJR/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-facebook-f" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lower-box">
                                  <h3>
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      Chandrashekhar Chandrakar
                                    </Link>
                                  </h3>
                                  <div className="info">CEO | Founder</div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
                              data-wow-delay="0ms"
                              data-wow-duration="1500ms"
                              style={{
                                visibility: "visible",
                                animationDuration: "1500ms",
                                animationDelay: "0ms",
                                animationName: "fadeInUp",
                              }}
                            >
                              <div className="inner-box">
                                <div className="image-box">
                                  <div className="image">
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/Team/Nagesh_kaushik.jpeg"
                                        alt="Nagesh Kaushik"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <a
                                          href="https://www.facebook.com/share/1L6C35n8Nj/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-facebook-f" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lower-box">
                                  <h3>
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      Nagesh Kaushik
                                    </Link>
                                  </h3>
                                  <div className="info">CEO | Founder</div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
                              data-wow-delay="0ms"
                              data-wow-duration="1500ms"
                              style={{
                                visibility: "visible",
                                animationDuration: "1500ms",
                                animationDelay: "0ms",
                                animationName: "fadeInUp",
                              }}
                            >
                              <div className="inner-box">
                                <div className="image-box">
                                  <div className="image">
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/Team/Arun_Patel.jpeg"
                                        alt="Arun Patel"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <a
                                          href="https://www.facebook.com/share/1JEqZZbvaQ/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-facebook-f" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lower-box">
                                  <h3>
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      Arun Patel
                                    </Link>
                                  </h3>
                                  <div className="info">Marketing Manager</div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
                              data-wow-delay="0ms"
                              data-wow-duration="1500ms"
                              style={{
                                visibility: "visible",
                                animationDuration: "1500ms",
                                animationDelay: "0ms",
                                animationName: "fadeInUp",
                              }}
                            >
                              <div className="inner-box">
                                <div className="image-box">
                                  <div className="image">
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <img
                                        decoding="async"
                                        src="/wp-content/uploads/Team/Sajal.jpeg"
                                        alt="Sajal Kashyap"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <a
                                          href="https://www.instagram.com/sajal.kashyap._/profilecard/?igsh=ODQ2NHNlM2dxMnN6"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-instagram" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://www.facebook.com/share/16ZzXfa81u/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <span className="fab fa-facebook-f" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lower-box">
                                  <h3>
                                    <Link
                                      to="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      Sajal Kashyap
                                    </Link>
                                  </h3>
                                  <div className="info">Marketing Manager</div>
                                </div>
                              </div>
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
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-2cd52a2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="2cd52a2"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-85d9fdf"
                data-id="85d9fdf"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-04e29bb elementor-widget elementor-widget-counter_area__o"
                    data-id="04e29bb"
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
        </div>
        <Footer />
        <Footer2 />
      </div>
      <link
        rel="stylesheet"
        id="elementor-post-360-css"
        href="/wp-content/uploads/elementor/css/post-36060e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-351-css"
        href="/wp-content/uploads/elementor/css/post-35160e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-brands-css"
        href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min52d5.css?ver=5.15.3"
        type="text/css"
        media="all"
      />
    </div>
  );
};

export default About;
