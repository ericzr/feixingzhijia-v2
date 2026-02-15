import React from 'react';
import svgPaths from "../../imports/svg-944xmjgtm7";

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

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-center pt-[50px] pb-3 w-full relative z-10">
      <div className="absolute left-[12px] top-[50px] z-20">
        <BackButton onClick={onBack} />
      </div>
      <p className="font-bold text-[#685622] text-[18px] text-center tracking-[-0.44px]">每日一练</p>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="bg-[#fbf2db] flex items-center justify-center relative rounded-full shrink-0 size-[80px]">
      <div className="relative shrink-0 size-[44px]">
        <svg className="block size-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 31.9942 31.9942" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9971 14.9973C18.758 14.9973 20.9962 12.7591 20.9962 9.9982C20.9962 7.23727 18.758 4.9991 15.9971 4.9991C13.2362 4.9991 10.998 7.23727 10.998 9.9982C10.998 12.7591 13.2362 14.9973 15.9971 14.9973Z" fill="#C99619" />
          <path d="M5.99892 25.9953C5.99892 19.9964 9.9982 17.9968 15.9971 17.9968C21.996 17.9968 25.9953 19.9964 25.9953 25.9953" fill="#C99619" />
        </svg>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="h-[180px] overflow-clip relative shrink-0 w-full max-w-[240px]">
      <div className="absolute inset-[26.67%_80%_46.67%_5%]"></div>
      <div className="absolute inset-[53.33%_5%_26.67%_80%]"></div>
      <div className="absolute inset-[49.76%_16.67%_46.9%_80.83%]">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" viewBox="0 0 8.4 8.4">
            <path d={svgPaths.pa451b80} fill="black" />
            <path d={svgPaths.p3847dee0} stroke="#FBF2DB" strokeLinecap="round" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.33%_20%_20%_30%]">
        <svg className="block size-full" fill="none" viewBox="0 0 120 48">
          <path d={svgPaths.p1ce59700} fill="#FBF2DB" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_45%_16.67%_30%]">
        <svg className="block size-full" fill="none" viewBox="0 0 60 30">
          <path d={svgPaths.p15aa7a00} fill="#F5DB9B" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_20%_16.67%_55%]">
        <svg className="block size-full" fill="none" viewBox="0 0 60 30">
          <path d={svgPaths.p387f7300} fill="#C99619" />
        </svg>
      </div>
      <div className="absolute bottom-[46.67%] left-1/4 right-[65%] top-[33.33%]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 36">
          <path d={svgPaths.p291c4f00} fill="#FBF2DB" opacity="0.8" />
        </svg>
      </div>
      <div className="absolute inset-[38.67%_67.5%_61.33%_27.5%]">
        <div className="absolute inset-[-1.2px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 12 2.4">
            <path d="M0 1.2H12" stroke="white" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.67%_67.5%_57.33%_27.5%]">
        <div className="absolute inset-[-1.2px_0]">
          <svg className="block size-full" fill="none" viewBox="0 0 12 2.4">
            <path d="M0 1.2H12" stroke="white" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[70%] right-[20%] top-[26.67%]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 42">
          <path d={svgPaths.p133d6ea8} fill="#FBF2DB" />
        </svg>
      </div>
      <div className="absolute flex inset-[35.32%_20.84%_57.17%_71.25%] items-center justify-center">
        <div className="flex-none rotate-[5deg]">
          <p className="font-bold text-[#c99619] text-[10px]">100</p>
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[45%] right-1/2 top-[70%]">
        <div className="absolute inset-[-10%_-36%_-10%_-30%]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 43">
            <path d={svgPaths.p1df72280} stroke="#C99619" strokeLinecap="round" strokeWidth="7.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70%_42.5%_13.33%_47.5%]">
        <div className="absolute inset-[-12%_-15%]">
          <svg className="block size-full" fill="none" viewBox="0 0 31 37">
            <path d={svgPaths.p1f837a80} stroke="#C99619" strokeLinecap="round" strokeWidth="7.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.33%_47.5%_26.67%_42.5%]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 36">
          <path d={svgPaths.p3d3a7000} fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-[26.67%] left-[42.5%] right-1/2 top-[70%]"></div>
      <div className="absolute inset-[44.67%_45%_44.67%_47%]">
        <svg className="block size-full" fill="none" viewBox="0 0 19 19">
          <path d={svgPaths.p18457e00} fill="#FDBA74" />
        </svg>
      </div>
      <div className="absolute inset-[46.33%_46%_50.67%_49%]">
        <svg className="block size-full" fill="none" viewBox="0 0 12 5.4">
          <path d={svgPaths.p37f2e800} fill="#5C3A21" />
        </svg>
      </div>
      <div className="absolute bottom-[36.67%] left-1/2 right-[40%] top-[56.67%]">
        <div className="absolute inset-[-25%_-12.5%_-35%_-12.5%]">
          <svg className="block size-full" fill="none" viewBox="0 0 30 19">
            <path d={svgPaths.p17f34e80} stroke="#FDBA74" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="font-bold text-[#1d293d] text-[24px] leading-[32px] tracking-[0.07px]">{value}</p>
      <p className="font-normal text-[#99a1af] text-[14px] leading-[20px] tracking-[-0.15px]">{label}</p>
    </div>
  );
}

function MainCard() {
  return (
    <div className="bg-white rounded-[16px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] w-full max-w-[416px] flex flex-col items-center px-[24px] py-[32px] gap-[28px]">
      <div className="flex flex-col items-center gap-[12px] w-full">
        <UserAvatar />
        <div className="flex flex-col items-center gap-[4px]">
          <h2 className="font-bold text-[#1d293d] text-[20px] leading-[28px] tracking-[-0.45px]">无人机学员</h2>
          <p className="font-normal text-[#99a1af] text-[13px] leading-[19.5px] tracking-[-0.08px]">坚持每天练题，快速通过考试不费劲</p>
        </div>
      </div>
      <div className="flex items-start justify-between w-full px-[32px]">
        <StatItem value="0天" label="已坚持" />
        <StatItem value="10题" label="今日题目" />
      </div>
      <Illustration />
    </div>
  );
}

function StartButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#c99619] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(251,242,219,1),0px_4px_6px_-4px_rgba(251,242,219,1)] w-full max-w-[416px] h-[52px] flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
      onClick={onClick}
    >
      <p className="font-medium text-[17px] text-white tracking-[-0.43px]">开始练习</p>
    </div>
  );
}

function SettingsLink({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="flex gap-[6px] items-center justify-center cursor-pointer opacity-80 hover:opacity-100"
      onClick={onClick}
    >
      <div className="size-[16px] relative">
         <svg className="block size-full" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.p2d1f6ce0} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1fe51480} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </svg>
      </div>
      <p className="text-[#99a1af] text-[13px] tracking-[-0.08px]">设置每日一练题目数量</p>
    </div>
  );
}

export function DailyPractice({ onBack, onStart }: { onBack: () => void, onStart?: () => void }) {
  return (
    <div 
      className="relative size-full min-h-screen flex flex-col items-center" 
      style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}
    >
      <Header onBack={onBack} />
      <div className="flex flex-col items-center w-full px-[16px] mt-[16px] gap-[30px] pb-[40px]">
        <MainCard />
        <div className="flex flex-col gap-[20px] w-full items-center">
          <StartButton onClick={onStart} />
          <SettingsLink />
        </div>
      </div>
    </div>
  );
}
