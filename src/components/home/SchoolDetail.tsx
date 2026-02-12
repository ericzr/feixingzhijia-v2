import React, { useState, useRef, useEffect } from 'react';
import svgPathsClass from "../../imports/svg-nsotalkwkd";
import svgPathsVenue from "../../imports/svg-mhqxeo6irb";
import svgPathsNew from "../../imports/svg-31gpzzjuw2";
import svgPathsIntro from "../../imports/svg-2z6v012q38";
import svgPathsFooter from "../../imports/svg-school-detail-footer";
import svgPhone from "../../imports/svg-phone-icons";

// Images
import imgContainerClass from "figma:asset/bc04c8b86436de60e37006373742bcf2441b3e32.png";
import imgFaceBlowingAKiss1 from "figma:asset/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png";
import imgContainerVenue1 from "figma:asset/b09709e778f439f32a9febe92279437ea0d30df6.png";
import imgContainerVenue2 from "figma:asset/e2f4960d39e1f68c9217bc5627b8988d702d7063.png";
import imgContainerVenue3 from "figma:asset/b6d343e05612d44b97bbab494471adbf30e97f90.png";
import imgModel1 from "figma:asset/01e2e1b36c7a5bdd716f3f0686228588634a8ffc.png";
import imgModel2 from "figma:asset/164619794ffbf2f839de387dce542601577a2add.png";
import imgModel3 from "figma:asset/317c537af86a8cc05f64b937e22202cec91b2175.png";
import imgModel4 from "figma:asset/463ff96875b1b73f521112918ccfa0e92f173e68.png";
import imgModel5 from "figma:asset/8ffb7e8035fd9567e0abaf6e6e2447d5e8322953.png";
import { ConsultModal } from "./ConsultModal";

// Common Icons
function IconBack() {
  return (
    <div className="relative shrink-0 size-[19.998px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g>
          <path d={svgPathsClass.p7100a80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d="M15.8318 9.99905H4.16627" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function IconShare() {
  return (
    <div className="relative shrink-0 size-[19.998px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g clipPath="url(#clip0_359_852)">
          <path d={svgPathsClass.p279013f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
        <defs><clipPath id="clip0_359_852"><rect fill="white" height="19.9981" width="19.9981" /></clipPath></defs>
      </svg>
    </div>
  );
}

function IconMore() {
  return (
    <div className="relative shrink-0 size-[19.998px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9981 19.9981">
        <g>
          <path d={svgPathsClass.p2b2d380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPathsClass.p35abb300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
          <path d={svgPathsClass.p3b0ef580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
        </g>
      </svg>
    </div>
  );
}

function NavBar({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex h-[68px] items-center justify-between left-0 px-[15.996px] py-0 top-0 w-full z-20 mt-[40px]">
      <button onClick={onBack} className="bg-[rgba(0,0,0,0.2)] cursor-pointer relative rounded-full shrink-0 size-[36px] flex items-center justify-center">
         <svg className="w-[9.337px] h-[16.332px]" fill="none" viewBox="0 0 9.33737 16.3325">
            <path d={svgPathsClass.p35e48300 || "M8.17111 15.1663L1.16627 8.16626L8.17111 1.16627"} stroke="white" strokeWidth="2.33253" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
      <div className="h-[36px] relative shrink-0 flex gap-[12px] items-center">
        <div className="bg-[rgba(0,0,0,0.2)] relative rounded-full shrink-0 size-[36px] flex items-center justify-center">
          <IconShare />
        </div>
        <div className="bg-[rgba(0,0,0,0.2)] relative rounded-full shrink-0 size-[36px] flex items-center justify-center">
           <div className="relative shrink-0 size-[19.998px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                 <path d="M10 1.66651V12.4988" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
                 <path d={svgPathsClass.p34ac9700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
                 <path d={svgPathsClass.p2292fba0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66651" />
              </svg>
           </div>
        </div>
      </div>
    </div>
  );
}

function SchoolInfoCard({ showPhone }: { showPhone?: boolean }) {
  return (
    <div className="bg-white relative rounded-t-[16px] w-full p-[20px] pb-0 flex flex-col gap-[12px]">
      {/* Title & Badge */}
      <div className="flex items-center justify-between h-[28px]">
        <div className="flex items-center gap-[8px]">
           <p className="font-['Inter:Bold',sans-serif] font-bold text-[#0f172b] text-[20px]">亚斯特科技</p>
           <div className="flex gap-[4px] items-center">
              <div className="relative size-[16px]">
                 <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <rect fill="#F5C244" height="16" rx="5" width="16" />
                    <path d={svgPathsClass.p16f59a80} fill="#FBF2DB" />
                 </svg>
              </div>
              <div className="relative size-[18px]">
                 <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                    <path d={svgPathsClass.p2c9df200} fill="#C99619" stroke="#C99619" strokeWidth="1.5" />
                    <path d="M3.7494 15.7475H14.2477Z" fill="#C99619" />
                    <path d="M3.7494 15.7475H14.2477" stroke="#C99619" strokeWidth="1.5" />
                 </svg>
              </div>
              <div className="bg-[#fbf2db] rounded-[2px] px-[4px] h-[19px] flex items-center">
                 <p className="text-[#c99619] text-[10px]">2年</p>
              </div>
           </div>
        </div>
        
        {showPhone && (
           <div className="bg-[#c99619] rounded-full size-[28px] flex items-center justify-center">
              <div className="size-[14px]">
                 <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                    <path d={svgPhone.cardPhone} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                 </svg>
              </div>
           </div>
        )}
      </div>

      {/* Certifications */}
      <div className="flex gap-[12px] h-[16px] items-center">
         <div className="flex gap-[4px] items-center">
            <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
               <path d={svgPathsClass.p1f5d4f00} fill="#52C41A" stroke="white" />
               <path d={svgPathsClass.p39df8600} fill="#52C41A" stroke="white" />
            </svg>
            <span className="text-[#52c41a] text-[12px]">民航培训资质</span>
         </div>
         <div className="flex gap-[4px] items-center">
            <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
               <path d={svgPathsClass.p1f5d4f00} fill="#52C41A" stroke="white" />
               <path d={svgPathsClass.p39df8600} fill="#52C41A" stroke="white" />
            </svg>
            <span className="text-[#52c41a] text-[12px]">大黄蜂优质商家认证</span>
         </div>
      </div>

      {/* Tags */}
      <div className="flex gap-[8px] flex-wrap">
         <div className="bg-[#fff7e6] rounded-[2px] px-[6px] h-[20px] flex items-center">
            <span className="text-[#fa8c16] text-[11px] font-bold">综合排行第2名 &gt;</span>
         </div>
         {["有接送", "约课方便", "收费透明"].map(t => (
            <div key={t} className="bg-[#fbf2db] rounded-[2px] px-[6px] h-[20px] flex items-center">
               <span className="text-[#c99619] text-[11px]">{t}</span>
            </div>
         ))}
      </div>

      {/* Score & Address */}
      <div className="flex justify-between items-start mt-[4px]">
         {/* Left Score */}
         <div className="flex items-center gap-[4px] border-r border-[#f3f4f6] pr-[12px]">
            <div className="flex flex-col items-center">
               <div className="flex items-baseline">
                  <span className="text-[#fa8c16] text-[24px] font-bold">4.8</span>
                  <span className="text-[#fa8c16] text-[12px] font-medium ml-[2px]">分</span>
               </div>
               <span className="text-[#99a1af] text-[11px]">134人评价&gt;</span>
            </div>
            {/* Go Review Button */}
            <div className="flex flex-col items-center gap-[4px] ml-[8px]">
               <div className="bg-[#fa8c161a] rounded-full size-[32px] flex items-center justify-center">
                  <div className="relative shrink-0 size-[16px]">
                     <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPathsClass.p11369000} fill="#FA8C16" stroke="#FA8C16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
                        <rect fill="#FEF3E8" height="1" rx="0.5" width="8" x="4.00769" y="5.24658" />
                        <rect fill="#FEF3E8" height="1" rx="0.5" width="8" x="4.00769" y="7.24658" />
                        <rect fill="#FEF3E8" height="1" rx="0.5" width="8" x="4.00769" y="9.24658" />
                     </svg>
                  </div>
               </div>
               <span className="text-[#6a7282] text-[10px]">去评价</span>
            </div>
         </div>

         {/* Right Address */}
         <div className="flex flex-col gap-[4px] flex-1 pl-[12px]">
            <p className="text-[#6a7282] text-[13px] line-clamp-2">内蒙古自治区鄂尔多斯市东胜区交通街道伊化北路祥...</p>
            <p className="text-[#99a1af] text-[11px]">距您3.3 km | 乘车18分钟</p>
         </div>

         {/* Map Button */}
         <div className="flex flex-col items-center gap-[4px] ml-[8px]">
            <div className="bg-[#fbf2db] rounded-full size-[32px] flex items-center justify-center">
               <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                  <path d={svgPathsClass.p2cfc29f0} fill="#C99619" stroke="#C99619" />
                  <path d={svgPathsClass.p2be88c80} fill="#C99619" stroke="#C99619" />
                  <circle cx="9" cy="7" r="3" fill="#FBF2DB" />
               </svg>
            </div>
            <span className="text-[#6a7282] text-[10px]">训练场</span>
         </div>
      </div>
    </div>
  );
}

function SchoolIntroduction({ onViewDetails }: { onViewDetails?: () => void }) {
  return (
    <div className="bg-white px-[16px] py-[16px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1)] flex flex-col gap-[12px]">
       {/* Header */}
       <div className="flex justify-between items-center h-[24px]">
          <h3 className="text-[#0f172b] text-[16px] font-bold">航校简介</h3>
          <div onClick={onViewDetails} className="flex items-center gap-[2px] cursor-pointer">
             <span className="text-[#90a1b9] text-[12px]">查看详情</span>
             <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
                <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#90A1B9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
       </div>

       {/* Content */}
       <div className="flex flex-col gap-[8px]">
          <p className="text-[#45556c] text-[14px]">注册时间：2024-11-24</p>
          <div className="flex gap-[32px]">
             <p className="text-[#45556c] text-[14px]">教练：7名</p>
             <p className="text-[#45556c] text-[14px]">近一年学员数：328名</p>
          </div>
       </div>
    </div>
  );
}

function Banner({ onConsult }: { onConsult?: () => void }) {
  return (
    <div className="bg-white h-[47px] flex items-center justify-between px-[12px] border-t border-[#f9fafb] rounded-b-[16px]">
       <div className="flex items-center gap-[8px]">
          <div className="bg-[#fa8c16] rounded-full size-[16px] flex items-center justify-center">
             <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                <path d={svgPathsClass.p1f5d4f00} fill="white" stroke="black" />
                <path d={svgPathsClass.p2b8ce180} fill="white" stroke="black" />
                <path d="M6 8.5H6" stroke="black" />
             </svg>
          </div>
          <p className="text-[#314158] text-[13px] font-medium">最快多久可以拿证？</p>
       </div>
       <div onClick={onConsult} className="bg-[#fbf2db] rounded-full px-[12px] py-[4px] cursor-pointer">
          <span className="text-[#c99619] text-[12px] font-medium">问航校</span>
       </div>
    </div>
  );
}

function ClassCard({ title, tags, price, image, onConsult }: { title: string, tags: string[], price: string, image: string, onConsult?: () => void }) {
  return (
    <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] p-[12px] flex h-[108px] w-full">
       {/* Left Image */}
       <div className="w-[112px] h-[80px] relative shrink-0 rounded-[10px] overflow-hidden">
          <img src={image} className="size-full object-cover" alt={title} />
          {/* Badges */}
          <div className="absolute top-0 left-0">
             <div className="bg-[#c99619] h-[19px] px-[6px] rounded-br-[10px] flex items-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] relative z-10">
                <span className="text-white text-[10px] font-bold leading-none">拒绝吃拿卡要</span>
             </div>
             <div className="bg-[rgba(0,0,0,0.6)] h-[17.5px] px-[6px] rounded-br-[10px] flex items-center absolute top-[18px] left-0 min-w-[57px] z-0">
                <span className="text-white text-[9px] font-normal leading-none pt-[1px]">规范化教学</span>
             </div>
          </div>
       </div>

       {/* Right Content */}
       <div className="flex flex-col justify-between ml-[12px] flex-1 py-[1px]">
          <div className="flex flex-col gap-[6px]">
             <h3 className="text-[#101828] text-[16px] font-bold leading-tight">{title}</h3>
             <div className="flex gap-[6px]">
                {tags.map(t => (
                   <div key={t} className="bg-[#fbf2db] rounded-[2px] px-[4px] py-[2px] flex items-center">
                      <span className="text-[#c99619] text-[10px] leading-none">{t}</span>
                   </div>
                ))}
             </div>
          </div>
          <div className="flex justify-between items-end w-full">
             <div className="flex items-end gap-[1px]">
                <span className="text-[#c99619] text-[12px] font-bold mb-[3px]">¥</span>
                <span className="text-[#c99619] text-[18px] font-bold leading-none">{price}</span>
             </div>
             <div onClick={onConsult} className="bg-[#c99619] rounded-full w-[56px] h-[30px] flex items-center justify-center shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] cursor-pointer">
                <span className="text-white text-[12px] font-medium leading-[18px]">咨询</span>
             </div>
          </div>
       </div>
    </div>
  );
}

function VenueCard({ title, image }: { title: string, image: string }) {
  return (
    <div className="bg-white rounded-[14px] shadow-sm p-[12px] flex justify-between h-[108px] w-full">
       <div className="flex flex-col gap-[12px] h-full flex-1">
          <h3 className="text-[#101828] text-[16px] font-bold">{title}</h3>
          <div className="flex flex-col gap-[2px]">
             <p className="text-[#6a7282] text-[13px] line-clamp-1">内蒙古自治区鄂尔多斯市东胜区...</p>
             <p className="text-[#99a1af] text-[11px]">距您3.3 km | 乘车18分钟</p>
          </div>
       </div>
       <div className="w-[112px] h-[80px] relative shrink-0 rounded-[10px] overflow-hidden self-center">
          <img src={image} className="size-full object-cover" alt={title} />
       </div>
    </div>
  );
}

function ModelCard({ title, subtitle, image }: { title: string, subtitle: string, image: string }) {
  return (
    <div className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] flex flex-col items-center justify-center p-[11px] gap-[12px] h-[157px]">
       <div className="w-[112px] h-[80px] rounded-[10px] overflow-hidden relative shrink-0 flex items-center justify-center">
          <img src={image} className="max-w-full max-h-full object-contain" alt={title} />
       </div>
       <div className="flex flex-col items-center gap-[4px]">
          <h3 className="text-[#101828] text-[16px] font-bold text-center leading-[24px] tracking-[-0.3px]">{title}</h3>
          <p className="text-[#45556c] text-[12px] text-center leading-[20px] tracking-[-0.15px]">{subtitle}</p>
       </div>
    </div>
  );
}

function CoachCard({ name, students, years, isTop }: { name: string, students: string, years: string, isTop?: boolean }) {
  return (
    <div className="bg-white rounded-[14px] w-[110px] shrink-0 p-[12px] flex flex-col gap-[8px] border border-[#f9fafb] shadow-sm">
       <div className="relative size-[56px] self-center">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-white shadow-sm overflow-hidden bg-[#c99619]">
             {/* Avatar Placeholder */}
          </div>
          {isTop && (
             <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ffb900] to-[#fe9a00] rounded-[4px] px-[4px] py-[1px] flex items-center gap-[2px] w-max border border-white">
                <svg className="size-[8px]" fill="none" viewBox="0 0 8 8">
                   <path d={svgPathsClass.pbe0100} fill="white" stroke="white" />
                </svg>
                <span className="text-white text-[9px] font-bold">五星教练</span>
             </div>
          )}
       </div>
       <div className="flex flex-col items-center gap-[2px]">
          <span className="text-[#0f172b] text-[14px] font-bold">{name}</span>
          <span className="text-[#6a7282] text-[10px]">学员 {students}</span>
          <span className="text-[#6a7282] text-[10px]">教龄 {years}</span>
       </div>
    </div>
  );
}

function ReviewItem({ user, score, date, content, reply, likes = 0 }: { user: string, score: string, date: string, content: string, reply?: string, likes?: number }) {
  return (
    <div className="flex gap-[12px] w-full">
       <div className="size-[36px] bg-[#e5e7eb] rounded-full shrink-0" />
       <div className="flex flex-col gap-[8px] flex-1">
          <div className="flex justify-between items-start">
             <div className="flex flex-col gap-[2px]">
                <span className="text-[#0f172b] text-[14px] font-bold">{user}</span>
                <div className="flex items-center gap-[6px]">
                   <span className="text-[#fa8c16] text-[12px] font-bold">{score} 分</span>
                   <span className="text-[#99a1af] text-[11px]">{date}</span>
                   <span className="text-[#99a1af] text-[11px]">IP 属地内蒙古区</span>
                </div>
             </div>
             <div className="flex items-center gap-[4px]">
                <div className="relative shrink-0 size-[14px]">
                   <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <path d="M4.08194 5.8313V12.8289" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
                      <path d={svgPathsNew.p29d96b80} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
                   </svg>
                </div>
                {likes > 0 && <span className="text-[#99a1af] text-[11px]">{likes}</span>}
             </div>
          </div>
          <p className="text-[#1d293d] text-[13px] whitespace-pre-wrap">{content}</p>
          {reply && (
             <div className="bg-[#f9fafb] p-[8px] rounded-[4px]">
                <p className="text-[#6a7282] text-[12px]">商家回复：{reply}</p>
             </div>
          )}
       </div>
    </div>
  );
}

function CircularProgress({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center gap-[4px] relative">
       <div className="size-[60px] relative">
          <svg className="size-full -rotate-90">
             <circle cx="30" cy="30" r="24" stroke="#FBF2DB" strokeWidth="5" fill="none" />
             <circle cx="30" cy="30" r="24" stroke="#C99619" strokeWidth="5" fill="none" strokeDasharray="150.8" strokeDashoffset={150.8 * (1 - value/100)} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-[#c99619] text-[13px] font-bold">{value}<span className="text-[10px]">%</span></span>
          </div>
       </div>
       <span className="text-[#6a7282] text-[11px]">{label}</span>
    </div>
  );
}

function ReviewBanner() {
   return (
      <div className="relative w-full h-[112px] rounded-[14px] overflow-hidden bg-gradient-to-r from-[#f5db9b] to-[#fbf2db] shrink-0 mb-[24px]">
         <div className="absolute top-[25px] left-[16px]">
            <p className="text-[#314158] text-[13px] font-medium mb-[12px]">你的评价可以帮助驾校做得更好！</p>
            <div className="bg-[#c99619] rounded-full h-[30px] w-[120px] flex items-center justify-center gap-[4px] shadow-sm">
               <span className="text-white text-[12px] font-medium">我要贡献评价</span>
               <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d={svgPathsNew.p34add800} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
         </div>
         <img src={imgFaceBlowingAKiss1} className="absolute right-[16px] top-[22px] w-[74px] h-[67px] object-cover pointer-events-none" alt="face" />
      </div>
   )
}

function ReviewTags() {
   return (
      <div className="flex gap-[8px] mb-[24px]">
         <div className="bg-[#fbf2db] border border-[#f3f4f6]/50 rounded-full px-[10px] py-[4px]">
            <span className="text-[#c99619] text-[11px]">好评 127</span>
         </div>
         <div className="bg-[#fbf2db] border border-[#f3f4f6]/50 rounded-full px-[10px] py-[4px]">
            <span className="text-[#c99619] text-[11px]">服务好 111</span>
         </div>
         <div className="bg-[#fbf2db] border border-[#f3f4f6]/50 rounded-full px-[10px] py-[4px]">
            <span className="text-[#c99619] text-[11px]">收费透明 106</span>
         </div>
      </div>
   )
}

function StickyHeader({ visible, onBack, activeSection, onSectionClick }: { 
   visible: boolean, 
   onBack: () => void,
   activeSection: 'class' | 'coach' | 'review',
   onSectionClick: (section: 'class' | 'coach' | 'review') => void
}) {
  return (
    <div className={`absolute top-0 left-0 w-full z-50 bg-white transition-opacity duration-200 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
       {/* Status Bar Spacer */}
       <div className="h-[40px] w-full" />
       
       {/* Navbar Row */}
      {/* Navbar Row */}
       <div className="flex justify-between items-center px-[16px] h-[48px] relative">
          {/* Back Button */}
          <button onClick={onBack} className="w-[36px] h-[28px] flex items-center justify-center absolute left-[16px] top-[12px]">
             <svg className="w-[9.337px] h-[16.332px]" fill="none" viewBox="0 0 9.33737 16.3325">
                <path d={svgPathsClass.p35e48300 || "M8.17111 15.1663L1.16627 8.16626L8.17111 1.16627"} stroke="#1D293D" strokeWidth="2.33253" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </button>
          
          {/* Title */}
          <div className="absolute left-[54px] top-[14px] font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#0f172b] tracking-[-0.45px] leading-[28px]">亚斯特科技</div>

          {/* Right Actions */}
          <div className="flex gap-[16px] items-center absolute right-[16px] top-[11.65px] h-[32px]">
             {/* Star/Favorite */}
             <div className="size-[32px] flex items-center justify-center">
                <svg className="size-[21px]" fill="none" viewBox="0 0 21 21">
                   <path d="M10.0844 2.00811C10.1227 1.93064 10.182 1.86543 10.2554 1.81983C10.3288 1.77424 10.4136 1.75008 10.5 1.75008C10.5864 1.75008 10.6712 1.77424 10.7446 1.81983C10.818 1.86543 10.8773 1.93064 10.9156 2.00811L12.9369 6.10224C13.07 6.37171 13.2666 6.60484 13.5097 6.78163C13.7528 6.95842 14.0351 7.07359 14.3325 7.11724L18.8527 7.77874C18.9384 7.79115 19.0189 7.82727 19.0851 7.88304C19.1512 7.9388 19.2005 8.01197 19.2273 8.09427C19.254 8.17657 19.2572 8.26472 19.2365 8.34874C19.2158 8.43277 19.172 8.50932 19.11 8.56974L15.841 11.753C15.6254 11.9631 15.4641 12.2224 15.371 12.5087C15.2778 12.7949 15.2557 13.0995 15.3064 13.3962L16.0781 17.8937C16.0932 17.9793 16.084 18.0675 16.0514 18.1481C16.0189 18.2287 15.9643 18.2985 15.894 18.3496C15.8236 18.4007 15.7404 18.431 15.6536 18.437C15.5669 18.4431 15.4802 18.4246 15.4035 18.3837L11.3627 16.2592C11.0965 16.1194 10.8003 16.0464 10.4996 16.0464C10.1988 16.0464 9.90262 16.1194 9.63637 16.2592L5.5965 18.3837C5.51979 18.4243 5.43322 18.4426 5.34664 18.4365C5.26007 18.4303 5.17695 18.4 5.10676 18.3489C5.03656 18.2979 4.9821 18.2282 4.94957 18.1477C4.91704 18.0672 4.90775 17.9792 4.92275 17.8937L5.69362 13.3971C5.74455 13.1003 5.72248 12.7955 5.62934 12.509C5.5362 12.2226 5.37478 11.9631 5.159 11.753L1.89 8.57061C1.82752 8.51027 1.78324 8.43358 1.76222 8.3493C1.74119 8.26502 1.74426 8.17653 1.77107 8.0939C1.79788 8.01128 1.84736 7.93785 1.91387 7.88197C1.98037 7.8261 2.06124 7.79002 2.14725 7.77786L6.66662 7.11724C6.96435 7.07392 7.24709 6.95891 7.49051 6.7821C7.73393 6.60529 7.93074 6.37197 8.064 6.10224L10.0844 2.00811Z" stroke="#101828" strokeWidth="1.99956" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
             </div>
             {/* Share/Upload */}
             <div className="size-[20px] flex items-center justify-center">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                   <path d="M10 1.66651V12.4988" stroke="black" strokeWidth="1.66651" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="M13.3327 4.99984L9.99936 1.66651L6.66602 4.99984" stroke="black" strokeWidth="1.66651" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="M3.33303 9.99905V16.6651C3.33303 17.1071 3.5086 17.531 3.82114 17.8435C4.13367 18.156 4.55755 18.3316 4.99954 18.3316H14.9986C15.4406 18.3316 15.8645 18.156 16.177 17.8435C16.4895 17.531 16.6651 17.1071 16.6651 16.6651V9.99905" stroke="black" strokeWidth="1.66651" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
             </div>
          </div>
       </div>

       {/* Tabs Row */}
       <div className="flex items-center h-[50px] px-[24px] gap-[32px] border-b border-[#f3f4f6]">
          <div onClick={() => onSectionClick('class')} className="relative h-full flex items-center cursor-pointer">
             <span className={`text-[14px] ${activeSection === 'class' ? 'text-[#0f172b] font-bold' : 'text-[#62748e] font-medium'}`}>班型/场地/机型</span>
             {activeSection === 'class' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c99619] rounded-full" />}
          </div>
          <div onClick={() => onSectionClick('coach')} className="relative h-full flex items-center cursor-pointer">
             <span className={`text-[14px] ${activeSection === 'coach' ? 'text-[#0f172b] font-bold' : 'text-[#62748e] font-medium'}`}>教练</span>
             {activeSection === 'coach' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c99619] rounded-full" />}
          </div>
          <div onClick={() => onSectionClick('review')} className="relative h-full flex items-center cursor-pointer">
             <span className={`text-[14px] ${activeSection === 'review' ? 'text-[#0f172b] font-bold' : 'text-[#62748e] font-medium'}`}>评价</span>
             {activeSection === 'review' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c99619] rounded-full" />}
          </div>
       </div>
    </div>
  );
}

function BottomFooter({ onConsult, showPhone }: { onConsult: () => void, showPhone?: boolean }) {
  const content = showPhone ? (
     <div className="flex items-center gap-[16px] w-full max-w-xl mx-auto">
        <div onClick={onConsult} className="bg-[#755609] flex-1 h-[46px] rounded-full flex items-center justify-center gap-[8px] cursor-pointer shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] active:opacity-90 transition-opacity">
           <div className="size-[18px] relative">
              <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                 <path d={svgPathsFooter.p2fb27b00} fill="white" />
                 <path d={svgPathsFooter.p27e66000} fill="white" />
              </svg>
           </div>
           <span className="text-white text-[15px] font-bold tracking-[-0.23px]">在线聊</span>
        </div>
        <div className="bg-[#c99619] flex-1 h-[46px] rounded-full flex items-center justify-center gap-[8px] cursor-pointer shadow-sm active:opacity-90 transition-opacity">
            <div className="size-[18px] relative">
              <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                 <path d={svgPhone.footerPhone} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
              </svg>
            </div>
            <span className="text-white text-[15px] font-bold tracking-[-0.23px]">电话咨询</span>
        </div>
     </div>
  ) : (
     <div onClick={onConsult} className="bg-[#c99619] w-full max-w-xl mx-auto h-[46px] rounded-full flex items-center justify-center gap-[8px] cursor-pointer shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] active:opacity-90 transition-opacity">
        <div className="size-[18px] relative">
           <svg className="block size-full" fill="none" viewBox="0 0 18 18">
              <path d={svgPathsFooter.p2fb27b00} fill="white" />
              <path d={svgPathsFooter.p27e66000} fill="white" />
           </svg>
        </div>
        <span className="text-white text-[15px] font-bold tracking-[-0.23px]">在线聊</span>
     </div>
  );

  return (
    <div className="bg-white h-[76px] flex items-center px-[16px] border-t border-[#f3f4f6] shrink-0 z-20 relative shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
       {content}
    </div>
  );
}

export function SchoolDetail({ onBack, onViewAllReviews, onViewAllCoaches, onViewIntroduction, showPhone = false }: { onBack: () => void, onViewAllReviews?: () => void, onViewAllCoaches?: () => void, onViewIntroduction?: () => void, showPhone?: boolean }) {
  const [activeTab, setActiveTab] = useState<'class' | 'venue' | 'model'>('class');
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [activeStickyTab, setActiveStickyTab] = useState<'class' | 'coach' | 'review'>('class');
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const classRef = useRef<HTMLDivElement>(null);
  const coachRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        
        // Show sticky header when scrolled past 150px
        setShowSticky(scrollTop > 150);

        // Update active tab based on scroll position
        const triggerPoint = scrollTop + 150; 
        const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

        if (scrollTop >= maxScroll - 10) {
           setActiveStickyTab('review');
        } else if (reviewRef.current && triggerPoint >= reviewRef.current.offsetTop) {
           setActiveStickyTab('review');
        } else if (coachRef.current && triggerPoint >= coachRef.current.offsetTop) {
           setActiveStickyTab('coach');
        } else {
           setActiveStickyTab('class');
        }
      }
    };
    const div = scrollRef.current;
    div?.addEventListener('scroll', handleScroll);
    return () => div?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStickyTabClick = (section: 'class' | 'coach' | 'review') => {
    setActiveStickyTab(section);
    if (!scrollRef.current) return;

    let targetRef: React.RefObject<HTMLDivElement> | null = null;
    let offset = 138;

    if (section === 'class') {
       targetRef = tabsRef;
       offset = 88;
    }
    else if (section === 'coach') targetRef = coachRef;
    else if (section === 'review') targetRef = reviewRef;

    if (targetRef?.current) {
       const top = targetRef.current.offsetTop - offset;
       scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fefbf4] h-full flex flex-col relative overflow-hidden">
      <StickyHeader visible={showSticky} onBack={onBack} activeSection={activeStickyTab} onSectionClick={handleStickyTabClick} />
      
      {/* Header Background */}
      <div className={`absolute top-0 left-0 w-full h-[300px] z-0 transition-opacity duration-200 ${showSticky ? 'opacity-0' : 'opacity-100'}`}>
         <img src={imgContainerClass} className="size-full object-cover" alt="header" />
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Nav */}
      <NavBar onBack={onBack} />

      {/* Main Scrollable Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto z-10 pt-[200px] pb-[20px] no-scrollbar relative">
         <div ref={classRef}>
            <div className="flex flex-col gap-[12px] px-[16px] mb-[12px]">
               <div className="flex flex-col shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1)] rounded-[16px] overflow-hidden">
                  <SchoolInfoCard showPhone={showPhone} />
                  <Banner onConsult={() => setShowConsultModal(true)} />
               </div>
               <SchoolIntroduction onViewDetails={onViewIntroduction} />
            </div>

            {/* Tabs */}
            <div ref={tabsRef} className="z-20 bg-[#fefbf4] pt-[16px] px-[60px] pb-[8px]">
               <div className="flex justify-between items-center">
                  <div onClick={() => setActiveTab('class')} className={`flex flex-col items-center pb-[8px] cursor-pointer w-[60px] relative`}>
                     <span className={`text-[15px] font-medium ${activeTab === 'class' ? 'text-[#1d293d] font-bold' : 'text-[#99a1af]'}`}>班型</span>
                     {activeTab === 'class' && <div className="absolute bottom-0 h-[4px] w-[16px] bg-[#c99619] rounded-full" />}
                  </div>
                  <div onClick={() => setActiveTab('venue')} className={`flex flex-col items-center pb-[8px] cursor-pointer w-[60px] relative`}>
                     <span className={`text-[15px] font-medium ${activeTab === 'venue' ? 'text-[#1d293d] font-bold' : 'text-[#99a1af]'}`}>场地</span>
                     {activeTab === 'venue' && <div className="absolute bottom-0 h-[4px] w-[16px] bg-[#c99619] rounded-full" />}
                  </div>
                  <div onClick={() => setActiveTab('model')} className={`flex flex-col items-center pb-[8px] cursor-pointer w-[60px] relative`}>
                     <span className={`text-[15px] font-medium ${activeTab === 'model' ? 'text-[#1d293d] font-bold' : 'text-[#99a1af]'}`}>机型</span>
                     {activeTab === 'model' && <div className="absolute bottom-0 h-[4px] w-[16px] bg-[#c99619] rounded-full" />}
                  </div>
               </div>
            </div>

            {/* List Content */}
            <div className="px-[16px] py-[12px] flex flex-col gap-[12px]">
               {activeTab === 'class' && (
                  <>
                     <ClassCard title="垂直起降固定翼" tags={["自行前往", "一人一机"]} price="3680" image={imgContainerClass} onConsult={() => setShowConsultModal(true)} />
                     <ClassCard title="视距内驾驶员" tags={["自行前往"]} price="3880" image={imgContainerClass} onConsult={() => setShowConsultModal(true)} />
                     <ClassCard title="B2 VIP班-超视距驾驶" tags={["60天拿本", "自行前往", "多人一机"]} price="8800" image={imgContainerClass} onConsult={() => setShowConsultModal(true)} />
                  </>
               )}
               {activeTab === 'venue' && (
                  <>
                     <VenueCard title="固定翼垂直起降飞行训练场" image={imgContainerVenue1} />
                     <VenueCard title="穿梭机飞行场" image={imgContainerVenue2} />
                     <VenueCard title="鄂尔多斯A1飞行考场" image={imgContainerVenue3} />
                  </>
               )}
               {activeTab === 'model' && (
                  <div className="grid grid-cols-3 gap-[12px]">
                     <ModelCard title="大疆 Mavic" subtitle="小型固定翼/多旋翼" image={imgModel1} />
                     <ModelCard title="科比特 系列" subtitle="小型固定翼" image={imgModel2} />
                     <ModelCard title="大疆经纬 M30T" subtitle="行业应用固定翼" image={imgModel3} />
                     <ModelCard title="纵横 CW-25/40" subtitle="垂直起降固定翼" image={imgModel4} />
                     <ModelCard title="科比特系列" subtitle="垂直起降固定翼" image={imgModel5} />
                  </div>
               )}
            </div>
         </div>

         {/* Coaches */}
         <div ref={coachRef} className="px-[16px] py-[12px]">
            <div className="flex justify-between items-center mb-[12px]">
               <h3 className="text-[#0f172b] text-[17px] font-bold">教练团队 (16)</h3>
               <span onClick={onViewAllCoaches} className="text-[#99a1af] text-[13px] flex items-center gap-[2px] cursor-pointer">
                  查看全部 <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d={svgPathsClass.p32f8c380} stroke="#99A1AF" /></svg>
               </span>
            </div>
            <div className="flex gap-[12px] overflow-x-auto pb-[4px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none] -mx-[16px] px-[16px]">
               <CoachCard name="杨建君" students="1741" years="17年" isTop />
               <CoachCard name="乔梁" students="1284" years="18年" isTop />
               <CoachCard name="王果香" students="1114" years="11年" isTop />
               <CoachCard name="王宇" students="877" years="13年" isTop />
            </div>
         </div>

         {/* Reviews */}
         <div ref={reviewRef} className="px-[16px] py-[12px] pb-[40px]">
            <div className="flex justify-between items-center mb-[12px]">
               <h3 className="text-[#0f172b] text-[17px] font-bold">学员评价 (135)</h3>
               <span onClick={onViewAllReviews} className="text-[#99a1af] text-[13px] flex items-center gap-[2px] cursor-pointer">
                  查看全部 <svg className="size-[12px]" fill="none" viewBox="0 0 12 12"><path d={svgPathsClass.p32f8c380} stroke="#99A1AF" /></svg>
               </span>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-[24px] mb-[20px]">
               <div className="flex items-baseline">
                  <span className="text-[#c99619] text-[36px] font-bold">4.8</span>
                  <span className="text-[#c99619] text-[14px] font-medium ml-[2px]">分</span>
               </div>
               {/* Scores */}
               <div className="flex flex-1 justify-between px-[12px]">
                  <CircularProgress value={94} label="教学服务" />
                  <CircularProgress value={94} label="环境设施" />
                  <CircularProgress value={94} label="练机速度" />
               </div>
            </div>

            <ReviewBanner />
            <ReviewTags />

            {/* List */}
            <div className="flex flex-col gap-[20px]">
               <ReviewItem 
                  user="勤勉的芒果"
                  score="5.0"
                  date="2025-08-06"
                  content="考无人机驾照就去内蒙古亚斯特科技找刘一横校长报名，讲解细致，服务周到。\n服务态度：好"
                  reply="感谢您的认可，我们会继续努力！"
                  likes={1}
               />
               <ReviewItem 
                  user="快乐的小鸟"
                  score="4.9"
                  date="2025-08-05"
                  content="教练很有耐心，场地也很大，练车不用排队。"
               />
               <ReviewItem 
                  user="飞行少年"
                  score="4.8"
                  date="2025-08-01"
                  content="设施很新，教练教的很认真，通过率很高！"
               />
               <ReviewItem 
                  user="无人机爱好者"
                  score="5.0"
                  date="2025-07-28"
                  content="非常棒的体验，下次还会来！推荐给大家。"
               />
               <ReviewItem 
                  user="天空之城"
                  score="4.7"
                  date="2025-07-20"
                  content="环境不错，就是离市区稍微有点远，不过有接送也还好。"
               />
               <ReviewItem 
                  user="追风者"
                  score="5.0"
                  date="2025-07-15"
                  content="教练非常专业，解答问题很耐心，强烈推荐！"
               />
            </div>
         </div>
      </div>
      
      {/* Fixed Footer */}
      <BottomFooter onConsult={() => setShowConsultModal(true)} showPhone={showPhone} />

      <ConsultModal open={showConsultModal} onClose={() => setShowConsultModal(false)} />
    </div>
  );
}
