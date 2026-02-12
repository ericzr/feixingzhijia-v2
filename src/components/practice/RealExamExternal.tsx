import React from 'react';
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgExamInterface from "figma:asset/326848447b1d7edcc4c5247621b1019b860e42fd.png";

function Button({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <div 
      className={`flex items-center justify-center shrink-0 size-[32px] cursor-pointer z-50 bg-white/20 rounded-full hover:bg-white/40 transition-colors backdrop-blur-sm ${className}`} 
      data-name="Button"
      onClick={onClick}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </div>
  );
}

function SelectCity({ onBack }: { onBack: () => void }) {
  // Hidden on mobile (md:flex), shown on desktop
  return (
    <div className="hidden md:flex items-center justify-center relative w-full h-[44px] z-40 py-4 px-[12px] pointer-events-none">
      <div className="absolute left-[12px] pointer-events-auto">
        <Button onClick={onBack} />
      </div>
      <p className="font-sans font-bold text-white text-[18px] text-center drop-shadow-md">真实考场</p>
    </div>
  );
}

export function RealExamExternal({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative size-full min-h-screen bg-black flex flex-col overflow-hidden" data-name="真实考场-外接">
      <SelectCity onBack={onBack} />
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative w-full h-full overflow-hidden">
        {/* Mobile: Rotated View - Force Landscape */}
        <div className="md:hidden w-[100vh] h-[100vw] flex items-center justify-center rotate-90 origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black">
           <div className="w-full h-full flex items-center justify-center relative">
              <ImageWithFallback 
                src={imgExamInterface} 
                alt="Real Exam Interface" 
                className="w-full h-full object-cover" 
              />
              
              {/* Mobile Back Button - Top Left Hotspot */}
              {/* Added a large hit area (p-6) around the button for easier touch interaction */}
              <div 
                className="absolute top-4 left-4 z-50 p-6 -ml-4 -mt-4 cursor-pointer"
                onClick={onBack}
              >
                <Button />
              </div>
           </div>
        </div>

        {/* Desktop: Standard View */}
        <div className="hidden md:flex w-full h-full items-center justify-center p-8 bg-black">
           <div className="w-full h-full max-w-5xl aspect-video relative shadow-2xl rounded-lg overflow-hidden border border-[#333] bg-[#1a1a1a]">
              <ImageWithFallback 
                src={imgExamInterface} 
                alt="Real Exam Interface" 
                className="size-full object-contain" 
              />
           </div>
        </div>
      </div>
    </div>
  );
}
