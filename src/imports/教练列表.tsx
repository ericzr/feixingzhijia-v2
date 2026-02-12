import svgPaths from "./svg-zjj3nle1rw";

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

function ExamInterface() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-[0px_0px_0.745px] border-solid h-[65px] left-0 top-[40px] w-[448px]" data-name="ExamInterface">
      <Button />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-[191px] not-italic text-[#1d293d] text-[17px] text-nowrap top-[19.13px] tracking-[-0.4316px]">全部教练</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[169.001px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">我是该驾校教练，我要入驻！</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[15.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33109 9.33109">
            <path d={svgPaths.p4784e50} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33109 9.33109">
            <path d={svgPaths.p27fbb000} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[23.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex h-[44px] items-center justify-between left-0 px-[15.996px] py-0 top-[105px] w-[448px]" data-name="Container">
      <Text />
      <Button1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] text-nowrap top-[-0.51px] tracking-[0.0703px]">内蒙古亚斯特科技</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_KR:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">选对好教练，快速拿本起跑线</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[87px] items-start left-0 pb-0 pt-[23.988px] px-[15.996px] top-[149px] w-[448px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute h-[31.985px] left-0 top-0 w-[23.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9884 31.9846">
        <g clipPath="url(#clip0_371_2203)" id="Icon">
          <path d={svgPaths.pa387600} fill="var(--fill-0, #FADB14)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3b6c8200} fill="var(--fill-0, #FADB14)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_371_2203">
            <rect fill="white" height="31.9846" width="23.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[15.985px] left-[8.92px] top-[5.53px] w-[6.143px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">1</p>
    </div>
  );
}

function RankMedal() {
  return (
    <div className="absolute h-[31.992px] left-[20px] top-[40.47px] w-[23.988px]" data-name="RankMedal">
      <Icon5 />
      <Text1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[51.002px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">杨建君</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute h-[16.508px] left-[176.49px] top-[3.99px] w-[68.673px]" data-name="Text" />;
}

function Container4() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Text2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2223)" id="Icon">
          <path d={svgPaths.p2eb24c00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2223">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">5.0分</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[3.99px] h-[19.486px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[52.235px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[53px]">学员 1741</p>
      </div>
    </div>
  );
}

function Text5() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[39.775px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[40px]">教龄 17</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[17.985px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[72.942px] items-start left-[131.96px] top-[20px] w-[245.166px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[51.036px] relative rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute border-[0.745px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.489px] pt-[2.478px] px-[2.478px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#e7000b] h-[17.485px] left-[4.01px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[42.5px] w-[47.965px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[5.99px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">杰出教练</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[59.98px] size-[55.992px] top-[28.47px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2200)" id="Icon">
          <path d={svgPaths.p23e29680} fill="var(--fill-0, #F5222D)" id="Vector" stroke="var(--stroke-0, #F5222D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2200">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2200)" id="Icon">
          <path d={svgPaths.p23e29680} fill="var(--fill-0, #F5222D)" id="Vector" stroke="var(--stroke-0, #F5222D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2200">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2200)" id="Icon">
          <path d={svgPaths.p23e29680} fill="var(--fill-0, #F5222D)" id="Vector" stroke="var(--stroke-0, #F5222D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2200">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2200)" id="Icon">
          <path d={svgPaths.p23e29680} fill="var(--fill-0, #F5222D)" id="Vector" stroke="var(--stroke-0, #F5222D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2200">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2216)" id="Icon">
          <path d={svgPaths.p2ebf2b00} fill="var(--fill-0, #F5222D)" id="Vector" stroke="var(--stroke-0, #F5222D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2216">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon7 />
      <Icon8 />
      <Icon9 />
      <Icon10 />
      <Icon11 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute border-[#f5222d] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[28.91px] not-italic text-[#f5222d] text-[10px] text-center text-nowrap top-[13.06px] tracking-[1.1172px] translate-x-[-50%]">杰出教练</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[10.118px] left-[13.77px] opacity-60 top-[39.67px] w-[29.338px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#f5222d] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[26.644px] items-center justify-center left-[7.11px] top-[4.5px] w-[51.021px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.909deg]">
          <Container11 />
        </div>
      </div>
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container13() {
  return <div className="absolute border-[#f5222d] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp() {
  return (
    <div className="border-[#f5222d] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container12 />
      <Container13 />
    </div>
  );
}

function CoachListItem() {
  return (
    <div className="absolute h-[112.939px] left-0 top-0 w-[393.121px]" data-name="CoachListItem">
      <RankMedal />
      <Container7 />
      <Container10 />
      <div className="absolute flex items-center justify-center left-[308px] size-[90.026px] top-[14px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute h-[31.985px] left-0 top-0 w-[23.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9884 31.9846">
        <g clipPath="url(#clip0_371_2219)" id="Icon">
          <path d={svgPaths.pa387600} fill="var(--fill-0, #BFBFBF)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3b6c8200} fill="var(--fill-0, #BFBFBF)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_371_2219">
            <rect fill="white" height="31.9846" width="23.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[15.985px] left-[8.13px] top-[7.98px] w-[7.725px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[-2.39px]">2</p>
    </div>
  );
}

function RankMedal1() {
  return (
    <div className="absolute h-[31.992px] left-[20px] top-[40.47px] w-[23.988px]" data-name="RankMedal">
      <Icon12 />
      <Text9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[34.005px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">乔梁</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2213)" id="Icon">
          <path d={svgPaths.p3555d180} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2213">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">5.0分</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[19.486px] items-center left-0 top-[29.48px] w-[245.166px]" data-name="Container">
      <Icon13 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[55.562px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[56px]">学员 1284</p>
      </div>
    </div>
  );
}

function Text12() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[40.601px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[41px]">教龄 18</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[17.985px] items-center left-0 top-[54.96px] w-[245.166px]" data-name="Container">
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[72.942px] left-[131.96px] top-[20px] w-[245.166px]" data-name="Container">
      <Heading2 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function ImageWithFallback1() {
  return <div className="h-[53.014px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container17() {
  return (
    <div className="absolute left-[59.98px] rounded-[2.49829e+07px] size-[55.992px] top-[28.47px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c99619] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2207)" id="Icon">
          <path d={svgPaths.p7901f00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2207">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon14 />
      <Icon15 />
      <Icon16 />
      <Icon17 />
      <Icon18 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute border-[#fa8c16] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[27.94px] not-italic text-[#fa8c16] text-[10px] text-center text-nowrap top-[12.85px] tracking-[1.1172px] translate-x-[-50%]">五星教练</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[14.814px] left-[12.98px] opacity-60 top-[39.67px] w-[30.13px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#fa8c16] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[27.581px] items-center justify-center left-[8px] top-[4.24px] w-[51.186px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.129deg]">
          <Container18 />
        </div>
      </div>
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container20() {
  return <div className="absolute border-[#fa8c16] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp1() {
  return (
    <div className="border-[#fa8c16] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container19 />
      <Container20 />
    </div>
  );
}

function CoachListItem1() {
  return (
    <div className="absolute h-[112.939px] left-0 top-[112.94px] w-[393.121px]" data-name="CoachListItem">
      <RankMedal1 />
      <Container16 />
      <Container17 />
      <div className="absolute flex items-center justify-center left-[307.18px] size-[90.026px] top-[11.21px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp1 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute h-[31.985px] left-0 top-0 w-[23.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9884 31.9846">
        <g clipPath="url(#clip0_371_2228)" id="Icon">
          <path d={svgPaths.pa387600} fill="var(--fill-0, #D48806)" fillOpacity="0.2" id="Vector" />
          <path d={svgPaths.p3b6c8200} fill="var(--fill-0, #D48806)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_371_2228">
            <rect fill="white" height="31.9846" width="23.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[15.985px] left-[7.98px] top-[4.65px] w-[8.027px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">3</p>
    </div>
  );
}

function RankMedal2() {
  return (
    <div className="absolute h-[31.992px] left-[20px] top-[40.47px] w-[23.988px]" data-name="RankMedal">
      <Icon19 />
      <Text16 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[51.002px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">王果香</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2213)" id="Icon">
          <path d={svgPaths.p3555d180} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2213">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">5.0分</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[3.99px] h-[19.486px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon20 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[51.793px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[52px]">学员 1114</p>
      </div>
    </div>
  );
}

function Text19() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text20() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[38.507px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[39px]">教龄 11</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[17.985px] items-center relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[72.942px] items-start left-[131.96px] top-[20px] w-[245.166px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function ImageWithFallback2() {
  return <div className="h-[53.014px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container25() {
  return (
    <div className="absolute left-[59.98px] rounded-[2.49829e+07px] size-[55.992px] top-[28.47px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c99619] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2207)" id="Icon">
          <path d={svgPaths.p7901f00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2207">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon21 />
      <Icon22 />
      <Icon23 />
      <Icon24 />
      <Icon25 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute border-[#fa8c16] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[27.94px] not-italic text-[#fa8c16] text-[10px] text-center text-nowrap top-[12.85px] tracking-[1.1172px] translate-x-[-50%]">五星教练</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[14.814px] left-[12.98px] opacity-60 top-[39.67px] w-[30.13px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#fa8c16] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[27.581px] items-center justify-center left-[8px] top-[4.24px] w-[51.186px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.129deg]">
          <Container26 />
        </div>
      </div>
      <Text21 />
      <Text22 />
    </div>
  );
}

function Container28() {
  return <div className="absolute border-[#fa8c16] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp2() {
  return (
    <div className="border-[#fa8c16] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container27 />
      <Container28 />
    </div>
  );
}

function CoachListItem2() {
  return (
    <div className="absolute h-[112.939px] left-0 top-[225.88px] w-[393.121px]" data-name="CoachListItem">
      <RankMedal2 />
      <Container24 />
      <Container25 />
      <div className="absolute flex items-center justify-center left-[307.18px] size-[90.026px] top-[11.27px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp2 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[22.488px] left-[29.17px] top-[45.22px] w-[9.644px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#62748e] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">4</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[34.005px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">王宇</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2213)" id="Icon">
          <path d={svgPaths.p3555d180} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2213">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">5.0分</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[19.486px] items-center left-0 top-[29.48px] w-[245.166px]" data-name="Container">
      <Icon26 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[48.931px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[49px]">学员 877</p>
      </div>
    </div>
  );
}

function Text26() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[40.462px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[41px]">教龄 13</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[17.985px] items-center left-0 top-[54.96px] w-[245.166px]" data-name="Container">
      <Text25 />
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[72.942px] left-[131.96px] top-[20px] w-[245.166px]" data-name="Container">
      <Heading4 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function ImageWithFallback3() {
  return <div className="h-[53.014px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container32() {
  return (
    <div className="absolute left-[59.98px] rounded-[2.49829e+07px] size-[55.992px] top-[28.47px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c99619] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2207)" id="Icon">
          <path d={svgPaths.p7901f00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2207">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon27 />
      <Icon28 />
      <Icon29 />
      <Icon30 />
      <Icon31 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute border-[#fa8c16] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[27.94px] not-italic text-[#fa8c16] text-[10px] text-center text-nowrap top-[12.85px] tracking-[1.1172px] translate-x-[-50%]">五星教练</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[14.814px] left-[12.98px] opacity-60 top-[39.67px] w-[30.13px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#fa8c16] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[27.581px] items-center justify-center left-[8px] top-[4.24px] w-[51.186px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.129deg]">
          <Container33 />
        </div>
      </div>
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container35() {
  return <div className="absolute border-[#fa8c16] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp3() {
  return (
    <div className="border-[#fa8c16] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container34 />
      <Container35 />
    </div>
  );
}

function CoachListItem3() {
  return (
    <div className="absolute h-[112.939px] left-0 top-[338.82px] w-[393.121px]" data-name="CoachListItem">
      <Text23 />
      <Container31 />
      <Container32 />
      <div className="absolute flex items-center justify-center left-[307.18px] size-[90.026px] top-[11.33px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp3 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[22.488px] left-[29.35px] top-[45.22px] w-[9.272px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#62748e] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">5</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[51.002px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">刘东春</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2213)" id="Icon">
          <path d={svgPaths.p3555d180} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2213">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.714px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">5.0分</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[3.99px] h-[19.486px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon32 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[50.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[51px]">学员 433</p>
      </div>
    </div>
  );
}

function Text33() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text34() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[38.507px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[39px]">教龄 11</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[17.985px] items-center relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
      <Text34 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[72.942px] items-start left-[131.96px] top-[20px] w-[245.166px]" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function ImageWithFallback4() {
  return <div className="h-[53.014px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container40() {
  return (
    <div className="absolute left-[59.98px] rounded-[2.49829e+07px] size-[55.992px] top-[28.47px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c99619] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2207)" id="Icon">
          <path d={svgPaths.p7901f00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2207">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon33 />
      <Icon34 />
      <Icon35 />
      <Icon36 />
      <Icon37 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute border-[#fa8c16] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[27.94px] not-italic text-[#fa8c16] text-[10px] text-center text-nowrap top-[12.85px] tracking-[1.1172px] translate-x-[-50%]">五星教练</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[14.814px] left-[12.98px] opacity-60 top-[39.67px] w-[30.13px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#fa8c16] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[27.581px] items-center justify-center left-[8px] top-[4.24px] w-[51.186px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.129deg]">
          <Container41 />
        </div>
      </div>
      <Text35 />
      <Text36 />
    </div>
  );
}

function Container43() {
  return <div className="absolute border-[#fa8c16] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp4() {
  return (
    <div className="border-[#fa8c16] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container42 />
      <Container43 />
    </div>
  );
}

function CoachListItem4() {
  return (
    <div className="absolute h-[112.939px] left-0 top-[451.75px] w-[393.121px]" data-name="CoachListItem">
      <Text30 />
      <Container39 />
      <Container40 />
      <div className="absolute flex items-center justify-center left-[307.18px] size-[90.026px] top-[11.4px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp4 />
        </div>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[22.488px] left-[29.21px] top-[45.23px] w-[9.551px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#62748e] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">6</p>
    </div>
  );
}

function ImageWithFallback5() {
  return <div className="h-[53.014px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container44() {
  return (
    <div className="absolute left-[59.98px] rounded-[2.49829e+07px] size-[55.992px] top-[28.47px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c99619] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[25.489px] left-0 top-0 w-[51.002px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">任建国</p>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_371_2213)" id="Icon">
          <path d={svgPaths.p3555d180} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_371_2213">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[33.784px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#fa8c16] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[34px]">3.0分</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[19.486px] items-center left-0 top-[29.48px] w-[245.166px]" data-name="Container">
      <Icon38 />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[49.989px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[50px]">学员 590</p>
      </div>
    </div>
  );
}

function Text40() {
  return <div className="bg-[#e5e7eb] h-[11.994px] shrink-0 w-[0.989px]" data-name="Text" />;
}

function Text41() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[40.659px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.49px] w-[41px]">教龄 14</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[17.985px] items-center left-0 top-[54.96px] w-[245.166px]" data-name="Container">
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[72.942px] left-[137.19px] top-[20px] w-[239.931px]" data-name="Container">
      <Heading6 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-0 size-[9.479px] top-[8.3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[9.76px] size-[9.479px] top-[6.23px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[19.53px] size-[9.479px] top-[4.15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[29.29px] size-[9.479px] top-[2.08px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47929 9.47929">
        <g clipPath="url(#clip0_371_2210)" id="Icon">
          <path d={svgPaths.p7771700} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789941" />
        </g>
        <defs>
          <clipPath id="clip0_371_2210">
            <rect fill="white" height="9.47929" width="9.47929" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[39.05px] size-[9.479px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.47931 9.47931">
        <g clipPath="url(#clip0_371_2207)" id="Icon">
          <path d={svgPaths.p7901f00} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.789943" />
        </g>
        <defs>
          <clipPath id="clip0_371_2207">
            <rect fill="white" height="9.47931" width="9.47931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[17.78px] relative w-[48.533px]" data-name="Container">
      <Icon39 />
      <Icon40 />
      <Icon41 />
      <Icon42 />
      <Icon43 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute border-[#fa8c16] border-[0.745px_0px] border-solid h-[28.368px] left-[5.21px] top-[11.34px] w-[56.449px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[10px] left-[27.94px] not-italic text-[#fa8c16] text-[10px] text-center text-nowrap top-[12.85px] tracking-[1.1172px] translate-x-[-50%]">五星教练</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[14.814px] left-[12.98px] opacity-60 top-[39.67px] w-[30.13px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[0.12px] not-italic text-[#fa8c16] text-[8px] text-nowrap top-[-0.45px]">APPROVED</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[54.973px] left-[2.6px] top-[8.98px] w-[67.706px]" data-name="Container">
      <div className="absolute flex h-[27.581px] items-center justify-center left-[8px] top-[4.24px] w-[51.186px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.129deg]">
          <Container48 />
        </div>
      </div>
      <Text42 />
      <Text43 />
    </div>
  );
}

function Container50() {
  return <div className="absolute border-[#fa8c16] border-[0.745px] border-solid left-[3.9px] opacity-30 rounded-[2.49829e+07px] size-[65.134px] top-[3.9px]" data-name="Container" />;
}

function Stamp5() {
  return (
    <div className="border-[#fa8c16] border-[1.489px] border-solid opacity-80 relative rounded-[2.49829e+07px] size-[75.903px]" data-name="Stamp">
      <Container49 />
      <Container50 />
    </div>
  );
}

function CoachListItem5() {
  return (
    <div className="absolute h-[112.939px] left-0 top-[564.69px] w-[393.121px]" data-name="CoachListItem">
      <Text37 />
      <Container44 />
      <Container47 />
      <div className="absolute flex items-center justify-center left-[307px] size-[90.026px] top-[11.46px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Stamp5 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[718px] left-0 top-[236px] w-[448px]" data-name="Container">
      <CoachListItem />
      <CoachListItem1 />
      <CoachListItem2 />
      <CoachListItem3 />
      <CoachListItem4 />
      <CoachListItem5 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="教练列表">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <ExamInterface />
      <Container2 />
      <Container3 />
      <Container51 />
    </div>
  );
}