import React from 'react';
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import svgPaths from "../../imports/svg-28a56f6xyf";

interface CaacCertifiedProps {
  onBack: () => void;
  onUpdate: () => void;
  onViewImage: () => void;
}

export function CaacCertified({ onBack, onUpdate, onViewImage }: CaacCertifiedProps) {
  return (
    <div className="relative size-full flex flex-col flex-1 min-h-0 font-sans overflow-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] h-[44px] shrink-0 mt-[40px] relative z-10">
        <button 
          onClick={onBack}
          className="size-[36px] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
        >
          <svg className="w-[10px] h-[16px]" fill="none" viewBox="0 0 10 16">
            <path d="M8.5 1L1.5 8L8.5 15" stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33" />
          </svg>
        </button>
        <h1 className="text-[18px] font-bold text-[#685622] tracking-[-0.44px]">CAAC证书</h1>
        <div className="size-[36px]" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-[24px] pb-[40px]">
        {/* Illustration Section - 1:1 Reconstruction from Figma */}
        <div className="flex flex-col items-center mt-[22px] mb-[32px]">
          <div className="relative shrink-0 size-[179.991px]" data-name="Icon">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              {/* Decorative Background Circles */}
              <div className="absolute inset-[12.7%_68.33%_77.3%_21.67%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3896100} fill="#F6E6BA" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[18.33%_12.78%_73.89%_79.44%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p3296bc80} fill="#EDC764" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute inset-[76.11%_81.67%_15%_9.44%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p30769300} fill="#F6E6BA" opacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[72.22%_8.33%_16.67%_80.56%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p25566600} fill="#EDC764" opacity="0.5" />
                </svg>
              </div>
              
              {/* Top Left Star */}
              <div className="absolute inset-[23.25%_81.67%_67.86%_9.45%]" data-name="Group">
                <div className="absolute inset-[-14.82%_-13.36%_-13.58%_-13.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.276 20.5436">
                    <g opacity="0.8">
                      <path d={svgPaths.p2db22340} fill="#F6E6BA" stroke="#C99619" strokeWidth="1.49992" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Bottom Decoration Plus */}
              <div className="absolute inset-[83.33%_26.11%_13.33%_70.56%]" data-name="Group">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9999 7.9999">
                    <g opacity="0.7">
                      <path d="M3.9998 0.999948V6.99995" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
                      <path d="M0.999948 3.99981H6.99995" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Right Side Decoration Ring */}
              <div className="absolute bottom-[44.44%] left-[88.89%] right-[5.56%] top-1/2" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9999 11.9999">
                    <path d={svgPaths.p3f26ca00} opacity="0.6" stroke="#EDC764" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>

              {/* Main Certificate Card Body */}
              <div className="absolute bottom-[11.11%] left-1/4 right-1/4 top-[27.78%]" data-name="Vector">
                <div className="absolute inset-[-1.36%_-1.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.9953 112.994">
                    <path d={svgPaths.pc868700} fill="#F6E6BA" stroke="#685622" strokeWidth="2.99985" />
                  </svg>
                </div>
              </div>

              {/* Top Gradient Banner on Certificate */}
              <div className="absolute bottom-[55.56%] left-1/4 right-1/4 top-[27.78%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.9955 29.9985">
                  <path d={svgPaths.p26cb9a80} fill="#EDC764" opacity="0.4" />
                </svg>
              </div>

              {/* Certificate Emblem (Star in Circle) */}
              <div className="absolute inset-[31.67%_40%_48.33%_40%]" data-name="Group">
                <div className="absolute inset-[-3.47%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4981 38.4981">
                    <g>
                      <path d={svgPaths.p29d6b0c0} fill="#EDC764" stroke="#685622" strokeWidth="2.49987" />
                      <path d={svgPaths.pdc3e980} stroke="#685622" strokeWidth="1.9999" />
                      <path d={svgPaths.p13891580} fill="#685622" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Decorative Lines on Certificate */}
              <div className="absolute inset-[58.33%_33.33%_41.67%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-1.25px_-2.08%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.4969 2.49987">
                    <path d="M1.24994 1.24994H61.2469" stroke="#685622" strokeLinecap="round" strokeWidth="2.49987" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[63.89%_30.56%_36.11%_30.56%]" data-name="Vector">
                <div className="absolute inset-[-1px_-1.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9964 1.9999">
                    <path d="M0.999948 0.999948H70.9964" stroke="#685622" strokeLinecap="round" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[69.44%_30.56%_30.56%_30.56%]" data-name="Vector">
                <div className="absolute inset-[-1px_-1.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9964 1.9999">
                    <path d="M0.999948 0.999948H70.9964" stroke="#685622" strokeLinecap="round" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-[33.33%] right-[33.33%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-1px_-1.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9969 1.9999">
                    <path d="M0.999948 0.999948H60.9969" stroke="#685622" strokeLinecap="round" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>

              {/* CAAC Text on Certificate */}
              <p className="absolute font-bold inset-[77.22%_41.66%_15.56%_40.56%] leading-[normal] not-italic text-[#685622] text-[11px] text-center">CAAC</p>

              {/* Easel Stands */}
              <div className="absolute inset-[88.89%_55.56%_-2.78%_38.89%]" data-name="Vector">
                <div className="absolute inset-[-4%_-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9996 26.9989">
                    <path d={svgPaths.p1fab0a00} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[88.89%_38.89%_-2.78%_55.56%]" data-name="Vector">
                <div className="absolute inset-[-4%_-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9996 26.9989">
                    <path d={svgPaths.pde76700} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[86.11%_41.67%_5.56%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-6.67%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9984 16.9991">
                    <path d={svgPaths.p2c082600} fill="#EDC764" stroke="#685622" strokeWidth="1.9999" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-[26px] font-bold text-[#685622] mb-[12px] mt-[12px]">我的CAAC证书</h2>
          
          <div className="flex items-center gap-[8px] bg-gradient-to-r from-[#edc764] to-[#c99619] px-[20px] py-[8px] rounded-full shadow-[0px_2px_8px_rgba(237,199,100,0.3)]">
            <div className="size-[18px] relative">
               <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                 <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="white" opacity="0.4" />
                 <path d="M5 9L8 12L13 6" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
               </svg>
            </div>
            <span className="text-white text-[14px] font-medium">已认证</span>
          </div>
        </div>

        {/* Certificate Info Card */}
        <div className="w-full rounded-[20px] p-[30px] flex flex-col gap-[24px] mb-[20px] relative overflow-hidden" style={{ backgroundImage: "linear-gradient(132deg, rgba(237, 199, 100, 0.25) 0%, rgba(246, 230, 186, 0.25) 100%)" }}>
          <div aria-hidden="true" className="absolute inset-0 border-[#edc764] border-[2px] rounded-[20px] pointer-events-none" />
          
          <div className="flex flex-col gap-[6px]">
            <span className="text-[#8b7355] text-[12px]">持证人姓名</span>
            <span className="text-[#685622] text-[18px] font-medium tracking-[-0.44px]">张三</span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className="text-[#8b7355] text-[12px]">证书编号</span>
            <span className="text-[#685622] text-[16px] font-medium">CAAC-2024-12345678</span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className="text-[#8b7355] text-[12px]">证书类型</span>
            <span className="text-[#685622] text-[16px]">民用航空器维修人员执照</span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className="text-[#8b7355] text-[12px]">发证日期</span>
            <span className="text-[#685622] text-[16px]">2024-06-15</span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className="text-[#8b7355] text-[12px]">有效期至</span>
            <span className="text-[#c99619] text-[16px] font-medium">2026-06-14</span>
          </div>
        </div>

        {/* Certification Benefits Card */}
        <div className="w-full rounded-[20px] p-[26px] flex flex-col gap-[16px] mb-[24px] relative overflow-hidden" style={{ backgroundImage: "linear-gradient(154deg, rgba(237, 199, 100, 0.3) 0%, rgba(246, 230, 186, 0.3) 100%)" }}>
          <div aria-hidden="true" className="absolute inset-0 border-[#edc764] border-[2px] rounded-[20px] pointer-events-none" />
          
          <div className="flex items-center gap-[8px]">
            <div className="size-[6px] bg-[#c99619] rounded-full" />
            <span className="text-[#685622] text-[14px] font-medium">认证权益</span>
          </div>
          
          <div className="flex flex-col gap-[8px] text-[#8b7355] text-[13px]">
            <p>✓ 专业资质认证标识</p>
            <p>✓ 行业专属权益与服务</p>
            <p>✓ 项目接单专属权益</p>
            <p>✓ 专业技能提升资源</p>
          </div>
        </div>

        {/* Warning Box */}
        <div className="w-full bg-[rgba(246,230,186,0.4)] rounded-[16px] p-[16px] flex gap-[12px] items-start mb-[32px] relative">
          <div aria-hidden="true" className="absolute inset-0 border-[#edc764] border-[0.66px] rounded-[16px] pointer-events-none" />
          <div className="size-[20px] shrink-0 mt-[2px]">
             <svg className="block size-full" fill="none" viewBox="0 0 20 20">
               <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#C99619" strokeWidth="2" />
               <path d="M10 6V11" stroke="#C99619" strokeLinecap="round" strokeWidth="2" />
               <circle cx="10" cy="14" r="1" fill="#C99619" />
             </svg>
          </div>
          <p className="text-[#8b7355] text-[12px] leading-[18px]">证书即将到期时，我们会提前通知您进行更新</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[12px]">
          <button 
            onClick={onViewImage}
            className="flex-1 h-[56px] border-[#edc764] border-[2px] rounded-[28px] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
          >
            <span className="text-[#685622] text-[16px] font-medium">查看证书图片</span>
          </button>
          <button 
            onClick={onUpdate}
            className="flex-1 h-[56px] border-[#edc764] border-[2px] rounded-[28px] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
          >
            <span className="text-[#685622] text-[16px] font-medium">更新证书</span>
          </button>
        </div>
      </div>
    </div>
  );
}
