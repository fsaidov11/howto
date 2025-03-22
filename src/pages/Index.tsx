
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import AboutUs from "@/components/AboutUs";
import Heroes from "@/components/Heroes";
import EnglishTest from "@/components/EnglishTest";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Первая точка контакта - заголовок с УТП и призывом к действию */}
        <Hero />
        
        {/* Чем помогаем - решения проблем */}
        <Features />
        
        {/* Как это работает - процесс обучения */}
        <Roadmap />
        
        {/* Истории успеха - доказательство эффективности */}
        <Heroes />
        <Testimonials />
        
        {/* О нас - команда */}
        <AboutUs />
        
        {/* Тест - вовлечение */}
        <EnglishTest />
        
        {/* Контакты - призыв к действию */}
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
