import svgPaths from "./svg-944xmjgtm7";

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
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-[351px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">每日一练</p>
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
    <div className="relative shrink-0 size-[43.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.9981 43.9981">
        <g id="Icon">
          <path d={svgPaths.p2875b380} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74988" />
          <path d={svgPaths.p40e1300} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74988" />
          <path d={svgPaths.p3e2e1680} id="Vector_3" stroke="var(--stroke-0, #FBF2DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74988" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#fbf2db] content-stretch flex items-center justify-center relative rounded-[2.49829e+07px] shrink-0 size-[79.992px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[100.002px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1d293d] text-[20px] text-nowrap top-[-0.51px] tracking-[-0.4492px]">无人机学员</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[208.008px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#99a1af] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">坚持每天练题，快速通过考试不费劲</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[39.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d293d] text-[24px] text-nowrap top-[-0.51px] tracking-[0.0703px]">0天</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[41.997px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">已坚持</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[55.969px] relative shrink-0 w-[41.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[51.665px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1d293d] text-[24px] text-nowrap top-[-0.51px] tracking-[0.0703px]">10题</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[55.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">今日题目</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[55.969px] relative shrink-0 w-[55.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[55.969px] items-start justify-between px-[31.992px] py-0 relative shrink-0 w-[313.152px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[179.983px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[26.67%_80%_46.67%_5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[53.33%_5%_26.67%_80%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[49.76%_16.67%_46.9%_80.83%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39921 8.39921">
            <g id="Vector">
              <path d={svgPaths.pa451b80} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3847dee0} stroke="var(--stroke-0, #FBF2DB)" strokeLinecap="round" strokeWidth="2.39977" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.33%_20%_20%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.989 47.9955">
          <path d={svgPaths.p1ce59700} fill="var(--fill-0, #FBF2DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_45%_16.67%_30%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9943 29.9972">
          <path d={svgPaths.p15aa7a00} fill="var(--fill-0, #F5DB9B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_20%_16.67%_55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9943 29.9972">
          <path d={svgPaths.p387f7300} fill="var(--fill-0, #C99619)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[46.67%] left-1/4 right-[65%] top-[33.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9977 35.9966">
          <path d={svgPaths.p291c4f00} fill="var(--fill-0, #FBF2DB)" id="Vector" opacity="0.8" />
        </svg>
      </div>
      <div className="absolute inset-[38.67%_67.5%_61.33%_27.5%]" data-name="Vector">
        <div className="absolute inset-[-1.2px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9989 2.39977">
            <path d="M0 1.19989H11.9989" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.39977" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.67%_67.5%_57.33%_27.5%]" data-name="Vector">
        <div className="absolute inset-[-1.2px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9989 2.39977">
            <path d="M0 1.19989H11.9989" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.39977" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[70%] right-[20%] top-[26.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9977 41.996">
          <path d={svgPaths.p133d6ea8} fill="var(--fill-0, #FBF2DB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[35.32%_20.84%_57.17%_71.25%] items-center justify-center">
        <div className="flex-none h-[12px] rotate-[5deg] w-[18px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative text-[#c99619] text-[9.599px] text-nowrap">100</p>
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[45%] right-1/2 top-[70%]" data-name="Vector">
        <div className="absolute inset-[-10%_-36.06%_-10%_-30%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9252 43.1967">
            <path d={svgPaths.p1df72280} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="7.19932" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70%_42.5%_13.33%_47.5%]" data-name="Vector">
        <div className="absolute inset-[-12%_-15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.1984 37.1978">
            <path d={svgPaths.p1f837a80} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="7.19932" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.33%_47.5%_26.67%_42.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9977 35.9966">
          <path d={svgPaths.p3d3a7000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[26.67%] left-[42.5%] right-1/2 top-[70%]" data-name="Vector">
        <div className="absolute inset-[-9.49%_-1.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3777 7.13774">
            <g id="Vector">
              <path d={svgPaths.p25013b40} fill="var(--fill-0, black)" />
              <path d={svgPaths.p37ddaec0} stroke="var(--stroke-0, #E2E8F0)" strokeWidth="1.19989" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.67%_45%_44.67%_47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1982 19.1982">
          <path d={svgPaths.p18457e00} fill="var(--fill-0, #FDBA74)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.33%_46%_50.67%_49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9989 5.39949">
          <path d={svgPaths.p37f2e800} fill="var(--fill-0, #5C3A21)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[36.67%] left-1/2 right-[40%] top-[56.67%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%_-35.36%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9972 19.2408">
            <path d={svgPaths.p17f34e80} id="Vector" stroke="var(--stroke-0, #FDBA74)" strokeLinecap="round" strokeWidth="5.99943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[179.983px] items-start relative shrink-0 w-[239.989px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[416px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[28px] items-center px-[24px] py-[32px] relative w-full">
        <Container2 />
        <Heading1 />
        <Paragraph />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c99619] relative rounded-[14px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] shrink-0 w-[416px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[148px] py-[13px] relative w-full">
        <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[25.5px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.4316px]">开始练习</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_286_494)" id="Icon">
          <path d={svgPaths.p2d1f6ce0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d={svgPaths.p1fe51480} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_286_494">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[130.005px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-[65px] not-italic text-[#99a1af] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">设置每日一练题目数量</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[151.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.991px] items-center relative size-full">
        <Icon6 />
        <Text4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[39.996px] h-[828px] items-center left-0 pb-[47.989px] pt-[15.996px] px-0 top-[96px] w-[448px]" data-name="Container">
      <Container7 />
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="每日一练" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <Container8 />
    </div>
  );
}