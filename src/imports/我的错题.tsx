import svgPaths from "./svg-t31ol1fo6j";

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
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[48px] px-[116px] py-0 top-[12px] w-[359px]" data-name="Heading 1">
      <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center text-nowrap tracking-[-0.4395px]">我的错题</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.16%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.16%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3321 14.9986">
            <path d={svgPaths.p2f1ecd80} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6651 1.66651">
            <path d="M0.833254 0.833254H15.8318" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33317 4.99984">
            <path d={svgPaths.p266fb980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
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

function Container2() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">今日错题</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.74px]">新增0题</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[42.463px] relative shrink-0 w-[59.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g clipPath="url(#clip0_293_1425)" id="Icon">
          <path d={svgPaths.p33d61b00} id="Vector" stroke="var(--stroke-0, #C99619)" strokeWidth="1.66651" />
          <path d={svgPaths.p17fb81b0} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeWidth="1.66651" />
          <path d={svgPaths.p3028c500} id="Vector_3" stroke="var(--stroke-0, #C99619)" strokeWidth="1.66651" />
        </g>
        <defs>
          <clipPath id="clip0_293_1425">
            <rect fill="white" height="19.9981" width="19.9981" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex h-[74px] items-center justify-between px-[15.996px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[200px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">全部错题</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.74px]">共0题</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[42.463px] relative shrink-0 w-[59.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[11.913px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[10px] not-italic relative shrink-0 text-[10px] text-nowrap text-white tracking-[0.1172px]">ALL</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[23.988px] relative rounded-[4px] shrink-0 w-[23.558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8.19px] px-[1.989px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex h-[74px] items-center justify-between px-[15.996px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[200px]" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container12 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[59.983px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[22.5px] left-0 not-italic text-[#1d293d] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">移除设置</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[91.009px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_KR:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">答对不自动移除</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[110.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Text2 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[54.48px] relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.996px] py-0 relative size-full">
          <Text1 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[23.988px] left-0 top-0 w-[63.973px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">错题详情</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p31ececc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <path d={svgPaths.p19e3ee80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[15.985px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.74px]">登录后同步错题记录</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[15.985px] items-center left-[71.97px] top-[3.89px] w-[123.944px]" data-name="Container">
      <Icon7 />
      <Text3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[195.909px]" data-name="Container">
      <Heading1 />
      <Container16 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fbf2db] h-[27.967px] relative rounded-[2.49829e+07px] shrink-0 w-[107.959px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-[53.99px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[6.74px] translate-x-[-50%]">按答错次数分类</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Button2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">1</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[84.018px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">答错5次以上</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[116.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Container19 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[21.127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[22px]">0题</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[45.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Text5 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">2</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[54.41px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">答错4次</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[86.402px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Container23 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[21.127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[22px]">0题</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[45.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Text7 />
        <Icon9 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">3</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[54.154px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">答错3次</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[86.147px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Container27 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[21.127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[22px]">0题</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[45.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Text9 />
        <Icon10 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">4</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[53.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">答错2次</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[85.798px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Container31 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[21.127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[22px]">0题</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[45.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Text11 />
        <Icon11 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#c99619] relative rounded-[2.49829e+07px] shrink-0 size-[19.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">5</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[51.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#314158] text-[15px] text-nowrap top-[-0.77px] tracking-[-0.2344px]">答错1次</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[83.704px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Container35 />
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[21.127px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] top-[0.49px] tracking-[-0.0762px] w-[22px]">0题</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g id="Icon">
          <path d={svgPaths.p5fe1780} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[45.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Text13 />
        <Icon12 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[23.988px] h-[208.392px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container26 />
      <Container30 />
      <Container34 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[399.997px] relative rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[23.988px] items-start pb-0 pt-[15.996px] px-[15.996px] relative size-full">
          <Container18 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function WrongQuestions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[802px] items-start left-0 px-[15.996px] py-0 top-[122px] w-[448px]" data-name="WrongQuestions">
      <Container13 />
      <Container15 />
      <Container40 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="我的错题" style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <SelectCity />
      <WrongQuestions />
    </div>
  );
}