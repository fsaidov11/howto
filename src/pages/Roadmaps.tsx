
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import Pricing from "@/components/Pricing";

const Roadmaps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Roadmap />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Roadmaps;
