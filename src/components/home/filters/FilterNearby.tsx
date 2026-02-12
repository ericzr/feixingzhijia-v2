import React, { useState } from 'react';

const RANGE_OPTIONS = [
  "附近(智能范围)",
  "3 km",
  "5 km",
  "10 km",
  "15 km",
  "20 km"
];

const DISTRICT_OPTIONS = [
  "东胜区",
  "康巴什区",
  "达拉特旗",
  "准格尔旗",
  "鄂托克前旗",
  "鄂托克旗",
  "杭锦旗",
  "乌审旗",
  "伊金霍洛旗"
];

export function FilterNearby({ onClose }: { onClose?: () => void }) {
  const [selectedRange, setSelectedRange] = useState("附近(智能范围)");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleRangeClick = (range: string) => {
    setSelectedRange(range);
    setSelectedDistrict(""); // Mutually exclusive? Usually yes in these UI patterns
    // Or maybe not. Let's assume they might be separate filters, but often "Nearby" overrides district.
    // Given the layout, they are in one panel. Let's assume selecting one deselects the other if they are mutually exclusive logic, 
    // but visually they are distinct sections.
    // However, usually "Nearby 3km" conflicts with "DongSheng District".
    // I'll assume clicking a range clears district, and clicking a district clears range.
  };

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    setSelectedRange("");
  };

  return (
    <div className="bg-white rounded-b-[16px] overflow-hidden flex flex-col w-full pb-[16px]">
      <div className="flex flex-col px-[16px] py-[16px] gap-[24px]">
        {/* Range Section */}
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[#0f172b] text-[14px] font-medium">范围</h3>
          <div className="grid grid-cols-3 gap-[12px]">
            {RANGE_OPTIONS.map((option) => {
              const isActive = selectedRange === option;
              return (
                <div
                  key={option}
                  onClick={() => handleRangeClick(option)}
                  className={`h-[34px] rounded-full flex items-center justify-center text-[12px] border cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#fbf2db] text-[#755609] border-[#c99619]"
                      : "bg-[#fffbf2] text-[#62748e] border-transparent"
                  }`}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>

        {/* District Section */}
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[#0f172b] text-[14px] font-medium">行政区</h3>
          <div className="grid grid-cols-3 gap-[12px]">
            {DISTRICT_OPTIONS.map((option) => {
              const isActive = selectedDistrict === option;
              return (
                <div
                  key={option}
                  onClick={() => handleDistrictClick(option)}
                  className={`h-[34px] rounded-full flex items-center justify-center text-[12px] border cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#fbf2db] text-[#755609] border-[#c99619]"
                      : "bg-[#fffbf2] text-[#62748e] border-transparent"
                  }`}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
