import React from "react";
import { getPublicUrl } from "../../utils/publicPath";

interface FlightApplicationPageProps {
  onBack: () => void;
  onProxyApply?: () => void;
  onRecords?: () => void;
}

/** 标签胶囊组件 */
function TagPill({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "30px", paddingLeft: "12px", paddingRight: "12px", backgroundColor: "rgba(237,199,100,0.2)", borderRadius: "12px" }}
    >
      <span className="font-medium text-[#685622] text-[12px] leading-[18px]">{label}</span>
    </div>
  );
}

export function FlightApplicationPage({ onBack, onProxyApply, onRecords }: FlightApplicationPageProps) {
  const handleSelfApply = () => {
    window.open("https://uom.caac.gov.cn/#/login", "_blank");
  };

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)",
      }}
    >
      {/* ====== Header ====== */}
      <div className="shrink-0 flex items-center justify-center pt-[50px] pb-3 w-full relative z-10">
        <div className="absolute left-[12px] top-[50px] z-20">
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[20px] text-center" style={{ letterSpacing: "-0.4492px", lineHeight: "30px" }}>
          飞行申请
        </p>
        <div className="absolute right-[12px] top-[50px] z-20 flex items-center" style={{ height: "36px" }}>
          <button className="opacity-90 cursor-pointer active:opacity-70" onClick={onRecords}>
            <span className="font-medium text-[#685622] text-[15px]" style={{ letterSpacing: "-0.2344px", lineHeight: "22.5px" }}>
              申请记录
            </span>
          </button>
        </div>
      </div>

      {/* ====== Scrollable Content ====== */}
      <div className="flex-1 min-h-0 overflow-y-auto" style={{ paddingLeft: "18px", paddingRight: "18px", paddingBottom: "40px" }}>
        <div className="w-full flex flex-col gap-[20px] pt-[8px]">

          {/* ========== 自主申请卡片 ========== */}
          <div
            className="w-full flex flex-col items-center cursor-pointer active:scale-[0.98] transition-transform"
            style={{
              border: "2px solid #edc764",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px 0px rgba(237,199,100,0.3)",
              backgroundImage: "linear-gradient(151deg, rgba(255,255,255,0.8) 0%, rgba(254,251,244,0.8) 100%)",
              padding: "30px 30px 24px 30px",
            }}
            onClick={handleSelfApply}
          >
            {/* 图标: 金色渐变圆 + UOM文字 */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "60px", height: "60px", borderRadius: "50%",
                backgroundImage: "linear-gradient(135deg, rgb(237,199,100) 0%, rgb(201,150,25) 100%)",
                boxShadow: "0px 6px 16px 0px rgba(237,199,100,0.5)",
              }}
            >
              <span className="font-bold text-white text-[14px]" style={{ letterSpacing: "0.5px" }}>UOM</span>
            </div>

            {/* 标题 */}
            <p className="font-bold text-[#685622] text-[22px] text-center" style={{ letterSpacing: "-0.2578px", lineHeight: "33px", marginTop: "12px" }}>
              自主申请
            </p>

            {/* 描述 */}
            <div className="text-center" style={{ lineHeight: "22px", marginTop: "8px" }}>
              <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.1504px" }}>一键跳转UOM官方平台</p>
              <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.1504px" }}>提交飞行报备请求</p>
            </div>

            {/* 标签 */}
            <div className="flex gap-[8px]" style={{ marginTop: "16px" }}>
              <TagPill label="官方直达" />
              <TagPill label="自行填写" />
              <TagPill label="即时提交" />
            </div>
          </div>

          {/* ========== 代申请卡片 ========== */}
          <div
            className="w-full flex flex-col items-center cursor-pointer active:scale-[0.98] transition-transform"
            style={{
              border: "2px solid #edc764",
              borderRadius: "24px",
              boxShadow: "0px 4px 20px 0px rgba(237,199,100,0.2)",
              backgroundImage: "linear-gradient(151deg, rgba(255,255,255,0.8) 0%, rgba(254,251,244,0.8) 100%)",
              padding: "30px 30px 24px 30px",
            }}
            onClick={onProxyApply}
          >
            {/* 图标: 金色边框圆 + 笔/编辑图标 */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "60px", height: "60px", borderRadius: "50%",
                backgroundColor: "rgba(237,199,100,0.3)",
                border: "2.6px solid #edc764",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d="M22.6 4.8L27.2 9.4L10.6 26H6V21.4L22.6 4.8Z" stroke="#C99619" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 8.4L23.6 13" stroke="#C99619" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* 标题 */}
            <p className="font-bold text-[#685622] text-[22px] text-center" style={{ letterSpacing: "-0.2578px", lineHeight: "33px", marginTop: "12px" }}>
              代申请
            </p>

            {/* 描述 */}
            <div className="text-center" style={{ lineHeight: "22px", marginTop: "8px" }}>
              <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.1504px" }}>通过平台内嵌表单填写</p>
              <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.1504px" }}>代为提交至UOM官方审批</p>
            </div>

            {/* 标签 */}
            <div className="flex gap-[8px]" style={{ marginTop: "16px" }}>
              <TagPill label="平台辅助" />
              <TagPill label="记录留存" />
              <TagPill label="代为提交" />
            </div>
          </div>

          {/* ========== 温馨提示 ========== */}
          <div
            className="w-full flex gap-[12px] items-start"
            style={{
              backgroundColor: "rgba(76,175,80,0.1)",
              border: "1.3px solid #4caf50",
              borderRadius: "16px",
              padding: "17px",
            }}
          >
            <img alt="" src={getPublicUrl("icons/flight/info-icon.svg")} style={{ display: "block", width: "20px", height: "20px", flexShrink: 0 }} />
            <p className="text-[#685622] text-[13px] leading-[20px]" style={{ letterSpacing: "-0.0762px" }}>
              温馨提示：所有申请信息需真实有效，虚假申请将被驳回并可能影响后续申请。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
