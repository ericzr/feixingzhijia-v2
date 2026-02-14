import React, { useState } from "react";

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ onBack, onLoginSuccess }: LoginPageProps) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = () => {
    onLoginSuccess();
  };

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg, rgba(245,219,155,0.4) 11.201%, rgba(251,242,219,0.18) 100%), linear-gradient(90deg, rgb(254,251,244) 0%, rgb(254,251,244) 100%)" }}>
      <div className="flex-1 min-h-0 overflow-y-auto w-full">
        <div className="w-full max-w-[448px] mx-auto flex flex-col items-center" style={{paddingTop:"103px",paddingBottom:"40px"}}>

          {/* Avatar Icon */}
          <div className="flex items-center justify-center rounded-full" style={{width:"79px",height:"79px",backgroundImage:"linear-gradient(135deg, rgb(237,199,100) 0%, rgb(201,150,25) 100%)",boxShadow:"0px 8px 24px 0px rgba(237,199,100,0.4)"}}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="16" r="7" stroke="#685622" strokeWidth="2.5" fill="none" />
              <path d="M8 38c0-8 6.5-14 14.5-14s14.5 6 14.5 14" stroke="#685622" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Title */}
          <div className="text-center" style={{marginTop:"20px"}}>
            <h1 className="font-bold text-[#685622] text-[28px] tracking-[0.3828px]" style={{lineHeight:"42px"}}>欢迎登录</h1>
            <p className="text-[#8b7355] text-[14px] tracking-[-0.1504px]" style={{marginTop:"8px",lineHeight:"21px"}}>开启您的航空学习与接单之旅</p>
          </div>

          {/* Form Card */}
          <div className="w-full" style={{padding:"40px 24px 0 24px"}}>
            <div className="w-full" style={{backgroundColor:"rgba(255,255,255,0.85)",border:"0.658px solid #edc764",borderRadius:"24px",boxShadow:"0px 8px 32px 0px rgba(237,199,100,0.2)",padding:"32px 32px 32px 32px"}}>

              {/* Card Title */}
              <p className="font-bold text-[#685622] text-[20px] tracking-[-0.4492px]" style={{lineHeight:"30px"}}>手机号验证码登录</p>

              {/* Phone Input */}
              <div style={{marginTop:"24px"}}>
                <p className="text-[#8b7355] text-[13px] tracking-[-0.0762px]" style={{lineHeight:"19.5px"}}>手机号</p>
                <div className="w-full flex items-center" style={{marginTop:"10px",height:"52px",backgroundColor:"rgba(246,230,186,0.2)",border:"1.317px solid #edc764",borderRadius:"16px",paddingLeft:"48px",paddingRight:"16px",position:"relative"}}>
                  <div style={{position:"absolute",left:"16px",top:"16px",width:"20px",height:"20px"}}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="5" y="2" width="10" height="16" rx="2" stroke="#8b7355" strokeWidth="1.5" fill="none" />
                      <circle cx="10" cy="15" r="0.8" fill="#8b7355" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="请输入手机号"
                    className="w-full bg-transparent border-none outline-none"
                    style={{fontSize:"16px",color:"#685622",letterSpacing:"-0.3125px"}}
                  />
                </div>
              </div>

              {/* Verification Code Input */}
              <div style={{marginTop:"20px"}}>
                <p className="text-[#8b7355] text-[13px] tracking-[-0.0762px]" style={{lineHeight:"19.5px"}}>验证码</p>
                <div className="flex items-center" style={{marginTop:"10px",gap:"12px"}}>
                  <div className="flex-1 flex items-center" style={{height:"52px",backgroundColor:"rgba(246,230,186,0.2)",border:"1.317px solid #edc764",borderRadius:"16px",paddingLeft:"48px",paddingRight:"16px",position:"relative"}}>
                    <div style={{position:"absolute",left:"16px",top:"16px",width:"20px",height:"20px"}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="9" width="12" height="9" rx="2" stroke="#8b7355" strokeWidth="1.5" fill="none" />
                        <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="#8b7355" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <circle cx="10" cy="13.5" r="1" fill="#8b7355" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="请输入验证码"
                      className="w-full bg-transparent border-none outline-none"
                      style={{fontSize:"16px",color:"#685622",letterSpacing:"-0.3125px"}}
                    />
                  </div>
                  <button
                    className="shrink-0 flex items-center justify-center text-[14px] font-medium tracking-[-0.1504px] transition-all duration-200"
                    style={{
                      width: "110px",
                      height: "52px",
                      borderRadius: "16px",
                      backgroundColor: phone.trim() ? "#edc764" : "rgba(139,115,85,0.2)",
                      color: phone.trim() ? "#685622" : "#8b7355",
                      opacity: phone.trim() ? 1 : 0.6,
                      cursor: phone.trim() ? "pointer" : "default",
                    }}
                    disabled={!phone.trim()}
                  >
                    获取验证码
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
                style={{marginTop:"32px",height:"40px",backgroundImage:"linear-gradient(to right, #edc764, #c99619)",borderRadius:"20px"}}
              >
                <span className="font-medium text-[#685622] text-[14px] tracking-[-0.1504px]">立即登录</span>
              </button>

              {/* Agreement */}
              <div className="w-full text-center" style={{marginTop:"24px"}}>
                <p className="font-medium text-[#8b7355] text-[12px]" style={{lineHeight:"18px"}}>
                  登录即代表同意
                  <span className="text-[#c99619]">《用户协议》</span>
                  和
                  <span className="text-[#c99619]">《隐私政策》</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
