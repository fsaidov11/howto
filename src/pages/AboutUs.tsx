import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;