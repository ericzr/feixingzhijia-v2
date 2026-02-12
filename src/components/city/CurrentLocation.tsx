interface CurrentLocationProps {
  city: string;
}

export function CurrentLocation({ city = "鄂尔多斯" }: CurrentLocationProps) {
  return (
    <div className="px-[16px] py-[12px] flex flex-col gap-[12px]">
      <h2 className="text-[#755609] text-[14px] font-medium">当前定位</h2>
      <div className="bg-white border border-[#fbf2db] rounded-full h-[37px] w-fit px-[24px] flex items-center justify-center shadow-[0px_1px_3px_0px_rgba(251,242,219,0.1)]">
        <span className="text-[#755609] text-[14px] font-bold">{city}</span>
      </div>
    </div>
  );
}
