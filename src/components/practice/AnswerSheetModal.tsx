import React from 'react';
import svgPaths from '../../imports/svg-wprwsyjin2';

// --- Icons ---

function IconClose() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p3c506100} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p1202b780} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <path d={svgPaths.p2b18fce0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
      </svg>
    </div>
  );
}

function IconCross() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <path d={svgPaths.p3152d700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        <path d={svgPaths.p7738180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
      </svg>
    </div>
  );
}

// --- Components ---

function LegendItem({ type, count }: { type: 'correct' | 'wrong', count: number }) {
  const isCorrect = type === 'correct';
  return (
    <div className="flex items-center gap-[6px]">
      <div className={`relative rounded-full size-[16px] flex items-center justify-center ${isCorrect ? 'bg-[#1677ff]' : 'bg-[#ff4d4f]'}`}>
        {isCorrect ? <IconCheck /> : <IconCross />}
      </div>
      <p className={`font-sans font-medium text-[15px] ${isCorrect ? 'text-[#1677ff]' : 'text-[#ff4d4f]'}`}>
        {count}
      </p>
    </div>
  );
}

function GridItem({ number, status }: { number: number, status?: 'current' | 'answered' | 'wrong' | 'default' }) {
  // Styles based on status
  // current: white bg, border #45556c, text #1d293d (based on Container23)
  // default: bg #f5f5f5, text #45556c (based on Container24)
  // answered/wrong: Not explicitly shown in grid in import, but implied by legend. 
  // For this 1:1, I will stick to the import's visuals which show 1 as current and others as default.
  // I will make it dynamic though.
  
  let className = "relative rounded-full size-[40px] flex items-center justify-center font-sans font-normal text-[15px] transition-colors cursor-pointer";
  
  if (status === 'current') {
    className += " bg-white border-[0.75px] border-[#45556c] text-[#1d293d]";
  } else {
    className += " bg-[#f5f5f5] text-[#45556c]";
  }

  return (
    <div className={className}>
      {number}
    </div>
  );
}

export function AnswerSheetModal({ onClose }: { onClose: () => void }) {
  const totalQuestions = 100;
  const currentQuestion = 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-white w-[385px] rounded-[18px] shadow-2xl flex flex-col items-center overflow-hidden max-h-[80vh]">
        {/* Header */}
        <div className="w-full h-[56px] flex items-center justify-between px-[16px] shrink-0">
          <div className="w-[24px]" /> {/* Spacer */}
          <p className="font-sans font-bold text-[17px] text-[#1d293d]">答题卡</p>
          <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer" onClick={onClose}>
            <IconClose />
          </div>
        </div>
        
        {/* Legend */}
        <div className="w-full px-[24px] mb-[24px] flex gap-[24px]">
           <LegendItem type="correct" count={0} />
           <LegendItem type="wrong" count={0} />
        </div>
        
        {/* Grid Scroll Area */}
        <div className="w-full overflow-y-auto px-[16px] pb-[24px]">
           <div className="grid grid-cols-6 gap-y-[16px] gap-x-[12px] justify-items-center">
              {Array.from({ length: totalQuestions }).map((_, i) => (
                <GridItem 
                  key={i} 
                  number={i + 1} 
                  status={i + 1 === currentQuestion ? 'current' : 'default'} 
                />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
