import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import { AboutUs } from "@/components/AboutUs";
import { ContactForm } from "@/components/ContactForm";
import { EnglishTest } from "@/components/EnglishTest";
import { LocationMap } from "@/components/LocationMap";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Roadmap />
        <AboutUs />
        <EnglishTest />
        <ContactForm />
        <LocationMap />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;