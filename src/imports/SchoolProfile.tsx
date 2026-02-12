import svgPaths from "./svg-659g8vbfvr";

function Component() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="聊天 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2128_469)" id="èå¤© 1">
          <path d={svgPaths.p2fb27b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27e66000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2128_469">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#755609] flex-[1_0_0] min-h-px min-w-px relative rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[113px] py-[9px] relative w-full">
          <Component />
          <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.2344px]">在线聊</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2117_148)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
        <defs>
          <clipPath id="clip0_2117_148">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c99619] flex-[1_0_0] min-h-px min-w-px relative rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[113px] py-[9px] relative w-full">
          <Icon />
          <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.2344px]">电话咨询</p>
        </div>
      </div>
    </div>
  );
}

export default function SchoolProfile() {
  return (
    <div className="bg-white content-stretch flex gap-[15.996px] items-center pb-0 pt-[0.745px] px-[15.996px] relative size-full" data-name="SchoolProfile">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.745px] inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}