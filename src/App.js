import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import UIDesign from "./pages/services/UIDesign";
import AppDevelopment from "./pages/services/AppDevelopment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/ui-design" element={<UIDesign />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
