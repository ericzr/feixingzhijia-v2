import svgPaths from "../../imports/svg-home-sticky";

function IconSignal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M1.33333 13.3333H1.34" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 13.3333V10.6667" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V8" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 13.3333V5.33333" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667V13.3333" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconWifi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 13.3333H8.00667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3978c100} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3aa7f280} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3129d700} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconBattery() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[41.67%_8.33%_41.67%_91.67%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <g id="Vector">
                <path d="M0.666667 3.33333V0.666667Z" fill="var(--fill-0, #00C950)" />
                <path d="M0.666667 3.33333V0.666667" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[8.33%] right-1/4 top-1/4" data-name="Vector">
          <div className="absolute inset-[-8.33%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
              <path d={svgPaths.p2bb6e180} fill="var(--fill-0, #00C950)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <IconSignal />
        <IconWifi />
        <IconBattery />
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] tracking-[-0.3125px]">14:34</p>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-full" data-name="StatusBar">
      {/* Mobile status bar simulation removed, keeping height for safe area */}
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[39px] relative shrink-0 w-[191px]" data-name="_图层_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191 39">
        <g clipPath="url(#clip0_2_966)" id="_å¾å±_1">
          <path d={svgPaths.p15ed1880} fill="url(#paint0_linear_2_966)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p3a530bb0} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.pc30edf0} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p20f12180} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p3a4b7700} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p1f5c9a00} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p6da2180} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p23047500} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p2e7aed80} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p38433d00} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p2787bf80} fill="var(--fill-0, black)" id="Vector_11" />
          </g>
          <path d={svgPaths.p2ae4f600} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p38b1af0} fill="var(--fill-0, black)" id="Vector_13" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_966" x1="-1.37372e-05" x2="67.4242" y1="19.5" y2="19.5">
            <stop stopColor="#F5C244" />
            <stop offset="1" stopColor="#F8F9FB" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_2_966">
            <rect fill="white" height="39" width="191" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1539e500} id="Vector" stroke="var(--stroke-0, #755609)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #755609)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function LocationText() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-[28px] not-italic text-[#755609] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">鄂尔多斯</p>
      </div>
    </div>
  );
}

function ArrowDownIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #755609)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function LocationButton({ onClick, isScrolled = false }: { onClick?: () => void, isScrolled?: boolean }) {
  return (
    <div 
      className={`h-[32px] relative rounded-[1.67772e+07px] shrink-0 w-[116px] cursor-pointer transition-colors duration-200 ${isScrolled ? 'bg-transparent border border-[#755609]' : 'bg-[#f5db9b] border-transparent'}`} 
      data-name="Button"
      onClick={onClick}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-0 relative size-full">
        <LocationIcon />
        <LocationText />
        <ArrowDownIcon />
      </div>
    </div>
  );
}

function HeaderContent({ onCityClick, isScrolled }: { onCityClick?: () => void, isScrolled?: boolean }) {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-between left-0 px-[16px] py-0 top-[40px] w-full" data-name="Header">
      <Logo />
      <LocationButton onClick={onCityClick} isScrolled={isScrolled} />
    </div>
  );
}

export function Header({ onCityClick, isScrolled = false }: { onCityClick?: () => void, isScrolled?: boolean }) {
  return (
    <div className={`h-[96px] pointer-events-auto sticky top-0 w-full z-50 transition-colors duration-200 ${isScrolled ? 'bg-white' : 'bg-[rgb(251,242,219)]'}`}>
      <StatusBar />
      <HeaderContent onCityClick={onCityClick} isScrolled={isScrolled} />
    </div>
  );
}
