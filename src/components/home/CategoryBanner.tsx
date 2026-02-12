import svgPaths from "../../imports/svg-f6hseik3qq";
import { DroneType, LicenseType } from "../exam/ExamTypeSelector";

interface CategoryBannerProps {
  droneType?: DroneType;
  licenseType?: LicenseType;
  onSwitch?: () => void;
}

function Text18({ text }: { text: string }) {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
      </div>
    </div>
  );
}

function Text19({ text }: { text: string }) {
  return (
    <div className="h-[20px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">{text}</p>
      </div>
    </div>
  );
}

function Container15({ droneType, licenseType }: { droneType: string, licenseType: string }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[192px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text18 text={droneType} />
        <Text19 text={licenseType} />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[14px] not-italic text-[#755609] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">切换</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #755609)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="h-[20px] relative shrink-0 w-[48px] cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text20 />
        <Icon12 />
      </div>
    </div>
  );
}

export function CategoryBanner({ 
  droneType = '多旋翼无人机', 
  licenseType = '视距内驾驶员',
  onSwitch 
}: CategoryBannerProps) {
  return (
    <div className="bg-white h-[48px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] shrink-0 w-full" data-name="CategoryBanner">
      <div className="flex flex-row items-center size-full">
        <div 
          className="flex items-center justify-between px-[16px] relative size-full cursor-pointer"
          onClick={onSwitch}
        >
          <div className="flex items-center gap-[12px]">
            <span className="text-[16px] text-black font-normal leading-[24px] tracking-[-0.31px] whitespace-nowrap">{droneType}</span>
            <span className="text-[14px] text-[#6a7282] font-normal leading-[20px] tracking-[-0.15px] whitespace-nowrap">{licenseType}</span>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
