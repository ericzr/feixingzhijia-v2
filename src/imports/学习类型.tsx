import svgPaths from "./svg-2o17vepu8o";

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

function Heading() {
  return (
    <div className="absolute h-[31.992px] left-[16px] top-[60px] w-[361.129px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d293d] text-[24px] text-nowrap top-[-0.51px] tracking-[0.0703px]">选择考试类型</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">无人机机型</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[3.99px] size-[11.994px] top-[3.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p30bd2900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#f5c244] left-[180px] rounded-bl-[10px] rounded-tr-[10px] size-[19.975px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[19.986px] left-[58px] top-[84px] w-[83.994px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[#c99619] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">多旋翼无人机</p>
    </div>
  );
}

function Objects() {
  return (
    <div className="absolute h-[32px] left-[47px] top-[36px] w-[107px]" data-name="Objects">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 32">
        <g clipPath="url(#clip0_11_1810)" id="Objects">
          <path d={svgPaths.p181b8e00} fill="var(--fill-0, #C99619)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_11_1810">
            <rect fill="white" height="32" width="107" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[128px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f5c244] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Container2 />
      <Text />
      <Objects />
    </div>
  );
}

function Objects1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[63px]" data-name="Objects">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 48">
        <g clipPath="url(#clip0_11_1816)" id="Objects">
          <path d={svgPaths.p23721080} fill="var(--fill-0, #F5DB9B)" id="Vector" />
          <path d={svgPaths.p9707000} fill="var(--fill-0, #F5DB9B)" id="Vector_2" />
          <path d={svgPaths.p1df1e380} fill="var(--fill-0, #F5DB9B)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_11_1816">
            <rect fill="white" height="48" width="63" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[83.994px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">固定翼无人机</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col gap-[14px] h-[128px] items-center justify-center p-[0.745px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Objects1 />
      <Text1 />
    </div>
  );
}

function Objects2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[107px]" data-name="Objects">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 22">
        <g clipPath="url(#clip0_11_1803)" id="Objects">
          <path d={svgPaths.p3ab7b400} fill="var(--fill-0, #F5DB9B)" id="Vector" />
          <path d={svgPaths.p33ae4a00} fill="var(--fill-0, #F5DB9B)" id="Vector_2" />
          <path d={svgPaths.p2a3ade00} fill="var(--fill-0, #F5DB9B)" id="Vector_3" />
          <path d={svgPaths.p17f7ca00} fill="var(--fill-0, #F5DB9B)" id="Vector_4" />
          <path d={svgPaths.p389bf600} fill="var(--fill-0, #F5DB9B)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_11_1803">
            <rect fill="white" height="22" width="107" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[97.99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[49px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">垂直起降无人机</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:2_/_1] bg-white content-stretch flex flex-col gap-[14px] h-[128px] items-center justify-center p-[0.745px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Objects2 />
      <Text2 />
    </div>
  );
}

function Objects3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[70px]" data-name="Objects">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 48">
        <g clipPath="url(#clip0_11_1798)" id="Objects">
          <path d={svgPaths.p224cd900} fill="var(--fill-0, #F5DB9B)" id="Vector" />
          <path d={svgPaths.p3fc62800} fill="var(--fill-0, #F5DB9B)" id="Vector_2" />
          <path d={svgPaths.p1827d300} fill="var(--fill-0, #F5DB9B)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_11_1798">
            <rect fill="white" height="48" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[69.988px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">无人直升机</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:2_/_2] bg-white content-stretch flex flex-col gap-[14px] h-[128px] items-center justify-center p-[0.745px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Objects3 />
      <Text3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(2,_fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col h-[308px] items-center justify-between relative shrink-0 w-[416px]" data-name="Section">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">执照类型</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[83.994px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">视距内驾驶员</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex h-[61px] items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[83.994px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-[42px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">超视距驾驶员</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex h-[61px] items-center justify-center p-[0.745px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[19.986px] left-[65px] top-[20px] w-[69.988px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[#c99619] text-[14px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">无人机教员</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[11.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.37%_-13.64%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.49541 6.99662">
            <path d={svgPaths.p7323000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#f5c244] content-stretch flex flex-col items-start left-[180px] pb-0 pt-[3.99px] px-[3.99px] rounded-bl-[10px] rounded-tr-[10px] size-[19.975px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Button6() {
  return (
    <div className="[grid-area:2_/_1] bg-white h-[60px] relative rounded-[14px] shrink-0 w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f5c244] border-[0.74px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]" />
      <Text6 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[16px] grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] inline-grid relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[173.433px] items-center relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[821px] items-center left-0 overflow-clip pb-0 pt-[20px] px-[15.996px] top-[103px] w-[448px]" data-name="Container">
      <Section />
      <Section1 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#c99619] content-stretch flex items-center justify-center px-[157px] py-[13px] relative rounded-[2.49829e+07px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-[380px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px]">完成</p>
    </div>
  );
}

function SelectExamType() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(249,250,251,0)] h-[100px] items-center left-0 pb-0 pt-[23.988px] px-[23.988px] to-[rgba(0,0,0,0)] top-[824px] w-[448px]" data-name="SelectExamType">
      <Button7 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="学习类型">
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <Heading />
      <Container6 />
      <SelectExamType />
    </div>
  );
}