import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; // Removed to fix build errors with assets
import imgExamPaper from "figma:asset/a524ec1b35839fa4851914215a235d9a0ea36264.png";
import imgRealExam from "figma:asset/c8760556f997d8f4de73d9ee2295ecfc5e81c9cf.png";
import imgInsurance from "figma:asset/687fc8d845eff016cff2723b45b8fcd3327cfcec.png";

type BannerType = 'real_exam' | 'secret_papers' | 'insurance';

const BANNERS = [
  { id: 1, src: imgRealExam, alt: "真实考场", type: 'real_exam' as BannerType },
  { id: 2, src: imgExamPaper, alt: "考前密卷", type: 'secret_papers' as BannerType },
  { id: 3, src: imgInsurance, alt: "考试保险", type: 'insurance' as BannerType },
];

export function ExamBanner({ onBannerClick }: { onBannerClick?: (type: BannerType) => void }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // Custom dots class to replace slick-theme.css
    dotsClass: "absolute bottom-[10px] w-full flex justify-center !m-0 !p-0 list-none gap-[6px] z-10",
    customPaging: (i: number) => (
      <div className="h-[6px] rounded-full transition-all duration-300 cursor-pointer bg-white/50 w-[6px] [.slick-active_>_&]:w-[16px] [.slick-active_>_&]:bg-white" />
    )
  };

  return (
    <div className="h-[167px] relative shrink-0 w-full rounded-[8.59px] overflow-hidden exam-banner-slider">
      <Slider {...settings} className="h-full">
        {BANNERS.map((banner) => (
          <div 
            key={banner.id} 
            className="h-[167px] relative w-full outline-none cursor-pointer"
            onClick={() => onBannerClick?.(banner.type)}
          >
            <img 
              alt={banner.alt}
              className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" 
              src={banner.src} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
