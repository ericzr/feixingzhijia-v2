import React from "react";
import { getPublicUrl } from "../../utils/publicPath";

interface ClimateQueryPageProps {
  onBack: () => void;
}

/** 通用白底卡片：设计稿 14px 圆角、0.7 透明度、金边 */
const contentCardStyle = {
  borderRadius: "14px",
  border: "1px solid #edc764",
  backgroundColor: "rgba(255,255,255,0.7)",
  boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.15)",
};

const sectionTitleStyle = {
  fontWeight: 700 as const,
  color: "#685622",
  fontSize: "18px",
  letterSpacing: "-0.44px",
  marginBottom: "16px",
};

/** 气象要素小图标 - 金色，温度计（竖杆+底部圆泡） */
const IconTemp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 2v11" stroke="#c99619" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17" r="3.5" stroke="#c99619" strokeWidth="1.5" fill="none" />
  </svg>
);
const IconWind = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M9 8h8M6 12h12M7 16h6" stroke="#c99619" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 5l2 2-2 2M14 11l2 2-2 2" stroke="#c99619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
/** 降雨量 - 设计稿：上方一滴轮廓 + 下方三点（降水） */
const IconRain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 3c-2.5 3.5-5 7-5 9.5a5 5 0 1010 0C17 10 14.5 6.5 12 3z" stroke="#c99619" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <circle cx="8" cy="18" r="1.2" fill="#c99619" />
    <circle cx="12" cy="20" r="1.2" fill="#c99619" />
    <circle cx="16" cy="18" r="1.2" fill="#c99619" />
  </svg>
);
/** 湿度 - 设计稿：单颗水滴带内高光 */
const IconHumidity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 2.5c-2.8 4-6 8-6 11.5a6 6 0 1012 0c0-3.5-3.2-7.5-6-11.5z" stroke="#c99619" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <ellipse cx="12" cy="10" rx="2" ry="2.5" stroke="#c99619" strokeWidth="1" fill="none" opacity="0.8" />
  </svg>
);
const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M12 5c-5 0-8 4-8 7s3 7 8 7 8-4 8-7-3-7-8-7z" stroke="#c99619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.5" stroke="#c99619" strokeWidth="1.5" />
  </svg>
);
const IconCloud = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M18 11h-1.5a3.5 3.5 0 00-7 0H6a4 4 0 100 8h12a4 4 0 100-8z" stroke="#c99619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ClimateQueryPage({ onBack }: ClimateQueryPageProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        minHeight: "100%",
        background: "linear-gradient(180deg, #f5db9b 0%, #fbf2db 28%, #fef8eb 55%, #fefbf4 100%)",
      }}
    >
      {/* Header - 固定于页面顶部，无独立背景以延续整体页面渐变 */}
      <div
        className="shrink-0 flex items-center justify-center w-full sticky top-0 z-30"
        style={{ paddingTop: "50px", paddingBottom: "12px" }}
      >
        <div className="absolute z-20" style={{ left: "12px", top: "50px" }}>
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[20px] text-center" style={{ letterSpacing: "-0.4492px", lineHeight: "30px" }}>
          气候查询
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
      {/* Search Bar - 设计稿：白底、1px 金边、与头部间距约 16px */}
      <div className="shrink-0 z-20" style={{ padding: "8px 24px 16px 24px" }}>
        <div
          className="w-full flex items-center"
          style={{
            height: "48px",
            borderRadius: "24px",
            border: "1px solid #edc764",
            backgroundColor: "#ffffff",
            boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.18)",
            paddingLeft: "48px",
            paddingRight: "16px",
            position: "relative",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", left: "16px", top: "14px" }}>
            <circle cx="9" cy="9" r="7" stroke="#8b7355" strokeWidth="1.5" />
            <path d="M14 14L18 18" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[15px]" style={{ color: "rgba(104,86,34,0.5)", letterSpacing: "-0.2344px" }}>
            搜索地址查看天气
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col" style={{ padding: "0 24px 40px", gap: "24px" }}>
        {/* 飞行适宜性评估 - 设计稿：浅绿透明底、细绿边、定位为金色 */}
        <div
          className="w-full flex flex-col"
          style={{
            borderRadius: "16px",
            padding: "20px",
            backgroundColor: "rgba(177,209,114,0.15)",
            border: "1px solid rgba(76,175,80,0.35)",
            boxShadow: "0px 2px 8px 0px rgba(76,175,80,0.12)",
          }}
        >
          <div className="flex items-center" style={{ gap: "12px", marginBottom: "14px" }}>
            <div className="shrink-0 flex items-center justify-center" style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(76,175,80,0.2)", border: "1.5px solid #4caf50" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-bold text-[#2e7d32] text-[18px]" style={{ letterSpacing: "-0.44px" }}>适宜飞行</span>
          </div>
          <p className="text-[#685622] text-[14px]" style={{ marginBottom: "10px", letterSpacing: "-0.15px", opacity: 0.9 }}>综合飞行指数: 85/100</p>
          <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", backgroundColor: "rgba(76,175,80,0.2)", marginBottom: "14px" }}>
            <div className="h-full rounded-full" style={{ width: "85%", backgroundColor: "#4caf50" }} />
          </div>
          <div className="flex items-center" style={{ gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z" fill="#edc764" stroke="#c99619" strokeWidth="1" />
              <circle cx="10" cy="8" r="2" fill="white" stroke="#c99619" strokeWidth="1" />
            </svg>
            <span className="text-[#685622] text-[14px]" style={{ letterSpacing: "-0.15px" }}>北京市朝阳区</span>
          </div>
        </div>

        {/* 核心气象要素 - 图标置于卡片右上角，文字左对齐 */}
        <div>
          <p className="font-bold" style={sectionTitleStyle}>核心气象要素</p>
          <div
            className="grid grid-cols-2"
            style={{ gap: "14px 14px" }}
          >
            {[
              { label: "温度", value: "18°C", sub: null, Icon: IconTemp },
              { label: "风速", value: "3.2 m/s", sub: "S 阵风 5.8 m/s", Icon: IconWind },
              { label: "降雨量", value: "0 mm", sub: null, Icon: IconRain },
              { label: "湿度", value: "65%", sub: null, Icon: IconHumidity },
              { label: "能见度", value: "15 km", sub: null, Icon: IconEye },
              { label: "云层", value: "多云, 云底高度1200米", sub: null, Icon: IconCloud },
            ].map((item) => (
              <div key={item.label} className="relative flex flex-col p-4" style={contentCardStyle}>
                <div
                  className="absolute z-10 flex items-center justify-center"
                  style={{ right: "12px", top: "12px", width: "20px", height: "20px" }}
                >
                  {<item.Icon />}
                </div>
                <div className="flex flex-col min-w-0" style={{ gap: "4px", paddingRight: "36px", maxWidth: "calc(100% - 32px)" }}>
                  <span className="text-[#8b7355] text-[12px]" style={{ letterSpacing: "-0.1px" }}>{item.label}</span>
                  <span className="font-medium text-[#685622] text-[15px]" style={{ letterSpacing: "-0.23px" }}>{item.value}</span>
                  {item.sub && <span className="text-[#8b7355] text-[11px]" style={{ letterSpacing: "-0.1px" }}>{item.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 地理与空间 - 上半区 10% 渐变背景，下半区日出/日落各在半区内居中 */}
        <div>
          <p className="font-bold" style={sectionTitleStyle}>地理与空间</p>
          <div
            className="flex flex-col overflow-hidden"
            style={{
              borderRadius: "14px",
              border: "1px solid #edc764",
              boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.15)",
            }}
          >
            {/* 上半区：位置信息，背景 10% 金色渐变 */}
            <div
              className="flex flex-col items-center justify-center p-5"
              style={{
                background: "linear-gradient(180deg, rgba(237,199,100,0.12) 0%, rgba(237,199,100,0.06) 100%)",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 20 20" fill="none" style={{ marginBottom: "10px" }}>
                <path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z" fill="#edc764" stroke="#c99619" strokeWidth="1" />
                <circle cx="10" cy="8" r="2" fill="white" stroke="#c99619" strokeWidth="1" />
              </svg>
              <span className="text-[#685622] font-medium text-[15px]" style={{ letterSpacing: "-0.23px" }}>北京市朝阳区</span>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(237,199,100,0.35)" }} />
            {/* 下半区：日出/日落分别居中于左半区与右半区，背景 70% 透明白 */}
            <div
              className="flex items-stretch"
              style={{ minHeight: "72px", backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="flex items-center" style={{ gap: "10px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v2M12 19v2M4 12H2M22 12h-2M5.64 5.64l-1.41 1.41M19.78 19.78l-1.41 1.41M5.64 18.36l-1.41-1.41M19.78 4.22l-1.41-1.41" stroke="#edc764" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="#edc764" strokeWidth="1.8"/></svg>
                  <div className="flex flex-col" style={{ gap: "2px" }}>
                    <span className="text-[#8b7355] text-[12px]">日出</span>
                    <span className="font-bold text-[#685622] text-[16px]" style={{ letterSpacing: "-0.25px" }}>06:24</span>
                  </div>
                </div>
              </div>
              <div style={{ width: "1px", alignSelf: "stretch", backgroundColor: "rgba(237,199,100,0.4)", flexShrink: 0 }} />
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="flex items-center" style={{ gap: "10px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21v-2M12 5V3M4 12H2M22 12h-2M5.64 18.36l1.41-1.41M18.36 5.64l1.41-1.41M5.64 5.64l1.41 1.41M18.36 18.36l1.41 1.41" stroke="#c99619" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="#c99619" strokeWidth="1.8"/></svg>
                  <div className="flex flex-col" style={{ gap: "2px" }}>
                    <span className="text-[#8b7355] text-[12px]">日落</span>
                    <span className="font-bold text-[#685622] text-[16px]" style={{ letterSpacing: "-0.25px" }}>17:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 24小时作业窗口期 - 标题左对齐，最佳时段标签右对齐 */}
        <div>
          <div className="flex items-center justify-between w-full" style={{ marginBottom: "16px" }}>
            <p className="font-bold shrink-0" style={{ ...sectionTitleStyle, marginBottom: 0 }}>24小时作业窗口期</p>
            <span
              className="text-[#2e7d32] text-[12px] font-medium shrink-0"
              style={{ padding: "6px 12px", borderRadius: "12px", backgroundColor: "rgba(76,175,80,0.18)", letterSpacing: "-0.1px" }}
            >
              最佳时段: 10:00-12:00
            </span>
          </div>
          <div
            className="flex overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
            style={{ gap: "10px", paddingRight: "4px", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[
              { time: "08:00", temp: "14°", wind: "2.1m/s", dot: "#e0e0e0", bg: "rgba(255,255,255,0.7)", border: "#edc764" },
              { time: "09:00", temp: "15°", wind: "2.5m/s", dot: "#81c784", bg: "rgba(129,199,132,0.12)", border: "rgba(76,175,80,0.4)" },
              { time: "10:00", temp: "16°", wind: "3.2m/s", dot: "#4caf50", bg: "rgba(76,175,80,0.12)", border: "rgba(76,175,80,0.5)" },
              { time: "11:00", temp: "17°", wind: "2.8m/s", dot: "#4caf50", bg: "rgba(76,175,80,0.12)", border: "rgba(76,175,80,0.5)" },
              { time: "12:00", temp: "18°", wind: "3.2m/s", dot: "#4caf50", bg: "rgba(76,175,80,0.12)", border: "rgba(76,175,80,0.5)" },
              { time: "13:00", temp: "19°", wind: "4.0m/s", dot: "#ffeb3b", bg: "rgba(255,235,59,0.15)", border: "rgba(255,193,7,0.5)" },
              { time: "14:00", temp: "19°", wind: "4.2m/s", dot: "#ffeb3b", bg: "rgba(255,235,59,0.15)", border: "rgba(255,193,7,0.5)" },
              { time: "15:00", temp: "18°", wind: "5.0m/s", dot: "#e57373", bg: "rgba(244,67,54,0.1)", border: "rgba(244,67,54,0.4)" },
            ].map((h) => (
              <div
                key={h.time}
                className="shrink-0 flex flex-col items-center p-3"
                style={{ minWidth: "76px", borderRadius: "12px", border: `1px solid ${h.border}`, backgroundColor: h.bg, boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.06)" }}
              >
                <span className="text-[#685622] text-[13px] font-medium" style={{ letterSpacing: "-0.2px" }}>{h.time}</span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: h.dot, margin: "8px 0" }} />
                <span className="text-[#685622] text-[13px] font-medium">{h.temp}</span>
                <span className="text-[#8b7355] text-[11px] mt-0.5">{h.wind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 专业预警提示 - 卡片填充色为 10% EDC764 */}
        <div>
          <p className="font-bold" style={sectionTitleStyle}>专业预警提示</p>
          <div
            className="flex items-start p-4"
            style={{
              borderRadius: "14px",
              border: "1px solid #edc764",
              backgroundColor: "rgba(237,199,100,0.1)",
              boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.12)",
              gap: "14px",
            }}
          >
            <div className="shrink-0 flex items-center justify-center mt-0.5" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(237,199,100,0.35)", border: "1px solid rgba(201,150,25,0.4)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#c99619" strokeWidth="1.5" />
                <path d="M12 6.5V12l4 2.5" stroke="#c99619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col" style={{ gap: "6px" }}>
              <span className="font-medium text-[#685622] text-[15px]" style={{ letterSpacing: "-0.23px" }}>时段建议</span>
              <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.15px", lineHeight: "20px" }}>
                午后可能有对流天气发展，建议在12:00前完成作业任务
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
