import React, { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-v2ulsplseo";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const CATEGORIES = [
  "物流吊运", "航拍影像", "摄影测量", "巡检巡查", 
  "飞行表演", "飞行测试", "农业植保", "空中清洗", "应急安防", "其他"
];

const JOBS = [
  {
    id: 1,
    title: "果树吊运",
    type: "全职",
    salary: "15-18K",
    company: "河源商务",
    count: 5,
    tags: ["CAAC", "吊运经验", "学历不限", "提供设备"],
    recruiter: "大黄蜂官方",
    role: "HR",
    location: "鄂尔多斯 东胜区",
    avatar: "👩",
    date: "2026.1.3"
  },
  {
    id: 2,
    title: "果树吊运",
    type: "全职",
    salary: "15-18K",
    company: "河源商务",
    count: 5,
    tags: ["CAAC", "吊运经验", "学历不限", "提供设备"],
    recruiter: "大黄蜂官方",
    role: "HR",
    location: "鄂尔多斯 东胜区",
    avatar: "👩",
    date: "2026.1.2"
  },
  {
    id: 3,
    title: "果树吊运",
    type: "全职",
    salary: "15-18K",
    company: "河源商务",
    count: 5,
    tags: ["CAAC", "吊运经验", "学历不限", "提供设备"],
    recruiter: "大黄蜂官方",
    role: "HR",
    location: "鄂尔多斯 东胜区",
    avatar: "👩",
    date: "2025.12.28"
  },
  {
    id: 4,
    title: "果树吊运",
    type: "全职",
    salary: "15-18K",
    company: "河源商务",
    count: 5,
    tags: ["CAAC", "吊运经验", "学历不限", "提供设备"],
    recruiter: "大黄蜂官方",
    role: "HR",
    location: "鄂尔多斯 东胜区",
    avatar: "👩",
    date: "2025.12.20"
  }
];

interface JobsPageProps {
  onCityClick?: () => void;
  onJobClick?: (jobId: number) => void;
}

export default function JobsPage({ onCityClick, onJobClick }: JobsPageProps) {
  const [activeCategory, setActiveCategory] = useState("物流吊运");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Filter States
  const [jobType, setJobType] = useState("全部");
  const [sortType, setSortType] = useState("最新发布");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Advanced Filter State
  const [filterState, setFilterState] = useState({
    certificate: '全部',
    experience: '全部',
    equipment: '全部',
    education: '全部'
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const jobTypes = ["全部", "全职", "兼职", "任务派单"];
  const sortTypes = ["最新发布", "认证企业", "薪资排序"];

  const filterOptions = {
    certificate: ["全部", "超视距", "视距内"],
    experience: ["全部", "无经验", "1年以内", "2-3年", "3年以上"],
    equipment: ["全部", "自带设备", "提供设备"],
    education: ["全部", "本科以下", "本科以上"]
  };

  const handleFilterSelect = (category: keyof typeof filterState, value: string) => {
    setFilterState(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleReset = () => {
    setFilterState({
      certificate: '全部',
      experience: '全部',
      equipment: '全部',
      education: '全部'
    });
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#fefbf4] relative overflow-hidden">
      {/* Header Section */}
      <div className="bg-white sticky top-0 z-40">
        {/* Status Bar Placeholder */}
        <div className="h-[40px] w-full" />
        
        {/* Top Bar: Logo & Location */}
        <div className="h-[56px] flex items-center justify-between px-[16px]">
          {/* Logo */}
          <div className="w-[137px] h-[40px] relative">
            <svg className="w-full h-full" viewBox="0 0 137 40" fill="none">
              <path d={svgPaths.p128fe300} fill="url(#paint0_linear_logo)" />
              <path d={svgPaths.p1d710b00} fill="black" />
              <path d={svgPaths.p3ba97580} fill="black" />
              <path d={svgPaths.p3375e200} fill="black" />
              <path d={svgPaths.p7382d80} fill="black" />
              <path d={svgPaths.p14930980} fill="black" />
              <path d={svgPaths.p23aa7e80} fill="black" />
              <path d={svgPaths.p2b8e9600} fill="black" />
              <path d={svgPaths.p1485c900} fill="black" />
              <path d={svgPaths.p1629e570} fill="black" />
              <defs>
                <linearGradient id="paint0_linear_logo" x1="0" y1="20" x2="67.5" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F5C244" />
                  <stop offset="1" stopColor="#F8F9FB" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Location Selector */}
          <div 
            className="h-[32px] rounded-full border border-[#755609] flex items-center px-[13px] gap-[4px] cursor-pointer"
            onClick={onCityClick}
          >
            <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.p1539e500} stroke="#755609" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
              <path d={svgPaths.p37b99980} stroke="#755609" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
            </svg>
            <span className="text-[14px] text-[#755609]">鄂尔多斯</span>
            <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#755609" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
            </svg>
          </div>
        </div>

        {/* Search Bar (Collapsible) */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out px-[16px] ${isSearchOpen ? 'max-h-[50px] mb-2' : 'max-h-0'}`}
        >
          <div className="h-[36px] bg-[#f9fafb] rounded-[18px] flex items-center px-[12px] gap-[8px]">
            <svg className="size-[16px] text-[#9ca3af]" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p12d1c100} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d={svgPaths.p2bd33500} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input 
              type="text" 
              placeholder="搜索职位/公司" 
              className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#9ca3af]"
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-between px-[16px] border-b border-[#e5e7eb]/60 relative h-[44px]">
          <div 
            className="flex-1 overflow-x-auto flex items-center gap-[24px] h-full pr-[40px] [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CATEGORIES.map((cat) => (
              <div 
                key={cat}
                className="relative h-full flex items-center justify-center cursor-pointer shrink-0"
                onClick={() => setActiveCategory(cat)}
              >
                <span className={`text-[14px] ${activeCategory === cat ? 'font-medium text-[#101828]' : 'text-[#777e90]'}`}>
                  {cat}
                </span>
                {activeCategory === cat && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c99619]" />
                )}
              </div>
            ))}
          </div>
          
          {/* Search Icon Toggle */}
          <div 
            className="absolute right-[16px] h-full flex items-center justify-center bg-gradient-to-l from-white via-white to-transparent pl-4 cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg className="size-[20px]" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p12d1c100} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
              <path d={svgPaths.p2bd33500} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="h-[44px] flex items-center border-b border-[#e5e7eb]/60 text-[14px] relative z-50">
          
          {/* Job Type Dropdown */}
          <div className="flex-1 flex justify-center">
            <div 
              className="flex items-center gap-[4px] cursor-pointer"
              onClick={() => toggleDropdown('jobType')}
            >
              <span className={`tracking-[-0.15px] ${activeDropdown === 'jobType' ? 'font-medium text-[#c99619]' : 'font-normal text-[#4a5565]'}`}>
                {jobType}
              </span>
              <svg 
                className={`size-[12px] transition-transform ${activeDropdown === 'jobType' ? 'rotate-180 text-[#c99619]' : 'text-[#4a5565]'}`} 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d={svgPaths.p3efba4e0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex-1 flex justify-center">
            <div 
              className="flex items-center gap-[4px] cursor-pointer"
              onClick={() => toggleDropdown('sort')}
            >
              <span className={`tracking-[-0.15px] ${activeDropdown === 'sort' ? 'font-medium text-[#c99619]' : 'font-normal text-[#4a5565]'}`}>
                {sortType}
              </span>
              <svg 
                className={`size-[12px] transition-transform ${activeDropdown === 'sort' ? 'rotate-180 text-[#c99619]' : 'text-[#4a5565]'}`} 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d={svgPaths.p3efba4e0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Filter Trigger */}
          <div className="flex-1 flex justify-center">
            <div 
              className="flex items-center gap-[4px] cursor-pointer"
              onClick={() => toggleDropdown('filter')}
            >
              <span className={`tracking-[-0.15px] ${activeDropdown === 'filter' ? 'font-medium text-[#c99619]' : 'font-normal text-[#4a5565]'}`}>
                筛选
              </span>
              <svg 
                className={`size-[12px] transition-transform ${activeDropdown === 'filter' ? 'text-[#c99619]' : 'text-[#4a5565]'}`}
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path d={svgPaths.pb23aa00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Dropdown Content */}
          <AnimatePresence>
            {activeDropdown && (
              <>
                {/* Mask */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full h-screen bg-black/50 z-[55]"
                  onClick={() => setActiveDropdown(null)}
                />
                
                {/* Dropdown List */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="absolute top-full left-0 w-full bg-white z-[60] flex flex-col rounded-b-[20px] shadow-[0px_8px_16px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  {activeDropdown === 'filter' ? (
                    <div
                      className="flex flex-col min-h-0"
                      style={{
                        // 下拉从 sticky 头部底边开始，头部总高 = 40+56+44+44 = 184px；底部预留 86px（导航 65px + 边距）
                        // 使用 100dvh 与 MobileLayout 一致，避免移动端地址栏导致 100vh 偏大
                        maxHeight: 'min(70vh, calc(100dvh - 184px - 86px))',
                      }}
                    >
                      <div className="flex-1 min-h-0 p-[20px] overflow-y-auto">
                        {/* Certificate Type */}
                        <div className="mb-6">
                          <p className="text-[15px] font-medium text-[#101828] mb-3">证书类型</p>
                          <div className="flex gap-3 flex-wrap">
                            {filterOptions.certificate.map(opt => (
                              <div
                                key={opt}
                                className={`px-[24px] py-[8px] rounded-full text-[13px] transition-all cursor-pointer border ${
                                  filterState.certificate === opt
                                    ? 'bg-[#fffdf2] border-[#c99619] text-[#755609] font-medium'
                                    : 'bg-[#fffbf0] border-transparent text-[#667085]'
                                }`}
                                onClick={() => handleFilterSelect('certificate', opt)}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="mb-6">
                          <p className="text-[15px] font-medium text-[#101828] mb-3">所需经验</p>
                          <div className="flex gap-3 flex-wrap">
                            {filterOptions.experience.map(opt => (
                              <div
                                key={opt}
                                className={`px-[24px] py-[8px] rounded-full text-[13px] transition-all cursor-pointer border ${
                                  filterState.experience === opt
                                    ? 'bg-[#fffdf2] border-[#c99619] text-[#755609] font-medium'
                                    : 'bg-[#fffbf0] border-transparent text-[#667085]'
                                }`}
                                onClick={() => handleFilterSelect('experience', opt)}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Equipment */}
                        <div className="mb-6">
                          <p className="text-[15px] font-medium text-[#101828] mb-3">设备要求</p>
                          <div className="flex gap-3 flex-wrap">
                            {filterOptions.equipment.map(opt => (
                              <div
                                key={opt}
                                className={`px-[24px] py-[8px] rounded-full text-[13px] transition-all cursor-pointer border ${
                                  filterState.equipment === opt
                                    ? 'bg-[#fffdf2] border-[#c99619] text-[#755609] font-medium'
                                    : 'bg-[#fffbf0] border-transparent text-[#667085]'
                                }`}
                                onClick={() => handleFilterSelect('equipment', opt)}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Education */}
                        <div className="mb-2">
                          <p className="text-[15px] font-medium text-[#101828] mb-3">学历要求</p>
                          <div className="flex gap-3 flex-wrap">
                            {filterOptions.education.map(opt => (
                              <div
                                key={opt}
                                className={`px-[24px] py-[8px] rounded-full text-[13px] transition-all cursor-pointer border ${
                                  filterState.education === opt
                                    ? 'bg-[#fffdf2] border-[#c99619] text-[#755609] font-medium'
                                    : 'bg-[#fffbf0] border-transparent text-[#667085]'
                                }`}
                                onClick={() => handleFilterSelect('education', opt)}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Buttons - 始终贴底，不被挤出视口 */}
                      <div className="shrink-0 p-[16px] border-t border-[#f3f4f6] flex gap-3 bg-white">
                        <button 
                          className="flex-1 h-[44px] rounded-[22px] border border-[#e5e7eb] text-[15px] font-medium text-[#4a5565] bg-white"
                          onClick={handleReset}
                        >
                          重置
                        </button>
                        <button 
                          className="flex-1 h-[44px] rounded-[22px] bg-[#c99619] text-[15px] font-medium text-white"
                          onClick={() => setActiveDropdown(null)}
                        >
                          确定
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Simple Lists for other dropdowns
                    <div className="py-2">
                      {(activeDropdown === 'jobType' ? jobTypes : sortTypes).map((item) => {
                        const isActive = activeDropdown === 'jobType' ? jobType === item : sortType === item;
                        return (
                          <div 
                            key={item}
                            className={`h-[44px] flex items-center px-[20px] transition-colors ${
                              isActive ? 'bg-[#fffbf2]' : 'bg-transparent'
                            }`}
                            onClick={() => {
                              if (activeDropdown === 'jobType') setJobType(item);
                              else setSortType(item);
                              setActiveDropdown(null);
                            }}
                          >
                            <span className={`text-[14px] leading-[20px] tracking-[-0.15px] ${
                              isActive ? 'font-medium text-[#c99619]' : 'font-normal text-[#45556c]'
                            }`}>
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Job List */}
      <div className="flex-1 overflow-y-auto p-[16px] flex flex-col gap-[12px] pb-[80px] md:grid md:grid-cols-2 md:gap-4 md:auto-rows-min">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => onJobClick?.(job.id)} />
        ))}
      </div>
    </div>
  );
}

function JobCard({ job, onClick }: { job: any, onClick?: () => void }) {
  return (
    <div 
      className="bg-white rounded-[10px] p-[16px] border border-[#f3f4f6] flex flex-col gap-[12px] active:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/* Top Row: Title, Tag, Salary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <h3 className="text-[16px] font-semibold text-[#101828]">{job.title}</h3>
          <div className="border border-[#c99619] rounded-[4px] px-[6px] py-[2px]">
            <span className="text-[11px] font-medium text-[#c99619] block leading-none">{job.type}</span>
          </div>
        </div>
        <span className="text-[15px] font-bold text-[#c99619]">{job.salary}</span>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-[8px] text-[13px] text-[#6b7280]">
        <span className="text-[#4a5565] text-[14px]">{job.company}</span>
        <div className="size-[4px] bg-[#99a1af] rounded-full" />
        <span className="text-[#4a5565] text-[14px]">共需{job.count}人</span>
        <div className="size-[4px] bg-[#99a1af] rounded-full" />
        <span className="text-[#4a5565] text-[14px]">{job.date}</span>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-[6px] flex-wrap mt-1">
        {job.tags.map((tag: string, index: number) => (
          <div key={index} className="bg-[#fbf2db] rounded-[4px] px-[8px] py-[4px]">
            <span className="text-[11px] text-[#755609] block leading-none font-normal">{tag}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#f9fafb] w-full my-1" />

      {/* Footer: Recruiter & Location */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="size-[24px] bg-[#edc764] rounded-full flex items-center justify-center text-[12px]">
            {job.avatar}
          </div>
          <div className="flex items-center gap-[4px] text-[13px]">
            <span className="text-[#101828] font-medium text-[14px]">{job.recruiter}</span>
            <span className="text-[#6a7282] text-[14px]">·</span>
            <span className="text-[#6a7282] text-[14px]">{job.role}</span>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="relative size-[16px]">
            <svg className="block size-full" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p14548f00} fill="#C99619" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2d856080} fill="#C99619" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <circle cx="8.00177" cy="6.22104" r="2.66709" fill="#FBF2DB" />
            </svg>
          </div>
          <span className="text-[12px] text-[#6a7282]">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
