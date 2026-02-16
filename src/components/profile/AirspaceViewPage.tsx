import React, { useState, useCallback, useRef } from "react";
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import { getPublicUrl } from "../../utils/publicPath";

interface AirspaceViewPageProps {
  onBack: () => void;
}

const zones = [
  { id: 1, color: "#ff6b6b", bg: "rgba(255,107,107,0.3)", size: 120, top: 140, left: 80 },
  { id: 2, color: "#ffb84d", bg: "rgba(255,184,77,0.3)", size: 100, top: 270, left: 260 },
  { id: 3, color: "#fdd835", bg: "rgba(253,216,53,0.3)", size: 90, top: 400, left: 170 },
  { id: 4, color: "#4caf50", bg: "rgba(76,175,80,0.3)", size: 110, top: 480, left: 40 },
];

const legend = [
  { color: "#ff6b6b", label: "禁飞区" },
  { color: "#ffb84d", label: "限制区" },
  { color: "#fdd835", label: "警戒区" },
  { color: "#4caf50", label: "可飞行" },
];

export function AirspaceViewPage({ onBack }: AirspaceViewPageProps) {
  const [showPanel, setShowPanel] = useState(true);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ clientX: 0, clientY: 0, offsetX: 0, offsetY: 0 });
  const isDraggingRef = useRef(false);

  const onMapPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".map-controls")) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = { clientX: e.clientX, clientY: e.clientY, offsetX: mapOffset.x, offsetY: mapOffset.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [mapOffset.x, mapOffset.y]);

  const onMapPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const { clientX, clientY, offsetX, offsetY } = dragStartRef.current;
    setMapOffset({ x: offsetX + (e.clientX - clientX), y: offsetY + (e.clientY - clientY) });
  }, []);

  const onMapPointerUp = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col flex-1 min-h-0 overflow-hidden"
      style={{ backgroundImage: SECONDARY_PAGE_BG }}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center justify-center w-full relative z-30" style={{ paddingTop: "50px", paddingBottom: "12px" }}>
        <div className="absolute z-20" style={{ left: "12px", top: "50px" }}>
          <button onClick={onBack} className="size-[36px] flex items-center justify-center cursor-pointer active:opacity-70">
            <img alt="" src={getPublicUrl("icons/settings/back-arrow.svg")} className="block w-[7px] h-[14px]" />
          </button>
        </div>
        <p className="font-bold text-[#685622] text-[18px] text-center" style={{ letterSpacing: "-0.4395px", lineHeight: "28px" }}>
          空域查看
        </p>
      </div>

      {/* Search Bar */}
      <div className="shrink-0 z-20" style={{ padding: "8px 24px 16px 24px" }}>
        <div
          className="w-full flex items-center"
          style={{
            height: "48px", borderRadius: "24px", border: "1.3px solid #edc764",
            backgroundColor: "#fff", boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.2)",
            paddingLeft: "48px", paddingRight: "16px", position: "relative",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", left: "16px", top: "14px" }}>
            <circle cx="9" cy="9" r="7" stroke="#8b7355" strokeWidth="1.5" />
            <path d="M14 14L18 18" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[15px]" style={{ color: "rgba(104,86,34,0.5)", letterSpacing: "-0.2344px" }}>
            搜索地址查看空域信息
          </span>
        </div>
      </div>

      {/* Map Area - 可拖动空域地图，touch-action: none 避免移动端触摸被页面滚动抢占 */}
      <div
        className="flex-1 relative overflow-hidden select-none"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
        }}
        onPointerDown={onMapPointerDown}
        onPointerMove={onMapPointerMove}
        onPointerUp={onMapPointerUp}
        onPointerLeave={onMapPointerUp}
        onPointerCancel={onMapPointerUp}
      >
        {/* 可拖动的地图内容层 */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mapOffset.x}px, ${mapOffset.y}px)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {/* Zone circles */}
          {zones.map((z) => (
            <div
              key={z.id}
              style={{
                position: "absolute", width: z.size, height: z.size, borderRadius: "50%",
                backgroundColor: z.bg, border: `2px solid ${z.color}`,
                top: z.top, left: z.left,
              }}
            />
          ))}

          {/* Location pin */}
          <div
            className="flex items-center justify-center"
            style={{
              position: "absolute", width: "40px", height: "40px", borderRadius: "50%",
              backgroundImage: "linear-gradient(135deg, rgb(237,199,100) 0%, rgb(201,150,25) 100%)",
              boxShadow: "0px 4px 12px 0px rgba(237,199,100,0.5)",
              top: "330px", left: "50%", transform: "translateX(-50%)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z" fill="white" />
              <circle cx="10" cy="8" r="2" fill="#c99619" />
            </svg>
          </div>
        </div>

        {/* Map controls - 不参与拖动 */}
        <div className="map-controls absolute flex flex-col pointer-events-auto" style={{ right: "16px", top: "60px", gap: "12px" }}>
          {[
            <svg key="loc" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#685622" strokeWidth="1.5"/><path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#685622" strokeWidth="1.5" strokeLinecap="round"/></svg>,
            <svg key="layer" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4L3 9L12 14L21 9L12 4Z" stroke="#685622" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 14L12 19L21 14" stroke="#685622" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
            <svg key="plus" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 6V18M6 12H18" stroke="#685622" strokeWidth="1.5" strokeLinecap="round"/></svg>,
            <svg key="minus" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12H18" stroke="#685622" strokeWidth="1.5" strokeLinecap="round"/></svg>,
          ].map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center cursor-pointer active:opacity-70"
              style={{
                width: "48px", height: "48px", borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.9)", border: "1.3px solid #edc764",
                boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.1)",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Panel - 透明衬底，延续整页渐变无割裂 */}
      {showPanel && (
        <div className="absolute left-0 right-0 bottom-0 z-20">
          <div
            className="flex flex-col"
            style={{
              margin: "0 16px", padding: "22px", borderRadius: "20px", gap: "16px",
              backgroundColor: "#fff", border: "2px solid #edc764",
              boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.1)",
            }}
          >
            {/* Location row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center" style={{ gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C6.69 2 4 4.69 4 8C4 12.5 10 18 10 18C10 18 16 12.5 16 8C16 4.69 13.31 2 10 2Z" stroke="#c99619" strokeWidth="1.5"/><circle cx="10" cy="8" r="2" stroke="#c99619" strokeWidth="1.5"/></svg>
                <span className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.15px" }}>当前位置：北京市朝阳区</span>
              </div>
              <button onClick={() => setShowPanel(false)} className="cursor-pointer active:opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#8b7355" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Info card */}
            <div className="flex items-start" style={{ gap: "16px" }}>
              <div
                className="shrink-0 flex items-center justify-center"
                style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(76,175,80,0.13)" }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3C8.48 3 4 7.48 4 13C4 20 14 26 14 26C14 26 24 20 24 13C24 7.48 19.52 3 14 3Z" stroke="#4caf50" strokeWidth="2"/><circle cx="14" cy="13" r="3" stroke="#4caf50" strokeWidth="2"/></svg>
              </div>
              <div className="flex-1 flex flex-col" style={{ gap: "8px" }}>
                <div className="flex items-center" style={{ gap: "10px" }}>
                  <span className="font-medium text-[#685622] text-[17px]" style={{ letterSpacing: "-0.43px" }}>朝阳区可飞行区域</span>
                  <span
                    className="text-[#4caf50] text-[12px] font-medium flex items-center justify-center"
                    style={{ height: "26px", padding: "0 10px", borderRadius: "12px", backgroundColor: "rgba(76,175,80,0.13)" }}
                  >
                    可飞行
                  </span>
                </div>
                <p className="text-[#8b7355] text-[14px]" style={{ letterSpacing: "-0.15px" }}>此区域允许无人机飞行，最大高度120米</p>
                <div className="flex" style={{ gap: "12px" }}>
                  <button
                    className="flex-1 flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
                    style={{ height: "40px", borderRadius: "20px", border: "1.3px solid #edc764", color: "#685622", fontSize: "14px", fontWeight: 500 }}
                  >
                    查看详情
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform"
                    style={{
                      height: "40px", borderRadius: "20px",
                      background: "linear-gradient(90deg, #edc764 0%, #c99619 100%)",
                      boxShadow: "0px 2px 8px 0px rgba(237,199,100,0.4)",
                      color: "#685622", fontSize: "14px", fontWeight: 500,
                    }}
                  >
                    申请飞行
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center" style={{ gap: "20px", padding: "16px 16px 24px 16px" }}>
            {legend.map((l) => (
              <div key={l.label} className="flex items-center" style={{ gap: "6px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: l.color }} />
                <span className="text-[#8b7355] text-[12px]">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
