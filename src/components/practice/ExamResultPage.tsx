import React from 'react';
import svgPaths from '../../imports/svg-4q09br32sd';

// --- Icons ---

function IconWave() {
  return (
    <div className="h-[126px] relative shrink-0 w-full overflow-hidden">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 126">
        <path d={svgPaths.pac80f00} stroke="white" strokeLinecap="round" strokeWidth="3.14497" />
        <path d={svgPaths.p212ddc00} fill="white" />
      </svg>
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[31.992px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9923 31.9923">
        <path d={svgPaths.p13f1bf00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99952" />
        <path d={svgPaths.p36573f70} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99952" />
      </svg>
    </div>
  );
}

function IconBack() {
  return (
    <div className="relative shrink-0 w-[7.005px] h-[14px]">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
          <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
       </svg>
    </div>
  );
}

function IconArrowRight() {
  return (
    <div className="relative shrink-0 size-[15.996px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
          <path d={svgPaths.p5fe1780} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
      </svg>
    </div>
  );
}

function IconSignal() {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d="M1.33333 13.3333H1.34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 13.3333V10.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 13.3333V5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667V13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </svg>
      </div>
    );
  }
  
  function IconWifi() {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d="M8 13.3333H8.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3978c100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3aa7f280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3129d700} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </svg>
      </div>
    );
  }
  
  function IconBattery() {
    return (
      <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0">
        <div className="overflow-clip relative size-full">
          <div className="absolute inset-[41.67%_8.33%_41.67%_91.67%]">
            <div className="absolute inset-[-25%_-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
                <path d="M0.666667 3.33333V0.666667Z" fill="#00C950" />
                <path d="M0.666667 3.33333V0.666667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-[8.33%] right-1/4 top-1/4">
            <div className="absolute inset-[-8.33%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                <path d={svgPaths.p2bb6e180} fill="#00C950" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

// --- Components ---

function StatusBar() {
    return (
      <div className="h-[40px] pointer-events-auto sticky top-0 w-full z-50">
        <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-full">
          <div className="h-[24px] relative shrink-0 w-[41.156px]">
            <p className="absolute font-sans font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">14:34</p>
          </div>
          <div className="h-[16px] relative shrink-0 w-[56px]">
            <div className="content-stretch flex gap-[4px] items-center relative size-full text-black">
              <IconSignal />
              <IconWifi />
              <IconBattery />
            </div>
          </div>
        </div>
      </div>
    );
}

function ActionRow({ label, value, showArrow = true }: { label: string, value: string, showArrow?: boolean }) {
    return (
        <div className="bg-[#fbf2db] h-[54.48px] relative rounded-[14px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[15.996px] py-0 relative size-full">
                    {/* Label */}
                    <div className="relative shrink-0">
                        <p className="font-sans font-medium text-[15px] text-[#755609] tracking-[-0.23px]">{label}</p>
                    </div>
                    {/* Value + Arrow */}
                    <div className="flex items-center gap-[4px]">
                        <p className="font-sans font-normal text-[14px] text-[#c99619] tracking-[-0.15px]">{value}</p>
                        {showArrow && <IconArrowRight />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ExamResultPage({ onBack, onRetake }: { onBack: () => void, onRetake: () => void }) {
  return (
    <div className="bg-[#fefbf4] relative size-full min-h-screen flex flex-col overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute top-0 left-0 w-full h-[349px] bg-gradient-to-b from-[#c99619] to-[#f5c244] z-0">
             {/* Wave Pattern */}
             <div className="absolute top-[220px] left-0 w-full opacity-30">
                <IconWave />
             </div>
             
             {/* User Info */}
             <div className="absolute top-[99px] left-[42px] right-0 flex items-center gap-[16px]">
                {/* Avatar */}
                <div className="w-[56px] h-[56px] rounded-full bg-[rgba(255,255,255,0.2)] border-[1.5px] border-[rgba(255,255,255,0.3)] flex items-center justify-center">
                    <IconUser />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[4px]">
                    <p className="font-sans font-medium text-[17px] text-white tracking-[-0.43px]">无人机学员</p>
                    <p className="font-sans font-light text-[13px] text-white opacity-80 tracking-[-0.08px]">本次考试已完成，快去告诉好友～</p>
                </div>
             </div>

             {/* Stats Row */}
             <div className="absolute top-[187px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[400px] h-[93px] bg-[rgba(255,255,255,0.1)] rounded-[14px] border-[0.75px] border-[rgba(255,255,255,0.1)] flex items-center justify-between px-[16px]">
                {/* Time */}
                <div className="flex-1 flex flex-col items-center gap-[4px] border-r-[0.75px] border-[rgba(255,255,255,0.1)] pr-[0.75px]">
                    <p className="font-sans font-medium text-[24px] text-white tracking-[1.27px]">00:00:06</p>
                    <p className="font-sans font-normal text-[13px] text-white opacity-80 tracking-[-0.08px]">考试用时</p>
                </div>
                {/* Accuracy */}
                <div className="flex-1 flex flex-col items-center gap-[4px]">
                    <p className="font-sans font-medium text-[24px] text-white tracking-[0.07px]">0%</p>
                    <p className="font-sans font-normal text-[13px] text-white opacity-80 tracking-[-0.08px]">正确率</p>
                </div>
             </div>
        </div>

        {/* Status Bar */}
        <StatusBar />
        
        {/* Back Button (Floating on top of gradient) */}
        <div className="absolute top-[40px] left-0 w-full px-[12px] z-50">
            <div className="w-[36px] h-[28px] flex items-center justify-center cursor-pointer" onClick={onBack}>
                <IconBack />
            </div>
        </div>

        {/* Main Content Card (Floating over gradient) */}
        <div className="relative z-10 flex flex-col items-center w-[calc(100%-46px)] max-w-[403px] mx-auto mt-[261px] bg-white rounded-[16px] shadow-[0px_1px_3px_0px_#fbf2db] pt-[40px] px-[24px] pb-[40px] gap-[40px]">
             
             {/* Score */}
             <div className="flex flex-col items-center gap-[16px] w-full">
                <p className="font-sans font-medium text-[16px] text-[#1d293d] tracking-[-0.31px]">本次考试成绩</p>
                <div className="relative h-[56px] flex items-baseline justify-center">
                    <p className="font-sans font-bold text-[56px] text-[#c99619] tracking-[0.3px] leading-none">0</p>
                    <p className="font-sans font-medium text-[18px] text-[#c99619] tracking-[-0.44px] ml-[2px]">分</p>
                </div>
             </div>

             {/* Actions List */}
             <div className="flex flex-col gap-[12px] w-full">
                 <ActionRow label="未答题" value="100题" />
                 <ActionRow label="回顾" value="回顾本套试卷" />
                 <ActionRow label="重考" value="重考本套试卷" />
             </div>

        </div>

        {/* Bottom Button */}
        <div className="mt-auto mb-[20px] px-[16px] w-full max-w-[480px] mx-auto z-10">
            <div 
                className="w-full h-[54px] bg-[#c99619] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(251,242,219,0.1),0px_4px_6px_-4px_rgba(251,242,219,0.1)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                onClick={onRetake}
            >
                <p className="font-sans font-medium text-[17px] text-white tracking-[-0.43px]">重新出卷</p>
            </div>
        </div>

    </div>
  );
}
