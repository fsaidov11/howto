import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;