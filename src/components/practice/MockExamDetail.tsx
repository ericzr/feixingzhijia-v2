import React, { useState, useEffect } from 'react';
import { SECONDARY_PAGE_BG } from '../../constants/theme';
import svgPaths from '../../imports/svg-jamhi0x1lm';
import { FavoriteButton } from './FavoriteButton';
import { AnswerSheetModal } from './AnswerSheetModal';
import { SubmitExamModal } from './SubmitExamModal';
import { ExamResultPage } from './ExamResultPage';

// --- Icons ---

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

function IconBack() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[4px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[7.005px]">
            <div className="absolute inset-[-8.33%_-16.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
                <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconPause() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7083 19.7083">
            <path d={svgPaths.p3aa9e980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
            <path d="M7.882 6.898 V12.810" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
            <path d="M11.826 6.898 V12.810" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconSettings() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%_12.5%_16.67%_12.5%]">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8749 17.8749">
            <path d={svgPaths.p1e2332c0} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87494 6.87494">
            <path d={svgPaths.p18d6980} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconClose() {
  return (
    <div className="relative shrink-0 size-[11.994px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <path d={svgPaths.p3ff9680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        <path d={svgPaths.p6b1c100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
      </svg>
    </div>
  );
}

function IconList() {
  return (
    <div className="relative shrink-0 size-[11.994px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_266_95_list)" id="Icon">
          <path d="M1.49928 2.49879H1.50428" id="Vector" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M1.49928 5.9971H1.50428" id="Vector_2" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M1.49928 9.49541H1.50428" id="Vector_3" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 2.49879H10.4949" id="Vector_4" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 5.9971H10.4949" id="Vector_5" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 9.49541H10.4949" id="Vector_6" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
        </g>
        <defs>
          <clipPath id="clip0_266_95_list">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// --- Components ---

function StatusBar() {
  return (
    <div className="bg-white h-[40px] pointer-events-auto sticky top-0 w-full z-50">
    </div>
  );
}

function Header({ onBack, timeLeft }: { onBack?: () => void, timeLeft: string }) {
  return (
    <div className="bg-white content-stretch flex h-[65px] items-center justify-between pb-[0.745px] pt-0 px-[8.004px] w-full z-40 border-b border-[#f3f4f6]">
      {/* Back Button */}
      <div className="h-[28px] relative shrink-0 w-[36px] cursor-pointer" onClick={onBack}>
        <div className="content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative size-full">
          <IconBack />
        </div>
      </div>

      {/* Timer */}
      <div className="h-[25.489px] relative shrink-0 w-[159.647px]">
        <div className="content-stretch flex gap-[7.992px] items-center relative size-full">
          <div className="h-[25.489px] relative shrink-0 w-[129.656px]">
             <p className="absolute font-sans font-medium leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] top-[0.23px] tracking-[-0.4316px] w-[130px]">剩余时间 {timeLeft}</p>
          </div>
          <div className="relative shrink-0 size-[21.999px]">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <IconPause />
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="relative shrink-0 size-[37.984px]">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
          <IconSettings />
        </div>
      </div>
    </div>
  );
}

type Option = {
  id: string;
  text: string;
};

const OPTIONS: Option[] = [
  { id: 'A', text: '空机重量超过250克' },
  { id: 'B', text: '最大起飞重量不高于7公斤的视距内运行' },
  { id: 'C', text: '最大起飞重量不低于250克' },
];

const CORRECT_OPTION = 'C';

function OptionCard({ 
  id, 
  text, 
  isSelected, 
  isAnswered, 
  correctOption, 
  onClick 
}: { 
  id: string, 
  text: string, 
  isSelected: boolean, 
  isAnswered: boolean, 
  correctOption: string, 
  onClick: () => void 
}) {
  let bgClass = "bg-white";
  let textClass = "text-[#314158]";
  let labelClass = "text-[#314158]";
  let Icon = null;

  if (isAnswered) {
    if (isSelected) {
      if (id === correctOption) {
        bgClass = "bg-[#e6f7ff]"; // Correct selected
        textClass = "text-[#1677ff]";
        labelClass = "text-[#1677ff]";
        Icon = (
          <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p331b4880} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </svg>
        );
      } else {
        bgClass = "bg-[#fff2f0]"; // Wrong selected
        textClass = "text-[#ff4d4f]";
        labelClass = "text-[#ff4d4f]";
        Icon = (
          <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2ae59200} stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p22edf80} stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </svg>
        );
      }
    } else if (id === correctOption) {
       bgClass = "bg-[#e6f7ff]"; // Correct but not selected (reveal)
       textClass = "text-[#1677ff]";
       labelClass = "text-[#1677ff]";
       Icon = (
         <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p331b4880} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
         </svg>
       );
    }
  }

  return (
    <div 
      className={`${bgClass} min-h-[66px] relative rounded-[14px] shrink-0 w-full cursor-pointer transition-colors p-[20px] flex items-center justify-between`}
      onClick={() => !isAnswered && onClick()}
    >
      <div className="flex gap-[12px] items-center w-full">
        <p className={`font-sans font-normal leading-[26px] not-italic ${labelClass} text-[16px] tracking-[-0.3125px]`}>{id}.</p>
        <p className={`font-sans font-normal leading-[26px] not-italic ${textClass} text-[16px] tracking-[-0.3125px]`}>{text}</p>
      </div>
      {Icon && <div className="shrink-0 ml-[10px]">{Icon}</div>}
    </div>
  );
}

function AnswerResult({ userSelection, correctOption }: { userSelection: string, correctOption: string }) {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center w-full h-[24px]">
         <div className="flex items-center gap-[8px]">
             {/* Trophy Icon */}
             <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                 <path d={svgPaths.p33c7d200} fill="#FE9A00" />
                 <path d={svgPaths.p33c7d200} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p262abe80} fill="#FE9A00" />
                 <path d={svgPaths.p36e26780} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p3635f700} fill="#FE9A00" />
                 <path d={svgPaths.p26760700} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d="M6.66603 5.83279H13.3327" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p36828680} fill="#FE9A00" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p23bd8900} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
             </svg>
             <span className="font-sans font-bold text-[15px] text-[#1d293d]">正确答案</span>
         </div>
         <div className="flex items-center gap-[4px] border border-[#fbf2db] rounded-[4px] px-[8px] py-[2px] bg-white shadow-sm cursor-pointer">
             <span className="text-[12px] text-[#90a1b9]">纠错</span>
         </div>
      </div>
      
      <div className="flex items-center gap-[8px] text-[15px] text-[#314158] font-medium">
         <span>答案：</span>
         <span className="font-bold text-[#1677ff] text-[18px]">{correctOption}</span>
         <span className="ml-[8px]">您选择</span>
         <span className={`font-bold text-[18px] ${userSelection === correctOption ? 'text-[#1677ff]' : 'text-[#ff4d4f]'}`}>{userSelection}</span>
      </div>
    </div>
  );
}

function MnemonicCard() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
       <div className="flex items-center gap-[8px]">
          <span className="font-sans font-bold text-[15px] text-[#1d293d]">速记口诀</span>
          <svg className="size-[18px]" fill="none" viewBox="0 0 15 17">
             <path d={svgPaths.p123a9100} fill="#00C950" stroke="#00C950" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
       </div>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px] text-[15px] text-[#45556c]">
             <span>实名登记</span>
             <span className="bg-[#fef9c2]/50 text-[#f0b100] px-[4px] rounded font-bold">250</span>
             <span>, 无人机需实名</span>
          </div>
          <div className="bg-gradient-to-b from-[#fadb14] to-[#faad14] px-[12px] py-[6px] rounded-[25px] flex items-center gap-[4px] shadow-sm cursor-pointer">
             <span className="text-[12px] font-black italic text-[#7b3306] opacity-80">VIP</span>
             <span className="text-[12px] font-bold text-[#7b3306]">查看完整口诀 &gt;</span>
          </div>
       </div>
    </div>
  );
}

function ExplanationCard() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
       <div className="flex items-center gap-[8px]">
          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
             <path d={svgPaths.p32e59c00} fill="#1677FF" fillOpacity="0.1" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d={svgPaths.p15ad7800} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M7.49904 6.74892H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M11.999 9.74844H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M11.999 12.748H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          <span className="font-sans font-bold text-[15px] text-[#1d293d]">题目解析</span>
       </div>
       <div className="text-[15px] text-[#45556c] leading-[24px]">
          <p>根据中国民航局规定，最大起飞重量不低于250克（含250克）的民用无人机需实名登记。</p>
          <p className="mt-[12px]">排除干扰项：</p>
       </div>
    </div>
  );
}

function Footer({ 
  onOpenAnswerSheet, 
  onSubmit,
  isFavorite,
  onToggleFavorite
}: { 
  onOpenAnswerSheet: () => void, 
  onSubmit: () => void,
  isFavorite: boolean,
  onToggleFavorite: () => void
}) {
  return (
    <div className="bg-white content-stretch flex h-[77px] items-center justify-between pb-0 pt-[0.745px] px-[15.996px] w-full z-40 border-t border-[#fbf2db]">
      
      {/* Left Stats */}
      <div className="h-[22.488px] relative shrink-0 w-[121.385px]">
        <div className="content-stretch flex gap-[23.988px] items-center relative size-full">
           {/* Wrong Count */}
           <div className="h-[22.488px] relative shrink-0 w-[33.202px]">
              <div className="content-stretch flex gap-[3.99px] items-center relative size-full">
                 <div className="bg-[#ff4d4f] relative rounded-full shrink-0 size-[19.998px]">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                       <IconClose />
                    </div>
                 </div>
                 <div className="h-[22.488px] relative shrink-0 w-[9.214px]">
                    <p className="absolute font-sans font-normal leading-[22.5px] left-0 not-italic text-[#6a7282] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">0</p>
                 </div>
              </div>
           </div>
           
           {/* Progress */}
           <div className="h-[22.488px] relative shrink-0 w-[64.194px] cursor-pointer" onClick={onOpenAnswerSheet}>
              <div className="content-stretch flex gap-[7.992px] items-center relative size-full">
                 <div className="bg-[#fbf2db] relative rounded-full shrink-0 size-[19.998px]">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                       <IconList />
                    </div>
                 </div>
                 <div className="relative shrink-0">
                    <p className="font-sans font-normal leading-[22.5px] not-italic text-[#6a7282] text-[15px] text-nowrap tracking-[-0.2344px]">1/100</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="h-[39.973px] relative shrink-0 w-[133.937px]">
        <div className="content-stretch flex gap-[15.996px] items-center relative size-full">
           {/* Favorite Button */}
           <FavoriteButton isFavorite={isFavorite} onClick={onToggleFavorite} />
           
           {/* Submit Button */}
           <div 
             className="bg-[#c99619] h-[38.472px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[77.968px] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
             onClick={onSubmit}
           >
              <p className="font-sans font-medium leading-[22.5px] not-italic text-[15px] text-center text-nowrap text-white tracking-[-0.2344px]">交卷</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export function MockExamDetail({ onBack }: { onBack?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes in seconds
  const [showAnswerSheet, setShowAnswerSheet] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logic: The answer is revealed if the user selected an option
  const isAnswered = selectedOption !== null;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setIsSubmitted(false);
    setSelectedOption(null);
    setTimeLeft(120 * 60);
    // Reset other states if needed
  };

  const handleOptionClick = (id: string) => {
    if (!isAnswered) {
      setSelectedOption(id);
    }
  };

  if (isSubmitted) {
    return <ExamResultPage onBack={() => setIsSubmitted(false)} onRetake={handleRetake} />;
  }

  return (
    <div className="relative size-full flex flex-col flex-1 min-h-0 overflow-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      <StatusBar />
      {/* Header and Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Header - now relative in flex flow, or sticky */}
          <div className="h-[65px] shrink-0 relative z-40">
             <Header onBack={onBack} timeLeft={formatTime(timeLeft)} />
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto pb-[20px]"> 
              <div className="content-stretch flex flex-col gap-[23.988px] items-start pt-[23.988px] px-[15.996px] w-full">
                 {/* Question Title */}
                 <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="bg-[#fbf2db] h-[25.966px] relative rounded-[4px] shrink-0 w-[51.979px] flex items-center justify-center mt-[2px]">
                       <p className="font-sans font-bold leading-[18px] not-italic text-[#c99619] text-[12px] text-nowrap">单选题</p>
                    </div>
                    <div className="relative shrink-0 flex-1">
                       <p className="font-sans font-medium leading-[27.625px] not-italic text-[#1d293d] text-[17px] tracking-[-0.4316px]">军用无人机可分为__________。</p>
                    </div>
                 </div>

                 {/* Options */}
                 <div className="content-stretch flex flex-col gap-[15.996px] w-full">
                    {OPTIONS.map(opt => (
                      <OptionCard 
                        key={opt.id} 
                        id={opt.id}
                        text={opt.text}
                        isSelected={selectedOption === opt.id}
                        isAnswered={isAnswered}
                        correctOption={CORRECT_OPTION}
                        onClick={() => handleOptionClick(opt.id)}
                      />
                    ))}
                 </div>

                 {/* Answer Results - Shown when answered */}
                 {isAnswered && (
                   <div className="flex flex-col gap-[16px] w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                      <AnswerResult userSelection={selectedOption} correctOption={CORRECT_OPTION} />
                      <MnemonicCard />
                      <ExplanationCard />
                   </div>
                 )}
              </div>
          </div>
      </div>

      <div className="h-[77px] shrink-0 relative z-40">
          <Footer 
            onOpenAnswerSheet={() => setShowAnswerSheet(true)} 
            onSubmit={() => setShowSubmitModal(true)} 
            isFavorite={isFavorite}
            onToggleFavorite={() => setIsFavorite(!isFavorite)}
          />
      </div>

      {showAnswerSheet && <AnswerSheetModal onClose={() => setShowAnswerSheet(false)} />}
      {showSubmitModal && <SubmitExamModal onCancel={() => setShowSubmitModal(false)} onConfirm={handleConfirmSubmit} />}
    </div>
  );
}
