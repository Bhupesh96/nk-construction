import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProgramBlock = ({ imageSrc, title, text, iconClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="program-block">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <img decoding="async" src={imageSrc} alt="Program" />
          </figure>
          <div className="hover-box">
            <div className="hover-inner">
              <div className="content">
                <div className="icon-box">
                  <i aria-hidden="true" className={iconClass} />
                </div>
                <div className="program-block-text-wrapper">
                  <div
                    className={`program-block-text ${
                      isExpanded ? "program-block-expanded" : ""
                    }`}
                  >
                    {text}
                  </div>
                  <Link
                    to="#"
                    className="program-block-read-more"
                    onClick={handleToggle}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>
          <Link to="#" onClick={(e) => e.preventDefault()}>
            {title}
          </Link>
        </h3>
      </div>

      <style>
        {`
          .program-block-text-wrapper {
            color: #fff;
          }

          .program-block-text {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: all 0.3s ease;
            color: #fff !important;
            font-size: 14px;
            line-height: 1.5em;
            max-height: 3em;
            word-break: break-word;
            white-space: normal;
          }

          .program-block-text.program-block-expanded {
            -webkit-line-clamp: unset;
            max-height: 6em;
            overflow-y: auto;
            word-break: break-word;
            white-space: normal;
          }

          .program-block-text.program-block-expanded::-webkit-scrollbar {
            width: 6px;
          }

          .program-block-text.program-block-expanded::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
          }

          .program-block-read-more {
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            text-decoration: underline;
            margin-top: 6px;
            display: inline-block;
            background: rgba(0, 0, 0, 0.4);
            padding: 2px 6px;
            border-radius: 3px;
          }

          .program-block-read-more:hover {
            color: #ccc;
            background: rgba(0, 0, 0, 0.6);
          }
        `}
      </style>
    </div>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      imageSrc: "/wp-content/uploads/poster/assesment.jpeg",
      title: "Free Site Assessment & Energy Audit",
      text: "What it includes: Site visit, energy usage analysis, shadow study, and panel placement planning. Why it's important: Helps customers understand feasibility and expected savings.",
      iconClass: "flaticon-chimney",
    },
    {
      imageSrc: "/wp-content/uploads/poster/installation.jpg",
      title: "Customized System Design",
      text: "What it includes: Tailored solar system designs based on energy needs, budget, and roof/land availability. Add-on: Use 3D modeling or drone-based mapping for accurate designs.",
      iconClass: "flaticon-chimney",
    },
    {
      imageSrc: "/wp-content/uploads/poster/upgrade-service.jpeg",
      title: "End-to-End Installation Services",
      text: "Scope: Procurement, transportation, installation, net-metering, and government liaison. Assurance: Use certified installers and branded components (Tier-1 panels, inverters, etc.).",
      iconClass: "flaticon-chimney",
    },
    {
      imageSrc: "/wp-content/uploads/poster/loan.jpeg",
      title: "Subsidy & Financing Assistance",
      text: "* Includes: Help with government solar subsidies (like under PM Surya Ghar Yojana).EMI plans via NBFCs or banks. Leasing or PPAs (Power Purchase Agreements) for commercial clients.",
      iconClass: "flaticon-chimney",
    },
    {
      imageSrc: "/wp-content/uploads/poster/monitoring.jpeg",
      title: "Monitoring & Performance Tracking",
      text: "Tools: Mobile app/web dashboard showing real-time energy generation, savings, and alerts. Add-on: Remote diagnostics and performance optimization.",
      iconClass: "flaticon-chimney",
    },
    {
      imageSrc: "/wp-content/uploads/poster/installation.jpg",
      title: "Maintenance & Support Packages",
      text: "Types: Annual Maintenance Contracts (AMCs) On-demand cleaning and inspections Warranty claim support",
      iconClass: "flaticon-chimney",
    },
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5fab1b0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="5fab1b0"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9ad454e"
          data-id="9ad454e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-b2ea1ae elementor-widget elementor-widget-programs_area__o"
              data-id="b2ea1ae"
              data-element_type="widget"
              data-widget_type="programs_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="programs-section-one">
                  <div className="bg-pattern-layer" />
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
                      <h2>Comprehensive Programs</h2>
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
                      className="program-carousel strnix-carousel owl-theme owl-carousel"
                      data-options='{"loop": true, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "2" }, "1024":{ "items" : "3" }, "1200":{ "items" : "4" }}}'
                    >
                      {programs.map((program, index) => (
                        <ProgramBlock
                          key={index}
                          imageSrc={program.imageSrc}
                          title={program.title}
                          text={program.text}
                          iconClass={program.iconClass}
                        />
                      ))}
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

export default ProgramsSection;
