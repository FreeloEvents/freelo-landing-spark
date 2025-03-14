
import React from 'react';
import { Shield, Heart, Globe, Clock, Lock, ScanSearch } from 'lucide-react';
import { MotionDiv, MotionH2, MotionP, fadeIn, staggerContainer } from './motion';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-freelo-bright-pink" />,
      title: "Verified Safety",
      description: "All events and organizers are thoroughly vetted for safety and trustworthiness."
    },
    {
      icon: <ScanSearch className="w-8 h-8 text-freelo-soft-purple" />,
      title: "Smart Discovery",
      description: "Our algorithm helps you find events tailored to your specific interests."
    },
    {
      icon: <Heart className="w-8 h-8 text-freelo-bright-pink" />,
      title: "Inclusive Community",
      description: "A welcoming environment for all identities, orientations, and relationship styles."
    },
    {
      icon: <Globe className="w-8 h-8 text-freelo-soft-purple" />,
      title: "Worldwide Events",
      description: "Access to local and international events across major cities."
    },
    {
      icon: <Lock className="w-8 h-8 text-freelo-bright-pink" />,
      title: "Privacy Focused",
      description: "Your personal information remains secure and never shared without permission."
    },
    {
      icon: <Clock className="w-8 h-8 text-freelo-soft-purple" />,
      title: "Real-time Updates",
      description: "Instant notifications about new events matching your preferences."
    }
  ];

  return (
    <MotionDiv
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 px-4"
    >
      <MotionH2
        variants={fadeIn('up', 0.2)}
        className="text-3xl md:text-4xl font-bold text-center mb-2"
      >
        Key <span className="shimmer-text">Benefits</span>
      </MotionH2>
      
      <MotionP
        variants={fadeIn('up', 0.3)}
        className="text-gray-300 text-center mx-auto max-w-2xl mb-12"
      >
        Discover what makes Freelo the ultimate platform for alternative events
      </MotionP>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <MotionDiv
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="freelo-card flex items-start"
          >
            <div className="mr-4 p-3 rounded-lg bg-freelo-dark-purple/50 glass-panel">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};

export default Benefits;
