import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AboutUs as AboutUsComponent } from "@/components/AboutUs";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <AboutUsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;