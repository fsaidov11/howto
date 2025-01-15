import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnglishTest from "@/components/EnglishTest";

const EnglishTestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <EnglishTest />
      </main>
      <Footer />
    </div>
  );
};

export default EnglishTestPage;