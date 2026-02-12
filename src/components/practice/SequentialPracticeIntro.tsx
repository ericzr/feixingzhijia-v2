import React from "react";
import svgPaths from "../../imports/svg-wrrjx9dyaw";

function Icon3() {
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
      data-name="Button"
      onClick={onClick}
    >
      <Icon3 />
    </div>
  );
}

function HeaderTitle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">顺序练习</p>
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative flex items-center justify-center w-full pt-[40px] pb-[12px] h-[80px]">
      <div className="absolute left-[12px] top-[40px] z-10">
        <BackButton onClick={onBack} />
      </div>
      <div className="text-[18px] font-bold text-[#1d293d] mt-[4px]">顺序练习</div>
    </div>
  );
}

function SectionTitle({ text }: { text: string }) {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] text-[#1d293d] text-[17px] tracking-[-0.4316px]">{text}</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0817 18.7448">
            <path d={svgPaths.p279ad3f0} fill="var(--fill-0, #F5DB9B)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.75%] right-[13.75%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-25%_-7.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5821 6.24958">
            <g id="Vector">
              <path d={svgPaths.p3b956b00} fill="var(--fill-0, #F5DB9B)" />
              <path d={svgPaths.p3b956b00} stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-12.5%_-1.04px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.08314 10.4165">
            <g id="Vector">
              <path d="M1.04157 9.3749V1.04157Z" fill="var(--fill-0, #F5DB9B)" />
              <path d="M1.04157 9.3749V1.04157" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PredictionIcon() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function PredictionText() {
  return (
    <div className="flex items-center gap-[4px]" data-name="Text">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium text-[#314158] text-[15px] tracking-[-0.2344px]">预测考试通过率</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold text-[#c99619] text-[15px] tracking-[-0.2344px]">4%</p>
    </div>
  );
}

function PredictionBar() {
  return (
    <div className="bg-[#fbf2db] content-stretch flex gap-[8px] h-[47px] items-center justify-center relative rounded-[10px] w-full" data-name="Container">
      <PredictionIcon />
      <PredictionText />
    </div>
  );
}

function StatUnanswered({ value }: { value: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-center flex-1" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] text-[#1d293d] text-[24px] tracking-[-0.5297px]">{value}</p>
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] text-[#99a1af] text-[12px]">未做题</p>
    </div>
  );
}

function StatWrong({ value }: { value: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-center flex-1 border-x border-[#00000000]" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] text-[#1d293d] text-[24px] tracking-[-0.5297px]">{value}</p>
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] text-[#99a1af] text-[12px]">错题数</p>
    </div>
  );
}

function StatCorrectRate({ value }: { value: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-center flex-1" data-name="Container">
      <div className="flex items-start">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] text-[#1d293d] text-[24px] tracking-[-0.5297px]">{value}</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#1d293d] text-[14px] pt-[2px]">%</p>
      </div>
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] text-[#99a1af] text-[12px]">正确率</p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex items-center justify-between w-full" data-name="Container">
      <StatUnanswered value="1883" />
      <StatWrong value="0" />
      <StatCorrectRate value="0" />
    </div>
  );
}

function StartButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-[#c99619] content-stretch flex items-center justify-center px-[20px] py-[11px] relative rounded-[25px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] w-full cursor-pointer active:scale-95 transition-transform" 
      data-name="Button"
      onClick={onClick}
    >
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">开始练习</p>
    </div>
  );
}

function LearningDataCard({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[27px] items-start p-[20px] relative w-full">
          <SectionTitle text="学习数据" />
          <PredictionBar />
          <StatsRow />
          <StartButton onClick={onStart} />
        </div>
      </div>
    </div>
  );
}

function IconBox({ path, clipPath }: { path: React.ReactNode, clipPath?: string }) {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        {clipPath ? (
          <g clipPath={`url(#${clipPath})`} id="Icon">
             {path}
          </g>
        ) : (
          <g id="Icon">
            {path}
          </g>
        )}
        {clipPath && (
          <defs>
            <clipPath id={clipPath}>
              <rect fill="white" height="22" width="22" />
            </clipPath>
          </defs>
        )}
      </svg>
    </div>
  );
}

function FeatureButton({ title, iconPath, clipPath }: { title: string, iconPath: React.ReactNode, clipPath?: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[112px] items-center justify-center relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] flex-1 min-w-[100px]" data-name="Button">
      <div className="bg-[#fbf2db] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center size-full">
          <IconBox path={iconPath} clipPath={clipPath} />
        </div>
      </div>
      <div className="h-[16px] relative shrink-0 w-full text-center" data-name="Text">
        <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] text-[#45556c] text-[12px]">{title}</p>
      </div>
    </div>
  );
}

function EfficientPracticeRow() {
  const iconPaths1 = (
    <>
      <path d={svgPaths.p23525180} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.p2f91b640} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.pb7abac0} id="Vector_3" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.p355d9380} id="Vector_4" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.pf853900} id="Vector_5" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
    </>
  );

  const iconPaths2 = (
    <>
      <path d="M10.9995 6.41639V19.2497" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.p3e957d00} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
    </>
  );

  const iconPaths3 = (
    <>
      <path d="M11.9162 19.2492H19.2495" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
      <path d={svgPaths.p163b4700} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
    </>
  );

  return (
    <div className="content-stretch flex items-center justify-between gap-[12px] w-full" data-name="Container">
      <FeatureButton title="随机练习" iconPath={iconPaths1} clipPath="clip0_33_2339" />
      <FeatureButton title="章节练习" iconPath={iconPaths2} />
      <FeatureButton title="每日一练" iconPath={iconPaths3} clipPath="clip0_33_2335" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">高效刷题</p>
    </div>
  );
}

export function SequentialPracticeIntro({ onBack, onStartPractice }: { onBack: () => void, onStartPractice: () => void }) {
  return (
    <div className="relative size-full min-h-screen" data-name="顺序练习" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <Header onBack={onBack} />
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 px-[16px] py-0 top-[107px] w-full" data-name="Container">
        <LearningDataCard onStart={onStartPractice} />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
          <Heading2 />
          <EfficientPracticeRow />
        </div>
      </div>
    </div>
  );
}
