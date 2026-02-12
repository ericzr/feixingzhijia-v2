import svgPaths from "./svg-fwlyzecpt8";

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
    <div className="h-[40px] pointer-events-auto sticky top-0 w-[448px]">
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
    <button className="absolute content-stretch cursor-pointer flex flex-col h-[28px] items-start left-[12px] pb-0 pt-[3.99px] px-[3.99px] top-[12px] w-[36px]" data-name="Button">
      <Icon3 />
    </button>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[48px] px-[116px] py-0 top-[12px] w-[349px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">考试记录</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.16%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.16%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3321 14.9986">
            <path d={svgPaths.p2f1ecd80} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6651 1.66651">
            <path d="M0.833254 0.833254H15.8318" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33317 4.99984">
            <path d={svgPaths.p266fb980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[397px] pb-0 pt-[7.992px] px-[7.992px] size-[35.983px] top-[12px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function SelectCity() {
  return (
    <div className="absolute h-[59.983px] left-0 top-[40px] w-[448px]" data-name="SelectCity">
      <Button />
      <Heading />
      <Button1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_293_1231)" id="Icon">
          <path d={svgPaths.p24de8880} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <g id="Vector_2">
            <path d={svgPaths.p18c0ad40} fill="var(--fill-0, #C99619)" />
            <path d={svgPaths.p18c0ad40} stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </g>
          <g id="Vector_3">
            <path d="M6.66507 5.99856H5.33205Z" fill="var(--fill-0, #C99619)" />
            <path d="M6.66507 5.99856H5.33205" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </g>
          <g id="Vector_4">
            <path d="M10.6641 8.66458H5.33205Z" fill="var(--fill-0, #C99619)" />
            <path d="M10.6641 8.66458H5.33205" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </g>
          <g id="Vector_5">
            <path d="M10.6641 11.3306H5.33205Z" fill="var(--fill-0, #C99619)" />
            <path d="M10.6641 11.3306H5.33205" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_293_1231">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[59.983px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">历史成绩</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[83.971px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Icon5 />
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f5db9b] h-[23.965px] relative rounded-[4px] shrink-0 w-[101.677px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[11.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[4.73px]">平均成绩：-分</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[23.965px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[24.89px] not-italic text-[#755609] text-[10px] text-nowrap text-right top-[0.49px] tracking-[0.1172px] translate-x-[-100%]">100</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[24.61px] not-italic text-[#755609] text-[10px] text-nowrap text-right top-[0.49px] tracking-[0.1172px] translate-x-[-100%]">70</p>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="h-0 shrink-0 w-[24px]" data-name="Text" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[104.004px] items-start justify-between left-0 top-0 w-[31.992px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[0.745px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5c244] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96.012px] items-start left-[31.99px] pb-[0.745px] pl-[0.745px] pr-0 pt-[28.572px] top-[7.99px] w-[289.152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#755609] border-[0px_0px_0.745px_0.745px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[4.921px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#755609] text-[10px] text-nowrap top-[0.49px] tracking-[0.1172px]">1</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[6.457px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#755609] text-[10px] text-nowrap top-[0.49px] tracking-[0.1172px]">5</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[11.517px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#755609] text-[10px] text-nowrap top-[0.49px] tracking-[0.1172px]">10</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[15.007px] items-start justify-between left-[31.99px] pl-[3.99px] pr-[4.002px] py-0 top-[112.99px] w-[289.152px]" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[127.993px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-gradient-to-b from-[#f5db9b] h-[207.938px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 to-[#fbf2db] w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[23.988px] items-start pb-0 pt-[15.996px] px-[15.996px] relative size-full">
          <Container4 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[90.276px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[19.5px] left-[45.13px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">分数</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[90.288px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[19.5px] left-[45.14px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">用时</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[54.13px] size-[11.994px] top-[3.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p12e66c80} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <path d={svgPaths.p822c570} id="Vector_2" stroke="var(--stroke-0, #FBF2DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[90.276px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[19.5px] left-[37.14px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">日期</p>
      <Icon6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[90.288px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[19.5px] left-[45.14px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">成绩</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-0 py-[16px] relative w-full">
        <Container11 />
        <Container12 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[159.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute flex inset-[23.06%_37.59%_43.06%_32.59%] items-center justify-center">
        <div className="flex-none h-[47.999px] rotate-[350deg] w-[39.999px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.999 47.9988">
              <path d={svgPaths.pfb98c00} fill="var(--fill-0, #FBF2DB)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[28.85%_46.85%_68.11%_35.92%] items-center justify-center">
        <div className="flex-none h-px rotate-[350deg] w-[27.999px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-0.8px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9993 1.59996">
                <path d="M0 0.799982H27.9993" id="Vector" stroke="var(--stroke-0, #F5DB9B)" strokeWidth="1.59996" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.77%_45.98%_63.19%_36.78%] items-center justify-center">
        <div className="flex-none h-px rotate-[350deg] w-[27.999px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-0.8px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9993 1.59996">
                <path d="M0 0.799982H27.9993" id="Vector" stroke="var(--stroke-0, #F5DB9B)" strokeWidth="1.59996" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.97%_18.74%_48.97%_53.74%] items-center justify-center">
        <div className="flex-none h-[47.999px] rotate-[5deg] w-[39.999px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.999 47.9988">
              <path d={svgPaths.pfb98c00} fill="var(--fill-0, #FBF2DB)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[21.68%_31.41%_67.49%_57.76%] items-center justify-center">
        <div className="flex-none rotate-[5deg] size-[16px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 15.9996">
              <path d={svgPaths.p12d2ec80} fill="var(--fill-0, #FBF2DB)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.26%_24.16%_69.33%_70.43%] items-center justify-center">
        <div className="flex-none rotate-[5deg] size-[8px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9998 7.9998">
              <path d={svgPaths.p2862f380} fill="var(--fill-0, #FBF2DB)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[55%_30%_30%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9984 23.9994">
          <path d={svgPaths.p3fbeaf00} fill="var(--fill-0, #D1D5DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55%_65%_20%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9998 39.999">
          <path d={svgPaths.p3b336a00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[30%] right-[30%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9984 39.999">
          <path d={svgPaths.p31133700} fill="url(#paint0_linear_293_1227)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_293_1227" x1="0" x2="0" y1="0" y2="3999.9">
              <stop stopColor="#F5F5F5" />
              <stop offset="1" stopColor="#E0E0E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[65%_30%_10%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9984 39.999">
          <path d={svgPaths.pdf65200} fill="var(--fill-0, #D4D4D4)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] left-1/2 right-1/2 top-3/4" data-name="Vector">
        <div className="absolute inset-[0_-0.4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.799982 23.9994">
            <g id="Vector">
              <path d="M0.399991 0V23.9994Z" fill="var(--fill-0, black)" />
              <path d="M0.399991 0V23.9994" stroke="var(--stroke-0, #C0C0C0)" strokeWidth="0.799982" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53%_73%_43%_23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.39984 6.39984">
          <path d={svgPaths.p15208200} fill="var(--fill-0, #FBF2DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.5%_18.5%_38.5%_78.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79988 4.79988">
          <path d={svgPaths.p39f7c480} fill="var(--fill-0, #FBF2DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93%_30%_3%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9984 6.39984">
          <path d={svgPaths.p2dd91300} fill="var(--fill-0, black)" id="Vector" opacity="0.05" />
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 size-[159.996px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-[42.23px] leading-[21.125px] not-italic relative shrink-0 text-[#99a1af] text-[13px] text-center text-nowrap tracking-[-0.0762px] w-[99.118px]" data-name="Paragraph">
      <p className="absolute left-[50.55px] top-[0.23px] translate-x-[-50%]">暂无成绩记录，</p>
      <p className="absolute left-[50px] top-[21.35px] translate-x-[-50%]">现在就去考试吧~</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[416px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center px-[101px] py-[65px] relative size-full">
        <Container16 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[399.997px] items-start relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[697px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.996px] items-start pb-0 pt-[15.996px] px-[15.996px] relative size-full">
          <Container10 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c99619] relative rounded-[14px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[133px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">开始考试</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[116px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[31.992px] px-[31.992px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function ExamRecords() {
  return (
    <div className="absolute content-stretch flex flex-col h-[824px] items-center left-0 top-[100px] w-[448px]" data-name="ExamRecords">
      <Container19 />
      <Container20 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="考试记录">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <ExamRecords />
    </div>
  );
}