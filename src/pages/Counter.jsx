import { useRef, useEffect } from "react";

const Counter = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const animateCounter = (element, start, end, duration, isFloat = false) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = isFloat
          ? (start + (end - start) * progress).toFixed(1)
          : Math.floor(start + (end - start) * progress);
        element.textContent = value;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    countersRef.current.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-stop"));
      const isFloat = counter.getAttribute("data-stop").includes(".");
      animateCounter(counter, 0, target, 2000, isFloat);
    });
  }, []);
  return (
    <div
      className="row clearfix"
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
        <div className="inner">
          <div className="icon-box">
            <i aria-hidden="true" className="flaticon-flash" />
          </div>
          <div className="count-box ">
            <span
              className="count-text"
              data-speed={1000}
              data-stop={16}
              ref={(el) => (countersRef.current[0] = el)}
            >
              0
            </span>
            + Years
          </div>
          <div className="counter-title">OF EXPERIENCE & RECORD</div>
        </div>
      </div>
      <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
        <div className="inner">
          <div className="icon-box">
            <i aria-hidden="true" className="flaticon-flash" />
          </div>
          <div className="count-box">
            <span
              className="count-text"
              data-speed={1000}
              data-stop={120}
              ref={(el) => (countersRef.current[1] = el)}
            >
              0
            </span>
            +
          </div>
          <div className="counter-title">SYSTEMS INSTALLES IN 2025</div>
        </div>
      </div>
      {/* <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                          <div className="inner">
                            <div className="icon-box">
                              <i
                                aria-hidden="true"
                                className="flaticon-flash"
                              />
                            </div>
                            <div className="count-box">
                              <span
                                className="count-text"
                                data-speed={1000}
                                data-stop="6.5"
                                ref={(el) => (countersRef.current[2] = el)}
                              >
                                0
                              </span>
                              k Watt
                            </div>
                            <div className="counter-title">
                              Energy Financing Done
                            </div>
                          </div>
                        </div> */}
      <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
        <div className="inner">
          <div className="icon-box">
            <i aria-hidden="true" className="flaticon-flash" />
          </div>
          <div className="count-box">A CLASS*</div>
          <div className="counter-title">ELECTRICAL CONTRACTOR</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
