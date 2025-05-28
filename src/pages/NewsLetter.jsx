import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  // Validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

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

    // Email validation: basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
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
      istype: "inquiry",
      name: formData.name,
      email: formData.email,
      mobile: null,
      address: null,
      message: "Email subscription request",
      created_by: "0",
    };

    try {
      const response = await axios.post(
        "https://bhartiyasolar.com/solar/api/post/submit_activity_api.php",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success === true) {
        setStatus("Subscribed successfully!");
        setFormData({
          name: "",
          email: "",
        });
      } else {
        setStatus(
          `Error: ${response.data.message || "Inquiry submission failed"}`
        );
      }
    } catch (error) {
      setStatus("Error: Failed to submit inquiry. Please try again.");
      console.error("Submission error:", error);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-1490e21 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="1490e21"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-986061a"
          data-id="986061a"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-988ef82 elementor-widget elementor-widget-forms_area__o"
              data-id="988ef82"
              data-element_type="widget"
              data-widget_type="forms_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="newsletter-section">
                  <div className="auto-container">
                    <div className="big-icon">
                      <span className="flaticon-solar-panel" />
                    </div>
                    <div className="row clearfix">
                      <div className="title-column col-xl-4 col-lg-12 col-md-12">
                        <div
                          className="inner wow fadeInLeft"
                          data-wow-delay="0ms"
                          data-wow-duration="2000ms"
                        >
                          <h2>
                            We’re Dedicated To <br />
                            Build A Cleaner Future
                          </h2>
                        </div>
                      </div>
                      <div className="form-column col-xl-8 col-lg-12 col-md-12">
                        <div className="inner">
                          <div className="newsletter-form">
                            <div
                              className="wpcf7 no-js"
                              id="wpcf7-f282-p6-o1"
                              lang="en-US"
                              dir="ltr"
                            >
                              <div className="screen-reader-response">
                                <p
                                  role="status"
                                  aria-live="polite"
                                  aria-atomic="true"
                                />
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
                                    defaultValue={282}
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
                                    defaultValue="wpcf7-f282-p6-o1"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_container_post"
                                    defaultValue={6}
                                  />
                                  <input
                                    type="hidden"
                                    name="_wpcf7_posted_data_hash"
                                  />
                                </div>
                                <div className="row clearfix">
                                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <div className="field-inner">
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
                                        <label htmlFor="field-1">
                                          <span className="far fa-user" />
                                        </label>
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
                                  </div>
                                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-email"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email"
                                            id="field-2"
                                            aria-required="true"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={
                                              errors.email
                                                ? "email-error"
                                                : undefined
                                            }
                                            placeholder="Your Email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                          />
                                        </span>
                                        <label htmlFor="field-2">
                                          <span className="far fa-envelope-open" />
                                        </label>
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
                                  </div>
                                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                      <p>
                                        <button
                                          type="submit"
                                          className="theme-btn btn-style-one wpcf7-form-control wpcf7-submit"
                                        >
                                          <span className="btn-title">
                                            <span className="btn-txt">
                                              Subscribe
                                            </span>
                                            <span className="btn-icon">
                                              <span className="icon flaticon-arrows-11" />{" "}
                                            </span>
                                          </span>
                                        </button>
                                      </p>
                                    </div>
                                  </div>
                                  {status && (
                                    <div
                                      className={`form-group col-lg-12 col-md-12 col-sm-12 status-message ${
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

export default NewsLetter;
