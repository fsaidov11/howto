
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MathTestComponent from "@/components/MathTest";

const MathTestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <MathTestComponent />
      </main>
      <Footer />
    </div>
  );
};

export default MathTestPage;
