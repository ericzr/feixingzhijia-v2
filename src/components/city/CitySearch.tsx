import svgPaths from "../../imports/svg-js98u2boeq";

function SearchIcon() {
  return (
    <div className="size-[15px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 15 15">
        <path d={svgPaths.p29417cc0} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24" />
        <path d={svgPaths.p14c31f80} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24" />
      </svg>
    </div>
  );
}

export function CitySearch() {
  return (
    <div className="px-[16px] py-[8px]">
      <div className="bg-[#fbf2db] h-[40px] rounded-full flex items-center px-[16px] gap-[8px]">
        <SearchIcon />
        <input 
          type="text" 
          placeholder="输入城市名或拼音查询" 
          className="bg-transparent border-none outline-none text-[14px] text-[#c99619] placeholder:text-[#c99619] w-full"
        />
      </div>
    </div>
  );
}
