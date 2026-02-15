import svgPaths from "../../imports/svg-2wvl2672jl";

function PhoneButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[40px] cursor-pointer active:scale-95 transition-transform" 
      onClick={onClick}
    >
      <div className="absolute inset-[-30%_-45%_-60%_-45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g filter="url(#filter0_d_phone_btn)">
            <path d={svgPaths.p9a77880} fill="var(--fill-0, #C99619)" shapeRendering="crispEdges" />
            <path d={svgPaths.p2d9e2600} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter0_d_phone_btn" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect1_dropShadow" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.359976 0 0 0 0 0.282007 0 0 0 0 0.165054 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ScrollTopButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[40px] cursor-pointer active:scale-95 transition-transform"
      onClick={onClick}
    >
      <div className="absolute inset-[-30%_-45%_-60%_-45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g filter="url(#filter0_d_top_btn)">
            <path d={svgPaths.p9a77880} fill="var(--fill-0, #C99619)" shapeRendering="crispEdges" />
            <path d={svgPaths.p4230300} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="76" id="filter0_d_top_btn" width="76" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect1_dropShadow" />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="13" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.359976 0 0 0 0 0.282007 0 0 0 0 0.165054 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function FloatingActionButtons({ 
  visible, 
  onPhoneClick, 
  onScrollTopClick 
}: { 
  visible: boolean;
  onPhoneClick?: () => void;
  onScrollTopClick?: () => void;
}) {
  if (!visible) return null;

  return (
    <div className="absolute bottom-[80px] right-[16px] flex flex-col gap-[10px] z-[100] animate-in fade-in zoom-in duration-300" style={{ isolation: 'isolate' }}>
      <PhoneButton onClick={onPhoneClick} />
      <ScrollTopButton onClick={onScrollTopClick} />
    </div>
  );
}
