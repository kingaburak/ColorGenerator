import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#FFF6EC]">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
