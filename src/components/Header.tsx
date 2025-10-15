
import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-transparent absolute top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c12bccfd-ecfa-404b-9409-365db79ffe96.png" 
              alt="MindAI Logo" 
              className="h-12 md:h-14"
            />
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="https://docs.mindai.network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-mindai-cyan transition-colors"
            >
              Documentation
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/mindainetwork" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-mindai-cyan transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://discord.gg/mindai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-mindai-cyan transition-colors"
              aria-label="Discord"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <circle cx="9" cy="12" r="1"/>
                <circle cx="15" cy="12" r="1"/>
                <path d="M7.5 7.5c3.5-1 5.5-1 9 0"/>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"/>
                <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"/>
                <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/mindainetwork" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-mindai-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
