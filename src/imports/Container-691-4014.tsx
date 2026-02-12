function ImageWithFallback() {
  return (
    <div className="h-[51.036px] relative rounded-[2.49829e+07px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute border-[0.745px] border-solid border-white inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute left-0 rounded-[2.49829e+07px] size-[55.992px] top-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.489px] pt-[2.478px] px-[2.478px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.489px] border-solid inset-0 pointer-events-none rounded-[2.49829e+07px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#e7000b] h-[17.485px] left-[4.01px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[42.5px] w-[47.965px]" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[13.5px] left-[5.99px] not-italic text-[9px] text-nowrap text-white top-[1.73px] tracking-[0.167px]">杰出教练</p>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}