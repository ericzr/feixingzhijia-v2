import { getPublicUrl } from "../utils/publicPath";
import { SECONDARY_PAGE_BG } from "../constants/theme";
import svgPaths from "./svg-2zhoudi8y6";

// 设计稿：箭头 19.998px，#D1D5DC
function CardRightArrow() {
  return (
    <div className="shrink-0 w-5 h-5 flex items-center justify-center" aria-hidden>
      <svg className="block w-full h-full" fill="none" viewBox="0 0 19.9981 19.9981">
        <path
          d={svgPaths.p385bcb60}
          stroke="#D1D5DC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66651"
        />
      </svg>
    </div>
  );
}

interface ComprehensiveQAPageProps {
  onBack?: () => void;
  onPracticeMode?: () => void;
  onExamMode?: () => void;
}

const CARD_SHADOW =
  "0px 1px 3px 0px rgba(251,242,219,0.1), 0px 1px 2px -1px rgba(251,242,219,0.1)";

// 设计稿数值 + 与二级页一致的头部安全距离 pt-[50px]
const DESIGN = {
  headerSafeTop: 50,
  backPadding: 12,
  backSize: 32,
  headerTotalHeight: 96,
  titlePaddingLeft: 33,
  titlePaddingRight: 32,
  titleToCardsGap: 57,
  cardsPaddingH: 15.996,
  cardsGap: 15.996,
  cardHeight: 90.963,
  cardRadius: 14,
  cardPaddingH: 19.998,
  cardTextGap: 5.991,
} as const;

export default function ComprehensiveQAPage({
  onBack,
  onPracticeMode,
  onExamMode,
}: ComprehensiveQAPageProps = {}) {
  const headerBottomPadding =
    DESIGN.headerTotalHeight - DESIGN.headerSafeTop - DESIGN.backSize;

  return (
    <div
      className="w-full flex flex-col flex-1 min-h-0 box-border"
      style={{
        backgroundImage: SECONDARY_PAGE_BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div
        className="w-full max-w-[448px] mx-auto box-border flex flex-col flex-1"
        style={{ minWidth: 0 }}
      >
        {/* 头部：与其他二级页一致 pt-[50px]，返回 left 12、尺寸 32，下方留白使标题区从 96px 起 */}
        <header
          className="shrink-0 flex items-start box-border pt-[50px]"
          style={{
            paddingLeft: DESIGN.backPadding,
            paddingRight: DESIGN.backPadding,
            paddingBottom: headerBottomPadding,
            boxSizing: "border-box",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            className="flex items-center justify-center cursor-pointer active:opacity-70 shrink-0 border-0 bg-transparent p-0"
            style={{ width: DESIGN.backSize, height: DESIGN.backSize }}
            aria-label="返回"
          >
            <img
              alt=""
              src={getPublicUrl("icons/settings/back-arrow.svg")}
              className="block"
              style={{ width: 7, height: 14 }}
            />
          </button>
        </header>

        {/* 标题区：设计稿 top 96、left 33、宽 383，标题 22/30.25、说明 12/19.5、间距 12 */}
        <section
          className="shrink-0 box-border"
          style={{
            paddingLeft: DESIGN.titlePaddingLeft,
            paddingRight: DESIGN.titlePaddingRight,
            paddingBottom: 0,
          }}
        >
          <h1
            className="font-bold text-[#1d293d] m-0"
            style={{
              fontSize: 22,
              lineHeight: "30.25px",
              letterSpacing: "-0.8078px",
              fontFamily: "Inter, 'Noto Sans SC', sans-serif",
            }}
          >
            综合问答：
            <span className="text-[#c99619]">视距内驾驶员和超视距驾驶员</span>
            的考试项目
          </h1>
          <p
            className="font-normal text-[#62748e] m-0"
            style={{
              marginTop: 12,
              fontSize: 12,
              lineHeight: "19.5px",
              fontFamily: "Inter, 'Noto Sans SC', sans-serif",
            }}
          >
            考试采用电脑机考选择题的方式，考试时长20分钟，共10题，答对≥7题合格
          </p>
        </section>

        {/* 卡片区：设计稿 top 264，即与标题区间距 57px；左右 15.996、两卡间距 15.996；卡片高 90.963、圆角 14、左右 19.998；文字块 gap 5.991 */}
        <section
          className="shrink-0 w-full box-border flex flex-col pb-6"
          style={{
            marginTop: DESIGN.titleToCardsGap,
            paddingLeft: DESIGN.cardsPaddingH,
            paddingRight: DESIGN.cardsPaddingH,
            gap: DESIGN.cardsGap,
            minWidth: 0,
          }}
        >
          <button
            type="button"
            onClick={onPracticeMode}
            className="w-full text-left rounded-[14px] flex items-center cursor-pointer active:opacity-90 box-border border-0 outline-none"
            style={{
              height: DESIGN.cardHeight,
              paddingLeft: DESIGN.cardPaddingH,
              paddingRight: DESIGN.cardPaddingH,
              backgroundColor: "#ffffff",
              boxShadow: CARD_SHADOW,
            }}
          >
            <div
              className="flex flex-col min-w-0 flex-1 justify-center items-start text-left"
              style={{ gap: DESIGN.cardTextGap, marginRight: 12 }}
            >
              <span
                className="font-bold text-[#1d293d] block"
                style={{
                  fontSize: 17,
                  lineHeight: "25.5px",
                  letterSpacing: "-0.4316px",
                  fontFamily: "Inter, 'Noto Sans SC', sans-serif",
                }}
              >
                练习模式
              </span>
              <span
                className="font-normal text-[#6a7282] block"
                style={{
                  fontSize: 13,
                  lineHeight: "19.5px",
                  letterSpacing: "-0.0762px",
                  fontFamily: "Inter, 'Noto Sans SC', sans-serif",
                }}
              >
                题库共213题，不限练习时长
              </span>
            </div>
            <CardRightArrow />
          </button>

          <button
            type="button"
            onClick={onExamMode}
            className="w-full text-left rounded-[14px] flex items-center cursor-pointer active:opacity-90 box-border border-0 outline-none"
            style={{
              height: DESIGN.cardHeight,
              paddingLeft: DESIGN.cardPaddingH,
              paddingRight: DESIGN.cardPaddingH,
              backgroundColor: "#ffffff",
              boxShadow: CARD_SHADOW,
            }}
          >
            <div
              className="flex flex-col min-w-0 flex-1 justify-center items-start text-left"
              style={{ gap: DESIGN.cardTextGap, marginRight: 12 }}
            >
              <span
                className="font-bold text-[#1d293d] block"
                style={{
                  fontSize: 17,
                  lineHeight: "25.5px",
                  letterSpacing: "-0.4316px",
                  fontFamily: "Inter, 'Noto Sans SC', sans-serif",
                }}
              >
                考试模式
              </span>
              <span
                className="font-normal text-[#6a7282] block"
                style={{
                  fontSize: 13,
                  lineHeight: "19.5px",
                  letterSpacing: "-0.0762px",
                  fontFamily: "Inter, 'Noto Sans SC', sans-serif",
                }}
              >
                每次出10题，20分钟内作答，答对≥7题合格
              </span>
            </div>
            <CardRightArrow />
          </button>
        </section>
      </div>
    </div>
  );
}
