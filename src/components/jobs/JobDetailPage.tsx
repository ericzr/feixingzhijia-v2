import React from "react";
import svgPaths from "../../imports/svg-wbfbw8ox5j";
import imgCompanyLogo from "figma:asset/0b0f7af66b3cb375f80f9d150128fedbc168e3d7.png";
import imgMap from "figma:asset/76f163a40e2d991fc7ab847f3f1ab4100b066d93.png";

interface JobDetailPageProps {
  onBack?: () => void;
}

export default function JobDetailPage({ onBack }: JobDetailPageProps) {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Header with Sticky and Safe Area */}
      <div className="flex-none z-50 bg-white">
        {/* Safe Area Spacer (Status Bar) */}
        <div className="h-[40px] w-full bg-white" />
        
        {/* Navbar */}
        <div className="h-[44px] flex items-center justify-between px-[16px] bg-white relative">
          <button onClick={onBack} className="w-[36px] h-[28px] flex items-center justify-center">
            <svg className="w-[9.33px] h-[16.33px]" viewBox="0 0 9.33737 16.3325" fill="none">
              <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
            </svg>
          </button>
          <div className="flex items-center gap-[16px]">
            <button className="w-[32px] h-[32px] flex items-center justify-center">
               <svg className="w-[21px] h-[21px]" viewBox="0 0 21 21" fill="none">
                  <path d={svgPaths.pd772b00} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               </svg>
            </button>
            <button className="w-[20px] h-[20px] flex items-center justify-center">
               <svg className="w-full h-full" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99905 1.66651V12.4988" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
                  <path d={svgPaths.p34ac9700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
                  <path d={svgPaths.p2292fba0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
               </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto px-[16px] pt-[16px] pb-[100px] flex flex-col gap-[24px]">
        {/* Job Header Info */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between items-start">
             <h1 className="text-[#101828] text-[24px] font-medium leading-[32px] tracking-[0.07px]">果树吊运</h1>
             <span className="text-[#c99619] text-[16px] font-medium leading-[24px] tracking-[-0.31px]">15-18K</span>
          </div>
          
          <div className="flex items-center gap-[16px]">
            {/* Location */}
            <div className="flex items-center gap-[4px]">
               <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p16f85b80} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p72db400} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               </svg>
               <span className="text-[#4a5565] text-[14px] leading-[20px] tracking-[-0.15px]">内蒙古·鄂尔多斯市</span>
            </div>
            {/* Experience */}
            <div className="flex items-center gap-[4px]">
               <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p1bb4dc00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p2b21b200} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               </svg>
               <span className="text-[#4a5565] text-[14px] leading-[20px] tracking-[-0.15px]">一年以上</span>
            </div>
            {/* Education */}
            <div className="flex items-center gap-[4px]">
               <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p1fe71380} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d="M14.6666 6.66665V10.6666" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p1082bd00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
               </svg>
               <span className="text-[#4a5565] text-[14px] leading-[20px] tracking-[-0.15px]">不限</span>
            </div>
          </div>
        </div>

        {/* Recruiter Card */}
        <div className="border border-[#e5e7eb] rounded-[10px] p-[16px] flex items-center justify-between">
           <div className="flex items-center gap-[12px]">
              <img src={imgCompanyLogo} alt="Company Logo" className="w-[48px] h-[48px] rounded-[10px] object-cover" />
              <div className="flex flex-col">
                 <span className="text-[#101828] text-[16px] font-medium leading-[24px] tracking-[-0.31px]">大黄蜂</span>
                 <span className="text-[#4a5565] text-[14px] leading-[20px] tracking-[-0.15px]">大黄蜂·HR</span>
              </div>
           </div>
           <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p302d060} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66" />
           </svg>
        </div>

        {/* Job Details Section */}
        <div className="border-0 rounded-[10px] flex flex-col gap-[16px]">
           <h2 className="text-[#101828] text-[18px] font-medium leading-[28px] tracking-[-0.44px]">职位详情</h2>
           
           {/* Tags */}
           <div className="flex flex-wrap gap-[8px]">
              <div className="bg-[#fbf2db] rounded-[4px] h-[28px] px-[12px] flex items-center justify-center">
                 <span className="text-[#685622] text-[14px] leading-[20px] tracking-[-0.15px]">CAAC视距内</span>
              </div>
              <div className="bg-[#fbf2db] rounded-[4px] h-[28px] px-[12px] flex items-center justify-center">
                 <span className="text-[#685622] text-[14px] leading-[20px] tracking-[-0.15px]">吊运经验</span>
              </div>
              <div className="bg-[#fbf2db] rounded-[4px] h-[28px] px-[12px] flex items-center justify-center">
                 <span className="text-[#685622] text-[14px] leading-[20px] tracking-[-0.15px]">提供设备</span>
              </div>
              <div className="bg-[#fbf2db] rounded-[4px] h-[28px] px-[12px] flex items-center justify-center">
                 <span className="text-[#685622] text-[14px] leading-[20px] tracking-[-0.15px]">全职工作</span>
              </div>
           </div>

           {/* Description */}
           <div className="flex flex-col gap-[12px]">
              <h3 className="text-[#101828] text-[16px] font-normal leading-[24px] tracking-[-0.31px]">职位描述：</h3>
              <div className="text-[#364153] text-[14px] leading-[22.75px] tracking-[-0.15px]">
                <p className="mb-0">需要无人机飞手团队，执行山区大型果树吊运项目。需将成年果树（含部分古树）安全转运至新园区，直线距离500米-2公里，地形复杂（丘陵、坡地），车辆无法直达。要求具备特种吊运经验，确保作业高效、树木成活与人员安全。</p>
                <p className="mb-0 mt-4">核心工作内容：</p>
                <ol className="list-decimal pl-[20px] m-0">
                  <li className="pl-[2px]">操作大载重无人机（直升机/多旋翼），完成果树的起吊、转运与精准降落。</li>
                  <li className="pl-[2px]">配合地面团队完成树木捆扎、挂钩、定位及解钩。</li>
                  <li className="pl-[2px]">按现场指挥与安全规程飞行。</li>
                  <li className="pl-[2px]">负责无人机调试、维护与飞行监控。</li>
                  <li className="pl-[2px]">记录每日飞行日志。</li>
                </ol>
              </div>
           </div>
        </div>

        {/* Company Location Card */}
        <div className="border border-[#e5e7eb] rounded-[10px] flex flex-col shrink-0 overflow-hidden bg-white">
           <div className="flex items-center justify-between p-[16px] bg-white h-[76px]">
              <div className="flex flex-col">
                 <span className="text-[#101828] text-[16px] font-medium leading-[24px] tracking-[-0.31px]">鄂尔多斯河源商务有限公司</span>
                 <span className="text-[#4a5565] text-[14px] leading-[20px] tracking-[-0.15px]">果园</span>
              </div>
              <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
                 <path d={svgPaths.p302d060} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66" />
              </svg>
           </div>
           
           <div className="w-full h-[256px] relative">
              <img src={imgMap} alt="Map" className="w-full h-full object-cover" />
              {/* Location Tag Overlay */}
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 bg-[#101828] text-white text-[14px] px-[16px] py-[8px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] whitespace-nowrap">
                 内蒙古鄂尔多斯市东胜区罕台镇
              </div>
           </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-[#f3f4f6] px-[16px] h-[76px] flex items-center gap-[16px] z-50">
        <button className="flex-1 h-[44px] rounded-full bg-[#755609] flex items-center justify-center gap-[8px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]">
           <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p10c57700} fill="white" />
              <path d={svgPaths.p6044b00} fill="white" />
           </svg>
           <span className="text-white text-[15px] font-bold">投递简历</span>
        </button>
        <button className="flex-1 h-[44px] rounded-full bg-[#c99619] flex items-center justify-center gap-[8px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)]">
           <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p3302df00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16" />
           </svg>
           <span className="text-white text-[15px] font-bold">电话咨询</span>
        </button>
      </div>
    </div>
  );
}
