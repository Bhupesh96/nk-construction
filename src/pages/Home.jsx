import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProgramsSection from "./ProgramsSection";
import NewsLetter from "./NewsLetter";
import OurServices from "./OurServices";
import ProjectsSection from "./ProjectsSection";
import ClientSection from "./ClientSection";
import PriceSection from "./PriceSection";
import SupportSection from "./SupportSection";
// import CompanyNews from "./CompanyNews";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Header from "../components/Header";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    const handlePreloader = () => {
      if ($(".preloader").length) {
        $("body").addClass("page-loaded");
        $(".preloader").delay(1000).fadeOut(0);
      }
    };

    // Trigger preloader logic on mount
    handlePreloader();
  }, []);
  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-6 elementor-default elementor-template-full-width elementor-kit-722 elementor-page elementor-page-6">
      <div className="page-wrapper">
        <div className="preloader">
          <div className="icon" />
        </div>
        <Header />
        <div id="search-popup" className="search-popup">
          <div className="close-search theme-btn">
            <span className="flaticon-cancel" />
          </div>
          <div className="popup-inner">
            <div className="overlay-layer" />
            <div className="search-form">
              <form method="post" action="https://strnix.smartdemowp.com/">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="s"
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      defaultValue="Search Now!"
                      className="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={6}
          className="elementor elementor-6"
        >
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <NewsLetter />
          <OurServices />
          <ProjectsSection />
          <ClientSection />
          <PriceSection />
          <SupportSection />
          {/* <CompanyNews /> */}
        </div>
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
};

export default Home;
