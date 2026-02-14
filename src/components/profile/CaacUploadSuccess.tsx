import React from 'react';
import svgPaths from "../../imports/svg-31py3suof4";

interface CaacUploadSuccessProps {
  onBackToHome: () => void;
}

export function CaacUploadSuccess({ onBackToHome }: CaacUploadSuccessProps) {
  return (
    <div className="relative h-full flex flex-col font-sans overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col items-center px-[24px] pt-[80px] pb-[120px]">
        
        {/* Success Illustration Section - Precisely 1:1 with Figma sizing */}
        <div className="relative size-[180px] mb-[12px] shrink-0" data-name="SuccessIcon">
          <svg className="block size-full" fill="none" viewBox="0 0 179.991 179.991">
            <g id="Icon">
              <path d={svgPaths.p2888e000} fill="#F6E6BA" opacity="0.6" />
              <path d={svgPaths.p826fc00} fill="#EDC764" opacity="0.5" />
              <path d={svgPaths.p2f835b00} fill="#F6E6BA" opacity="0.6" />
              <path d={svgPaths.p1a67ce80} fill="#EDC764" opacity="0.5" />
              
              <g id="Group" opacity="0.75">
                <path d="M49.9975 34.9982V42.9982" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" />
                <path d="M45.9977 38.9981H53.9977" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" />
              </g>
              <g id="Group_2" opacity="0.75">
                <path d="M164.991 89.9954V95.9954" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
                <path d="M161.992 92.9952H167.992" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
              </g>
              
              <path d={svgPaths.p93e4c00} fill="#F6E6BA" opacity="0.3" />
              <path d={svgPaths.p329e5d00} fill="#EDC764" stroke="#685622" strokeWidth="3.99979" />
              <path d={svgPaths.p1c250be0} stroke="#685622" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.99969" />
            </g>
          </svg>
        </div>

        {/* Heading & Paragraph - Exact match to Figma font styles */}
        <h1 className="font-bold text-[#685622] text-[28px] tracking-[0.38px] mb-[16px] text-center">证书上传成功！</h1>
        <div className="text-[#8b7355] text-[16px] leading-[24px] tracking-[-0.31px] text-center mb-[42px]">
          <p>您的CAAC证书已成功提交</p>
          <p>我们将在1-2个工作日内完成审核</p>
        </div>

        {/* Info Card - 340px max width as per Figma */}
        <div className="w-full max-w-[340px] rounded-[20px] p-[26px] relative flex flex-col gap-[16px] mb-[24px] shrink-0" style={{ backgroundImage: "linear-gradient(142.323deg, rgba(237, 199, 100, 0.3) 0%, rgba(246, 230, 186, 0.3) 100%)" }}>
          <div aria-hidden="true" className="absolute border-[#edc764] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          
          <div className="flex items-center justify-between">
            <span className="text-[#685622] text-[14px]">证书类型</span>
            <span className="font-medium text-[#c99619] text-[16px]">CAAC证书</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#685622] text-[14px]">上传时间</span>
            <span className="text-[#8b7355] text-[14px]">2026-01-24 14:30</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#685622] text-[14px]">审核状态</span>
            <div className="flex items-center gap-[6px]">
              <div className="size-[8px] bg-[#edc764] rounded-full" />
              <span className="text-[#c99619] text-[14px]">审核中</span>
            </div>
          </div>

          <div className="h-[0.66px] bg-[#edc764]/40 mt-[4px]" />
          
          <div className="flex flex-col gap-[4px] text-[#8b7355] text-[12px] leading-[20px]">
            <p className="mb-[2px]">审核通过后，您将获得：</p>
            <p>✓ 专业资质认证标识</p>
            <p>✓ 项目接单专属权益</p>
            <p>✓ 优先服务通道</p>
          </div>
        </div>

        {/* Notification Box */}
        <div className="w-full max-w-[340px] bg-[rgba(246,230,186,0.4)] rounded-[16px] p-[16px] relative flex gap-[12px] items-start shrink-0">
          <div aria-hidden="true" className="absolute border-[#edc764] border-[0.66px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="size-[20px] shrink-0 mt-[2px]">
             <svg className="block size-full" fill="none" viewBox="0 0 20 20">
               <path d={svgPaths.p15a5b000} stroke="#C99619" strokeWidth="2" />
               <path d="M10 6V11" stroke="#C99619" strokeLinecap="round" strokeWidth="2" />
               <circle cx="10" cy="14" r="1" fill="#C99619" />
             </svg>
          </div>
          <p className="text-[#8b7355] text-[12px] leading-[18px]">审核结果将通过短信或站内消息通知您，请注意查收</p>
        </div>
      </div>

      {/* Fixed Bottom Action Button - Shadow and Gradient exactly as Figma */}
      <div className="absolute bottom-0 left-0 right-0 p-[24px] pb-[40px] bg-gradient-to-t from-[#FEFBF4] via-[#FEFBF4] to-transparent pt-[40px] pointer-events-none">
        <button 
          onClick={onBackToHome}
          className="pointer-events-auto w-full max-w-[340px] mx-auto bg-gradient-to-r from-[#edc764] to-[#c99619] rounded-[28px] shadow-[0px_4px_12px_rgba(237,199,100,0.4)] flex items-center justify-center cursor-pointer active:scale-[0.98] transition-all"
          style={{ height: "48px", minHeight: "48px" }}
        >
          <span className="font-medium text-[#685622] text-[18px] tracking-[-0.44px]">返回首页</span>
        </button>
      </div>
    </div>
  );
}
