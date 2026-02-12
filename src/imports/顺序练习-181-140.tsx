import svgPaths from "./svg-jzvyjpfnmk";

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
    <div className="content-stretch flex flex-col h-[28px] items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-[359px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">顺序练习</p>
    </div>
  );
}

function SelectCity() {
  return (
    <div className="absolute content-stretch flex items-start left-0 p-[12px] top-[40px] w-[448px]" data-name="SelectCity">
      <Button />
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-[321.133px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">学习数据</p>
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

function Container2() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17.125px] items-center justify-center left-[108.84px] top-[2.23px] w-[25.373px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[22.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[15px] tracking-[-0.2344px]">4%</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[134.216px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">预测考试通过率</p>
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fbf2db] content-stretch flex gap-[7.992px] h-[47px] items-center pl-[15.996px] pr-0 py-0 relative rounded-[10px] shrink-0 w-[368px]" data-name="Container">
      <Container2 />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[53.07px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[-0.5297px] translate-x-[-50%]">1883</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[53.52px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">未做题</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[5.991px] h-[53.968px] items-start relative shrink-0 w-[107.04px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[105.551px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[52.51px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[-0.5297px] translate-x-[-50%]">0</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[105.551px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-[52.77px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">错题数</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[5.991px] h-[53.968px] items-start px-[0.745px] py-0 relative shrink-0 w-[107.04px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16.38px] items-start left-[55.42px] top-[1.49px] w-[12.715px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[14px] text-center tracking-[-0.7504px]">%</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[45.9px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[-0.5297px] translate-x-[-50%]">0</p>
        <Text6 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-[53.52px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">正确率</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[5.991px] h-[53.968px] items-start relative shrink-0 w-[107.04px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[368px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c99619] content-stretch flex items-center justify-center px-[129px] py-[11px] relative rounded-[2.49829e+07px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-[376px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">开始练习</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[27px] items-start p-[20px] relative w-full">
          <Heading1 />
          <Container3 />
          <Container7 />
          <Button1 />
        </div>
      </div>
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

function Icon5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_33_2339)" id="Icon">
          <path d={svgPaths.p23525180} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.p2f91b640} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.pb7abac0} id="Vector_3" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.p355d9380} id="Vector_4" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.pf853900} id="Vector_5" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
        </g>
        <defs>
          <clipPath id="clip0_33_2339">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[10px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[47.988px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">随机练习</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[11.994px] h-[112px] items-center justify-center relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[128px]" data-name="Button">
      <Container9 />
      <Text9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d="M10.9995 6.41639V19.2497" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.p3e957d00} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[10px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[47.988px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">章节练习</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[11.994px] h-[112px] items-center justify-center relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[128px]" data-name="Button">
      <Container10 />
      <Text10 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_33_2335)" id="Icon">
          <path d="M11.9162 19.2492H19.2495" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.p163b4700} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
        </g>
        <defs>
          <clipPath id="clip0_33_2335">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[10px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[47.988px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">每日一练</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[11.994px] h-[112px] items-center justify-center relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[128px]" data-name="Button">
      <Container11 />
      <Text11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[149.48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[467px] items-start left-0 px-[15.996px] py-0 top-[107px] w-[448px]" data-name="Container">
      <Container8 />
      <Container13 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="顺序练习" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container14 />
    </div>
  );
}