import svgPaths from "./svg-mvik4rmteu";

function Heading() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-[63.973px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">航校简介</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[47.99px] size-[13.995px] top-[0.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9952 13.9952">
        <g id="Icon">
          <path d={svgPaths.p32f8c380} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16627" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[15.985px] relative shrink-0 w-[61.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] text-nowrap top-[0.74px]">查看详情</p>
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[23.988px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">注册时间：2024-11-24</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[71.104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">教练：7名</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[138.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.49px] tracking-[-0.1504px]">近一年学员数：328名</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[31.992px] h-[19.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.992px] h-[47.965px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container2 />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-[0.745px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[11.994px] items-start pb-0 pt-[16.741px] px-[15.996px] relative size-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}