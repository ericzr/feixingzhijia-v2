import svgPaths from "./svg-iw3fq84h0w";

function Icon() {
  return (
    <div className="h-[36px] relative shrink-0 w-[31px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 36">
        <g id="Icon">
          <path d="M18.0048 25L11 18L18.0048 11" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[rgba(0,0,0,0.2)] cursor-pointer relative rounded-[24982900px] shrink-0 size-[35.994px]" data-name="Button">
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
        <g clipPath="url(#clip0_2135_547)" id="Icon">
          <path d={svgPaths.p279013f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
        <defs>
          <clipPath id="clip0_2135_547">
            <rect fill="white" height="19.9981" width="19.9981" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[24982900px] shrink-0 size-[35.994px]" data-name="Button">
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
        <g clipPath="url(#clip0_2135_550)" id="Icon">
          <path d="M9.99905 1.66651V12.4988" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p34ac9700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPaths.p2292fba0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
        <defs>
          <clipPath id="clip0_2135_550">
            <rect fill="white" height="19.9981" width="19.9981" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[24982900px] shrink-0 size-[35.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[35.994px] relative shrink-0 w-[131.971px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-end relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[15.996px] py-0 relative size-full" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}