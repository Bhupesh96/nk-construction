import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Handle preloader
    const handlePreloader = () => {
      if ($(".preloader").length) {
        $("body").addClass("page-loaded");
        $(".preloader").delay(1000).fadeOut(0);
      }
    };
    handlePreloader();
  }, []);

  return (
    <div className="page-template page-template-elementor_header_footer page elementor-default elementor-template-full-width elementor-kit-722">
      <div className="page-wrapper">
        <div className="preloader">
          <div className="icon" />
        </div>
        <Header />
        <section className="page-banner">
          <div className="image-layer" />
          <div className="auto-container">
            <div className="breadcrumb-box">
              <div className="auto-container">
                <span property="itemListElement" typeof="ListItem">
                  "Protecting Your Privacy at Bhartiya Solar."
                  <meta property="position" content={1} />
                </span>{" "}
                →{" "}
                <span className="post post-page current-item">
                  Privacy Policy
                </span>
              </div>
            </div>
            <h1>Privacy Policy</h1>
          </div>
        </section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="privacy"
          className="elementor"
        >
          <section className="elementor-section elementor-top-section elementor-element elementor-section-full_width elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="2000ms"
                  >
                    <div className="elementor-widget-container auto-container">
                      <div
                        style={{
                          maxWidth: "800px",
                          margin: "0 auto",
                          padding: "20px",
                        }}
                      >
                        <h2
                          style={{
                            color: "#005555",
                            fontSize: "2em",
                            marginBottom: "20px",
                          }}
                        >
                          Privacy Policy
                        </h2>
                        <p
                          style={{
                            fontStyle: "italic",
                            color: "#555",
                            marginBottom: "20px",
                          }}
                        >
                          Last Updated: May 28, 2025
                        </p>
                        <p style={{ marginBottom: "15px" }}>
                          At Bhartiya Solar (“we,” “us,” or “our”), we are
                          committed to protecting the privacy and security of
                          your personal information. This Privacy Policy
                          explains how we collect, use, disclose, and safeguard
                          your data when you visit our website,{" "}
                          <a
                            href="https://bhartiyasolar.in"
                            style={{ color: "#007bff" }}
                          >
                            bhartiyasolar.in
                          </a>
                          , or engage with our services. By using our website,
                          you consent to the practices described in this policy.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          1. Information We Collect
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          We collect information to provide and improve our
                          services. The types of information we collect include:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginLeft: "20px",
                            marginBottom: "15px",
                          }}
                        >
                          <li>
                            <strong>Personal Information</strong>: When you
                            submit forms (e.g., Contact, Newsletter, Support),
                            we may collect your name, email address, mobile
                            number, address, and any messages or inquiries you
                            provide.
                          </li>
                          <li>
                            <strong>Automatically Collected Information</strong>
                            : We use tools like Google Analytics to collect data
                            such as your IP address, browser type, device
                            information, pages visited, and time spent on our
                            website.
                          </li>
                          <li>
                            <strong>Cookies and Tracking Technologies</strong>:
                            We use cookies to enhance your experience, analyze
                            website usage, and deliver personalized content. You
                            can manage cookie preferences through your browser
                            settings.
                          </li>
                        </ul>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          2. How We Use Your Information
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          We use your information for the following purposes:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginLeft: "20px",
                            marginBottom: "15px",
                          }}
                        >
                          <li>
                            To respond to your inquiries and provide customer
                            support.
                          </li>
                          <li>
                            To send you newsletters, promotional materials, or
                            updates (with your consent).
                          </li>
                          <li>
                            To improve our website, services, and user
                            experience.
                          </li>
                          <li>
                            To analyze website performance and visitor trends
                            using Google Analytics.
                          </li>
                          <li>
                            To comply with legal obligations under the
                            Information Technology Act, 2000, and other
                            applicable laws.
                          </li>
                          <li>
                            To prevent fraud, unauthorized access, or illegal
                            activities.
                          </li>
                        </ul>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          3. How We Share Your Information
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          We do not sell, rent, or trade your personal
                          information. We may share your data in the following
                          cases:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginLeft: "20px",
                            marginBottom: "15px",
                          }}
                        >
                          <li>
                            <strong>With Service Providers</strong>: We share
                            data with trusted third parties (e.g., Google
                            Analytics, email marketing platforms) to perform
                            services on our behalf. These providers are
                            contractually obligated to protect your data.
                          </li>
                          <li>
                            <strong>With Affiliates</strong>: We may share data
                            with our affiliates to offer you related products or
                            services, subject to this Privacy Policy.
                          </li>
                          <li>
                            <strong>For Legal Purposes</strong>: We may disclose
                            data to comply with legal requirements, enforce our
                            policies, or protect our rights, property, or
                            safety.
                          </li>
                          <li>
                            <strong>Business Transfers</strong>: In the event of
                            a merger, acquisition, or sale of assets, your data
                            may be transferred to the acquiring entity.
                          </li>
                        </ul>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          4. Your Rights
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          Under applicable laws, including the Information
                          Technology Act, 2000, and GDPR (for EU residents), you
                          have the following rights:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginLeft: "20px",
                            marginBottom: "15px",
                          }}
                        >
                          <li>
                            <strong>Access</strong>: Request details about the
                            personal data we hold about you.
                          </li>
                          <li>
                            <strong>Correction</strong>: Request corrections to
                            inaccurate or incomplete data.
                          </li>
                          <li>
                            <strong>Deletion</strong>: Request deletion of your
                            data, subject to legal obligations.
                          </li>
                          <li>
                            <strong>Restriction</strong>: Request restrictions
                            on how we process your data.
                          </li>
                          <li>
                            <strong>Objection</strong>: Object to processing for
                            marketing or other purposes.
                          </li>
                          <li>
                            <strong>Data Portability</strong>: Request a copy of
                            your data in a structured, machine-readable format.
                          </li>
                        </ul>
                        <p style={{ marginBottom: "15px" }}>
                          To exercise these rights, contact our Grievance
                          Officer (details below).
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          5. Cookies and Tracking
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Our website uses cookies to enhance functionality and
                          analyze usage. Cookies are small files stored on your
                          device. You can disable cookies in your browser, but
                          this may affect your experience. For details, see our{" "}
                          <Link
                            to="/cookie-policy"
                            style={{ color: "#007bff" }}
                          >
                            Cookie Policy
                          </Link>{" "}
                          (if applicable).
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          6. Data Security
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          We implement reasonable security measures, including
                          encryption and secure servers, to protect your data.
                          However, no method of transmission over the internet
                          is 100% secure, and we cannot guarantee absolute
                          security.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          7. Third-Party Links
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Our website may contain links to third-party sites
                          (e.g., Facebook, Instagram). We are not responsible
                          for their privacy practices. Please review their
                          privacy policies before providing information.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          8. Children’s Privacy
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Our services are not directed to children under 13. We
                          do not knowingly collect personal data from children.
                          If you believe we have such data, contact us to have
                          it removed.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          9. Data Retention
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          We retain personal data only as long as necessary for
                          the purposes outlined in this policy or to comply with
                          legal obligations. For example, contact form data may
                          be retained for up to 2 years to address follow-up
                          inquiries, unless you request deletion.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          10. International Data Transfers
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Your data may be processed outside India (e.g., by
                          Google Analytics servers in the US). We ensure such
                          transfers comply with applicable laws, including GDPR
                          for EU residents, using standard contractual clauses
                          or other safeguards.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          11. Changes to This Privacy Policy
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          We may update this Privacy Policy to reflect changes
                          in our practices or legal requirements. We will notify
                          you of significant changes by posting the updated
                          policy on our website with a new “Last Updated” date.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          12. Contact Us
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          If you have questions, concerns, or wish to exercise
                          your rights, contact our Grievance Officer:
                        </p>
                        <div
                          className="contact-info"
                          style={{
                            padding: "10px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "5px",
                            marginBottom: "15px",
                          }}
                        >
                          <p>
                            <strong>Name</strong>: Bhartiya Solar
                            <br />
                            <strong>Email</strong>:{" "}
                            <a
                              href="mailto:info@bhartiyasolar.in"
                              style={{ color: "#007bff" }}
                            >
                              info@bhartiyasolar.in
                            </a>
                            <br />
                            <strong>Address</strong>: NK Constructions, Main
                            Road, Bagbahra 493449, India
                            <br />
                            <strong>Phone</strong>:{" "}
                            <a
                              href="tel:+919713311719"
                              style={{ color: "#007bff" }}
                            >
                              +919713311719
                            </a>
                          </p>
                        </div>
                        <p style={{ marginBottom: "15px" }}>
                          We will respond to your requests within 30 days, as
                          required under the Information Technology Act, 2000.
                        </p>
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
    </div>
  );
};

export default PrivacyPolicy;
