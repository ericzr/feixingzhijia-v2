import svgPaths from "./svg-6r2h5wzqfb";

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">14:34</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M1.33333 13.3333H1.34" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 13.3333V10.6667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V8" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 13.3333V5.33333" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667V13.3333" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 13.3333H8.00667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3978c100} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3aa7f280} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3129d700} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[41.67%_8.33%_41.67%_91.67%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <g id="Vector">
                <path d="M0.666667 3.33333V0.666667Z" fill="var(--fill-0, #00C950)" />
                <path d="M0.666667 3.33333V0.666667" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[8.33%] right-1/4 top-1/4" data-name="Vector">
          <div className="absolute inset-[-8.33%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
              <path d={svgPaths.p2bb6e180} fill="var(--fill-0, #00C950)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon />
        <Icon1 />
        <Icon2 />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[448px]" data-name="StatusBar">
      <Container />
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[40px] pointer-events-auto sticky top-0 w-[448px]">
      <StatusBar />
    </div>
  );
}

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

function Button() {
  return (
    <button className="absolute content-stretch cursor-pointer flex flex-col h-[28px] items-start left-[8px] pb-0 pt-[3.99px] px-[3.99px] top-[18.13px] w-[36px]" data-name="Button">
      <Icon3 />
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_33_2375)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p1bd6f600} fill="var(--fill-0, #6A7282)" />
            <path d={svgPaths.p1bd6f600} stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
          <g id="Vector_2">
            <path d="M5.24819 10.4964H8.74699Z" fill="var(--fill-0, #6A7282)" />
            <path d="M5.24819 10.4964H8.74699" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
          <g id="Vector_3">
            <path d="M5.83134 12.8289H8.16467Z" fill="var(--fill-0, #6A7282)" />
            <path d="M5.83134 12.8289H8.16467" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_33_2375">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[39.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[19.5px] left-[20.5px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">看答案</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(243,244,246,0.8)] h-[31.469px] relative rounded-[2.49829e+07px] shrink-0 w-[76.979px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center pl-[9.993px] pr-0 py-0 relative size-full">
        <Icon4 />
        <Text />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_16.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8749 17.8749">
            <path d={svgPaths.p1e2332c0} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87494 6.87494">
            <path d={svgPaths.p18d6980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[37.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[11.994px] h-[32px] items-center left-[310px] top-[16.13px] w-[130px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ExamInterface() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-[0px_0px_0.745px] border-solid h-[65px] left-0 top-[40px] w-[448px]" data-name="ExamInterface">
      <Button />
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-[191px] not-italic text-[#1d293d] text-[17px] text-nowrap top-[19.13px] tracking-[-0.4316px]">顺序练习</p>
      <Container2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#fbf2db] h-[25.966px] relative rounded-[4px] shrink-0 w-[51.979px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[18px] left-[7.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[4.48px]">单选题</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-center relative shrink-0 w-[416px]" data-name="Text">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[27.625px] not-italic relative shrink-0 text-[#1d293d] text-[17px] tracking-[-0.4316px] w-[412px]">《民用无人驾驶航空器实名制登记管理规定》适用于__________的无人机。</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[95px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[19.358px] left-0 top-[2.98px] w-[14.914px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#314158] text-[16px] top-[-4px] tracking-[-0.3125px] w-[15px]">A.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[25.989px] relative shrink-0 w-[159.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-[18.9px] not-italic text-[#314158] text-[16px] text-nowrap top-[-1.02px] tracking-[-0.3125px]">空机重量超过250克</p>
      </div>
    </div>
  );
}

function OptionCard() {
  return (
    <div className="bg-white h-[65.986px] relative rounded-[14px] shrink-0 w-full" data-name="OptionCard2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.998px] pr-0 py-0 relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[19.358px] left-0 top-[2.98px] w-[14.647px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#314158] text-[16px] top-[-4px] tracking-[-0.3125px] w-[15px]">B.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[25.989px] relative shrink-0 w-[299.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-[18.64px] not-italic text-[#314158] text-[16px] text-nowrap top-[-1.02px] tracking-[-0.3125px]">最大起飞重量不高于7公斤的视距内运行</p>
      </div>
    </div>
  );
}

function OptionCard1() {
  return (
    <div className="bg-white h-[65.986px] relative rounded-[14px] shrink-0 w-full" data-name="OptionCard2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.998px] pr-0 py-0 relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[19.358px] left-0 top-[2.98px] w-[15.589px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#314158] text-[16px] top-[-4px] tracking-[-0.3125px] w-[16px]">C.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[25.989px] relative shrink-0 w-[208.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text5 />
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[26px] left-[19.58px] not-italic text-[#314158] text-[16px] text-nowrap top-[-1.02px] tracking-[-0.3125px]">最大起飞重量不低于250克</p>
      </div>
    </div>
  );
}

function OptionCard2() {
  return (
    <div className="bg-white h-[65.986px] relative rounded-[14px] shrink-0 w-full" data-name="OptionCard2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[19.998px] pr-0 py-0 relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[229.949px] items-start relative shrink-0 w-full" data-name="Container">
      <OptionCard />
      <OptionCard1 />
      <OptionCard2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[710px] items-start left-0 overflow-clip pb-0 pt-[23.988px] px-[15.996px] top-[105.03px] w-[448px]" data-name="Container">
      <Container3 />
      <Container7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p3ff9680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <path d={svgPaths.p6b1c100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#ff4d4f] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[9.214px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#6a7282] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">0</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[33.202px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Container9 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_33_2365)" id="Icon">
          <path d="M1.49928 2.49879H1.50428" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M1.49928 5.9971H1.50428" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M1.49928 9.49541H1.50428" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 2.49879H10.4949" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 5.9971H10.4949" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          <path d="M3.99807 9.49541H10.4949" id="Vector_6" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
        </g>
        <defs>
          <clipPath id="clip0_33_2365">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[22.488px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#6a7282] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">1/1883</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[64.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Container11 />
        <Text7 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[121.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.988px] items-center relative size-full">
        <Container10 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[23.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.93%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4914 20.5621">
            <path d={svgPaths.p348e2e80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[39.973px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function ExamInterface1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[77px] items-center justify-between left-0 pb-0 pt-[0.745px] px-[15.996px] top-[847px] w-[448px]" data-name="ExamInterface">
      <div aria-hidden="true" className="absolute border-[#fbf2db] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9884 23.9884">
        <g id="Icon">
          <path d={svgPaths.p390ee7e0} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex h-[49.466px] items-center justify-center left-0 pl-[4.747px] pr-0 py-[0.745px] rounded-bl-[2.49829e+07px] rounded-tl-[2.49829e+07px] top-0 w-[60.727px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.745px_0px_0.745px_0.745px] border-solid inset-0 pointer-events-none rounded-bl-[2.49829e+07px] rounded-tl-[2.49829e+07px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]" />
      <Icon9 />
    </div>
  );
}

function Container15() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-[1.989px]" data-name="Container" />;
}

function Container16() {
  return <div className="bg-[#c99619] h-[9.993px] rounded-[2.49829e+07px] shrink-0 w-[1.989px]" data-name="Container" />;
}

function Container17() {
  return <div className="bg-[#c99619] h-[3.99px] rounded-[2.49829e+07px] shrink-0 w-[1.989px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[0.989px] h-[9.993px] items-end left-[40.79px] top-[27.48px] w-[7.946px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function SequentialPracticeInterface() {
  return (
    <div className="absolute h-[49.466px] left-[387px] top-[584px] w-[60.727px]" data-name="SequentialPracticeInterface">
      <Button4 />
      <Container18 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="顺序练习题">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <ExamInterface />
      <Container8 />
      <ExamInterface1 />
      <SequentialPracticeInterface />
    </div>
  );
}