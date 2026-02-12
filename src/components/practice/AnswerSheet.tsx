import React from 'react';
import svgPaths from '../../imports/svg-mrcg1ilzcy'; // Assuming this is where the SVGs are

interface AnswerSheetProps {
  onClose: () => void;
  onSelectQuestion: (index: number) => void;
  totalQuestions: number;
  currentQuestionIndex: number;
  // This could be a map or simple logic for now. 
  // Map<number, 'correct' | 'wrong' | 'unanswered'>
  // For now, let's just pass some counts or stats if needed, 
  // but for the grid we need per-question status.
  // I'll assume we pass a function or map.
  getQuestionStatus?: (index: number) => 'correct' | 'wrong' | 'unanswered' | 'current';
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[31.969px] cursor-pointer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative size-full">
        <div className="h-[23.988px] overflow-clip relative shrink-0 w-full">
            <div className="absolute inset-1/4">
                <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
                    <path d={svgPaths.p3c506100} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
                </svg>
                </div>
            </div>
            <div className="absolute inset-1/4">
                <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
                    <path d={svgPaths.p1202b780} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
                </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function BlueCheckIcon() {
  return (
    <div className="relative shrink-0 size-[9.993px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
          <path d={svgPaths.p2b18fce0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
      </svg>
    </div>
  );
}

function RedCrossIcon() {
  return (
    <div className="relative shrink-0 size-[9.993px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
          <path d={svgPaths.p3152d700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
          <path d={svgPaths.p7738180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
      </svg>
    </div>
  );
}

export function AnswerSheet({ onClose, onSelectQuestion, totalQuestions, currentQuestionIndex }: AnswerSheetProps) {
  // Generate question list
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  // Determine styles for each bubble
  const getBubbleStyle = (index: number) => {
    // 0-based index
    const isCurrent = index === currentQuestionIndex;
    
    // For now, let's mock some statuses based on index to demonstrate
    // In a real app, this would come from props
    let status: 'correct' | 'wrong' | 'unanswered' = 'unanswered';
    
    // Mock data for demo: 
    // - index 0 (Q1) is 'correct' (Blue)
    // - index 1 (Q2) is 'wrong' (Red)
    // - current is special border
    // - rest gray
    
    // But logic: Current overrides color? Or Current is just a border? 
    // In the design, current #1 is White bg with Border.
    // Unanswered are Gray bg.
    
    // We can say:
    // if current -> "bg-white border-[0.745px] border-[#45556c] text-[#1d293d]"
    // else if correct -> "bg-[#1677ff] text-white"
    // else if wrong -> "bg-[#ff4d4f] text-white"
    // else -> "bg-[#f5f5f5] text-[#45556c]"
    
    if (isCurrent) {
        return "bg-white border-[0.745px] border-[#45556c] text-[#1d293d]";
    }
    
    // Mock logic
    if (index === 0) return "bg-[#1677ff] text-white"; // Q1 Correct
    // if (index === 1) return "bg-[#ff4d4f] text-white"; // Q2 Wrong (if we want to show it)
    
    return "bg-[#f5f5f5] text-[#45556c]";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" 
        onClick={onClose}
      />
      
      {/* Card */}
      <div className="relative bg-white flex flex-col gap-[8px] h-[554px] w-full max-w-[385px] mx-[16px] rounded-[18px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="h-[56px] shrink-0 w-full flex items-center justify-between px-[16px] border-b border-transparent">
          <div className="w-[32px]" /> {/* Spacer */}
          <p className="font-sans font-bold text-[#1d293d] text-[17px] tracking-[-0.4316px]">答题卡</p>
          <div onClick={onClose}>
            <CloseIcon />
          </div>
        </div>

        {/* Summary Legend */}
        <div className="h-[23px] shrink-0 w-full flex items-center px-[24px] gap-[24px]">
             {/* Correct Count */}
             <div className="flex items-center gap-[6px]">
                <div className="bg-[#1677ff] rounded-full size-[16px] flex items-center justify-center">
                    <BlueCheckIcon />
                </div>
                <span className="font-sans font-medium text-[#1677ff] text-[15px]">1</span>
             </div>

             {/* Wrong Count */}
             <div className="flex items-center gap-[6px]">
                <div className="bg-[#ff4d4f] rounded-full size-[16px] flex items-center justify-center">
                    <RedCrossIcon />
                </div>
                <span className="font-sans font-medium text-[#ff4d4f] text-[15px]">0</span>
             </div>

             {/* Unanswered/Total Count */}
             <div className="flex items-center gap-[8px]">
                 <div className="bg-[#fbf2db] rounded-full size-[20px] flex items-center justify-center">
                     <div className="w-[12px] h-[12px] flex items-center justify-center">
                       {/* Gray circle icon? The design has a gray icon in yellow circle. Reusing simple logic */}
                       <div className="size-[8px] border-2 border-[#6a7282] rounded-full"></div>
                     </div>
                 </div>
                 <span className="font-sans font-normal text-[#6a7282] text-[15px]">1/{totalQuestions}</span>
             </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 overflow-y-auto p-[16px]">
             <div className="grid grid-cols-6 gap-y-[16px] gap-x-[12px] justify-items-center">
                 {questions.map((q, i) => (
                     <div 
                       key={q}
                       className={`size-[40px] rounded-full flex items-center justify-center text-[15px] font-normal cursor-pointer transition-transform active:scale-95 ${getBubbleStyle(i)}`}
                       onClick={() => {
                         onSelectQuestion(i);
                         onClose();
                       }}
                     >
                        {q}
                     </div>
                 ))}
             </div>
        </div>
      </div>
    </div>
  );
}
