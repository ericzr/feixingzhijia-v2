import React from 'react';
import svgPaths from "../../imports/svg-exam-type";

export type DroneType = '多旋翼无人机' | '固定翼无人机' | '垂直起降无人机' | '无人直升机';
export type LicenseType = '视距内驾驶员' | '超视距驾驶员' | '无人机教员';

interface ExamTypeSelectorProps {
  onClose: () => void;
  onConfirm: (droneType: DroneType, licenseType: LicenseType) => void;
  initialDroneType?: DroneType;
  initialLicenseType?: LicenseType;
}

function CheckmarkIcon() {
  return (
    <div className="size-[12px] flex items-center justify-center">
      <svg className="block size-[8px]" fill="none" viewBox="0 0 10 7">
        <path d={svgPaths.p7323000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function SelectionCheckmark() {
  return (
    <div className="absolute top-0 right-0 size-[20px] bg-[#f5c244] rounded-bl-[10px] rounded-tr-[10px] flex items-center justify-center">
      <div className="mb-[2px] ml-[2px]">
        <CheckmarkIcon />
      </div>
    </div>
  );
}

function DroneOption({ 
  label, 
  icon, 
  isSelected, 
  onClick 
}: { 
  label: DroneType, 
  icon: React.ReactNode, 
  isSelected: boolean, 
  onClick: () => void 
}) {
  return (
    <div 
      className={`relative h-[128px] rounded-[14px] flex flex-col items-center justify-center gap-[14px] cursor-pointer bg-white transition-all ${isSelected ? 'border-[0.75px] border-[#f5c244] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]' : 'border-[0.75px] border-transparent hover:border-[#f5db9b]'}`}
      onClick={onClick}
    >
      {isSelected && <SelectionCheckmark />}
      {icon}
      <span className={`text-[14px] font-medium leading-[20px] tracking-[-0.15px] ${isSelected ? 'text-[#c99619]' : 'text-[#99a1af]'}`}>
        {label}
      </span>
    </div>
  );
}

function LicenseOption({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: LicenseType, 
  isSelected: boolean, 
  onClick: () => void 
}) {
  return (
    <div 
      className={`relative h-[61px] rounded-[14px] flex items-center justify-center cursor-pointer bg-white transition-all ${isSelected ? 'border-[0.75px] border-[#f5c244] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db]' : 'border-[0.75px] border-transparent hover:border-[#f5db9b]'}`}
      onClick={onClick}
    >
      {isSelected && <SelectionCheckmark />}
      <span className={`text-[14px] font-medium leading-[20px] tracking-[-0.15px] ${isSelected ? 'text-[#c99619]' : 'text-[#99a1af]'}`}>
        {label}
      </span>
    </div>
  );
}

export default function ExamTypeSelector({ onClose, onConfirm, initialDroneType = '多旋翼无人机', initialLicenseType = '视距内驾驶员' }: ExamTypeSelectorProps) {
  const [selectedDrone, setSelectedDrone] = React.useState<DroneType>(initialDroneType);
  const [selectedLicense, setSelectedLicense] = React.useState<LicenseType>(initialLicenseType);

  // Removed createPortal to keep it inside the MobileLayout container
  return (
    <div className="absolute inset-0 z-[200] flex justify-center bg-black/50 font-sans backdrop-blur-sm">
      <div className="w-full max-w-[480px] bg-[#fefbf4] h-full md:h-auto md:max-h-[85vh] md:my-auto md:rounded-2xl md:shadow-2xl relative flex flex-col overflow-hidden">
        {/* Safety Area - Updated background to match page and hidden on desktop */}
        <div className="bg-[#fefbf4] h-[40px] shrink-0 sticky top-0 z-50 w-full md:hidden" />

        {/* Header - Added padding for tablet/desktop */}
        <div className="h-[44px] px-[16px] flex items-center shrink-0 justify-between md:px-6 md:pt-4">
          <div className="size-[32px] flex items-center justify-center cursor-pointer hover:bg-black/5 rounded-full transition-colors" onClick={onClose}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d293d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M15 18l-6-6 6-6" />
             </svg>
          </div>
          <div className="text-[#1d293d] text-[16px] font-bold md:hidden">选择考试类型</div>
          <div className="w-[32px]" />
        </div>

        <div className="px-[16px] mt-[4px] mb-[24px] hidden md:block md:px-6">
          <h1 className="text-[#1d293d] text-[24px] font-bold leading-[32px] tracking-[0.07px]">选择考试类型</h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-[16px] pb-[100px] md:pb-[32px] scrollbar-hide md:px-6">
          
          {/* Drone Types - Added top margin for better spacing */}
          <div className="mt-[16px] mb-[24px]">
            <h2 className="text-[#99a1af] text-[14px] font-normal leading-[20px] tracking-[-0.15px] mb-[16px]">无人机机型</h2>
            <div className="grid grid-cols-2 gap-[16px]">
              <DroneOption 
                label="多旋翼无人机" 
                isSelected={selectedDrone === '多旋翼无人机'}
                onClick={() => setSelectedDrone('多旋翼无人机')}
                icon={
                  <div className="w-[107px] h-[32px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 107 32">
                       <path d={svgPaths.p181b8e00} fill={selectedDrone === '多旋翼无人机' ? "#C99619" : "#F5DB9B"} />
                    </svg>
                  </div>
                }
              />
              <DroneOption 
                label="固定翼无人机" 
                isSelected={selectedDrone === '固定翼无人机'}
                onClick={() => setSelectedDrone('固定翼无人机')}
                icon={
                  <div className="w-[63px] h-[48px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 63 48">
                      <path d={svgPaths.p23721080} fill={selectedDrone === '固定翼无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p9707000} fill={selectedDrone === '固定翼无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p1df1e380} fill={selectedDrone === '固定翼无人机' ? "#C99619" : "#F5DB9B"} />
                    </svg>
                  </div>
                }
              />
              <DroneOption 
                label="垂直起降无人机" 
                isSelected={selectedDrone === '垂直起降无人机'}
                onClick={() => setSelectedDrone('垂直起降无人机')}
                icon={
                  <div className="w-[107px] h-[22px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 107 22">
                      <path d={svgPaths.p3ab7b400} fill={selectedDrone === '垂直起降无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p33ae4a00} fill={selectedDrone === '垂直起降无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p2a3ade00} fill={selectedDrone === '垂直起降无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p17f7ca00} fill={selectedDrone === '垂直起降无人机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p389bf600} fill={selectedDrone === '垂直起降无人机' ? "#C99619" : "#F5DB9B"} />
                    </svg>
                  </div>
                }
              />
              <DroneOption 
                label="无人直升机" 
                isSelected={selectedDrone === '无人直升机'}
                onClick={() => setSelectedDrone('无人直升机')}
                icon={
                  <div className="w-[70px] h-[48px]">
                     <svg className="block size-full" fill="none" viewBox="0 0 70 48">
                      <path d={svgPaths.p224cd900} fill={selectedDrone === '无人直升机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p3fc62800} fill={selectedDrone === '无人直升机' ? "#C99619" : "#F5DB9B"} />
                      <path d={svgPaths.p1827d300} fill={selectedDrone === '无人直升机' ? "#C99619" : "#F5DB9B"} />
                    </svg>
                  </div>
                }
              />
            </div>
          </div>

          {/* License Types */}
          <div>
            <h2 className="text-[#99a1af] text-[14px] font-normal leading-[20px] tracking-[-0.15px] mb-[16px]">执照类型</h2>
            <div className="grid grid-cols-2 gap-[16px]">
              <LicenseOption 
                label="视距内驾驶员" 
                isSelected={selectedLicense === '视距内驾驶员'}
                onClick={() => setSelectedLicense('视距内驾驶员')}
              />
              <LicenseOption 
                label="超视距驾驶员" 
                isSelected={selectedLicense === '超视距驾驶员'}
                onClick={() => setSelectedLicense('超视距驾驶员')}
              />
              <LicenseOption 
                label="无人机教员" 
                isSelected={selectedLicense === '无人机教员'}
                onClick={() => setSelectedLicense('无人机教员')}
              />
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#fefbf4] to-transparent h-[100px] flex items-center justify-center pointer-events-none px-[16px] md:static md:bg-none md:h-auto md:py-6 md:border-t md:border-[#f3f4f6]">
          <div 
            className="w-full max-w-[380px] h-[50px] bg-[#c99619] rounded-full flex items-center justify-center shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] cursor-pointer pointer-events-auto active:scale-95 transition-transform"
            onClick={() => onConfirm(selectedDrone, selectedLicense)}
          >
            <span className="text-white text-[16px] font-medium leading-[24px] tracking-[-0.31px]">完成</span>
          </div>
        </div>

      </div>
    </div>
  );
}
