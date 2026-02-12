import React, { useState } from 'react';
import svgPaths from "../../imports/svg-t31ol1fo6j";
import { VIPUpgradeModal } from "./VIPUpgradeModal";

function IconBack() {
  return (
    <div className="h-[14px] relative shrink-0 w-[7.005px]">
      <div className="absolute inset-[-8.33%_-16.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
          <path d={svgPaths.p35e48300} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        </svg>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="flex flex-col h-[28px] items-start justify-center pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px] cursor-pointer" 
      onClick={onClick}
    >
      <IconBack />
    </div>
  );
}

function SelectCity({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-center w-full h-[44px] relative z-40 mt-[40px]">
      <div className="absolute left-[12px]">
        <BackButton onClick={onBack} />
      </div>
      <div className="text-[18px] font-bold text-[#1d293d]">考前密卷</div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] w-full flex justify-center mb-4">
      <p className="bg-clip-text font-sans font-bold text-[30px] text-transparent tracking-[1.5px] drop-shadow-md" 
         style={{ backgroundImage: "linear-gradient(90deg, #FDE68A 0%, #F59E0B 100%)" }}>
        黄金提分
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#a93226] border-2 border-[#fde68a] rounded-[4px] px-[12px] py-[4px] shadow-sm transform -rotate-2">
      <p className="font-sans font-bold text-[#fde68a] text-[24px] tracking-[2.4px]">
        密卷
      </p>
    </div>
  );
}

function Stamp() {
  return (
    <div className="size-[60px] rounded-full border-[3px] border-[#c10007]/80 flex items-center justify-center transform rotate-[15deg] opacity-90 shadow-sm">
      <div className="size-[48px] rounded-full border border-[#c10007]/80 flex items-center justify-center">
         <span className="font-sans font-bold text-[#c10007] text-[24px]">密</span>
      </div>
    </div>
  );
}

function TextRow() {
  return (
    <div className="flex items-center justify-center gap-[8px] opacity-80 mt-4">
      <span className="text-[#8b4513] text-[12px]">→</span>
      <span className="text-[#8b4513] text-[12px]">试题组深挖考点·真题卷高度还原</span>
      <span className="text-[#8b4513] text-[12px]">←</span>
    </div>
  );
}

function PaperContent() {
  return (
    <div className="relative w-full max-w-[320px] aspect-[3/4] mx-auto mt-8">
      {/* Background Papers Stack Effect */}
      <div className="absolute inset-0 bg-[#fbf2db] opacity-40 rounded-[10px] transform rotate-[-4deg] translate-x-[-10px]"></div>
      <div className="absolute inset-0 bg-[#fbf2db] opacity-70 rounded-[10px] transform rotate-[2deg] translate-x-[5px]"></div>
      
      {/* Main Paper */}
      <div className="absolute inset-0 bg-[#e8dcca] rounded-[10px] shadow-2xl flex flex-col items-center pt-[60px] overflow-hidden">
         {/* Decorative gradient top */}
         <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
         
         {/* Red Box */}
         <div className="relative w-[85%] bg-[#c53f36] rounded-[8px] p-[24px] flex flex-col items-center shadow-inner">
            <Heading1 />
            <Container10 />
            
            {/* White label */}
            <div className="absolute -left-[10px] top-[40px] bg-white/90 shadow-sm px-[8px] py-[2px] transform -rotate-[5deg]">
               <span className="text-[#8b5e3c] text-[12px] font-bold tracking-widest">临考冲刺密卷</span>
            </div>
         </div>

         {/* Stamp */}
         <div className="absolute top-[180px] right-[40px]">
            <Stamp />
         </div>

         {/* Bottom Text */}
         <div className="absolute bottom-[60px] w-full flex flex-col items-center">
            <TextRow />
            <p className="text-[10px] text-[#8b4513]/50 mt-1 tracking-widest">无人机考试题库</p>
         </div>

         {/* Decorative Circle bottom right */}
         <div className="absolute -bottom-[60px] -right-[60px] size-[160px] border-[20px] border-[#8b4513]/10 rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
}

export function PreExamPapers({ onBack }: { onBack: () => void }) {
  const [showVIP, setShowVIP] = useState(false);

  return (
    <div className="relative size-full min-h-screen flex flex-col overflow-hidden" data-name="考前密卷" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <SelectCity onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto pb-[120px] px-4">
         <PaperContent />
      </div>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#fefbf4] via-[#fefbf4]/90 to-transparent z-50">
        <button 
          className="w-full max-w-[380px] mx-auto bg-[#c99619] text-white font-medium text-[17px] h-[50px] rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
          onClick={() => setShowVIP(true)}
        >
          立即解锁全部密卷
        </button>
      </div>

      <VIPUpgradeModal isOpen={showVIP} onClose={() => setShowVIP(false)} />
    </div>
  );
}
