import svgPaths from "./svg-3sf5g76b6q";
import imgContainer from "figma:asset/76f163a40e2d991fc7ab847f3f1ab4100b066d93.png";

function Container3() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.98px] tracking-[-0.3125px]">鄂尔多斯河源商务有限公司</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.35px] tracking-[-0.1504px]">果园</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[43.992px] relative shrink-0 w-[191.957px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9973 19.9973">
        <g id="Icon">
          <path d={svgPaths.p302d060} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66644" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[75.992px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative size-full">
          <Container2 />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#101828] h-[35.987px] left-[calc(50%+0.42px)] rounded-[22590200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[204.01px] translate-x-[-50%] w-[260.849px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%-97.42px)] not-italic text-[14px] text-white top-[8.34px] tracking-[-0.1504px]">内蒙古鄂尔多斯市东胜区罕台镇</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[255.999px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.673px] relative rounded-[inherit] size-full">
        <Container1 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.673px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}