import svgPaths from "./svg-9pmy0ni1uj";

function Heading() {
  return (
    <div className="absolute h-[28px] left-0 top-[0.09px] w-[367px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-0 tracking-[-0.4395px] w-[367px]">为了航校更好的服务您，请填写考证需求</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[23.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p3c506100} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9932 13.9932">
            <path d={svgPaths.p1202b780} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[367px] pb-0 pt-[3.99px] px-[3.99px] size-[31.969px] top-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[56px] left-[20px] top-[19.91px] w-[399px]" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.996px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">您的称呼</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[53.991px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] text-nowrap top-[-0.02px] tracking-[-0.4395px]">张润泽</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[27.99px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.988px] items-center relative size-full">
        <Label />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3316 18.3316">
            <path d={svgPaths.p1667c900} fill="var(--fill-0, #D1D5DC)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66603 6.66603">
            <g id="Vector">
              <path d={svgPaths.p3b45e400} fill="var(--fill-0, #D1D5DC)" />
              <path d={svgPaths.p30e90a00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66603 6.66603">
            <g id="Vector">
              <path d={svgPaths.p13cd1d00} fill="var(--fill-0, #D1D5DC)" />
              <path d={svgPaths.p22115880} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[44.731px] items-center justify-between pb-[0.745px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Button1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.996px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">手机号</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[99.316px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] text-nowrap top-[-0.02px] tracking-[-0.4395px]">175*****447</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[27.99px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.988px] items-center relative size-full">
        <Label1 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3316 18.3316">
            <path d={svgPaths.p1667c900} fill="var(--fill-0, #D1D5DC)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66603 6.66603">
            <g id="Vector">
              <path d={svgPaths.p3b45e400} fill="var(--fill-0, #D1D5DC)" />
              <path d={svgPaths.p30e90a00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66603 6.66603">
            <g id="Vector">
              <path d={svgPaths.p13cd1d00} fill="var(--fill-0, #D1D5DC)" />
              <path d={svgPaths.p22115880} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[19.986px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">使用本机号码</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[111.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Button2 />
        <Text2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[44.731px] items-center justify-between pb-[0.745px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.996px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">飞行地址</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[245.143px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.77px] tracking-[-0.3125px] w-[249px]">鄂尔多斯-大磊·馨视界 - 内蒙古自...</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[23.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.988px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Label2 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p193414e0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[40.729px] items-center justify-between pb-[0.745px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Icon3 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.996px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">执照用途</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[86.402px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">飞行运输作业</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[23.988px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.988px] items-center relative size-full">
        <Label3 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p193414e0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[40.729px] items-center justify-between pb-[0.745px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />
      <Container8 />
      <Icon4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[243px] items-start left-[20px] top-[99.91px] w-[399px]" data-name="Container">
      <Container2 />
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_1081_2810)" id="Icon">
          <path d={svgPaths.p15117300} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          <path d={svgPaths.p31766200} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
        <defs>
          <clipPath id="clip0_1081_2810">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[15.985px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[0.74px]">无强行推销</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[79.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.991px] items-center relative size-full">
        <Icon5 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_1081_2801)" id="Icon">
          <path d={svgPaths.pd324d00} id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          <path d={svgPaths.p20693040} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
        <defs>
          <clipPath id="clip0_1081_2801">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[71.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-[0.74px]">不泄漏手机号</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[91.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.991px] items-center relative size-full">
        <Icon6 />
        <Text6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[23.988px] h-[16px] items-center left-[20px] top-[358.91px] w-[399px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[15.996px] relative rounded-[4px] shrink-0 w-[15.252px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[14.146px] items-start left-[24px] top-[0.14px] w-[71.977px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#c99619] text-[12px] text-nowrap">《隐私政策》</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[14.146px] items-start left-[95.98px] top-[0.14px] w-[113.951px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#c99619] text-[12px] text-nowrap">《个人信息保护声明》</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[18px] left-[215.76px] top-[2.09px] w-[160px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c99619] text-[12px] top-[-2px] w-[324px]">《中国联通认证服务条款》</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[39.996px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#90a1b9] text-[12px] text-nowrap top-[0.23px]">同意</p>
        <Text7 />
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[40px] items-start left-[20px] top-[398.91px] w-[399px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#c99619] h-[52px] left-[20px] rounded-[2.49829e+07px] top-[471.04px] w-[399px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[28px] left-[199px] not-italic text-[18px] text-center text-nowrap text-white top-[11.97px] tracking-[-0.4395px] translate-x-[-50%]">提交</p>
    </div>
  );
}

export default function ConsultForm() {
  return (
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="ConsultForm">
      <Container />
      <Container10 />
      <Container13 />
      <Container16 />
      <Button3 />
    </div>
  );
}