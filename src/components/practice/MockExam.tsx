import React, { useEffect, useState } from 'react';
import { SECONDARY_PAGE_BG } from '../../constants/theme';
import svgPaths from '../../imports/svg-099w7j2n06';
import { MockExamDetail } from './MockExamDetail';

// --- Icons ---

function IconTime() {
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

function BackIcon() {
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

function ComputerIcon() {
  return (
    <div className="relative size-[113.855px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.855 113.855">
        <path d={svgPaths.p27688900} stroke="#DBEAFE" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
        <path d="M37.9517 99.6232H75.9033" stroke="#DBEAFE" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
        <path d="M56.9275 80.6473V99.6231" stroke="#DBEAFE" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
      </svg>
    </div>
  );
}

function StartArrowIcon() {
  return (
    <div className="relative size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p5fe1780} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
      </svg>
    </div>
  );
}

function TargetIcon() {
  return (
    <div className="relative shrink-0 size-[27.99px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9904 27.9904">
        <path d={svgPaths.p37013600} stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        <path d={svgPaths.p7b1fa00} stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        <path d={svgPaths.p7ef5380} stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
      </svg>
    </div>
  );
}

// --- Components ---

function StatusBar() {
  return (
    <div className="absolute top-0 left-0 w-full h-[40px] flex items-center justify-between px-[16px] z-20">
    </div>
  );
}

function TopBar({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute h-[56px] left-0 top-[40px] w-full z-10 flex items-center justify-center">
      {/* Back Button */}
      <div 
        className="absolute left-[16px] cursor-pointer"
        onClick={onBack}
      >
        <div className="w-[36px] h-[28px] flex items-center justify-center">
          <BackIcon />
        </div>
      </div>
      
      {/* Title */}
      <p className="font-sans font-bold text-[#685622] text-[18px]">模拟考试</p>
      
      {/* Right Action */}
      <div className="absolute right-[16px] cursor-pointer opacity-90">
        <p className="font-sans font-medium text-[#1d293d] text-[15px]">考试记录</p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full gap-[12px]">
      <div className="h-[22.488px] relative shrink-0 w-[80px]">
         <p className="absolute font-sans font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">{label}</p>
      </div>
      <div className="relative shrink-0 flex-1">
         <p className="font-sans font-medium leading-[22.5px] not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">{value}</p>
      </div>
    </div>
  );
}

function InfoRowWithSub({ label, main, sub }: { label: string, main: string, sub: string }) {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full gap-[12px]">
      <div className="h-[22.488px] relative shrink-0 w-[80px]">
         <p className="absolute font-sans font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">{label}</p>
      </div>
      <div className="flex items-center gap-[4px]">
         <p className="font-sans font-medium leading-[22.5px] not-italic text-[#1d293d] text-[15px] text-nowrap tracking-[-0.2344px]">{main}</p>
         <p className="font-sans font-normal leading-[22.5px] not-italic text-[#99a1af] text-[15px] text-nowrap tracking-[-0.2344px]">{sub}</p>
      </div>
    </div>
  );
}

function ExamInfoCard() {
  return (
    <div className="bg-white h-[368.098px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full mt-[136px]">
      {/* Avatar / Header */}
      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#c6d2ff] items-start left-1/2 -translate-x-1/2 pb-0 pt-[3.99px] px-[3.99px] rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[71.989px] to-[#dbeafe] top-[-35.99px] z-20">
        <div className="bg-white h-[64.008px] overflow-clip relative rounded-full shrink-0 w-full flex items-center justify-center">
             <div className="absolute bg-gradient-to-b from-[#f3e8ff] left-0 size-[64.008px] to-[#eff6ff] top-0" />
             {/* Hat Icon constructed from divs */}
             <div className="absolute top-[16px] left-[12px]">
                <div className="absolute bg-[#ad46ff] h-[15.996px] left-[4px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-[31.992px]" />
                <div className="absolute bg-[#9810fa] h-[11.994px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[16px] w-[39.996px]" />
             </div>
        </div>
      </div>

      {/* Phone Number */}
      <div className="absolute content-stretch flex items-center justify-center w-full top-[48px]">
        <p className="font-sans font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[20px] text-center text-nowrap tracking-[-0.4492px]">175****8447</p>
      </div>

      {/* Details List */}
      <div className="absolute content-stretch flex flex-col gap-[16px] w-full px-[24px] top-[108px]">
        <InfoRow label="考试类型" value="多旋翼无人机" />
        <InfoRow label="考试标准" value="100题，120分钟" />
        <InfoRowWithSub label="合格标准" main="70分及格" sub="(满分100分)" />
        <InfoRow label="出题规则" value="根据民航局出题规则组卷" />
      </div>

      {/* Warning Box */}
      <div className="absolute bg-[#fbf2db] content-stretch flex flex-col items-center left-[24px] right-[24px] pb-[12px] pt-[12px] px-[12px] rounded-[10px] top-[270px]">
        <p className="font-sans font-normal leading-[21.125px] not-italic relative shrink-0 text-[#755609] text-[13px] text-justify tracking-[-0.0762px]">
          答题不可修改，累计错题分数达到不及格标准时，系统自动提醒交卷，考试不通过。
        </p>
      </div>
    </div>
  );
}

function StartButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#c99619] relative rounded-[14px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-full cursor-pointer active:scale-[0.98] transition-transform"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full h-[52px]">
          <p className="font-sans font-medium leading-[25.5px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.4316px]">开始考试</p>
      </div>
    </div>
  );
}

function RealExamSimulationCard({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(239,246,255,0.6)] h-[80px] overflow-hidden relative rounded-[14px] shrink-0 w-full cursor-pointer active:scale-[0.98] transition-transform"
      onClick={onClick}
    >
      {/* Background Graphic */}
      <div className="absolute flex items-center justify-center left-[224px] size-[135px] top-[-32px]">
        <div className="flex-none rotate-[348deg]">
          <ComputerIcon />
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[16px] top-[16px] w-[144px]">
        <p className="font-sans font-bold leading-[28px] text-[#1d293d] text-[18px] text-nowrap tracking-[-0.4395px]">真实考场模拟</p>
        <p className="font-sans font-normal leading-[16px] text-[12px] text-[rgba(21,93,252,0.7)] text-nowrap">深度还原电脑正式考试界面</p>
      </div>

      {/* Start Button Small */}
      <div className="absolute bg-white h-[32px] right-[16px] rounded-full shadow-sm top-[24px] w-[66px] flex items-center justify-center gap-[2px]">
         <span className="font-sans font-bold text-[#1d293d] text-[14px]">开始</span>
         <StartArrowIcon />
      </div>
    </div>
  );
}

function SecretExamPaperCard() {
  return (
    <div className="bg-gradient-to-r from-[#fff7ed] to-[rgba(255,237,212,0.8)] h-[112px] overflow-clip relative rounded-[14px] shrink-0 w-full cursor-pointer">
      {/* Text Content */}
      <div className="absolute left-[16px] top-[16px]">
         <div className="relative mb-[4px]">
             <span className="font-sans font-bold text-[#0f172b] text-[20px] tracking-[-0.45px]">考前密卷</span>
             <div className="absolute left-[86px] top-[-8px] rotate-[-6deg] opacity-80">
                 <span className="font-sans font-normal text-[#c27aff] text-[18px] tracking-[-0.44px]">precise</span>
             </div>
         </div>
         <div className="bg-[#ff8904] rounded-[8px] px-[8px] py-[4px] mt-[8px] inline-block">
             <span className="font-sans font-medium text-[12px] text-white">临考冲刺用考前密卷</span>
         </div>
      </div>

      {/* Floating Cards Graphic */}
      <div className="absolute right-[-10px] top-[8px] size-[128px]">
          {/* Back Card */}
          <div className="absolute left-[42px] top-[12px] rotate-[6deg]">
             <div className="bg-[#ffd6a8] flex items-center justify-center p-[1.5px] rounded-[10px] w-[72px] h-[86px] relative shadow-sm border border-[#ffb86a]">
                <div className="opacity-50 relative rounded-full size-[36px] border border-[#ffb86a] flex items-center justify-center">
                    <span className="font-bold text-[#ff8904] text-[12px]">密</span>
                </div>
             </div>
          </div>
          {/* Label 1 */}
          <div className="absolute left-[74px] top-[73px] rotate-[3deg] z-10">
              <div className="bg-[rgba(255,214,168,0.5)] rounded-[4px] px-[4px] py-[2px]">
                 <span className="font-normal text-[#f54900] text-[9px]">精准提分</span>
              </div>
          </div>
          {/* Label 2 */}
          <div className="absolute left-[30px] top-[-7px] rotate-[-12deg] z-10">
              <div className="bg-white rounded-[4px] shadow-sm px-[6px] py-[4px]">
                 <span className="font-bold text-[#ff6900] text-[9px]">智能预测</span>
              </div>
          </div>
          {/* Target Icon */}
          <div className="absolute left-[40px] top-[48px] bg-white rounded-full p-[10px] shadow-md z-20">
             <TargetIcon />
          </div>
      </div>
    </div>
  );
}

export function MockExam({ onBack, onRealExamClick, onExamStarted }: { onBack?: () => void, onRealExamClick?: () => void, onExamStarted?: (started: boolean) => void }) {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    onExamStarted?.(isStarted);
  }, [isStarted, onExamStarted]);

  if (isStarted) {
    return <MockExamDetail onBack={() => setIsStarted(false)} />;
  }

  return (
    <div
      className="relative size-full flex flex-col flex-1 min-h-0 overflow-y-auto"
      style={{ backgroundImage: SECONDARY_PAGE_BG }}
    >
      <StatusBar />
      <TopBar onBack={onBack} />
      
      <div className="relative px-[16px] pb-[40px] flex flex-col gap-[24px]">
         <ExamInfoCard />
         <StartButton onClick={() => setIsStarted(true)} />
         <div className="flex flex-col gap-[16px]">
            <RealExamSimulationCard onClick={onRealExamClick} />
            <SecretExamPaperCard />
         </div>
      </div>
    </div>
  );
}
