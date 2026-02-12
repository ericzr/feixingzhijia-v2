import React from 'react';
import StampOutstanding from "./StampOutstanding";
import StampFiveStar from "./StampFiveStar";
import svgPaths from "../../imports/svg-zjj3nle1rw";

function IconBack() {
  return (
    <div className="relative shrink-0 w-full" data-name="Icon">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[4px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[7.005px]" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
                <path d={svgPaths.p35e48300} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative bg-white border-[#f3f4f6] border-[0px_0px_0.745px] border-solid h-[65px] w-full z-10 flex items-center justify-center shrink-0" data-name="ExamInterface">
      <button onClick={onBack} className="absolute content-stretch cursor-pointer flex flex-col h-[28px] items-start left-[8px] pb-0 pt-[3.99px] px-[3.99px] top-[18.13px] w-[36px]" data-name="Button">
        <IconBack />
      </button>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[25.5px] not-italic text-[#1d293d] text-[17px] text-nowrap tracking-[-0.4316px]">全部教练</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[51.036px] relative rounded-full shrink-0 w-full bg-gray-100" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute border-[0.745px] border-solid border-white inset-0 pointer-events-none rounded-full" />
    </div>
  );
}

function Stamp({ type }: { type: 'outstanding' | 'fivestar' }) {
  return (
    <div className="size-[75.903px]">
      {type === 'outstanding' ? <StampOutstanding /> : <StampFiveStar />}
    </div>
  );
}

function CoachItem({ rank, name, score, students, years, type }: { rank: number, name: string, score: string, students: string, years: string, type: 'outstanding' | 'fivestar' }) {
  return (
    <div className="relative h-[113px] w-full shrink-0 border-b border-gray-50">
      {/* Rank */}
      <div className="absolute left-[20px] top-[40px] flex flex-col items-center justify-center w-[24px]">
        {rank <= 3 ? (
             <div className="relative size-[32px] flex items-center justify-center">
                <svg className="absolute inset-0 size-full" viewBox="0 0 24 32" fill="none">
                   <path d={svgPaths.pa387600} fill={rank === 1 ? "#FADB14" : rank === 2 ? "#BFBFBF" : "#C99619"} fillOpacity="0.2" />
                   <path d={svgPaths.p3b6c8200} fill={rank === 1 ? "#FADB14" : rank === 2 ? "#BFBFBF" : "#C99619"} />
                </svg>
                <span className="text-white text-[12px] font-bold relative z-10 -mt-1">{rank}</span>
             </div>
        ) : (
             <span className="text-[#62748e] text-[15px] font-medium">{rank}</span>
        )}
      </div>

      {/* Info */}
      <div className="absolute left-[132px] top-[20px] flex flex-col gap-[4px]">
         <div className="flex items-center gap-[6px]">
            <span className="text-[#0f172b] text-[17px] font-bold">{name}</span>
            <div className="flex items-center gap-[4px]">
               <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                  <path d={svgPaths.p2eb24c00} fill="#FA8C16" stroke="#FA8C16" />
               </svg>
               <span className="text-[#fa8c16] text-[13px] font-bold">{score}分</span>
            </div>
         </div>
         <div className="flex items-center gap-[8px] text-[#6a7282] text-[12px]">
            <span>学员 {students}</span>
            <div className="w-[1px] h-[12px] bg-gray-200" />
            <span>教龄 {years}</span>
         </div>
      </div>

      {/* Avatar & Stamp */}
      <div className="absolute left-[60px] top-[28px] size-[56px]">
         {type === 'outstanding' ? (
            <div className="relative size-full">
               <div className="absolute left-0 top-0 size-[55.992px] rounded-full">
                  <div className="relative size-full rounded-full overflow-hidden">
                     <div className="absolute inset-0 px-[2.478px] pt-[2.478px] pb-[1.489px]">
                        <ImageWithFallback />
                     </div>
                     <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.489px] border-solid inset-0 pointer-events-none rounded-full" />
                  </div>
               </div>
               <div className="absolute bg-[#e7000b] h-[17.485px] left-[4.01px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[42.5px] w-[47.965px] flex items-center justify-center">
                  <p className="font-bold text-[9px] text-white tracking-[0.167px]">杰出教练</p>
               </div>
            </div>
         ) : (
            <div className="size-full rounded-full overflow-hidden p-[1.5px] border-[1.5px] border-solid border-[#c99619]">
               <ImageWithFallback />
            </div>
         )}
      </div>

      {/* Big Stamp Overlay */}
      <div className="absolute right-[16px] top-[10px] opacity-80 rotate-[-12deg] scale-90 origin-center">
         <Stamp type={type} />
      </div>
    </div>
  );
}

export function CoachList({ onBack }: { onBack: () => void }) {
  const coaches = [
    { rank: 1, name: "杨建君", score: "5.0", students: "1741", years: "17", type: "outstanding" as const },
    { rank: 2, name: "乔梁", score: "5.0", students: "1284", years: "18", type: "outstanding" as const },
    { rank: 3, name: "王果香", score: "5.0", students: "1114", years: "11", type: "outstanding" as const },
    { rank: 4, name: "王宇", score: "5.0", students: "877", years: "13", type: "outstanding" as const },
    { rank: 5, name: "高福星", score: "5.0", students: "654", years: "9", type: "fivestar" as const },
    { rank: 6, name: "任建国", score: "5.0", students: "542", years: "8", type: "fivestar" as const },
  ];

  return (
    <div className="bg-[#fefbf4] h-full flex flex-col w-full overflow-hidden">
      {/* Sticky Top Bar (Status Bar + Header) */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
         <div className="h-[40px] bg-white w-full" /> {/* Status Bar Placeholder */}
         <Header onBack={onBack} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto w-full relative">
         {/* Banner */}
         <div className="w-full px-[16px] h-[44px] flex items-center justify-between bg-[#fbf2db]">
            <span className="text-[#c99619] text-[13px]">我是该驾校教练，我要入驻！</span>
            <div className="size-[24px] flex items-center justify-center">
               <svg className="size-[16px]" viewBox="0 0 10 10" fill="none">
                  <path d={svgPaths.p4784e50} stroke="#90A1B9" />
                  <path d={svgPaths.p27fbb000} stroke="#90A1B9" />
               </svg>
            </div>
         </div>

         {/* Title */}
         <div className="px-[16px] pt-[20px] pb-[20px] flex flex-col gap-[4px]">
            <h1 className="text-[#0f172b] text-[24px] font-bold">内蒙古亚斯特科技</h1>
            <p className="text-[#99a1af] text-[13px]">选对好教练，快速拿本起跑线</p>
         </div>

         {/* List */}
         <div className="flex flex-col pb-[40px] w-full">
            {coaches.map((coach, index) => (
               <CoachItem 
                  key={index} 
                  {...coach} 
               />
            ))}
         </div>
      </div>
    </div>
  );
}