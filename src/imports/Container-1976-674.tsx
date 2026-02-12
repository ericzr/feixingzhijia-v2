import svgPaths from "./svg-4o0r5sljz1";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[2.99px] not-italic text-[#4a5565] text-[14px] top-[0.49px] tracking-[-0.1504px]">全职</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p3efba4e0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.49px] tracking-[-0.1504px]">最新发布</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p3efba4e0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Text1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[28.002px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.49px] tracking-[-0.1504px]">筛选</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[11.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g clipPath="url(#clip0_1793_292)" id="Icon">
          <path d={svgPaths.pb23aa00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
        <defs>
          <clipPath id="clip0_1793_292">
            <rect fill="white" height="11.9942" width="11.9942" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[43.987px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center relative size-full">
        <Text2 />
        <Icon2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[40px] py-0 relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}