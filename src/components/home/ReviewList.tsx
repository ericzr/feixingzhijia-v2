import React from 'react';
import svgPaths from "../../imports/svg-review-list";

// Placeholder images
import imgAvatar from "figma:asset/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png"; 

function IconBack() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
         <path d="M12.5 15.8333L6.66667 10L12.5 4.16667" stroke="#1D293D" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function CircularProgress({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center gap-[4px] relative w-[60px]">
       <div className="size-[56px] relative">
          <svg className="size-full -rotate-90" viewBox="0 0 56 56">
             <circle cx="28" cy="28" r="26" stroke="#FBF2DB" strokeWidth="4" fill="none" />
             <circle cx="28" cy="28" r="26" stroke="#C99619" strokeWidth="4" fill="none" strokeDasharray="163.36" strokeDashoffset={163.36 * (1 - value/100)} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center -space-y-1">
             <div className="flex items-start">
                <span className="text-[#C99619] text-[13px] font-bold">{value}</span>
                <span className="text-[#C99619] text-[9px] font-bold mt-[2px]">%</span>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-[2px]">
           {/* Icon based on label? Or generic icon */}
           <span className="text-[#6A7282] text-[11px]">{label}</span>
       </div>
    </div>
  );
}

function ReviewItem() {
    return (
        <div className="flex gap-[12px] py-[24px] border-b border-[#F9FAFB] last:border-0">
             {/* Avatar */}
             <div className="size-[40px] rounded-full bg-[#E5E7EB] shrink-0 overflow-hidden">
                {/* <img src={imgAvatar} /> */}
             </div>

             <div className="flex-1 flex flex-col gap-[12px]">
                 {/* Header */}
                 <div className="flex justify-between items-start">
                     <div className="flex flex-col gap-[4px]">
                         <span className="text-[#0F172B] text-[15px] font-bold">勤勉的芒果</span>
                         <div className="flex items-center gap-[8px]">
                             <span className="text-[#C99619] text-[13px] font-bold">5.0 分</span>
                             <span className="text-[#99A1AF] text-[11px]">2025-08-06</span>
                             <span className="text-[#99A1AF] text-[11px]">内蒙古区</span>
                         </div>
                     </div>
                 </div>

                 {/* Content */}
                 <p className="text-[#1D293D] text-[13px] leading-[21px] whitespace-pre-wrap">
                    考无人机驾照就去内蒙古亚斯特科技找刘一横校长报名，讲解细致，服务周到。
                    服务态度：好
                 </p>

                 {/* Tags */}
                 <div className="flex flex-col gap-[2px]">
                     <span className="text-[#45556C] text-[13px]">服务态度：好</span>
                     <span className="text-[#45556C] text-[13px]">学车体验：满意</span>
                     <span className="text-[#45556C] text-[13px]">通过率：高</span>
                     <span className="text-[#45556C] text-[13px]">规范收费：正规</span>
                 </div>

                 {/* Images */}
                 <div className="size-[112px] bg-[#F3F4F6] rounded-[10px]"></div>

                 {/* Tags Row */}
                 <div className="flex flex-wrap gap-[8px]">
                     {["品牌飞机", "约课方便", "有接送", "通过率高", "服务好"].map(t => (
                         <div key={t} className="bg-[#F9F9F9] px-[8px] py-[4px] rounded-[4px] flex items-center gap-[4px]">
                             <span className="text-[#6A7282] text-[11px]">{t}</span>
                             {t === "服务好" && (
                                 <svg className="size-[10px]" viewBox="0 0 10 10" fill="none">
                                     <path d={svgPaths.p52b4540} stroke="#99A1AF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                             )}
                         </div>
                     ))}
                 </div>

                 {/* Additional Review */}
                 <div className="mt-[4px]">
                     <span className="text-[#C99619] text-[13px] font-bold mr-[4px]">当天追评:</span>
                     <span className="text-[#1D293D] text-[13px] leading-[21px]">
                        考驾照就去鄂尔多斯市志通驾校找杨建君校长报名，讲解细致，服务周到。金牌教练，全国五强教练
                     </span>
                 </div>
             </div>
        </div>
    );
}

export function ReviewList({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#FEFBF4] h-full flex flex-col relative overflow-hidden">
       {/* Top Header Background (Yellow Gradient) */}
       <div className="absolute top-0 left-0 w-full h-[207px] bg-gradient-to-b from-[#C99619] to-[#F5C244] z-0" />
       
       {/* Navbar */}
       <div className="relative z-10 flex items-center justify-center h-[44px] mt-[40px] px-[16px]">
           <button onClick={onBack} className="absolute left-[16px] flex items-center justify-center size-[36px] -ml-[8px]">
               <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p35e48300} stroke="#1D293D" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               {/* Use Icon3 from import if needed, but path above looks correct for back arrow */}
           </button>
           <h1 className="text-[#1D293D] text-[17px] font-bold">学员评价</h1>
       </div>

       {/* Main Card Container */}
       <div className="relative z-10 px-[12px] mt-[12px] flex-1 overflow-y-auto no-scrollbar pb-[40px]">
           {/* Header Info Card */}
           <div className="bg-white rounded-[14px] p-[16px] shadow-sm mb-[12px]">
               <h2 className="text-[#1D293D] text-[16px] font-bold mb-[12px]">内蒙古亚斯特科技</h2>
               
               <div className="flex items-center justify-between mb-[20px]">
                   <div className="flex flex-col items-start gap-[4px]">
                       <div className="flex items-end gap-[4px]">
                           <span className="text-[#C99619] text-[32px] font-bold leading-none">4.8</span>
                           <span className="text-[#C99619] text-[14px] font-medium mb-[4px]">分</span>
                       </div>
                       <div className="flex gap-[2px]">
                           {[...Array(5)].map((_, i) => (
                               <svg key={i} className="size-[10px]" viewBox="0 0 10 10" fill="none">
                                   <path d={svgPaths.p312dd300} fill="#C99619" stroke="#C99619" strokeWidth="0.8"/>
                               </svg>
                           ))}
                       </div>
                   </div>
                   
                   <div className="flex gap-[6px]">
                       <CircularProgress value={94} label="教学服务" />
                       <CircularProgress value={94} label="环境设施" />
                       <CircularProgress value={94} label="练机速度" />
                   </div>
               </div>

               {/* Tags */}
               <div className="flex gap-[8px] overflow-x-auto no-scrollbar pb-[4px]">
                   {["服务好 111", "收费透明 106", "通过率高 106"].map(t => (
                       <div key={t} className="bg-[#FBF2DB] rounded-full px-[12px] py-[6px] whitespace-nowrap">
                           <span className="text-[#C99619] text-[12px]">{t}</span>
                       </div>
                   ))}
               </div>
           </div>

           {/* Review List Card */}
           <div className="bg-white rounded-t-[14px] shadow-sm min-h-[500px] p-[16px]">
               {/* Filter Tabs */}
               <div className="flex gap-[16px] overflow-x-auto no-scrollbar pb-[12px] border-b border-[#F9FAFB] mb-[12px]">
                   <div className="flex flex-col items-center gap-[4px] shrink-0">
                       <span className="text-[#0F172B] text-[14px] font-bold">全部</span>
                       <div className="w-[16px] h-[3px] bg-[#1D293D] rounded-full" />
                   </div>
                   {["最新", "好评 127", "晒图 48", "差评 7", "中评 1", "追评 1"].map(t => (
                       <span key={t} className="text-[#6A7282] text-[14px] font-medium shrink-0 whitespace-nowrap">{t}</span>
                   ))}
               </div>

               {/* Reviews */}
               <div className="flex flex-col gap-[24px]">
                   <ReviewItem />
                   {/* More items would go here */}
                   
                   {/* Footer Loading */}
                   <div className="py-[24px] text-center border-t border-[#F9FAFB]">
                       <span className="text-[#99A1AF] text-[14px]">更多评价加载中...</span>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
}
