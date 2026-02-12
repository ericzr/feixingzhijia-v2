import svgPaths from "./svg-xhaw4ubzuv";

function Container() {
  return <div className="absolute bg-gradient-to-b from-[#c99619] h-[207px] left-0 to-[#f5c244] top-0 w-[448px]" data-name="Container" />;
}

function ExamResult() {
  return (
    <div className="absolute bg-[rgba(251,242,219,0.2)] h-[924px] left-0 overflow-clip top-0 w-[448px]" data-name="ExamResult">
      <Container />
    </div>
  );
}

function Container1() {
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

function Container2() {
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
      <Container1 />
      <Container2 />
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
    <button className="absolute content-stretch cursor-pointer flex flex-col h-[28px] items-start left-[8px] pb-0 pt-[3.99px] px-[3.99px] top-[18.13px] w-[36px]" data-name="Button">
      <Icon3 />
    </button>
  );
}

function ExamInterface() {
  return (
    <div className="absolute h-[65px] left-0 top-[40px] w-[448px]" data-name="ExamInterface">
      <Button />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-[191px] not-italic text-[#1d293d] text-[17px] text-nowrap top-[19.13px] tracking-[-0.4316px]">学员评价</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">内蒙古亚斯特科技</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[32.004px] left-0 top-0 w-[50.397px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#c99619] text-[32px] text-nowrap top-[0.02px] tracking-[0.4063px]">4.8</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20.987px] left-[54.39px] top-[12.66px] w-[14.007px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#c99619] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">分</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[33.644px] relative shrink-0 w-[95.628px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[9.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g clipPath="url(#clip0_371_2183)" id="Icon">
          <path d={svgPaths.p312dd300} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
        <defs>
          <clipPath id="clip0_371_2183">
            <rect fill="white" height="9.99323" width="9.99323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[9.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g clipPath="url(#clip0_371_2180)" id="Icon">
          <path d={svgPaths.p3ae71500} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
        <defs>
          <clipPath id="clip0_371_2180">
            <rect fill="white" height="9.99323" width="9.99323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[9.993px] relative shrink-0 w-[95.628px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[1.989px] items-start relative size-full">
        {[...Array(4).keys()].map((_, i) => (
          <Icon4 key={i} />
        ))}
        <Icon5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.99px] h-[47.628px] items-start justify-center pl-0 pr-[0.745px] py-0 relative shrink-0 w-[112.369px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[11.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9947 5.9971">
            <path d={svgPaths.p2b16b7f0} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.49%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-24.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99952 2.99952">
            <path d={svgPaths.p1c043700} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99807 0.999517">
            <path d="M0.499759 0.499759H3.49831" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-24.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99952 2.99952">
            <path d={svgPaths.p1c043700} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[11.994px] top-[2.26px]" data-name="Text">
      <Icon6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[16.508px] left-0 top-[61.98px] w-[59.983px]" data-name="Container">
      <Text2 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[15.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">教学服务</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[11.168px] items-start left-[17.67px] top-[2.23px] w-[9.493px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[9px] tracking-[0.167px]">%</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[12.995px] left-[14.4px] top-[21.49px] w-[27.164px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.51px] tracking-[-0.0762px]">94</p>
      <Text3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-[1.99px] size-[55.992px] top-0" data-name="Container">
      <Text4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[55.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.9924 55.9924">
        <g id="Icon">
          <path d={svgPaths.p30e63780} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="4" />
          <path d={svgPaths.p30e63780} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="138.23 138.23" strokeLinecap="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function CircularItem() {
  return (
    <div className="h-[78.492px] relative shrink-0 w-[59.983px]" data-name="CircularItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Container7 />
        <div className="absolute flex items-center justify-center left-[1.99px] size-[55.992px] top-[1.02px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <Icon7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[11.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_50.32%_33.33%_8.64%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.92144 5.49739">
            <path d={svgPaths.p19cf2330} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_70.83%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999517 3.99807">
            <path d="M0.499759 0.499759V3.49831" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_45.83%_8.33%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-33.32%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999517 2.49952">
            <path d="M0.499759 0.499759V1.99976" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_11.31%_20.83%_48.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-10.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.84016 8.9957">
            <path d={svgPaths.p1c66de00} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[11.994px] top-[2.26px]" data-name="Text">
      <Icon8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[16.508px] left-0 top-[61.98px] w-[59.983px]" data-name="Container">
      <Text5 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[15.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">环境设施</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[11.168px] items-start left-[17.67px] top-[2.23px] w-[9.493px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[9px] tracking-[0.167px]">%</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[12.995px] left-[14.4px] top-[21.49px] w-[27.164px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.51px] tracking-[-0.0762px]">94</p>
      <Text6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-[1.99px] size-[55.992px] top-0" data-name="Container">
      <Text7 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[55.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.9924 55.9924">
        <g id="Icon">
          <path d={svgPaths.p30e63780} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="4" />
          <path d={svgPaths.p30e63780} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="138.23 138.23" strokeLinecap="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function CircularItem1() {
  return (
    <div className="h-[78.492px] relative shrink-0 w-[59.983px]" data-name="CircularItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
        <Container9 />
        <div className="absolute flex items-center justify-center left-[1.99px] size-[55.992px] top-[0.02px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <Icon9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[11.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_41.66%_91.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-24.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99952 0.999517">
            <path d="M0.499759 0.499759H2.49976" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.66%] left-1/2 right-[37.49%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-33.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.49952 2.49952">
            <path d={svgPaths.p20a8af00} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99566 8.99566">
            <path d={svgPaths.p14f7ca70} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[11.994px] top-[2.26px]" data-name="Text">
      <Icon10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[16.508px] left-0 top-[61.98px] w-[59.983px]" data-name="Container">
      <Text8 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[15.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">练机速度</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[11.168px] items-start left-[17.67px] top-[2.23px] w-[9.493px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[9px] tracking-[0.167px]">%</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[12.995px] left-[14.4px] top-[21.49px] w-[27.164px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.51px] tracking-[-0.0762px]">94</p>
      <Text9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[1.99px] size-[55.992px] top-0" data-name="Container">
      <Text10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[55.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.9924 55.9924">
        <g id="Icon">
          <path d={svgPaths.p30e63780} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="4" />
          <path d={svgPaths.p30e63780} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="138.23 138.23" strokeLinecap="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function CircularItem2() {
  return (
    <div className="h-[78.492px] relative shrink-0 w-[59.983px]" data-name="CircularItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Container11 />
        <div className="absolute flex items-center justify-center left-[1.99px] size-[55.992px] top-[0.02px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <Icon11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[78.492px] items-start justify-between pl-[14.123px] pr-[6.154px] py-0 relative shrink-0 w-[224.772px]" data-name="Container">
      <CircularItem />
      <CircularItem1 />
      <CircularItem2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[143px] relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[15.996px] items-start pb-[10px] pt-[14px] px-[15.996px] relative size-full">
          <Heading />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#1d293d] h-[2.99px] rounded-[2.49829e+07px] shrink-0 w-[15.996px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[28.002px]" data-name="Button">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] min-w-full not-italic relative shrink-0 text-[#0f172b] text-[14px] text-center tracking-[-0.1504px] w-[min-content]">全部</p>
      <Container15 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28.002px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">最新</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">好评 127</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">晒图 48</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">差评 7</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">中评 1</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[32px]" data-name="Button">
      <p className="font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center text-nowrap tracking-[-0.1504px]">追评1</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[0.01px] top-[12.01px] w-[424px]" data-name="Container">
      <div className="content-stretch flex items-start justify-between overflow-clip px-[14px] py-0 relative rounded-[inherit] w-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterTag() {
  return (
    <div className="absolute bg-[#fbf2db] h-[29.968px] left-0 rounded-[2.49829e+07px] top-0 w-[80.039px]" data-name="FilterTag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-[11.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[6.48px]">服务好 111</p>
    </div>
  );
}

function FilterTag1() {
  return (
    <div className="absolute bg-[#fbf2db] h-[29.968px] left-[88.03px] rounded-[2.49829e+07px] top-0 w-[96.105px]" data-name="FilterTag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-[11.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[6.48px]">收费透明 106</p>
    </div>
  );
}

function FilterTag2() {
  return (
    <div className="absolute bg-[#fbf2db] h-[29.968px] left-[192.13px] rounded-[2.49829e+07px] top-0 w-[96.105px]" data-name="FilterTag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[18px] left-[11.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[6.48px]">通过率高 106</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[29.968px] left-[16px] top-[53.71px] w-[337.141px]" data-name="Container">
      <FilterTag />
      <FilterTag1 />
      <FilterTag2 />
    </div>
  );
}

function ImageWithFallback() {
  return <div className="h-[39.996px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container18() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[74.978px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] left-0 not-italic text-[#0f172b] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">勤勉的芒果</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_371_2166)" id="Icon">
          <path d="M4.66553 6.66505V14.6631" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <path d={svgPaths.p1e8f1e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_371_2166">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[5.759px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.49px]">1</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[25.745px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Icon12 />
        <Text11 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[22.488px] items-start justify-between left-0 top-0 w-[285.15px]" data-name="Container">
      <Heading1 />
      <Container19 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[36.983px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[37px]">5.0 分</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[65.904px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">2025-08-06</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[43.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">内蒙古区</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[19.486px] items-center left-0 top-[24.48px] w-[285.15px]" data-name="Container">
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[45.464px] left-0 top-[51.96px] w-[285.15px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.98px] tracking-[-0.1504px] w-[280px]">考驾照就去鄂尔多斯市志通驾校找杨建君校长报名，讲解细致，服务周到。</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">服务态度：好</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">学车体验：满意</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">通过率：高</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">规范收费：正规</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[83.913px] items-start left-0 top-[105.41px] w-[285.15px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function ImageWithFallback1() {
  return <div className="h-[111.996px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container28() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[10px] size-[111.996px] top-[201.32px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex h-[24.489px] items-center left-0 px-[8px] py-[4px] rounded-[4px] top-0 w-[59.983px]" data-name="Container">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap tracking-[0.0645px]">车辆整洁</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex h-[24.489px] items-center left-[67.97px] px-[8px] py-[4px] rounded-[4px] top-0 w-[59.983px]" data-name="Container">
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap tracking-[0.0645px]">约课方便</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex h-[24.489px] items-center left-[135.95px] px-[8px] py-[4px] rounded-[4px] top-0 w-[48.977px]" data-name="Container">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap tracking-[0.0645px]">有接送</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex h-[24.489px] items-center left-[192.92px] px-[8px] py-[4px] rounded-[4px] top-0 w-[59.983px]" data-name="Container">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap tracking-[0.0645px]">通过率高</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[44.98px] size-[9.993px] top-[7.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g id="Icon">
          <path d={svgPaths.p52b4540} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[24.489px] left-0 rounded-[4px] top-[32.48px] w-[62.961px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[7.99px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[4.48px] tracking-[0.0645px]">服务好</p>
      <Icon13 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[56.97px] left-0 top-[325.31px] w-[285.15px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[15.636px] left-0 top-[5.21px] w-[56.446px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] top-[-1px] tracking-[-0.0762px] w-[57px]">当天追评:</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[63.822px] left-0 top-[28.06px] w-[281.439px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#1d293d] text-[13px] top-[-2px] tracking-[-0.0762px] w-[282px]">考驾照就去鄂尔多斯市志通驾校找杨建君校长报名，讲解细致，服务周到。金牌教练，全国五强教练</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[72.279px] left-0 top-[394.27px] w-[285.15px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow h-[466.553px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
        <Container21 />
        <Container22 />
        <Container27 />
        <Container28 />
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function ReviewItem() {
  return (
    <div className="content-stretch flex gap-[11.994px] h-[466.553px] items-start relative shrink-0 w-full" data-name="ReviewItem2">
      <Container18 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[44.719px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[169.07px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[25.22px] tracking-[-0.1504px] translate-x-[-50%]">更多评价加载中...</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[535px] items-start left-[16.01px] top-[108.01px] w-[408px]" data-name="Container">
      <ReviewItem />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white h-[722.921px] relative rounded-tl-[14px] rounded-tr-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.994px] h-[885px] items-start left-0 px-[11.994px] py-0 top-[112px] w-[448px]" data-name="Container">
      <Container14 />
      <Container39 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="学员评价">
      <ExamResult />
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <ExamInterface />
      <Container40 />
    </div>
  );
}