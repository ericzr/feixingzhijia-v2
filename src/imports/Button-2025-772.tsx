import svgPaths from "./svg-cgq3jnsxx6";

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g id="Icon">
          <path d="M8.33254 9.99905H11.6656" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24988" />
          <path d="M8.33254 6.66603H11.6656" id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24988" />
          <path d={svgPaths.p2e76db00} id="Vector_3" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24988" />
          <path d={svgPaths.pa61a780} id="Vector_4" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24988" />
          <path d={svgPaths.p360d2540} id="Vector_5" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24988" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[35.994px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[18px] not-italic text-[#755609] text-[12px] text-center top-[0.74px] translate-x-[-50%]">规模大</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#fffbf2] content-stretch flex flex-col gap-[3.99px] items-center justify-center p-[0.74px] relative rounded-[10px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c99619] border-[0.74px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon />
      <Text />
    </div>
  );
}