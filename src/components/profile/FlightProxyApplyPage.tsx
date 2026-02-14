import React, { useState } from "react";

interface FlightProxyApplyPageProps {
  onBack: () => void;
  onSubmitSuccess?: () => void;
}

// ===== Step Indicator =====
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = ["申请人信息", "无人机信息", "飞行计划", "安全措施"];
  return (
    <div className="flex items-center justify-between w-full" style={{ padding: "0 8px" }}>
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        return (
          <React.Fragment key={stepNum}>
            <div className="flex flex-col items-center" style={{ gap: "8px", width: "60px" }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  ...(isActive
                    ? { background: "linear-gradient(135deg, #edc764 0%, #c99619 100%)", color: "#fff" }
                    : isCompleted
                      ? { background: "linear-gradient(135deg, #edc764 0%, #c99619 100%)", color: "#fff" }
                      : { border: "1.5px solid #edc764", background: "transparent", color: "#685622" }),
                }}
              >
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span className="font-bold text-[14px]">{stepNum}</span>
                )}
              </div>
              <span
                className="text-[11px] text-center"
                style={{ color: isActive || isCompleted ? "#685622" : "#8b7355", fontWeight: isActive ? 600 : 400, letterSpacing: "-0.08px" }}
              >
                {label}
              </span>
            </div>
            {i < 3 && (
              <div
                style={{
                  flex: 1, height: "2px", marginTop: "-20px",
                  backgroundColor: stepNum < currentStep ? "#edc764" : "rgba(237,199,100,0.3)",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ===== Form Label =====
function FormLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <p className="text-[#685622] text-[14px] font-medium" style={{ marginBottom: "8px", letterSpacing: "-0.15px" }}>
      {label}{required && <span className="text-[#c99619]"> *</span>}
    </p>
  );
}

// ===== Form Input =====
function FormInput({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <>
      {(type === "date" || type === "time") && (
        <style>{`
          input[type="date"]::-webkit-calendar-picker-indicator,
          input[type="time"]::-webkit-calendar-picker-indicator {
            filter: invert(35%) sepia(60%) saturate(500%) hue-rotate(15deg) brightness(95%);
            opacity: 0.7;
            cursor: pointer;
          }
        `}</style>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-[#685622] text-[15px]"
        style={{
          height: "48px", border: "1px solid #edc764", borderRadius: "14px",
          padding: "0 16px", backgroundColor: "rgba(255,255,255,0.8)",
          letterSpacing: "-0.23px",
          colorScheme: "light",
        }}
      />
    </>
  );
}

// ===== Form Textarea =====
function FormTextarea({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent outline-none text-[#685622] text-[15px] resize-none"
      style={{
        height: "120px", border: "1px solid #edc764", borderRadius: "14px",
        padding: "14px 16px", backgroundColor: "rgba(255,255,255,0.8)",
        letterSpacing: "-0.23px",
      }}
    />
  );
}

// ===== Checkbox Item =====
function CheckboxItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div
      className="w-full flex items-center gap-[12px] cursor-pointer active:opacity-80"
      style={{ height: "48px", border: "1px solid #edc764", borderRadius: "14px", padding: "0 16px", backgroundColor: "rgba(255,255,255,0.8)" }}
      onClick={onChange}
    >
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: "22px", height: "22px", borderRadius: "6px",
          border: checked ? "none" : "1.5px solid #c99619",
          background: checked ? "linear-gradient(135deg, #edc764, #c99619)" : "transparent",
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-[#685622] text-[15px]" style={{ letterSpacing: "-0.23px" }}>{label}</span>
    </div>
  );
}

// ===== Selectable Tag =====
function SelectableTag({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <div
      className="flex items-center justify-center cursor-pointer active:opacity-80"
      style={{
        height: "40px", borderRadius: "20px", padding: "0 20px",
        border: selected ? "1.5px solid #c99619" : "1px solid #edc764",
        backgroundColor: selected ? "rgba(237,199,100,0.2)" : "rgba(255,255,255,0.8)",
        color: selected ? "#685622" : "#8b7355",
        fontWeight: selected ? 600 : 400,
        fontSize: "14px",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

// ===== Bottom Buttons =====
function BottomButtons({ step, onPrev, onNext, nextLabel = "下一步" }: { step: number; onPrev?: () => void; onNext: () => void; nextLabel?: string }) {
  return (
    <div className="shrink-0 flex gap-[12px] w-full" style={{ padding: "16px 18px 32px 18px" }}>
      {step > 1 && (
        <button
          onClick={onPrev}
          className="flex-1 flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
          style={{ height: "48px", borderRadius: "24px", border: "1.5px solid #edc764", backgroundColor: "rgba(255,255,255,0.8)", color: "#685622", fontSize: "16px", fontWeight: 500 }}
        >
          上一步
        </button>
      )}
      <button
        onClick={onNext}
        className={`${step === 1 ? "w-full" : "flex-1"} flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform`}
        style={{ height: "48px", borderRadius: "24px", background: "linear-gradient(90deg, #edc764 0%, #c99619 100%)", color: "#685622", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.31px" }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

// ===== Main Page =====
export function FlightProxyApplyPage({ onBack, onSubmitSuccess }: FlightProxyApplyPageProps) {
  const [step, setStep] = useState(1);

  // Step 1
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idCard, setIdCard] = useState("");
  const [org, setOrg] = useState("");

  // Step 2
  const [droneModel, setDroneModel] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [regNo, setRegNo] = useState("");
  const [weight, setWeight] = useState("");

  // Step 3
  const [flightDate, setFlightDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [altitude, setAltitude] = useState("");
  const [radius, setRadius] = useState("");
  const [purpose, setPurpose] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // Step 4
  const [safetyChecks, setSafetyChecks] = useState<Record<string, boolean>>({});
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  const toggleSafety = (key: string) => setSafetyChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  const togglePurpose = (p: string) => setPurpose(purpose === p ? "" : p);

  const purposes = ["航拍摄影", "农业植保", "电力巡检", "地理测绘", "应急救援", "科研试验", "教学培训", "其他"];
  const safetyItems = ["已购买第三方责任险", "已设置电子围栏", "配备专业观察员", "已申报禁飞区规避方案", "配备应急降落装置", "已完成飞行前检查清单"];

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
          <button onClick={step === 1 ? onBack : () => setStep(step - 1)} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src="/icons/settings/back-arrow.svg" className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[20px] text-center" style={{ letterSpacing: "-0.4492px", lineHeight: "30px" }}>飞行申请</p>
      </div>

      {/* Step Indicator */}
      <div className="shrink-0" style={{ padding: "8px 18px 32px 18px" }}>
        <StepIndicator currentStep={step} />
      </div>

      {/* Scrollable Form Content */}
      <div className="flex-1 min-h-0 overflow-y-auto" style={{ paddingLeft: "18px", paddingRight: "18px" }}>
        <div className="w-full flex flex-col gap-[16px]">

          {/* ===== Step 1: 申请人信息 ===== */}
          {step === 1 && (
            <>
              <p className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px", marginBottom: "4px" }}>申请人信息</p>
              <div><FormLabel label="姓名" required /><FormInput placeholder="请输入真实姓名" value={name} onChange={setName} /></div>
              <div><FormLabel label="手机号" required /><FormInput placeholder="请输入手机号" value={phone} onChange={setPhone} type="tel" /></div>
              <div><FormLabel label="身份证号" required /><FormInput placeholder="请输入身份证号" value={idCard} onChange={setIdCard} /></div>
              <div><FormLabel label="所属单位" /><FormInput placeholder="请输入所属单位（可选）" value={org} onChange={setOrg} /></div>
            </>
          )}

          {/* ===== Step 2: 无人机信息 ===== */}
          {step === 2 && (
            <>
              <p className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px", marginBottom: "4px" }}>无人机信息</p>
              <div><FormLabel label="无人机型号" required /><FormInput placeholder="例如：DJI Mavic 3" value={droneModel} onChange={setDroneModel} /></div>
              <div><FormLabel label="序列号" required /><FormInput placeholder="请输入无人机序列号" value={serialNo} onChange={setSerialNo} /></div>
              <div><FormLabel label="注册登记号" required /><FormInput placeholder="请输入注册登记号" value={regNo} onChange={setRegNo} /></div>
              <div><FormLabel label="最大起飞重量 (kg)" required /><FormInput placeholder="请输入重量，例如：0.9" value={weight} onChange={setWeight} /></div>
              <div>
                <FormLabel label="无人机登记证" />
                <div
                  className="w-full flex flex-col items-center justify-center gap-[8px] cursor-pointer active:opacity-80"
                  style={{ height: "100px", border: "1px dashed #edc764", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.8)" }}
                >
                  <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", border: "1.5px solid #c99619", borderRadius: "8px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8H13" stroke="#c99619" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span className="text-[#8b7355] text-[13px]">点击上传登记证照片</span>
                </div>
              </div>
            </>
          )}

          {/* ===== Step 3: 飞行计划 ===== */}
          {step === 3 && (
            <>
              <p className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px", marginBottom: "4px" }}>飞行计划</p>
              <div><FormLabel label="飞行日期" required /><FormInput placeholder="" value={flightDate} onChange={setFlightDate} type="date" /></div>
              <div className="flex gap-[12px]">
                <div className="flex-1"><FormLabel label="开始时间" required /><FormInput placeholder="" value={startTime} onChange={setStartTime} type="time" /></div>
                <div className="flex-1"><FormLabel label="结束时间" required /><FormInput placeholder="" value={endTime} onChange={setEndTime} type="time" /></div>
              </div>
              <div><FormLabel label="飞行地点" required /><FormInput placeholder="请输入详细地址" value={location} onChange={setLocation} /></div>
              <div className="flex gap-[12px]">
                <div className="flex-1"><FormLabel label="飞行高度（米）" required /><FormInput placeholder="例如：120" value={altitude} onChange={setAltitude} /></div>
                <div className="flex-1"><FormLabel label="飞行半径（米）" required /><FormInput placeholder="例如：500" value={radius} onChange={setRadius} /></div>
              </div>
              <div>
                <FormLabel label="飞行目的" required />
                <div className="flex flex-wrap gap-[10px]">
                  {purposes.map((p) => <SelectableTag key={p} label={p} selected={purpose === p} onClick={() => togglePurpose(p)} />)}
                </div>
              </div>
              <div><FormLabel label="任务描述" required /><FormTextarea placeholder="请详细描述飞行任务内容..." value={taskDesc} onChange={setTaskDesc} /></div>
            </>
          )}

          {/* ===== Step 4: 安全措施 ===== */}
          {step === 4 && (
            <>
              <p className="font-bold text-[#685622] text-[18px]" style={{ letterSpacing: "-0.44px", marginBottom: "4px" }}>安全措施</p>
              <div>
                <FormLabel label="安全保障措施" required />
                <div className="flex flex-col gap-[10px]">
                  {safetyItems.map((item) => <CheckboxItem key={item} label={item} checked={!!safetyChecks[item]} onChange={() => toggleSafety(item)} />)}
                </div>
              </div>
              <div><FormLabel label="应急联系人" required /><FormInput placeholder="请输入应急联系人姓名" value={emergencyContact} onChange={setEmergencyContact} /></div>
              <div><FormLabel label="应急联系电话" required /><FormInput placeholder="请输入应急联系电话" value={emergencyPhone} onChange={setEmergencyPhone} type="tel" /></div>
              {/* 提示 */}
              <div className="w-full flex gap-[12px] items-start" style={{ backgroundColor: "rgba(237,199,100,0.15)", border: "1px solid #edc764", borderRadius: "14px", padding: "14px" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-[1px]"><circle cx="9" cy="9" r="8" stroke="#c99619" strokeWidth="1.3"/><path d="M9 5V9" stroke="#c99619" strokeWidth="1.3" strokeLinecap="round"/><circle cx="9" cy="12" r="0.8" fill="#c99619"/></svg>
                <p className="text-[#685622] text-[12px] leading-[18px]">提交申请后，相关部门将在1-3个工作日内完成审批。请确保填写信息真实准确，并保持手机畅通。</p>
              </div>
            </>
          )}

          {/* 底部空白，防止被按钮遮挡 */}
          <div style={{ height: "16px" }} />
        </div>
      </div>

      {/* Bottom Buttons */}
      <BottomButtons
        step={step}
        onPrev={() => setStep(step - 1)}
        onNext={() => {
          if (step < 4) setStep(step + 1);
          else if (onSubmitSuccess) onSubmitSuccess();
          else alert("申请已提交！");
        }}
        nextLabel={step === 4 ? "提交申请" : "下一步"}
      />
    </div>
  );
}
