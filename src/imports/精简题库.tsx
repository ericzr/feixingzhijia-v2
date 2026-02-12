import svgPaths from "./svg-jrgbm06t93";

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
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">精简题库</p>
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
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-6.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0817 18.7448">
            <path d={svgPaths.p279ad3f0} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.75%] right-[13.75%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-25%_-7.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5821 6.24958">
            <path d={svgPaths.p3b956b00} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-12.5%_-1.04px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.08314 10.4165">
            <path d="M1.04157 9.3749V1.04157" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08314" />
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
    <div className="h-[23.988px] relative shrink-0 w-[111.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#314158] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">预测考试通过率</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[7.992px] h-[23.988px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[59.994px] relative shrink-0 w-[36.145px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#c99619] text-[60px] text-nowrap top-[0.04px] tracking-[-1.2363px]">0</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[20.673px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#c99619] text-[24px] text-nowrap top-[0.02px] tracking-[0.0703px]">%</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[130px] py-0 relative w-full">
          <Text1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[163.963px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[23.988px] items-start pb-0 pt-[19.998px] px-[19.998px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-[67.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#1d293d] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">学习数据</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fbf2db] h-[27.967px] relative rounded-[2.49829e+07px] shrink-0 w-[71.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[16px] left-[35.99px] not-italic text-[#755609] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">清空记录</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[27.967px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[53.6px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[0.0703px] translate-x-[-50%]">500</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[53.52px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">未做题</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[7.992px] h-[55.969px] items-center justify-center relative shrink-0 w-[107.04px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16.38px] items-start left-[55.42px] top-[7.08px] w-[13.32px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d293d] text-[14px] text-center tracking-[-0.1504px]">%</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[107.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[46.3px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[0.0703px] translate-x-[-50%]">0</p>
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

function Container8() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[7.992px] h-[55.969px] items-center justify-center relative shrink-0 w-[107.04px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[105.551px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-[53.21px] not-italic text-[#1d293d] text-[24px] text-center text-nowrap top-[-0.51px] tracking-[0.0703px] translate-x-[-50%]">0</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[105.551px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-[52.77px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%]">错题数</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[7.992px] h-[55.969px] items-center justify-center px-[0.745px] py-0 relative shrink-0 w-[107.04px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] h-[55.969px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[155.925px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[31.992px] items-start pb-0 pt-[19.998px] px-[19.998px] relative size-full">
          <Container6 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[332px] items-start left-0 px-[15.996px] py-0 top-[112px] w-[448px]" data-name="Container">
      <Container5 />
      <Container11 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#c99619] content-stretch flex items-center justify-center px-[157px] py-[13px] relative rounded-[2.49829e+07px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-[380px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">开始练习</p>
    </div>
  );
}

function SelectExamType() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(249,250,251,0)] h-[100px] items-center left-0 pb-0 pt-[23.988px] px-[23.988px] to-[rgba(0,0,0,0)] top-[824px] w-[448px]" data-name="SelectExamType">
      <Button2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="精简题库" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container12 />
      <SelectExamType />
    </div>
  );
}