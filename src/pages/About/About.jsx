import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer2";
import Footer from "../../components/Footer";
import $ from "jquery";
import NewsLetter from "../NewsLetter";
import Counter from "../Counter";
const About = () => {
  useEffect(() => {
    const handlePreloader = () => {
      if ($(".preloader").length) {
        $("body").addClass("page-loaded");
        $(".preloader").delay(1000).fadeOut(0);
      }
    };

    // Trigger preloader logic on mount
    handlePreloader();
  }, []);
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
                      defaultValue
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      defaultValue="Search Now!"
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
                {/* Breadcrumb NavXT 7.2.0 */}
                <span property="itemListElement" typeof="ListItem">
                  <Link
                    property="item"
                    typeof="WebPage"
                    title="Go to Bhartiya Solars World's Energy."
                    to="/index.html"
                    className="home"
                  >
                    <span property="name">Bhartiya Solars World's Energy</span>
                  </Link>
                  <meta property="position" content={1} />
                </span>
                →
                <span className="post post-page current-item">
                  About Bhartiya Solars
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
                            {/*Title Column*/}
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
                            {/*Text Column*/}
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
                                    professionals delivers end-toend
                                    solutions-from consultation and site
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
                                  <p>Go solar with us-and power your future.</p>
                                </div>
                                <div className="signature">Tunders daumoty</div>
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
                                        src="/wp-content/uploads/2020/06/featured-image-32.jpg"
                                        alt="about"
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
                                        src="/wp-content/uploads/2020/06/featured-image-33.jpg"
                                        alt="about"
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
                                        Solar Thermal Systems
                                      </Link>
                                    </h3>
                                    <div className="text">
                                      Bhartiya Solars provides solar thermal
                                      systems that efficiently harness sunlight
                                      for water and space heating.
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
                                        src="/wp-content/uploads/2020/06/featured-image-34.jpg"
                                        alt="about"
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
                                    target="_blank"
                                    rel="nofollow"
                                    to="#"
                                    className="theme-btn btn-style-one"
                                  >
                                    <div className="btn-title">
                                      <span className="btn-txt">
                                        View All Works
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
                          {/*Image Column*/}
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
                                        Aenean volutpa sem sit amet ullamcorper
                                        grav datortor arcu molestie risusut
                                        bibendum urna enim nulla. Pellentesque
                                        porta arc velit faucibus kodales dolor
                                        rhoncus curabitur lacinia sed massa
                                        vitae efficitur.
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
                                        Aenean volutpa sem sit amet ullamcorper
                                        grav datortor arcu molestie risusut
                                        bibendum urna enim nulla. Pellentesque
                                        porta arc velit faucibus kodales dolor
                                        rhoncus curabitur lacinia sed massa
                                        vitae efficitur.
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
            className="elementor-section elementor-top-section elementor-element elementor-element-c67e741 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="c67e741"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fb25c17"
                data-id="fb25c17"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-39ebbe0 elementor-widget elementor-widget-history_area__o"
                    data-id="39ebbe0"
                    data-element_type="widget"
                    data-widget_type="history_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="history-section">
                        <div className="auto-container">
                          <div
                            className="sec-title dark-title wow fadeInLeft centered"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms"
                          >
                            <div className="upper-text">
                              Bhartiya Solars IS IMPORTANT
                              <span className="icon flaticon-flash" />
                            </div>
                            <h2>Bhartiya Solars Company History</h2>
                            <div className="subtitle">
                              Bhartiya Solars Company History
                            </div>
                            <div className="bottom-dots clearfix">
                              <span className="dot line-dot" />
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </div>
                          </div>
                          <div className="carousel-box">
                            <div
                              className="history-carousel strnix-carousel owl-theme owl-carousel"
                              data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "2" }, "800":{ "items" : "2" }, "1024":{ "items" : "3" }, "1200":{ "items" : "4" }}}'
                            >
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2015</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    got best tech award
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2018</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    Features &amp; add-ons
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2019</div>
                                  <div className="round-dot" />
                                  <div className="title">Temtaris daspo</div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2019</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    narid aspolas kola
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2015</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    got best tech award
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2018</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    Features &amp; add-ons
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2019</div>
                                  <div className="round-dot" />
                                  <div className="title">Temtaris daspo</div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
                                  </div>
                                </div>
                              </div>
                              <div className="slide">
                                <div className="history-block">
                                  <div className="date">2019</div>
                                  <div className="round-dot" />
                                  <div className="title">
                                    narid aspolas kola
                                  </div>
                                  <div className="text">
                                    Pellentesque porta arcu velit faucibs
                                    kodales dolor rhoncus sed. Curabitur lacinia
                                    masysa vitae sed.
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
          <NewsLetter />
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
                      <section className="team-section">
                        <div className="auto-container">
                          <div className="title-box clearfix">
                            <div className="sec-title left hydro-theme">
                              <div className="upper-text">
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
                            <div className="link-box">
                              <Link target="_blank" rel="nofollow" to="#">
                                <span className="txt">View All Team</span>
                                <span className="icon flaticon-arrows-11" />
                              </Link>
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
                                        alt="about"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-twitter" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-instagram" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-linkedin-in" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-facebook-f" />
                                        </Link>
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
                                        alt="about"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-twitter" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-instagram" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-linkedin-in" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-facebook-f" />
                                        </Link>
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
                                      NAGESH KAUSHIK
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
                                        alt="about"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-twitter" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-instagram" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-linkedin-in" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-facebook-f" />
                                        </Link>
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
                                      ARUN PATEL
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
                                        alt="about"
                                      />
                                    </Link>
                                  </div>
                                  <div className="social-links">
                                    <ul>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-twitter" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-instagram" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-linkedin-in" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="void(0.html">
                                          <span className="fab fa-facebook-f" />
                                        </Link>
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
                                      SAJAL KASHYAP
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
        to="/wp-content/uploads/elementor/css/post-36060e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-351-css"
        to="/wp-content/uploads/elementor/css/post-35160e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-brands-css"
        to="/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min52d5.css?ver=5.15.3"
        type="text/css"
        media="all"
      />
    </div>
  );
};

export default About;
