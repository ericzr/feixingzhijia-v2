import React, { useState } from 'react';
import svgPathsClass from "../../imports/svg-nsotalkwkd";
import svgPathsIntro from "../../imports/svg-2z6v012q38";

export function SchoolIntroductionDetail({ onBack }: { onBack: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = "鄂尔多斯志通驾驶员培训有限公司是目前东胜区地理位置最中心的一家驾校。方便，省时。训练场地位于锦绣苑小区与十一完小之间，实实在在极大方便了市民朋友就近练车。只为让每一位学员都能享受优质、便捷的驾驶培训服务。我们拥有资深的教练团队和完善的教学设施，致力于培养高素质的驾驶人才。欢迎各界朋友前来报名学习。";
  const shortText = "鄂尔多斯志通驾驶员培训有限公司是目前东胜区地理位置最中心的一家驾校。方便，省时。训练场地位于锦绣苑小区与十一完小之间，实实在在极大方便了市民朋友就近练车。只...";

  return (
    <div className="flex flex-col h-full bg-white relative">
       {/* Header */}
       <div className="flex justify-between items-center px-[16px] pt-[20px] h-[68px] border-b border-[#f3f4f6]">
          <button onClick={onBack} className="size-[36px] flex items-center justify-center -ml-[8px]">
             <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <path d={svgPathsClass.p7100a80} stroke="#0f172b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8 10H4.2" stroke="#0f172b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172b]">亚斯特科技</div>
          <div className="w-[36px]" /> {/* Spacer */}
       </div>

       {/* Content Scroll */}
       <div className="flex-1 overflow-y-auto px-[16px] py-[20px] flex flex-col gap-[30px]">
          {/* 1. Intro Section */}
          <div className="flex flex-col gap-[12px]">
             <h3 className="text-[#1d293d] text-[18px] font-bold leading-[28px] tracking-[-0.44px]">航校简介</h3>
             <div className="flex flex-col gap-[8px]">
                <p className="text-[#45556c] text-[14px] leading-[22.75px] tracking-[-0.15px] text-justify">
                   {isExpanded ? fullText : shortText}
                </p>
                <div className="flex justify-end">
                   <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-[2px] cursor-pointer">
                      <span className="text-[#90a1b9] text-[12px]">{isExpanded ? '收起' : '查看全部'}</span>
                      <svg className={`size-[16px] transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                         <path d={svgPathsIntro.p5fe1780} stroke="#90A1B9" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </button>
                </div>
             </div>
          </div>

          {/* 2. Facilities Section */}
          <div className="flex flex-col gap-[16px]">
             <h3 className="text-[#1d293d] text-[18px] font-bold leading-[28px] tracking-[-0.44px]">航校设施</h3>
             <div className="grid grid-cols-5 gap-y-[23px]">
                {[
                   { label: "飞行训练场", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 22" fill="none">
                         <path d={svgPathsIntro.p25ad7dc0} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.6"/>
                         <path d={svgPathsIntro.p26f05a80} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.6"/>
                      </svg>
                   )},
                   { label: "模拟飞行教室", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.pbb72a80} fill="#D1D5DC"/>
                      </svg>
                   )},
                   { label: "维修保养区", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.p2319ce00} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.6"/>
                      </svg>
                   )},
                   { label: "理论教室", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.p1235300} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.4"/>
                         <path d={svgPathsIntro.p215af5f1} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.4"/>
                      </svg>
                   )},
                   { label: "电脑室", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.p38960c00} stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M7.99614 20.9899H15.9923" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M11.9942 16.9918V20.9899" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   )},
                   { label: "学员休息区", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.p2c7c8780} stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M16.9918 18.9908V20.9908" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M1.99903 11.9942H21.9894" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M6.99662 18.9908V20.9908" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d={svgPathsIntro.p1a4f1b00} stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   )},
                   { label: "食堂/咖啡吧", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d="M9.99517 1.99903V3.99903" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M13.9932 1.99903V3.99903" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d={svgPathsIntro.p3daf0e00} stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M5.9971 1.99903V3.99903" stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   )},
                   { label: "学员宿舍", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d="M11.9942 9.99517H12.0042" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M11.9942 13.9932H12.0042" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M11.9942 5.9971H12.0042" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M15.9923 9.99517H16.0023" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M15.9923 13.9932H16.0023" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M15.9923 5.9971H16.0023" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M7.99614 9.99517H8.00614" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M7.99614 13.9932H8.00614" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M7.99614 5.9971H8.00614" stroke="#D1D5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d={svgPathsIntro.p238e6c00} stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d={svgPathsIntro.p169a1680} stroke="#D1D5DC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   )},
                   { label: "停车场", icon: (
                      <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                         <path d={svgPathsIntro.p2f6efd80} fill="#D1D5DC" stroke="#D1D5DC" strokeWidth="0.6"/>
                      </svg>
                   )},
                ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center gap-[8px]">
                      {item.icon}
                      <span className="text-[#99a1af] text-[12px] whitespace-nowrap">{item.label}</span>
                   </div>
                ))}
             </div>
          </div>

          {/* 3. Basic Info */}
          <div className="flex flex-col gap-[16px]">
             <h3 className="text-[#1d293d] text-[18px] font-bold leading-[28px] tracking-[-0.44px]">航校基础信息</h3>
             <div className="flex flex-col gap-[12px]">
                {[
                   { label: "运营主体:", value: "鄂尔多斯市志通驾驶员培训有限公司" },
                   { label: "注册运营地址:", value: "内蒙古自治区鄂尔多斯市东胜区交通街道伊化北路15号" },
                   { label: "内容生产类别:", value: "发布驾培服务信息" },
                   { label: "统一社会信用代码:", value: "91150602MA0MYGRT58" },
                   { label: "联系方式:", value: "42942936@qq.com" },
                   { label: "IP属地:", value: "内蒙古自治区" },
                ].map((row, i) => (
                   <div key={i} className="flex gap-[8px] items-start">
                      <span className="text-[#62748e] text-[14px] shrink-0">{row.label}</span>
                      <span className="text-[#1d293d] text-[14px]">{row.value}</span>
                   </div>
                ))}
             </div>
          </div>

          {/* 4. Scale */}
          <div className="flex flex-col gap-[16px]">
             <h3 className="text-[#1d293d] text-[18px] font-bold leading-[28px] tracking-[-0.44px]">航校规模</h3>
             <div className="flex gap-[40px]">
                <span className="text-[#1d293d] text-[14px]">教练: 16人</span>
                <span className="text-[#1d293d] text-[14px]">近一年学员数: 588人</span>
             </div>
          </div>

          {/* 5. Business Info */}
          <div className="flex flex-col gap-[16px]">
             <h3 className="text-[#1d293d] text-[18px] font-bold leading-[28px] tracking-[-0.44px]">航校工商信息</h3>
             <div className="flex flex-col gap-[12px]">
                {[
                   { label: "法人代表:", value: "杜欣宇" },
                   { label: "核准机构:", value: "鄂尔多斯市东胜区市场监督局" },
                   { label: "注册时间:", value: "2014-09-02" },
                   { label: "工商注册号:", value: "91310113MADQ649729" },
                   { label: "工商注册号:", value: "91310113MADQ649729" },
                   { label: "经营范围:", value: "培训教育、民用无人器" },
                ].map((row, i) => (
                   <div key={i} className="flex gap-[8px] items-start">
                      <span className="text-[#62748e] text-[14px] shrink-0">{row.label}</span>
                      <span className="text-[#1d293d] text-[14px]">{row.value}</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}
