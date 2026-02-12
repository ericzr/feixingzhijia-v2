import svgPaths from "./svg-wky88hhbfd";

function Icon() {
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

function Button() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pb-0 pt-[3.99px] px-[3.99px] relative shrink-0 w-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[116px] py-0 relative shrink-0 w-[359px]" data-name="Heading 1">
      <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] text-center tracking-[-0.4395px]">邀请码</p>
    </div>
  );
}

function SelectCity() {
  return (
    <div className="absolute content-stretch flex items-start left-0 p-[12px] top-[40px] w-[448px]" data-name="SelectCity">
      <Button />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[16px] top-[879px] w-[416px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] left-[208.35px] not-italic text-[#afa199] text-[10px] text-center top-px translate-x-[-50%]">我的邀请码：xxxxxxx</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[179.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.991 179.991">
        <g id="Icon">
          <path d={svgPaths.p2888e000} fill="var(--fill-0, #F6E6BA)" id="Vector" opacity="0.6" />
          <path d={svgPaths.p826fc00} fill="var(--fill-0, #EDC764)" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p2f835b00} fill="var(--fill-0, #F6E6BA)" id="Vector_3" opacity="0.6" />
          <path d={svgPaths.p1a67ce80} fill="var(--fill-0, #EDC764)" id="Vector_4" opacity="0.5" />
          <g id="Group" opacity="0.75">
            <path d="M49.9975 34.9982V42.9982" id="Vector_5" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="2.49987" />
            <path d="M45.9977 38.9981H53.9977" id="Vector_6" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="2.49987" />
          </g>
          <g id="Group_2" opacity="0.75">
            <path d="M164.991 89.9954V95.9954" id="Vector_7" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="1.9999" />
            <path d="M161.992 92.9952H167.992" id="Vector_8" stroke="var(--stroke-0, #C99619)" strokeLinecap="round" strokeWidth="1.9999" />
          </g>
          <path d={svgPaths.p93e4c00} fill="var(--fill-0, #F6E6BA)" id="Vector_9" opacity="0.3" />
          <path d={svgPaths.p329e5d00} fill="var(--fill-0, #EDC764)" id="Vector_10" stroke="var(--stroke-0, #685622)" strokeWidth="3.99979" />
          <path d={svgPaths.p1c250be0} id="Vector_11" stroke="var(--stroke-0, #685622)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.99969" />
        </g>
      </svg>
    </div>
  );
}

function SuccessIcon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114px] pl-0 pr-[0.01px] py-0 size-[219.999px] top-[109px]" data-name="SuccessIcon">
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[42.004px] left-[154px] top-[333px] w-[139.982px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[42px] left-[70px] not-italic text-[#685622] text-[28px] text-center top-[-0.05px] tracking-[0.3828px] translate-x-[-50%]">绑定成功！</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-[48.002px] leading-[24px] left-[128px] not-italic text-[#8b7355] text-[16px] text-center top-[387.2px] tracking-[-0.3125px] w-[191.996px]" data-name="Paragraph">
      <p className="absolute css-ew64yg left-[96.5px] top-[-0.37px] translate-x-[-50%]">恭喜您已成功绑定会员权益</p>
      <p className="absolute css-ew64yg left-[96px] top-[23.63px] translate-x-[-50%]">尊享专属特权与优惠</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20.997px] relative shrink-0 w-[55.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#685622] text-[14px] top-[-0.02px] tracking-[-0.1504px]">会员等级</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[65.377px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#c99619] text-[18px] top-[0.63px] tracking-[-0.4395px]">VIP会员</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[27.005px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20.997px] relative shrink-0 w-[55.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#685622] text-[14px] top-[-0.02px] tracking-[-0.1504px]">有效期至</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[86.076px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#8b7355] text-[16px] top-[-0.37px] tracking-[-0.3125px]">2026-12-31</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[23.991px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_2359_1199)" id="Icon">
          <path d={svgPaths.p32e59c00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d={svgPaths.p15ad7800} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M7.49904 6.74892H5.99904" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M11.999 9.74844H5.99904" id="Vector_4" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M11.999 12.748H5.99904" id="Vector_5" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_2359_1199">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[24982900px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] top-[0.34px] tracking-[0.1172px]">精简题库</p>
      </div>
    </div>
  );
}

function BenefitItem() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container5 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_2359_1210)" id="Icon">
          <path d={svgPaths.p2ff59d00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M5.99904 15.7475H11.999" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M8.99856 12.748V15.748" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_2359_1210">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[24982900px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] top-[0.34px] tracking-[0.1172px]">真实考场</p>
      </div>
    </div>
  );
}

function BenefitItem1() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container6 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g id="Icon">
          <path d={svgPaths.p2c9d7000} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[24982900px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] top-[0.34px] tracking-[0.1172px]">懒人听题</p>
      </div>
    </div>
  );
}

function BenefitItem2() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container7 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_2359_1215)" id="Icon">
          <path d={svgPaths.p27acba00} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M6.74894 13.4978H11.2489" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d="M7.49882 16.4974H10.4988" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_2359_1215">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[24982900px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] top-[0.34px] tracking-[0.1172px]">速记口诀</p>
      </div>
    </div>
  );
}

function BenefitItem3() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container8 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[17.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 17.9971">
        <g clipPath="url(#clip0_2359_1206)" id="Icon">
          <path d={svgPaths.p361d7af0} id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
          <path d={svgPaths.p2fe12200} id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49976" />
        </g>
        <defs>
          <clipPath id="clip0_2359_1206">
            <rect fill="white" height="17.9971" width="17.9971" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-gradient-to-b from-[#fff7ed] relative rounded-[24982900px] shrink-0 size-[39.996px] to-[#ffedd5]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fed7aa] border-[0.745px] border-solid inset-0 pointer-events-none rounded-[24982900px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.745px] pr-[0.757px] py-[0.745px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[13.507px] relative shrink-0 w-[36.007px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#92400e] text-[10px] top-[0.34px] tracking-[0.1172px]">考前密卷</p>
      </div>
    </div>
  );
}

function BenefitItem4() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-[40.008px]" data-name="BenefitItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.743px] items-center pb-[0.75px] pt-0 px-0 relative size-full">
        <Container9 />
        <Text8 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[62.996px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pl-[3.99px] pr-[4.025px] py-0 relative size-full">
        <BenefitItem />
        <BenefitItem1 />
        <BenefitItem2 />
        <BenefitItem3 />
        <BenefitItem4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[97px] items-start pb-0 pt-[16.656px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#edc764] border-solid border-t-[0.658px] inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.997px] h-[220px] items-start left-[54px] pb-[1.975px] pt-[25.966px] px-[25.966px] rounded-[20px] top-[493px] w-[340px]" data-name="Container" style={{ backgroundImage: "linear-gradient(147.095deg, rgba(237, 199, 100, 0.3) 0%, rgba(246, 230, 186, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#edc764] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-r from-[#edc764] h-[55.995px] left-[54px] rounded-[28px] shadow-[0px_4px_12px_0px_rgba(237,199,100,0.4)] to-[#c99619] top-[736.77px] w-[339.993px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[27px] left-[170.51px] not-italic text-[#685622] text-[18px] text-center top-[15.13px] tracking-[-0.4395px] translate-x-[-50%]">开始使用</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="邀请码" style={{ backgroundImage: "linear-gradient(rgba(245, 219, 155, 0.4) 11.201%, rgba(251, 242, 219, 0.18) 100%), linear-gradient(90deg, rgb(254, 251, 244) 0%, rgb(254, 251, 244) 100%)" }}>
      <SelectCity />
      <Paragraph />
      <SuccessIcon />
      <Heading1 />
      <Paragraph1 />
      <Container />
      <Button1 />
    </div>
  );
}