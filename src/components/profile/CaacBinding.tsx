import React from 'react';
import svgPaths from "../../imports/svg-u613oianue";

interface CaacBindingProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function CaacBinding({ onBack, onSuccess }: CaacBindingProps) {
  return (
    <div className="relative size-full flex flex-col font-sans overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      
      {/* Navigation Header */}
      <div className="h-[44px] px-[16px] flex items-center shrink-0 mt-[40px] relative z-20">
        <button 
          onClick={onBack}
          className="size-[36px] flex items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all"
        >
          <div className="w-[7px] h-[14px]">
            <svg className="block size-full" fill="none" viewBox="0 0 9 16">
              <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
            </svg>
          </div>
        </button>
        <div className="flex-1 text-center">
          <p className="font-bold text-[#685622] text-[18px] tracking-[-0.44px]">CAAC证书</p>
        </div>
        <div className="size-[36px]" /> {/* Placeholder for balance */}
      </div>

      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-[44px] pb-[40px] pt-[22px] flex flex-col items-center">
        
        {/* Certificate Illustration */}
        <div className="relative size-[200px] shrink-0 mb-[24px]">
          {/* Decorative shapes behind */}
          <div className="absolute inset-[12.7%_68.33%_77.3%_21.67%] opacity-60">
            <svg className="block size-full" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p3896100} fill="#F6E6BA" />
            </svg>
          </div>
          <div className="absolute inset-[18.33%_12.78%_73.89%_79.44%] opacity-50">
            <svg className="block size-full" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p3296bc80} fill="#EDC764" />
            </svg>
          </div>
          <div className="absolute inset-[76.11%_81.67%_15%_9.44%] opacity-60">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p30769300} fill="#F6E6BA" />
            </svg>
          </div>
          <div className="absolute inset-[72.22%_8.33%_16.67%_80.56%] opacity-50">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p25566600} fill="#EDC764" />
            </svg>
          </div>
          
          {/* Stars and other small shapes */}
          <div className="absolute top-[46.5px] left-[18.9px] w-[20.3px] h-[20.5px] opacity-80">
             <svg className="block size-full" fill="none" viewBox="0 0 20 21">
               <path d={svgPaths.p2db22340} fill="#F6E6BA" stroke="#C99619" strokeWidth="1.5" />
             </svg>
          </div>
          <div className="absolute top-[166.6px] left-[141.1px] size-[8px] opacity-70">
             <svg className="block size-full" fill="none" viewBox="0 0 8 8">
               <path d="M4 1V7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" />
               <path d="M1 4H7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" />
             </svg>
          </div>
          <div className="absolute top-[100px] left-[177.8px] size-[12px] opacity-60">
             <svg className="block size-full" fill="none" viewBox="0 0 12 12">
               <path d={svgPaths.p3f26ca00} stroke="#EDC764" strokeWidth="2" />
             </svg>
          </div>

          {/* Main Certificate Card */}
          <div className="absolute inset-[27.78%_25%_11.11%_25%]">
             <svg className="block size-full" fill="none" viewBox="0 0 93 113">
               <path d={svgPaths.pc868700} fill="#F6E6BA" stroke="#685622" strokeWidth="3" />
             </svg>
             {/* Header of the card */}
             <div className="absolute top-0 left-0 right-0 h-[30px] opacity-40">
                <svg className="block size-full" fill="none" viewBox="0 0 90 30">
                  <path d={svgPaths.p26cb9a80} fill="#EDC764" />
                </svg>
             </div>
             {/* Seal/Logo */}
             <div className="absolute top-[31.67%] left-[40%] right-[40%] bottom-[48.33%] translate-y-[-25%]">
                <svg className="block size-full" fill="none" viewBox="0 0 38 38">
                   <path d={svgPaths.p29d6b0c0} fill="#EDC764" stroke="#685622" strokeWidth="2.5" />
                   <path d={svgPaths.pdc3e980} stroke="#685622" strokeWidth="2" />
                   <path d={svgPaths.p13891580} fill="#685622" />
                </svg>
             </div>
             {/* Text lines */}
             <div className="absolute top-[58.33%] left-[33.33%] right-[33.33%] h-[2.5px]">
                <svg className="block size-full" fill="none" viewBox="0 0 62 3">
                   <path d="M1 1.5H61" stroke="#685622" strokeLinecap="round" strokeWidth="2.5" />
                </svg>
             </div>
             <div className="absolute top-[63.89%] left-[30.56%] right-[30.56%] h-[2px]">
                <svg className="block size-full" fill="none" viewBox="0 0 72 2">
                   <path d="M1 1H71" stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                </svg>
             </div>
             <div className="absolute top-[69.44%] left-[30.56%] right-[30.56%] h-[2px]">
                <svg className="block size-full" fill="none" viewBox="0 0 72 2">
                   <path d="M1 1H71" stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                </svg>
             </div>
             <div className="absolute top-[75%] left-[33.33%] right-[33.33%] h-[2px]">
                <svg className="block size-full" fill="none" viewBox="0 0 62 2">
                   <path d="M1 1H61" stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                </svg>
             </div>
             {/* "CAAC" Text */}
             <p className="absolute bottom-[15.56%] left-0 right-0 font-bold text-[#685622] text-[11px] text-center">CAAC</p>
          </div>

          {/* Tripod legs */}
          <div className="absolute bottom-[-2.78%] left-[38.89%] w-[12px] h-[27px]">
             <svg className="block size-full" fill="none" viewBox="0 0 12 27">
               <path d={svgPaths.p1fab0a00} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="2" />
             </svg>
          </div>
          <div className="absolute bottom-[-2.78%] left-[55.56%] w-[12px] h-[27px]">
             <svg className="block size-full" fill="none" viewBox="0 0 12 27">
               <path d={svgPaths.pde76700} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="2" />
             </svg>
          </div>
          <div className="absolute bottom-[5.56%] left-[41.67%] w-[32px] h-[17px]">
             <svg className="block size-full" fill="none" viewBox="0 0 32 17">
               <path d={svgPaths.p2c082600} fill="#EDC764" stroke="#685622" strokeWidth="2" />
             </svg>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="font-bold text-[#685622] text-[26px] tracking-[0.22px] mb-[8px] text-center">上传CAAC证书</h2>
        <div className="text-[#8b7355] text-[14px] leading-[22px] tracking-[-0.15px] text-center mb-[24px]">
          <p>请上传您的中国民用航空局（CAAC）证书</p>
          <p>支持 PDF、JPG、PNG 格式，大小不超过 10MB</p>
        </div>

        {/* Upload Container */}
        <div className="w-full py-[32px] rounded-[20px] relative flex flex-col items-center justify-center gap-[16px] mb-[12px] cursor-pointer active:scale-[0.99] transition-transform" style={{ backgroundImage: "linear-gradient(153.702deg, rgba(237, 199, 100, 0.2) 0%, rgba(246, 230, 186, 0.2) 100%)" }}>
          <div aria-hidden="true" className="absolute border-[#edc764] border-[2px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          
          {/* Upload Icon */}
          <div className="size-[48px] relative">
             <div className="absolute inset-0 opacity-30">
                <svg className="block size-full" fill="none" viewBox="0 0 44 44">
                  <path d={svgPaths.p181ec500} fill="#EDC764" />
                </svg>
             </div>
             <div className="absolute top-[29.17%] left-[37.5%] w-[15px] h-[19px]">
                <svg className="block size-full" fill="none" viewBox="0 0 15 19">
                  <path d={svgPaths.p198aa980} stroke="#685622" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
             </div>
             <div className="absolute bottom-[25%] left-[29.17%] w-[23px] h-[7px]">
                <svg className="block size-full" fill="none" viewBox="0 0 23 7">
                  <path d={svgPaths.p3e014180} stroke="#685622" strokeLinecap="round" strokeWidth="3" />
                </svg>
             </div>
          </div>

          <div className="text-center">
            <p className="font-medium text-[#685622] text-[16px] tracking-[-0.31px] mb-[4px]">点击上传或拖拽文件至此</p>
            <p className="text-[#8b7355] text-[12px]">支持 PDF、JPG、PNG 格式</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="w-full bg-[rgba(246,230,186,0.4)] rounded-[16px] p-[16px] relative flex gap-[12px] items-start">
          <div aria-hidden="true" className="absolute border-[#edc764] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          
          <div className="size-[20px] shrink-0 mt-[2px]">
             <svg className="block size-full" fill="none" viewBox="0 0 20 20">
               <path d={svgPaths.p15a5b000} stroke="#C99619" strokeWidth="2" />
               <path d="M10 6V11" stroke="#C99619" strokeLinecap="round" strokeWidth="2" />
               <circle cx="10" cy="14" r="1" fill="#C99619" />
             </svg>
          </div>
          <p className="text-[#8b7355] text-[12px] leading-[18px]">请确保证书清晰可见，包含完整的姓名、证书编号及有效期信息</p>
        </div>
      </div>

      {/* Submit Button - Fixed at Bottom */}
      <div className="shrink-0 px-[44px] pb-[34px] md:pb-[24px] pt-[12px]">
        <button 
          onClick={onSuccess}
          style={{height:"48px",minHeight:"48px"}}
          className="w-full bg-gradient-to-r from-[rgba(237,199,100,1)] to-[rgba(201,150,25,1)] rounded-[28px] flex items-center justify-center cursor-pointer active:scale-[0.98] transition-all"
        >
          <span className="font-medium text-[#685622] text-[18px] tracking-[-0.44px]">确认上传</span>
        </button>
      </div>
    </div>
  );
}
