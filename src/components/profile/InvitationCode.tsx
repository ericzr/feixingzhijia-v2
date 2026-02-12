import React, { useState } from "react";
import svgPaths from "../../imports/svg-fa272t6lbz";
import successSvgPaths from "../../imports/svg-wky88hhbfd";

interface InvitationCodeProps {
  onBack: () => void;
}

export function InvitationCode({ onBack }: InvitationCodeProps) {
  const [code, setCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (code.trim()) {
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return <InvitationSuccessView onBack={() => setIsSuccess(false)} onStart={onBack} />;
  }

  return (
    <div 
      className="flex flex-col w-full h-full min-h-screen relative overflow-hidden" 
      style={{ backgroundImage: "linear-gradient(rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center px-[12px] pt-[40px] pb-4 relative z-10">
        <button 
          onClick={onBack}
          className="p-[12px] pt-[4px] active:opacity-60 transition-opacity"
          aria-label="返回"
        >
          <div className="w-[7px] h-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
              <path 
                d={svgPaths.p35e48300} 
                stroke="#1D293D" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.33" 
              />
            </svg>
          </div>
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-bold text-[18px] text-[#1d293d] leading-[28px] tracking-[-0.4395px]">邀请码</h1>
        </div>
        <div className="w-[36px]" />
      </div>

      {/* Illustration Area */}
      <div className="flex-1 flex flex-col items-center pt-[50px]">
        <div className="relative w-[254px] h-[239px] flex items-center justify-center rounded-[26px]">
          <div className="relative w-[160px] h-[161px]">
             {/* Background shapes */}
             <div className="absolute inset-[18.44%_86.87%_71.56%_3.13%]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p1f2c7572} fill="#F6E6BA" opacity="0.6" /></svg>
             </div>
             <div className="absolute inset-[21.56%_34.99%_70.93%_57.51%]">
                <svg className="block size-full" fill="none" viewBox="0 0 12 12"><path d={svgPaths.pdfbc580} fill="#EDC764" opacity="0.5" /></svg>
             </div>
             <div className="absolute inset-[75.94%_84.37%_15.31%_6.88%]">
                <svg className="block size-full" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p19dae440} fill="#F6E6BA" opacity="0.6" /></svg>
             </div>
             <div className="absolute inset-[77.82%_1.86%_10.93%_86.89%]">
                <svg className="block size-full" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p35a43600} fill="#EDC764" opacity="0.5" /></svg>
             </div>

             {/* Sparkles/Plus signs */}
             <div className="absolute inset-[24.69%_68.74%_71.56%_27.51%]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 8">
                  <path d="M4 1V7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" />
                  <path d="M1 4H7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" />
                </svg>
             </div>
             <div className="absolute inset-[84.38%_26.25%_11.87%_70%]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 8">
                  <path d="M4 1V7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" />
                  <path d="M1 4H7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" />
                </svg>
             </div>

             {/* Circles */}
             <div className="absolute inset-[83.44%_46.87%_10.31%_46.88%]">
                <svg className="block size-full" fill="none" viewBox="0 0 12 12"><path d={svgPaths.p1f650000} stroke="#EDC764" strokeWidth="2" opacity="0.6" /></svg>
             </div>
             <div className="absolute inset-[41.25%_88.12%_53.75%_6.88%]">
                <svg className="block size-full" fill="none" viewBox="0 0 10 10"><path d={svgPaths.p2c0bea00} stroke="#EDC764" strokeWidth="2" opacity="0.6" /></svg>
             </div>

             {/* Envelope Body */}
             <div className="absolute inset-[33.44%_15.61%_18.43%_16.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 80.5">
                  <path d={svgPaths.p66a8400} fill="#F6E6BA" stroke="#685622" strokeWidth="3" />
                </svg>
             </div>
             <div className="absolute inset-[67.82%_15.61%_18.43%_16.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 22">
                  <path d={svgPaths.pa6a8800} fill="#EDC764" opacity="0.5" />
                </svg>
             </div>
             <div className="absolute inset-[33.44%_15.61%_42.81%_16.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 41">
                  <path d={svgPaths.p153e7980} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="3" />
                </svg>
             </div>

             {/* VIP Badge */}
             <div className="absolute inset-[62.82%_42.49%_22.18%_42.51%] flex items-center justify-center">
                <div className="relative size-full">
                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                      <path d={svgPaths.pcc1b180} fill="#EDC764" stroke="#685622" strokeWidth="2" />
                   </svg>
                   <span className="absolute inset-0 flex items-center justify-center font-bold text-[#685622] text-[10px] leading-none">VIP</span>
                </div>
             </div>

             {/* Decorative lines */}
             <div className="absolute inset-[26.56%_6.24%_70.93%_90.01%]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 6"><path d={svgPaths.p188cc700} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg>
             </div>
             <div className="absolute inset-[32.82%_3.74%_67.18%_92.51%]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 2"><path d="M1 1H7" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg>
             </div>
             <div className="absolute inset-[36.57%_6.24%_60.93%_90.01%]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 6"><path d={svgPaths.p166a91a0} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg>
             </div>
          </div>
        </div>

        {/* Input Form */}
        <div className="w-full px-[32px] mt-[40px] space-y-[20px]">
          <div className="relative w-full h-[48px] bg-[rgba(255,255,255,0.67)] rounded-full border border-[#c99619]">
            <input 
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="请输入您的邀请码，获取大黄蜂所有VIP权益"
              className="w-full h-full px-[16px] bg-transparent text-[#c99619] text-[12px] placeholder:text-[#c99619] outline-none tracking-[-0.1504px]"
            />
          </div>
          <button 
            onClick={handleSubmit}
            className="w-full h-[48px] bg-[#c99619] rounded-[40px] text-white font-medium text-[16px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] active:scale-[0.98] transition-all tracking-[-0.3125px]"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  );
}

function InvitationSuccessView({ onBack, onStart }: { onBack: () => void, onStart: () => void }) {
  return (
    <div className="relative size-full flex flex-col min-h-screen" style={{ backgroundImage: "linear-gradient(rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      {/* Header Area */}
      <div className="flex items-start left-0 p-[12px] pt-[40px] w-full z-10">
        <button onClick={onBack} className="p-[12px] pt-[4px] relative shrink-0">
          <div className="h-[14px] relative shrink-0 w-[7px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
              <path d={successSvgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
            </svg>
          </div>
        </button>
        <div className="flex flex-1 items-center justify-center py-0 relative shrink-0">
          <p className="font-bold leading-[28px] text-[#1d293d] text-[18px] text-center tracking-[-0.4395px]">邀请码</p>
        </div>
        <div className="w-[36px]" />
      </div>

      <div className="flex-1 flex flex-col items-center pt-8 pb-20 overflow-y-auto">
        {/* Success Icon */}
        <div className="relative flex items-center justify-center size-[220px] shrink-0">
          <div className="relative size-[180px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.991 179.991">
              <path d={successSvgPaths.p2888e000} fill="#F6E6BA" opacity="0.6" />
              <path d={successSvgPaths.p826fc00} fill="#EDC764" opacity="0.5" />
              <path d={successSvgPaths.p2f835b00} fill="#F6E6BA" opacity="0.6" />
              <path d={successSvgPaths.p1a67ce80} fill="#EDC764" opacity="0.5" />
              <g opacity="0.75">
                <path d="M49.9975 34.9982V42.9982" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" />
                <path d="M45.9977 38.9981H53.9977" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" />
              </g>
              <g opacity="0.75">
                <path d="M164.991 89.9954V95.9954" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
                <path d="M161.992 92.9952H167.992" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
              </g>
              <path d={successSvgPaths.p93e4c00} fill="#F6E6BA" opacity="0.3" />
              <path d={successSvgPaths.p329e5d00} fill="#EDC764" stroke="#685622" strokeWidth="3.99979" />
              <path d={successSvgPaths.p1c250be0} stroke="#685622" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.99969" />
            </svg>
          </div>
        </div>

        {/* Title and Text */}
        <div className="text-center mt-4 mb-12">
          <h2 className="font-bold leading-[42px] text-[#685622] text-[28px] tracking-[0.3828px]">绑定成功！</h2>
          <div className="mt-2 text-[#8b7355] text-[16px] leading-[24px] tracking-[-0.3125px]">
            <p>恭喜您已成功绑定会员权益</p>
            <p>尊享专属特权与优惠</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="relative w-[340px] rounded-[20px] px-[26px] pt-[26px] pb-[26px] flex flex-col gap-[16px] mb-[24px] shrink-0 overflow-hidden" style={{ backgroundImage: "linear-gradient(147.095deg, rgba(237, 199, 100, 0.3) 0%, rgba(246, 230, 186, 0.3) 100%)" }}>
          <div aria-hidden="true" className="absolute border-[#edc764] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          
          <div className="flex items-center justify-between relative">
            <p className="text-[#685622] text-[14px] tracking-[-0.1504px]">会员等级</p>
            <p className="font-bold text-[#c99619] text-[18px] tracking-[-0.4395px]">VIP会员</p>
          </div>
          
          <div className="flex items-center justify-between relative">
            <p className="text-[#685622] text-[14px] tracking-[-0.1504px]">有效期至</p>
            <p className="text-[#8b7355] text-[16px] tracking-[-0.3125px]">2026-12-31</p>
          </div>

          {/* Benefits Grid */}
          <div className="relative pt-[16.6px] mt-2">
             <div aria-hidden="true" className="absolute border-[#edc764] border-solid border-t-[0.658px] inset-x-0 top-0 pointer-events-none" />
             <div className="flex items-start justify-between px-1">
                <BenefitItem 
                  label="精简题库" 
                  icon={
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
                      <clipPath id="clip_doc"><rect height="18" width="18" /></clipPath>
                      <g clipPath="url(#clip_doc)">
                        <path d={successSvgPaths.p32e59c00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d={successSvgPaths.p15ad7800} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M7.49904 6.74892H5.99904" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M11.999 9.74844H5.99904" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M11.999 12.748H5.99904" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                      </g>
                    </svg>
                  } 
                />
                <BenefitItem 
                  label="真实考场" 
                  icon={
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
                      <clipPath id="clip_monitor"><rect height="18" width="18" /></clipPath>
                      <g clipPath="url(#clip_monitor)">
                        <path d={successSvgPaths.p2ff59d00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M5.99904 15.7475H11.999" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M8.99856 12.748V15.748" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                      </g>
                    </svg>
                  } 
                />
                <BenefitItem 
                  label="懒人听题" 
                  icon={
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
                      <path d={successSvgPaths.p2c9d7000} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                    </svg>
                  } 
                />
                <BenefitItem 
                  label="速记口诀" 
                  icon={
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
                      <clipPath id="clip_bulb"><rect height="18" width="18" /></clipPath>
                      <g clipPath="url(#clip_bulb)">
                        <path d={successSvgPaths.p27acba00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M6.74894 13.4978H11.2489" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d="M7.49882 16.4974H10.4988" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                      </g>
                    </svg>
                  } 
                />
                <BenefitItem 
                  label="考前密卷" 
                  icon={
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
                      <clipPath id="clip_lock"><rect height="18" width="18" /></clipPath>
                      <g clipPath="url(#clip_lock)">
                        <path d={successSvgPaths.p361d7af0} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                        <path d={successSvgPaths.p2fe12200} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
                      </g>
                    </svg>
                  } 
                />
             </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={onStart}
          className="w-[340px] h-[56px] bg-gradient-to-r from-[#edc764] to-[#c99619] rounded-[28px] shadow-[0px_4px_12px_0px_rgba(237,199,100,0.4)] flex items-center justify-center relative active:scale-[0.98] transition-transform shrink-0"
        >
          <span className="font-medium text-[#685622] text-[18px] tracking-[-0.4395px]">开始使用</span>
        </button>
      </div>

      {/* Footer - Restored for Success Page */}
      <div className="pb-10 text-center shrink-0">
        <p className="text-[#afa199] text-[10px] tracking-normal font-normal">我的邀请码：88888888</p>
      </div>
    </div>
  );
}

function BenefitItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-[8.7px]">
      <div className="relative size-[40px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ed] to-[#ffedd5] rounded-full" />
        <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
        <div className="relative size-[18px] z-10">
          {icon}
        </div>
      </div>
      <p className="text-[#92400e] text-[10px] font-medium tracking-[0.1172px]">{label}</p>
    </div>
  );
}
