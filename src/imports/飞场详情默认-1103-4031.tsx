import svgPaths from "./svg-3rbfndvlks";
import imgContainer from "figma:asset/01e2e1b36c7a5bdd716f3f0686228588634a8ffc.png";
import imgContainer1 from "figma:asset/164619794ffbf2f839de387dce542601577a2add.png";
import imgContainer2 from "figma:asset/317c537af86a8cc05f64b937e22202cec91b2175.png";
import imgContainer3 from "figma:asset/463ff96875b1b73f521112918ccfa0e92f173e68.png";
import imgContainer4 from "figma:asset/8ffb7e8035fd9567e0abaf6e6e2447d5e8322953.png";
import imgImageWithFallback from "figma:asset/bc04c8b86436de60e37006373742bcf2441b3e32.png";
import imgFaceBlowingAKiss1 from "figma:asset/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png";

function ImageWithFallback() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[79.992px] overflow-clip relative rounded-[10px] shrink-0 w-[111.996px]" data-name="Container">
      <ImageWithFallback />
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[112px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.77px] tracking-[-0.3125px] translate-x-[-50%]">大疆 Mavic</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-0.33px)] not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">小型固定翼/多旋翼</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center justify-center relative size-full">
        <Heading2 />
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-between pb-0 pt-[1.989px] px-0 relative shrink-0 w-[119px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function ClassCard() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[12px] h-[157px] items-center justify-center px-0 py-[11px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="ClassCard">
      <Container1 />
      <Container3 />
    </div>
  );
}

function ImageWithFallback1() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container4() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[79.992px] overflow-clip relative rounded-[10px] shrink-0 w-[111.996px]" data-name="Container">
      <ImageWithFallback1 />
      <Container4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[112px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.77px] tracking-[-0.3125px] translate-x-[-50%]">科比特 系列</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">小型固定翼</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center justify-center relative size-full">
        <Heading3 />
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-between pb-0 pt-[1.989px] px-0 relative shrink-0 w-[119px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function ClassCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col gap-[12px] h-[157px] items-center justify-center px-0 py-[11px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="ClassCard">
      <Container5 />
      <Container7 />
    </div>
  );
}

function ImageWithFallback2() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container8() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer2} />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[79.992px] overflow-clip relative rounded-[10px] shrink-0 w-[111.996px]" data-name="Container">
      <ImageWithFallback2 />
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[22px] relative shrink-0 w-[112px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.77px] tracking-[-0.3125px] translate-x-[-50%]">大疆经纬 M30T</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">行业应用固定翼</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center justify-center relative size-full">
        <Heading4 />
        <Text2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-between pb-0 pt-[1.989px] px-0 relative shrink-0 w-[119px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function ClassCard2() {
  return (
    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col gap-[12px] h-[157px] items-center justify-center px-0 py-[11px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="ClassCard">
      <Container9 />
      <Container11 />
    </div>
  );
}

function ImageWithFallback3() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container12() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer3} />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[79.992px] overflow-clip relative rounded-[10px] shrink-0 w-[111.996px]" data-name="Container">
      <ImageWithFallback3 />
      <Container12 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[112px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.77px] tracking-[-0.3125px] translate-x-[-50%]">纵横 CW-25/40</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">垂直起降固定翼</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center justify-center relative size-full">
        <Heading5 />
        <Text3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-between pb-0 pt-[1.989px] px-0 relative shrink-0 w-[119px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function ClassCard3() {
  return (
    <div className="[grid-area:2_/_1] bg-white content-stretch flex flex-col gap-[12px] h-[157px] items-center justify-center px-0 py-[11px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="ClassCard">
      <Container13 />
      <Container15 />
    </div>
  );
}

function ImageWithFallback4() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container16() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer4} />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[79.992px] overflow-clip relative rounded-[10px] shrink-0 w-[111.996px]" data-name="Container">
      <ImageWithFallback4 />
      <Container16 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[112px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-1/2 not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-0.77px] tracking-[-0.3125px] translate-x-[-50%]">科比特系列</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#45556c] text-[12px] text-center text-nowrap top-[0.49px] tracking-[-0.1504px] translate-x-[-50%]">垂直起降固定翼</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-center justify-center relative size-full">
        <Heading6 />
        <Text4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-between pb-0 pt-[1.989px] px-0 relative shrink-0 w-[119px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function ClassCard4() {
  return (
    <div className="[grid-area:2_/_2] bg-white content-stretch flex flex-col gap-[12px] h-[157px] items-center justify-center px-0 py-[11px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="ClassCard">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute gap-[11.994186401367188px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[337.335px] left-0 px-[15.996px] py-0 top-[672px] w-[448px]" data-name="Container">
      <ClassCard />
      <ClassCard1 />
      <ClassCard2 />
      <ClassCard3 />
      <ClassCard4 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[46.476px] relative shrink-0 w-[61.984px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22.5px] left-[31px] not-italic text-[#99a1af] text-[15px] text-center text-nowrap top-[11.23px] tracking-[-0.2344px] translate-x-[-50%]">班型</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[46.476px] relative shrink-0 w-[61.984px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[22.5px] left-[31px] not-italic text-[#99a1af] text-[15px] text-center text-nowrap top-[11.23px] tracking-[-0.2344px] translate-x-[-50%]">场地</p>
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#c99619] h-[3.99px] left-[22.99px] rounded-[2.49829e+07px] top-[36.49px] w-[15.996px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="h-[46.476px] relative shrink-0 w-[61.984px]" data-name="Button">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] left-[31px] not-italic text-[#1d293d] text-[15px] text-center text-nowrap top-[11.23px] tracking-[-0.2344px] translate-x-[-50%]">机型</p>
      <Container21 />
    </div>
  );
}

function SchoolProfile() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[59px] py-0 top-[616px] w-[448px]" data-name="SchoolProfile">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[301px] left-0 top-[-45px] w-[448px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p7100a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d="M15.8318 9.99905H4.16627" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <button className="bg-[rgba(0,0,0,0.2)] cursor-pointer relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon />
      </div>
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g clipPath="url(#clip0_1074_2659)" id="Icon">
          <path d={svgPaths.p279013f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2659">
            <rect fill="white" height="19.9981" width="19.9981" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g clipPath="url(#clip0_1074_2647)" id="Icon">
          <path d="M9.99905 1.66651V12.4988" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p34ac9700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p2292fba0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2647">
            <rect fill="white" height="19.9981" width="19.9981" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d={svgPaths.p2b2d380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p35abb300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p3b0ef580} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[131.971px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[68px] items-center justify-between left-0 px-[15.996px] py-0 top-0 w-[448px]" data-name="Container">
      <Button3 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[256px] left-0 top-[45px] w-[448px]" data-name="Container">
      <ImageWithFallback5 />
      <Container23 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[99px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] text-nowrap top-[-0.51px] tracking-[-0.4492px]">亚斯特科技</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="认证">
      <div className="absolute inset-[0_0_-0.04%_-0.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.071 16.0068">
          <g id="è®¤è¯">
            <rect fill="var(--fill-0, #F5C244)" height="16" id="Rectangle 7" rx="5" width="16" y="0.00683594" />
            <path d={svgPaths.p16f59a80} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_1074_2643)" id="Icon">
          <path d={svgPaths.p2c9df200} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <g id="Vector_2">
            <path d="M3.7494 15.7475H14.2477Z" fill="var(--fill-0, #C99619)" />
            <path d="M3.7494 15.7475H14.2477" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1074_2643">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#fbf2db] h-[18.986px] relative rounded-[2px] shrink-0 w-[24.14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[3.99px] not-italic text-[#c99619] text-[10px] text-nowrap top-[2.48px] tracking-[0.1172px]">2年</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[18.986px] relative shrink-0 w-[66.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Component />
        <Icon4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[27.99px] items-center left-0 top-0 w-[321.133px]" data-name="Container">
      <Heading />
      <Container25 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_1074_2617)" id="Icon">
          <path d={svgPaths.p1f5d4f00} fill="var(--fill-0, #52C41A)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <g id="Vector_2">
            <path d={svgPaths.p39df8600} fill="var(--fill-0, #52C41A)" />
            <path d={svgPaths.p39df8600} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1074_2617">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[15.985px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#52c41a] text-[12px] text-nowrap top-[0.74px]">民航培训资质</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[87.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Icon5 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_1074_2617)" id="Icon">
          <path d={svgPaths.p1f5d4f00} fill="var(--fill-0, #52C41A)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <g id="Vector_2">
            <path d={svgPaths.p39df8600} fill="var(--fill-0, #52C41A)" />
            <path d={svgPaths.p39df8600} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1074_2617">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[71.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#52c41a] text-[12px] text-nowrap top-[0.74px]">大黄蜂优质商家认证</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[87.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Icon6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[11.994px] h-[16px] items-center left-0 top-[36px] w-[376px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#fff7e6] h-[20.487px] left-0 rounded-[2px] top-0 w-[95.453px]" data-name="Text">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16.5px] left-[5.99px] not-italic text-[#fa8c16] text-[11px] text-nowrap top-[2.48px] tracking-[0.0645px]">{`综合排行第2名 >`}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#fbf2db] h-[20.487px] left-[103.45px] rounded-[2px] top-0 w-[44.975px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[5.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[2.48px] tracking-[0.0645px]">有接送</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fbf2db] h-[20.487px] left-[156.41px] rounded-[2px] top-0 w-[55.981px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[5.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[2.48px] tracking-[0.0645px]">约课方便</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#fbf2db] h-[20.487px] left-[220.39px] rounded-[2px] top-0 w-[55.981px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[5.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[2.48px] tracking-[0.0645px]">收费透明</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[376px]" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[31.992px] left-0 top-0 w-[37.693px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#fa8c16] text-[24px] text-nowrap top-[-0.51px] tracking-[0.0703px]">4.8</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[15.985px] left-[39.68px] top-[11.91px] w-[12.006px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#fa8c16] text-[12px] text-nowrap top-[0.74px]">分</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">{`134人评价>`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[69px]">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_1074_2611)" id="Icon">
          <path d={svgPaths.p11369000} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2611">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(250,140,22,0.1)] relative rounded-[2.49829e+07px] shrink-0 size-[31.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[30.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.49px] tracking-[0.1172px]">去评价</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[3.99px] h-[50.99px] items-center relative shrink-0 w-[31.992px]" data-name="Container">
      <Container33 />
      <Text14 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0 w-[142px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[65px] left-[0.01px] overflow-clip top-0 w-[217px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[17.875px] left-0 not-italic text-[#6a7282] text-[13px] top-[-0.26px] tracking-[-0.0762px] w-[170px]">内蒙古自治区鄂尔多斯市东胜区交通街道伊化北路祥...</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[16.508px] left-0 top-[39.71px] w-[217.152px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">距您3.3 km | 乘车18分钟</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[65px] relative shrink-0 w-[173px]">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_1074_2606)" id="Icon">
          <path d={svgPaths.p2cfc29f0} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d={svgPaths.p2be88c80} fill="var(--fill-0, #C99619)" id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <circle cx="9.00055" cy="6.99756" fill="var(--fill-0, #FBF2DB)" id="Ellipse 1" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2606">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[2.49829e+07px] shrink-0 size-[31.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.007px] relative shrink-0 w-[30.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] text-nowrap top-[0.49px] tracking-[0.1172px]">训练场</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[3.99px] h-[50.99px] items-center relative shrink-0 w-[31.992px]" data-name="Container">
      <Container38 />
      <Text15 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[222px]" data-name="Container">
      <Frame2 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-[104px] w-[376px]" data-name="Container">
      <Container35 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[211.929px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container29 />
      <Container30 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[199px] items-start left-[16px] pb-0 pt-[19.998px] px-[19.998px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] top-0 w-[416px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_1074_2601)" id="Icon">
          <path d={svgPaths.p1f5d4f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          <g id="Vector_2">
            <path d={svgPaths.p2b8ce180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2b8ce180} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </g>
          <g id="Vector_3">
            <path d="M5.9971 8.4959H6.0021Z" fill="var(--fill-0, white)" />
            <path d="M5.9971 8.4959H6.0021" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1074_2601">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#fa8c16] relative rounded-[2.49829e+07px] shrink-0 size-[15.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[116.999px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">最快多久可以拿证？</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[140.987px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.992px] items-center relative size-full">
        <Container44 />
        <Text16 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#fbf2db] h-[21.964px] relative rounded-[2.49829e+07px] shrink-0 w-[51.979px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[18px] left-[25.99px] not-italic text-[#c99619] text-[12px] text-center text-nowrap top-[2.48px] translate-x-[-50%]">问驾校</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white content-stretch flex h-[47px] items-center justify-between left-[16px] pb-0 pt-[0.745px] px-[11.994px] rounded-bl-[14px] rounded-br-[14px] top-[209px] w-[416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]" />
      <Container45 />
      <Button7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.973px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">航校简介</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[47.99px] size-[13.995px] top-[0.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g id="Icon">
          <path d={svgPaths.p32f8c380} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[61.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] text-nowrap top-[0.74px]">查看详情</p>
        <Icon10 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[23.988px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container47 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">注册时间：2024-11-24</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[71.104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">教练：7名</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">近一年学员数：328名</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[31.992px] h-[19.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[47.965px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[117px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.994px] items-start pb-0 pt-[16.741px] px-[15.996px] relative size-full">
          <Container48 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-0 top-[266px] w-[448px]">
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[389px] left-0 top-[221px] w-[448px]" data-name="Container">
      <Container43 />
      <Container46 />
      <Frame3 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">14:34</p>
      </div>
    </div>
  );
}

function Icon11() {
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

function Icon12() {
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

function Icon13() {
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

function Container54() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon11 />
        <Icon12 />
        <Icon13 />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[448px]" data-name="StatusBar">
      <Container53 />
      <Container54 />
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

function Heading1() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-[105.109px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">教练团队 (16)</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[55.99px] size-[13.995px] top-[2.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g id="Icon">
          <path d={svgPaths.p32f8c380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[69.988px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[26px] not-italic text-[#99a1af] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">查看全部</p>
        <Icon14 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.996px] py-0 relative size-full">
          <Heading1 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[20.987px] left-[33.99px] top-[84.72px] w-[41.997px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">杨建君</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[12.506px] left-[32.93px] top-[109.69px] w-[44.126px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[45px]">学员 1741</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[12.506px] left-[33.24px] top-[122.2px] w-[43.51px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[44px]">教龄 17年</p>
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[#c99619] left-[2.8px] rounded-[2.49829e+07px] size-[50.393px] top-[6.8px]" data-name="Container" />;
}

function ImageWithFallback6() {
  return <div className="h-[53.014px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container60() {
  return (
    <div className="absolute bg-[#c99619] left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback6 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.489px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[5.99px] size-[7.992px] top-[4.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99226 7.99226">
        <g clipPath="url(#clip0_1074_2656)" id="Icon">
          <path d={svgPaths.p3ee2ad00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666022" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2656">
            <rect fill="white" height="7.99226" width="7.99226" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-gradient-to-r border-[0.745px] border-solid border-white from-[rgba(201,150,25,0.99)] h-[18.974px] left-[-1.73px] rounded-[4px] to-[#f5db9b] top-[41.01px] w-[59.436px]" data-name="Container">
      <Icon15 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[15.97px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">杰出教练</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute left-[27px] size-[55.992px] top-[16.74px]" data-name="Container">
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function CoachCard() {
  return (
    <div className="bg-white h-[147.444px] relative rounded-[14px] shrink-0 w-[109.995px]" data-name="CoachCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container56 />
        <Container57 />
        <Container58 />
        <Container62 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[20.987px] left-[41px] top-[84.72px] w-[28.002px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">乔梁</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[12.506px] left-[31.55px] top-[109.69px] w-[46.895px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[47px]">学员 1284</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[12.506px] left-[32.9px] top-[122.2px] w-[44.196px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[45px]">教龄 18年</p>
    </div>
  );
}

function Container66() {
  return <div className="absolute bg-[#c99619] left-[2.8px] rounded-[2.49829e+07px] size-[50.393px] top-[6.8px]" data-name="Container" />;
}

function ImageWithFallback7() {
  return <div className="h-[53.014px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container67() {
  return (
    <div className="absolute bg-[#c99619] left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback7 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.489px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[5.99px] size-[7.992px] top-[4.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99226 7.99226">
        <g clipPath="url(#clip0_1074_2637)" id="Icon">
          <path d={svgPaths.pbe0100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666022" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2637">
            <rect fill="white" height="7.99226" width="7.99226" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-gradient-to-r border-[0.745px] border-solid border-white from-[#ffb900] h-[18.974px] left-[-1.73px] rounded-[4px] to-[#fe9a00] top-[41.01px] w-[59.436px]" data-name="Container">
      <Icon16 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[15.97px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">五星教练</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute left-[27px] size-[55.992px] top-[16.74px]" data-name="Container">
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function CoachCard1() {
  return (
    <div className="bg-white h-[147.444px] relative rounded-[14px] shrink-0 w-[109.995px]" data-name="CoachCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container63 />
        <Container64 />
        <Container65 />
        <Container69 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[20.987px] left-[33.99px] top-[84.72px] w-[41.997px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">王果香</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[12.506px] left-[33.12px] top-[109.69px] w-[43.754px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[44px]">学员 1114</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[12.506px] left-[33.77px] top-[122.2px] w-[42.451px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[43px]">教龄 11年</p>
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-[#c99619] left-[2.8px] rounded-[2.49829e+07px] size-[50.393px] top-[6.8px]" data-name="Container" />;
}

function ImageWithFallback8() {
  return <div className="h-[53.014px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container74() {
  return (
    <div className="absolute bg-[#c99619] left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback8 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.489px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[5.99px] size-[7.992px] top-[4.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99226 7.99226">
        <g clipPath="url(#clip0_1074_2640)" id="Icon">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666022" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2640">
            <rect fill="white" height="7.99226" width="7.99226" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bg-gradient-to-r border-[0.745px] border-solid border-white from-[#ffb900] h-[18.974px] left-[-1.73px] rounded-[4px] to-[#fe9a00] top-[41.01px] w-[59.436px]" data-name="Container">
      <Icon17 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[15.97px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">五星教练</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute left-[27px] size-[55.992px] top-[16.74px]" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function CoachCard2() {
  return (
    <div className="bg-white h-[147.444px] relative rounded-[14px] shrink-0 w-[109.995px]" data-name="CoachCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container70 />
        <Container71 />
        <Container72 />
        <Container76 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[20.987px] left-[41px] top-[84.72px] w-[28.002px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">王宇</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[12.506px] left-[34.37px] top-[109.69px] w-[41.253px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[42px]">学员 877</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[12.506px] left-[32.96px] top-[122.2px] w-[44.08px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[12.5px] left-0 not-italic text-[#6a7282] text-[10px] top-0 tracking-[0.1172px] w-[45px]">教龄 13年</p>
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-[#c99619] left-[2.8px] rounded-[2.49829e+07px] size-[50.393px] top-[6.8px]" data-name="Container" />;
}

function ImageWithFallback9() {
  return <div className="h-[53.014px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container81() {
  return (
    <div className="absolute bg-[#c99619] left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.489px] relative rounded-[inherit] size-full">
        <ImageWithFallback9 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.489px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[5.99px] size-[7.992px] top-[4.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99226 7.99226">
        <g clipPath="url(#clip0_1074_2640)" id="Icon">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666022" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2640">
            <rect fill="white" height="7.99226" width="7.99226" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-gradient-to-r border-[0.745px] border-solid border-white from-[#ffb900] h-[18.974px] left-[-1.73px] rounded-[4px] to-[#fe9a00] top-[41.01px] w-[59.436px]" data-name="Container">
      <Icon18 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[15.97px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">五星教练</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute left-[27px] size-[55.992px] top-[16.74px]" data-name="Container">
      <Container80 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function CoachCard3() {
  return (
    <div className="bg-white h-[147.444px] relative rounded-[14px] shrink-0 w-[109.995px]" data-name="CoachCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container77 />
        <Container78 />
        <Container79 />
        <Container83 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[163.44px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-x-auto overflow-y-clip size-full">
        <div className="content-stretch flex gap-[11.994px] items-start pl-[15.996px] pr-0 py-0 relative size-full">
          <CoachCard />
          <CoachCard1 />
          <CoachCard2 />
          <CoachCard3 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[237px] items-start left-0 pb-0 pt-[23.988px] px-0 top-[1018px] w-[448px]" data-name="Container">
      <Container55 />
      <Container84 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-[115.719px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[25.5px] left-0 not-italic text-[#0f172b] text-[17px] text-nowrap top-[0.23px] tracking-[-0.4316px]">学员评价 (135)</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[55.99px] size-[13.995px] top-[2.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g id="Icon">
          <path d={svgPaths.p32f8c380} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[69.988px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[19.5px] left-[26px] not-italic text-[#99a1af] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">查看全部</p>
        <Icon19 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[25.489px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading8 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[39.985px] left-0 top-0 w-[56.446px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#c99619] text-[36px] text-nowrap top-[0.51px] tracking-[0.3691px]">4.8</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[19.986px] left-[58.44px] top-[18.61px] w-[14.007px]" data-name="Text">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#c99619] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">分</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[39.985px] relative shrink-0 w-[72.442px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text19 />
        <Text20 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[9.993px] top-[3.26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g clipPath="url(#clip0_1074_2590)" id="Icon">
          <g id="Vector">
            <path d="M2.91469 4.16384V9.16045Z" fill="var(--fill-0, #C99619)" />
            <path d="M2.91469 4.16384V9.16045" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
          </g>
          <path d={svgPaths.pac1ba80} fill="var(--fill-0, #C99619)" id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2590">
            <rect fill="white" height="9.99323" width="9.99323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[16.508px] left-[2px] top-[63.98px] w-[55.981px]" data-name="Container">
      <Icon20 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[11.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">教学服务</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative size-[59.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9943 59.9943">
        <g id="Icon">
          <path d={svgPaths.p2d88bd80} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="5" />
          <path d={svgPaths.p2d88bd80} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="150.8 150.8" strokeLinecap="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[17.67px] top-[4.47px] w-[10.482px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[10px] tracking-[0.1172px]">%</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[19.486px] left-[15.91px] top-[20.24px] w-[28.153px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">94</p>
      <Text21 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute left-0 size-[59.994px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[59.994px] top-[0.46px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon21 />
        </div>
      </div>
      <Text22 />
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="h-[80.493px] relative shrink-0 w-[59.994px]" data-name="CircularProgress">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container88 />
        <Container89 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[9.993px] top-[3.26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g clipPath="url(#clip0_1074_2652)" id="Icon">
          <g id="Vector">
            <path d="M2.9147 4.16384V9.16045Z" fill="var(--fill-0, #C99619)" />
            <path d="M2.9147 4.16384V9.16045" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
          </g>
          <path d={svgPaths.p39cb94f0} fill="var(--fill-0, #C99619)" id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2652">
            <rect fill="white" height="9.99323" width="9.99323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[16.508px] left-[2px] top-[63.98px] w-[55.981px]" data-name="Container">
      <Icon22 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[11.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">环境设施</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative size-[59.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9943 59.9943">
        <g id="Icon">
          <path d={svgPaths.p2d88bd80} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="5" />
          <path d={svgPaths.p2d88bd80} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="150.8 150.8" strokeLinecap="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[17.67px] top-[4.47px] w-[10.482px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[10px] tracking-[0.1172px]">%</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[19.486px] left-[15.91px] top-[20.24px] w-[28.153px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">94</p>
      <Text23 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute left-0 size-[59.994px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[59.994px] top-[0.46px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon23 />
        </div>
      </div>
      <Text24 />
    </div>
  );
}

function CircularProgress1() {
  return (
    <div className="h-[80.493px] relative shrink-0 w-[59.994px]" data-name="CircularProgress">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container90 />
        <Container91 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[9.993px] top-[3.26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99323 9.99323">
        <g clipPath="url(#clip0_1074_2582)" id="Icon">
          <g id="Vector">
            <path d="M2.91468 4.16384V9.16045Z" fill="var(--fill-0, #C99619)" />
            <path d="M2.91468 4.16384V9.16045" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
          </g>
          <path d={svgPaths.p189ef400} fill="var(--fill-0, #C99619)" id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.832769" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2582">
            <rect fill="white" height="9.99323" width="9.99323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[16.508px] left-[2px] top-[63.98px] w-[55.981px]" data-name="Container">
      <Icon24 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-[11.98px] not-italic text-[#6a7282] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">练机速度</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative size-[59.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9943 59.9943">
        <g id="Icon">
          <path d={svgPaths.p2d88bd80} id="Vector" stroke="var(--stroke-0, #FBF2DB)" strokeWidth="5" />
          <path d={svgPaths.p2d88bd80} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeDasharray="150.8 150.8" strokeLinecap="round" strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[11.913px] items-start left-[17.67px] top-[4.47px] w-[10.482px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[10px] tracking-[0.1172px]">%</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[19.486px] left-[15.91px] top-[20.24px] w-[28.153px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#c99619] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">94</p>
      <Text25 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute left-0 size-[59.994px] top-0" data-name="Container">
      <div className="absolute flex items-center justify-center left-0 size-[59.994px] top-[0.46px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon25 />
        </div>
      </div>
      <Text26 />
    </div>
  );
}

function CircularProgress2() {
  return (
    <div className="h-[80.493px] relative shrink-0 w-[59.994px]" data-name="CircularProgress">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="basis-0 grow h-[80.493px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
          <CircularProgress />
          <CircularProgress1 />
          <CircularProgress2 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[23.988px] h-[80.493px] items-center relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[195.002px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">你的评价可以帮助驾校做得更好！</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[91.96px] size-[11.994px] top-[8.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p34add800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#c99619] h-[29.968px] left-0 rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[31.48px] w-[119.954px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[52px] not-italic text-[12px] text-center text-nowrap text-white top-[6.48px] translate-x-[-50%]">我要贡献评价</p>
      <Icon26 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute h-[61.448px] left-[16px] top-[25.27px] w-[195.002px]" data-name="Container">
      <Container96 />
      <Button10 />
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-gradient-to-r from-[#f5db9b] h-[111.985px] overflow-clip relative rounded-[14px] shrink-0 to-[#fbf2db] w-full" data-name="Container">
      <Container97 />
      <div className="absolute h-[67px] left-[300px] top-[22.06px] w-[73.69px]" data-name="Face blowing a kiss 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFaceBlowingAKiss1} />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-[#fbf2db] border-[0.745px] border-[rgba(243,244,246,0.5)] border-solid h-[25.978px] left-0 rounded-[2.49829e+07px] top-0 w-[64.822px]" data-name="Tag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[9.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[4.48px] tracking-[0.0645px]">好评 127</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute bg-[#fbf2db] border-[0.745px] border-[rgba(243,244,246,0.5)] border-solid h-[25.978px] left-[72.81px] rounded-[2.49829e+07px] top-0 w-[73.129px]" data-name="Tag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[9.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[4.48px] tracking-[0.0645px]">服务好 111</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="absolute bg-[#fbf2db] border-[0.745px] border-[rgba(243,244,246,0.5)] border-solid h-[25.978px] left-[153.94px] rounded-[2.49829e+07px] top-0 w-[87.845px]" data-name="Tag">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16.5px] left-[9.99px] not-italic text-[#c99619] text-[11px] text-nowrap top-[4.48px] tracking-[0.0645px]">收费透明 106</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[25.978px] relative shrink-0 w-full" data-name="Container">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function ImageWithFallback10() {
  return <div className="h-[35.994px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container100() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback10 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">勤勉的芒果</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[34.412px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#fa8c16] text-[12px] top-[0.49px] w-[35px]">5.0 分</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[65.904px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">2025-08-06</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[79.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] top-[0.49px] tracking-[0.0645px] w-[80px]">IP 属地内蒙古区</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex gap-[5.991px] h-[17.985px] items-center relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Text27 />
      <Text28 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[40.962px] relative shrink-0 w-[191.512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.989px] items-start relative size-full">
        <Container101 />
        <Container103 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_1074_2594)" id="Icon">
          <path d="M4.08194 5.8313V12.8289" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          <path d={svgPaths.p29d96b80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2594">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[5.177px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">1</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[23.162px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Icon27 />
        <Text29 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[40.962px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between relative size-full">
          <Container104 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[42.23px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#1d293d] text-[13px] top-[0.23px] tracking-[-0.0762px] w-[313px]">考无人机驾照就去内蒙古亚斯特科技找刘一横校长报名，讲解细致，服务周到。\n服务态度：好</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="basis-0 grow h-[107.18px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.992px] items-start relative size-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function ReviewItem() {
  return (
    <div className="h-[107.18px] relative shrink-0 w-full" data-name="ReviewItem">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.994px] items-start relative size-full">
          <Container100 />
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback11() {
  return <div className="h-[35.994px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container109() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[2.49829e+07px] shrink-0 size-[35.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback11 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[21px] left-0 not-italic text-[#0f172b] text-[14px] text-nowrap top-[0.23px] tracking-[-0.1504px]">快乐的小鸟</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[17.985px] relative shrink-0 w-[35.005px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#fa8c16] text-[12px] top-[0.49px] w-[36px]">4.9 分</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[65.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] text-nowrap top-[0.49px] tracking-[0.0645px]">2025-08-05</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.508px] relative shrink-0 w-[79.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#99a1af] text-[11px] top-[0.49px] tracking-[0.0645px] w-[80px]">IP 属地内蒙古区</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[5.991px] h-[17.985px] items-center relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[40.962px] relative shrink-0 w-[191.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.989px] items-start relative size-full">
        <Container110 />
        <Container112 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_1074_2594)" id="Icon">
          <path d="M4.08194 5.8313V12.8289" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          <path d={svgPaths.p29d96b80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
        <defs>
          <clipPath id="clip0_1074_2594">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text32() {
  return <div className="shrink-0 size-0" data-name="Text" />;
}

function Container114() {
  return (
    <div className="h-[13.995px] relative shrink-0 w-[17.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Icon28 />
        <Text32 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[40.962px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between relative size-full">
          <Container113 />
          <Container114 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[21.115px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21.125px] left-0 not-italic text-[#1d293d] text-[13px] text-nowrap top-[0.23px] tracking-[-0.0762px]">教练很有耐心，场地也很大，练车不用排队。</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="basis-0 grow h-[86.065px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.992px] items-start relative size-full">
        <Container115 />
        <Container116 />
      </div>
    </div>
  );
}

function ReviewItem1() {
  return (
    <div className="h-[86.065px] relative shrink-0 w-full" data-name="ReviewItem">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.994px] items-start relative size-full">
          <Container109 />
          <Container117 />
        </div>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[23.988px] h-[217.234px] items-start relative shrink-0 w-full" data-name="Container">
      <ReviewItem />
      {[...Array(3).keys()].map((_, i) => (
        <ReviewItem1 key={i} />
      ))}
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.988px] h-[581px] items-start left-0 pb-0 pt-[23.988px] px-[15.996px] top-[1248px] w-[448px]" data-name="Container">
      <Container86 />
      <Container95 />
      <Container98 />
      <Container99 />
      <Container118 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="聊天 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1103_4035)" id="èå¤© 1">
          <path d={svgPaths.p2fb27b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27e66000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1103_4035">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 bg-[#c99619] grow min-h-px min-w-px relative rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[113px] py-[9px] relative w-full">
          <Component1 />
          <p className="font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-white tracking-[-0.2344px]">在线聊</p>
        </div>
      </div>
    </div>
  );
}

function SchoolProfile1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[76px] items-center left-0 pb-0 pt-[0.745px] px-[15.996px] top-[848px] w-[448px]" data-name="SchoolProfile">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button11 />
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-[#fefbf4] relative size-full" data-name="飞场详情-默认">
      <SchoolProfile1 />
      <Container20 />
      <SchoolProfile />
      <Container24 />
      <Container52 />
      <div className="absolute bottom-0 h-[924px] left-0 pointer-events-none top-0">
        <Frame />
      </div>
      <Container85 />
      <Container119 />
    </div>
  );
}