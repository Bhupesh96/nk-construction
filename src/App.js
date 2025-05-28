import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import "./css/ClientSection.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermAndConditions";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms" element={<TermsAndConditions />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
