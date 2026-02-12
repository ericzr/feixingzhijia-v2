import svgPaths from "./svg-4b16j02d7j";

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
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">章节练习</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99984 8.33317">
            <path d={svgPaths.p3acc4980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-3/4 right-[8.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99984 8.33317">
            <path d={svgPaths.p3acc4980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3316 11.6657">
            <path d={svgPaths.p33519380} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[65.83%] left-[8.33%] right-[68.45%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-45.45%_-17.95%_-45.46%_-17.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.31002 3.5001">
            <path d={svgPaths.p1b091f20} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[51.25%] right-[8.33%] top-[65.63%]" data-name="Vector">
        <div className="absolute inset-[-44.44%_-10.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74987 3.54154">
            <path d={svgPaths.p26602760} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
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

function Text() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[6.143px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">1</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#c99619] content-stretch flex items-center justify-center relative rounded-[2.49829e+07px] shrink-0 size-[23.988px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">概述</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[91px]">0/60 正确率0%</p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280.02px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Button2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[62px] items-start relative shrink-0 w-[360px]" data-name="Container">
      <Heading1 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container8 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[7.725px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">2</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">空域</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[90px]">0/82 正确率0%</p>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Button3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[62px] items-start left-[40.01px] top-[0.01px] w-[360px]" data-name="Container">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container16 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[8.027px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">3</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">法律法规</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[96px]">0/125 正确率0%</p>
    </div>
  );
}

function Container20() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Button4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[63px] items-start left-[40.01px] top-[-0.45px] w-[360px]" data-name="Container">
      <Heading3 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container24 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[8.248px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">4</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.012px] py-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">系统组成</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[97px]">0/166 正确率0%</p>
    </div>
  );
}

function Container28() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Button5 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[62px] items-start left-[40.01px] top-[0.1px] w-[360px]" data-name="Container">
      <Heading4 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container32 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[7.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">5</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.012px] py-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">任务规划</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[90px]">0/55 正确率0%</p>
    </div>
  );
}

function Container36() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Button6 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[63px] items-start left-[40.01px] top-[-0.35px] w-[360px]" data-name="Container">
      <Heading5 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container40 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[8.202px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">6</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 pl-0 pr-[0.012px] py-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">多旋翼动力飞控</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[96px]">0/158 正确率0%</p>
    </div>
  );
}

function Container44() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Button7 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[62px] items-start left-[40.01px] top-[0.2px] w-[364px]" data-name="Container">
      <Heading6 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container48 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[7.259px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.74px]">7</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[#c99619] content-stretch flex items-center justify-center left-0 rounded-[2.49829e+07px] size-[23.988px] top-[3.99px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[16.997px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[17px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[-0.23px] tracking-[-0.4316px]">多旋翼综合</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[209.183px]" data-name="Container">
      <p className="absolute font-['Inter:Light','Noto_Sans_JP:Light',sans-serif] font-light leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[94px]">0/119 正确率0%</p>
    </div>
  );
}

function Container52() {
  return <div className="bg-[#c99619] h-[5.991px] rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container53() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[5.991px] items-start left-0 overflow-clip pl-0 pr-[95.989px] py-0 rounded-[2.49829e+07px] top-[27.48px] w-[95.989px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[33.47px] left-0 top-0 w-[225.179px]" data-name="Container">
      <Container51 />
      <Container53 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#fbf2db] h-[27.967px] left-[280px] rounded-[2.49829e+07px] top-[5.5px] w-[79.981px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">顺序练习</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[33.47px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Button8 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[63px] items-start left-[40.01px] top-[-0.26px] w-[360px]" data-name="Container">
      <Heading7 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[62.461px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[669px] items-center left-0 px-[23.988px] py-0 top-[150px] w-[448px]" data-name="Container">
      <Container9 />
      <Container17 />
      <Container25 />
      <Container33 />
      <Container41 />
      <Container49 />
      <Container57 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="章节练习">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container58 />
    </div>
  );
}