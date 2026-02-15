import React, { useState } from "react";
import { getPublicUrl } from "../../utils/publicPath";

interface ResumeEditPageProps {
  onBack: () => void;
  onSave?: () => void;
  onInstitutionCertClick?: () => void;
}

/** 设计稿：输入框/选择框 - 48px 高、14px 圆角、描边 0.66px、30% 透明度 F6E6BA 背景 */
const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "48px",
  borderRadius: "14px",
  border: "0.66px solid #EDC764",
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: "0 16px",
  fontSize: "15px",
  color: "#685622",
  outline: "none",
};

const inputClassName = "placeholder:text-[#8B7355]/90";

/** 设计稿：板块标题左侧竖条 - 金色 */
const sectionBarStyle = {
  width: "4px",
  borderRadius: "2px",
  backgroundColor: "#EDC764",
  alignSelf: "stretch" as const,
};

/** 设计稿：内容板块 - 70% 透明白底、2px #EDC764 边框、14px 圆角 */
const sectionCardStyle: React.CSSProperties = {
  borderRadius: "14px",
  border: "2px solid #EDC764",
  backgroundColor: "rgba(255,255,255,0.7)",
  boxShadow: "0px 1px 3px 0px rgba(251,242,219,0.2), 0px 1px 2px -1px rgba(251,242,219,0.12)",
};

/** 设计稿：字段说明 - 颜色 8B7355、14px、与输入框间距 8px */
const labelClass = "text-[14px] font-medium leading-tight block";
const labelStyle = { color: "#8B7355" } as const;
const labelMarginBottom = "8px";

type SkillItem = {
  id: string;
  title: string;
  time: string;
  proficiency?: string;
  tagLabel: "已认证" | "待认证";
  tagIcon: "check" | "info";
  tagStyle: { backgroundColor: string; color: string };
};

const defaultSkills: SkillItem[] = [
  { id: "1", title: "民用航空器维修执照", time: "获得时间: 2024-05", tagLabel: "已认证", tagIcon: "check", tagStyle: { backgroundColor: "#EDC764", color: "#8B7355" } },
  { id: "2", title: "无人机驾驶执照", time: "获得时间: 2025-01", tagLabel: "待认证", tagIcon: "info", tagStyle: { backgroundColor: "rgba(246,230,186,0.7)", color: "#8B7355" } },
];

type WorkItem = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string;
};

const defaultWorks: WorkItem[] = [
  { id: "w1", company: "XX航空公司", position: "航空维修工程师", startDate: "2020-06", endDate: "", isPresent: true, description: "负责飞机日常维护和检修工作" },
];

type ProjectItem = {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string;
};

const defaultProjects: ProjectItem[] = [
  { id: "p1", name: "大型客机维修项目", role: "技术负责人", startDate: "2023-03", endDate: "2023-12", isPresent: false, description: "完成XX型号客机的定期检修和技术升级" },
];

export function ResumeEditPage({ onBack, onSave, onInstitutionCertClick }: ResumeEditPageProps) {
  const [jobType, setJobType] = useState<"full" | "part" | "project">("full");
  const [skills, setSkills] = useState<SkillItem[]>(defaultSkills);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillProficiency, setNewSkillProficiency] = useState("");

  const [works, setWorks] = useState<WorkItem[]>(defaultWorks);
  const [showAddWork, setShowAddWork] = useState(false);
  const [editingWorkId, setEditingWorkId] = useState<string | null>(null);
  const [newWorkCompany, setNewWorkCompany] = useState("");
  const [newWorkPosition, setNewWorkPosition] = useState("");
  const [newWorkStart, setNewWorkStart] = useState("");
  const [newWorkEnd, setNewWorkEnd] = useState("");
  const [newWorkDesc, setNewWorkDesc] = useState("");

  const [projects, setProjects] = useState<ProjectItem[]>(defaultProjects);
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectRole, setNewProjectRole] = useState("");
  const [newProjectStart, setNewProjectStart] = useState("");
  const [newProjectEnd, setNewProjectEnd] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");

  const openAddForm = () => {
    setEditingSkillId(null);
    setNewSkillName("");
    setNewSkillProficiency("");
    setShowAddSkill(true);
  };

  const openEditForm = (skill: SkillItem) => {
    setEditingSkillId(skill.id);
    setNewSkillName(skill.title);
    setNewSkillProficiency(skill.proficiency ?? "");
    setShowAddSkill(true);
  };

  const closeSkillForm = () => {
    setShowAddSkill(false);
    setEditingSkillId(null);
    setNewSkillName("");
    setNewSkillProficiency("");
  };

  const handleConfirmAddSkill = () => {
    const name = newSkillName.trim();
    if (!name) return;
    if (editingSkillId) {
      setSkills((prev) =>
        prev.map((s) =>
          s.id === editingSkillId
            ? { ...s, title: name, proficiency: newSkillProficiency.trim() || undefined }
            : s
        )
      );
    } else {
      const now = new Date();
      const timeStr = `获得时间: ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
      setSkills((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          title: name,
          time: timeStr,
          proficiency: newSkillProficiency.trim() || undefined,
          tagLabel: "待认证",
          tagIcon: "info",
          tagStyle: { backgroundColor: "rgba(246,230,186,0.7)", color: "#8B7355" },
        },
      ]);
    }
    closeSkillForm();
  };

  const handleRemoveSkill = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const openAddWorkForm = () => {
    setEditingWorkId(null);
    setNewWorkCompany("");
    setNewWorkPosition("");
    setNewWorkStart("");
    setNewWorkEnd("");
    setNewWorkDesc("");
    setShowAddWork(true);
  };

  const closeWorkForm = () => {
    setShowAddWork(false);
    setEditingWorkId(null);
    setNewWorkCompany("");
    setNewWorkPosition("");
    setNewWorkStart("");
    setNewWorkEnd("");
    setNewWorkDesc("");
  };

  const handleConfirmAddWork = () => {
    const company = newWorkCompany.trim();
    if (!company) return;
    const endDate = newWorkEnd.trim();
    const isPresent = !endDate;
    if (editingWorkId) {
      setWorks((prev) =>
        prev.map((w) =>
          w.id === editingWorkId
            ? {
                ...w,
                company,
                position: newWorkPosition.trim(),
                startDate: newWorkStart.trim(),
                endDate,
                isPresent,
                description: newWorkDesc.trim(),
              }
            : w
        )
      );
    } else {
      setWorks((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          company,
          position: newWorkPosition.trim(),
          startDate: newWorkStart.trim(),
          endDate,
          isPresent,
          description: newWorkDesc.trim(),
        },
      ]);
    }
    closeWorkForm();
  };

  const handleRemoveWork = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setWorks((prev) => prev.filter((w) => w.id !== id));
  };

  const workTimeDisplay = (w: WorkItem) =>
    w.isPresent ? `${w.startDate} - 至今` : (w.endDate ? `${w.startDate} - ${w.endDate}` : w.startDate || "—");

  const openAddProjectForm = () => {
    setEditingProjectId(null);
    setNewProjectName("");
    setNewProjectRole("");
    setNewProjectStart("");
    setNewProjectEnd("");
    setNewProjectDesc("");
    setShowAddProject(true);
  };

  const closeProjectForm = () => {
    setShowAddProject(false);
    setEditingProjectId(null);
    setNewProjectName("");
    setNewProjectRole("");
    setNewProjectStart("");
    setNewProjectEnd("");
    setNewProjectDesc("");
  };

  const handleConfirmAddProject = () => {
    const name = newProjectName.trim();
    if (!name) return;
    const endDate = newProjectEnd.trim();
    const isPresent = !endDate;
    if (editingProjectId) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProjectId
            ? {
                ...p,
                name,
                role: newProjectRole.trim(),
                startDate: newProjectStart.trim(),
                endDate,
                isPresent,
                description: newProjectDesc.trim(),
              }
            : p
        )
      );
    } else {
      setProjects((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          name,
          role: newProjectRole.trim(),
          startDate: newProjectStart.trim(),
          endDate,
          isPresent,
          description: newProjectDesc.trim(),
        },
      ]);
    }
    closeProjectForm();
  };

  const handleRemoveProject = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const projectTimeDisplay = (p: ProjectItem) =>
    p.isPresent ? `${p.startDate} - 至今` : (p.endDate ? `${p.startDate} - ${p.endDate}` : p.startDate || "—");

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        minHeight: "100%",
        background: "linear-gradient(180deg, #f5db9b 0%, #fbf2db 28%, #fef8eb 55%, #fefbf4 100%)",
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
          我的简历
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col px-4 md:px-6 pb-[100px]" style={{ gap: "16px", paddingTop: "36px" }}>
          {/* 1. 基础信息 - 设计稿：70% 透明白、2px #EDC764 边框 */}
          <div className="flex flex-col overflow-hidden" style={{ ...sectionCardStyle, padding: "16px", gap: "16px" }}>
            <div className="flex items-center shrink-0" style={{ gap: "10px" }}>
              <div style={sectionBarStyle} />
              <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>基础信息</span>
            </div>
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>姓名</label>
                <input className={inputClassName} placeholder="请输入姓名" defaultValue="张三" style={inputStyle} />
              </div>
              <div className="grid grid-cols-2" style={{ gap: "12px" }}>
                <div>
                  <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>年龄</label>
                  <input className={inputClassName} placeholder="请输入年龄" defaultValue="28" style={inputStyle} />
                </div>
                <div>
                  <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>学历</label>
                  <div className="relative flex items-center">
                    <input className={inputClassName} placeholder="请选择学历" defaultValue="大学" readOnly style={{ ...inputStyle, paddingRight: "44px" }} />
                    <span className="absolute right-4 flex items-center justify-center pointer-events-none" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#EDC764" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>联系电话</label>
                <input className={inputClassName} placeholder="请输入联系电话" defaultValue="138****8888" style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>电子邮箱</label>
                <input className={inputClassName} placeholder="请输入电子邮箱" defaultValue="zhangsan@example.com" style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>工作年限</label>
                <input className={inputClassName} placeholder="请输入工作年限" defaultValue="5年" style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>个人简介</label>
                <textarea
                  placeholder="请输入个人简介"
                  rows={4}
                  className={`w-full resize-none outline-none rounded-[14px] border p-4 text-[15px] ${inputClassName}`}
style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(255,255,255,0.8)", color: "#685622", minHeight: "100px" }}
                defaultValue="5年无人机相关经验，熟悉多旋翼与固定翼维护流程。"
                />
              </div>
            </div>
          </div>

          {/* 2. 求职期望 */}
          <div className="flex flex-col overflow-hidden" style={{ ...sectionCardStyle, padding: "16px", gap: "16px" }}>
            <div className="flex items-center shrink-0" style={{ gap: "10px" }}>
              <div style={sectionBarStyle} />
              <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>求职期望</span>
            </div>
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>求职类型</label>
                <div className="flex gap-3">
                  {[
                    { key: "full" as const, label: "全职" },
                    { key: "part" as const, label: "兼职" },
                    { key: "project" as const, label: "项目接单" },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setJobType(key)}
                      className="flex-1 flex items-center justify-center cursor-pointer transition-colors"
                      style={{
                        height: "40px",
                        borderRadius: "20px",
                        border: "0.66px solid #EDC764",
                        background: jobType === key ? "#EDC764" : "rgba(246,230,186,0.3)",
                        color: "#685622",
                        fontSize: "14px",
                        fontWeight: jobType === key ? 600 : 500,
                        boxSizing: "border-box",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>工作类型</label>
                <input className={inputClassName} placeholder="请输入工作类型" defaultValue="航空维修工程师" style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>期望工作地点</label>
                <input className={inputClassName} placeholder="请输入期望工作地点" defaultValue="北京" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 3. 职业技能 */}
          <div className="flex flex-col overflow-hidden" style={{ ...sectionCardStyle, padding: "16px", gap: "16px" }}>
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center" style={{ gap: "10px" }}>
                <div style={sectionBarStyle} />
                <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>职业技能</span>
              </div>
              <button
                type="button"
                onClick={openAddForm}
                className="flex items-center justify-center cursor-pointer active:opacity-90"
                style={{
                  height: "36px",
                  paddingLeft: "14px",
                  paddingRight: "14px",
                  borderRadius: "18px",
                  background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                  color: "#685622",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                + 添加
              </button>
            </div>
            <div className="flex flex-col" style={{ gap: "12px" }}>
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEditForm(skill)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEditForm(skill); } }}
                  className="flex items-start justify-between p-4 rounded-[14px] cursor-pointer active:opacity-90"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.3)", gap: "12px" }}
                >
                  <div className="flex-1 min-w-0 flex flex-col" style={{ gap: "6px" }}>
                    <div className="flex items-center flex-wrap" style={{ gap: "8px" }}>
                      <span className="font-medium text-[#685622] text-[15px]">{skill.title}</span>
                      <span
                        className="inline-flex items-center justify-center gap-1.5 shrink-0 text-[12px] font-medium rounded-full"
                        style={{ width: "71px", height: "24px", backgroundColor: skill.tagStyle.backgroundColor, color: skill.tagStyle.color, boxSizing: "border-box" }}
                      >
                        {skill.tagIcon === "check" ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M12 18h.01" /></svg>
                        )}
                        {skill.tagLabel}
                      </span>
                    </div>
                    <span className="text-[13px]" style={{ color: "#8B7355" }}>{skill.time}</span>
                  </div>
                  <button type="button" onClick={(e) => handleRemoveSkill(e, skill.id)} className="shrink-0 p-1 cursor-pointer active:opacity-70" aria-label="删除">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" /></svg>
                  </button>
                </div>
              ))}

              {/* 添加职业技能表单 - 设计稿：技能名称、掌握程度、邀请机构认证、取消/确认添加 */}
              {showAddSkill && (
                <div
                  className="flex flex-col p-4 rounded-[14px]"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.25)", gap: "14px" }}
                >
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>技能名称</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入技能名称"
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>掌握程度</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入掌握程度"
                      value={newSkillProficiency}
                      onChange={(e) => setNewSkillProficiency(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={onInstitutionCertClick}
                    className="flex items-center gap-2 w-full justify-start text-[14px] font-medium cursor-pointer active:opacity-80 py-1.5"
                    style={{ color: "#685622" }}
                  >
                    <span>邀请机构认证</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="flex gap-3" style={{ marginTop: "4px" }}>
                    <button
                      type="button"
                      onClick={closeSkillForm}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-80"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        border: "0.66px solid #EDC764",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmAddSkill}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-90"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      确认添加
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4. 工作经历 - 设计稿：列表 + 添加表单（公司名称、职位、开始/结束时间、工作描述、取消/确认添加） */}
          <div className="flex flex-col overflow-hidden" style={{ ...sectionCardStyle, padding: "16px", gap: "16px" }}>
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center" style={{ gap: "10px" }}>
                <div style={sectionBarStyle} />
                <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>工作经历</span>
              </div>
              <button
                type="button"
                onClick={openAddWorkForm}
                className="flex items-center justify-center cursor-pointer active:opacity-90"
                style={{
                  height: "36px",
                  paddingLeft: "14px",
                  paddingRight: "14px",
                  borderRadius: "18px",
                  background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                  color: "#685622",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                + 添加
              </button>
            </div>
            <div className="flex flex-col" style={{ gap: "12px" }}>
              {works.map((w) => (
                <div
                  key={w.id}
                  className="flex flex-col p-4 rounded-[14px] border"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.3)", gap: "8px" }}
                >
                  <div className="flex items-start justify-between" style={{ gap: "8px" }}>
                    <span className="font-medium text-[#685622] text-[15px]">{w.company || "公司名称"}</span>
                    <button type="button" onClick={(e) => handleRemoveWork(e, w.id)} className="shrink-0 p-1 cursor-pointer active:opacity-70" aria-label="删除">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                  </div>
                  <span className="text-[#685622] text-[14px]">{w.position || "职位"}</span>
                  <span className="text-[13px]" style={{ color: "#8B7355" }}>{workTimeDisplay(w)}</span>
                  {w.description ? <p className="text-[13px]" style={{ color: "#8B7355", lineHeight: "20px" }}>{w.description}</p> : null}
                </div>
              ))}

              {showAddWork && (
                <div
                  className="flex flex-col p-4 rounded-[14px]"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.25)", gap: "14px" }}
                >
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>公司名称</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入公司名称"
                      value={newWorkCompany}
                      onChange={(e) => setNewWorkCompany(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>职位</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入职位名称"
                      value={newWorkPosition}
                      onChange={(e) => setNewWorkPosition(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div className="grid grid-cols-2" style={{ gap: "12px" }}>
                    <div>
                      <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>开始时间</label>
                      <input
                        className={inputClassName}
                        placeholder="如 2020-06"
                        value={newWorkStart}
                        onChange={(e) => setNewWorkStart(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>结束时间</label>
                      <input
                        className={inputClassName}
                        placeholder="如 2023-12 或留空表示至今"
                        value={newWorkEnd}
                        onChange={(e) => setNewWorkEnd(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>工作描述</label>
                    <textarea
                      className={`w-full resize-none outline-none rounded-[14px] border p-4 text-[15px] ${inputClassName}`}
                      placeholder="请输入工作内容描述"
                      rows={4}
                      value={newWorkDesc}
                      onChange={(e) => setNewWorkDesc(e.target.value)}
                      style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(255,255,255,0.8)", color: "#685622", minHeight: "100px" }}
                    />
                  </div>
                  <div className="flex gap-3" style={{ marginTop: "4px" }}>
                    <button
                      type="button"
                      onClick={closeWorkForm}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-80"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        border: "0.66px solid #EDC764",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmAddWork}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-90"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      确认添加
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 5. 项目经历 - 设计稿：列表 + 添加表单（项目名称、项目角色、开始/结束时间、项目描述、取消/确认添加） */}
          <div className="flex flex-col overflow-hidden" style={{ ...sectionCardStyle, padding: "16px", gap: "16px" }}>
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center" style={{ gap: "10px" }}>
                <div style={sectionBarStyle} />
                <span className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px" }}>项目经历</span>
              </div>
              <button
                type="button"
                onClick={openAddProjectForm}
                className="flex items-center justify-center cursor-pointer active:opacity-90"
                style={{
                  height: "36px",
                  paddingLeft: "14px",
                  paddingRight: "14px",
                  borderRadius: "18px",
                  background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                  color: "#685622",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                + 添加
              </button>
            </div>
            <div className="flex flex-col" style={{ gap: "12px" }}>
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col p-4 rounded-[14px] border"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.3)", gap: "8px" }}
                >
                  <div className="flex items-start justify-between" style={{ gap: "8px" }}>
                    <span className="font-medium text-[#685622] text-[15px]">{p.name || "项目名称"}</span>
                    <button type="button" onClick={(e) => handleRemoveProject(e, p.id)} className="shrink-0 p-1 cursor-pointer active:opacity-70" aria-label="删除">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                  </div>
                  <span className="text-[#685622] text-[14px]">{p.role || "项目角色"}</span>
                  <span className="text-[13px]" style={{ color: "#8B7355" }}>{projectTimeDisplay(p)}</span>
                  {p.description ? <p className="text-[13px]" style={{ color: "#8B7355", lineHeight: "20px" }}>{p.description}</p> : null}
                </div>
              ))}

              {showAddProject && (
                <div
                  className="flex flex-col p-4 rounded-[14px]"
                  style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(246,230,186,0.25)", gap: "14px" }}
                >
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>项目名称</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入项目名称"
                      value={newProjectName}
                      onChange={(e) => setNewProjectName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>项目角色</label>
                    <input
                      className={inputClassName}
                      placeholder="请输入您的角色"
                      value={newProjectRole}
                      onChange={(e) => setNewProjectRole(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div className="grid grid-cols-2" style={{ gap: "12px" }}>
                    <div>
                      <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>开始时间</label>
                      <input
                        className={inputClassName}
                        placeholder="如 2023-03"
                        value={newProjectStart}
                        onChange={(e) => setNewProjectStart(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>结束时间</label>
                      <input
                        className={inputClassName}
                        placeholder="如 2023-12 或留空表示至今"
                        value={newProjectEnd}
                        onChange={(e) => setNewProjectEnd(e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} style={{ marginBottom: labelMarginBottom, ...labelStyle }}>项目描述</label>
                    <textarea
                      className={`w-full resize-none outline-none rounded-[14px] border p-4 text-[15px] ${inputClassName}`}
                      placeholder="请输入项目内容描述"
                      rows={4}
                      value={newProjectDesc}
                      onChange={(e) => setNewProjectDesc(e.target.value)}
                      style={{ border: "0.66px solid #EDC764", backgroundColor: "rgba(255,255,255,0.8)", color: "#685622", minHeight: "100px" }}
                    />
                  </div>
                  <div className="flex gap-3" style={{ marginTop: "4px" }}>
                    <button
                      type="button"
                      onClick={closeProjectForm}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-80"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        border: "0.66px solid #EDC764",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmAddProject}
                      className="flex-1 flex items-center justify-center cursor-pointer active:opacity-90"
                      style={{
                        height: "44px",
                        borderRadius: "14px",
                        background: "linear-gradient(90deg, #EDC764 0%, #c99619 100%)",
                        color: "#685622",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      确认添加
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 底部保存按钮 - 固定 */}
      <div
        className="absolute left-0 right-0 bottom-0 z-20 flex justify-center items-center p-4"
        style={{ background: "linear-gradient(to top, rgba(254,251,244,0.98) 60%, transparent)" }}
      >
        <button
          type="button"
          onClick={onSave ?? onBack}
          className="w-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
          style={{
            maxWidth: "calc(100% - 48px)",
            height: "48px",
            borderRadius: "24px",
            background: "linear-gradient(90deg, #edc764 0%, #c99619 100%)",
            boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.4)",
            color: "#685622",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "-0.31px",
          }}
        >
          保存简历
        </button>
      </div>
    </div>
  );
}
