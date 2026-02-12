import React from "react";
import svgPaths from "./SimplifiedPracticeSvgs";

function Heading1() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-[-0.51px] tracking-[-0.4492px]">开通VIP会员</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[15.636px] items-start left-[52px] top-[1.49px] w-[52.002px]" data-name="Text">
      <p className="font-bold leading-[19.5px] not-italic relative shrink-0 text-[#b45309] text-[13px] text-nowrap tracking-[-0.0762px]">考前密卷</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">立即解锁</p>
      <Text11 />
      <p className="absolute font-normal leading-[19.5px] left-[104px] not-italic text-[#6a7282] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">及更多权益</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[51.467px] relative shrink-0 w-[169.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon5() {
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

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[31.969px] cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[3.99px] px-[3.99px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container14({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex h-[79px] items-start justify-between pb-0 pt-[19.998px] px-[19.998px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Button3 onClick={onClose} />
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

function Text12() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[83.378px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-bold leading-[28px] left-0 not-italic text-[#92400e] text-[18px] text-nowrap top-[-0.02px] tracking-[-0.4395px]">高效学VIP</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.992px] items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <StarIcon />
          <Text12 />
          <StarIcon />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] h-[0.989px] shrink-0 to-[#d97706] w-[47.988px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[87.985px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[16.5px] left-0 not-italic text-[#b45309] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">畅享以下付费权益</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16.508px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.992px] items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <Container16 />
          <Text13 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
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

function Container18() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">精简题库</p>
      </div>
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container18 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Container19() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">真实考场</p>
      </div>
    </div>
  );
}

function BenefitItem1() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container19 />
        <Text15 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Container20() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">懒人听题</p>
      </div>
    </div>
  );
}

function BenefitItem2() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container20 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Container21() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">速记口诀</p>
      </div>
    </div>
  );
}

function BenefitItem3() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container21 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Container22() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[2.49829e+07px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] text-nowrap top-[0.34px] tracking-[0.1172px]">考前密卷</p>
      </div>
    </div>
  );
}

function BenefitItem4() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container22 />
        <Text18 />
      </div>
    </div>
  );
}

function Container23() {
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

function Container24() {
  return (
    <div className="bg-[#fffbf0] h-[197px] relative rounded-[14px] shrink-0 w-[calc(100%-32px)] max-w-[416px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[23.988px] items-start overflow-clip pb-[0.745px] pt-[20.743px] px-[20.743px] relative rounded-[inherit] size-full">
        <Container15 />
        <Container17 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(253,230,138,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[8.667px]" data-name="Text">
      <p className="absolute font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.49px] tracking-[-0.1504px]">¥</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex h-[35.994px] items-start relative shrink-0 w-[36.855px]" data-name="Text">
      <p className="font-medium leading-[36px] not-italic relative shrink-0 text-[30px] text-nowrap text-white tracking-[-0.3545px]">60</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[35.122px]" data-name="Text">
      <p className="absolute font-light leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.74px]">/6个月</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <Text19 />
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-gradient-to-b from-[#ffdc98] h-[46.476px] relative rounded-[2.49829e+07px] shadow-[0px_2px_8px_0px_rgba(255,196,83,0.3)] shrink-0 to-[#ffc453] w-[152.947px] cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-bold leading-[22.5px] left-[75.99px] not-italic text-[#4a3208] text-[15px] text-center text-nowrap top-[11.23px] tracking-[-0.2344px] translate-x-[-50%]">确认协议并开通</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#2d241f] h-[58.459px] relative rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[23.988px] pr-[5.991px] py-0 relative size-full">
          <Container25 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[129.09px] top-[1.49px] w-[80.004px]" data-name="Text">
      <p className="font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员服务协议》</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[224.96px] top-[1.49px] w-[80.004px]" data-name="Text">
      <p className="font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员购买须知》</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-full flex items-center justify-center gap-1" data-name="Paragraph">
      <p className="font-normal leading-[15px] not-italic text-[#99a1af] text-[10px] text-center text-nowrap tracking-[0.1172px]">开通即表示同意</p>
      <p className="font-normal leading-[15px] not-italic text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员服务协议》</p>
      <p className="font-normal leading-[15px] not-italic text-[#99a1af] text-[10px] text-center text-nowrap tracking-[0.1172px]">和</p>
      <p className="font-normal leading-[15px] not-italic text-[10px] text-[rgba(217,119,6,0.8)] text-center text-nowrap tracking-[0.1172px]">《会员购买须知》</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[11.994px] h-[85px] items-start px-[15.996px] py-0 relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Paragraph1 />
    </div>
  );
}

export function VIPUpgradeModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.6)] flex flex-col justify-end">
      <div 
        className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] w-full animate-in slide-in-from-bottom duration-300" 
        data-name="Container"
      >
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full pb-[20px]">
          <Container14 onClose={onClose} />
          <Container24 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}
