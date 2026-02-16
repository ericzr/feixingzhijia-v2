import React from "react";
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import svgPaths from "../../imports/svg-bzywbymcdw";
import svgStar from "../../imports/svg-jja46fubuc";

interface ProfilePilotViewProps {
  onSwitchRole: () => void;
  onMyFavoritesClick: () => void;
  onCollectionsClick?: () => void;
  onFlightApplicationClick?: () => void;
  onAirspaceClick?: () => void;
  onClimateQueryClick?: () => void;
  onResumeClick?: () => void;
  onInvitationCodeClick: () => void;
  onCaacBindingClick: () => void;
  onSettingsClick?: () => void;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
}

export function ProfilePilotView({ onSwitchRole, onMyFavoritesClick, onCollectionsClick, onFlightApplicationClick, onAirspaceClick, onClimateQueryClick, onResumeClick, onInvitationCodeClick, onCaacBindingClick, onSettingsClick, isLoggedIn = false, onLoginClick }: ProfilePilotViewProps) {
  return (
    <div className="flex flex-col w-full min-h-0 flex-1 overflow-x-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      {/* Header Section with Gradient - 顶部 40px 安全区并入，不再使用 sticky 色条避免滚动时多出一块遮挡 */}
      <div className="w-full h-[163px] bg-gradient-to-b from-[#fbf2db] to-[rgba(249,250,251,0)] px-[16px] pt-[40px] pb-[0px] flex flex-col gap-[20px] shrink-0 overflow-x-hidden md:h-auto md:py-6 md:rounded-b-2xl">
        {/* Top Icons */}
        <div className="flex items-center justify-between w-full h-[39.973px]">
           {/* Scan Icon - Unified with Candidate View (Search Icon Removed) */}
           <div className="relative shrink-0 size-[39.973px]">
            {/* Search Icon Removed Here */}
          </div>
        </div>

        {/* User Info & Winged VIP - min-w-0 防止被插画撑宽 */}
        <div className="content-stretch flex items-center justify-between min-w-0 overflow-x-hidden px-[8px] py-0 relative w-full h-[63.996px] md:px-4">
          {/* Avatar & Text */}
          <div 
            className="content-stretch flex gap-[15.996px] h-[63.996px] items-center relative shrink-0 cursor-pointer active:opacity-80"
            onClick={!isLoggedIn ? onLoginClick : undefined}
          >
            {/* Avatar */}
             <div className="bg-[#fbf2db] relative rounded-full shrink-0 size-[63.996px]">
              <div aria-hidden="true" className="absolute border-[1.489px] border-solid border-white inset-0 pointer-events-none rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.489px] pr-[1.501px] py-[1.489px] relative size-full">
                <div className="relative shrink-0 size-[31.992px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g>
                      <path d={svgPaths.p2a473380} stroke="#755609" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66603" />
                      <path d={svgPaths.p275bee70} stroke="#755609" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66603" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Login/Register Text or Username */}
            <div className="h-[51.967px] relative shrink-0 w-[120.652px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
                <div className="h-[27.99px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter'] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-[-0.51px] tracking-[-0.4492px] whitespace-pre">{isLoggedIn ? "大黄蜂用户" : "登录/注册"}</p>
                </div>
                <div className="h-[19.986px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter'] font-normal leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">一分耕耘一分收获~</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilot VIP Badge with Wings - 包装层仅裁右侧溢出，页面宽度与其他页一致 */}
          <div className="flex-1 min-w-0 overflow-x-hidden flex justify-end">
            <div className="flex items-center justify-center relative shrink-0 size-[67.144px]">
              <div className="flex-none rotate-[7.307deg]">
                <div className="opacity-20 relative rounded-[24982900px] size-[60px]" style={{ backgroundImage: "linear-gradient(133.012deg, rgb(245, 219, 155) 3.1676%, rgb(251, 242, 219) 93.798%)" }}>
                  <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24982900px]" />
                  {/* CAAC Text */}
                  <div className="absolute h-[27.99px] left-[4.61px] shadow-[0px_1px_4px_0px_#fbf2db] top-[19.6px] w-[49.772px]">
                    <p className="absolute font-['Inter'] font-black italic leading-[28px] left-[3.97px] text-[#c99619] text-[18px] top-[-1.02px] tracking-[-1.4492px] whitespace-pre">CAAC</p>
                  </div>
                  {/* Wings */}
                  <div className="absolute bg-[rgba(255,255,255,0.2)] h-[65.62px] left-[0.74px] rounded-[24982900px] top-[0.74px] w-[63.737px]">
                     <div className="absolute h-[68px] left-[-78.75px] top-[-1.72px] w-[223px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 223 68">
                          <g clipPath="url(#clip0_1693_983)">
                            <path d={svgPaths.p17568500} fill="#C19839" />
                            <path d={svgPaths.pabf6200} fill="url(#paint0_linear_1693_983)" />
                            <path d={svgPaths.p3ce39bc0} fill="url(#paint1_linear_1693_983)" />
                            <path d={svgPaths.p3a7f6800} fill="url(#paint2_linear_1693_983)" />
                            <path d={svgPaths.p10ec4500} fill="url(#paint3_linear_1693_983)" />
                            <path d={svgPaths.p3bfc3480} fill="url(#paint4_linear_1693_983)" />
                            <path d={svgPaths.p64d9e00} fill="url(#paint5_linear_1693_983)" />
                            <path d={svgPaths.pef4b500} fill="url(#paint6_linear_1693_983)" />
                            <path d={svgPaths.p22fe6600} fill="url(#paint7_linear_1693_983)" />
                          </g>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1693_983" x1="177.471" x2="177.471" y1="19.6666" y2="10.2505">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1693_983" x1="45.4214" x2="45.4214" y1="19.6285" y2="10.3998">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1693_983" x1="172.661" x2="172.661" y1="32.3706" y2="22.8404">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1693_983" x1="50.2023" x2="50.2023" y1="32.3355" y2="22.8433">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1693_983" x1="163.869" x2="163.869" y1="45.0161" y2="35.5767">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1693_983" x1="59.0292" x2="59.0292" y1="45.0893" y2="35.5972">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1693_983" x1="146.895" x2="146.895" y1="57.7934" y2="48.1665">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1693_983" x1="75.9454" x2="75.9454" y1="57.7056" y2="47.985">
                              <stop offset="0.03" stopColor="#F9F2DD" />
                              <stop offset="1" stopColor="#EDC45C" />
                            </linearGradient>
                            <clipPath id="clip0_1693_983">
                              <rect fill="white" height="68" width="223" />
                            </clipPath>
                          </defs>
                        </svg>
                     </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="px-[16px] mt-4 flex flex-col gap-[16px] relative z-10 pb-[20px] md:mt-6 md:px-8 md:grid md:grid-cols-2 md:gap-6 md:pb-8">
        {/* Role Switcher */}
        <div 
          className="bg-white content-stretch flex h-[48px] items-center justify-between px-[16px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full cursor-pointer active:opacity-80 md:col-span-2"
          onClick={onSwitchRole}
        >
          <div className="h-[24px] relative shrink-0 w-[192px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
              <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-normal leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-pre">我的角色：</p>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[84px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-normal leading-[20px] left-[-20px] not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-pre">职业飞手</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[24px] relative shrink-0 w-[132px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Inter'] font-normal leading-[24px] left-[38px] not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-pre">
                切换为<span className="text-[#c99619]">考生</span>版
              </p>
              <div className="absolute left-0 size-[24px] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3ec1ce70} fill="#333333" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="flex flex-col gap-[10px] md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
          {/* Route Application */}
          <div 
            className="bg-white content-stretch flex h-[85px] items-center justify-between pl-[7.992px] pr-[7.981px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full active:bg-gray-50 cursor-pointer md:col-span-1 md:h-full"
            onClick={onFlightApplicationClick}
          >
             <div className="bg-[#f3f4f6] h-[31.992px] shrink-0 w-[0.989px]" />
             <div className="flex-[1_0_0] h-[43.975px] min-h-px min-w-px relative rounded-[10px]">
               <div className="flex flex-row items-center justify-center size-full">
                 <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-center relative size-full">
                    {/* Icon */}
                    <div className="h-[42px] relative shrink-0 w-[48px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="h-[48px] overflow-clip relative shrink-0 w-full">
                          <div className="absolute inset-[16.67%_12.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 32">
                              <path d={svgPaths.p22c71e00} fill="#EDC764" />
                            </svg>
                          </div>
                          <div className="absolute inset-[34.38%_51.04%_59.38%_42.71%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                              <path d={svgPaths.p3cbff000} fill="#685622" />
                            </svg>
                          </div>
                          <div className="absolute inset-[42.71%_51.04%_51.04%_42.71%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                              <path d={svgPaths.p3cbff000} fill="#685622" />
                            </svg>
                          </div>
                          <div className="absolute inset-[51.04%_51.04%_42.71%_42.71%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                              <path d={svgPaths.p3cbff000} fill="#685622" />
                            </svg>
                          </div>
                          <div className="absolute bottom-[16.67%] left-[37.5%] right-1/2 top-[58.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
                              <path d="M2 2L6 12L2 10L0 0L2 2Z" fill="#F6E6BA" />
                            </svg>
                          </div>
                          <div className="absolute bottom-[41.67%] left-[58.33%] right-[12.5%] top-1/2">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 4">
                              <path d="M0 0L14 4L10 2L0 0Z" fill="#685622" opacity="0.2" />
                            </svg>
                          </div>
                          <div className="absolute bottom-[79.17%] left-[16.67%] right-1/2 top-[16.67%]">
                            <div className="absolute inset-[-37.5%_0_-36.38%_-1.14%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1819 3.47761">
                                <path d={svgPaths.p14abbb00} stroke="#685622" strokeDasharray="2 2" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="h-[34px] relative shrink-0 w-[56px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                         <div className="absolute h-[19.986px] left-0 top-0 w-[41.997px]">
                          <p className="absolute font-['Inter'] font-bold leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">飞行申请</p>
                        </div>
                        <div className="absolute h-[15.007px] left-0 top-[19.99px] w-[26.42px]">
                          <p className="absolute font-['Inter'] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.49px] tracking-[0.1172px] whitespace-pre">一键报批</p>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Airspace & Weather */}
          <div className="bg-white content-stretch flex h-[76px] items-center justify-between pl-[7.992px] pr-[7.981px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full md:col-span-1 md:h-[85px]">
            {/* Airspace */}
             <div className="h-[44px] relative rounded-[10px] shrink-0 w-[204px] flex-1 active:bg-gray-50 cursor-pointer" onClick={onAirspaceClick}>
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[48px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="h-[48px] overflow-clip relative shrink-0 w-full">
                       <div className="absolute inset-[20.83%_12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 28">
                          <path d={svgPaths.p29a58f80} fill="#F6E6BA" />
                        </svg>
                      </div>
                      <div className="absolute inset-[20.83%_37.5%]">
                        <div className="absolute inset-[0_-6.25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 28">
                            <path d="M0.75 0V28M12.75 0V28" opacity="0.3" stroke="#685622" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[29.17%_66.67%_58.33%_16.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
                          <path d="M0 2L4 0L8 4L4 6L0 2Z" fill="#EDC764" />
                        </svg>
                      </div>
                      <div className="absolute inset-[41.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <path d="M0 2L6 0L8 6L2 8L0 2Z" fill="#EDC764" />
                        </svg>
                      </div>
                      <div className="absolute inset-[29.17%_20.83%_54.17%_62.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <path d="M2 0L8 2L6 8L0 6L2 0Z" fill="#EDC764" />
                        </svg>
                      </div>
                      <div className="absolute inset-[54.17%_16.67%_20.83%_58.33%]">
                        <div className="absolute inset-[-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d={svgPaths.p31e16900} fill="white" stroke="#685622" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/4 left-[62.5%] right-[20.83%] top-[58.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <path d={svgPaths.p65069f0} fill="#EDC764" opacity="0.3" />
                        </svg>
                      </div>
                      <div className="absolute inset-[76.04%_10.42%_14.58%_80.21%]">
                        <div className="absolute inset-[-27.78%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                            <path d="M1.25 1.25L5.75 5.75" stroke="#685622" strokeLinecap="round" strokeWidth="2.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[34.994px] relative shrink-0 w-[41.997px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute h-[19.986px] left-0 top-0 w-[41.997px]">
                      <p className="absolute font-['Inter'] font-bold leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">空域查询</p>
                    </div>
                    <div className="absolute h-[15.007px] left-0 top-[19.99px] w-[26.42px]">
                      <p className="absolute font-['Inter'] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.49px] tracking-[0.1172px] whitespace-pre">空域查询</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f3f4f6] h-[31.992px] shrink-0 w-[0.989px]" />

            {/* Weather - 气候查询 */}
            <div className="h-[44px] relative rounded-[10px] shrink-0 w-[196px] flex-1 active:bg-gray-50 cursor-pointer" onClick={onClimateQueryClick}>
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-center relative size-full">
                <div className="h-[40px] relative shrink-0 w-[43px]">
                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 40">
                      <path d={svgPaths.p34e49e00} fill="#EDC764" />
                      <path d="M16.125 3.33333V5" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d="M16.125 18.3333V20" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d="M7.16667 11.6667H8.95833" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d="M23.2917 11.6667H25.0833" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d="M10.3021 6.25L11.6458 7.5" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p3e5a2600} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p3e777800} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d="M20.6042 7.5L21.9479 6.25" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p19c90100} fill="#F6E6BA" />
                      <path d={svgPaths.p19c90100} stroke="#685622" strokeWidth="1.5" />
                      <path d={svgPaths.p9391d80} stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p208b7980} stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.p22f0cb00} stroke="#685622" strokeLinecap="round" strokeWidth="2" />
                      <path d={svgPaths.pc5a7600} fill="#EDC764" />
                      <path d={svgPaths.p3f949a00} fill="#EDC764" />
                      <path d={svgPaths.p303c2880} fill="#685622" />
                   </svg>
                </div>
                <div className="h-[34.994px] relative shrink-0 w-[41.997px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute h-[19.986px] left-0 top-0 w-[41.997px]">
                      <p className="absolute font-['Inter'] font-bold leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">气候查询</p>
                    </div>
                    <div className="absolute h-[15.007px] left-0 top-[19.99px] w-[26.42px]">
                      <p className="absolute font-['Inter'] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.49px] tracking-[0.1172px] whitespace-pre">实时气候查询</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full border border-white md:col-span-2">
          <MenuItem 
            icon={<svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15"><path d={svgPaths.p32f8f000} fill="#584B31" stroke="#584B31" strokeWidth="0.4" /></svg>} 
            label="我的CAAC证书" 
            iconSize="size-[15px]"
            onClick={onCaacBindingClick}
          />
          <MenuItem 
            icon={<svg className="block size-full" preserveAspectRatio="none" viewBox="0 0 19 19"><path d={svgPaths.p2fb80b00} fill="#584B31" stroke="#584B31" strokeWidth="0.4" /></svg>} 
            label="我的简历" 
            iconSize="size-[19px]"
            onClick={onResumeClick}
          />
          <MenuItem 
            icon={
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgStar.p32380e80} fill="#584B31" />
              </svg>
            }
            label="我的收藏" 
            iconSize="size-[16px]"
            onClick={onCollectionsClick}
          />
          <MenuItem 
            icon={
              <div className="relative size-full">
                 <div className="absolute inset-[8.41%_12.68%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
                      <path d={svgPaths.p7fb9800} stroke="#584B31" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                 </div>
                 <div className="absolute inset-[37.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                       <path d={svgPaths.p153a5200} stroke="#584B31" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                 </div>
              </div>
            }
            label="设置" 
            isLast
            iconSize="size-[18px]"
            onClick={onSettingsClick}
          />
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, isLast, iconSize, onClick }: { icon: React.ReactNode; label: string; isLast?: boolean; iconSize: string; onClick?: () => void }) {
  return (
    <div 
      className="h-[49.722px] relative shrink-0 w-full active:bg-gray-50 cursor-pointer"
      onClick={onClick}
    >
      {!isLast && <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0px_0px_0.745px] border-solid inset-0 pointer-events-none" />}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.745px] pt-0 px-[15.996px] relative size-full">
          {/* Label Container */}
          <div className="h-[21px] relative shrink-0 w-auto">
             <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center relative size-full">
                <div className={`relative shrink-0 ${iconSize} flex items-center justify-center`}>
                   {icon}
                </div>
                <div className="h-[21px] relative shrink-0 w-auto">
                   <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="font-['Inter'] font-medium leading-[21px] not-italic text-[#584b31] text-[14px] tracking-[-0.1504px] whitespace-pre">{label}</p>
                   </div>
                </div>
             </div>
          </div>
          {/* Chevron */}
          <div className="relative shrink-0 size-[15.996px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p5fe1780} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
