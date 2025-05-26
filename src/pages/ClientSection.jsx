import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/ClientSection.css";

const ClientSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://rjtechx.fun/solar/api/?api=gettestimonial"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        if (data.Response.Success === 1 && Array.isArray(data.Response.List)) {
          setTestimonials(data.Response.List);
          console.log("Testimonials Set:", data.Response.List);
        } else {
          console.error("Invalid API response:", data);
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
    return stars.slice(0, rating || 0);
  };

  const toggleReadMore = (userid) => {
    setExpanded((prev) => ({ ...prev, [userid]: !prev[userid] }));
  };

  // Group testimonials: 2 per slide on desktop, 1 per slide on mobile
  const groupedTestimonials = [];
  if (isMobile) {
    testimonials.forEach((testimonial) =>
      groupedTestimonials.push([testimonial])
    );
  } else {
    for (let i = 0; i < testimonials.length; i += 2) {
      groupedTestimonials.push(testimonials.slice(i, i + 2));
    }
  }
  console.log("Grouped Testimonials:", groupedTestimonials);

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
                      <div className="bottom-dots clearfix">
                        <span className="dot line-dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                    </div>
                    <div className="reviews-carousel-box">
                      {testimonials.length === 0 ? (
                        <div>No testimonials available</div>
                      ) : (
                        <Carousel
                          className="reviews-carousel strnix-carousel owl-theme owl-carousel"
                          showArrows={true}
                          showThumbs={false}
                          showStatus={false}
                          infiniteLoop={true}
                          autoPlay={true}
                          interval={6000}
                          transitionTime={300} /* Faster for smoother mobile */
                          showIndicators={true}
                          swipeable={true}
                          emulateTouch={true}
                        >
                          {groupedTestimonials.map((pair, index) => (
                            <div key={index} className="testimonial-pair">
                              {pair.map((testimonial) => (
                                <div
                                  className="testi-block-one"
                                  key={testimonial.userid}
                                  style={{ opacity: 1, visibility: "visible" }}
                                >
                                  <div className="inner-box">
                                    <div className="quote-icon">
                                      <i
                                        aria-hidden="true"
                                        className="flaticon-quote-1"
                                      />
                                    </div>
                                    <div className="rating">
                                      {renderStars(testimonial.rating || 0)}
                                    </div>
                                    <div
                                      className={`text ${
                                        !expanded[testimonial.userid]
                                          ? "truncated"
                                          : ""
                                      }`}
                                    >
                                      {testimonial.message ||
                                        "No review provided"}
                                    </div>
                                    {testimonial.message &&
                                      testimonial.message.length > 100 && (
                                        <button
                                          className="read-more"
                                          onClick={() =>
                                            toggleReadMore(testimonial.userid)
                                          }
                                        >
                                          {expanded[testimonial.userid]
                                            ? "Read Less"
                                            : "Read More"}
                                        </button>
                                      )}
                                    <div className="testi-info">
                                      <div className="image">
                                        <img
                                          decoding="async"
                                          src={
                                            testimonial.profile_image
                                              ? `https://rjtechx.fun/solar/${testimonial.profile_image}`
                                              : "https://via.placeholder.com/50"
                                          }
                                          alt={testimonial.name || "User"}
                                        />
                                      </div>
                                      <div className="info-text">
                                        <div className="name">
                                          {testimonial.name || "Anonymous"}
                                        </div>
                                        <div className="designation">
                                          {testimonial.address ||
                                            "Unknown Location"}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </Carousel>
                      )}
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
