import imgContainer from "figma:asset/bc04c8b86436de60e37006373742bcf2441b3e32.png";

function Heading() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.77px] tracking-[-0.3125px]">垂直起降固定翼</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#fbf2db] h-[18.986px] left-0 rounded-[2px] top-0 w-[47.988px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[3.99px] not-italic text-[#c99619] text-[10px] text-nowrap top-[2.48px] tracking-[0.1172px]">自行前往</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#fbf2db] h-[18.986px] left-[53.98px] rounded-[2px] top-0 w-[47.988px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[15px] left-[3.99px] not-italic text-[#c99619] text-[10px] text-nowrap top-[2.48px] tracking-[0.1172px]">一人一机</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[18.986px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[45.464px] relative shrink-0 w-[213.15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.99px] items-start relative size-full">
        <Heading />
        <Container />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[14.146px] items-start left-0 top-[8.19px] w-[8.062px]" data-name="Text">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#c99619] text-[12px]">¥</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20.847px] items-start left-[8.06px] top-[2.98px] w-[47.104px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#c99619] text-[18px] text-nowrap tracking-[-0.4395px]">3680</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[55.166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c99619] h-[29.968px] relative rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_#fbf2db,0px_1px_2px_-1px_#fbf2db] shrink-0 w-[55.992px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[28px] not-italic text-[12px] text-center text-nowrap text-white top-[6.48px] translate-x-[-50%]">咨询</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container2 />
        <Button />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[84px] items-start justify-between left-[136px] pb-0 pt-[1.989px] px-0 top-[12px] w-[263px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function ImageWithFallback() {
  return <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="ImageWithFallback" />;
}

function Container5() {
  return (
    <div className="absolute h-[79.992px] left-0 top-0 w-[111.996px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgContainer} />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#c99619] h-[18.986px] left-0 rounded-br-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[71.989px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[15px] left-[5.99px] not-italic text-[10px] text-nowrap text-white top-[2.48px] tracking-[0.1172px]">拒绝吃拿卡要</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[17.485px] left-0 rounded-br-[10px] top-[19.97px] w-[56.958px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[13.5px] left-[5.99px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">规范化教学</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[18.986px] left-0 top-0 w-[71.989px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[79.992px] left-[11.99px] overflow-clip rounded-[10px] top-[11.99px] w-[111.996px]" data-name="Container">
      <ImageWithFallback />
      <Container5 />
      <Container8 />
    </div>
  );
}

export default function ClassCard() {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1),0px_1px_2px_-1px_rgba(251,242,219,0.1)] size-full" data-name="ClassCard">
      <Container4 />
      <Container9 />
    </div>
  );
}