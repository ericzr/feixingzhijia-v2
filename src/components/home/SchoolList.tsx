import React, { useState } from 'react';
import svgPaths from "../../imports/svg-home-sticky";
import svgPathsFilters from "../../imports/svg-home-filters";
import svgPathsExam from "../../imports/svg-0ey06znph1";
import svgPathsExamList from "../../imports/svg-e7xo5g8zsc";
import svgPathsCard from "../../imports/svg-7i0sby2nq6";
import imgImage from "figma:asset/bc04c8b86436de60e37006373742bcf2441b3e32.png";
import imgImage1 from "figma:asset/769704668524c3f1af5292edec2aaea12df89ff0.png";
import { FilterMore } from "./filters/FilterMore";
import { FilterNearby } from "./filters/FilterNearby";
import { FilterSort } from "./filters/FilterSort";

function SchoolCardImage({ src }: { src: string }) {
  return (
    <div className="h-[103px] relative rounded-[4px] shrink-0 w-[81px]" data-name="Image (志通驾校)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={src} />
    </div>
  );
}

function SchoolCardHeading({ name }: { name: string }) {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[80px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap truncate w-full top-[-0.37px] tracking-[-0.3125px]">{name}</p>
    </div>
  );
}

function CertificationIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="认证">
      <div className="absolute inset-[0_0_-0.04%_-0.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.071 16.0068">
          <g id="è®¤è¯">
            <rect fill="var(--fill-0, #F5C244)" height="16" id="Rectangle 7" rx="5" width="16" y="0.00683594" />
            <path d={svgPathsCard.p16f59a80} fill="var(--fill-0, #FBF2DB)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CrownIcon() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_1074_2643)" id="Icon">
          <path d={svgPathsCard.p2c9df200} fill="var(--fill-0, #C99619)" id="Vector" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <g id="Vector_2">
            <path d="M3.7494 15.7475H14.2477Z" fill="var(--fill-0, #C99619)" />
            <path d="M3.7494 15.7475H14.2477" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1074_2643">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YearsTag() {
  return (
    <div className="bg-[#fbf2db] h-[18.986px] relative rounded-[2px] shrink-0 w-[24.14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[3.99px] not-italic text-[#c99619] text-[10px] text-nowrap top-[2.48px] tracking-[0.1172px]">2年</p>
      </div>
    </div>
  );
}

function SchoolCardBadges() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[18.986px] items-center left-[90px] top-[2.5px] w-[66.09px]" data-name="Container">
      <CertificationIcon />
      <CrownIcon />
      <YearsTag />
    </div>
  );
}

function SchoolCardHeader({ name, showPhone }: { name: string, showPhone: boolean }) {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Container">
      <SchoolCardHeading name={name} />
      <SchoolCardBadges />
      {showPhone && (
        <div 
          className="absolute left-[172.09px] size-[13px] top-[5.5px]" 
          data-name="Vector"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPathsCard.p2ca4c280} fill="var(--fill-0, #C99619)" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}

function StarIcon({ left, active = true }: { left: string, active?: boolean }) {
  return (
    <div className={`absolute ${left} size-[11.995px] top-[4px]`} data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9953 11.9953">
        <g clipPath="url(#clip0_1124_4633)" id="Icon">
          <path 
            d={svgPathsCard.p13a50700} 
            fill={active ? "var(--fill-0, #FF8904)" : "var(--fill-0, #D1D5DC)"} 
            id="Vector" 
            stroke={active ? "var(--stroke-0, #FF8904)" : "var(--stroke-0, #D1D5DC)"} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="0.999605" 
          />
        </g>
        <defs>
          <clipPath id="clip0_1124_4633">
            <rect fill="white" height="11.9953" width="11.9953" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RatingScore() {
  return (
    <div className="absolute h-[19.999px] left-[83.93px] top-0 w-[20.699px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#ff6900] text-[14px] text-nowrap top-[0.32px] tracking-[-0.1504px]">4.8</p>
    </div>
  );
}

function RatingCount() {
  return (
    <div className="absolute h-[15.987px] left-[112.61px] top-[2.01px] w-[48.969px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.66px]">15条评价</p>
    </div>
  );
}

function SchoolCardRating() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Container">
      <StarIcon left="left-0" />
      <StarIcon left="left-[15.99px]" />
      <StarIcon left="left-[31.97px]" />
      <StarIcon left="left-[47.96px]" />
      <StarIcon left="left-[63.95px]" active={false} />
      <RatingScore />
      <RatingCount />
    </div>
  );
}

function PriceText() {
  return (
    <div className="h-[15.987px] relative shrink-0 w-[49.936px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.66px]">¥6680起</p>
      </div>
    </div>
  );
}

function LicenseText() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] text-nowrap top-[0.66px]">CAAC</p>
      </div>
    </div>
  );
}

function LocationText() {
  return (
    <div className="h-[15.987px] relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-normal leading-[16px] not-italic relative size-full text-[#99a1af] text-[12px] text-nowrap">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular','Noto_Sans_JP:Regular',sans-serif] left-[66.09px] top-[0.65px]">{`东胜区   3.3 km`}</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] left-0 top-[0.66px]">普通班</p>
      </div>
    </div>
  );
}

function SchoolCardInfo() {
  return (
    <div className="content-stretch flex gap-[7.993px] h-[15.987px] items-center relative shrink-0 w-full" data-name="Container">
      <PriceText />
      <LicenseText />
      <LocationText />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#fbf2db] h-[19.978px] relative rounded-[4px] shrink-0 w-[95.211px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[2.65px]">综合排行第1名</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#fbf2db] h-[19.978px] relative rounded-[4px] shrink-0 w-[63.978px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[2.65px]">自有考场</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#fbf2db] h-[19.978px] relative rounded-[4px] shrink-0 w-[63.978px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[7.99px] not-italic text-[#c99619] text-[12px] text-nowrap top-[2.65px]">收费透明</p>
    </div>
  );
}

function SchoolCardTags() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function SchoolCardContent({ name, showPhone }: { name: string, showPhone: boolean }) {
  return (
    <div className="basis-0 grow h-[108px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <SchoolCardHeader name={name} showPhone={showPhone} />
        <SchoolCardRating />
        <SchoolCardInfo />
        <SchoolCardTags />
      </div>
    </div>
  );
}

function SchoolCard({ image, name = "亚斯特科技", onClick, showPhone = false }: { image: string, name?: string, onClick?: () => void, showPhone?: boolean }) {
  return (
    <div 
      className="bg-white content-stretch flex gap-[11.995px] items-center overflow-clip pb-[12px] pt-[11.995px] px-[11.995px] relative rounded-[10px] size-full w-full cursor-pointer" 
      data-name="Container"
      onClick={onClick}
    >
      <SchoolCardImage src={image} />
      <SchoolCardContent name={name} showPhone={showPhone} />
    </div>
  );
}

function ExamFilters({ activeFilter, onToggle, currentSort, onSortChange }: { activeFilter: string | null, onToggle: (filter: string) => void, currentSort: string, onSortChange: (sort: string) => void }) {
  const isOpen = activeFilter === 'exam-sort';
  return (
    <div className="h-[44px] w-full flex items-center justify-center relative">
      <div 
        onClick={() => onToggle('exam-sort')}
        className="flex items-center gap-[4px] cursor-pointer"
      >
        <span className={`text-[14px] leading-[20px] tracking-[-0.15px] ${isOpen ? 'text-[#c99619]' : 'text-[#4a5565]'}`}>
          {currentSort}
        </span>
        <div className={`relative size-[12px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="block size-full" fill="none" viewBox="0 0 12 12">
             <path d={svgPathsExamList.p3efba4e0} stroke={isOpen ? "#c99619" : "#4A5565"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <>
          <div 
            className="absolute top-full left-0 w-full h-screen bg-black/50 z-40"
            onClick={() => onToggle('')}
          />
          <ExamFilterDropdown onClose={() => onToggle('')} onSelect={onSortChange} activeSort={currentSort} />
        </>
      )}
    </div>
  );
}

function ExamFilterDropdown({ onClose, onSelect, activeSort }: { onClose: () => void, onSelect: (sort: string) => void, activeSort: string }) {
  const options = ["距离排序", "考试日期排序"];
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] z-50 flex flex-col">
       {options.map((option) => {
         const isActive = activeSort === option;
         return (
           <div 
             key={option}
             onClick={() => { onSelect(option); onClose(); }}
             className={`h-[44px] flex items-center px-[16px] cursor-pointer ${isActive ? 'bg-[rgba(255,251,242,0.5)]' : 'bg-white'}`}
           >
              <span className={`text-[14px] leading-[20px] tracking-[-0.15px] ${isActive ? 'text-[#c99619] font-medium' : 'text-[#45556c] font-normal'}`}>
                {option}
              </span>
           </div>
         );
       })}
    </div>
  );
}

const examSites = [
  { name: "内蒙古01考试点", theory: "每月6号", practice: "每月7号", address: "内蒙古呼和浩特新城区", distance: "140km" },
  { name: "宁夏01考试点", theory: "每月12号", practice: "每月13号", address: "宁夏银川市亲水北大街", distance: "234 km" },
  { name: "宁夏02考试点", theory: "每月16号", practice: "每月17号", address: "宁夏银川市金凤区", distance: "234 km" },
  { name: "陕西03考试点", theory: "每月14号", practice: "每月15号", address: "陕西省西安市灞桥区", distance: "380 km" },
  { name: "陕西04考试点", theory: "每月29号", practice: "每月30号", address: "陕西省西安市灞桥区", distance: "380 km" },
];

function ExamSiteCard({ 
  image, 
  name, 
  theoryDate, 
  practiceDate, 
  address, 
  distance 
}: { 
  image: string, 
  name: string, 
  theoryDate: string, 
  practiceDate: string, 
  address: string, 
  distance: string 
}) {
  return (
    <div className="bg-white h-[129px] relative rounded-[10px] shrink-0 w-full overflow-hidden">
      <div className="flex flex-row items-center size-full p-[12px]">
        <div className="h-[103px] w-[81px] shrink-0 rounded-[4px] overflow-hidden relative">
           <img className="absolute inset-0 size-full object-cover" src={image} alt={name} />
        </div>
        <div className="flex flex-col justify-between h-[103px] ml-[12px] grow py-[1px]">
           {/* Name */}
           <h3 className="text-[#101828] text-[16px] font-normal leading-[24px] tracking-[-0.3px] truncate">{name}</h3>
           
           {/* Dates */}
           <div className="flex flex-row items-center gap-[8px]">
              <p className="text-[#99a1af] text-[12px] whitespace-nowrap">
                 <span className="font-medium text-[#697384]">理论考试日期：</span>{theoryDate}
              </p>
              <p className="text-[#99a1af] text-[12px] whitespace-nowrap">
                 <span className="font-medium text-[#697384]">实践考试日期：</span>{practiceDate}
              </p>
           </div>

           {/* Location */}
           <div className="flex items-center gap-[4px]">
              <div className="relative shrink-0 size-[16px]">
                 <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path d={svgPathsExam.p14548f00} fill="#C99619" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPathsExam.p2d856080} fill="#C99619" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <circle cx="8.00177" cy="6.22104" fill="#FBF2DB" r="2.66709" />
                 </svg>
              </div>
              <span className="text-[#6a7282] text-[12px] truncate max-w-[120px]">{address}</span>
              <span className="text-[#6a7282] text-[12px]">{distance}</span>
           </div>

           {/* Tags */}
           <div className="flex gap-[7px]">
              <div className="bg-[#fbf2db] rounded-[4px] px-[8px] py-[2px] h-[20px] flex items-center justify-center">
                 <span className="text-[#c99619] text-[12px]">理论</span>
              </div>
              <div className="bg-[#fbf2db] rounded-[4px] px-[8px] py-[2px] h-[20px] flex items-center justify-center">
                 <span className="text-[#c99619] text-[12px]">实践</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function StickyTabs({ activeTab, onTabChange }: { activeTab: 'school' | 'exam', onTabChange: (tab: 'school' | 'exam') => void }) {
  return (
    <div className="flex gap-[132px] h-[60px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-full border-b border-[rgba(229,231,235,0.6)]">
      <div 
         onClick={() => onTabChange('school')}
         className="flex flex-col h-[22px] items-center justify-center relative shrink-0 w-[60px] cursor-pointer"
      >
        {activeTab === 'school' && (
           <div className="absolute -bottom-[10px] h-[2px] w-full bg-[#c99619] pointer-events-none" />
        )}
        <p className={`text-[14px] font-medium leading-[20px] tracking-[-0.14px] ${activeTab === 'school' ? 'text-black' : 'text-[#777e90]'}`}>
           航校列表
        </p>
      </div>
      <div 
         onClick={() => onTabChange('exam')}
         className="flex flex-col h-[22px] items-center justify-center relative shrink-0 w-[60px] cursor-pointer"
      >
        {activeTab === 'exam' && (
           <div className="absolute -bottom-[10px] h-[2px] w-full bg-[#c99619] pointer-events-none" />
        )}
        <p className={`text-[14px] font-medium leading-[20px] tracking-[-0.14px] ${activeTab === 'exam' ? 'text-black' : 'text-[#777e90]'}`}>
           执照考点
        </p>
      </div>
    </div>
  );
}

function StickyFilters({ activeFilter, onToggle, currentSort, onSortChange }: { activeFilter: string | null, onToggle: (filter: string) => void, currentSort: string, onSortChange: (sort: string) => void }) {
  return (
    <div className="flex flex-col w-full relative">
       {/* Filter Bar */}
       <div className="flex justify-between items-center px-[40px] h-[44px] relative z-50">
          <div onClick={() => onToggle('nearby')} className="flex items-center gap-[4px] cursor-pointer">
             <span className={`text-[14px] tracking-[-0.15px] ${activeFilter === 'nearby' ? 'text-[#c99619] font-medium' : 'text-[#4a5565] font-normal'}`}>附近</span>
             <svg className={`size-[12px] transition-transform ${activeFilter === 'nearby' ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none">
               <path d={svgPathsFilters.chevronDown} stroke={activeFilter === 'nearby' ? '#c99619' : '#4A5565'} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
          <div onClick={() => onToggle('sort')} className="flex items-center gap-[4px] cursor-pointer">
             <span className={`text-[14px] tracking-[-0.15px] ${activeFilter === 'sort' ? 'text-[#c99619] font-medium' : 'text-[#4a5565] font-normal'}`}>{currentSort}</span>
             <svg className={`size-[12px] transition-transform ${activeFilter === 'sort' ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none">
               <path d={svgPathsFilters.chevronDown} stroke={activeFilter === 'sort' ? '#c99619' : '#4A5565'} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
          <div onClick={() => onToggle('more')} className="flex items-center gap-[4px] cursor-pointer">
             <span className={`text-[14px] tracking-[-0.15px] ${activeFilter === 'more' ? 'text-[#c99619] font-medium' : 'text-[#4a5565] font-normal'}`}>筛选</span>
             <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
               <path d={svgPathsFilters.filter} stroke={activeFilter === 'more' ? '#c99619' : '#4A5565'} strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
       </div>

       {/* Dropdown Content */}
       {activeFilter && (
         <>
           {/* Backdrop */}
           <div className="absolute top-[44px] left-0 w-full h-screen bg-black/50 z-40" onClick={() => onToggle('')} />
           
           {/* Dropdown Panel */}
           <div className="absolute top-full left-0 w-full z-50 shadow-lg">
             {activeFilter === 'nearby' && <FilterNearby onClose={() => onToggle('')} />}
             {activeFilter === 'sort' && (
                <FilterSort 
                  onClose={() => onToggle('')} 
                  onSelect={onSortChange}
                  activeSort={currentSort}
                />
             )}
             {activeFilter === 'more' && <FilterMore onClose={() => onToggle('')} />}
           </div>
         </>
       )}
    </div>
  )
}

export function SchoolList({ onSchoolClick, isSticky = false }: { onSchoolClick?: (hasPhone: boolean) => void, isSticky?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeListTab, setActiveListTab] = useState<'school' | 'exam'>('school');
  const [currentSort, setCurrentSort] = useState("智能排序");
  const [currentExamSort, setCurrentExamSort] = useState("距离排序");

  const handleFilterToggle = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Sticky Header Container */}
      <div 
        className={`sticky top-[96px] md:top-[96px] z-40 w-full transition-all duration-200 border-b border-solid ${isSticky || activeFilter ? 'bg-white border-[rgba(229,231,235,0.6)] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]' : 'bg-transparent border-transparent shadow-none'}`}
      >
        <StickyTabs activeTab={activeListTab} onTabChange={setActiveListTab} />
        {activeListTab === 'school' ? (
          <StickyFilters 
            activeFilter={activeFilter} 
            onToggle={handleFilterToggle} 
            currentSort={currentSort}
            onSortChange={setCurrentSort}
          />
        ) : (
          <ExamFilters 
            activeFilter={activeFilter} 
            onToggle={handleFilterToggle} 
            currentSort={currentExamSort}
            onSortChange={setCurrentExamSort}
          />
        )}
      </div>
      
      {/* Scrollable List Content */}
      <div className="flex flex-col gap-[12px] pt-[8px] px-[12px] pb-[20px] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:px-6">
        {activeListTab === 'school' ? (
           <>
             <SchoolCard image={imgImage} onClick={() => onSchoolClick?.(true)} showPhone={true} />
             {[...Array(7)].map((_, i) => (
               <SchoolCard key={i} image={imgImage1} onClick={() => onSchoolClick?.(i === 0)} showPhone={i === 0} />
             ))}
           </>
        ) : (
           <>
              {examSites.map((site, i) => (
                 <ExamSiteCard 
                    key={i}
                    image={imgImage} 
                    name={site.name} 
                    theoryDate={site.theory} 
                    practiceDate={site.practice} 
                    address={site.address} 
                    distance={site.distance} 
                 />
              ))}
           </>
        )}
      </div>
    </div>
  );
}
