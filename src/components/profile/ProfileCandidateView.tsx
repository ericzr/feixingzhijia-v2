import React from "react";
import svgPaths from "../../imports/svg-tptb4rj5km";
import svgStar from "../../imports/svg-jja46fubuc";

interface ProfileCandidateViewProps {
  onSwitchRole: () => void;
  onMyMistakesClick: () => void;
  onMyFavoritesClick: () => void;
  onInvitationCodeClick: () => void;
  onCaacBindingClick: () => void;
}

export function ProfileCandidateView({ 
  onSwitchRole, 
  onMyMistakesClick, 
  onMyFavoritesClick,
  onInvitationCodeClick,
  onCaacBindingClick
}: ProfileCandidateViewProps) {
  return (
    <div className="flex flex-col w-full h-full bg-[#fefbf4]">
      {/* Safety Area - 40px (Hidden on Tablet/Desktop) */}
      <div className="bg-[#fbf2db] h-[40px] shrink-0 sticky top-0 z-50 w-full md:hidden" />

      {/* Header Section with Gradient - Fixed Height 163px to match Pilot */}
      <div className="w-full h-[163px] bg-gradient-to-b from-[#fbf2db] to-[rgba(249,250,251,0)] px-[16px] pt-0 pb-[0px] flex flex-col gap-[20px] shrink-0 md:h-auto md:py-6 md:rounded-b-2xl">
        {/* Top Icons - Scan Icon (Search Icon Removed) */}
        <div className="flex items-center justify-between w-full h-[39.973px]">
          <div className="relative shrink-0 size-[39.973px]">
            {/* Search Icon Removed Here */}
          </div>
        </div>

        {/* User Info & VIP */}
        <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative w-full md:px-4">
          <div className="content-stretch flex gap-[15.996px] h-[63.996px] items-center relative shrink-0 w-[200.644px]">
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
            
            {/* Login/Register Text */}
            <div className="h-[51.967px] relative shrink-0 w-[120.652px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
                <div className="h-[27.99px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter'] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-[-0.51px] tracking-[-0.4492px] whitespace-pre">登录/注册</p>
                </div>
                <div className="h-[19.986px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter'] font-normal leading-[20px] left-0 not-italic text-[#7c7c7c] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">一分耕耘一分收获~</p>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Badge */}
          <div className="opacity-50 relative rounded-full shrink-0 size-[63.996px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(245, 219, 155) 0%, rgb(251, 242, 219) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[0.745px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-full" />
            <div className="absolute h-[27.99px] left-[16.59px] shadow-[0px_1px_4px_0px_#fbf2db] top-[18px] w-[30.817px]">
              <p className="absolute font-['Inter'] font-black italic leading-[28px] left-0 text-[#c99619] text-[20px] top-[-0.51px] tracking-[-1.4492px] whitespace-pre">VIP</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.2)] blur filter left-[0.74px] rounded-full size-[62.507px] top-[0.74px]" />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="px-[16px] -mt-[10px] flex flex-col gap-[16px] relative z-10 pb-[20px] md:mt-0 md:px-8 md:grid md:grid-cols-2 md:gap-6 md:pb-8">
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
                  <p className="absolute font-['Inter'] font-normal leading-[20px] left-[-20px] not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-pre">备考菜鸟</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[24px] relative shrink-0 w-[132px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Inter'] font-normal leading-[24px] left-[38px] not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-pre">
                切换为<span className="text-[#c99619]">飞手</span>版
              </p>
              <div className="absolute left-0 size-[24px] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3ec1ce70} fill="#333333" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-white content-stretch flex h-[111px] items-center justify-between px-[19.998px] py-[10px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full md:col-span-1">
          <div className="flex-[1_0_0] gap-[8px] grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] inline-grid min-h-px min-w-px relative w-full">
            {/* Stat 1 */}
            <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[5.98px] h-[70.941px] items-center pb-[0.75px] pt-0 px-0 relative shrink-0 w-full">
              <div className="h-[15.985px] relative shrink-0 w-[47.988px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-medium leading-[16px] left-[24px] not-italic text-[#62748e] text-[12px] text-center top-[0.74px] translate-x-[-50%] whitespace-pre">累计答题</p>
                </div>
              </div>
              <div className="h-[27.99px] relative shrink-0 w-[17.474px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="font-['Inter'] font-bold leading-[28px] not-italic relative shrink-0 text-[#c99619] text-[20px] text-center tracking-[-0.4492px] whitespace-pre">—</p>
                </div>
              </div>
              <div className="h-[13.507px] relative shrink-0 w-[39.787px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-normal leading-[15px] left-[20px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.34px] tracking-[0.1172px] translate-x-[-50%] whitespace-pre">正确率-%</p>
                </div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[5.98px] h-[70.941px] items-center pb-[0.75px] pt-0 px-[0.745px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0px_0.745px] border-solid inset-0 pointer-events-none" />
              <div className="h-[15.985px] relative shrink-0 w-[59.983px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-medium leading-[16px] left-[30px] not-italic text-[#62748e] text-[12px] text-center top-[0.74px] translate-x-[-50%] whitespace-pre">模拟平均分</p>
                </div>
              </div>
              <div className="h-[27.99px] relative shrink-0 w-[17.474px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="font-['Inter'] font-bold leading-[28px] not-italic relative shrink-0 text-[#c99619] text-[20px] text-center tracking-[-0.4492px] whitespace-pre">—</p>
                </div>
              </div>
              <div className="h-[13.507px] relative shrink-0 w-[49.357px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-normal leading-[15px] left-[25px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.34px] tracking-[0.1172px] translate-x-[-50%] whitespace-pre">累计考试-次</p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[5.98px] h-[70.941px] items-center pb-[20.987px] pt-0 px-0 relative shrink-0 w-full">
              <div className="h-[15.985px] relative shrink-0 w-[59.983px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter'] font-medium leading-[16px] left-[30px] not-italic text-[#62748e] text-[12px] text-center top-[0.74px] translate-x-[-50%] whitespace-pre">考试通过率</p>
                </div>
              </div>
              <div className="h-[27.99px] relative shrink-0 w-[28.619px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="font-['Inter'] font-bold leading-[28px] not-italic relative shrink-0 text-[#c99619] text-[20px] text-center tracking-[-0.4492px] whitespace-pre">-%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white content-stretch flex h-[76px] items-center justify-between pl-[7.992px] pr-[7.981px] py-0 relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full md:col-span-1 md:h-[111px]">
          {/* Mistakes */}
          <div 
            className="flex-[1_0_0] h-[43.975px] min-h-px min-w-px relative rounded-[10px] cursor-pointer active:opacity-70"
            onClick={onMyMistakesClick}
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-center relative size-full">
              <div className="h-[36px] relative shrink-0 w-[33px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 36">
                  <g clipPath="url(#clip0_1465_901)">
                    <g>
                      <path d={svgPaths.p288bd180} fill="#F6E6BA" />
                      <path d={svgPaths.p38d500} fill="#685622" />
                    </g>
                    <g>
                      <path d={svgPaths.p1c4d0c00} fill="#EDC764" />
                      <path d={svgPaths.pd670d80} fill="#685622" />
                    </g>
                    <path d={svgPaths.p2a7b9340} fill="#EDC764" />
                    <path d={svgPaths.p3c02a6d0} fill="#685622" />
                    <g>
                      <path d={svgPaths.p3eedb580} fill="#685622" />
                      <path d={svgPaths.p1c58800} fill="#685622" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1465_901">
                      <rect fill="white" height="36" width="33" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="h-[34.994px] relative shrink-0 w-[41.997px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute h-[19.986px] left-0 top-0 w-[41.997px]">
                    <p className="absolute font-['Inter'] font-bold leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">错题集</p>
                  </div>
                  <div className="absolute h-[15.007px] left-0 top-[19.99px] w-[26.42px]">
                    <p className="absolute font-['Inter'] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.49px] tracking-[0.1172px] whitespace-pre">共0题</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="bg-[#f3f4f6] h-[31.992px] shrink-0 w-[0.989px]" />
          
          {/* Favorites */}
          <div 
            className="flex-[1_0_0] h-[43.975px] min-h-px min-w-px relative rounded-[10px] cursor-pointer active:opacity-70"
            onClick={onMyFavoritesClick}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.994px] items-center justify-center relative size-full">
                <div className="h-[36px] relative shrink-0 w-[40px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 36">
                    <g clipPath="url(#clip0_1465_866)">
                      <path d={svgPaths.p1b1a8c40} fill="#EDC764" />
                      <path d={svgPaths.p2bec8c80} fill="#685622" />
                      <path d={svgPaths.p276c7780} fill="#685622" />
                      <g>
                        <g>
                          <path d={svgPaths.p302f00} fill="#F6E6BA" />
                          <g opacity="0.1">
                            <path d={svgPaths.p3aba01f0} fill="black" />
                          </g>
                          <g opacity="0.1">
                            <path d={svgPaths.p3b2c8300} fill="black" />
                          </g>
                        </g>
                        <path d={svgPaths.p3f6db400} fill="#EDC764" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1465_866">
                        <rect fill="white" height="36" width="40" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="h-[34.994px] relative shrink-0 w-[41.997px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute h-[19.986px] left-0 top-0 w-[41.997px]">
                      <p className="absolute font-['Inter'] font-bold leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[0.49px] tracking-[-0.1504px] whitespace-pre">收藏夹</p>
                    </div>
                    <div className="absolute h-[15.007px] left-0 top-[19.99px] w-[26.42px]">
                      <p className="absolute font-['Inter'] font-normal leading-[15px] left-0 not-italic text-[#90a1b9] text-[10px] top-[0.49px] tracking-[0.1172px] whitespace-pre">共0题</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-[14px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] border border-white md:col-span-2">
          <MenuItem 
            icon={<svg className="block size-full" fill="none" viewBox="0 0 15 15"><path d={svgPaths.peaba900} fill="#584B31" /></svg>}
            label="邀请码" 
            iconSize="size-[15px]"
            onClick={onInvitationCodeClick}
          />
          <MenuItem 
            icon={<svg className="block size-full" fill="none" viewBox="0 0 15 15"><path d={svgPaths.p32f8f000} fill="#584B31" /></svg>}
            label="绑定caac证书" 
            iconSize="size-[15px]"
            onClick={onCaacBindingClick}
          />
          <MenuItem 
            icon={
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgStar.p32380e80} fill="#584B31" />
              </svg>
            }
            label="我的收藏" 
            iconSize="size-[16px]"
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
