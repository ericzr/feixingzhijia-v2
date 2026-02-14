import React from "react";
import svgPaths from "./SimplifiedPracticeSvgs";

function IconBack() {
  return (
    <div className="relative shrink-0 w-full" data-name="Icon">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[4px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[7.005px]" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
                <path d={svgPaths.p35e48300} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-col h-[28px] items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px] cursor-pointer" 
      onClick={onClick}
    >
      <IconBack />
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-center pt-[50px] pb-3 w-full relative z-10">
      <div className="absolute left-4 top-[50px] z-20">
        <BackButton onClick={onBack} />
      </div>
      <span className="font-bold text-[#685622] text-[18px]">精简题库</span>
    </div>
  );
}

function IconPrediction() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.34%_12.5%]">
        <div className="absolute inset-[-6.25%_-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0817 18.7448">
            <path d={svgPaths.p279ad3f0} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" fill="#F5DB9B" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.75%] right-[13.75%] top-[29.17%]">
        <div className="absolute inset-[-25%_-7.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5821 6.24958">
            <path d={svgPaths.p3b956b00} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" fill="#F5DB9B" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2">
        <div className="absolute inset-[-12.5%_-1.04px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.08314 10.4165">
            <path d="M1.04157 9.3749V1.04157" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" fill="#F5DB9B" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PredictionCard() {
  return (
    <div className="bg-white rounded-[14px] shadow-sm w-full p-5 mb-3">
      <div className="flex gap-2 items-center mb-6">
        <div className="w-5 h-5 relative shrink-0">
          <IconPrediction />
        </div>
        <span className="text-[#314158] text-[16px] font-medium">预测考试通过率</span>
      </div>
      
      <div className="flex items-center justify-center">
        <span className="text-[#c99619] text-[60px] font-medium leading-[60px]">0</span>
        <span className="text-[#c99619] text-[24px] font-medium mt-4 ml-1">%</span>
      </div>
    </div>
  );
}

function StatItem({ value, label, unit }: { value: string | number, label: string, unit?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative flex items-end justify-center">
        <span className="text-[#1d293d] text-[24px] font-medium leading-none">{value}</span>
        {unit && <span className="text-[#1d293d] text-[14px] font-medium mb-1 ml-0.5">{unit}</span>}
      </div>
      <span className="text-[#99a1af] text-[12px]">{label}</span>
    </div>
  );
}

function LearningDataCard() {
  return (
    <div className="bg-white rounded-[14px] shadow-sm w-full p-5">
      <div className="flex justify-between items-center mb-8">
        <span className="text-[#1d293d] text-[17px] font-bold">学习数据</span>
        <button className="bg-[#fbf2db] px-3 py-1.5 rounded-full text-[#755609] text-[12px] font-medium">
          清空记录
        </button>
      </div>
      
      <div className="grid grid-cols-3 divide-x divide-transparent">
        <StatItem value="500" label="未做题" />
        <div className="relative">
             <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-transparent"></div> {/* Divider placeholder if needed */}
             <StatItem value="0" label="错题数" />
        </div>
        <StatItem value="0" label="正确率" unit="%" />
      </div>
    </div>
  );
}

function StartButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#c99619] w-full py-[13px] rounded-full shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] active:scale-95 transition-transform"
    >
      <span className="text-white text-[16px] font-medium">开始练习</span>
    </button>
  );
}

import { VIPUpgradeModal } from "./VIPUpgradeModal";

export function SimplifiedPractice({ onBack }: { onBack: () => void }) {
  const [showVIP, setShowVIP] = React.useState(false);

  return (
    <div 
      className="flex flex-col h-full relative bg-[#fefbf4] overflow-hidden"
      style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}
    >
      <Header onBack={onBack} />
      
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24">
        <PredictionCard />
        <LearningDataCard />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-[#fefbf4] via-[#fefbf4]/80 to-transparent">
        <StartButton onClick={() => setShowVIP(true)} />
      </div>

      <VIPUpgradeModal isOpen={showVIP} onClose={() => setShowVIP(false)} />
    </div>
  );
}
