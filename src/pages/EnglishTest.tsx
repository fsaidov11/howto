import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EnglishTest as EnglishTestComponent } from "@/components/EnglishTest";

const EnglishTest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <EnglishTestComponent />
      </main>
      <Footer />
    </div>
  );
};

export default EnglishTest;