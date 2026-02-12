import svgPaths from "./svg-gyx9wa1zu5";

function Icon() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7083 19.7083">
            <path d={svgPaths.p3aa9e980} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.34%_37.5%_41.66%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.69px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.37494 6.87494">
            <path d="M0.687471 6.18747V0.687471" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_41.67%_37.5%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.69px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.37494 6.87494">
            <path d="M0.687471 6.18747V0.687471" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Button">
      <Icon />
    </div>
  );
}