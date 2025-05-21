import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import $ from "jquery";
import SupportSection from "../SupportSection";
import ServiceList from "./ServiceList";

const Services = () => {
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
        <section className="page-banner page-breadcrumb ">
          <div className="image-layer" />
          <div className="auto-container">
            <div className="breadcrumb-box">
              <div className="auto-container">
                {/* Breadcrumb NavXT 7.2.0 */}
                <span property="itemListElement" typeof="ListItem">
                  <Link
                    property="item"
                    typeof="WebPage"
                    title="Go to NK Solars."
                    to="../index.html"
                    className="home"
                  >
                    <span property="name">NK Solars</span>
                  </Link>
                  <meta property="position" content={1} />
                </span>{" "}
                →{" "}
                <span className="post post-page current-item">
                  Our Services
                </span>{" "}
              </div>
            </div>
            <h1>Our Services</h1>
          </div>
        </section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={566}
          className="elementor elementor-566"
        >
          {/* List of services */}
          <ServiceList />
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-e5ec640 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="e5ec640"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6fdb0a9"
                data-id="6fdb0a9"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-b946d66 elementor-widget elementor-widget-services_area__o"
                    data-id="b946d66"
                    data-element_type="widget"
                    data-widget_type="services_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="services-section-one">
                        <div
                          className="pattern-image-left paroller"
                          data-paroller-factor="-0.4"
                          data-paroller-factor-lg="-0.4"
                          data-paroller-factor-md="-0.2"
                          data-paroller-factor-sm="-0.2"
                          data-paroller-type="foreground"
                          data-paroller-direction="vertical"
                        >
                          <img
                            decoding="async"
                            src="/wp-content/themes/strnix/assets/images/background/pattern-image-1.png"
                            alt="services"
                          />
                        </div>
                        <div
                          className="pattern-image-right paroller"
                          data-paroller-factor="-0.3"
                          data-paroller-factor-lg="-0.3"
                          data-paroller-factor-md="0.2"
                          data-paroller-factor-sm="0.2"
                          data-paroller-type="foreground"
                          data-paroller-direction="vertical"
                        >
                          <img
                            decoding="async"
                            src="/wp-content/themes/strnix/assets/images/background/pattern-image-2.png"
                            alt="services"
                          />
                        </div>
                        <div className="auto-container">
                          <div className="services">
                            <div className="service-block">
                              <div className="row clearfix">
                                <div className="image-column col-lg-5 col-md-6 col-sm-12">
                                  <div
                                    className="inner wow fadeInLeft"
                                    data-wow-delay="0ms"
                                    data-wow-duration="2000ms"
                                  >
                                    <div className="image">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2020/06/featured-image-3.jpg"
                                        alt="service"
                                      />
                                    </div>
                                    <div className="icon-box">
                                      <i
                                        aria-hidden="true"
                                        className="flaticon-power-7"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="text-column col-lg-7 col-md-6 col-sm-12">
                                  <div className="inner clearfix">
                                    <div
                                      className="content wow fadeInRight"
                                      data-wow-delay="0ms"
                                      data-wow-duration="2000ms"
                                    >
                                      <div className="title">
                                        <h2>
                                          <span>Solar Panels Installation</span>
                                        </h2>
                                        <div className="sub-text">
                                          WITH MOST SUNLIGHT CONVERSION
                                          EFFICIENCY
                                        </div>
                                      </div>
                                      <div className="text">
                                        At NK Solars, we specialize in
                                        installing high-efficiency solar panels
                                        that maximize sunlight conversion to
                                        help you reduce energy costs and
                                        contribute to a greener planet. Our
                                        expert team ensures a seamless
                                        installation process, providing
                                        reliable, long-lasting solutions that
                                        harness the full potential of solar
                                        energy. From start to finish, we
                                        prioritize quality, sustainability, and
                                        customer satisfaction.
                                      </div>
                                      <div className="link-box">
                                        <Link
                                          href="http://asasas.com/"
                                          target="_blank"
                                          rel="nofollow"
                                        >
                                          <span className="txt">
                                            GET STARTED
                                          </span>
                                          <span className="icon flaticon-arrows-11" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="service-block">
                              <div className="row clearfix">
                                <div className="text-column col-lg-7 col-md-6 col-sm-12">
                                  <div className="inner clearfix">
                                    <div
                                      className="content wow fadeInRight"
                                      data-wow-delay="0ms"
                                      data-wow-duration="2000ms"
                                    >
                                      <div className="title">
                                        <h2>
                                          <span>
                                            The Preventative Maintenance
                                          </span>
                                        </h2>
                                        <div className="sub-text">
                                          INSPECTION TO PREVENT EMERGENCY REPAIR
                                        </div>
                                      </div>
                                      <div className="text">
                                        At NK Solars, we offer comprehensive
                                        preventative maintenance services
                                        designed to keep your systems running
                                        smoothly and avoid costly emergency
                                        repairs. Our expert team performs
                                        thorough inspections, identifying
                                        potential issues before they become
                                        problems, ensuring long-term efficiency
                                        and reliability. Trust us to help you
                                        maintain optimal performance and extend
                                        the lifespan of your systems.
                                      </div>
                                      <div className="link-box">
                                        <Link
                                          href="http://asasas.com/"
                                          target="_blank"
                                          rel="nofollow"
                                        >
                                          <span className="txt">
                                            GET STARTED
                                          </span>
                                          <span className="icon flaticon-arrows-11" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="image-column col-lg-5 col-md-6 col-sm-12">
                                  <div
                                    className="inner wow fadeInLeft"
                                    data-wow-delay="0ms"
                                    data-wow-duration="2000ms"
                                  >
                                    <div className="image">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2020/06/featured-image-4.jpg"
                                        alt="service"
                                      />
                                    </div>
                                    <div className="icon-box">
                                      <i
                                        aria-hidden="true"
                                        className="flaticon-power-1"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="service-block">
                              <div className="row clearfix">
                                <div className="image-column col-lg-5 col-md-6 col-sm-12">
                                  <div
                                    className="inner wow fadeInLeft"
                                    data-wow-delay="0ms"
                                    data-wow-duration="2000ms"
                                  >
                                    <div className="image">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2020/06/featured-image-5.jpg"
                                        alt="service"
                                      />
                                    </div>
                                    <div className="icon-box">
                                      <i
                                        aria-hidden="true"
                                        className="flaticon-energy-1"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="text-column col-lg-7 col-md-6 col-sm-12">
                                  <div className="inner clearfix">
                                    <div
                                      className="content wow fadeInRight"
                                      data-wow-delay="0ms"
                                      data-wow-duration="2000ms"
                                    >
                                      <div className="title">
                                        <h2>
                                          <span>Upgrade Or Replacement</span>
                                        </h2>
                                        <div className="sub-text">
                                          GET YOUR PANELS IN GOOD SHAPE
                                          REGULARLY
                                        </div>
                                      </div>
                                      <div className="text">
                                        At NK Solars, we recommend regular
                                        maintenance to keep your solar panels
                                        operating at their peak efficiency. Our
                                        team ensures your panels remain clean,
                                        free from damage, and optimized for
                                        maximum energy production. Regular
                                        upkeep not only extends the lifespan of
                                        your system but also helps you achieve
                                        consistent, reliable performance
                                        year-round.
                                      </div>
                                      <div className="link-box">
                                        <Link
                                          href="http://asasas.com/"
                                          target="_blank"
                                          rel="nofollow"
                                        >
                                          <span className="txt">
                                            GET STARTED
                                          </span>
                                          <span className="icon flaticon-arrows-11" />
                                        </Link>
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
          <SupportSection />
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-9431280 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id={9431280}
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-496c3eb"
                data-id="496c3eb"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-47b8d13 elementor-widget elementor-widget-review_area__o"
                    data-id="47b8d13"
                    data-element_type="widget"
                    data-widget_type="review_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="testimonial-section-three">
                        <div className="auto-container">
                          <div className="sec-title centered hydro-theme">
                            <div className="upper-text">
                              For Controling Your Energy Production
                            </div>
                            <h2>What Clients Saying</h2>
                            <div className="bottom-dots clearfix">
                              <span className="dot line-dot" />
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </div>
                          </div>
                          <div className="content-box">
                            <div
                              className="history-carousel strnix-carousel owl-theme owl-carousel"
                              data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "1" }, "800":{ "items" : "1" }, "1024":{ "items" : "1" }}}'
                            >
                              <div className="slide-item">
                                <div className="inner">
                                  <div className="testi-thumb">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/author-thumb-6.jpg"
                                      alt="services"
                                    />
                                    <span className="quote-icon left flaticon-blocks-with-angled-cuts" />
                                    <span className="quote-icon right flaticon-straight-quotes" />
                                  </div>
                                  <div className="content">
                                    <div className="text">
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea comod duis aute
                                      irure dolor reprehenderit velit esse
                                      cillum dolore fugiat ipsum nulla pariatur
                                      eaxcepteur sint occaecat cupidatat non
                                      proident sunt in culpa enim ad minim
                                      veniam, quis nostrud exercitation ullamco
                                      laboris aliquip.
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span>Camron White</span>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-item">
                                <div className="inner">
                                  <div className="testi-thumb">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/author-thumb-6.jpg"
                                      alt="services"
                                    />
                                    <span className="quote-icon left flaticon-blocks-with-angled-cuts" />
                                    <span className="quote-icon right flaticon-straight-quotes" />
                                  </div>
                                  <div className="content">
                                    <div className="text">
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea comod duis aute
                                      irure dolor reprehenderit velit esse
                                      cillum dolore fugiat ipsum nulla pariatur
                                      eaxcepteur sint occaecat cupidatat non
                                      proident sunt in culpa enim ad minim
                                      veniam, quis nostrud exercitation ullamco
                                      laboris aliquip.
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span>Camron White</span>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-item">
                                <div className="inner">
                                  <div className="testi-thumb">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/author-thumb-6.jpg"
                                      alt="services"
                                    />
                                    <span className="quote-icon left flaticon-blocks-with-angled-cuts" />
                                    <span className="quote-icon right flaticon-straight-quotes" />
                                  </div>
                                  <div className="content">
                                    <div className="text">
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea comod duis aute
                                      irure dolor reprehenderit velit esse
                                      cillum dolore fugiat ipsum nulla pariatur
                                      eaxcepteur sint occaecat cupidatat non
                                      proident sunt in culpa enim ad minim
                                      veniam, quis nostrud exercitation ullamco
                                      laboris aliquip.
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span>Camron White</span>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-item">
                                <div className="inner">
                                  <div className="testi-thumb">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/author-thumb-6.jpg"
                                      alt="services"
                                    />
                                    <span className="quote-icon left flaticon-blocks-with-angled-cuts" />
                                    <span className="quote-icon right flaticon-straight-quotes" />
                                  </div>
                                  <div className="content">
                                    <div className="text">
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea comod duis aute
                                      irure dolor reprehenderit velit esse
                                      cillum dolore fugiat ipsum nulla pariatur
                                      eaxcepteur sint occaecat cupidatat non
                                      proident sunt in culpa enim ad minim
                                      veniam, quis nostrud exercitation ullamco
                                      laboris aliquip.
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span>Camron White</span>
                                  </div>
                                </div>
                              </div>
                              <div className="slide-item">
                                <div className="inner">
                                  <div className="testi-thumb">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/author-thumb-6.jpg"
                                      alt="services"
                                    />
                                    <span className="quote-icon left flaticon-blocks-with-angled-cuts" />
                                    <span className="quote-icon right flaticon-straight-quotes" />
                                  </div>
                                  <div className="content">
                                    <div className="text">
                                      Quis nostrud exercitation ullamco laboris
                                      nisi ut aliquip ex ea comod duis aute
                                      irure dolor reprehenderit velit esse
                                      cillum dolore fugiat ipsum nulla pariatur
                                      eaxcepteur sint occaecat cupidatat non
                                      proident sunt in culpa enim ad minim
                                      veniam, quis nostrud exercitation ullamco
                                      laboris aliquip.
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span>Camron White</span>
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
        </div>
        <Footer />
        <Footer2 />
      </div>
      <link
        rel="stylesheet"
        id="elementor-post-360-css"
        to="../wp-content/uploads/elementor/css/post-36060e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-351-css"
        to="../wp-content/uploads/elementor/css/post-35160e4.css?ver=1724841869"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-shared-0-css"
        to="../wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min52d5.css?ver=5.15.3"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-fa-brands-css"
        to="../wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min52d5.css?ver=5.15.3"
        type="text/css"
        media="all"
      />
    </div>
  );
};

export default Services;
