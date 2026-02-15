import React from "react";

interface SettingsPageProps {
  onBack: () => void;
  onLogout?: () => void;
  onLogin?: () => void;
  isLoggedIn?: boolean;
  username?: string;
  phoneNumber?: string;
}

import { getPublicUrl } from "../../utils/publicPath";

/**
 * 设置页面 - 严格按照 Figma 设计稿 node-id=7690-1512 1:1 复刻
 */
export function SettingsPage({
  onBack,
  onLogout,
  onLogin,
  isLoggedIn = false,
  username = "张三",
  phoneNumber = "138****8888",
}: SettingsPageProps) {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)",
      }}
    >
      {/* ====== Header: pt-[50px] 与其他二级页面保持一致 ====== */}
      <div className="shrink-0 flex items-center justify-center pt-[50px] pb-3 w-full relative z-10">
        <div className="absolute left-[12px] top-[50px] z-20">
          <button
            onClick={onBack}
            className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70"
          >
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p
          className="font-bold text-[#685622] text-[18px] text-center"
          style={{ letterSpacing: "-0.4395px", lineHeight: "28px" }}
        >
          设置
        </p>
      </div>

      {/* ====== Scrollable Content ====== */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[24px] pb-[40px]">
        <div className="w-full flex flex-col gap-[20px] pt-[8px]">

          {/* ===== 1. 用户信息卡片: h-96, border-2, gap-16, px-26 ===== */}
          <div
            className="shrink-0 w-full h-[96px] rounded-[20px] flex gap-[16px] items-center px-[26px] py-[2px]"
            style={{
              border: "1.975px solid #edc764",
              backgroundImage: "linear-gradient(166.5deg, rgba(237, 199, 100, 0.2) 0%, rgba(246, 230, 186, 0.2) 100%)",
            }}
          >
            <div
              className="shrink-0 rounded-full flex items-center justify-center overflow-hidden"
              style={{
                width: "64px",
                height: "64px",
                minWidth: "64px",
                minHeight: "64px",
                backgroundImage: "linear-gradient(135deg, rgb(237, 199, 100) 0%, rgb(201, 150, 25) 100%)",
                boxShadow: "0px 4px 12px 0px rgba(237,199,100,0.3)",
              }}
            >
              <img alt="" src={getPublicUrl("icons/settings/user-avatar.svg")} style={{ display: "block", width: "32px", height: "32px", flexShrink: 0 }} />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
              <p className="font-medium text-[#685622] text-[18px] leading-[27px] truncate" style={{ letterSpacing: "-0.4395px" }}>
                {isLoggedIn ? username : "未登录"}
              </p>
              <p className="text-[#8b7355] text-[13px] leading-[19.5px]" style={{ letterSpacing: "-0.0762px" }}>
                {isLoggedIn ? `手机号：${phoneNumber}` : "请先登录"}
              </p>
            </div>
            {isLoggedIn && (
              <div
                className="shrink-0 flex items-center justify-center"
                style={{ width: "43px", height: "30px", borderRadius: "12px", background: "linear-gradient(90deg, #edc764 0%, #c99619 100%)" }}
              >
                <span className="font-medium text-[#685622] text-[12px] leading-[18px]">VIP</span>
              </div>
            )}
          </div>

          {/* ===== 2. 菜单卡片: h-162, 联系我们 + 关于我们 ===== */}
          <div
            className="shrink-0 w-full h-[162px] rounded-[20px] overflow-hidden flex flex-col"
            style={{ border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)" }}
          >
            <div
              className="shrink-0 w-full h-[80px] flex items-center justify-between px-[20px] cursor-pointer active:bg-[rgba(237,199,100,0.05)]"
              style={{ borderBottom: "1px solid rgba(237,199,100,0.3)" }}
            >
              <div className="flex gap-[16px] items-center">
                <div className="shrink-0 size-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(237,199,100,0.2)" }}>
                  <img alt="" src={getPublicUrl("icons/settings/contact-us.svg")} className="block size-[22px]" />
                </div>
                <p className="text-[#685622] text-[15px] leading-[22.5px]" style={{ letterSpacing: "-0.2344px" }}>联系我们</p>
              </div>
              <img alt="" src={getPublicUrl("icons/settings/chevron-right.svg")} className="block size-[20px]" />
            </div>
            <div className="shrink-0 w-full h-[80px] flex items-center justify-between px-[20px] cursor-pointer active:bg-[rgba(237,199,100,0.05)]">
              <div className="flex gap-[16px] items-center">
                <div className="shrink-0 size-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(237,199,100,0.2)" }}>
                  <img alt="" src={getPublicUrl("icons/settings/about-us.svg")} className="block size-[22px]" />
                </div>
                <p className="text-[#685622] text-[15px] leading-[22.5px]" style={{ letterSpacing: "-0.2344px" }}>关于我们</p>
              </div>
              <img alt="" src={getPublicUrl("icons/settings/chevron-right.svg")} className="block size-[20px]" />
            </div>
          </div>

          {/* ===== 3. 题库版本卡片: 高度80px, 垂直居中, px-20 ===== */}
          <div
            className="w-full rounded-[20px] flex items-center justify-between px-[20px]"
            style={{ height: "80px", minHeight: "80px", border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)", flexShrink: 0 }}
          >
            <div className="flex gap-[16px] items-center">
              <div className="shrink-0 size-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(237,199,100,0.2)" }}>
                <img alt="" src={getPublicUrl("icons/settings/question-bank.svg")} className="block size-[22px]" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[#685622] text-[15px] leading-[22.5px]" style={{ letterSpacing: "-0.2344px" }}>题库版本</p>
                <p className="text-[#8b7355] text-[12px] leading-[18px]">最后更新：2026-01-20</p>
              </div>
            </div>
            <p className="font-medium text-[#c99619] text-[14px] leading-[21px]" style={{ letterSpacing: "-0.1504px" }}>v2.5.3</p>
          </div>

          {/* ===== 4. 当前版本卡片: 高度80px, 垂直居中, px-20 ===== */}
          <div
            className="w-full rounded-[20px] flex items-center justify-between px-[20px]"
            style={{ height: "80px", minHeight: "80px", border: "1px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)", flexShrink: 0 }}
          >
            <div className="flex gap-[16px] items-center">
              <div className="shrink-0 size-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(237,199,100,0.2)" }}>
                <img alt="" src={getPublicUrl("icons/settings/current-version.svg")} className="block size-[22px]" />
              </div>
              <p className="text-[#685622] text-[15px] leading-[22.5px]" style={{ letterSpacing: "-0.2344px" }}>当前版本</p>
            </div>
            <p className="font-medium text-[#c99619] text-[14px] leading-[21px]" style={{ letterSpacing: "-0.1504px" }}>v1.0.0</p>
          </div>

          {/* ===== 5. 登录/退出按钮 ===== */}
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="shrink-0 w-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
              style={{ height: "40px", borderRadius: "20px", border: "1.317px solid #edc764", backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <p className="font-medium text-[#c99619] text-[16px] leading-[24px] text-center" style={{ letterSpacing: "-0.3125px" }}>
                退出登录
              </p>
            </button>
          ) : (
            <button
              onClick={onLogin}
              className="shrink-0 w-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
              style={{ height: "40px", borderRadius: "20px", background: "linear-gradient(90deg, #edc764 0%, #c99619 100%)" }}
            >
              <p className="font-medium text-[#685622] text-[14px] leading-[21px] text-center" style={{ letterSpacing: "-0.1504px" }}>
                立即登录
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
