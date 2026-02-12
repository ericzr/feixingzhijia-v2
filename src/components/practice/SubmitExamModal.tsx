import React from 'react';
import svgPaths from '../../imports/svg-p82dydfuhs';

// --- Icons ---

function IconProgress({ percent = 0 }: { percent: number }) {
  // Radius ~60 (based on 72 center and 132-12=120 diameter)
  // Perimeter ~ 376.99
  const perimeter = 376.99;
  const strokeDashoffset = perimeter - (percent / 100) * perimeter;

  return (
    <div className="relative size-[143.989px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.989 143.989">
        {/* Background Track */}
        <path d={svgPaths.p3d646a00} stroke="#F5F5F5" strokeWidth="9.99998" />
        {/* Active Track */}
        <div className="rotate-[270deg] origin-center">
             <path 
                d={svgPaths.p3d646a00} 
                stroke="#C99619" 
                strokeDasharray={`${perimeter} ${perimeter}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round" 
                strokeWidth="9.99998" 
                transform="rotate(-90 72 72)"
             />
        </div>
      </svg>
      {/* React SVG transform rotate is tricky, usually better to rotate the container or use transform attribute */}
      {/* The import has a container rotated 270deg. */}
    </div>
  );
}

// Re-implementing Icon9 properly based on import structure
function CircularProgress({ answered = 0, total = 100 }) {
  const percent = Math.min(100, Math.max(0, (answered / total) * 100));
  // Perimeter for p3d646a00 circle (r=60) is approx 377
  const perimeter = 376.99;
  const offset = perimeter - (percent / 100) * perimeter;

  return (
    <div className="relative size-[144px]">
      {/* Background Track */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="size-[143.989px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.989 143.989">
                <path d={svgPaths.p3d646a00} stroke="#F5F5F5" strokeWidth="10" />
            </svg>
         </div>
       </div>

      {/* Active Track (Rotated -90deg or 270deg to start from top) */}
      <div className="absolute inset-0 flex items-center justify-center rotate-[-90deg]">
         <div className="size-[143.989px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.989 143.989">
                <path 
                    d={svgPaths.p3d646a00} 
                    stroke="#C99619" 
                    strokeDasharray={`${perimeter} ${perimeter}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round" 
                    strokeWidth="10" 
                />
            </svg>
         </div>
      </div>
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[4px]">
          <p className="font-sans font-medium text-[13px] text-[#6a7282] tracking-[-0.0762px]">已做</p>
          <p className="font-sans font-bold text-[19px] text-[#1d293d] tracking-[-0.92px]">{answered}/{total}题</p>
      </div>
    </div>
  );
}

export function SubmitExamModal({ answered = 0, total = 100, onCancel, onConfirm }: { answered?: number, total?: number, onCancel: () => void, onConfirm: () => void }) {
  const unAnswered = total - answered;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" onClick={onCancel} />
      
      {/* Modal Content */}
      <div className="relative bg-white w-[334px] rounded-[18px] shadow-2xl flex flex-col items-center px-[24px] py-[32px] gap-[28px]">
        {/* Progress Circle */}
        <CircularProgress answered={answered} total={total} />
        
        {/* Message */}
        <div className="w-[214px]">
           <p className="font-sans font-normal text-[14px] text-[#6a7282] text-center tracking-[-0.15px]">
             您还有{unAnswered}题未做，确定交卷吗？
           </p>
        </div>
        
        {/* Buttons */}
        <div className="w-full flex items-center justify-between px-[8px]">
           <div className="w-[32px] cursor-pointer" onClick={onCancel}>
               <p className="font-sans font-medium text-[16px] text-[#99a1af] text-center tracking-[-0.31px]">取消</p>
           </div>
           <div className="w-[32px] cursor-pointer" onClick={onConfirm}>
               <p className="font-sans font-medium text-[16px] text-[#c99619] text-center tracking-[-0.31px]">确定</p>
           </div>
        </div>
      </div>
    </div>
  );
}
