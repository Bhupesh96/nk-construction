import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

const TermsAndConditions = () => {
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
                  "Understanding Your Agreement with Bhartiya Solar."
                  <meta property="position" content={1} />
                </span>{" "}
                →{" "}
                <span className="post post-page current-item">
                  Terms and Conditions
                </span>
              </div>
            </div>
            <h1>Terms and Conditions</h1>
          </div>
        </section>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="terms"
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
                          Terms and Conditions
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
                          Welcome to Bhartiya Solar (“we,” “us,” or “our”).
                          These Terms and Conditions (“Terms”) govern your use
                          of our website,{" "}
                          <a
                            href="https://bhartiyasolar.in"
                            style={{ color: "#007bff" }}
                          >
                            bhartiyasolar.in
                          </a>
                          , and any services, products, or content provided by
                          us. By accessing or using our website, you agree to be
                          bound by these Terms. If you do not agree, please do
                          not use our website or services.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          1. Use of the Website
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          You agree to use our website for lawful purposes only
                          and in a manner that does not infringe the rights of
                          others or restrict their use of the website. You are
                          prohibited from:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginLeft: "20px",
                            marginBottom: "15px",
                          }}
                        >
                          <li>
                            Engaging in unauthorized access or hacking attempts.
                          </li>
                          <li>
                            Uploading malicious code, viruses, or harmful
                            content.
                          </li>
                          <li>
                            Collecting data from other users without consent.
                          </li>
                          <li>
                            Violating any applicable laws, including the
                            Information Technology Act, 2000.
                          </li>
                        </ul>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          2. Services and Products
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Bhartiya Solar provides solar panel installation,
                          maintenance, and related services. All service
                          agreements, warranties, and pricing are subject to
                          separate contracts provided at the time of purchase or
                          service engagement. We reserve the right to modify or
                          discontinue services without prior notice.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          3. Intellectual Property
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          All content on our website, including text, images,
                          logos, and designs, is owned by Bhartiya Solar or its
                          licensors and is protected by Indian and international
                          copyright laws. You may not reproduce, distribute, or
                          modify any content without our prior written consent.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          4. User-Provided Information
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          When you submit information through our forms (e.g.,
                          Contact, Newsletter, Support), you agree to provide
                          accurate and complete information. You are responsible
                          for maintaining the confidentiality of any account
                          credentials. Our use of your data is governed by our{" "}
                          <Link
                            to="/privacy-policy"
                            style={{ color: "#007bff" }}
                          >
                            Privacy Policy
                          </Link>
                          .
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          5. Third-Party Links
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          Our website may contain links to third-party websites
                          (e.g., Facebook, Instagram). We are not responsible
                          for the content, policies, or practices of these
                          sites. Use them at your own risk.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          6. Limitation of Liability
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          To the extent permitted by law, Bhartiya Solar is not
                          liable for any direct, indirect, incidental, or
                          consequential damages arising from your use of our
                          website or services. This includes, but is not limited
                          to, damages from errors, interruptions, or loss of
                          data. Our total liability is limited to the amount
                          paid for services, if any.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          7. Indemnification
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          You agree to indemnify and hold Bhartiya Solar, its
                          affiliates, and employees harmless from any claims,
                          losses, or damages arising from your violation of
                          these Terms or misuse of our website or services.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          8. Termination
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          We reserve the right to suspend or terminate your
                          access to our website at any time, without notice, for
                          violations of these Terms or for any other reason.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          9. Governing Law and Jurisdiction
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          These Terms are governed by the laws of India. Any
                          disputes arising from these Terms or your use of our
                          website will be resolved in the courts of Raipur,
                          Chhattisgarh, India.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          10. Changes to These Terms
                        </h3>
                        <p style={{ marginBottom: "15px" }}>
                          We may update these Terms to reflect changes in our
                          services or legal requirements. The updated Terms will
                          be posted on our website with a new “Last Updated”
                          date. Continued use of our website constitutes
                          acceptance of the revised Terms.
                        </p>

                        <h3
                          style={{
                            color: "#005555",
                            fontSize: "1.5em",
                            margin: "20px 0 10px",
                          }}
                        >
                          11. Contact Us
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                          If you have questions or concerns about these Terms,
                          contact us:
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
                            <strong>Head Office</strong>: NK Constructions, Main
                            Road, Bagbahra 493449, India
                            <br />
                            <strong>Branch Office</strong>: Shop No 7, in front
                            of Palash Height, Mahadev Nagar, Raipur, India
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

export default TermsAndConditions;
