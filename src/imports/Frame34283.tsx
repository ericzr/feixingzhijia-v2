import svgPaths from "./svg-2wvl2672jl";

function Button() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute inset-[-30%_-45%_-60%_-45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g filter="url(#filter0_d_1490_756)" id="Button">
            <path d={svgPaths.p9a77880} fill="var(--fill-0, #C99619)" shapeRendering="crispEdges" />
            <path d={svgPaths.p2d9e2600} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter0_d_1490_756" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect1_dropShadow_1490_756" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.359976 0 0 0 0 0.282007 0 0 0 0 0.165054 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1490_756" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1490_756" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="absolute inset-[-30%_-45%_-60%_-45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g filter="url(#filter0_d_1490_759)" id="Button">
            <path d={svgPaths.p9a77880} fill="var(--fill-0, #C99619)" shapeRendering="crispEdges" />
            <path d={svgPaths.p4230300} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter0_d_1490_759" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect1_dropShadow_1490_759" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.359976 0 0 0 0 0.282007 0 0 0 0 0.165054 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1490_759" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1490_759" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
      <Button />
      <Button1 />
    </div>
  );
}