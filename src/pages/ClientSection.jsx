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
          "https://bhartiyasolar.com/solar/api/?api=gettestimonial"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.Response.Success === 1 && Array.isArray(data.Response.List)) {
          setTestimonials(data.Response.List);
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
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`fas fa-star ${i < (rating || 0) ? "filled" : ""}`}
      />
    ));
  };

  const toggleReadMore = (userid) => {
    setExpanded((prev) => ({ ...prev, [userid]: !prev[userid] }));
  };

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

  return (
    <section className="client-section">
      <div className="auto-container">
        <div className="sec-title">
          <div className="upper-text">
            HEAR FROM THOSE WE'VE POWERED
            <span className="icon fas fa-bolt" />
          </div>
          <h2>Client’s Reviews</h2>
        </div>
        <div className="reviews-carousel-box">
          {testimonials.length === 0 ? (
            <div>No testimonials available</div>
          ) : (
            <Carousel
              className="reviews-carousel"
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={200}
              showIndicators={true}
              swipeable={true}
              emulateTouch={true}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={30} // Reduced for easier vertical scrolling
              verticalSwipe="standard" // Allow vertical scroll detection
            >
              {groupedTestimonials.map((pair, index) => (
                <div key={index} className="testimonial-pair">
                  {pair.map((testimonial) => (
                    <div className="testi-block-one" key={testimonial.userid}>
                      <div className="inner-box">
                        <div className="quote-icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="rating">
                          {renderStars(testimonial.rating || 0)}
                        </div>
                        <div
                          className={`text ${
                            !expanded[testimonial.userid] ? "truncated" : ""
                          }`}
                        >
                          {testimonial.message || "No review provided"}
                        </div>
                        {testimonial.message &&
                          testimonial.message.length > 100 && (
                            <button
                              className="read-more"
                              onClick={() => toggleReadMore(testimonial.userid)}
                            >
                              {expanded[testimonial.userid]
                                ? "Read Less"
                                : "Read More"}
                            </button>
                          )}
                        <div className="testi-info">
                          <div className="image">
                            <img
                              src={
                                testimonial.profile_image
                                  ? `https://bhartiyasolar.com/solar/${testimonial.profile_image}`
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
                              {testimonial.address || "Unknown Location"}
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
  );
};

export default ClientSection;
