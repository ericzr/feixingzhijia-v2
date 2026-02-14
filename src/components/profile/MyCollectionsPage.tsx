import React, { useState } from "react";

interface MyCollectionsPageProps {
  onBack: () => void;
}

type TabType = "schools" | "examCenters" | "jobs";

// ===== Mock Data =====
const schoolsData = [
  { id: 1, name: "中国民航飞行学院", tag: "公办", location: "四川广汉", rating: 4.8 },
  { id: 2, name: "中国民航大学", tag: "公办", location: "天津", rating: 4.7 },
  { id: 3, name: "北京航空航天大学", tag: "公办", location: "北京", rating: 4.9 },
];

const examCentersData = [
  { id: 1, name: "北京考试中心", location: "北京朝阳区", nextExam: "2026-03-15", slots: 25 },
  { id: 2, name: "上海考试中心", location: "上海浦东新区", nextExam: "2026-03-20", slots: 18 },
  { id: 3, name: "广州考试中心", location: "广州天河区", nextExam: "2026-03-18", slots: 30 },
];

const jobsData = [
  { id: 1, title: "航空维修工程师", tag: "全职", company: "中国国际航空公司", city: "北京", salary: "15K-25K" },
  { id: 2, title: "飞机维护技师", tag: "全职", company: "东方航空公司", city: "上海", salary: "12K-20K" },
  { id: 3, title: "航空器检修项目", tag: "项目", company: "南方航空公司", city: "广州", salary: "20K-30K" },
];

// ===== Star Rating =====
function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div className="flex gap-[4px] items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.5L8.5 5L12.5 5.5L9.5 8L10.5 12L7 10L3.5 12L4.5 8L1.5 5.5L5.5 5L7 1.5Z"
            fill={i <= fullStars ? "#C99619" : (i === fullStars + 1 && hasHalf ? "#C99619" : "#E8DCC8")}
            stroke={i <= fullStars ? "#C99619" : (i === fullStars + 1 && hasHalf ? "#C99619" : "#E8DCC8")}
            strokeWidth="0.5"
          />
        </svg>
      ))}
      <span className="text-[#c99619] text-[13px] leading-[19.5px] ml-[2px]" style={{ letterSpacing: "-0.0762px" }}>
        {rating}
      </span>
    </div>
  );
}

// ===== Delete Button (X) =====
function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="shrink-0 size-[40px] flex flex-col items-start pt-[8px] px-[8px] cursor-pointer active:opacity-70">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6L18 18" stroke="#C99619" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ===== Golden Action Button =====
function GoldenButton({ label }: { label: string }) {
  return (
    <div
      className="w-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
      style={{
        height: "40px",
        borderRadius: "20px",
        backgroundImage: "linear-gradient(90deg, #edc764 0%, #c99619 100%)",
      }}
    >
      <span className="font-medium text-[#685622] text-[14px] leading-[21px] text-center" style={{ letterSpacing: "-0.1504px" }}>
        {label}
      </span>
    </div>
  );
}

// ===== School Card =====
function SchoolCard({ name, tag, location, rating, onDelete }: { name: string; tag: string; location: string; rating: number; onDelete: () => void }) {
  return (
    <div
      className="w-full rounded-[16px] flex flex-col gap-[24px]"
      style={{ border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)", padding: "21px" }}
    >
      <div className="w-full flex items-start justify-between">
        <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
          <div className="flex items-center gap-[10px]">
            <p className="font-medium text-[#685622] text-[16px] leading-[24px]" style={{ letterSpacing: "-0.3125px" }}>{name}</p>
            <span className="shrink-0 h-[26px] px-[10px] flex items-center justify-center text-[#c99619] text-[12px] leading-[18px]" style={{ backgroundColor: "rgba(201,150,25,0.15)", borderRadius: "12px" }}>{tag}</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#8b7355" strokeWidth="1.2" fill="none" />
              <path d="M7 3.5V7H10" stroke="#8b7355" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[#8b7355] text-[13px] leading-[19.5px]" style={{ letterSpacing: "-0.0762px" }}>{location}</span>
          </div>
          <StarRating rating={rating} />
        </div>
        <DeleteButton onClick={onDelete} />
      </div>
      <GoldenButton label="查看详情" />
    </div>
  );
}

// ===== Exam Center Card =====
function ExamCenterCard({ name, location, nextExam, slots, onDelete }: { name: string; location: string; nextExam: string; slots: number; onDelete: () => void }) {
  return (
    <div
      className="w-full rounded-[16px] flex flex-col gap-[24px]"
      style={{ border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)", padding: "21px" }}
    >
      <div className="w-full flex items-start justify-between">
        <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
          <p className="font-medium text-[#685622] text-[16px] leading-[24px]" style={{ letterSpacing: "-0.3125px" }}>{name}</p>
          <div className="flex items-center gap-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="#8b7355" strokeWidth="1.2" fill="none" />
              <circle cx="7" cy="6" r="1.5" stroke="#8b7355" strokeWidth="1.2" fill="none" />
            </svg>
            <span className="text-[#8b7355] text-[13px] leading-[19.5px]" style={{ letterSpacing: "-0.0762px" }}>{location}</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-[6px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="3" width="10" height="9" rx="1" stroke="#8b7355" strokeWidth="1.2" fill="none" />
                <path d="M2 6H12" stroke="#8b7355" strokeWidth="1.2" />
                <path d="M5 3V1M9 3V1" stroke="#8b7355" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[#8b7355] text-[13px] leading-[19.5px]" style={{ letterSpacing: "-0.0762px" }}>下次考试：{nextExam}</span>
            </div>
            <span className="text-[#c99619] text-[12px] leading-[18px] px-[10px] flex items-center justify-center shrink-0 h-[26px]" style={{ backgroundColor: "rgba(201,150,25,0.15)", borderRadius: "12px" }}>
              剩余 {slots} 个名额
            </span>
          </div>
        </div>
        <DeleteButton onClick={onDelete} />
      </div>
      <GoldenButton label="查看地址" />
    </div>
  );
}

// ===== Job Card =====
function JobCard({ title, tag, company, city, salary, onDelete }: { title: string; tag: string; company: string; city: string; salary: string; onDelete: () => void }) {
  return (
    <div
      className="w-full rounded-[16px] flex flex-col gap-[24px]"
      style={{ border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)", padding: "21px" }}
    >
      <div className="w-full flex items-start justify-between">
        <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
          <div className="flex items-center gap-[10px]">
            <p className="font-medium text-[#685622] text-[16px] leading-[24px]" style={{ letterSpacing: "-0.3125px" }}>{title}</p>
            <span className="shrink-0 h-[26px] px-[10px] flex items-center justify-center text-[#c99619] text-[12px] leading-[18px]" style={{ backgroundColor: "rgba(201,150,25,0.15)", borderRadius: "12px" }}>{tag}</span>
          </div>
          <p className="text-[#685622] text-[14px] leading-[21px]" style={{ letterSpacing: "-0.1504px" }}>{company}</p>
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-[4px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="#8b7355" strokeWidth="1.2" fill="none" />
                <circle cx="7" cy="6" r="1.5" stroke="#8b7355" strokeWidth="1.2" fill="none" />
              </svg>
              <span className="text-[#8b7355] text-[13px] leading-[19.5px]" style={{ letterSpacing: "-0.0762px" }}>{city}</span>
            </div>
            <span className="text-[#c99619] text-[14px] font-medium leading-[21px]" style={{ letterSpacing: "-0.1504px" }}>{salary}</span>
          </div>
        </div>
        <DeleteButton onClick={onDelete} />
      </div>
      <GoldenButton label="立即申请" />
    </div>
  );
}

// ===== Main Page =====
export function MyCollectionsPage({ onBack }: MyCollectionsPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>("schools");

  const tabs: { key: TabType; label: string; count: number }[] = [
    { key: "schools", label: "航校", count: schoolsData.length },
    { key: "examCenters", label: "考点", count: examCentersData.length },
    { key: "jobs", label: "工作", count: jobsData.length },
  ];

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)",
      }}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center justify-center w-full relative z-10" style={{ paddingTop: "50px", paddingBottom: "12px" }}>
        <div className="absolute z-20" style={{ left: "12px", top: "50px" }}>
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src="/icons/settings/back-arrow.svg" className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[18px] text-center" style={{ letterSpacing: "-0.4395px", lineHeight: "28px" }}>
          我的收藏
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="shrink-0 flex justify-center px-[16px] pb-[16px]">
        <div
          className="w-full rounded-[16px] flex items-center p-[4px]"
          style={{ border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.6)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 flex items-center justify-center cursor-pointer transition-all"
              style={{
                height: "44px",
                borderRadius: "12px",
                ...(activeTab === tab.key
                  ? {
                      backgroundImage: "linear-gradient(90deg, #edc764 0%, #c99619 100%)",
                      boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.3)",
                    }
                  : {}),
              }}
            >
              <span
                className="font-medium text-[#685622] text-[15px] leading-[22.5px]"
                style={{ letterSpacing: "-0.2344px" }}
              >
                {tab.label}（{tab.count}）
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[16px] pb-[40px]">
        <div className="w-full flex flex-col gap-[16px]">
          {activeTab === "schools" &&
            schoolsData.map((s) => (
              <SchoolCard key={s.id} name={s.name} tag={s.tag} location={s.location} rating={s.rating} onDelete={() => {}} />
            ))}
          {activeTab === "examCenters" &&
            examCentersData.map((e) => (
              <ExamCenterCard key={e.id} name={e.name} location={e.location} nextExam={e.nextExam} slots={e.slots} onDelete={() => {}} />
            ))}
          {activeTab === "jobs" &&
            jobsData.map((j) => (
              <JobCard key={j.id} title={j.title} tag={j.tag} company={j.company} city={j.city} salary={j.salary} onDelete={() => {}} />
            ))}
        </div>
      </div>
    </div>
  );
}
