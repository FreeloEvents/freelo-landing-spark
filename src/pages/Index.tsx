
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import WhyFreelo from '@/components/WhyFreelo';
import CommunitySection from '@/components/CommunitySection';
import Stats from '@/components/Stats';
import EventCarousel from '@/components/EventCarousel';
import Questionnaire from '@/components/Questionnaire';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Welcome toast
    toast("Welcome to Freelo", {
      description: "The platform for intimate and alternative events",
    });
    
    // Load necessary animations or scripts
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease-in-out';
      
      img.onload = () => {
        img.style.opacity = '1';
      };
      
      // For images that are already loaded
      if (img.complete) {
        img.style.opacity = '1';
      }
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-hidden bg-gradient-to-b from-[#1A0B2E] to-[#27123A]"
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto">
          <Hero />
          <section className="section-alt-1"><Countdown /></section>
          <section className="section-alt-2"><WhyFreelo /></section>
          <section className="section-alt-1"><CommunitySection /></section>
          <section className="section-alt-2"><Stats /></section>
          <section className="section-alt-1"><EventCarousel /></section>
          <section className="section-alt-2"><Questionnaire /></section>
          <section className="section-alt-1"><AboutUs /></section>
          <section className="section-alt-2"><FAQ /></section>
          <section className="section-alt-1"><ContactUs /></section>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
