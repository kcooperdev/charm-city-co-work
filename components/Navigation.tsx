
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#1a2e44]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#home" className="flex-shrink-0 group">
            <span className="text-[#1a2e44] font-black text-2xl tracking-tighter group-hover:text-[#d4af37] transition-colors uppercase">
              CHARM CITY CO-WORK
            </span>
          </a>
          
          {/* Links removed as per user request */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-[#1a2e44]"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-b border-[#1a2e44]/10">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
             <span className="block py-4 text-[#1a2e44]/40 font-black uppercase text-xs tracking-widest">Navigation links removed</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
