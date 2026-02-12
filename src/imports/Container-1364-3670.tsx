import svgPaths from "./svg-a26els3yxc";

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9962 15.9962">
        <g clipPath="url(#clip0_1358_2575)" id="Icon">
          <path d={svgPaths.p11369000} fill="var(--fill-0, #FA8C16)" id="Vector" stroke="var(--stroke-0, #FA8C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          <rect fill="var(--fill-0, #FEF3E8)" height="1" id="Rectangle 346240792" rx="0.5" width="8" x="4.00769" y="5.24658" />
          <rect fill="var(--fill-0, #FEF3E8)" height="1" id="Rectangle 346240793" rx="0.5" width="8" x="4.00769" y="7.24658" />
          <rect fill="var(--fill-0, #FEF3E8)" height="1" id="Rectangle 346240794" rx="0.5" width="8" x="4.00769" y="9.24658" />
        </g>
        <defs>
          <clipPath id="clip0_1358_2575">
            <rect fill="white" height="15.9962" width="15.9962" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(250,140,22,0.1)] relative rounded-[2.49829e+07px] size-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}