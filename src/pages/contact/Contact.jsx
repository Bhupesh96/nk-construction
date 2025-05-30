import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import $ from "jquery";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation: letters and spaces only, min 2 characters
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name =
        "Name must contain only letters and spaces (min 2 characters)";
      isValid = false;
    }

    // Email validation: valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation: non-empty
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors for the field being edited
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const payload = {
      istype: "contact",
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      address: formData.address,
      message: formData.message,
      created_by: "1",
    };

    console.log("Payload:", payload); // Log payload for debugging

    try {
      const response = await fetch(
        "https://bhartiyasolar.com/solar/api/post/submit_activity_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success === true) {
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${result.message || "Submission failed"}`);
      }
    } catch (error) {
      setStatus(
        `Error: ${error.message || "Failed to submit form. Please try again."}`
      );
      console.error("Submission error details:", {
        message: error.message,
        response: error.response,
        status: error.status,
      });
    }
  };

  useEffect(() => {
    // Handle preloader
    const handlePreloader = () => {
      if ($(".preloader").length) {
        $("body").addClass("page-loaded");
        $(".preloader").delay(1000).fadeOut(0);
      }
    };
    handlePreloader();

    // Clear status message after 3 seconds
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="page-template page-template-elementor_header_footer page page-id-555 elementor-default elementor-template-full-width elementor-kit-722 elementor-page elementor-page-555">
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
            <div className="search-form"></div>
          </div>
        </div>
        <section className="page-banner">
          <div className="image-layer" />
          <div className="auto-container">
            <div className="breadcrumb-box">
              <div className="auto-container">
                <span property="itemListElement" typeof="ListItem">
                  <a
                    property="item"
                    typeof="WebPage"
                    title="Go to Bhartiya."
                    href="/"
                    className="home"
                  >
                    <span property="name">
                      "Let's Bring Solar to Your Home or Business."-We're Just a
                      Call Away."
                    </span>
                  </a>
                  <meta property="position" content={1} />
                </span>{" "}
                →{" "}
                <span className="post post-page current-item">
                  Get In Touch
                </span>{" "}
              </div>
            </div>
            <h1>Get In Touch</h1>
          </div>
        </section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={555}
          className="elementor elementor-555"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-bb71240 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="bb71240"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-967f6a5"
                data-id="967f6a5"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-e68f919 elementor-widget elementor-widget-contact_us_one"
                    data-id="e68f919"
                    data-element_type="widget"
                    data-widget_type="contact_us_one.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="contact-section contact-page">
                        <div className="auto-container">
                          <div className="info-blocks">
                            <div className="row clearfix">
                              <div
                                className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                                style={{
                                  visibility: "visible",
                                  animationDuration: "2000ms",
                                  animationDelay: "0ms",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <div className="inner">
                                  <div className="icon">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/location.svg"
                                      alt="contact"
                                      style={{ height: "55px" }}
                                    />
                                  </div>
                                  <strong>Visit The Office</strong>
                                  <ul className="info">
                                    <ul>
                                      <li>
                                        NK constructions,Main road, Bagbahra
                                        493449
                                      </li>
                                    </ul>{" "}
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                                style={{
                                  visibility: "visible",
                                  animationDuration: "2000ms",
                                  animationDelay: "0ms",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <div className="inner">
                                  <div className="icon">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/icon-call-1.png"
                                      alt="contact"
                                    />
                                  </div>
                                  <strong>Phone Inquiry</strong>
                                  <ul className="info">
                                    <li>
                                      <Link to="tel:+919111337351">
                                        +919111337351
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="tel:+919713311719">
                                        +919713311719
                                      </Link>
                                    </li>{" "}
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="info-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                                data-wow-delay="0ms"
                                data-wow-duration="2000ms"
                                style={{
                                  visibility: "visible",
                                  animationDuration: "2000ms",
                                  animationDelay: "0ms",
                                  animationName: "fadeInUp",
                                }}
                              >
                                <div className="inner">
                                  <div className="icon">
                                    <img
                                      decoding="async"
                                      src="/wp-content/uploads/2020/06/icon-mail-1.png"
                                      alt="contact"
                                    />
                                  </div>
                                  <strong>Send Email</strong>
                                  <ul className="info">
                                    <li>
                                      <div className="email">
                                        <a href="mailto:info@bhartiyasolar.in">
                                          Email: info@bhartiyasolar.in
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="email">
                                        <a href="mailto:support@bhartiyasolar.in">
                                          Email: support@bhartiyasolar.in
                                        </a>
                                      </div>
                                    </li>{" "}
                                  </ul>
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
            className="elementor-section elementor-top-section elementor-element elementor-element-76b5d9c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="76b5d9c"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a984f0b"
                data-id="a984f0b"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-4dd4812 elementor-widget elementor-widget-forms_area__o"
                    data-id="4dd4812"
                    data-element_type="widget"
                    data-widget_type="forms_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <section className="contact-section">
                        <div className="map-image-layer" />
                        <div className="auto-container">
                          <div
                            className="content-box clearfix wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                          >
                            <div className="form-box clearfix">
                              <div
                                className="sec-title light-title wow fadeInLeft left"
                                data-wow-delay="0ms"
                                data-wow-duration="1000ms"
                              >
                                <h2>
                                  Don’t Hesitate To <br />
                                  Contact Us
                                </h2>
                                <div className="bottom-dots clearfix">
                                  <span className="dot line-dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                </div>
                              </div>
                              <div className="default-form contact-form">
                                <div
                                  className="wpcf7 no-js"
                                  id="wpcf7-f443-p555-o1"
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
                                    onSubmit={handleSubmit}
                                    className="wpcf7-form init"
                                    aria-label="Contact form"
                                    noValidate="novalidate"
                                    data-status="init"
                                  >
                                    <div style={{ display: "none" }}>
                                      <input
                                        type="hidden"
                                        name="_wpcf7"
                                        defaultValue={443}
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
                                        defaultValue="wpcf7-f443-p555-o1"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_container_post"
                                        defaultValue={555}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_posted_data_hash"
                                      />
                                    </div>
                                    <div className="row clearfix">
                                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="your-name"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                              id="name-field"
                                              aria-required="true"
                                              aria-invalid={!!errors.name}
                                              aria-describedby={
                                                errors.name
                                                  ? "name-error"
                                                  : undefined
                                              }
                                              placeholder="Your Name"
                                              type="text"
                                              name="name"
                                              value={formData.name}
                                              onChange={handleChange}
                                              required
                                            />
                                          </span>
                                          {errors.name && (
                                            <span
                                              id="name-error"
                                              className="error-message"
                                              style={{
                                                color: "#ffffff",
                                                fontSize: "14px",
                                                marginTop: "5px",
                                                display: "block",
                                                backgroundColor: "#721c24",
                                                padding: "5px",
                                                borderRadius: "3px",
                                              }}
                                            >
                                              {errors.name}
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="mobile"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-text"
                                              aria-invalid="false"
                                              placeholder="Mobile"
                                              type="tel"
                                              name="mobile"
                                              value={formData.mobile}
                                              onChange={handleChange}
                                            />
                                          </span>
                                        </p>
                                      </div>
                                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="email"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email"
                                              id="email-field"
                                              aria-required="true"
                                              aria-invalid={!!errors.email}
                                              aria-describedby={
                                                errors.email
                                                  ? "email-error"
                                                  : undefined
                                              }
                                              placeholder="Email"
                                              type="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleChange}
                                              required
                                            />
                                          </span>
                                          {errors.email && (
                                            <span
                                              id="email-error"
                                              className="error-message"
                                              style={{
                                                color: "#ffffff",
                                                fontSize: "14px",
                                                marginTop: "5px",
                                                display: "block",
                                                backgroundColor: "#721c24",
                                                padding: "5px",
                                                borderRadius: "3px",
                                              }}
                                            >
                                              {errors.email}
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="address"
                                          >
                                            <input
                                              size={40}
                                              className="wpcf7-form-control wpcf7-text"
                                              aria-invalid="false"
                                              placeholder="Address"
                                              type="text"
                                              name="address"
                                              value={formData.address}
                                              onChange={handleChange}
                                            />
                                          </span>
                                        </p>
                                      </div>
                                      <div className="col-md-12 col-sm-12 form-group">
                                        <p>
                                          <span
                                            className="wpcf7-form-control-wrap"
                                            data-name="message"
                                          >
                                            <textarea
                                              cols={40}
                                              rows={10}
                                              className="wpcf7-form-control wpcf7-textarea"
                                              id="message-field"
                                              aria-required="true"
                                              aria-invalid={!!errors.message}
                                              aria-describedby={
                                                errors.message
                                                  ? "message-error"
                                                  : undefined
                                              }
                                              placeholder="Message"
                                              name="message"
                                              value={formData.message}
                                              onChange={handleChange}
                                              required
                                            />
                                          </span>
                                          {errors.message && (
                                            <span
                                              id="message-error"
                                              className="error-message"
                                              style={{
                                                color: "#ffffff",
                                                fontSize: "14px",
                                                marginTop: "5px",
                                                display: "block",
                                                backgroundColor: "#721c24",
                                                padding: "5px",
                                                borderRadius: "3px",
                                              }}
                                            >
                                              {errors.message}
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                      <div className="col-md-12 col-sm-12 form-group">
                                        <p>
                                          <button
                                            type="submit"
                                            className="theme-btn btn-style-eight"
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
                                      {status && (
                                        <div
                                          className={`col-md-12 col-sm-12 form-group status-message ${
                                            status.includes("Error")
                                              ? "error"
                                              : "success"
                                          }`}
                                          style={{
                                            marginTop: "20px",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            backgroundColor: status.includes(
                                              "Error"
                                            )
                                              ? "#f8d7da"
                                              : "#d4edda",
                                            color: status.includes("Error")
                                              ? "#721c24"
                                              : "#155724",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {status}
                                        </div>
                                      )}
                                    </div>
                                    <div
                                      className="wpcf7-response-output"
                                      aria-hidden="true"
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="image-layer">
                              <div
                                className="info-box wow fadeInUp"
                                data-wow-delay="1000ms"
                                data-wow-duration="1000ms"
                              >
                                <div className="subtitle">
                                  Call Us 24/7 For Support
                                </div>
                                <div className="phone">
                                  <span className="icon">
                                    <img
                                      decoding="async"
                                      src="/wp-content/themes/strnix/assets/images/icons/icon-call-1.png"
                                      alt="contact"
                                    />
                                  </span>
                                  <Link to="tel:+919713311719">
                                    +919713311719
                                  </Link>{" "}
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
            className="elementor-section elementor-top-section elementor-element elementor-element-4b939be elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="4b939be"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-416e3f9"
                data-id="416e3f9"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-5309e0b elementor-widget elementor-widget-html"
                    data-id="5309e0b"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div
                      className="elementor-widget-container"
                      style={{ marginTop: "50px" }}
                    >
                      <iframe
                        title="Ganesg Agro Agency"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.569634214982!2d82.37829617503208!3d21.049899280604702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26051ae896b875%3A0x42fccbe5d3e48444!2sGanesh%20Agro%20Agency%20%26%20Borewells!5e0!3m2!1sen!2sin!4v1748423347257!5m2!1sen!2sin"
                        width={600}
                        height={650}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          data-elementor-type="page"
          data-elementor-id={672}
          className="elementor elementor-672"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-0ce2313 main-footer footer-style-five elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="0ce2313"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-31a5d25 widgets-section"
                data-id="31a5d25"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-2b24049 elementor-widget elementor-widget-site_info"
                    data-id="2b24049"
                    data-element_type="widget"
                    data-widget_type="site_info.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="footer-column">
                        <div className="footer-widget about-widget">
                          <div className="footer-logo-box">
                            <a href="/" title="Bhartiya Solar">
                              <img
                                src="Bhartiya Solar_logo-website_white.png"
                                alt="Logo"
                                style={{
                                  width: "250px",
                                  height: "60px",
                                  background: "",
                                }}
                              />
                            </a>
                          </div>
                          <div className="about-text">
                            At Bhartiya Solar, we provide reliable and
                            affordable solar panel installation services for
                            homes and businesses. With expert guidance and
                            quality products, we help you save on electricity
                            bills and embrace clean energy.
                          </div>
                          <div
                            className="footer-social"
                            style={{ marginLeft: "20px" }}
                          >
                            <ul className="footer-social-two clearfix">
                              <li>
                                <a
                                  href="https://www.facebook.com/share/16ZzXfa81u/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow Sajal Kashyap on Facebook"
                                >
                                  <i
                                    aria-hidden="true"
                                    className="fab fa-facebook-f"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/sajal.kashyap._/profilecard/?igsh=ODQ2NHNlM2dxMnN6"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow Sajal Kashyap on Instagram"
                                >
                                  <i
                                    aria-hidden="true"
                                    className="fab fa-instagram"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-583d776 widgets-section"
                data-id="583d776"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-8108bc8 elementor-widget elementor-widget-menu_area__o"
                    data-id="8108bc8"
                    data-element_type="widget"
                    data-widget_type="menu_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="footer-column">
                        <div className="footer-widget links-widget">
                          <div className="widget-title">
                            <h3>Quick Links</h3>
                          </div>
                          <div className="widget-content">
                            <ul>
                              <li>
                                <Link to="/contact" rel="nofollow">
                                  Contact{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/about" rel="nofollow">
                                  About Bhartiya Solars{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  Services{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/about#team" rel="nofollow">
                                  Meet Our Team{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-468a35f widgets-section"
                data-id="468a35f"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-5d5b297 elementor-widget elementor-widget-menu_area__o"
                    data-id="5d5b297"
                    data-element_type="widget"
                    data-widget_type="menu_area__o.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="footer-column">
                        <div className="footer-widget links-widget">
                          <div className="widget-title">
                            <h3>Our Services</h3>
                          </div>
                          <div className="widget-content">
                            <ul>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  Installation & Monitoring{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  After Sales Service{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  Free Replacemrnt{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  Warrenty Claims{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/services" rel="nofollow">
                                  Energy Equipments{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e00fc10 widgets-section"
                data-id="e00fc10"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-97a09e3 elementor-widget elementor-widget-contact_info"
                    data-id="97a09e3"
                    data-element_type="widget"
                    data-widget_type="contact_info.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="footer-column">
                        <div className="footer-widget info-widget">
                          <div className="widget-title">
                            <h3>Contact Us</h3>
                          </div>
                          <div className="info">
                            <div className="info-block">
                              <div className="icon-box">
                                <span className="icon">
                                  <img
                                    src="/wp-content/uploads/2020/06/location.svg"
                                    alt="contact"
                                  />
                                </span>
                              </div>
                              <strong>Visit The Office</strong>
                              <div className="info-text">
                                NK constructions,Main road, Bagbahra 493449
                              </div>
                            </div>
                            <div className="info-block">
                              <div className="icon-box">
                                <span className="icon">
                                  <img
                                    src="/wp-content/uploads/2020/06/icon-call-1.png"
                                    alt="contact"
                                  />
                                </span>
                              </div>
                              <strong>Phone Inquiry</strong>
                              <div className="info-text">
                                <Link to="tel:+919713311719">
                                  +919713311719
                                </Link>
                              </div>
                            </div>
                            <div className="info-block">
                              <div className="icon-box">
                                <span className="icon">
                                  <img
                                    src="/wp-content/uploads/2020/06/icon-mail-1.png"
                                    alt="contact"
                                  />
                                </span>
                              </div>
                              <strong>Send Email</strong>
                              <div className="info-text">
                                <div className="email">
                                  <a href="mailto:info@bhartiyasolar.in">
                                    Email: info@bhartiyasolar.in
                                  </a>
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
        <footer
          className="main-footer footer-style-five"
          style={{ paddingBottom: "60px" }}
        >
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner">
                <div
                  className="scroll-top-footer scroll-to-target"
                  onClick={() => {
                    document
                      .querySelector("html")
                      .scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className="flaticon-arrows"></span>
                </div>
                <div className="copyright">
                  © Copyright 2025 By <a href="/">Bhartiya Solar</a>
                </div>
                <div className="footer-nav">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    {/* <li>
                      <Link to="/sitemap">Sitemap</Link>
                    </li> */}
                    <li>
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <link
        rel="stylesheet"
        id="elementor-post-672-css"
        href="/wp-content/uploads/elementor/css/post-6728b39.css?ver=1724908252"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-icons-shared-0-css"
        href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min52d5.css?ver=5.15.3"
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

export default Contact;
