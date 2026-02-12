const HOT_CITIES = [
  "北京", "上海", "广州",
  "深圳", "南京", "杭州",
  "济南", "天津", "西安",
  "重庆", "成都", "武汉",
  "长沙", "昆明", "贵阳"
];

export function HotCities() {
  return (
    <div className="px-[16px] py-[12px] flex flex-col gap-[12px]">
      <h2 className="text-[#755609] text-[14px] font-medium">热门城市</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-[12px]">
        {HOT_CITIES.map((city) => (
          <div 
            key={city}
            className="bg-[#fbf2db] rounded-[10px] h-[40px] flex items-center justify-center cursor-pointer"
          >
            <span className="text-[#755609] text-[14px] font-medium">{city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
