import svgPaths from "./svg-5r334fx1k6";

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
    <button className="content-stretch cursor-pointer flex flex-col h-[28px] items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px]" data-name="Button">
      <Icon3 />
    </button>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-[367px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">考前密卷</p>
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

function Container2() {
  return <div className="absolute h-[426.649px] left-0 opacity-20 top-0 w-[319.993px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[426.649px] left-0 rounded-[10px] top-0 w-[319.993px]" data-name="Container">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_40px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.05)] h-[127.993px] left-0 to-[rgba(0,0,0,0)] top-0 w-[319.993px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[21.596px] relative shrink-0 w-[92.729px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[20px] left-[0.03px] not-italic text-[#8b5e3c] text-[14px] text-nowrap top-[0.49px] tracking-[1.2496px]">临考冲刺密卷</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[52.728px] items-center justify-center left-0 px-0 py-[0.745px] top-0 w-[272.789px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.745px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
    </div>
  );
}

function Container6() {
  return <div className="bg-[rgba(255,255,255,0.8)] blur-[1px] filter h-[33.03px] w-[18.189px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[52.728px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-[272.789px]" data-name="Container">
      <Container5 />
      <div className="absolute flex h-[33.937px] items-center justify-center left-[-8.67px] top-[11.26px] w-[19.893px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[357deg]">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[31.539px] relative shrink-0 w-[25.392px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Tinos:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[28px] left-[0.56px] text-[#c10007] text-[20px] text-nowrap top-[-0.82px]" style={{ fontVariationSettings: "'wght' 700" }}>
          密
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[2.49829e+07px] shrink-0 size-[52.184px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(193,0,7,0.8)] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.745px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-90 pl-[2.978px] pr-[2.987px] py-[2.978px] relative rounded-[2.49829e+07px] size-[66.41px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[2.978px] border-[rgba(193,0,7,0.8)] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[35.994px] left-[73px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] top-[22.53px] w-[125.992px]" data-name="Heading 2">
      <p className="absolute bg-clip-text font-['Tinos:Bold','Noto_Sans_JP:Bold',sans-serif] leading-[36px] left-0 text-[30px] text-[rgba(0,0,0,0)] text-nowrap top-[-0.26px] tracking-[1.5px]" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wght' 700", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(254, 243, 199) 0%, rgb(252, 211, 77) 100%)" }}>
        黄金提分
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[27.548px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Tinos:Bold','Noto_Sans_JP:Bold',sans-serif] grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#fde68a] text-[24px] tracking-[2.4px]" style={{ fontVariationSettings: "'wght' 700" }}>
        密卷
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#a93226] content-stretch flex flex-col h-[38.949px] items-start left-[96.1px] pb-[1.489px] pt-[4.968px] px-[13.483px] rounded-[4px] top-[66.51px] w-[79.771px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.489px] border-[rgba(253,230,138,0.8)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text2 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[rgba(0,0,0,0.05)] h-[127.993px] left-0 top-0 w-[271.993px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute bg-[#c53f36] h-[127.993px] left-[24px] rounded-[8px] top-[143.99px] w-[271.993px]" data-name="Container">
      <Heading1 />
      <Container10 />
      <Container11 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[11.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[6px] not-italic text-[#8b4513] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">→</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[171.7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[86px] not-italic text-[#8b4513] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">试题组深挖考点·真题卷高度还原</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[11.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[6px] not-italic text-[#8b4513] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">←</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15.985px] opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.992px] items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <Text3 />
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-[160.99px] not-italic text-[10px] text-[rgba(139,69,19,0.5)] text-center text-nowrap top-[0.49px] tracking-[1.1172px] translate-x-[-50%]">无人机考试题库</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[34.982px] items-start left-0 top-[327.67px] w-[319.993px]" data-name="Container">
      <Container13 />
      <Paragraph />
    </div>
  );
}

function Container15() {
  return <div className="absolute border-[#8b4513] border-[19.358px] border-solid left-[179.99px] opacity-10 rounded-[2.49829e+07px] size-[159.996px] top-[286.65px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="bg-[#e8dcca] h-[426.649px] relative rounded-[10px] shadow-[0px_25px_50px_-12px_#fbf2db] shrink-0 w-[319.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Container3 />
        <Container4 />
        <div className="absolute flex h-[57.481px] items-center justify-center left-[23.6px] top-[40.86px] w-[273.668px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[359deg]">
            <Container7 />
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[212.99px] size-[78.767px] top-[34.79px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[12deg]">
            <Container9 />
          </div>
        </div>
        <Container12 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[758px] items-center left-0 pb-[47.989px] pt-[15.996px] px-0 top-[166px] w-[448px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c99619] content-stretch flex items-center justify-center px-[157px] py-[13px] relative rounded-[2.49829e+07px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-[380px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[25.5px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.4316px]">立即解锁全部密卷</p>
    </div>
  );
}

function SelectExamType() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(249,250,251,0)] h-[100px] items-center left-0 pb-0 pt-[23.988px] px-[23.988px] to-[rgba(0,0,0,0)] top-[824px] w-[448px]" data-name="SelectExamType">
      <Button1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="考前密卷" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container17 />
      <SelectExamType />
    </div>
  );
}