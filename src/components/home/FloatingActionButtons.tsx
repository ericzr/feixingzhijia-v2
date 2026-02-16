import svgPaths from "../../imports/svg-2wvl2672jl";

// 阴影用 CSS 做，避免 SVG 内 feGaussianBlur 在移动端导致整图被低分辨率光栅化而模糊
const iconShadowStyle = { filter: 'drop-shadow(0 4px 12px rgba(117,86,9,0.28))' };

function PhoneButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[40px]" style={{ transform: 'translateZ(0)' }}>
      <div
        className="absolute inset-[-30%_-45%_-60%_-45%] cursor-pointer active:scale-95 transition-transform"
        style={iconShadowStyle}
        onClick={onClick}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <path d={svgPaths.p9a77880} fill="#C99619" shapeRendering="crispEdges" />
          <path d={svgPaths.p2d9e2600} fill="#FBF2DB" />
        </svg>
      </div>
    </div>
  );
}

function ScrollTopButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[40px]" style={{ transform: 'translateZ(0)' }}>
      <div
        className="absolute inset-[-30%_-45%_-60%_-45%] cursor-pointer active:scale-95 transition-transform"
        style={iconShadowStyle}
        onClick={onClick}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <path d={svgPaths.p9a77880} fill="#C99619" shapeRendering="crispEdges" />
          <path d={svgPaths.p4230300} fill="#FBF2DB" />
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
