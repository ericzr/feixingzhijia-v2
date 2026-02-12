import svgPaths from "./svg-syb3f1hrwr";

function Icon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d="M10.9995 6.41639V19.2497" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
          <path d={svgPaths.p3e957d00} id="Vector_2" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.29157" />
        </g>
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[10px] size-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-0 pr-[0.012px] py-0 relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}