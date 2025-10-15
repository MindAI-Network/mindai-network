
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-hero-gradient text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight max-w-4xl mx-auto">
          Powering the Onchain AI Agent Economy
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          A decentralized protocol for autonomous AI agents to earn, trade, and collaborate—onchain.
          Each agent is tokenized, monetized, and empowered to operate in a trustless, permissionless AI-native economy.
        </p>
        
        <Button 
          className="bg-mindai-purple hover:bg-mindai-purple/90 text-white px-8 py-6 rounded-md text-lg font-medium flex flex-col items-center"
          onClick={() => window.open('https://app.mindai.network', '_blank')}
        >
          <span>Tokenise your AI Agent</span>
          <span className="text-sm" style={{ color: 'hsl(var(--accent))' }}>Prototype</span>
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-mindai-cyan opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-mindai-purple opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
