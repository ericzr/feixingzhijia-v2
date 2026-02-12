import svgPathsExam from "../../imports/svg-f6hseik3qq";
import svgPathsProfile from "../../imports/svg-za1t37qxkj";

import svgPathsJobs from "../../imports/svg-4aa0ayjjs4";

function IconExam({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return (
      <div className="h-[20px] relative shrink-0 w-[22px]">
        <svg className="block size-full" fill="none" viewBox="0 0 22 20">
          <path d={svgPathsExam.p1c624d00} fill="#C99619" />
          <path d={svgPathsExam.p340f4e80} fill="#C99619" />
        </svg>
      </div>
    );
  }
  return (
    <div className="h-[20px] relative shrink-0 w-[21px]">
      <div className="absolute inset-[-3.5%_-3.33%_-3.63%_-3.33%]">
        <svg className="block size-full" fill="none" viewBox="0 0 23 22">
          <path d={svgPathsProfile.p1a81a600} stroke="#AF9C99" strokeWidth="1.4" />
          <path d={svgPathsProfile.pf690a00} stroke="#AF9C99" strokeWidth="1.4" />
        </svg>
      </div>
    </div>
  );
}

function IconJobs({ isActive }: { isActive: boolean }) {
  return (
    <div className="h-[20px] relative shrink-0 w-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path 
          d={svgPathsJobs.p3964e100} 
          fill={isActive ? "#C99619" : "#AF9C99"} 
          stroke={isActive ? "#C99619" : "#AF9C99"}
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}

function IconMy({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return (
      <div className="h-[20px] relative shrink-0 w-[15px]">
        <svg className="block size-full" fill="none" viewBox="0 0 15 20">
          <path clipRule="evenodd" d={svgPathsProfile.p2f29b080} fill="#C99619" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsProfile.p72deb70} fill="#C99619" fillRule="evenodd" />
        </svg>
      </div>
    );
  }
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]">
      <svg className="block size-full" fill="none" viewBox="0 0 15 20">
        <path clipRule="evenodd" d={svgPathsExam.p27987570} fill="#AF9C99" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPathsExam.p3c39ba00} fill="#AF9C99" fillRule="evenodd" />
      </svg>
    </div>
  );
}

interface BottomNavProps {
  activeTab?: 'exam' | 'jobs' | 'profile';
  onTabChange?: (tab: 'exam' | 'jobs' | 'profile') => void;
}

export function BottomNav({ activeTab = 'exam', onTabChange }: BottomNavProps) {
  return (
    <div className="bg-white absolute bottom-0 left-0 w-full h-[65px] border-t border-[#e5e7eb] z-[100]">
      <div className="grid grid-cols-3 h-[64px]">
        <div 
          className="flex flex-col gap-[4px] items-center justify-center cursor-pointer"
          onClick={() => onTabChange?.('exam')}
        >
          <IconExam isActive={activeTab === 'exam'} />
          <p className={`text-[12px] leading-[16px] ${activeTab === 'exam' ? 'text-[#c99619]' : 'text-[#af9c99]'}`}>考试</p>
        </div>
        <div 
          className="flex flex-col gap-[4px] items-center justify-center cursor-pointer"
          onClick={() => onTabChange?.('jobs')}
        >
          {activeTab === 'jobs' ? (
             <div className="h-[20px] relative shrink-0 w-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M19.9147 2.2417C19.702 1.90351 19.409 2.01765 19.3849 2.02188L0.379563 7.00173C0.202956 7.04823 0.0664867 7.19196 0.0183211 7.37374C-0.0298444 7.55975 0.0183212 7.75421 0.146763 7.88948L3.73108 11.6434L4.75862 17.5617C4.75862 17.5744 4.79876 17.9126 5.13591 17.9802C5.41688 18.0352 5.55736 17.8872 5.56539 17.883L7.85727 15.9638L9.65144 17.845C9.75981 17.9549 9.90431 18.0141 10.0528 17.9971C10.2013 17.9802 10.3338 17.8999 10.4221 17.7646L19.9227 2.83354C19.9348 2.8124 20.0953 2.53339 19.9147 2.2417ZM5.35667 15.1183L4.75862 11.6645L12.9468 6.93409L6.27583 12.0661C6.27583 12.0661 6.18753 12.1422 6.15141 12.193C6.11929 12.2395 6.08718 12.3494 6.08718 12.3494L5.35667 15.1183ZM6.68123 14.0572L7.40772 14.9915L6.15542 16.0399L6.68123 14.0572Z" fill="#C99619" />
              </svg>
            </div>
          ) : (
            <div className="h-[20px] relative shrink-0 w-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M19.9147 2.2417C19.702 1.90351 19.409 2.01765 19.3849 2.02188L0.379563 7.00173C0.202956 7.04823 0.0664867 7.19196 0.0183211 7.37374C-0.0298444 7.55975 0.0183212 7.75421 0.146763 7.88948L3.73108 11.6434L4.75862 17.5617C4.75862 17.5744 4.79875 17.9126 5.13591 17.9802C5.41688 18.0352 5.55736 17.8872 5.56539 17.883L7.85727 15.9638L9.65144 17.845C9.75981 17.9549 9.90431 18.0141 10.0528 17.9971C10.2013 17.9802 10.3338 17.8999 10.4221 17.7646L19.9227 2.83354C19.9348 2.8124 20.0953 2.53339 19.9147 2.2417ZM1.48737 7.80071L15.8768 4.03411L4.28499 10.7303L1.48737 7.80071ZM5.35667 15.1183L4.75862 11.6645L12.9468 6.93409L6.27583 12.0661C6.27583 12.0661 6.18753 12.1422 6.1514 12.193C6.11929 12.2395 6.08718 12.3494 6.08718 12.3494L5.35667 15.1183ZM6.68123 14.0572L7.40772 14.9915L6.15542 16.0399L6.68123 14.0572ZM9.95247 16.6021L7.01036 12.8102L17.5064 4.73163L9.95247 16.6021Z" fill="#AF9C99" />
              </svg>
            </div>
          )}
          <p className={`text-[12px] leading-[16px] ${activeTab === 'jobs' ? 'text-[#c99619]' : 'text-[#af9c99]'}`}>接单</p>
        </div>
        <div 
          className="flex flex-col gap-[4px] items-center justify-center cursor-pointer"
          onClick={() => onTabChange?.('profile')}
        >
          <IconMy isActive={activeTab === 'profile'} />
          <p className={`text-[12px] leading-[16px] ${activeTab === 'profile' ? 'text-[#c99619]' : 'text-[#af9c99]'}`}>我的</p>
        </div>
      </div>
    </div>
  );
}
