import React, { useState } from 'react';

const SORT_OPTIONS = [
  "智能排序",
  "距离优先",
  "口碑优先",
  "通过率优先"
];

export function FilterSort({ onClose, onSelect, activeSort }: { onClose?: () => void, onSelect?: (sort: string) => void, activeSort?: string }) {
  const [selectedSort, setSelectedSort] = useState(activeSort || "智能排序");

  const handleSelect = (option: string) => {
    setSelectedSort(option);
    onSelect?.(option);
    onClose?.();
  };

  return (
    <div className="bg-white rounded-b-[16px] overflow-hidden flex flex-col w-full pb-[8px]">
      {SORT_OPTIONS.map((option) => {
        const isActive = selectedSort === option;
        return (
          <div
            key={option}
            onClick={() => handleSelect(option)}
            className={`h-[44px] px-[16px] flex items-center cursor-pointer ${
              isActive ? "bg-[#fffbf2]/50" : "bg-white"
            }`}
          >
            <span
              className={`text-[14px] ${
                isActive ? "text-[#c99619] font-medium" : "text-[#45556c] font-normal"
              }`}
            >
              {option}
            </span>
          </div>
        );
      })}
    </div>
  );
}
