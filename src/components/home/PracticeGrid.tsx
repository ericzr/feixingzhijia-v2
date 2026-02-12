import svgPaths from "../../imports/svg-f6hseik3qq";

// --- Shared / Common ---

function Heading({ text }: { text: string }) {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[170px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}

function SubText({ text }: { text: string }) {
  return (
    <div className="absolute h-[20px] left-0 top-[28px] w-[170px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}

// --- Card 1 Components ---

function Button1() {
  return (
    <div className="absolute bg-[rgba(245,219,155,0.36)] h-[32px] left-[16px] rounded-[1.67772e+07px] top-[226px] w-[167px]" data-name="Button">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[83px] not-italic text-[#755609] text-[14px] text-center text-nowrap top-[6.5px] tracking-[-0.1504px] translate-x-[-50%]">开始练习</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[26.377px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3772 26.3772">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p1feb2f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1981" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[105.221px] items-center justify-center relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-[94.442px]" data-name="Container" style={{ backgroundImage: "linear-gradient(131.91deg, rgb(245, 194, 68) 0%, rgb(201, 150, 25) 100%)" }}>
      <Icon13 />
    </div>
  );
}

function Objects() {
  return (
    <div className="h-[23px] relative w-[15px]" data-name="Objects">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 23">
        <g clipPath="url(#clip0_2_1079)" id="Objects">
          <path d={svgPaths.p173b1700} fill="var(--fill-0, #F0DA9F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_1079">
            <rect fill="white" height="23" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#fbf2db] h-[105.084px] opacity-50 relative rounded-bl-[10px] rounded-tl-[10px] w-[20.907px]" data-name="Container">
      <div className="absolute flex h-[24.442px] items-center justify-center left-[46.05px] top-[-1.79px] w-[17.322px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[6deg]">
          <Objects />
        </div>
      </div>
    </div>
  );
}

function PracticeSection() {
  return (
    <div className="h-[76px] relative shrink-0 w-[77px]" data-name="PracticeSection">
      <div className="absolute flex h-[114.517px] items-center justify-center left-[-20.92px] top-[-17.1px] w-[104.924px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[354deg]">
          <Container17 />
        </div>
      </div>
      <div className="absolute flex h-[106.694px] items-center justify-center left-[-21px] top-[-9.34px] w-[31.776px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[354deg]">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[67px] opacity-90 pl-0 pr-[8px] py-0 size-[94px] top-[98px]" data-name="Container">
      <PracticeSection />
    </div>
  );
}

function Card1() {
  return (
    <div className="relative bg-white h-full rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] overflow-clip">
      <div className="absolute h-[112px] left-[16px] top-[16px] w-[170px]">
        <Heading text="顺序练习" />
        <SubText text="0/1884题" />
      </div>
      <Button1 />
      <Container19 />
    </div>
  );
}

// --- Card 2 Components ---

function Button2() {
  return (
    <div className="absolute bg-[#fbf2db] h-[32px] left-0 rounded-[1.67772e+07px] top-[96px] w-[74px]" data-name="Button">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[37px] not-italic text-[#755609] text-[14px] text-center text-nowrap top-[6.5px] tracking-[-0.1504px] translate-x-[-50%]">去考试</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[66.843px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-[59.273px]" data-name="Container" style={{ backgroundImage: "linear-gradient(131.565deg, rgb(245, 219, 155) 0%, rgb(245, 194, 68) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0.6)] h-[5.669px] left-[13.87px] rounded-[1.67772e+07px] top-[24.6px] w-[32.165px]" />
      <div className="absolute bg-[rgba(255,255,255,0.6)] h-[5.669px] left-[13.34px] rounded-[1.67772e+07px] top-[34.58px] w-[32.166px]" />
      <div className="absolute bg-[rgba(255,255,255,0.6)] h-[5.041px] left-[12.82px] rounded-[1.67772e+07px] top-[44.57px] w-[20.182px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[55.389px] left-[12px] top-[24px] w-[62.432px]">
      <div className="absolute inset-[0_-5.52%_-9.79%_-3.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.7665 60.8113">
          <g filter="url(#filter0_d_2_946)" id="Frame 34276">
            <path d={svgPaths.p9666900} fill="var(--fill-0, #FF8F00)" id="Vector" />
            <path d={svgPaths.p120e6a00} fill="var(--fill-0, #FFB300)" id="Vector_2" />
            <path d={svgPaths.p2a294d80} fill="var(--fill-0, #FFCA28)" id="Vector_3" />
            <path d={svgPaths.p1250fd00} fill="var(--fill-0, #FFB300)" id="Vector_4" />
            <path d={svgPaths.pfde3140} fill="var(--fill-0, #FFB300)" id="Vector_5" />
            <path d={svgPaths.p222f6e00} fill="var(--fill-0, #FFCA28)" id="Vector_6" />
            <path d={svgPaths.pdd12580} fill="var(--fill-0, #FFCA28)" id="Vector_7" />
            <path d={svgPaths.p376fc200} fill="var(--fill-0, #EAD9C3)" id="Vector_8" />
            <path d={svgPaths.p276aa790} fill="var(--fill-0, #EAD9C3)" id="Vector_9" />
            <path d={svgPaths.p1e4bf200} fill="var(--fill-0, #C99619)" id="Vector_10" />
            <path d={svgPaths.p2e5f8f80} fill="var(--fill-0, #EAD9C3)" id="Vector_11" />
            <path d={svgPaths.p1975d980} fill="var(--fill-0, #C99619)" id="Vector_12" />
            <path d={svgPaths.p1f1780} fill="var(--fill-0, #EAD9C3)" id="Vector_13" />
            <path d={svgPaths.p15f85c00} fill="var(--fill-0, #C99619)" id="Vector_14" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="63.389" id="filter0_d_2_946" width="70.4316" x="-2.11079" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_946" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_946" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PracticeSection1() {
  return (
    <div className="h-[75px] relative shrink-0 w-[73px]" data-name="PracticeSection">
      <div className="absolute flex h-[69.854px] items-center justify-center left-[-5.13px] top-[-1.42px] w-[62.69px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[3deg]">
          <Container24 />
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[96px] opacity-90 pl-0 pr-[8px] py-0 size-[70px] top-[39px]" data-name="Container">
      <PracticeSection1 />
    </div>
  );
}

function Card2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative bg-white h-[160px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] overflow-clip cursor-pointer transition-transform active:scale-95"
      onClick={onClick}
    >
      <div className="absolute h-[128px] left-[16px] top-[16px] w-[170px]">
        <Heading text="模拟考试" />
        <SubText text="平均分：0" />
        <Button2 />
        <Container25 />
      </div>
    </div>
  );
}

// --- Card 3 Components ---

function Button3() {
  return (
    <div className="absolute bg-[#fbf2db] h-[32px] left-0 rounded-[1.67772e+07px] top-[38px] w-[74px]" data-name="Button">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[37px] not-italic text-[#755609] text-[14px] text-center text-nowrap top-[6.5px] tracking-[-0.1504px] translate-x-[-50%]">耍一下</p>
    </div>
  );
}

function Container28() {
  return <div className="absolute h-[52px] left-[108px] rounded-[80px] top-[18px] w-[53px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.546deg, rgb(251, 242, 219) 0%, rgb(245, 219, 155) 100%)" }} />;
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96581 4.10808">
        <g id="Group">
          <path d={svgPaths.p1949cc00} fill="var(--fill-0, #BBC4CC)" id="Vector" />
          <path d={svgPaths.p16275780} id="Vector_2" stroke="var(--stroke-0, #636D78)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// ... Additional Group Components for Drone (omitted for brevity, assume similar pattern)
// Since there are many small groups for the drone, I'll simplify the drone frame or include them if necessary.
// The user wants 1:1, so I MUST include them.

function Group1() { return (<div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.7362 41.6269"><g id="Group"><g id="Group_2"><path d={svgPaths.p383f1900} fill="var(--fill-0, #EDF0F2)" id="Vector" /><path d={svgPaths.p3de64d00} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeMiterlimit="10" strokeWidth="0.25" /></g><path d={svgPaths.pb912b40} fill="var(--fill-0, #EDF0F2)" id="Vector_3" /><g id="Group_3"><path d={svgPaths.p1387280} fill="var(--fill-0, #EDF0F2)" id="Vector_4" /><path d={svgPaths.p10d2b640} id="Vector_5" stroke="var(--stroke-0, #BBC4CC)" strokeMiterlimit="10" strokeWidth="0.25" /></g></g></svg></div>); }
function Group2() { return (<div className="relative size-full"><div className="absolute inset-[-0.55%_-0.18%_-0.59%_-0.18%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0583 18.6445"><g id="Group"><path d={svgPaths.p3a1e1df0} id="Vector" stroke="var(--stroke-0, #BBC4CC)" strokeMiterlimit="10" strokeWidth="0.25" /><g id="Group_2"><path d={svgPaths.p39491a80} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeMiterlimit="10" strokeWidth="0.25" /><path d={svgPaths.p317fed00} id="Vector_3" stroke="var(--stroke-0, #BBC4CC)" strokeMiterlimit="10" strokeWidth="0.25" /></g></g></svg></div></div>); }
function Group3() { return (<div className="relative size-full"><div className="absolute inset-[-10.28%_-18.89%_-10.29%_-18.9%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82343 2.93141"><g id="Group"><path d={svgPaths.p3cf1ba80} id="Vector" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /><path d={svgPaths.p1c41a100} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /><path d={svgPaths.p20012f00} id="Vector_3" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /></g></svg></div></div>); }
function Group4() { return (<div className="relative size-full"><div className="absolute inset-[-10.29%_-18.91%_-10.29%_-18.89%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.8232 2.93091"><g id="Group"><path d={svgPaths.p5fe3880} id="Vector" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /><path d={svgPaths.p8ef3300} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /><path d={svgPaths.p32258300} id="Vector_3" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" /></g></svg></div></div>); }
function Group5() { return (<div className="absolute contents inset-[36.54%_33.25%_52.63%_38.04%]"><div className="absolute flex inset-[43.04%_33.25%_52.64%_65.15%] items-center justify-center"><div className="flex-none h-[2.431px] rotate-[7.961deg] skew-x-[0.055deg] w-[1.323px]"><Group3 /></div></div><div className="absolute flex inset-[36.55%_60.37%_59.14%_38.04%] items-center justify-center"><div className="flex-none h-[2.431px] rotate-[7.961deg] skew-x-[0.055deg] w-[1.323px]"><Group4 /></div></div></div>); }
function Group6() { return (<div className="relative size-full"><div className="absolute inset-[-16.47%_-17.74%_-16.47%_-17.76%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.86307 3.02694"><g id="Group"><path d={svgPaths.p26328b40} id="Vector" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /><path d={svgPaths.p2143a3c0} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /><path d={svgPaths.pf73c900} id="Vector_3" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /></g></svg></div></div>); }
function Group7() { return (<div className="relative size-full"><div className="absolute inset-[-16.47%_-17.75%_-16.46%_-17.74%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.86343 3.02765"><g id="Group"><path d={svgPaths.p5f9d880} id="Vector" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /><path d={svgPaths.p300c2b00} id="Vector_2" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /><path d={svgPaths.p14011300} id="Vector_3" stroke="var(--stroke-0, #BBC4CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" /></g></svg></div></div>); }
function Group8() { return (<div className="absolute contents inset-[62.94%_38.98%_28.29%_39.83%]"><div className="absolute flex inset-[67.46%_38.98%_28.29%_58.68%] items-center justify-center"><div className="flex-none h-[2.277px] rotate-[7.963deg] skew-x-[0.058deg] w-[2.113px]"><Group6 /></div></div><div className="absolute flex inset-[62.94%_57.84%_32.81%_39.83%] items-center justify-center"><div className="flex-none h-[2.278px] rotate-[7.963deg] skew-x-[0.058deg] w-[2.113px]"><Group7 /></div></div></div>); }
function Group9() { return (<div className="absolute contents inset-[36.53%_33.25%_27.4%_36%]"><Group5 /><Group8 /></div>); }
function Group10() { return (<div className="absolute contents inset-[34.13%_31.45%_27.01%_34.35%]"><div className="absolute flex inset-[34.13%_31.45%_27.83%_34.42%] items-center justify-center"><div className="flex-none h-[18.435px] rotate-[7.961deg] skew-x-[0.054deg] w-[32.937px]"><Group2 /></div></div><Group9 /></div>); }
function Group11() { return (<div className="absolute contents inset-[15.44%_12.9%_-0.01%_15.43%]"><div className="absolute flex inset-[15.44%_12.91%_-0.01%_15.43%] items-center justify-center"><div className="flex-none h-[41.627px] rotate-[7.955deg] skew-x-[0.042deg] w-[68.736px]"><Group1 /></div></div><Group10 /></div>); }
function Group12() { return (<div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5632 15.324"><g id="Group"><path d={svgPaths.p2c054600} fill="var(--fill-0, #636D78)" id="Vector" /><g id="Group_2"><path d={svgPaths.p35317880} fill="var(--fill-0, #BBC4CC)" id="Vector_2" /><path d={svgPaths.p39b09e00} fill="var(--fill-0, #636D78)" id="Vector_3" /></g></g></svg></div>); }
function Group13() { return (<div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5632 15.324"><g id="Group"><path d={svgPaths.p32c1900} fill="var(--fill-0, #636D78)" id="Vector" /><g id="Group_2"><path d={svgPaths.p34296e00} fill="var(--fill-0, #BBC4CC)" id="Vector_2" /><path d={svgPaths.p2df88f0} fill="var(--fill-0, #636D78)" id="Vector_3" /></g></g></svg></div>); }
function Group14() { return (<div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5695 12.0814"><g id="Group"><path d={svgPaths.p1cacd400} id="Vector" stroke="var(--stroke-0, #636D78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><g id="Group_2"><path d={svgPaths.p3c08db80} fill="var(--fill-0, #BBC4CC)" id="Vector_2" /><path d={svgPaths.p3fbb9840} fill="var(--fill-0, #636D78)" id="Vector_3" /></g></g></svg></div>); }
function Group15() { return (<div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5695 12.0814"><g id="Group"><path d={svgPaths.p6a5f380} id="Vector" stroke="var(--stroke-0, #636D78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><g id="Group_2"><path d={svgPaths.p1cbb5370} fill="var(--fill-0, #BBC4CC)" id="Vector_2" /><path d={svgPaths.pa762100} fill="var(--fill-0, #636D78)" id="Vector_3" /></g></g></svg></div>); }

function Frame10() {
  return (
    <div className="absolute h-[60px] left-[81px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[8px] w-[103px]">
      <div className="absolute flex inset-[67.65%_45.94%_23.73%_45.85%] items-center justify-center">
        <div className="flex-none h-[4.108px] rotate-[7.946deg] w-[7.966px]">
          <Group />
        </div>
      </div>
      <Group11 />
      <div className="absolute flex inset-[62.6%_0_2.3%_57.03%] items-center justify-center">
        <div className="flex-none h-[15.324px] rotate-[7.946deg] w-[42.563px]">
          <Group12 />
        </div>
      </div>
      <div className="absolute flex inset-[48.94%_57.03%_15.96%_0] items-center justify-center">
        <div className="flex-none h-[15.324px] rotate-[7.946deg] w-[42.563px]">
          <Group13 />
        </div>
      </div>
      <div className="absolute flex inset-[11.57%_4.78%_60.75%_61.32%] items-center justify-center">
        <div className="flex-none h-[12.081px] rotate-[7.946deg] w-[33.57px]">
          <Group14 />
        </div>
      </div>
      <div className="absolute flex inset-[0_53.07%_72.32%_13.04%] items-center justify-center">
        <div className="flex-none h-[12.081px] rotate-[7.946deg] w-[33.57px]">
          <Group15 />
        </div>
      </div>
    </div>
  );
}

function Card3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative bg-white h-[102px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] overflow-clip cursor-pointer transition-transform active:scale-95"
      onClick={onClick}
    >
      <div className="absolute h-[70px] left-[16px] top-[16px] w-[170px]">
        <Heading text="3D飞行模拟" />
        <Button3 />
        <Container28 />
        <Frame10 />
      </div>
    </div>
  );
}

export function PracticeGrid({ 
  onSequentialPracticeClick, 
  onMockExamClick,
  onSimulationClick
}: { 
  onSequentialPracticeClick?: () => void,
  onMockExamClick?: () => void,
  onSimulationClick?: () => void
}) {
  return (
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-[12px] shrink-0 w-full">
      <div onClick={onSequentialPracticeClick} className="cursor-pointer transition-transform active:scale-95 h-[274px]">
        <Card1 />
      </div>
      <div className="flex flex-col gap-[12px]">
        <Card2 onClick={onMockExamClick} />
        <Card3 onClick={onSimulationClick} />
      </div>
    </div>
  );
}
