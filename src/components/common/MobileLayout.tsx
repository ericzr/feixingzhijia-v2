import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
  bgClass?: string;
}

export function MobileLayout({ children, className = "", bgClass = "bg-white" }: MobileLayoutProps) {
  const isWhitePage = bgClass === "bg-white";
  return (
    <div className={`min-h-[100dvh] w-full max-w-full overflow-x-hidden flex justify-center md:py-8 font-sans ${isWhitePage ? "bg-white" : "bg-gray-50"}`}>
      <div className={`w-full max-w-[480px] md:max-w-5xl mx-auto ${bgClass} relative md:shadow-2xl h-[100dvh] md:h-[calc(100vh-4rem)] md:rounded-[32px] flex flex-col overflow-hidden md:border md:border-white/50 transition-all duration-300 ${className}`}>
        {children}
      </div>
    </div>
  );
}
