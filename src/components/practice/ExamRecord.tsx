import React from 'react';
import svgPaths from "../../imports/svg-fwlyzecpt8";

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

// Trash Icon (Icon4 from import)
function IconTrash() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[45.83%_58.33%_29.16%_41.67%]">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.16%_58.33%]">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3321 14.9986">
            <path d={svgPaths.p2f1ecd80} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6651 1.66651">
            <path d="M0.833254 0.833254H15.8318" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33317 4.99984">
            <path d={svgPaths.p266fb980} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TrashButton() {
  return (
    <div className="flex items-center justify-center size-[36px] cursor-pointer p-[8px] box-content">
      <div className="relative shrink-0 size-[20px]">
        <IconTrash />
      </div>
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-center pt-[50px] pb-3 w-full relative z-10 shrink-0">
      <div className="absolute left-[12px] top-[50px] z-20">
        <BackButton onClick={onBack} />
      </div>
      <p className="font-bold text-[#685622] text-[18px] text-center tracking-[-0.44px] leading-[28px]">考试记录</p>
      <div className="absolute right-[12px] top-[46px] z-20">
        <TrashButton />
      </div>
    </div>
  );
}

// Chart Components
function HistoryChart() {
  return (
    <div className="h-[128px] relative shrink-0 w-full mt-[24px]">
      {/* Y Axis Labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between w-[32px]">
        <div className="text-[#755609] text-[10px] font-medium text-right pr-2 -mt-2">100</div>
        <div className="text-[#755609] text-[10px] font-medium text-right pr-2">70</div>
        <div className="h-4"></div> {/* Spacer for bottom */}
      </div>

      {/* Chart Area */}
      <div className="absolute left-[32px] top-[8px] bottom-[24px] right-0 border-l border-b border-[#755609] border-opacity-30">
        {/* Horizontal line for 70? The import has borders on Container7. */}
        {/* Actually import structure:
            Container5: Y labels (100, 70).
            Container7: The box with borders.
              border-b: #755609 (solid 0.745px)
              border-l: #755609 (solid 0.745px)
              And an inner Container6 with border-t #f5c244.
        */}
        <div className="absolute left-0 right-0 top-[35%] h-px bg-[#f5c244] opacity-70"></div> {/* Approximate 70 line */}
      </div>

      {/* X Axis Labels */}
      <div className="absolute bottom-0 left-[32px] right-0 flex justify-between px-1">
         <span className="text-[#755609] text-[10px] font-medium">1</span>
         <span className="text-[#755609] text-[10px] font-medium">5</span>
         <span className="text-[#755609] text-[10px] font-medium">10</span>
      </div>
    </div>
  );
}

// Icon5 (Score History Icon)
function IconHistory() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_293_1231)">
          <path d={svgPaths.p24de8880} fill="#C99619" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d={svgPaths.p18c0ad40} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" fill="#C99619" />
          <path d="M6.66507 5.99856H5.33205Z" fill="#C99619" />
          <path d="M6.66507 5.99856H5.33205" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d="M10.6641 8.66458H5.33205Z" fill="#C99619" />
          <path d="M10.6641 8.66458H5.33205" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d="M10.6641 11.3306H5.33205Z" fill="#C99619" />
          <path d="M10.6641 11.3306H5.33205" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_293_1231">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Illustration Icon (Icon7)
function IconIllustration() {
  return (
    <div className="h-[160px] overflow-clip relative shrink-0 w-full">
      {/* Background papers */}
      <div className="absolute flex inset-[23.06%_37.59%_43.06%_32.59%] items-center justify-center">
        <div className="flex-none h-[48px] rotate-[350deg] w-[40px]">
           <svg className="block size-full" fill="none" viewBox="0 0 40 48"><path d={svgPaths.pfb98c00} fill="#FBF2DB" /></svg>
        </div>
      </div>
      {/* Lines on paper 1 */}
      <div className="absolute flex inset-[28.85%_46.85%_68.11%_35.92%] items-center justify-center">
        <div className="flex-none h-px rotate-[350deg] w-[28px] bg-[#F5DB9B]"></div>
      </div>
      <div className="absolute flex inset-[33.77%_45.98%_63.19%_36.78%] items-center justify-center">
        <div className="flex-none h-px rotate-[350deg] w-[28px] bg-[#F5DB9B]"></div>
      </div>

      {/* Paper 2 */}
      <div className="absolute flex inset-[18.97%_18.74%_48.97%_53.74%] items-center justify-center">
         <div className="flex-none h-[48px] rotate-[5deg] w-[40px]">
            <svg className="block size-full" fill="none" viewBox="0 0 40 48"><path d={svgPaths.pfb98c00} fill="#FBF2DB" /></svg>
         </div>
      </div>
      
      {/* Box */}
      {/* Front Face Left */}
      <div className="absolute inset-[55%_30%_30%_30%]">
         <svg className="block size-full" fill="none" viewBox="0 0 64 24"><path d={svgPaths.p3fbeaf00} fill="#D1D5DB" /></svg>
      </div>
      {/* Side Face */}
      <div className="absolute inset-[55%_65%_20%_30%]">
         <svg className="block size-full" fill="none" viewBox="0 0 8 40"><path d={svgPaths.p3b336a00} fill="#9CA3AF" /></svg>
      </div>
      {/* Top Face */}
      <div className="absolute bottom-1/4 left-[30%] right-[30%] top-1/2">
         <svg className="block size-full" fill="none" viewBox="0 0 64 40">
           <path d={svgPaths.p31133700} fill="url(#paint0_linear_293_1227)" />
           <defs>
            <linearGradient id="paint0_linear_293_1227" x1="0" x2="0" y1="0" y2="40">
              <stop stopColor="#F5F5F5" />
              <stop offset="1" stopColor="#E0E0E0" />
            </linearGradient>
           </defs>
         </svg>
      </div>
      {/* Front Face Right/Main */}
      <div className="absolute inset-[65%_30%_10%_30%]">
         <svg className="block size-full" fill="none" viewBox="0 0 64 40"><path d={svgPaths.pdf65200} fill="#D4D4D4" /></svg>
      </div>
      {/* Center Line */}
      <div className="absolute bottom-[10%] left-1/2 right-1/2 top-3/4 w-[1px] bg-[#C0C0C0] -ml-[0.5px]"></div>

      {/* Confetti / Decor */}
      <div className="absolute inset-[53%_73%_43%_23%]">
         <svg className="block size-full" fill="none" viewBox="0 0 7 7"><path d={svgPaths.p15208200} fill="#FBF2DB" /></svg>
      </div>
      <div className="absolute inset-[58.5%_18.5%_38.5%_78.5%]">
         <svg className="block size-full" fill="none" viewBox="0 0 5 5"><path d={svgPaths.p39f7c480} fill="#FBF2DB" /></svg>
      </div>
       {/* Shadow */}
      <div className="absolute inset-[93%_30%_3%_30%]">
         <svg className="block size-full" fill="none" viewBox="0 0 64 7"><path d={svgPaths.p2dd91300} fill="black" opacity="0.05" /></svg>
      </div>
    </div>
  );
}

export function ExamRecord({ onBack, onStartExam }: { onBack: () => void, onStartExam?: () => void }) {
  return (
    <div className="bg-[#fefbf4] min-h-screen flex flex-col relative w-full overflow-hidden">
      <Header onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto px-[16px] pt-[16px] pb-[100px] flex flex-col gap-[16px]">
        
        {/* Top Card: History Stats */}
        <div className="bg-gradient-to-b from-[#f5db9b] to-[#fbf2db] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] p-[16px] w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-[4px]">
                <div className="flex items-center gap-[8px]">
                    <IconHistory />
                    <span className="font-bold text-[#1d293d] text-[15px] tracking-[-0.23px]">历史成绩</span>
                </div>
                <div className="bg-[#f5db9b] rounded-[4px] px-[8px] py-[4px]">
                    <span className="font-medium text-[#c99619] text-[12px]">平均成绩：-分</span>
                </div>
            </div>
            {/* Chart */}
            <HistoryChart />
        </div>

        {/* List Card */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] min-h-[400px] flex flex-col">
            {/* Header Row */}
            <div className="flex items-center justify-between px-0 py-[16px] border-b border-[#f9fafb]">
                <div className="w-1/4 text-center font-medium text-[#6a7282] text-[13px]">分数</div>
                <div className="w-1/4 text-center font-medium text-[#6a7282] text-[13px]">用时</div>
                <div className="w-1/4 text-center font-medium text-[#6a7282] text-[13px] flex items-center justify-center gap-1">
                    日期
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d={svgPaths.p12e66c80} stroke="#FBF2DB" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d={svgPaths.p822c570} stroke="#FBF2DB" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="w-1/4 text-center font-medium text-[#6a7282] text-[13px]">成绩</div>
            </div>

            {/* Empty State Content */}
            <div className="flex-1 flex flex-col items-center justify-center py-[65px]">
                <div className="w-[160px] h-[160px] opacity-90">
                    <IconIllustration />
                </div>
                <div className="mt-[16px] text-center">
                    <p className="text-[#99a1af] text-[13px] leading-[21px]">暂无成绩记录，</p>
                    <p className="text-[#99a1af] text-[13px] leading-[21px]">现在就去考试吧~</p>
                </div>
            </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="absolute bottom-0 left-0 w-full p-[32px] bg-gradient-to-t from-[#fefbf4] via-[#fefbf4] to-transparent">
         <button 
           className="w-full bg-[#c99619] text-white font-medium text-[16px] h-[50px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(251,242,219,0.5)] flex items-center justify-center"
           onClick={onStartExam}
         >
           开始考试
         </button>
      </div>
    </div>
  );
}
