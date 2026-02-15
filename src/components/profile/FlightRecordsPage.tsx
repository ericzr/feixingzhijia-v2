import React, { useState } from "react";
import { getPublicUrl } from "../../utils/publicPath";

interface FlightRecordsPageProps {
  onBack: () => void;
}

type TabType = "all" | "pending" | "approved" | "rejected";

type RecordStatus = "pending" | "approved" | "rejected" | "completed";

interface FlightRecord {
  id: string;
  status: RecordStatus;
  submitTime: string;
  flightDate: string;
  flightTime: string;
  location: string;
  drone: string;
  purpose: string;
}

const mockRecords: FlightRecord[] = [
  { id: "FL20260125001", status: "approved", submitTime: "2026-01-25 14:30", flightDate: "2026-01-28", flightTime: "09:00-12:00", location: "北京市朝阳区奥林匹克公园", drone: "DJI Mavic 3", purpose: "航拍摄影" },
  { id: "FL20260124002", status: "pending", submitTime: "2026-01-24 10:20", flightDate: "2026-01-30", flightTime: "14:00-17:00", location: "北京市海淀区颐和园", drone: "DJI Phantom 4 RTK", purpose: "地理测绘" },
  { id: "FL20260123003", status: "rejected", submitTime: "2026-01-23 09:15", flightDate: "2026-01-26", flightTime: "08:00-11:00", location: "北京市东城区天安门广场", drone: "DJI Mini 3 Pro", purpose: "航拍摄影" },
  { id: "FL20260120004", status: "completed", submitTime: "2026-01-18 11:00", flightDate: "2026-01-22", flightTime: "10:00-12:00", location: "北京市通州区大运河森林公园", drone: "DJI Matrice 300", purpose: "科研试验" },
];

const statusConfig: Record<RecordStatus, { label: string; color: string; bg: string }> = {
  pending: { label: "待审批", color: "#c99619", bg: "rgba(201,150,25,0.15)" },
  approved: { label: "已通过", color: "#4caf50", bg: "rgba(76,175,80,0.15)" },
  rejected: { label: "已拒绝", color: "#e53935", bg: "rgba(229,57,53,0.15)" },
  completed: { label: "已完成", color: "#4caf50", bg: "rgba(76,175,80,0.15)" },
};

function StatusBadge({ status }: { status: RecordStatus }) {
  const cfg = statusConfig[status];
  return (
    <span
      className="text-[12px] font-medium flex items-center justify-center"
      style={{ height: "22px", padding: "0 8px", borderRadius: "11px", backgroundColor: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

function RecordCard({ record }: { record: FlightRecord }) {
  return (
    <div
      className="w-full flex flex-col gap-[12px]"
      style={{ border: "1px solid #edc764", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.8)", padding: "18px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <p className="font-bold text-[#685622] text-[15px]" style={{ letterSpacing: "-0.23px" }}>{record.id}</p>
          <StatusBadge status={record.status} />
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#C99619" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      {/* Submit time */}
      <p className="text-[#8b7355] text-[13px]" style={{ letterSpacing: "-0.08px" }}>提交时间：{record.submitTime}</p>

      {/* Details */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="9" rx="1" stroke="#c99619" strokeWidth="1.2"/><path d="M2 6H12" stroke="#c99619" strokeWidth="1.2"/><path d="M5 3V1M9 3V1" stroke="#c99619" strokeWidth="1.2" strokeLinecap="round"/></svg>
          <span className="text-[#685622] text-[14px]" style={{ letterSpacing: "-0.15px" }}>飞行日期：{record.flightDate} {record.flightTime}</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="#c99619" strokeWidth="1.2"/><circle cx="7" cy="6" r="1.5" stroke="#c99619" strokeWidth="1.2"/></svg>
          <span className="text-[#685622] text-[14px]" style={{ letterSpacing: "-0.15px" }}>{record.location}</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="3" y="4" width="8" height="7" rx="1" stroke="#c99619" strokeWidth="1.2"/><path d="M5 4V2M9 4V2" stroke="#c99619" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="8" r="1" fill="#c99619"/></svg>
          <span className="text-[#685622] text-[14px]" style={{ letterSpacing: "-0.15px" }}>{record.drone}·{record.purpose}</span>
        </div>
      </div>
    </div>
  );
}

export function FlightRecordsPage({ onBack }: FlightRecordsPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: { key: TabType; label: string }[] = [
    { key: "all", label: "全部" },
    { key: "pending", label: "待审批" },
    { key: "approved", label: "已通过" },
    { key: "rejected", label: "已拒绝" },
  ];

  const filteredRecords = activeTab === "all"
    ? mockRecords
    : mockRecords.filter((r) => {
        if (activeTab === "approved") return r.status === "approved" || r.status === "completed";
        return r.status === activeTab;
      });

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(245,219,155,0.4) 11.201%, rgba(251,242,219,0.18) 100%), linear-gradient(90deg, rgb(254,251,244) 0%, rgb(254,251,244) 100%)",
      }}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center justify-center pt-[50px] pb-3 w-full relative z-10">
        <div className="absolute left-[12px] top-[50px] z-20">
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[20px] text-center" style={{ letterSpacing: "-0.4492px", lineHeight: "30px" }}>申请记录</p>
      </div>

      {/* Tab Navigation */}
      <div className="shrink-0 flex justify-center" style={{ paddingLeft: "18px", paddingRight: "18px", paddingBottom: "16px" }}>
        <div
          className="w-full flex items-center"
          style={{ border: "1px solid #edc764", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.6)", padding: "4px" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 flex items-center justify-center cursor-pointer transition-all"
              style={{
                height: "40px", borderRadius: "12px",
                ...(activeTab === tab.key
                  ? { backgroundImage: "linear-gradient(90deg, #edc764 0%, #c99619 100%)", boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.3)" }
                  : {}),
              }}
            >
              <span className="font-medium text-[#685622] text-[14px]" style={{ letterSpacing: "-0.15px" }}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Records List */}
      <div className="flex-1 min-h-0 overflow-y-auto" style={{ paddingLeft: "18px", paddingRight: "18px", paddingBottom: "40px" }}>
        <div className="w-full flex flex-col gap-[16px]">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((r) => <RecordCard key={r.id} record={r} />)
          ) : (
            <div className="w-full flex flex-col items-center justify-center" style={{ paddingTop: "80px" }}>
              <p className="text-[#8b7355] text-[14px]">暂无记录</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
