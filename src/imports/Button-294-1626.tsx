import svgPaths from "./svg-fhbq2q206c";

function Icon() {
  return (
    <div className="h-[23.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.93%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4914 20.5621">
            <path d={svgPaths.p348e2e80} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative size-full" data-name="Button">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}