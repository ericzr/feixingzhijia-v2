import React, { useState } from 'react';
import svgPaths from "../../imports/svg-mclhiw6gyp";

const chapters = [
  { id: 1, title: "概述", total: 60, done: 0, accuracy: 0 },
  { id: 2, title: "空域", total: 82, done: 0, accuracy: 0 },
  { id: 3, title: "法律法规", total: 125, done: 0, accuracy: 0 },
  { id: 4, title: "系统组成", total: 166, done: 0, accuracy: 0 },
  { id: 5, title: "任务规划", total: 55, done: 0, accuracy: 0 },
  { id: 6, title: "多旋翼动力飞控", total: 158, done: 0, accuracy: 0 },
  { id: 7, title: "多旋翼综合", total: 119, done: 0, accuracy: 0 },
];

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

// Icon4 from user import (Shuffle Icon)
function Icon4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99984 8.33317">
            <path d={svgPaths.p3acc4980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-3/4 right-[8.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99984 8.33317">
            <path d={svgPaths.p3acc4980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3316 11.6657">
            <path d={svgPaths.p33519380} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[65.83%] left-[8.33%] right-[68.45%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-45.45%_-17.95%_-45.46%_-17.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.31002 3.5001">
            <path d={svgPaths.p1b091f20} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[51.25%] right-[8.33%] top-[65.63%]" data-name="Vector">
        <div className="absolute inset-[-44.44%_-10.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74987 3.54154">
            <path d={svgPaths.p26602760} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ShuffleButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="flex items-center justify-center size-[36px] cursor-pointer p-[8px] box-content" // Added padding to match click area
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[20px]">
         <Icon4 />
      </div>
    </div>
  );
}

function Header({ onBack, onToggleMode }: { onBack: () => void, onToggleMode: () => void }) {
  return (
    <div className="flex items-center justify-center pt-[50px] pb-3 w-full relative z-10 shrink-0">
      <div className="absolute left-[12px] top-[50px] z-20">
        <BackButton onClick={onBack} />
      </div>
      <p className="font-bold text-[#685622] text-[18px] text-center tracking-[-0.44px] leading-[28px]">章节练习</p>
      <div className="absolute right-[12px] top-[46px] z-20"> {/* Adjusted top slightly for alignment */}
        <ShuffleButton onClick={onToggleMode} />
      </div>
    </div>
  );
}

function ChapterItem({ chapter, isRandomMode }: { chapter: typeof chapters[0], isRandomMode: boolean }) {
  return (
    <div className="flex gap-[16px] items-start w-full relative">
        {/* Number Circle */}
        <div className="bg-[#c99619] flex items-center justify-center rounded-full size-[24px] shrink-0 mt-[4px]">
            <span className="font-bold text-[12px] text-white leading-[16px]">{chapter.id}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[12px] w-full border-b border-transparent pb-[20px]">
            {/* Title */}
            <h3 className="font-medium text-[#1d293d] text-[17px] leading-[17px] tracking-[-0.43px]">{chapter.title}</h3>
            
            <div className="flex items-end justify-between w-full mt-[-4px]">
                <div className="flex flex-col gap-[8px] flex-1 mr-[16px]">
                    {/* Stats */}
                    <p className="font-light text-[#99a1af] text-[13px] leading-[19.5px] tracking-[-0.08px]">
                        {chapter.done}/{chapter.total} 正确率{chapter.accuracy}%
                    </p>
                    {/* Progress Bar */}
                    <div className="bg-[#fbf2db] h-[6px] w-full rounded-full overflow-hidden max-w-[225px]">
                        <div 
                            className="bg-[#c99619] h-full rounded-full" 
                            style={{ width: `${(chapter.done / chapter.total) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Button */}
                <button 
                  className={`rounded-[25px] h-[28px] px-[16px] flex items-center justify-center shrink-0 mb-[6px] transition-colors ${
                    isRandomMode 
                      ? "bg-[#fbe6db] text-[#c97419]" 
                      : "bg-[#fbf2db] text-[#c99619]"
                  }`}
                >
                    <span className="font-medium text-[12px]">{isRandomMode ? "随机练习" : "顺序练习"}</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export function ChapterPractice({ onBack }: { onBack: () => void }) {
  const [isRandomMode, setIsRandomMode] = useState(false);

  return (
    <div className="bg-[#fefbf4] min-h-screen flex flex-col relative w-full overflow-hidden">
      <Header onBack={onBack} onToggleMode={() => setIsRandomMode(!isRandomMode)} />
      
      <div className="flex-1 overflow-y-auto px-[24px] pt-[20px] pb-[40px] flex flex-col gap-[32px]">
        {chapters.map(chapter => (
          <ChapterItem key={chapter.id} chapter={chapter} isRandomMode={isRandomMode} />
        ))}
      </div>
    </div>
  );
}
