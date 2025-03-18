
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import WhyFreelo from '@/components/WhyFreelo';
import CommunitySection from '@/components/CommunitySection';
import Stats from '@/components/Stats';
import EventCarousel from '@/components/EventCarousel';
import Questionnaire from '@/components/Questionnaire';
import Benefits from '@/components/Benefits';
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
        className="relative overflow-hidden bg-freelo-dark-purple"
      >
        <div className="max-w-7xl mx-auto">
          <Hero />
          <Countdown />
          <WhyFreelo />
          <CommunitySection />
          <Stats />
          <EventCarousel />
          <Questionnaire />
          <Benefits />
          <FAQ />
          <ContactUs />
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
