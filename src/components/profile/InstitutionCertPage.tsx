import React, { useState } from "react";
import { getPublicUrl } from "../../utils/publicPath";

interface InstitutionCertPageProps {
  onBack: () => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "48px",
  borderRadius: "14px",
  border: "0.66px solid #EDC764",
  backgroundColor: "rgba(246,230,186,0.3)",
  padding: "0 16px 0 44px",
  fontSize: "15px",
  color: "#685622",
  outline: "none",
};

const cardStyle = {
  borderRadius: "14px",
  border: "0.66px solid #EDC764",
  backgroundColor: "rgba(246,230,186,0.25)",
};

type Institution = {
  id: string;
  name: string;
  location: string;
  tag: string;
  verified: boolean;
  icon: "trophy" | "helicopter" | "ruler" | "gamepad";
};

const institutions: Institution[] = [
  { id: "1", name: "北京天途航空培训学院", location: "北京市昌平区", tag: "AOPA认证", verified: true, icon: "trophy" },
  { id: "2", name: "深圳大疆慧飞总部学院", location: "深圳市南山区", tag: "大疆认证", verified: true, icon: "helicopter" },
  { id: "3", name: "成都纵横无人机飞行学院", location: "成都市高新区", tag: "垂直起降", verified: false, icon: "ruler" },
  { id: "4", name: "中航智航空模拟飞行中心", location: "上海市浦东新区", tag: "工业级", verified: true, icon: "gamepad" },
];

function InstitutionIcon({ type }: { type: Institution["icon"] }) {
  const color = type === "trophy" ? "#EDC764" : type === "helicopter" ? "#c0392b" : type === "ruler" ? "#2980b9" : "#2c3e50";
  if (type === "trophy") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M8 21h8M12 17v4M7 5h10v4a4 4 0 01-4 4h-2a4 4 0 01-4-4V5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 5V4a2 2 0 012-2h6a2 2 0 012 2v1M5 9h2a2 2 0 002-2V5H5v2a2 2 0 002 2zM19 9h-2a2 2 0 00-2-2V5h4v2a2 2 0 002 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17a4 4 0 004-4V9H8v4a4 4 0 004 4z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "helicopter") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83M19 12a7 7 0 11-14 0 7 7 0 0114 0z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "ruler") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M4 8h16M4 16h16M4 12h2M8 12h2M14 12h2M18 12h2M4 6v12M20 6v12M6 4v2M10 4v2M14 4v2M18 4v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <rect x="4" y="8" width="16" height="10" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M8 12h2M14 12h2M10 15h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InstitutionCertPage({ onBack }: InstitutionCertPageProps) {
  const [search, setSearch] = useState("");

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
        style={{
        minHeight: "100%",
        background: "linear-gradient(180deg, #faf6ed 0%, #fcf9f2 35%, #fefcf8 65%, #fefbf4 100%)",
      }}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center justify-center w-full sticky top-0 z-30" style={{ paddingTop: "50px", paddingBottom: "12px" }}>
        <div className="absolute z-20" style={{ left: "12px", top: "50px" }}>
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[20px] text-center" style={{ letterSpacing: "-0.4492px", lineHeight: "30px" }}>
          绑定认证机构
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col px-4 md:px-6 pb-8" style={{ paddingTop: "24px", gap: "20px" }}>
          <p className="text-[14px] leading-relaxed" style={{ color: "#8B7355" }}>
            绑定您所属的航校或机构,通过官方核实即可点亮专业技能勋章,开启职业作业权限。
          </p>

          {/* 搜索 */}
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <circle cx="11" cy="11" r="8" stroke="#8B7355" strokeWidth="1.5" />
              <path d="M21 21l-4.35-4.35" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="placeholder:text-[#8B7355]/90"
              placeholder="输入机构名称或6位校验码"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* 扫码快速认证 */}
          <div className="flex flex-col p-4" style={cardStyle}>
            <div className="flex flex-col" style={{ gap: "8px" }}>
              <span className="font-bold text-[#685622] text-[16px]">扫码快速认证</span>
              <p className="text-[13px] leading-relaxed" style={{ color: "#8B7355" }}>扫描航校提供的专属认证二维码</p>
              <button
                type="button"
                className="self-start flex items-center gap-1 cursor-pointer active:opacity-80"
                style={{ color: "#c99619", fontSize: "14px", fontWeight: 500 }}
              >
                立即扫码
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* 推荐合作机构 */}
          <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>推荐合作机构</span>

          <div className="flex flex-col" style={{ gap: "12px" }}>
            {institutions.map((inst) => (
              <div
                key={inst.id}
                className="flex items-center p-4 rounded-[14px]"
                style={{ ...cardStyle, gap: "12px" }}
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
                  <InstitutionIcon type={inst.icon} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col" style={{ gap: "4px" }}>
                  <div className="flex items-center flex-wrap" style={{ gap: "6px" }}>
                    <span className="font-semibold text-[#685622] text-[15px]">{inst.name}</span>
                    {inst.verified && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M20 6L9 17l-5-5" stroke="#EDC764" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "#8B7355", fontSize: "13px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {inst.location}
                  </div>
                  <span
                    className="inline-flex items-center justify-center self-start rounded-full text-[12px] font-medium mt-1"
                    style={{ width: "71px", height: "24px", backgroundColor: "rgba(237,199,100,0.3)", color: "#685622" }}
                  >
                    {inst.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
