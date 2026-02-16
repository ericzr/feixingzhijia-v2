import React from 'react';
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import svgPaths from "../../imports/svg-eytze7ht9i";

function IconBack() {
  return (
    <div className="h-[14px] relative shrink-0 w-[7.005px]">
      <div className="absolute inset-[-8.33%_-16.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
          <path d={svgPaths.p35e48300} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        </svg>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="flex flex-col h-[28px] items-start justify-center pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px] cursor-pointer" 
      onClick={onClick}
    >
      <IconBack />
    </div>
  );
}

// Trash Icon
function IconTrash() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[45.83%_58.33%_29.16%_41.67%]">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.16%_58.33%]">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66651 6.66651">
            <path d="M0.833254 0.833254V5.83325" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3321 14.9986">
            <path d={svgPaths.p2f1ecd80} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6651 1.66651">
            <path d="M0.833254 0.833254H15.8318" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33317 4.99984">
            <path d={svgPaths.p266fb980} stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TrashButton() {
  return (
    <div className="flex items-center justify-center size-[36px] cursor-pointer p-[8px] box-content">
      <div className="relative shrink-0 size-[20px]">
        <IconTrash />
      </div>
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-center pt-[50px] pb-3 w-full relative z-10 shrink-0">
      <div className="absolute left-[12px] top-[50px] z-20">
        <BackButton onClick={onBack} />
      </div>
      <p className="font-bold text-[#685622] text-[18px] text-center tracking-[-0.44px] leading-[28px]">我的收藏</p>
      <div className="absolute right-[12px] top-[46px] z-20">
        <TrashButton />
      </div>
    </div>
  );
}

function IconStar() {
  return (
    <div className="relative shrink-0 size-[19.998px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
          <path d={svgPaths.p24a56400} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833254" />
      </svg>
    </div>
  );
}

function IconAll() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[24px] w-[24px] flex items-center justify-center rounded-[4px]">
        <span className="font-bold text-[10px] text-white">ALL</span>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p5fe1780} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
      </svg>
    </div>
  );
}

const favoriteTypes = [
    { id: 1, label: "单选题", count: 0 },
    { id: 2, label: "判断题", count: 0 },
    { id: 3, label: "多选题", count: 0 },
];

export function MyFavorites({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="flex flex-col flex-1 min-h-0 relative w-full"
      style={{ backgroundImage: SECONDARY_PAGE_BG }}
    >
      <Header onBack={onBack} />
      
      <div className="flex-1 min-h-0 overflow-y-auto px-[16px] pt-[20px] pb-[40px] flex flex-col gap-[16px]">
        {/* Top Cards */}
        <div className="flex items-center justify-between w-full gap-[15px]">
            {/* Today's Favorites */}
            <div className="bg-white flex items-center justify-between px-[16px] h-[74px] rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] flex-1">
                <div className="flex flex-col gap-[4px]">
                    <p className="font-medium text-[#1d293d] text-[15px]">今日收藏</p>
                    <p className="font-normal text-[#99a1af] text-[12px]">新增0题</p>
                </div>
                <div className="flex items-center justify-center size-[40px] rounded-full bg-[#ff8d00]">
                    <IconStar />
                </div>
            </div>

            {/* All Favorites */}
            <div className="bg-white flex items-center justify-between px-[16px] h-[74px] rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] flex-1">
                <div className="flex flex-col gap-[4px]">
                    <p className="font-medium text-[#1d293d] text-[15px]">全部收藏</p>
                    <p className="font-normal text-[#99a1af] text-[12px]">共0题</p>
                </div>
                <div className="flex items-center justify-center size-[40px] rounded-full bg-[#c99619]">
                    <IconAll />
                </div>
            </div>
        </div>

        {/* Details List */}
        <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] w-full p-[16px] min-h-[400px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-[24px]">
                <span className="font-bold text-[#1d293d] text-[16px]">收藏详情</span>
            </div>

            {/* List Items */}
            <div className="flex flex-col gap-[24px]">
                {favoriteTypes.map((item) => (
                    <div key={item.id} className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-[12px]">
                            <div className="bg-[#c99619] rounded-full size-[20px] flex items-center justify-center text-white text-[12px] font-bold">
                                {item.id}
                            </div>
                            <span className="text-[#314158] text-[15px]">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-[#6a7282] text-[13px]">{item.count}题</span>
                            <ChevronRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
