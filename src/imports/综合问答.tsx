import svgPaths from "./svg-2zhoudi8y6";

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
    <div className="h-[23.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p3c506100} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p1202b780} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 size-[31.969px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function SelectCity() {
  return (
    <div className="absolute content-stretch flex items-start left-0 p-[12px] top-[40px] w-[448px]" data-name="SelectCity">
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[30px] left-[107px] top-[2px] w-[281px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[30.25px] left-0 not-italic text-[#c99619] text-[22px] top-[-0.92px] tracking-[-0.8078px] w-[281px]">视距内驾驶员和超视距驾驶员</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[60.495px] left-0 top-0 w-[337.129px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[30.25px] left-0 not-italic text-[#1d293d] text-[22px] text-nowrap top-[0.49px] tracking-[-0.8078px]">综合问答：</p>
      <Text />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[30.25px] left-0 not-italic text-[#1d293d] text-[22px] text-nowrap top-[30.74px] tracking-[-0.8078px]">的考试项目</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[39px] left-0 top-[72px] w-[383px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#62748e] text-[12px] top-0 w-[383px]">考试采用电脑机考选择题的方式，考试时长20分钟，共10题，答对≥7题合格</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[111px] left-[33px] top-0 w-[383px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[111px] left-0 top-[96px] w-[448px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">练习模式</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">题库共213题，不限练习时长</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[50.967px] relative shrink-0 w-[164.801px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.991px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p385bcb60} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[90.963px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[19.998px] py-0 relative size-full">
          <Container4 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">考试模式</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">每次出10题，20分钟内作答，答对≥7题合格</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[50.967px] relative shrink-0 w-[253.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.991px] items-start relative size-full">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p385bcb60} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[90.963px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[19.998px] py-0 relative size-full">
          <Container5 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[198px] items-start left-0 px-[15.996px] py-0 top-[264px] w-[448px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="综合问答" style={{ backgroundImage: "linear-gradient(rgb(251, 242, 219) 11.201%, rgba(251, 242, 219, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container3 />
      <Container6 />
    </div>
  );
}