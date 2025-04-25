import React from "react";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import Header from "./Header";

const GeneratorPage: React.FC = () => {
  return (
    <div className="bg-[#FCFCFC] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <Header />
      </main>
      <Footer />
    </div>
  );
};

export default GeneratorPage;
