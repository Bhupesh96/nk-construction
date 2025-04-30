import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Footer2 from "../../components/Footer2";
import $ from "jquery";

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
                    title="Go to NK Construction."
                    to="../index.html"
                    className="home"
                  >
                    <span property="name">NK Construction</span>
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
                              And For Controling Your Energy Production
                              Worldwide
                            </div>
                            <div className="bottom-dots clearfix">
                              <span className="dot line-dot" />
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </div>
                          </div>
                          <div className="text">
                            <div
                              className="text"
                              style={{ textAlign: "center" }}
                            >
                              With NK Construction's advanced solutions, you can
                              monitor your energy production across multiple
                              locations in real-time. Our systems offer you a
                              seamless way to track energy generation, ensuring
                              you have full visibility into your consumption and
                              production patterns worldwide.
                            </div>
                            <p className="text" style={{ textAlign: "center" }}>
                              Our technologies allow you to optimize energy
                              production, ensuring that every resource is used
                              effectively. By managing your energy output, you
                              can minimize waste and maximize savings, helping
                              you stay on top of your energy costs while
                              promoting sustainability.
                            </p>
                            <div
                              className="text"
                              style={{ textAlign: "center" }}
                            >
                              We believe in the power of clean, renewable
                              energy. Our solutions help you take control of
                              your energy production and make environmentally
                              conscious decisions that not only benefit your
                              operations but also contribute to a greener
                              planet.
                            </div>
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
                                      src="/wp-content/uploads/2020/06/featured-image-18.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction ensures top-tier
                                          quality through rigorous assessments,
                                          guaranteeing reliable, efficient, and
                                          long-lasting energy solutions.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Quality Assessment
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
                                      src="/wp-content/uploads/2020/06/featured-image-19.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction provides advanced
                                          energy storage solutions, enabling
                                          efficient storage of solar energy for
                                          reliable use during non-sunny hours or
                                          peak demand times.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Energy Storage
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
                                      src="/wp-content/uploads/2020/06/featured-image-20.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction specializes in
                                          renewable energy solutions, harnessing
                                          sustainable power sources like solar
                                          to reduce environmental impact and
                                          promote energy independence.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Renewable Energy
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
                                      src="/wp-content/uploads/2020/06/featured-image-21.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction specializes in the
                                          design and construction of large-scale
                                          dams, providing sustainable solutions
                                          for water management and
                                          infrastructure development.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Large Scale Dams
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
                                      src="/wp-content/uploads/2020/06/featured-image-22.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction promotes a powerful
                                          ecology by integrating sustainable
                                          practices and renewable energy
                                          solutions that support environmental
                                          preservation and reduce carbon
                                          footprints.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Powerful Ecology
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
                                      src="/wp-content/uploads/2020/06/featured-image-23.jpg"
                                      alt="services"
                                    />
                                  </figure>
                                  <div className="hover-box">
                                    <div className="hover-inner">
                                      <div className="content">
                                        <div className="text">
                                          NK Construction excels in plant
                                          construction, delivering efficient and
                                          sustainable solutions for industrial
                                          facilities, ensuring optimal
                                          performance and long-term reliability.
                                        </div>
                                        <div className="link-box">
                                          <Link
                                            target="_blank"
                                            rel="nofollow"
                                            to="#"
                                          >
                                            <span className="txt">
                                              Read More{" "}
                                            </span>{" "}
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
                                      <Link
                                        target="_blank"
                                        rel="nofollow"
                                        to="#"
                                      >
                                        Plant Construction
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
                                <Link to="tel:+1-(222)-303-4500">
                                  +1 (222) 303 4500
                                </Link>
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
                                        At NK Construction, we specialize in
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
                                        At NK Construction, we offer
                                        comprehensive preventative maintenance
                                        services designed to keep your systems
                                        running smoothly and avoid costly
                                        emergency repairs. Our expert team
                                        performs thorough inspections,
                                        identifying potential issues before they
                                        become problems, ensuring long-term
                                        efficiency and reliability. Trust us to
                                        help you maintain optimal performance
                                        and extend the lifespan of your systems.
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
                                        At NK Construction, we recommend regular
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
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-f2f4912 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="f2f4912"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0727645"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-17f7d1c elementor-widget elementor-widget-forms_area__o"
                    data-id="17f7d1c"
                    data-element_type="widget"
                    data-widget_type="forms_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="enquiry-section">
                        <div className="image-layer" />
                        <div className="auto-container">
                          <div
                            className="sec-title light-title wow fadeInLeft centered"
                            data-wow-delay="0ms"
                            data-wow-duration="1000ms"
                          >
                            <div className="upper-text">
                              WHO ARE NK Construction{" "}
                              <span className="icon flaticon-flash" />
                            </div>
                            <h2>Get Free Consultation</h2>
                            <div className="subtitle">
                              For Controling Your Energy Production
                            </div>
                            <div className="bottom-dots clearfix">
                              <span className="dot line-dot" />
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </div>
                          </div>
                          <div
                            className="content-box wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                          >
                            <div className="default-form contact-form">
                              <div
                                className="wpcf7 no-js"
                                id="wpcf7-f5-p566-o1"
                                lang="en-US"
                                dir="ltr"
                              >
                                <div className="screen-reader-response">
                                  <p
                                    role="status"
                                    aria-live="polite"
                                    aria-atomic="true"
                                  />{" "}
                                  <ul />
                                </div>
                                <form
                                  action="https://strnix.smartdemowp.com/our-services/#wpcf7-f5-p566-o1"
                                  method="post"
                                  className="wpcf7-form init"
                                  aria-label="Contact form"
                                  noValidate="novalidate"
                                  data-status="init"
                                >
                                  <div style={{ display: "none" }}>
                                    <input
                                      type="hidden"
                                      name="_wpcf7"
                                      defaultValue={5}
                                    />
                                    <input
                                      type="hidden"
                                      name="_wpcf7_version"
                                      defaultValue="5.8.3"
                                    />
                                    <input
                                      type="hidden"
                                      name="_wpcf7_locale"
                                      defaultValue="en_US"
                                    />
                                    <input
                                      type="hidden"
                                      name="_wpcf7_unit_tag"
                                      defaultValue="wpcf7-f5-p566-o1"
                                    />
                                    <input
                                      type="hidden"
                                      name="_wpcf7_container_post"
                                      defaultValue={566}
                                    />
                                    <input
                                      type="hidden"
                                      name="_wpcf7_posted_data_hash"
                                      defaultValue
                                    />
                                  </div>
                                  <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-name"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            id="field-1"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Your Name"
                                            defaultValue
                                            type="text"
                                            name="your-name"
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-email"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email"
                                            aria-invalid="false"
                                            placeholder="Email"
                                            defaultValue
                                            type="email"
                                            name="your-email"
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="phone"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Phone"
                                            defaultValue
                                            type="text"
                                            name="phone"
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 form-group">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="select-name"
                                        >
                                          <select
                                            className="wpcf7-form-control wpcf7-select custom-select-box"
                                            aria-invalid="false"
                                            name="select-name"
                                          >
                                            <option value="Subject / Discuss About Service">
                                              Subject / Discuss About Service
                                            </option>
                                            <option value="Installation">
                                              Installation
                                            </option>
                                            <option value="Maintenance">
                                              Maintenance
                                            </option>
                                            <option value="Replacement">
                                              Replacement
                                            </option>
                                          </select>
                                        </span>
                                      </p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 form-group">
                                      <p>
                                        <button
                                          type="submit"
                                          className="theme-btn btn-style-one wpcf7-form-control wpcf7-submit"
                                        >
                                          <span className="btn-title">
                                            <span className="btn-txt">
                                              Send Request
                                            </span>
                                            <span className="btn-icon">
                                              <span className="icon flaticon-arrows-11" />{" "}
                                            </span>
                                          </span>
                                        </button>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="wpcf7-response-output"
                                    aria-hidden="true"
                                  />
                                </form>
                              </div>
                            </div>
                            <div className="lower-text">
                              <div className="sub-title">
                                <span className="txt">
                                  OR IF YOU NEED QUICK ASSISTANCE
                                </span>
                              </div>
                              <div className="info">
                                Call Us 24/7 For Customer Support At{" "}
                                <span className="icon" />{" "}
                                <Link to="tel:(222)-303-4500">
                                  (222)-303-4500
                                </Link>
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
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-578f62e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="578f62e"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-efddc5b"
                data-id="efddc5b"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-11a8795 elementor-widget elementor-widget-sponsors_area__o"
                    data-id="11a8795"
                    data-element_type="widget"
                    data-widget_type="sponsors_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="sponsors-outer">
                        <div className="auto-container">
                          {/*Sponsors Carousel*/}
                          <div
                            className="sponsors-carousel strnix-carousel owl-theme owl-carousel"
                            data-options='{"loop": true, "margin": 40, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "3" } , "800":{ "items" : "3" }, "1024":{ "items" : "4" }, "1200":{ "items" : "5" }}}'
                          >
                            <div className="slide-item">
                              <figure className="image-box">
                                <Link to="#">
                                  <img
                                    decoding="async"
                                    src="#"
                                    alt="services"
                                  />
                                </Link>
                              </figure>
                            </div>
                            <div className="slide-item">
                              <figure className="image-box">
                                <Link to="#">
                                  <img
                                    decoding="async"
                                    src="#"
                                    alt="services"
                                  />
                                </Link>
                              </figure>
                            </div>
                            <div className="slide-item">
                              <figure className="image-box">
                                <Link to="#">
                                  <img
                                    decoding="async"
                                    src="#"
                                    alt="services"
                                  />
                                </Link>
                              </figure>
                            </div>
                            <div className="slide-item">
                              <figure className="image-box">
                                <Link to="#">
                                  <img
                                    decoding="async"
                                    src="#"
                                    alt="services"
                                  />
                                </Link>
                              </figure>
                            </div>
                            <div className="slide-item">
                              <figure className="image-box">
                                <Link to="#">
                                  <img
                                    decoding="async"
                                    src="#"
                                    alt="services"
                                  />
                                </Link>
                              </figure>
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
