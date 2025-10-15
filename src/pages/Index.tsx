
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TeaserSection from '@/components/TeaserSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-mindai-darkblue">
      <Header />
      <main>
        <HeroSection />
        <TeaserSection />
      </main>
    </div>
  );
};

export default Index;
