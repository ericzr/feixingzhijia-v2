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
import { MockExam } from "./components/practice/MockExam";
import { SimulationSetup } from "./components/simulation/SimulationSetup";
import { SimplifiedPractice } from "./components/practice/SimplifiedPractice";
import { RealExamExternal } from "./components/practice/RealExamExternal";
import { PreExamPapers } from "./components/practice/PreExamPapers";
import { IntegratedQA } from "./components/practice/IntegratedQA";
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

import JobsPage from "./components/jobs/JobsPage";
import JobDetailPage from "./components/jobs/JobDetailPage";

type Page =
  | "home"
  | "sequential_intro"
  | "sequential_detail"
  | "mock_exam"
  | "simulation_setup"
  | "simplified_practice"
  | "real_exam_external"
  | "pre_exam_papers"
  | "integrated_qa"
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
  | "job_detail";

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
      <MobileLayout bgClass="bg-[#fefbf4]">
        <CitySelector
          onClose={() => setShowCitySelector(false)}
        />
      </MobileLayout>
    );
  }

  // Handle Sequential Practice Pages (Full Screen)
  if (currentPage === "sequential_intro") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <SequentialPracticeIntro
          onBack={() => setCurrentPage("home")}
          onStartPractice={() =>
            setCurrentPage("sequential_detail")
          }
        />
      </MobileLayout>
    );
  }

  if (currentPage === "sequential_detail") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <SequentialPracticeDetail
          onBack={() => setCurrentPage("sequential_intro")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "mock_exam") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <MockExam
          onBack={() => setCurrentPage("home")}
          onRealExamClick={() =>
            setCurrentPage("real_exam_external")
          }
        />
      </MobileLayout>
    );
  }

  if (currentPage === "simulation_setup") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <SimulationSetup
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "simplified_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <SimplifiedPractice
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "real_exam_external") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <RealExamExternal
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "pre_exam_papers") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <PreExamPapers onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "integrated_qa") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <IntegratedQA onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "daily_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <DailyPractice onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "chapter_practice") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <ChapterPractice
          onBack={() => setCurrentPage("home")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "exam_record") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
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
      <MobileLayout bgClass="bg-[#fefbf4]">
        <MyMistakes onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "my_favorites") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <MyFavorites onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "invitation_code") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <InvitationCode onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  if (currentPage === "caac_binding") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
        <CaacBinding
          onBack={() => setCurrentPage("home")}
          onSuccess={() => setCurrentPage("caac_success")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "caac_certified") {
    return (
      <MobileLayout bgClass="bg-[#fefbf4]">
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
      <MobileLayout bgClass="bg-[#fefbf4]">
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
      </MobileLayout>
    );
  }

  if (currentPage === "school_introduction") {
    return (
      <MobileLayout bgClass="bg-white">
        <SchoolIntroductionDetail
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "school_reviews") {
    return (
      <MobileLayout bgClass="bg-white">
        <ReviewList
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "school_coach_list") {
    return (
      <MobileLayout bgClass="bg-white">
        <CoachList
          onBack={() => setCurrentPage("school_detail")}
        />
      </MobileLayout>
    );
  }

  if (currentPage === "job_detail") {
    return (
      <MobileLayout bgClass="bg-white">
        <JobDetailPage onBack={() => setCurrentPage("home")} />
      </MobileLayout>
    );
  }

  return (
    <MobileLayout bgClass="bg-white">
      {activeTab === "exam" ? (
        <>
          {/* Header is absolute, so it stays on top of the scrolling main content */}
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
                    setCurrentPage("integrated_qa")
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
          role={profileRole}
          onRoleToggle={() =>
            setProfileRole((prev) =>
              prev === "candidate" ? "pilot" : "candidate",
            )
          }
        />
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