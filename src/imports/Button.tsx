import svgPaths from "./svg-xbih92uw54";

function Icon() {
  return (
    <div className="relative shrink-0 size-[13.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g clipPath="url(#clip0_33_2375)" id="Icon">
          <g id="Vector">
            <path d={svgPaths.p1bd6f600} fill="var(--fill-0, #6A7282)" />
            <path d={svgPaths.p1bd6f600} stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
          <g id="Vector_2">
            <path d="M5.24819 10.4964H8.74699Z" fill="var(--fill-0, #6A7282)" />
            <path d="M5.24819 10.4964H8.74699" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
          <g id="Vector_3">
            <path d="M5.83134 12.8289H8.16467Z" fill="var(--fill-0, #6A7282)" />
            <path d="M5.83134 12.8289H8.16467" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_33_2375">
            <rect fill="white" height="13.9952" width="13.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.486px] relative shrink-0 w-[39.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[19.5px] left-[20.5px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">看答案</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(243,244,246,0.8)] relative rounded-[2.49829e+07px] size-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center pl-[9.993px] pr-0 py-0 relative size-full">
          <Icon />
          <Text />
        </div>
      </div>
    </div>
  );
}