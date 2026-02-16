import React, { useState } from "react";
import { SECONDARY_PAGE_BG } from "../../constants/theme";
import { FavoriteButton } from "./FavoriteButton";
import { AnswerSheet } from "./AnswerSheet";

const svgPaths = {
  p163b4700: "M19.4095 6.24433C19.8942 5.7598 20.1665 5.10259 20.1666 4.41728C20.1666 3.73197 19.8945 3.07469 19.41 2.59004C18.9254 2.10539 18.2682 1.83307 17.5829 1.83298C16.8976 1.8329 16.2403 2.10505 15.7557 2.58958L3.52183 14.8262C3.309 15.0384 3.1516 15.2997 3.0635 15.587L1.85258 19.5763C1.82889 19.6556 1.8271 19.7398 1.8474 19.82C1.86771 19.9002 1.90934 19.9735 1.9679 20.0319C2.02645 20.0904 2.09974 20.1319 2.17998 20.1521C2.26022 20.1722 2.34443 20.1703 2.42367 20.1465L6.41392 18.9365C6.70099 18.8492 6.96224 18.6928 7.17475 18.4809L19.4095 6.24433Z",
  p23525180: "M16.4993 12.8328L20.166 16.4995L16.4993 20.1661",
  p279ad3f0: "M16.0401 6.03938C16.0398 5.74714 15.9627 5.46011 15.8164 5.2071C15.6702 4.95408 15.46 4.74398 15.2069 4.59785L9.37411 1.26484C9.12077 1.11857 8.83339 1.04157 8.54086 1.04157C8.24832 1.04157 7.96094 1.11857 7.7076 1.26484L1.87482 4.59785C1.62173 4.74398 1.41152 4.95408 1.26526 5.2071C1.11901 5.46011 1.04187 5.74714 1.04157 6.03938V12.7054C1.04187 12.9977 1.11901 13.2847 1.26526 13.5377C1.41152 13.7907 1.62173 14.0008 1.87482 14.1469L7.7076 17.48C7.96094 17.6262 8.24832 17.7032 8.54086 17.7032C8.83339 17.7032 9.12077 17.6262 9.37411 17.48L15.2069 14.1469C15.46 14.0008 15.6702 13.7907 15.8164 13.5377C15.9627 13.2847 16.0398 12.9977 16.0401 12.7054V6.03938Z",
  p2bb6e180: "M10 0.666667H2C1.26362 0.666667 0.666667 1.26362 0.666667 2V7.33333C0.666667 8.06971 1.26362 8.66667 2 8.66667H10C10.7364 8.66667 11.3333 8.06971 11.3333 7.33333V2C11.3333 1.26362 10.7364 0.666667 10 0.666667Z",
  p2f91b640: "M16.4993 1.83327L20.166 5.49993L16.4993 9.1666",
  p3129d700: "M5.66667 10.9527C6.28976 10.3419 7.12749 9.99981 8 9.99981C8.87251 9.99981 9.71024 10.3419 10.3333 10.9527",
  p355d9380: "M1.83333 5.5H3.641C4.32434 5.49524 4.99541 5.68154 5.5785 6.03788C6.16159 6.39421 6.63351 6.9064 6.941 7.51667",
  p35e48300: "M8.17111 15.1663L1.16627 8.16626L8.17111 1.16627",
  p3978c100: "M1.33333 5.88C3.16674 4.24015 5.54023 3.33356 8 3.33356C10.4598 3.33356 12.8333 4.24015 14.6667 5.88",
  p3aa7f280: "M3.33333 8.57267C4.57953 7.35115 6.25498 6.66695 8 6.66695C9.74502 6.66695 11.4205 7.35115 12.6667 8.57267",
  p3b956b00: "M1.04174 1.04174L8.29105 5.20801L15.5404 1.04174",
  p3e957d00: "M2.75 16.5C2.50688 16.5 2.27373 16.4034 2.10182 16.2315C1.92991 16.0596 1.83333 15.8264 1.83333 15.5833V3.66667C1.83333 3.42355 1.92991 3.19039 2.10182 3.01849C2.27373 2.84658 2.50688 2.75 2.75H7.33333C8.30579 2.75 9.23842 3.13631 9.92606 3.82394C10.6137 4.51157 11 5.44421 11 6.41667C11 5.44421 11.3863 4.51157 12.0739 3.82394C12.7616 3.13631 13.6942 2.75 14.6667 2.75H19.25C19.4931 2.75 19.7263 2.84658 19.8982 3.01849C20.0701 3.19039 20.1667 3.42355 20.1667 3.66667V15.5833C20.1667 15.8264 20.0701 16.0596 19.8982 16.2315C19.7263 16.4034 19.4931 16.5 19.25 16.5H13.75C13.0207 16.5 12.3212 16.7897 11.8055 17.3055C11.2897 17.8212 11 18.5207 11 19.25C11 18.5207 10.7103 17.8212 10.1945 17.3055C9.67882 16.7897 8.97935 16.5 8.25 16.5H2.75Z",
  pb7abac0: "M1.83333 16.5H3.64192C4.23453 16.504 4.8193 16.3644 5.34613 16.093C5.87297 15.8216 6.32617 15.4265 6.66692 14.9417L11.6664 7.05833C12.0072 6.57346 12.4604 6.17841 12.9872 5.90701C13.514 5.63561 14.0988 5.49595 14.6914 5.5H20.1667",
  pf853900: "M20.1662 16.4994H14.6286C14.0278 16.4933 13.4377 16.3396 12.9102 16.0519C12.3827 15.7642 11.934 15.3512 11.6036 14.8494L11.2745 14.4369",
  p1bd6f600: "M8.74699 8.16385C8.86361 7.58072 9.15518 7.17253 9.62169 6.70602C10.2048 6.1812 10.4964 5.42313 10.4964 4.66506C10.4964 3.73712 10.1278 2.84719 9.47161 2.19104C8.81546 1.53489 7.92553 1.16626 6.99759 1.16626C6.06965 1.16626 5.17972 1.53489 4.52357 2.19104C3.86742 2.84719 3.4988 3.73712 3.4988 4.66506C3.4988 5.24819 3.61542 5.94795 4.37349 6.70602C4.78169 7.11422 5.13157 7.58072 5.24819 8.16385",
  p1e2332c0: "M8.93747 0.687471L17.1875 4.81247V13.0625L8.93747 17.1875L0.687471 13.0625V4.81247L8.93747 0.687471Z",
  p18d6980: "M3.43747 6.18747C4.95625 6.18747 6.18747 4.95625 6.18747 3.43747C6.18747 1.91869 4.95625 0.687471 3.43747 0.687471C1.91869 0.687471 0.687471 1.91869 0.687471 3.43747C0.687471 4.95625 1.91869 6.18747 3.43747 6.18747Z",
  p2ae59200: "M14.9995 4.99953L4.99953 14.9995",
  p22edf80: "M4.99953 4.99953L14.9995 14.9995",
  p331b4880: "M16.6651 4.99953L7.4993 14.1653L3.33303 9.99905",
  p33c7d200: "M6.00795 12.499L2.21665 5.94959C2.05316 5.66701 1.97628 5.34264 1.99553 5.01675C2.01479 4.69085 2.12934 4.37779 2.32497 4.11643L3.66651 2.33327C3.82174 2.1263 4.02303 1.95831 4.25443 1.8426C4.48583 1.7269 4.741 1.66667 4.99971 1.66667H14.9988C15.2575 1.66667 15.5126 1.7269 15.744 1.8426C15.9755 1.95831 16.1767 2.1263 16.332 2.33327L17.6652 4.11643C17.8621 4.37695 17.9781 4.68958 17.9989 5.01549C18.0196 5.3414 17.9441 5.66622 17.7818 5.94959L13.9905 12.499",
  p262abe80: "M9.16626 9.99984L4.26626 1.83317Z",
  p36e26780: "M9.16626 9.99984L4.26626 1.83317",
  p3635f700: "M10.8323 9.99984L15.7323 1.83317Z",
  p26760700: "M10.8323 9.99984L15.7323 1.83317",
  p36828680: "M9.99944 18.3324C12.3006 18.3324 14.1661 16.4669 14.1661 14.1657C14.1661 11.8645 12.3006 9.99905 9.99944 9.99905C7.69826 9.99905 5.83278 11.8645 5.83278 14.1657C5.83278 16.4669 7.69826 18.3324 9.99944 18.3324Z",
  p23bd8900: "M9.99909 14.9987V13.3321H9.58242",
  p123a9100: "M1.50232 9.7504C1.36041 9.75088 1.22129 9.71109 1.1011 9.63565C0.980908 9.56021 0.884592 9.45221 0.823339 9.32421C0.762086 9.1962 0.73841 9.05345 0.755062 8.91252C0.771714 8.7716 0.828011 8.63829 0.917412 8.52809L8.34123 0.879314C8.39691 0.815035 8.4728 0.771599 8.55643 0.756133C8.64006 0.740668 8.72646 0.754093 8.80145 0.794206C8.87644 0.834318 8.93557 0.898734 8.96913 0.976879C9.00269 1.05503 9.00868 1.14226 8.98612 1.22426L7.54635 5.73854C7.5039 5.85216 7.48964 5.97439 7.5048 6.09474C7.51997 6.21508 7.5641 6.32995 7.63341 6.4295C7.70272 6.52904 7.79514 6.61028 7.90275 6.66626C8.01036 6.72224 8.12994 6.75127 8.25124 6.75088H13.5004C13.6423 6.75039 13.7814 6.79018 13.9016 6.86562C14.0218 6.94107 14.1181 7.04906 14.1794 7.17707C14.2406 7.30507 14.2643 7.44783 14.2477 7.58875C14.231 7.72967 14.1747 7.86298 14.0853 7.97318L6.6615 15.622C6.60581 15.6862 6.52992 15.7297 6.44629 15.7451C6.36266 15.7606 6.27626 15.7472 6.20127 15.7071C6.12628 15.667 6.06715 15.6025 6.03359 15.5244C6.00004 15.4462 5.99404 15.359 6.0166 15.277L7.45637 10.7627C7.49882 10.6491 7.51308 10.5269 7.49792 10.4065C7.48276 10.2862 7.43863 10.1713 7.36931 10.0718C7.3 9.97223 7.20758 9.89099 7.09997 9.83501C6.99236 9.77904 6.87278 9.75 6.75148 9.7504H1.50232Z",
  p32e59c00: "M4.49928 16.4974C4.10152 16.4974 3.72005 16.3394 3.43879 16.0581C3.15753 15.7768 2.99952 15.3954 2.99952 14.9976V2.99952C2.99952 2.60176 3.15753 2.22029 3.43879 1.93903C3.72005 1.65777 4.10152 1.49976 4.49928 1.49976H10.4983C10.7357 1.49938 10.9708 1.54596 11.1901 1.63682C11.4094 1.72768 11.6086 1.86102 11.7761 2.02918L14.4667 4.71975C14.6353 4.88735 14.769 5.0867 14.8601 5.30628C14.9513 5.52585 14.998 5.76131 14.9976 5.99905V14.9976C14.9976 15.3954 14.8396 15.7768 14.5583 16.0581C14.2771 16.3394 13.8956 16.4974 13.4978 16.4974H4.49928Z",
  p15ad7800: "M10.4983 1.49976V5.24976C10.4983 5.44867 10.5773 5.63944 10.718 5.78009C10.8586 5.92074 11.0494 5.99976 11.2483 5.99976H14.9983",
  p348e2e80: "M10.2718 1.04439C10.3156 0.955893 10.3833 0.8814 10.4672 0.829318C10.5511 0.777236 10.6479 0.749638 10.7466 0.749638C10.8454 0.749638 10.9421 0.777236 11.026 0.829318C11.1099 0.8814 11.1776 0.955893 11.2214 1.04439L13.5303 5.72113C13.6824 6.02895 13.9069 6.29526 14.1846 6.49721C14.4623 6.69916 14.7848 6.83071 15.1245 6.88057L20.288 7.63621C20.3858 7.65038 20.4778 7.69165 20.5534 7.75535C20.629 7.81904 20.6852 7.90263 20.7158 7.99664C20.7464 8.09065 20.75 8.19134 20.7264 8.28733C20.7027 8.38331 20.6526 8.47075 20.5819 8.53977L16.8477 12.176C16.6014 12.416 16.4171 12.7122 16.3108 13.0392C16.2044 13.3662 16.179 13.7142 16.237 14.0531L17.1185 19.1906C17.1358 19.2884 17.1252 19.3891 17.088 19.4812C17.0509 19.5732 16.9885 19.653 16.9082 19.7114C16.8278 19.7697 16.7327 19.8043 16.6336 19.8112C16.5346 19.8181 16.4356 19.797 16.3479 19.7504L11.7321 17.3235C11.428 17.1638 11.0896 17.0804 10.7461 17.0804C10.4026 17.0804 10.0642 17.1638 9.76009 17.3235L5.14531 19.7504C5.05769 19.7967 4.9588 19.8176 4.8599 19.8106C4.76101 19.8036 4.66606 19.7689 4.58588 19.7106C4.5057 19.6523 4.44349 19.5726 4.40633 19.4807C4.36917 19.3888 4.35855 19.2883 4.37569 19.1906L5.25626 14.0541C5.31443 13.715 5.28923 13.3668 5.18283 13.0396C5.07644 12.7124 4.89205 12.4161 4.64556 12.176L0.91136 8.54077C0.839988 8.47183 0.789412 8.38424 0.765393 8.28797C0.741373 8.19169 0.744877 8.0906 0.775504 7.99622C0.806131 7.90184 0.86265 7.81796 0.938623 7.75413C1.0146 7.6903 1.10697 7.6491 1.20522 7.63521L6.36772 6.88057C6.70782 6.83109 7.03079 6.69972 7.30885 6.49774C7.58692 6.29577 7.81173 6.02925 7.96395 5.72113L10.2718 1.04439Z",
  p390ee7e0: "M2.99855 13.9932H5.9971C6.52728 13.9932 7.03574 14.2039 7.41063 14.5787C7.78553 14.9536 7.99614 15.4621 7.99614 15.9923V18.9908C7.99614 19.521 7.78553 20.0295 7.41063 20.4044C7.03574 20.7792 6.52728 20.9899 5.9971 20.9899H4.99759C4.46741 20.9899 3.95895 20.7792 3.58406 20.4044C3.20916 20.0295 2.99855 19.521 2.99855 18.9908V11.9942C2.99855 9.60841 3.94631 7.32033 5.63332 5.63332C7.32033 3.94631 9.60841 2.99855 11.9942 2.99855C14.38 2.99855 16.6681 3.94631 18.3551 5.63332C20.0421 7.32033 20.9899 9.60841 20.9899 11.9942V18.9908C20.9899 19.521 20.7792 20.0295 20.4044 20.4044C20.0295 20.7792 19.521 20.9899 18.9908 20.9899H17.9913C17.4611 20.9899 16.9527 20.7792 16.5778 20.4044C16.2029 20.0295 15.9923 19.521 15.9923 18.9908V15.9923C15.9923 15.4621 16.2029 14.9536 16.5778 14.5787C16.9527 14.2039 17.4611 13.9932 17.9913 13.9932H20.9899",
  p3ff9680: "M8.99566 2.99855L2.99855 8.99566",
  p6b1c100: "M2.99855 2.99855L8.99566 8.99566",
};

// ... Icons (BackButton, etc) are reused from previous files if I had a library, but I'll redefine them or similar since I'm in a new file.

function Icon3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Icon">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[4px] relative w-full">
          <div className="h-[14px] relative shrink-0 w-[7.005px]" data-name="Vector">
            <div className="absolute inset-[-8.33%_-16.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33737 16.3325">
                <path d={svgPaths.p35e48300} id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="absolute content-stretch cursor-pointer flex flex-col h-[28px] items-start left-[8px] pb-0 pt-[3.99px] px-[3.99px] top-[18.13px] w-[36px] z-10" 
      data-name="Button"
      onClick={onClick}
    >
      <Icon3 />
    </div>
  );
}

function TopBar({ onBack, isAnswered, onToggleAnswer }: { onBack: () => void, isAnswered: boolean, onToggleAnswer: () => void }) {
  return (
    <div className="flex flex-col w-full shrink-0 z-50">
       {/* Status Bar Safety Distance */}
       <div className="h-[40px] bg-white w-full" />
       <div className="bg-white border-[#f3f4f6] border-b-[0.745px] border-solid h-[65px] relative w-full shrink-0">
          <BackButton onClick={onBack} />
          <p className="absolute font-sans font-bold leading-[25.5px] left-[50%] translate-x-[-50%] not-italic text-[#685622] text-[17px] text-nowrap top-[19.13px] tracking-[-0.4316px]">随机练习</p>
      
          {/* Right side buttons (Show Answer, Settings) */}
          <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center right-[16px] top-[16.13px]">
             {/* Show Answer Button */}
             {isAnswered ? (
               // Yellow Button (Revealed State)
               <div 
                 className="bg-[#c99619] h-[32px] relative rounded-[25px] shrink-0 w-[77px] flex items-center justify-center gap-[4px] cursor-pointer active:scale-95 transition-transform shadow-sm"
                 onClick={onToggleAnswer}
               >
                   <div className="relative shrink-0 size-[14px]">
                     <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g clipPath="url(#clip0_eye)">
                          <g>
                            <path d={svgPaths.p1bd6f600} fill="white" />
                            <path d={svgPaths.p1bd6f600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                          </g>
                          <path d="M5.24819 10.4964H8.74699" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                          <path d="M5.83134 12.8289H8.16467" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
                        </g>
                        <defs>
                          <clipPath id="clip0_eye">
                            <rect fill="white" height="14" width="14" />
                          </clipPath>
                        </defs>
                     </svg>
                   </div>
                   <p className="font-sans font-medium leading-[19.5px] not-italic text-[13px] text-center text-nowrap text-white tracking-[-0.0762px]">看答案</p>
               </div>
             ) : (
               // Gray Button (Normal State)
               <div 
                 className="bg-[rgba(243,244,246,0.8)] h-[31.469px] relative rounded-[25px] shrink-0 w-[76.979px] cursor-pointer active:scale-95 transition-transform"
                 onClick={onToggleAnswer}
               >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.99px] items-center pl-[9.993px] pr-0 py-0 relative size-full">
                    <div className="relative shrink-0 size-[13.995px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
                        <g clipPath="url(#clip0_eye_gray)">
                          <g>
                            <path d={svgPaths.p1bd6f600} fill="#6A7282" />
                            <path d={svgPaths.p1bd6f600} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
                          </g>
                          <path d="M5.24819 10.4964H8.74699Z" fill="#6A7282" />
                          <path d="M5.24819 10.4964H8.74699" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
                          <path d="M5.83134 12.8289H8.16467Z" fill="#6A7282" />
                          <path d="M5.83134 12.8289H8.16467" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
                        </g>
                        <defs>
                          <clipPath id="clip0_eye_gray">
                            <rect fill="white" height="13.9952" width="13.9952" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="h-[19.486px] relative shrink-0 w-[39.007px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-sans font-medium leading-[19.5px] left-[20.5px] not-italic text-[#6a7282] text-[13px] text-center text-nowrap top-[0.49px] tracking-[-0.0762px] translate-x-[-50%]">看答案</p>
                      </div>
                    </div>
                  </div>
               </div>
             )}

             {/* Settings Button */}
             {/* Settings Button (Correctly restored from design) */}
             <div className="relative shrink-0 size-[38px] cursor-pointer">
               <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-full">
                 <div className="h-[22px] overflow-clip relative shrink-0 w-full">
                   <div className="absolute inset-[8.33%_12.5%_16.67%_12.5%]">
                     <div className="absolute inset-[-4.17%]">
                       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8749 17.8749">
                         <path d={svgPaths.p1e2332c0} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
                       </svg>
                     </div>
                   </div>
                   <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]">
                     <div className="absolute inset-[-12.5%]">
                       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87494 6.87494">
                         <path d={svgPaths.p18d6980} stroke="#1D293D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37494" />
                       </svg>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
       </div>
    </div>
  );
}

function QuestionTypeLabel() {
  return (
    <div className="bg-[#fbf2db] h-[26px] relative rounded-[4px] shrink-0 w-[52px] flex items-center justify-center">
      <p className="font-sans font-bold leading-[18px] not-italic text-[#c99619] text-[12px] text-nowrap">单选题</p>
    </div>
  );
}

function QuestionText() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
      <p className="font-sans font-medium leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[17px] tracking-[-0.4316px] w-full">
        《民用无人驾驶航空器实名制登记管理规定》适用于__________的无人机。
      </p>
    </div>
  );
}

type Option = {
  id: string;
  text: string;
};

const OPTIONS: Option[] = [
  { id: 'A', text: '空机重量超过250克' },
  { id: 'B', text: '最大起飞重量不高于7公斤的视距内运行' },
  { id: 'C', text: '最大起飞重量不低于250克' },
];

const CORRECT_OPTION = 'C';

function OptionCard({ option, isSelected, isAnswered, correctOption, onClick }: { 
  option: Option, 
  isSelected: boolean, 
  isAnswered: boolean, 
  correctOption: string, 
  onClick: () => void 
}) {
  // Determine style
  // Default: bg-white
  // If answered:
  //   If this is the selected option:
  //     If correct: bg-[#e6f7ff] (blue-ish)
  //     If wrong: bg-[#fff2f0] (red-ish)
  //   If this is NOT selected but IS correct: bg-[#e6f7ff] (Show correct answer)
  
  let bgClass = "bg-white";
  let textClass = "text-[#314158]";
  let labelClass = "text-[#314158]";
  let Icon = null;

  if (isAnswered) {
    if (isSelected) {
      if (option.id === correctOption) {
        bgClass = "bg-[#e6f7ff]"; // Correct selected
        textClass = "text-[#1677ff]";
        labelClass = "text-[#1677ff]";
        Icon = (
          <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p331b4880} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </svg>
        );
      } else {
        bgClass = "bg-[#fff2f0]"; // Wrong selected
        textClass = "text-[#ff4d4f]";
        labelClass = "text-[#ff4d4f]";
        Icon = (
          <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2ae59200} stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p22edf80} stroke="#FF4D4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </svg>
        );
      }
    } else if (option.id === correctOption) {
       bgClass = "bg-[#e6f7ff]"; // Correct but not selected (reveal)
       textClass = "text-[#1677ff]";
       labelClass = "text-[#1677ff]";
       Icon = (
         <svg className="block size-[20px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p331b4880} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
         </svg>
       );
    }
  }

  return (
    <div 
      className={`${bgClass} min-h-[66px] relative rounded-[14px] shrink-0 w-full cursor-pointer transition-colors p-[20px] flex items-center justify-between`}
      onClick={() => !isAnswered && onClick()}
    >
      <div className="flex gap-[12px] items-center w-full">
        <p className={`font-sans font-normal leading-[26px] not-italic ${labelClass} text-[16px] tracking-[-0.3125px]`}>{option.id}.</p>
        <p className={`font-sans font-normal leading-[26px] not-italic ${textClass} text-[16px] tracking-[-0.3125px]`}>{option.text}</p>
      </div>
      {Icon && <div className="shrink-0 ml-[10px]">{Icon}</div>}
    </div>
  );
}

function AnswerResult({ userSelection, correctOption }: { userSelection: string, correctOption: string }) {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center w-full h-[24px]">
         <div className="flex items-center gap-[8px]">
             {/* Trophy Icon */}
             <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                 <path d={svgPaths.p33c7d200} fill="#FE9A00" />
                 <path d={svgPaths.p33c7d200} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p262abe80} fill="#FE9A00" />
                 <path d={svgPaths.p36e26780} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p3635f700} fill="#FE9A00" />
                 <path d={svgPaths.p26760700} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d="M6.66603 5.83279H13.3327" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p36828680} fill="#FE9A00" stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                 <path d={svgPaths.p23bd8900} stroke="#FE9A00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
             </svg>
             <span className="font-sans font-bold text-[15px] text-[#1d293d]">正确答案</span>
         </div>
         <div className="flex items-center gap-[4px] border border-[#fbf2db] rounded-[4px] px-[8px] py-[2px] bg-white shadow-sm">
             <span className="text-[12px] text-[#90a1b9]">纠错</span>
         </div>
      </div>
      
      <div className="flex items-center gap-[8px] text-[15px] text-[#314158] font-medium">
         <span>答案：</span>
         <span className="font-bold text-[#1677ff] text-[18px]">{correctOption}</span>
         <span className="ml-[8px]">您选择</span>
         <span className={`font-bold text-[18px] ${userSelection === correctOption ? 'text-[#1677ff]' : 'text-[#ff4d4f]'}`}>{userSelection}</span>
      </div>
    </div>
  );
}

function MnemonicCard() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
       <div className="flex items-center gap-[8px]">
          <span className="font-sans font-bold text-[15px] text-[#1d293d]">速记口诀</span>
          <svg className="size-[18px]" fill="none" viewBox="0 0 15 17">
             <path d={svgPaths.p123a9100} fill="#00C950" stroke="#00C950" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
       </div>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px] text-[15px] text-[#45556c]">
             <span>实名登记</span>
             <span className="bg-[#fef9c2]/50 text-[#f0b100] px-[4px] rounded font-bold">250</span>
             <span>, 无人机需实名</span>
          </div>
          <div className="bg-gradient-to-b from-[#fadb14] to-[#faad14] px-[12px] py-[6px] rounded-[25px] flex items-center gap-[4px] shadow-sm cursor-pointer">
             <span className="text-[12px] font-black italic text-[#7b3306] opacity-80">VIP</span>
             <span className="text-[12px] font-bold text-[#7b3306]">查看完整口诀 &gt;</span>
          </div>
       </div>
    </div>
  );
}

function ExplanationCard() {
  return (
    <div className="bg-[#fbf2db] relative rounded-[14px] shrink-0 w-full p-[16px] flex flex-col gap-[12px]">
       <div className="flex items-center gap-[8px]">
          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
             <path d={svgPaths.p32e59c00} fill="#1677FF" fillOpacity="0.1" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d={svgPaths.p15ad7800} stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M7.49904 6.74892H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M11.999 9.74844H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d="M11.999 12.748H5.99904" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          <span className="font-sans font-bold text-[15px] text-[#1d293d]">题目解析</span>
       </div>
       <div className="text-[15px] text-[#45556c] leading-[24px]">
          <p>根据中国民航局规定，最大起飞重量不低于250克（含250克）的民用无人机需实名登记。</p>
          <p className="mt-[12px]">排除干扰项：</p>
       </div>
    </div>
  );
}

function BottomNav({ 
  onOpenAnswerSheet, 
  isFavorite, 
  onToggleFavorite 
}: { 
  onOpenAnswerSheet?: () => void,
  isFavorite: boolean,
  onToggleFavorite: () => void
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-[77px] border-t border-[#fbf2db] flex items-center justify-between px-[16px] pb-[20px] pt-[10px] w-full max-w-[480px] mx-auto z-50">
       {/* Left: Actions */}
       <div className="flex items-center gap-[24px]">
           {/* Collect/Star Icon */}
           <div className="flex items-center gap-[4px]">
              <div className="bg-[#ff4d4f] rounded-full size-[20px] flex items-center justify-center">
                 <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                     <path d={svgPaths.p3ff9680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                     <path d={svgPaths.p6b1c100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                 </svg>
              </div>
              <span className="text-[15px] text-[#6a7282]">0</span>
           </div>

           {/* Progress */}
           <div className="flex items-center gap-[8px]" onClick={onOpenAnswerSheet} style={{ cursor: onOpenAnswerSheet ? 'pointer' : 'default' }}>
               <div className="bg-[#fbf2db] rounded-full size-[20px] flex items-center justify-center">
                  <svg className="block size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
                     <g clipPath="url(#clip0_266_95)" id="Icon">
                        <path d="M1.49928 2.49879H1.50428" id="Vector" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                        <path d="M1.49928 5.9971H1.50428" id="Vector_2" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                        <path d="M1.49928 9.49541H1.50428" id="Vector_3" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                        <path d="M3.99807 2.49879H10.4949" id="Vector_4" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                        <path d="M3.99807 5.9971H10.4949" id="Vector_5" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                        <path d="M3.99807 9.49541H10.4949" id="Vector_6" stroke="#C99619" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49928" />
                     </g>
                     <defs>
                        <clipPath id="clip0_266_95">
                           <rect fill="white" height="11.9942" width="11.9942" />
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-[15px] text-[#6a7282]">1/1883</span>
           </div>
       </div>

       {/* Right: Favorite Button */}
       <FavoriteButton isFavorite={isFavorite} onClick={onToggleFavorite} />
    </div>
  );
}

function FloatingInterface() {
  // This seems to be the "Sequential Practice" floating button shown in the bottom right of the design
  // but it overlaps with the bottom nav. 
  // In the "answered" state design, we see the bottom nav.
  // In the "unanswered" state design, we also see the bottom nav.
  // The provided code had `SequentialPracticeInterface` floating at `top: 584px`.
  // I will ignore it for now as the bottom nav seems more important for navigation.
  return null;
}

export function RandomPracticeDetail({ onBack }: { onBack: () => void }) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswerSheet, setShowAnswerSheet] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Logic: The answer is revealed if the user selected an option OR if they clicked "Show Answer"
  const isAnswered = selectedOption !== null || showAnswer;

  const handleOptionClick = (id: string) => {
    if (!isAnswered) {
      setSelectedOption(id);
    }
  };

  const handleToggleAnswer = () => {
    // Toggle logic:
    // 1. If user has already selected an option, clicking "Show Answer" (now yellow) usually doesn't hide the result in typical apps, 
    //    BUT the user explicitly asked for a TOGGLE to switch back to normal state.
    //    So we will allow toggling 'showAnswer'.
    // 2. However, 'isAnswered' is currently derived as (selectedOption !== null || showAnswer).
    //    If selectedOption is SET, toggling showAnswer won't hide the result because selectedOption keeps isAnswered true.
    //    
    //    User request: "Show Answer is a toggle button, can switch question state from revealed back to normal state".
    //    This implies we might need to clear 'selectedOption' too if we want to return to "normal state", OR 'isAnswered' logic needs to be different.
    //
    //    Interpretation A: 'Show Answer' button controls the visibility of the answer analysis/result independently or overrides it.
    //    Interpretation B: Toggling it OFF resets the question to unanswered state (clearing selection).
    //
    //    Given standard behavior is weird with "un-answering", but let's assume the user wants to be able to Hide the analysis card even if they answered.
    //    But the button style depends on 'isAnswered'.
    //
    //    Let's refine: The user likely means the "Show Answer" button specifically toggles the *Reveal* state.
    //    If I answered (selectedOption != null), I am in "Answered" state.
    //    If I click "Show Answer", do I go back to "Unanswered"? That would mean clearing selection.
    //    
    //    Let's try implementing a strict toggle for the `showAnswer` state, and maybe `isAnswered` relies purely on that if the user implies "Switch back to normal".
    //    BUT, if I selected an option, the option card shows Red/Green. 
    //
    //    Revised approach based on "switch from revealed back to normal":
    //    I will treat the "Show Answer" button as a master toggle. 
    //    If I click it when it's Yellow (Revealed), it should go back to Gray (Normal).
    //    This implies we need to be able to "hide" the result even if an option is selected? 
    //    Or does it mean it resets the question? "Switch back to normal state" sounds like resetting or hiding.
    //
    //    Let's assume simply toggling the boolean `showAnswer` is what's asked, BUT `isAnswered` needs to respect that.
    //    Wait, if I selected an option, `selectedOption` is set. 
    //    If I click "Toggle", and I want to go back to "Normal", I must hide the results.
    //    So `isAnswered` should probably be: `(selectedOption !== null || showAnswer)`. 
    //    
    //    Actually, if the user wants to *toggle back*, it implies they want to hide the results.
    //    If I have selected an option, and I click the button to "Toggle back", 
    //    I should probably see the initial state (no option selected colors, no bottom sheet).
    //    
    //    Let's try this:
    //    We need a way to force "Normal State" even if `selectedOption` is set? 
    //    Or maybe clicking it clears `selectedOption`? That loses the user's choice.
    //
    //    Let's go with: The button toggles a `visibility` state.
    //    Let's change `isAnswered` to be a state itself, or controlled by this toggle?
    //    
    //    Let's simply update the handleToggleAnswer to:
    //    if (isAnswered) {
    //      // We are in revealed state. We want to go back to normal.
    //      // We MUST clear selectedOption to return to true "normal" state where options are clickable again.
    //      setSelectedOption(null);
    //      setShowAnswer(false);
    //    } else {
    //      // We are in normal state. We want to reveal.
    //      setShowAnswer(true);
    //    }
    
    if (isAnswered) {
       setSelectedOption(null);
       setShowAnswer(false);
    } else {
       setShowAnswer(true);
    }
  };

  return (
    <div className="relative size-full flex flex-col flex-1 min-h-0" data-name="随机练习题" style={{ backgroundImage: SECONDARY_PAGE_BG }}>
      <TopBar onBack={onBack} isAnswered={isAnswered} onToggleAnswer={handleToggleAnswer} />
      
      <div className="flex-1 overflow-y-auto p-[16px] pb-[100px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
           <QuestionTypeLabel />
           <QuestionText />
        </div>

        <div className="flex flex-col gap-[16px]">
          {OPTIONS.map(opt => (
            <OptionCard 
              key={opt.id} 
              option={opt} 
              isSelected={selectedOption === opt.id}
              isAnswered={isAnswered}
              correctOption={CORRECT_OPTION}
              onClick={() => handleOptionClick(opt.id)}
            />
          ))}
        </div>

        {isAnswered && (
          <div className="flex flex-col gap-[16px] animate-in fade-in slide-in-from-bottom-4 duration-300">
             <AnswerResult userSelection={selectedOption} correctOption={CORRECT_OPTION} />
             <MnemonicCard />
             <ExplanationCard />
          </div>
        )}
      </div>

      <BottomNav 
        onOpenAnswerSheet={() => setShowAnswerSheet(true)} 
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
      />
      
      {showAnswerSheet && (
        <AnswerSheet 
          onClose={() => setShowAnswerSheet(false)} 
          onSelectQuestion={(index) => {
            // Handle jump to question (stub for now)
            // console.log("Jump to question", index + 1);
            setShowAnswerSheet(false);
          }}
          totalQuestions={1883}
          currentQuestionIndex={0} 
        />
      )}
    </div>
  );
}
