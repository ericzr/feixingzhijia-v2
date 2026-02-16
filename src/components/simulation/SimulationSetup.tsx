import React, { useState } from 'react';
import { SECONDARY_PAGE_BG } from '../../constants/theme';
import { ChevronLeft, Check, Plane, Crosshair, Map, AlertTriangle, Wind, Zap, Navigation } from 'lucide-react';
import { cn } from '../ui/utils';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

interface SimulationSetupProps {
  onBack: () => void;
}

type Drone = {
  id: string;
  name: string;
  desc: string;
  image?: string;
};

const DRONES: Drone[] = [
  { id: 'mavic', name: 'Mavic 3', desc: '全向避障，哈苏影像' },
  { id: 'phantom', name: 'Phantom 4 Pro', desc: '经典机型，手感扎实' },
  { id: 'inspire', name: 'Inspire 2', desc: '专业航拍，动力强劲' },
  { id: 'fpv', name: 'DJI FPV', desc: '沉浸式飞行，极速体验' },
];

type PracticeCategory = {
  id: string;
  title: string;
  icon: React.ElementType;
  items: string[];
};

const PRACTICE_CATEGORIES: PracticeCategory[] = [
  {
    id: 'basic',
    title: '基础操控',
    icon: Crosshair,
    items: ['对尾悬停', '对头悬停', '左侧/右侧悬停', '360度“刷锅”悬停']
  },
  {
    id: 'exam',
    title: '考试科目专项练习',
    icon: Map,
    items: ['水平8字飞行', '自旋', '四位悬停平移', '航线飞行']
  },
  {
    id: 'advanced',
    title: '进阶与应急处置',
    icon: AlertTriangle,
    items: ['复杂气象模拟', '设备故障模拟', '复杂环境飞行']
  }
];

export function SimulationSetup({ onBack }: SimulationSetupProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDrone, setSelectedDrone] = useState<string | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const handleNext = () => {
    if (step === 1 && selectedDrone) {
      setStep(2);
    }
  };

  const handleStartSimulation = () => {
      // In a real app, this would navigate to the simulation canvas
      alert(`开始模拟飞行!\n机型: ${DRONES.find(d => d.id === selectedDrone)?.name}\n科目: ${selectedPractice}`);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 w-full overflow-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      {/* Header */}
      <div className="pt-[50px] px-4 shrink-0">
        <div className="relative flex items-center justify-center h-[44px]">
          <button 
            onClick={step === 1 ? onBack : () => setStep(1)} 
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 -ml-1 text-[#1d293d]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-[17px] font-medium text-[#1d293d]">
            {step === 1 ? '选择机型' : '选择练习内容'}
          </h1>
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-0 px-4 py-2">
        <div className="pb-8 space-y-4">
          
          {step === 1 && (
            <div className="grid gap-3">
              {DRONES.map((drone) => (
                <div
                  key={drone.id}
                  onClick={() => setSelectedDrone(drone.id)}
                  className={cn(
                    "relative flex items-center p-4 bg-white rounded-2xl border-2 transition-all cursor-pointer",
                    selectedDrone === drone.id 
                      ? "border-[#c99619] bg-[#fffcf5]" 
                      : "border-transparent shadow-sm hover:border-[#f5db9b]"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0",
                    selectedDrone === drone.id ? "bg-[#c99619] text-white" : "bg-gray-100 text-gray-400"
                  )}>
                    <Plane className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn("font-medium text-[16px]", selectedDrone === drone.id ? "text-[#755609]" : "text-[#1d293d]")}>
                      {drone.name}
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-1">{drone.desc}</p>
                  </div>
                  {selectedDrone === drone.id && (
                    <div className="absolute top-4 right-4 text-[#c99619]">
                      <Check className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {PRACTICE_CATEGORIES.map((category) => (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2 px-1">
                    <category.icon className="w-5 h-5 text-[#c99619]" />
                    <h2 className="text-[15px] font-medium text-[#1d293d]">{category.title}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        onClick={() => setSelectedPractice(item)}
                        className={cn(
                          "flex flex-col items-center justify-center p-3 h-[80px] bg-white rounded-xl border-2 transition-all cursor-pointer text-center",
                          selectedPractice === item 
                            ? "border-[#c99619] bg-[#fffcf5] text-[#755609]" 
                            : "border-transparent shadow-sm text-[#1d293d] hover:border-[#f5db9b]"
                        )}
                      >
                        <span className="text-[14px] font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Footer Action */}
      <div className="p-4 bg-white border-t border-gray-100 shrink-0 safe-area-bottom">
        {step === 1 ? (
          <Button 
            className="w-full h-[50px] bg-[#c99619] hover:bg-[#b08315] text-white text-[16px] rounded-xl font-medium"
            disabled={!selectedDrone}
            onClick={handleNext}
          >
            下一步
          </Button>
        ) : (
           <Button 
            className="w-full h-[50px] bg-[#c99619] hover:bg-[#b08315] text-white text-[16px] rounded-xl font-medium"
            disabled={!selectedPractice}
            onClick={handleStartSimulation}
          >
            开始训练
          </Button>
        )}
      </div>
    </div>
  );
}
