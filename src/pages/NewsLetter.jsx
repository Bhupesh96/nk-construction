import React from "react";

const NewsLetter = () => {
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
                    {/*Big Icon*/}
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
                                action="https://strnix.smartdemowp.com/#wpcf7-f282-p6-o1"
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
                                    defaultValue
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
                                            aria-invalid="false"
                                            placeholder="Your Name"
                                            defaultValue
                                            type="text"
                                            name="your-name"
                                          />
                                        </span>
                                        <label htmlFor="field-1">
                                          <span className="far fa-user" />
                                        </label>
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
                                            aria-invalid="false"
                                            placeholder="Your Email"
                                            defaultValue
                                            type="email"
                                            name="your-email"
                                          />
                                        </span>
                                        <label htmlFor="field-2">
                                          <span className="far fa-envelope-open" />
                                        </label>
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
                                              Get More Info
                                            </span>
                                            <span className="btn-icon">
                                              <span className="icon flaticon-arrows-11" />{" "}
                                            </span>
                                          </span>
                                        </button>
                                      </p>
                                    </div>
                                  </div>
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
