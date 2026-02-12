import svgPaths from "./svg-xi662ecxn8";

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
        <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-[0.03px] not-italic text-[#8b5e3c] text-[14px] text-nowrap top-[0.49px] tracking-[1.2496px]">临考冲刺密卷</p>
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
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[86px] not-italic text-[#8b4513] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">试题组深挖考点·真题卷高度还原</p>
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
    <div className="absolute content-stretch flex flex-col h-[722px] items-center left-0 pb-[47.989px] pt-[15.996px] px-0 top-[166px] w-[448px]" data-name="Container">
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

function Heading2() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-[-0.51px] tracking-[-0.4492px]">开通VIP会员</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[15.636px] items-start left-[52px] top-[1.49px] w-[52.002px]" data-name="Text">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] not-italic relative shrink-0 text-[#b45309] text-[13px] text-nowrap tracking-[-0.0762px]">考前密卷</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">立即解锁</p>
      <Text6 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[104px] not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">及更多权益</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[51.467px] relative shrink-0 w-[169.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p3c506100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p1202b780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[31.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[19.998px] px-[19.998px] relative size-full">
          <Container18 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="StarIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_241_492)" id="StarIcon">
          <path d={svgPaths.pa01a400} fill="var(--fill-0, #D97706)" id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_241_492">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[83.378px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#92400e] text-[18px] text-nowrap top-[-0.02px] tracking-[-0.4395px]">高效学VIP</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.992px] items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <StarIcon />
          <Text7 />
          <StarIcon />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[0.989px] shrink-0 to-[#d97706] w-[47.988px]" data-name="Container" />;
}

function Text8() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[87.985px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#b45309] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">畅享以下付费权益</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[16.508px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.992px] items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <Container21 />
          <Text8 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_241_485)" id="Icon">
          <path d={svgPaths.p32e59c00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d={svgPaths.p15ad7800} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M7.49904 6.74892H5.99904" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M11.999 9.74844H5.99904" id="Vector_4" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M11.999 12.748H5.99904" id="Vector_5" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_241_485">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">精简题库</p>
      </div>
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container23 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_241_480)" id="Icon">
          <path d={svgPaths.p2ff59d00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M5.99904 15.7475H11.999" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M8.99856 12.748V15.748" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_241_480">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">真实考场</p>
      </div>
    </div>
  );
}

function BenefitItem1() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container24 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g id="Icon">
          <path d={svgPaths.p2c9d7000} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">懒人听题</p>
      </div>
    </div>
  );
}

function BenefitItem2() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container25 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_241_472)" id="Icon">
          <path d={svgPaths.p27acba00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M6.74894 13.4978H11.2489" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M7.49882 16.4974H10.4988" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_241_472">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">速记口诀</p>
      </div>
    </div>
  );
}

function BenefitItem3() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container26 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_241_497)" id="Icon">
          <path d={svgPaths.p361d7af0} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d={svgPaths.p2fe12200} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_241_497">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">考前密卷</p>
      </div>
    </div>
  );
}

function BenefitItem4() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container27 />
        <Text13 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pl-[3.99px] pr-[4.025px] py-0 relative size-full">
          <BenefitItem />
          <BenefitItem1 />
          <BenefitItem2 />
          <BenefitItem3 />
          <BenefitItem4 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#fffbf0] h-[197px] relative rounded-[14px] shrink-0 w-[416px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[23.988px] items-start overflow-clip pb-[0.745px] pt-[20.743px] px-[20.743px] relative rounded-[inherit] size-full">
        <Container20 />
        <Container22 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(253,230,138,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[19.986px] left-0 top-[14.15px] w-[8.667px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.49px] tracking-[-0.1504px]">¥</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[35.994px] items-start left-[12.66px] top-0 w-[36.855px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[30px] text-nowrap text-white tracking-[-0.3545px]">60</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[15.985px] left-[53.5px] top-[16.38px] w-[35.122px]" data-name="Text">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.74px]">/6个月</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[88.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-b from-[#ffdc98] h-[46.476px] relative rounded-[2.49829e+07px] shadow-[0px_2px_8px_0px_rgba(255,196,83,0.3)] shrink-0 to-[#ffc453] w-[152.947px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[22.5px] left-[75.99px] not-italic text-[#4a3208] text-[15px] text-center text-nowrap top-[11.23px] tracking-[-0.2344px] translate-x-[-50%]">确认协议并开通</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#2d241f] h-[58.459px] relative rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[23.988px] pr-[5.991px] py-0 relative size-full">
          <Container30 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[129.09px] top-[1.49px] w-[80.004px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员服务协议》</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[224.96px] top-[1.49px] w-[80.004px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员购买须知》</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[92.66px] not-italic text-[#99a1af] text-[10px] text-center text-nowrap top-[0.49px] tracking-[0.1172px] translate-x-[-50%]">开通即表示同意</p>
      <Text17 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[217.09px] not-italic text-[#99a1af] text-[10px] text-center text-nowrap top-[0.49px] tracking-[0.1172px] translate-x-[-50%]">和</p>
      <Text18 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.994px] items-start px-[15.996px] py-0 relative size-full">
          <Container31 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white h-[414px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Container19 />
        <Container29 />
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col h-[924px] items-start justify-end left-0 pb-0 pt-[433.92px] px-0 top-0 w-[448px]" data-name="Container">
      <Container33 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="考前密卷-付费卡片" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container17 />
      <SelectExamType />
      <Container34 />
    </div>
  );
}