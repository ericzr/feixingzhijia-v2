import svgPaths from "./svg-099w7j2n06";

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
    <div className="absolute content-stretch flex flex-col h-[28px] items-start left-[8px] pb-0 pt-[3.99px] px-[3.99px] top-[12px] w-[36px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[97px] px-[116px] py-0 top-[12px] w-[257px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">模拟考试</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[22.488px] left-[353.97px] opacity-90 top-[12px] w-[59.983px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-[30px] not-italic text-[#1d293d] text-[15px] text-center text-nowrap top-[-0.77px] tracking-[-0.2344px] translate-x-[-50%]">考试记录</p>
    </div>
  );
}

function SelectCity() {
  return (
    <div className="absolute h-[55.969px] left-0 top-[40px] w-[448px]" data-name="SelectCity">
      <Button />
      <Heading />
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] px-[92px] py-0 top-[48px] w-[369px]" data-name="Heading 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[20px] text-center text-nowrap tracking-[-0.4492px]">175****8447</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[79.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">考试类型</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[89.974px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">多旋翼无人机</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[79.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">考试标准</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[111.368px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">100题，120分钟</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[79.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">合格标准</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[17.125px] items-center justify-center relative shrink-0 w-[81.121px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#99a1af] text-[15px] text-nowrap tracking-[-0.2344px]">(满分100分)</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22.5px] not-italic relative shrink-0 text-[#1d293d] text-[15px] text-nowrap tracking-[-0.2344px]">70分及格</p>
        <Text5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[79.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#99a1af] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">出题规则</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[164.952px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">根据民航局出题规则组卷</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[22.488px] items-start relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[138px] items-start left-[24px] top-[108px] w-[369px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21.125px] not-italic relative shrink-0 text-[#755609] text-[13px] text-justify tracking-[-0.0762px] w-[290px]">答题不可修改，累计错题分数达到不及格标准时，系统自动提醒交卷，考试不通过。</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex flex-col h-[66px] items-center left-[24px] pb-0 pt-[11.994px] px-[11.994px] rounded-[10px] top-[270px] w-[369px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-gradient-to-b from-[#f3e8ff] left-0 size-[64.008px] to-[#eff6ff] top-0" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[#ad46ff] h-[15.996px] left-[4px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-[31.992px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#9810fa] h-[11.994px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[16px] w-[39.996px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="absolute h-[27.99px] left-[12.01px] top-[22px] w-[39.996px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[64.008px] overflow-clip relative rounded-[2.49829e+07px] shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#c6d2ff] items-start left-[172px] pb-0 pt-[3.99px] px-[3.99px] rounded-[2.49829e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[71.989px] to-[#dbeafe] top-[-35.99px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[368.098px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container6 />
      <Container7 />
      <Container13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c99619] relative rounded-[14px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[148px] py-[13px] relative w-full">
          <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[25.5px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.4316px]">开始考试</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[113.855px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.855 113.855">
        <g id="Icon">
          <path d={svgPaths.p27688900} id="Vector" stroke="var(--stroke-0, #DBEAFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
          <path d="M37.9517 99.6232H75.9033" id="Vector_2" stroke="var(--stroke-0, #DBEAFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
          <path d="M56.9275 80.6473V99.6231" id="Vector_3" stroke="var(--stroke-0, #DBEAFE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="9.48792" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1d293d] text-[18px] text-nowrap top-[-0.02px] tracking-[-0.4395px]">真实考场模拟</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(21,93,252,0.7)] text-nowrap top-[0.74px]">深度还原电脑正式考试界面</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[47.965px] items-start left-[16px] top-[16px] w-[143.942px]" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[41.99px] size-[15.996px] top-[7.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[31.969px] left-[297px] rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[23.93px] w-[65.974px]" data-name="Button">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-[25.99px] not-italic text-[#1d293d] text-[14px] text-center text-nowrap top-[6.48px] tracking-[-0.1504px] translate-x-[-50%]">开始</p>
      <Icon5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(239,246,255,0.6)] h-[79.958px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="absolute flex items-center justify-center left-[224.22px] size-[135.039px] top-[-32.64px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Icon4 />
        </div>
      </div>
      <Container15 />
      <Button3 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[17.152px] relative shrink-0 w-[13.611px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[0.11px] not-italic text-[#ff8904] text-[12px] text-nowrap top-[0.74px]">密</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="opacity-50 relative rounded-[2.49829e+07px] shrink-0 size-[35.161px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffb86a] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.489px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ffd6a8] content-stretch flex h-[86.244px] items-center justify-center pl-[1.489px] pr-[1.501px] py-[1.489px] relative rounded-[10px] w-[72.007px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffb86a] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,214,168,0.5)] h-[15.789px] relative rounded-[4px] w-[44.61px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[13.5px] left-[4.07px] not-italic text-[#f54900] text-[9px] text-nowrap top-[-0.05px] tracking-[0.167px]">精准提分</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[27.076px] relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] w-[50.552px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[6.43px] not-italic text-[#ff6900] text-[9px] text-nowrap top-[2.92px] tracking-[0.167px]">智能预测</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[27.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9904 27.9904">
        <g id="Icon">
          <path d={svgPaths.p37013600} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
          <path d={svgPaths.p7b1fa00} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
          <path d={svgPaths.p7ef5380} id="Vector_3" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[40.01px] pl-0 pr-[0.012px] py-0 rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[47.988px] top-[48.02px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[104.004px] left-[225.14px] top-[7.99px] w-[127.993px]" data-name="Container">
      <div className="absolute flex h-[93.298px] items-center justify-center left-[42.98px] top-[12.87px] w-[80.628px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[6deg]">
          <Container18 />
        </div>
      </div>
      <div className="absolute flex h-[18.102px] items-center justify-center left-[74.89px] top-[73.36px] w-[45.375px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[3deg]">
          <Container19 />
        </div>
      </div>
      <div className="absolute flex h-[36.994px] items-center justify-center left-[30.75px] top-[-7.31px] w-[55.077px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[348deg]">
          <Container20 />
        </div>
      </div>
      <Container21 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[27.99px] left-0 top-0 w-[80.004px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-[-0.51px] tracking-[-0.4492px]">考前密卷</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[33.968px] opacity-80 relative w-[61.261px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.31px] not-italic text-[#c27aff] text-[18px] text-nowrap top-[-0.04px] tracking-[-0.4395px]">precise</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[28.735px] left-0 top-0 w-[329.137px]" data-name="Container">
      <Heading3 />
      <div className="absolute flex h-[40.186px] items-center justify-center left-[86.69px] top-[-8.65px] w-[64.476px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[354deg]">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#ff8904] h-[23.965px] left-0 rounded-[8px] top-[33.95px] w-[123.944px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[12px] text-nowrap text-white top-[4.73px]">临考冲刺用考前密卷</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[57.912px] left-[16px] top-[16px] w-[329.137px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gradient-to-r from-[#fff7ed] h-[111.996px] overflow-clip relative rounded-[14px] shrink-0 to-[rgba(255,237,212,0.8)] w-full" data-name="Container">
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[678px] items-start left-0 px-[15.996px] py-0 top-[136px] w-[448px]" data-name="Container">
      <Container14 />
      <Button2 />
      <Container16 />
      <Container26 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="模拟考试" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container27 />
    </div>
  );
}