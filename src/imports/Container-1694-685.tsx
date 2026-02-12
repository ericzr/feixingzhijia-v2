import svgPaths from "./svg-josiu56kpf";

function Icon() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9322 16.4705">
            <path d={svgPaths.p7fb9800} id="Vector" stroke="var(--stroke-0, #584B31)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99976 5.99976">
            <path d={svgPaths.p153a5200} id="Vector" stroke="var(--stroke-0, #584B31)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-[28.002px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[21px] left-[14.01px] not-italic text-[#584b31] text-[14px] text-center text-nowrap top-[0.23px] tracking-[-0.1504px] translate-x-[-50%]">设置</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[11.994px] items-center relative size-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}