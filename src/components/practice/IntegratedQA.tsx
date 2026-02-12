import React, { useState } from 'react';
import svgPaths from "../../imports/svg-qzq1qo8orq";

function IconBack() {
  return (
    <div className="h-[14px] relative shrink-0 w-[7.005px]">
      <div className="absolute inset-[-8.33%_-16.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
          <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
        </svg>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="flex flex-col h-[28px] items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px] cursor-pointer active:opacity-70 transition-opacity" 
      onClick={onClick}
    >
      <div className="flex flex-col justify-center overflow-clip size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[4px] relative w-full">
          <IconBack />
        </div>
      </div>
    </div>
  );
}

type TabType = 'comprehensive' | 'uom' | 'qa' | 'policy' | 'guide';

function FeatureButton({ 
  icon, 
  label, 
  isActive,
  onClick
}: { 
  icon: React.ReactNode, 
  label: string, 
  isActive: boolean,
  onClick: () => void
}) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex flex-col gap-[6px] h-[72px] items-center justify-center relative rounded-[14px] shrink-0 w-[84px] cursor-pointer transition-all duration-200 ${
        isActive 
          ? "bg-white shadow-[0px_1px_3px_0px_rgba(201,150,25,0.18),0px_1px_2px_-1px_#c99619]" 
          : "bg-[#fbf2db] opacity-80"
      }`}
    >
      {icon}
      <div className="h-[15.985px] relative shrink-0 w-[47.988px]">
        <p className={`absolute font-medium leading-[16px] left-[24px] not-italic text-[12px] text-center text-nowrap top-[0.74px] translate-x-[-50%] tracking-tight ${
          isActive ? "text-[#c99619]" : "text-[#45556c]"
        }`}>
          {label}
        </p>
      </div>
    </div>
  );
}

function ListItem({ title }: { title: string }) {
  return (
    <div className="h-[49px] relative shrink-0 w-full border-b border-[#f3f4f6] last:border-b-0 cursor-pointer active:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between h-full px-[16px]">
        <p className="text-[#1e2939] text-[14px] font-normal truncate max-w-[85%]">{title}</p>
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path d="M7.5 15L12.5 10L7.5 5" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </svg>
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<TabType, string[]> = {
  comprehensive: [
    "无人机“谁能飞”“谁在飞”，强制性国家标准发布",
    "天津市人民政府通告",
    "北京市人民政府关于公布无人驾驶航空器管制....",
    "《民用无人驾驶航空器事件信息管理办法(征求意见稿)》",
    "飞行动态数据的相关单位及其无人驾驶航空器型号公示",
    "民用无人驾驶航空器飞行动态数据报送要求的公告",
    "第二次绿色通道可换发运营合格证企业名单"
  ],
  uom: [
    "UOM系统更新维护通知 (2025-12-01)",
    "关于民用无人机实名登记系统的操作说明",
    "UOM综合管理平台手机客户端正式上线",
    "关于UOM平台实名认证失败的常见问题解答"
  ],
  qa: [
    "视距内驾驶员考试有哪些科目？",
    "无人机驾驶员执照如何申请延期？",
    "考试未通过如何申请补考？",
    "理论考试和实践考试的具体要求"
  ],
  policy: [
    "《民用无人驾驶航空器运行安全管理规则》",
    "关于无人机禁飞区划定的最新政策解读",
    "通用航空飞行任务审批流程优化方案"
  ],
  guide: [
    "UOM平台注册流程指南",
    "无人机实名登记贴码规范",
    "如何查看自己的电子执照？",
    "空域申请操作全流程视频演示"
  ]
};

export function IntegratedQA({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<TabType>('comprehensive');
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      console.log('Sending message:', inputText);
      setInputText('');
    }
  };

  return (
    <div 
      className="relative size-full min-h-screen flex flex-col overflow-hidden" 
      style={{ backgroundImage: "linear-gradient(rgb(245, 219, 155) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center left-0 p-[12px] pt-[50px] w-full relative z-10">
        <BackButton onClick={onBack} />
        <div className="flex-1 flex justify-center pr-[36px]">
          <h1 className="text-[#1d293d] text-[18px] font-bold tracking-tight">AI问答助手</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-[18px] pt-[16px]">
        {/* Horizontal scrollable buttons */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden px-[16px]">
          <div className="flex items-center gap-[12px] min-w-max pb-2">
            <FeatureButton 
              label="综合知识" 
              isActive={activeTab === 'comprehensive'}
              onClick={() => setActiveTab('comprehensive')}
              icon={
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2ab0f800} fill={activeTab === 'comprehensive' ? "#C99619" : "#8A7D60"} />
                </svg>
              } 
            />
            <FeatureButton 
              label="UOM公告" 
              isActive={activeTab === 'uom'}
              onClick={() => setActiveTab('uom')}
              icon={
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.pdf1bc80} fill={activeTab === 'uom' ? "#C99619" : "#8A7D60"} stroke={activeTab === 'uom' ? "#C99619" : "#8A7D60"} strokeWidth="0.4" />
                </svg>
              } 
            />
            <FeatureButton 
              label="题库问答" 
              isActive={activeTab === 'qa'}
              onClick={() => setActiveTab('qa')}
              icon={
                <svg className="h-[24px] w-[23px]" fill="none" viewBox="0 0 23 24">
                  <path d={svgPaths.p34d8ac00} fill={activeTab === 'qa' ? "#C99619" : "#8A7D60"} stroke={activeTab === 'qa' ? "#C99619" : "#8A7D60"} strokeWidth="0.4" />
                  <path d={svgPaths.p1f451080} fill={activeTab === 'qa' ? "#C99619" : "#8A7D60"} stroke={activeTab === 'qa' ? "#C99619" : "#8A7D60"} strokeWidth="0.4" />
                </svg>
              } 
            />
            <FeatureButton 
              label="政策法规" 
              isActive={activeTab === 'policy'}
              onClick={() => setActiveTab('policy')}
              icon={
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.pb4bcb00} fill={activeTab === 'policy' ? "#C99619" : "#8A7D60"} />
                  <path d={svgPaths.p3d7292a0} fill={activeTab === 'policy' ? "#C99619" : "#8A7D60"} />
                </svg>
              } 
            />
            <FeatureButton 
              label="操作指南" 
              isActive={activeTab === 'guide'}
              onClick={() => setActiveTab('guide')}
              icon={
                <svg className="size-[22px]" fill="none" viewBox="0 0 22 22">
                  <path d={svgPaths.p27176800} fill={activeTab === 'guide' ? "#C99619" : "#8A7D60"} />
                </svg>
              } 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[16px] w-full px-[16px]">
          <p className="text-[#4a5565] text-[14px] leading-[20px] font-normal tracking-tight">
            我是大黄蜂智能AI助手，为您提供行业全方位的支持和解答～
          </p>
          
          <div className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
            {TAB_CONTENT[activeTab].map((title, index) => (
              <ListItem key={index} title={title} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Input Area */}
      <div className="bg-white border-t border-[#e5e7eb] px-[16px] py-[12px] pb-[34px] flex flex-col gap-[12px]">
        <div className="flex items-center gap-[8px]">
          <div className="flex-1 bg-[rgba(251,242,219,0.67)] h-[36px] rounded-full px-[16px] flex items-center">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="输入你想咨询的问题......"
              className="w-full bg-transparent border-none outline-none text-[#c99619] text-[12px] placeholder:text-[#c99619]/60 font-normal leading-normal tracking-[-0.15px]"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
          <div 
            onClick={handleSend}
            className="bg-[#fbf2db] rounded-full size-[36px] flex items-center justify-center cursor-pointer active:opacity-80 transition-opacity"
          >
            <div className="size-[20px] relative overflow-hidden">
              <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]">
                <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3353 18.3353">
                  <path d={svgPaths.p228d3dc0} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </div>
              <div className="absolute inset-[8.95%_8.94%_45.48%_45.48%]">
                <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7833 10.7825">
                  <path d={svgPaths.p2920ab80} stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#afa199] text-[10px] text-center font-normal leading-[16px]">
          内容来源于民用无人驾驶航空器综合管理平台（UOM）
        </p>
      </div>
    </div>
  );
}