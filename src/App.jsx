import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./static/NavBar";
import Save from "./pages/Save";
import Invest from "./pages/Invest";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Footer from "./static/Footer";
import Stories from "./pages/Stories";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Save />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
