import React from 'react';
import svgPaths from "../../imports/svg-consult-fixed";

function IconClose({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="h-[24px] width-[24px] relative cursor-pointer">
      <div className="absolute inset-1/4">
        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p3c506100} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute inset-1/4">
        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p1202b780} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function IconClear() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.33%]">
         <svg className="block size-full" fill="none" viewBox="0 0 19 19">
            <path d={svgPaths.p1667c900} fill="#D1D5DC" stroke="white" strokeWidth="1.67" />
         </svg>
      </div>
      <div className="absolute inset-[37.5%]">
         <svg className="block size-full" fill="none" viewBox="0 0 7 7">
            <path d={svgPaths.p3b45e400} fill="#D1D5DC" />
            <path d={svgPaths.p30e90a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
         </svg>
      </div>
      <div className="absolute inset-[37.5%]">
         <svg className="block size-full" fill="none" viewBox="0 0 7 7">
            <path d={svgPaths.p13cd1d00} fill="#D1D5DC" />
            <path d={svgPaths.p22115880} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
         </svg>
      </div>
    </div>
  );
}

function IconArrow() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p193414e0} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
      </svg>
    </div>
  );
}

export function ConsultModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
       <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={onClose} />
       
       <div className="bg-white w-full rounded-t-[16px] relative z-10 px-[20px] pt-[20px] pb-[34px] animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="flex justify-between items-start mb-[24px]">
             <h3 className="font-medium text-[#0f172b] text-[18px] leading-[28px] tracking-[-0.44px] max-w-[367px]">为了航校更好的服务您，请填写考证需求</h3>
             <div onClick={onClose} className="size-[32px] pt-[4px] px-[4px] cursor-pointer shrink-0">
                <IconClose onClick={() => {}} />
             </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[24px] mt-[24px]">
             {/* Name */}
             <div className="flex justify-between items-center h-[45px] border-b-[0.75px] border-[#f3f4f6]">
                <div className="flex items-center gap-[24px]">
                   <span className="text-[#62748e] text-[16px] leading-[24px] tracking-[-0.31px] w-[64px] shrink-0">您的称呼</span>
                   <span className="text-[#0f172b] text-[18px] leading-[28px] tracking-[-0.44px]">张润泽</span>
                </div>
                <IconClear />
             </div>

             {/* Phone */}
             <div className="flex justify-between items-center h-[45px] border-b-[0.75px] border-[#f3f4f6]">
                <div className="flex items-center gap-[24px]">
                   <span className="text-[#62748e] text-[16px] leading-[24px] tracking-[-0.31px] w-[64px] shrink-0">手机号</span>
                   <span className="text-[#0f172b] text-[18px] leading-[28px] tracking-[-0.44px]">175*****447</span>
                </div>
                <div className="flex items-center gap-[8px]">
                   <IconClear />
                   <span className="text-[#90a1b9] text-[14px] leading-[20px] tracking-[-0.15px]">使用本机号码</span>
                </div>
             </div>

             {/* Address */}
             <div className="flex justify-between items-center h-[41px] border-b-[0.75px] border-[#f3f4f6]">
                <div className="flex items-center gap-[24px] flex-1 overflow-hidden">
                   <span className="text-[#62748e] text-[16px] leading-[24px] tracking-[-0.31px] w-[64px] shrink-0">飞行地址</span>
                   <span className="text-[#0f172b] text-[16px] leading-[24px] tracking-[-0.31px] truncate w-[249px]">鄂尔多斯-大磊·馨视界 - 内蒙古自...</span>
                </div>
                <IconArrow />
             </div>

             {/* Usage */}
             <div className="flex justify-between items-center h-[41px] border-b-[0.75px] border-[#f3f4f6]">
                <div className="flex items-center gap-[24px]">
                   <span className="text-[#62748e] text-[16px] leading-[24px] tracking-[-0.31px] w-[64px] shrink-0">执照用途</span>
                   <span className="text-[#0f172b] text-[16px] leading-[24px] tracking-[-0.31px]">飞行运输作业</span>
                </div>
                <IconArrow />
             </div>
          </div>

          {/* Badges */}
          <div className="flex gap-[24px] mt-[16px] h-[16px]">
             <div className="flex items-center gap-[6px]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                   <path d={svgPaths.p15117300} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                   <path d={svgPaths.p31766200} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                </svg>
                <span className="text-[#62748e] text-[12px] leading-[16px]">无强行推销</span>
             </div>
             <div className="flex items-center gap-[6px]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                   <path d={svgPaths.pd324d00} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                   <path d={svgPaths.p20693040} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                </svg>
                <span className="text-[#62748e] text-[12px] leading-[16px]">不泄漏手机号</span>
             </div>
          </div>

          {/* Agreement */}
          <div className="flex gap-[8px] items-start mt-[24px] mb-[32px] h-[40px]">
             <div className="size-[15px] rounded-[4px] border border-[#d1d5dc] mt-[2.5px] shrink-0" />
             <div className="text-[#90a1b9] text-[12px] leading-[20px]">
                同意
                <span className="text-[#c99619] ml-[4px]">《隐私政策》</span>
                <span className="text-[#c99619] ml-[4px]">《个人信息保护声明》</span>
                <div className="inline-block text-[#c99619]">《中国联通认证服务条款》</div>
             </div>
          </div>

          {/* Submit Button */}
          <div className="bg-[#c99619] h-[52px] rounded-full flex items-center justify-center cursor-pointer shadow-lg" onClick={onClose}>
             <span className="text-white text-[18px] font-medium leading-[28px] tracking-[-0.44px]">提交</span>
          </div>
       </div>
    </div>
  );
}
