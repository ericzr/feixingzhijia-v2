import svgPaths from "./svg-js98u2boeq";

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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-[367px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">选择城市</p>
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

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14.879px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8793 14.8793">
        <g id="Icon">
          <path d={svgPaths.p29417cc0} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23994" />
          <path d={svgPaths.p14c31f80} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23994" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[306.265px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#c99619] text-[14px] text-nowrap tracking-[-0.1504px]">输入城市名或拼音查询</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#fbf2db] content-stretch flex gap-[7.992px] h-[40px] items-center left-[18px] pl-[15.996px] pr-0 py-0 rounded-[2.49829e+07px] top-[95.9px] w-[412px]" data-name="Container">
      <Icon4 />
      <TextInput />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#755609] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">当前定位</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[19.986px] left-[24.73px] top-[8.74px] w-[55.992px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#755609] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">鄂尔多斯</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[37.46px] relative rounded-[2.49829e+07px] shrink-0 w-[105.458px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fbf2db] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]" />
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Heading1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#755609] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">热门城市</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[10px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">北京</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[10px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">上海</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_3] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[10px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">广州</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:2_/_1] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">深圳</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:2_/_2] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[10px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">南京</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:2_/_3] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">杭州</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="[grid-area:3_/_1] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">济南</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="[grid-area:3_/_2] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">天津</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="[grid-area:3_/_3] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">西安</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="[grid-area:4_/_1] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">重庆</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="[grid-area:4_/_2] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">成都</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="[grid-area:4_/_3] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">武汉</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="[grid-area:5_/_1] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">长沙</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="[grid-area:5_/_2] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">昆明</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="[grid-area:5_/_3] bg-[#fbf2db] content-stretch flex items-center justify-center px-[42px] py-[9px] relative rounded-[10px] self-start shrink-0 w-[124px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#755609] text-[14px] text-center text-nowrap tracking-[-0.1504px]">贵阳</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[repeat(5,_fit-content(100%))] relative shrink-0 w-[400px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[295px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[15.996px] py-0 relative size-full">
          <Heading2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[16.38px] items-start relative shrink-0 w-[9.563px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[-0.1504px]">A</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿坝藏族羌族自治州</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿克苏</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿拉尔</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿拉善盟</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿勒泰</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[51.223px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f1e7] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">阿里</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[50.478px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#755609] text-[15px] text-nowrap top-[13.23px] tracking-[-0.2344px]">安康</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fefbf4] h-[344px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15.996px] py-0 relative size-full">
          <Container7 />
          <Container8 />
          <Container9 />
          <Container10 />
          <Container11 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-0 overflow-x-clip overflow-y-auto px-[16px] py-0 top-[143.9px] w-[448px]" data-name="Container">
      <Container4 />
      <Container6 />
      <Text1 />
      <Container14 />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#f5c244] relative rounded-[2.49829e+07px] shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[0.1172px]">#</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">A</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">B</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">C</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">D</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">E</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">F</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">G</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">H</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">J</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">K</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">L</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">M</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">N</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">P</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">Q</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">R</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">S</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">T</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">W</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">X</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">Y</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#755609] text-[10px] text-center text-nowrap tracking-[0.1172px]">Z</p>
      </div>
    </div>
  );
}

function SelectCity1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[455.698px] items-center left-[427px] top-[198px] w-[15.996px]" data-name="SelectCity">
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="定位">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container2 />
      <Container15 />
      <SelectCity1 />
    </div>
  );
}