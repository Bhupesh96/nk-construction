import React, { useState, useEffect } from "react";
import axios from "axios";

const SupportSection = () => {
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

    // Subject (message) validation: must not be empty or default placeholder
    if (
      !formData.message ||
      formData.message === "Subject / Discuss About Service"
    ) {
      newErrors.message = "Please select a subject";
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
        setStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${response.data.message || "Submission failed"}`);
      }
    } catch (error) {
      setStatus(
        `Error: ${
          error.response?.data?.message ||
          "Failed to submit form. Please try again."
        }`
      );
      console.error("Submission error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
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
      className="elementor-section elementor-top-section elementor-element elementor-element-6d9fdb0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="6d9fdb0"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e186264"
          data-id="e186264"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-68dd89c elementor-widget elementor-widget-forms_area__o"
              data-id="68dd89c"
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
                      <div className="upper-text" style={{ color: "#fff" }}>
                        NOT SURE WHERE TO START? WE'RE HERE TO HELP
                        <span className="icon flaticon-flash" />
                      </div>
                      <h2>Get Free Consultation</h2>
                      <div className="subtitle">THINK GREEN LIVE CLEAN</div>
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
                          id="wpcf7-f5-p6-o2"
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
                                defaultValue="wpcf7-f5-p6-o2"
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
                              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
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
                                        errors.name ? "name-error" : undefined
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
                              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="your-email"
                                  >
                                    <input
                                      size={40}
                                      className="wpcf7-form-control wpcf7-email wpcf7-text wpcf7-validates-as-email"
                                      id="email-field"
                                      aria-required="true"
                                      aria-invalid={!!errors.email}
                                      aria-describedby={
                                        errors.email ? "email-error" : undefined
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
                              <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="phone"
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
                                    data-name="select-name"
                                  >
                                    <select
                                      className="wpcf7-form-control wpcf7-select custom-select-box"
                                      id="subject-field"
                                      aria-required="true"
                                      aria-invalid={!!errors.message}
                                      aria-describedby={
                                        errors.message
                                          ? "subject-error"
                                          : undefined
                                      }
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                                    >
                                      <option value="" disabled>
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
                                  {errors.message && (
                                    <span
                                      id="subject-error"
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
                                    backgroundColor: status.includes("Error")
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
                      <div className="lower-text">
                        <div className="sub-title">
                          <span className="txt">
                            OR IF YOU NEED QUICK ASSISTANCE
                          </span>
                        </div>
                        <div className="info">
                          Call Us 24/7 For Customer Support At
                          <span className="icon" />
                          <a href="tel:+917587704619">+91 75877 04619</a>
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

export default SupportSection;
