import { useState, useRef, useEffect } from "react";
import { Header } from "./components/home/Header";
import { CategoryBanner } from "./components/home/CategoryBanner";
import { PracticeGrid } from "./components/home/PracticeGrid";
import { FeatureScroll } from "./components/home/FeatureScroll";
import { ExamBanner } from "./components/home/ExamBanner";
import { SchoolList } from "./components/home/SchoolList";
import { BottomNav } from "./components/home/BottomNav";
import CitySelector from "./components/city/CitySelector";
import ProfilePage from "./components/profile/ProfilePage";
import ExamTypeSelector, {
  DroneType,
  LicenseType,
} from "./components/exam/ExamTypeSelector";
import { SequentialPracticeIntro } from "./components/practice/SequentialPracticeIntro";
import { SequentialPracticeDetail } from "./components/practice/SequentialPracticeDetail";
import { RandomPracticeDetail } from "./components/practice/RandomPracticeDetail";
import { MockExam } from "./components/practice/MockExam";
import { SimulationSetup } from "./components/simulation/SimulationSetup";
import { SimplifiedPractice } from "./components/practice/SimplifiedPractice";
import { RealExamExternal } from "./components/practice/RealExamExternal";
import { PreExamPapers } from "./components/practice/PreExamPapers";
import { IntegratedQA } from "./components/practice/IntegratedQA";
import ComprehensiveQAPage from "./imports/综合问答";
import { DailyPractice } from "./components/practice/DailyPractice";
import { ChapterPractice } from "./components/practice/ChapterPractice";
import { ExamRecord } from "./components/practice/ExamRecord";
import { MyMistakes } from "./components/practice/MyMistakes";
import { MyFavorites } from "./components/practice/MyFavorites";
import { InvitationCode } from "./components/profile/InvitationCode";
import { CaacBinding } from "./components/profile/CaacBinding";
import { CaacUploadSuccess } from "./components/profile/CaacUploadSuccess";
import { CaacCertified } from "./components/profile/CaacCertified";
import { SchoolDetail } from "./components/home/SchoolDetail";
import { ReviewList } from "./components/home/ReviewList";
import { CoachList } from "./components/home/CoachList";
import { SchoolIntroductionDetail } from "./components/home/SchoolIntroductionDetail";
import { FloatingActionButtons } from "./components/home/FloatingActionButtons";
import { MobileLayout } from "./components/common/MobileLayout";
import { SECONDARY_PAGE_BG, ROOT_BG_SPLIT } from "./constants/theme";

import JobsPage from "./components/jobs/JobsPage";
import JobDetailPage from "./components/jobs/JobDetailPage";
import { LoginPage } from "./components/profile/LoginPage";
import { SettingsPage } from "./components/profile/SettingsPage";
import { MyCollectionsPage } from "./components/profile/MyCollectionsPage";
import { FlightApplicationPage } from "./components/profile/FlightApplicationPage";
import { FlightProxyApplyPage } from "./components/profile/FlightProxyApplyPage";
import { FlightRecordsPage } from "./components/profile/FlightRecordsPage";
import { AirspaceViewPage } from "./components/profile/AirspaceViewPage";
import { ClimateQueryPage } from "./components/profile/ClimateQueryPage";
import { ResumeEditPage } from "./components/profile/ResumeEditPage";
import { InstitutionCertPage } from "./components/profile/InstitutionCertPage";

type Page =
  | "home"
  | "sequential_intro"
  | "sequential_detail"
  | "random_practice_detail"
  | "mock_exam"
  | "simulation_setup"
  | "simplified_practice"
  | "real_exam_external"
  | "pre_exam_papers"
  | "integrated_qa"
  | "comprehensive_qa"
  | "daily_practice"
  | "chapter_practice"
  | "exam_record"
  | "my_mistakes"
  | "my_favorites"
  | "invitation_code"
  | "caac_binding"
  | "caac_success"
  | "caac_certified"
  | "school_detail"
  | "school_reviews"
  | "school_coach_list"
  | "school_introduction"
  | "job_detail"
  | "login"
  | "settings"
  | "my_collections"
  | "flight_application"
  | "flight_proxy_apply"
  | "flight_records"
  | "airspace_view"
  | "climate_query"
  | "resume_edit"
  | "institution_cert";

export default function App() {
  const [showCitySelector, setShowCitySelector] =
    useState(false);
  const [showExamTypeSelector, setShowExamTypeSelector] =
    useState(false);
  const [activeTab, setActiveTab] = useState<
    "exam" | "jobs" | "profile"
  >("exam");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isListSticky, setIsListSticky] = useState(false);
  const [showDetailPhone, setShowDetailPhone] = useState(false);
  const [profileRole, setProfileRole] = useState<
    "candidate" | "pilot"
  >("candidate");
  const [hasCertified, setHasCertified] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /** 模拟考试：是否已进入「考试习题」页（用于头部/根背景切白；入口页保持米黄） */
  const [isMockExamDetailView, setIsMockExamDetailView] = useState(false);

  const schoolListRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Lifted state for exam types
  const [droneType, setDroneType] =
    useState<DroneType>("多旋翼无人机");
  const [licenseType, setLicenseType] =
    useState<LicenseType>("视距内驾驶员");

  // Reset scroll-related states when switching back to the exam tab
  useEffect(() => {
    if (activeTab === "exam" && currentPage === "home") {
      setIsScrolled(false);
      setIsListSticky(false);
      // Ensure the scroll position is actually at the top if it remounts
      mainRef.current?.scrollTo({ top: 0 });
    }
  }, [activeTab, currentPage]);

  // 离开模拟考试页时重置「考试习题」视图标记
  useEffect(() => {
    if (currentPage !== "mock_exam") setIsMockExamDetailView(false);
  }, [currentPage]);

  // theme-color、根背景、根级顶部安全条：
  // - 详情页（航校/接单详情）、顺序练习/随机练习、模拟考试习题页整页白，头部安全区白
  // - 模拟考试入口页（进入考试前）保持米黄
  // - 接单一级页、考试页下滑至航校列表时头部安全区白
  // - 城市选择、考试类型选择页头部安全区 #FEFBF4
  // - 其它页面头部安全区米黄 #fbf2db，底部仍为白渐变
  // - body 与 #root-safe-area-top 使用 0.2s 过渡，与 Header 的 duration-200 同步，避免头部色块逐步切换
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const isProfileMain = !showCitySelector && currentPage === "home" && activeTab === "profile";
      meta.setAttribute("content", isProfileMain ? "#fbf2db" : "#ffffff");
    }
    const isDetailPage = currentPage === "school_detail" || currentPage === "job_detail";
    const isPracticeDetailPage = currentPage === "sequential_detail" || currentPage === "random_practice_detail";
    const isMockExamDetail = currentPage === "mock_exam" && isMockExamDetailView;
    const isJobsMain = currentPage === "home" && activeTab === "jobs";
    const isExamScrolledWhite = currentPage === "home" && activeTab === "exam" && isScrolled;
    const stripShouldBeFefbf4 = showCitySelector || showExamTypeSelector;
    const stripShouldBeWhite = !stripShouldBeFefbf4 && (isDetailPage || isPracticeDetailPage || isMockExamDetail || isJobsMain || isExamScrolledWhite);

    document.body.style.transition = "background 0.2s ease";
    document.body.style.background = isDetailPage || isPracticeDetailPage || isMockExamDetail ? "#ffffff" : ROOT_BG_SPLIT;
    const topStrip = document.getElementById("root-safe-area-top");
    if (topStrip) {
      const color = stripShouldBeFefbf4
        ? "#FEFBF4"
        : stripShouldBeWhite
        ? "#ffffff"
        : "#fbf2db";
      (topStrip as HTMLElement).style.background = color;
    }
  }, [showCitySelector, showExamTypeSelector, currentPage, activeTab, isScrolled, isMockExamDetailView]);

  const handleExamTypeConfirm = (
    newDroneType: DroneType,
    newLicenseType: LicenseType,
  ) => {
    setDroneType(newDroneType);
    setLicenseType(newLicenseType);
    setShowExamTypeSelector(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    // Check if SchoolList is close to the top
    if (schoolListRef.current) {
      const rect =
        schoolListRef.current.getBoundingClientRect();
      const STICKY_THRESHOLD = 96; // Height of the fixed header

      // List becomes sticky (visually white background) when it hits the threshold
      // We use a small buffer (e.g. 1px) to avoid flickering
      const isSticky = rect.top <= STICKY_THRESHOLD + 1;

      // Sync the Header transition with the list becoming sticky
      if (isSticky !== isScrolled) setIsScrolled(isSticky);
      if (isSticky !== isListSticky) setIsListSticky(isSticky);
    }
  };

  const handleScrollTop = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePhoneClick = () => {
    // Placeholder for secondary page
    console.log("Phone consultation clicked");
  };

  if (showCitySelector) {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <CitySelector
          onClose={() => setShowCitySelector(false)}
        />
      </MobileLayout>
    );
  }

  // Handle Sequential Practice Pages (Full Screen)
  if (currentPage === "sequential_intro") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <SequentialPracticeIntro
          onBack={() => setCurrentPage("home")}
          onStartPractice={() =>
            setCurrentPage("sequential_detail")
          }
          onRandomPracticeClick={() => setCurrentPage("random_practice_detail")}
          onChapterPracticeClick={() => setCurrentPage("chapter_practice")}
          onDailyPracticeClick={() => setCurrentPage("daily_practice")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "sequential_detail") {
    return (
      <MobileLayout bgClass="bg-white">
        <SequentialPracticeDetail
          onBack={() => setCurrentPage("sequential_intro")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "random_practice_detail") {
    return (
      <MobileLayout bgClass="bg-white">
        <RandomPracticeDetail
          onBack={() => setCurrentPage("sequential_intro")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "mock_exam") {
    return (
      <MobileLayout
        bgClass={isMockExamDetailView ? "bg-white" : "bg-[#fefbf4]"}
        innerBgStyle={isMockExamDetailView ? undefined : { background: ROOT_BG_SPLIT }}
        outerTransparent={!isMockExamDetailView}
        topSafeAreaBeige={!isMockExamDetailView}
      >
        <MockExam
          onBack={() => setCurrentPage("home")}
          onRealExamClick={() =>
            setCurrentPage("real_exam_external")
          }
          onExamStarted={setIsMockExamDetailView}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "simulation_setup") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <SimulationSetup
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "simplified_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <SimplifiedPractice
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "real_exam_external") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <RealExamExternal
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "pre_exam_papers") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <PreExamPapers onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "integrated_qa") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <IntegratedQA onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "comprehensive_qa") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <ComprehensiveQAPage onBack={() => setCurrentPage("home")} />
        </div>
      </MobileLayout>
    );
  }

  if (currentPage === "daily_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <DailyPractice onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "chapter_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <ChapterPractice
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "exam_record") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <ExamRecord
          onBack={() => setCurrentPage("home")}
          onStartExam={() =>
            setCurrentPage("real_exam_external")
          }
        />
      </MobileLayout>
    );
  }

  if (currentPage === "my_mistakes") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <MyMistakes onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "my_favorites") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <MyFavorites onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "invitation_code") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <InvitationCode onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "caac_binding") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <CaacBinding
          onBack={() => setCurrentPage("home")}
          onSuccess={() => setCurrentPage("caac_success")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "caac_certified") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <CaacCertified
          onBack={() => setCurrentPage("home")}
          onUpdate={() => setCurrentPage("caac_binding")}
          onViewImage={() => {}}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "caac_success") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <CaacUploadSuccess
          onBackToHome={() => {
            setHasCertified(true);
            setActiveTab("profile");
            setCurrentPage("home");
          }}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "school_detail") {
    return (
      <MobileLayout bgClass="bg-white">
        <div className="h-full min-h-0 w-full flex-1 flex flex-col bg-white">
        <SchoolDetail
          onBack={() => setCurrentPage("home")}
          showPhone={showDetailPhone}
          onViewAllReviews={() =>
            setCurrentPage("school_reviews")
          }
          onViewAllCoaches={() =>
            setCurrentPage("school_coach_list")
          }
          onViewIntroduction={() =>
            setCurrentPage("school_introduction")
          }
        />
        </div>
      </MobileLayout>
    );
  }

  if (currentPage === "school_introduction") {
    return (
      <MobileLayout bgClass="bg-white" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <SchoolIntroductionDetail
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "school_reviews") {
    return (
      <MobileLayout bgClass="bg-white" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <ReviewList
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "school_coach_list") {
    return (
      <MobileLayout bgClass="bg-white" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <CoachList
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "login") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <LoginPage
          onBack={() => setCurrentPage("home")}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setActiveTab("profile");
            setCurrentPage("home");
          }}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "settings") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <SettingsPage
          onBack={() => setCurrentPage("home")}
          onLogout={() => {
            setIsLoggedIn(false);
            setCurrentPage("home");
          }}
          onLogin={() => setCurrentPage("login")}
          isLoggedIn={isLoggedIn}
          username="大黄蜂用户"
          phoneNumber="138****8888"
        />
      </MobileLayout>
    );
  }

  if (currentPage === "my_collections") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <MyCollectionsPage onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "flight_application") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <FlightApplicationPage onBack={() => setCurrentPage("home")} onProxyApply={() => setCurrentPage("flight_proxy_apply")} onRecords={() => setCurrentPage("flight_records")} />
      </MobileLayout>
    );
  }

  if (currentPage === "flight_proxy_apply") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <FlightProxyApplyPage onBack={() => setCurrentPage("flight_application")} onSubmitSuccess={() => setCurrentPage("flight_records")} />
      </MobileLayout>
    );
  }

  if (currentPage === "airspace_view") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <AirspaceViewPage onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "climate_query") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <ClimateQueryPage onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "resume_edit") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <ResumeEditPage
          onBack={() => setCurrentPage("home")}
          onSave={() => setCurrentPage("home")}
          onInstitutionCertClick={() => setCurrentPage("institution_cert")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "institution_cert") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <InstitutionCertPage onBack={() => setCurrentPage("resume_edit")} />
      </MobileLayout>
    );
  }

  if (currentPage === "flight_records") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]" innerBgStyle={{ background: ROOT_BG_SPLIT }} outerTransparent topSafeAreaBeige>
        <FlightRecordsPage onBack={() => setCurrentPage("flight_application")} />
      </MobileLayout>
    );
  }

  if (currentPage === "job_detail") {
    return (
      <MobileLayout bgClass="bg-white">
        <div className="h-full min-h-0 w-full flex-1 flex flex-col bg-white relative">
          <JobDetailPage onBack={() => setCurrentPage("home")} />
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout
      bgClass={activeTab === "profile" ? "bg-[#fbf2db]" : "bg-white"}
      innerBgStyle={{ background: ROOT_BG_SPLIT }}
      outerTransparent
      topSafeAreaBeige={activeTab === "profile"}
    >
      {activeTab === "exam" ? (
        <>
          {/*
            考试页参数设计（头部米黄 + 底部白）：
            - 头部：Header 占 h-[96px]（含 40px StatusBar 安全区 + 56px 内容），未滚动时 bg-[rgb(251,242,219)] 覆盖顶部，故安全区呈米黄。
            - 主区：main 使用 backgroundImage 渐变（米黄→白），与 SECONDARY_PAGE_BG 一致。
            - 底部：BottomNav absolute bottom-0、bg-white、paddingBottom: env(safe-area-inset-bottom)，故底部及安全区为白。
            - 容器：本层 MobileLayout 内层用 innerBgStyle=ROOT_BG_SPLIT（0~120px 米黄、以下白），与 Header 视觉一致，底部透出白。
          */}
          <div className="absolute top-0 w-full z-50">
            <Header
              onCityClick={() => setShowCitySelector(true)}
              isScrolled={isScrolled}
            />
          </div>

          <main
            ref={mainRef}
            className="flex-1 overflow-y-auto pb-[80px]"
            onScroll={handleScroll}
            style={{
              backgroundImage:
                "linear-gradient(rgb(251, 242, 219) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] p-[16px] pt-[112px] md:pt-[112px] md:p-6">
              <div className="md:col-span-2">
                <CategoryBanner
                  droneType={droneType}
                  licenseType={licenseType}
                  onSwitch={() => setShowExamTypeSelector(true)}
                />
              </div>
              <div className="md:col-span-1">
                <PracticeGrid
                  onSequentialPracticeClick={() =>
                    setCurrentPage("sequential_intro")
                  }
                  onMockExamClick={() =>
                    setCurrentPage("mock_exam")
                  }
                  onSimulationClick={() =>
                    setCurrentPage("simulation_setup")
                  }
                />
              </div>
              <div className="md:col-span-1">
                <FeatureScroll
                  onAiQaClick={() =>
                    setCurrentPage("integrated_qa")
                  }
                  onSimplifiedPracticeClick={() =>
                    setCurrentPage("simplified_practice")
                  }
                  onRealExamClick={() =>
                    setCurrentPage("real_exam_external")
                  }
                  onSecretPapersClick={() =>
                    setCurrentPage("pre_exam_papers")
                  }
                  onIntegratedQAClick={() =>
                    setCurrentPage("comprehensive_qa")
                  }
                  onDailyPracticeClick={() =>
                    setCurrentPage("daily_practice")
                  }
                  onChapterPracticeClick={() =>
                    setCurrentPage("chapter_practice")
                  }
                  onExamRecordClick={() =>
                    setCurrentPage("exam_record")
                  }
                  onMyMistakesClick={() =>
                    setCurrentPage("my_mistakes")
                  }
                  onMyFavoritesClick={() =>
                    setCurrentPage("my_favorites")
                  }
                />
              </div>
              <div className="md:col-span-2">
                <ExamBanner
                  onBannerClick={(type) => {
                    if (type === "real_exam")
                      setCurrentPage("real_exam_external");
                    if (type === "secret_papers")
                      setCurrentPage("pre_exam_papers");
                  }}
                />
              </div>
            </div>

            <div ref={schoolListRef}>
              <SchoolList
                onSchoolClick={(hasPhone) => {
                  setShowDetailPhone(hasPhone);
                  setCurrentPage("school_detail");
                }}
                isSticky={isListSticky}
              />
            </div>
          </main>

          <FloatingActionButtons
            visible={isListSticky}
            onPhoneClick={handlePhoneClick}
            onScrollTopClick={handleScrollTop}
          />
        </>
      ) : activeTab === "jobs" ? (
        <JobsPage
          onCityClick={() => setShowCitySelector(true)}
          onJobClick={() => setCurrentPage("job_detail")}
        />
      ) : (
        <main
            className="flex-1 overflow-y-auto pb-[80px]"
            style={{
              backgroundImage: SECONDARY_PAGE_BG,
            }}
          >
          <ProfilePage
            droneType={droneType}
          licenseType={licenseType}
          onSwitchType={() => setShowExamTypeSelector(true)}
          onMyMistakesClick={() =>
            setCurrentPage("my_mistakes")
          }
          onMyFavoritesClick={() =>
            setCurrentPage("my_favorites")
          }
          onCollectionsClick={() =>
            setCurrentPage("my_collections")
          }
          onFlightApplicationClick={() =>
            setCurrentPage("flight_application")
          }
          onAirspaceClick={() =>
            setCurrentPage("airspace_view")
          }
          onClimateQueryClick={() =>
            setCurrentPage("climate_query")
          }
          onResumeClick={() =>
            setCurrentPage("resume_edit")
          }
          onInvitationCodeClick={() =>
            setCurrentPage("invitation_code")
          }
          onCaacBindingClick={() => {
            if (profileRole === "pilot" || hasCertified) {
              setCurrentPage("caac_certified");
            } else {
              setCurrentPage("caac_binding");
            }
          }}
          onSettingsClick={() => setCurrentPage("settings")}
          role={profileRole}
          onRoleToggle={() =>
            setProfileRole((prev) =>
              prev === "candidate" ? "pilot" : "candidate",
            )
          }
          isLoggedIn={isLoggedIn}
          onLoginClick={() => setCurrentPage("login")}
          />
        </main>
      )}

      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {showExamTypeSelector && (
        <ExamTypeSelector
          initialDroneType={droneType}
          initialLicenseType={licenseType}
          onClose={() => setShowExamTypeSelector(false)}
          onConfirm={handleExamTypeConfirm}
        />
      )}
    </MobileLayout>
  );
}