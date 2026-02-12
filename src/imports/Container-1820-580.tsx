function Text() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-[55.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.35px] tracking-[-0.1504px]">河源商务</p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[#99a1af] rounded-[22590200px] shrink-0 size-[3.997px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-[54.943px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.35px] tracking-[-0.1504px]">共需5人</p>
      </div>
    </div>
  );
}

function Text3() {
  return <div className="bg-[#99a1af] rounded-[22590200px] shrink-0 size-[3.997px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-[54.943px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.35px] tracking-[-0.1504px]">2026·1·3</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[7.995px] items-center relative size-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}