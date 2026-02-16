import React, { useState } from "react";
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import svgPaths from "../../imports/svg-fa272t6lbz";
import successSvgPaths from "../../imports/svg-wky88hhbfd";

interface InvitationCodeProps {
  onBack: () => void;
}

const INVITATION_STORAGE_KEY = "dahuangfeng_my_invitation_code";

function getStoredMyCode(): string | null {
  try {
    return localStorage.getItem(INVITATION_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function InvitationCode({ onBack }: InvitationCodeProps) {
  const [code, setCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [myInvitationCode, setMyInvitationCode] = useState<string | null>(() => getStoredMyCode());

  const handleSubmit = () => {
    const trimmed = code.trim();
    if (!trimmed) return;
    try {
      localStorage.setItem(INVITATION_STORAGE_KEY, trimmed);
      setMyInvitationCode(trimmed);
    } catch (_) {}
    setIsSuccess(true);
  };

  if (isSuccess) return <InvitationSuccessView onBack={() => setIsSuccess(false)} onStart={onBack} myInvitationCode={myInvitationCode} />;

  return (
    <div className="flex flex-col w-full h-full flex-1 min-h-0 relative overflow-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      <div className="flex items-center px-[12px] pt-[40px] pb-4 relative z-10">
        <button onClick={onBack} className="p-[12px] pt-[4px] active:opacity-60 transition-opacity" aria-label="返回">
          <div className="w-[7px] h-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
              <path d={svgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33" />
            </svg>
          </div>
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-bold text-[18px] text-[#685622] leading-[28px] tracking-[-0.4395px]">邀请码</h1>
        </div>
        <div className="w-[36px]" />
      </div>
      <div className="flex-1 flex flex-col items-center pt-[50px]">
        <div className="relative w-[254px] h-[239px] flex items-center justify-center rounded-[26px]">
          <div className="relative w-[160px] h-[161px]">
            <div className="absolute inset-[18.44%_86.87%_71.56%_3.13%]"><svg className="block size-full" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p1f2c7572} fill="#F6E6BA" opacity="0.6" /></svg></div>
            <div className="absolute inset-[21.56%_34.99%_70.93%_57.51%]"><svg className="block size-full" fill="none" viewBox="0 0 12 12"><path d={svgPaths.pdfbc580} fill="#EDC764" opacity="0.5" /></svg></div>
            <div className="absolute inset-[75.94%_84.37%_15.31%_6.88%]"><svg className="block size-full" fill="none" viewBox="0 0 14 14"><path d={svgPaths.p19dae440} fill="#F6E6BA" opacity="0.6" /></svg></div>
            <div className="absolute inset-[77.82%_1.86%_10.93%_86.89%]"><svg className="block size-full" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p35a43600} fill="#EDC764" opacity="0.5" /></svg></div>
            <div className="absolute inset-[24.69%_68.74%_71.56%_27.51%]"><svg className="block size-full" fill="none" viewBox="0 0 8 8"><path d="M4 1V7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" /><path d="M1 4H7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" /></svg></div>
            <div className="absolute inset-[84.38%_26.25%_11.87%_70%]"><svg className="block size-full" fill="none" viewBox="0 0 8 8"><path d="M4 1V7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" /><path d="M1 4H7" stroke="#C99619" strokeLinecap="round" strokeWidth="2" opacity="0.7" /></svg></div>
            <div className="absolute inset-[83.44%_46.87%_10.31%_46.88%]"><svg className="block size-full" fill="none" viewBox="0 0 12 12"><path d={svgPaths.p1f650000} stroke="#EDC764" strokeWidth="2" opacity="0.6" /></svg></div>
            <div className="absolute inset-[41.25%_88.12%_53.75%_6.88%]"><svg className="block size-full" fill="none" viewBox="0 0 10 10"><path d={svgPaths.p2c0bea00} stroke="#EDC764" strokeWidth="2" opacity="0.6" /></svg></div>
            <div className="absolute inset-[33.44%_15.61%_18.43%_16.26%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 80.5"><path d={svgPaths.p66a8400} fill="#F6E6BA" stroke="#685622" strokeWidth="3" /></svg></div>
            <div className="absolute inset-[67.82%_15.61%_18.43%_16.26%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 22"><path d={svgPaths.pa6a8800} fill="#EDC764" opacity="0.5" /></svg></div>
            <div className="absolute inset-[33.44%_15.61%_42.81%_16.26%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 41"><path d={svgPaths.p153e7980} fill="#EDC764" stroke="#685622" strokeLinejoin="round" strokeWidth="3" /></svg></div>
            <div className="absolute inset-[62.82%_42.49%_22.18%_42.51%] flex items-center justify-center"><div className="relative size-full"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26"><path d={svgPaths.pcc1b180} fill="#EDC764" stroke="#685622" strokeWidth="2" /></svg><span className="absolute inset-0 flex items-center justify-center font-bold text-[#685622] text-[10px] leading-none">VIP</span></div></div>
            <div className="absolute inset-[26.56%_6.24%_70.93%_90.01%]"><svg className="block size-full" fill="none" viewBox="0 0 8 6"><path d={svgPaths.p188cc700} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg></div>
            <div className="absolute inset-[32.82%_3.74%_67.18%_92.51%]"><svg className="block size-full" fill="none" viewBox="0 0 8 2"><path d="M1 1H7" stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg></div>
            <div className="absolute inset-[36.57%_6.24%_60.93%_90.01%]"><svg className="block size-full" fill="none" viewBox="0 0 8 6"><path d={svgPaths.p166a91a0} stroke="#EDC764" strokeLinecap="round" strokeWidth="2" opacity="0.8" /></svg></div>
          </div>
        </div>
        <div className="w-full px-[32px] mt-[40px] space-y-[20px]">
          <div className="relative w-full h-[48px] bg-[rgba(255,255,255,0.67)] rounded-full border border-[#c99619]">
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="请输入您的邀请码，获取大黄蜂所有VIP权益" className="w-full h-full px-[16px] bg-transparent text-[#c99619] text-[12px] placeholder:text-[#c99619] outline-none tracking-[-0.1504px]" />
          </div>
          <button onClick={handleSubmit} className="w-full h-[48px] bg-[#c99619] rounded-[40px] text-white font-medium text-[16px] shadow-[0px_10px_15px_-3px_#fbf2db,0px_4px_6px_-4px_#fbf2db] active:scale-[0.98] transition-all tracking-[-0.3125px]">提交</button>
        </div>
        {myInvitationCode ? (
          <p className="w-full text-center text-[#afa199] text-[10px] font-normal tracking-normal mt-auto pt-[32px] pb-[24px] shrink-0">
            我的邀请码：{myInvitationCode}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function InvitationSuccessView({ onBack, onStart, myInvitationCode }: { onBack: () => void; onStart: () => void; myInvitationCode: string | null }) {
  return (
    <div className="relative w-full h-full flex flex-col flex-1 min-h-0 overflow-hidden" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      {/* Header */}
      <div className="shrink-0 flex items-start p-[12px] pt-[40px] md:pt-[12px] w-full z-10">
        <button onClick={onBack} className="p-[12px] pt-[4px] relative shrink-0">
          <div className="h-[14px] shrink-0 w-[7px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325"><path d={successSvgPaths.p35e48300} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" /></svg></div>
        </button>
        <div className="flex flex-1 items-center justify-center"><p className="font-bold leading-[28px] text-[#685622] text-[18px] text-center tracking-[-0.4395px]">邀请码</p></div>
        <div className="w-[36px]" />
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 flex flex-col items-center overflow-y-auto w-full">
        <div className="w-full max-w-[448px] px-[32px] md:px-[54px] flex flex-col items-center pb-[20px] md:pb-[40px]">

          {/* Icon */}
          <div className="relative flex items-center justify-center w-[120px] h-[120px] md:w-[180px] md:h-[180px] shrink-0 my-[12px]">
            <div className="relative size-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 179.991 179.991">
                <path d={successSvgPaths.p2888e000} fill="#F6E6BA" opacity="0.6" />
                <path d={successSvgPaths.p826fc00} fill="#EDC764" opacity="0.5" />
                <path d={successSvgPaths.p2f835b00} fill="#F6E6BA" opacity="0.6" />
                <path d={successSvgPaths.p1a67ce80} fill="#EDC764" opacity="0.5" />
                <g opacity="0.75"><path d="M49.9975 34.9982V42.9982" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" /><path d="M45.9977 38.9981H53.9977" stroke="#C99619" strokeLinecap="round" strokeWidth="2.49987" /></g>
                <g opacity="0.75"><path d="M164.991 89.9954V95.9954" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" /><path d="M161.992 92.9952H167.992" stroke="#C99619" strokeLinecap="round" strokeWidth="1.9999" /></g>
                <path d={successSvgPaths.p93e4c00} fill="#F6E6BA" opacity="0.3" />
                <path d={successSvgPaths.p329e5d00} fill="#EDC764" stroke="#685622" strokeWidth="3.99979" />
                <path d={successSvgPaths.p1c250be0} stroke="#685622" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.99969" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-[32px] md:mb-[58px] shrink-0 w-full">
            <h2 className="font-bold leading-[42px] text-[#685622] text-[28px] tracking-[0.3828px]">绑定成功！</h2>
            <div className="mt-[4px] text-[#8b7355] text-[16px] leading-[24px] tracking-[-0.3125px]">
              <p>恭喜您已成功绑定会员权益</p>
              <p>尊享专属特权与优惠</p>
            </div>
          </div>

          {/* Info Card */}
          <div className="relative w-full rounded-[20px] mb-[24px] md:mb-[32px] shrink-0 overflow-hidden" style={{ backgroundImage: "linear-gradient(147.095deg, rgba(237,199,100,0.3) 0%, rgba(246,230,186,0.3) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[#edc764] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[20px] z-0" />
            <div className="relative z-10 flex flex-col px-[26px] pt-[26px] pb-[20px]">
              <div className="flex items-center justify-between">
                <p className="text-[#685622] text-[14px] tracking-[-0.1504px]">会员等级</p>
                <p className="font-bold text-[#c99619] text-[18px] tracking-[-0.4395px]">VIP会员</p>
              </div>
              <div className="flex items-center justify-between mt-[16px]">
                <p className="text-[#685622] text-[14px] tracking-[-0.1504px]">有效期至</p>
                <p className="text-[#8b7355] text-[16px] tracking-[-0.3125px]">2026-12-31</p>
              </div>
              <div style={{paddingTop:"20px",paddingBottom:"20px"}}><div style={{width:"100%",height:"1px",backgroundColor:"#edc764",opacity:0.6}} /></div>
              <div className="flex items-start justify-between px-1">
                <BenefitItem label="精简题库" icon={<svg className="block size-full" fill="none" viewBox="0 0 18 18"><clipPath id="cd"><rect height="18" width="18" /></clipPath><g clipPath="url(#cd)"><path d={successSvgPaths.p32e59c00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d={successSvgPaths.p15ad7800} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M7.5 6.75H6" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M12 9.75H6" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M12 12.75H6" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g></svg>} />
                <BenefitItem label="真实考场" icon={<svg className="block size-full" fill="none" viewBox="0 0 18 18"><clipPath id="cm"><rect height="18" width="18" /></clipPath><g clipPath="url(#cm)"><path d={successSvgPaths.p2ff59d00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M6 15.75H12" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M9 12.75V15.75" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g></svg>} />
                <BenefitItem label="懒人听题" icon={<svg className="block size-full" fill="none" viewBox="0 0 18 18"><path d={successSvgPaths.p2c9d7000} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>} />
                <BenefitItem label="速记口诀" icon={<svg className="block size-full" fill="none" viewBox="0 0 18 18"><clipPath id="cb"><rect height="18" width="18" /></clipPath><g clipPath="url(#cb)"><path d={successSvgPaths.p27acba00} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M6.75 13.5H11.25" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d="M7.5 16.5H10.5" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g></svg>} />
                <BenefitItem label="考前密卷" icon={<svg className="block size-full" fill="none" viewBox="0 0 18 18"><clipPath id="cl"><rect height="18" width="18" /></clipPath><g clipPath="url(#cl)"><path d={successSvgPaths.p361d7af0} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /><path d={successSvgPaths.p2fe12200} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></g></svg>} />
              </div>
            </div>
          </div>

          {/* Button */}
          <button onClick={onStart} className="w-full bg-gradient-to-r from-[#edc764] to-[#c99619] rounded-[28px] shadow-[0px_4px_12px_0px_rgba(237,199,100,0.4)] flex items-center justify-center relative active:scale-[0.98] transition-transform shrink-0" style={{ height: "48px", minHeight: "48px" }}>
            <span className="font-medium text-[#685622] text-[18px] tracking-[-0.4395px]">开始使用</span>
          </button>

          {/* Footer */}
          <p className="text-[#afa199] text-[10px] tracking-normal font-normal mt-[24px] shrink-0">我的邀请码：{myInvitationCode ?? "—"}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[8.7px]">
      <div className="relative size-[40px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ed] to-[#ffedd5] rounded-full" />
        <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
        <div className="relative size-[18px] z-10">{icon}</div>
      </div>
      <p className="text-[#92400e] text-[10px] font-medium tracking-[0.1172px]">{label}</p>
    </div>
  );
}
