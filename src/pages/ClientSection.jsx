import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ClientSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://rjtechx.fun/solar/api/?api=gettestimonial"
        );
        const data = await response.json();
        if (data.Response.Success === 1) {
          setTestimonials(data.Response.List);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className="fa fa-star" />);
    }
    return stars.slice(0, rating); // Only show stars up to the rating value
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-92bf75f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="92bf75f"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8764282"
          data-id={8764282}
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-f4f40dc elementor-widget elementor-widget-review_area__o"
              data-id="f4f40dc"
              data-element_type="widget"
              data-widget_type="review_area__o.default"
            >
              <div className="elementor-widget-container">
                <section className="reviews-section">
                  <div className="image-layer" />
                  <div className="auto-container">
                    <div
                      className="sec-title light-title wow fadeInLeft centered"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="upper-text">
                        HEAR FROM THOSE WE'VE POWERED
                        <span className="icon flaticon-flash" />
                      </div>
                      <h2>Client’s Reviews</h2>
                      {/* <div className="subtitle">Company Testimonials</div> */}
                      <div className="bottom-dots clearfix">
                        <span className="dot line-dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                    </div>
                    <div className="reviews-carousel-box">
                      <div
                        className="reviews-carousel strnix-carousel owl-theme owl-carousel"
                        data-options='{"loop": true, "margin": 40, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 500, "responsive":{ "0" :{ "items": "1" }, "600" :{ "items" : "1" }, "768" :{ "items" : "1" }, "1024":{ "items" : "2" }, "1200":{ "items" : "2" }}}'
                      >
                        {testimonials.map((testimonial) => (
                          <div
                            className="testi-block-one"
                            key={testimonial.userid}
                          >
                            <div className="inner-box">
                              <div className="quote-icon">
                                <i
                                  aria-hidden="true"
                                  className="flaticon-quote-1"
                                />
                              </div>
                              <div className="rating">
                                {renderStars(testimonial.rating)}
                              </div>
                              <div className="text">{testimonial.message}</div>
                              <div className="testi-info">
                                <div className="image">
                                  <img
                                    decoding="async"
                                    src={`https://rjtechx.fun/solar/${testimonial.profile_image}`}
                                    alt={testimonial.name}
                                  />
                                </div>
                                <div className="name">{testimonial.name}</div>
                                <div className="designation">
                                  {testimonial.address || "Unknown Location"}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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

export default ClientSection;
