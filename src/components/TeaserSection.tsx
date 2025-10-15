
import React from 'react';

const TeaserSection = () => {
  return (
    <section className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image on the left */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/411cd90a-ee23-4cd9-96e3-4f368601def8.png" 
                alt="MindAI Network Diagram" 
                className="w-full object-contain max-w-xl mx-auto"
              />
              
              {/* Decorative glow effect */}
              <div className="absolute inset-0 bg-mindai-purple opacity-10 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>
          
          {/* Three key points on the right */}
          <div className="w-full lg:w-1/2 space-y-8 mt-8 lg:mt-0">            
            <div className="space-y-6">
              {/* Key Point 1 */}
              <div className="flex items-start">
                <div className="mr-4 bg-mindai-purple/20 p-3 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center text-mindai-purple font-bold text-xl">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-mindai-purple">Tokenized Agents</h3>
                  <p className="text-gray-300">
                    Every AI agent is tokenized as a unique asset, enabling ownership, trading, and monetization on the blockchain.
                  </p>
                </div>
              </div>
              
              {/* Key Point 2 */}
              <div className="flex items-start">
                <div className="mr-4 bg-mindai-purple/20 p-3 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center text-mindai-purple font-bold text-xl">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-mindai-purple">Autonomous Collaboration</h3>
                  <p className="text-gray-300">
                    Agents can collaborate, share resources, and execute complex tasks in a decentralized marketplace.
                  </p>
                </div>
              </div>
              
              {/* Key Point 3 */}
              <div className="flex items-start">
                <div className="mr-4 bg-mindai-purple/20 p-3 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center text-mindai-purple font-bold text-xl">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-mindai-purple">Permissionless Economy</h3>
                  <p className="text-gray-300">
                    Build, deploy, and monetize AI agents without intermediaries in a trustless, onchain ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
