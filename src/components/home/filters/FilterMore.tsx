import React, { useState } from 'react';
import svgPaths from '../../../imports/svg-home-filters-options';

const TAGS = [
  { id: 'scale', label: '规模大', icon: <IconScale /> },
  { id: 'fast', label: '拿本快', icon: <IconFast /> },
  { id: 'transparent', label: '收费透明', icon: <IconTransparent /> },
  { id: 'pass_rate', label: '通过率高', icon: <IconPassRate /> },
];

const CLASSES = [
  "普通班",
  "VIP班",
  "速成班",
  "假期班"
];

function IconScale() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d="M8.33254 9.99905H11.6656" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M8.33254 6.66603H11.6656" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p2e76db00} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.pa61a780} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p360d2540} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function IconFast() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p1f772640} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function IconTransparent() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p65b6300} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.pb46ee00} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p2defd100} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function IconPassRate() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p35bbe900} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.pd52ecc0} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p10243f00} fill="#C99619" />
    </svg>
  );
}

export function FilterMore({ onClose }: { onClose?: () => void }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const toggleTag = (id: string) => {
    setSelectedTags(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const toggleClass = (cls: string) => {
    setSelectedClasses(prev => 
      prev.includes(cls) ? prev.filter(c => c !== cls) : [...prev, cls]
    );
  };

  const handleReset = () => {
    setSelectedTags([]);
    setSelectedClasses([]);
  };

  return (
    <div className="bg-white rounded-b-[16px] overflow-hidden flex flex-col w-full">
      <div className="flex flex-col px-[16px] py-[16px] gap-[24px]">
        {/* Tags Section */}
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[#0f172b] text-[14px] font-medium">航校标签</h3>
          <div className="grid grid-cols-3 gap-[12px]">
            {TAGS.map((tag) => {
              const isActive = selectedTags.includes(tag.id);
              return (
                <div
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`h-[56px] rounded-[10px] flex flex-col items-center justify-center gap-[4px] cursor-pointer transition-colors border ${
                    isActive ? "bg-[#fffbf2] border-[#c99619]" : "bg-[#fffbf2] border-transparent"
                  }`}
                >
                  <div className="opacity-80">{tag.icon}</div>
                  <span className={`text-[12px] ${isActive ? "text-[#755609]" : "text-[#45556c]"}`}>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Class Type Section */}
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[#0f172b] text-[14px] font-medium">班型</h3>
          <div className="grid grid-cols-3 gap-[12px]">
            {CLASSES.map((cls) => {
              const isActive = selectedClasses.includes(cls);
              return (
                <div
                  key={cls}
                  onClick={() => toggleClass(cls)}
                  className={`h-[36px] rounded-full flex items-center justify-center text-[12px] cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#fbf2db] text-[#755609] border border-[#c99619]"
                      : "bg-[#fffbf2] text-[#45556c]"
                  }`}
                >
                  {cls}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-[16px] px-[16px] py-[16px]">
        <button 
          onClick={handleReset}
          className="flex-1 h-[42px] rounded-full border border-[#d1d5dc] text-[#45556c] text-[14px] font-medium"
        >
          重置
        </button>
        <button 
          onClick={onClose}
          className="flex-1 h-[42px] rounded-full bg-[#c99619] text-white text-[14px] font-medium"
        >
          确定
        </button>
      </div>
    </div>
  );
}
