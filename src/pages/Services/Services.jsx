import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import $ from "jquery";
import SupportSection from "../SupportSection";
import ServiceList from "./ServiceList";
import OurServices from "../OurServices";
import ClientSection from "../ClientSection";

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
                    title="Go to Bhartiya Solars."
                    to="/services"
                    className="home"
                  >
                    <span property="name">Our Services</span>
                  </Link>
                  <meta property="position" content={1} />
                </span>{" "}
                →{" "}
                <span className="post post-page current-item">
                  Your Solar Solution
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
          <OurServices />
          <SupportSection />
          <ClientSection />
          {/* <section
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
          </section> */}
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
