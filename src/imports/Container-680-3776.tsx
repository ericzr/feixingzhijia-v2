import svgPaths from "./svg-liw95ymynh";
import imgFaceBlowingAKiss1 from "figma:asset/c4d66ad14a541aa69f81b292d69b3f7460ae1495.png";

function Container() {
  return (
    <div className="absolute h-[19.486px] left-0 top-0 w-[195.002px]" data-name="Container">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#314158] text-[13px] text-nowrap top-[0.49px] tracking-[-0.0762px]">你的评价可以帮助驾校做得更好！</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[91.96px] size-[11.994px] top-[8.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9942 11.9942">
        <g id="Icon">
          <path d={svgPaths.p34add800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999517" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#c99619] h-[29.968px] left-0 rounded-[2.49829e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[31.48px] w-[119.954px]" data-name="Button">
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[18px] left-[52px] not-italic text-[12px] text-center text-nowrap text-white top-[6.48px] translate-x-[-50%]">我要贡献评价</p>
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[61.448px] left-[16px] top-[25.27px] w-[195.002px]" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-gradient-to-r from-[#f5db9b] overflow-clip relative rounded-[14px] size-full to-[#fbf2db]" data-name="Container">
      <Container1 />
      <div className="absolute h-[67px] left-[300px] top-[22.06px] w-[73.69px]" data-name="Face blowing a kiss 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFaceBlowingAKiss1} />
      </div>
    </div>
  );
}