
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
        className="relative overflow-hidden bg-gradient-to-b from-freelo-dark-purple to-[#120420]"
      >
        {/* Background elements */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 -left-[50%] w-[100%] h-[50%] rounded-full bg-freelo-gradient-start opacity-5 blur-[80px]" />
          <div className="absolute top-[30%] -right-[50%] w-[100%] h-[50%] rounded-full bg-freelo-gradient-end opacity-5 blur-[80px]" />
          <div className="absolute bottom-0 left-[25%] w-[50%] h-[40%] rounded-full bg-freelo-gradient-mid opacity-5 blur-[80px]" />
        </div>

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

        {/* Floating gradient dot elements for decoration */}
        <div className="fixed top-1/4 left-10 w-3 h-3 rounded-full bg-freelo-bright-pink blur-sm opacity-70 animate-pulse-ring" />
        <div className="fixed top-1/3 right-12 w-2 h-2 rounded-full bg-freelo-soft-purple blur-sm opacity-60 animate-float" />
        <div className="fixed bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-freelo-gradient-mid blur-sm opacity-70 animate-pulse-ring" />
        <div className="fixed bottom-1/3 right-1/5 w-3 h-3 rounded-full bg-freelo-bright-pink blur-sm opacity-60 animate-float" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
