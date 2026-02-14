import svgPaths from "../../imports/svg-js98u2boeq";

function CloseIcon() {
  return (
    <div className="size-[14px] relative">
       <svg className="block size-full" fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3c506100} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1202b780} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
       </svg>
    </div>
  );
}

export function CityHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-center px-[16px] pt-[50px] pb-[12px] relative shrink-0 w-full bg-[#fefbf4]">
      <div 
        className="absolute left-[16px] top-[50px] flex items-center justify-center size-[32px] cursor-pointer z-10"
        onClick={onClose}
      >
        <CloseIcon />
      </div>
      <h1 className="text-[#685622] text-[18px] font-bold tracking-[-0.44px]">选择城市</h1>
    </div>
  );
}
