import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-fhbq2q206c";

interface FavoriteButtonProps {
  isFavorited?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function FavoriteButton({ isFavorited = false, onToggle, className = "" }: FavoriteButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.();
      }}
      className={`relative flex items-center justify-center size-[40px] rounded-full active:bg-gray-100 transition-colors ${className}`}
    >
      <div className="size-[24px] relative">
        <svg 
          className="block size-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 21.4914 20.5621"
        >
          <path 
            d={svgPaths.p348e2e80} 
            fill={isFavorited ? "#C99619" : "none"} 
            stroke={isFavorited ? "#C99619" : "#99A1AF"} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
          />
        </svg>
      </div>
    </motion.button>
  );
}
