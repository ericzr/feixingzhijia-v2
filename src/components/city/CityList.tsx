const CITY_DATA_A = [
  "阿坝藏族羌族自治州",
  "阿克苏",
  "阿拉尔",
  "阿拉善盟",
  "阿勒泰",
  "阿里",
  "安康"
];

// Mocking a few more for demonstration structure if needed, but sticking to design for 'A'.
const ALL_CITIES = [
    { letter: 'A', cities: CITY_DATA_A },
    { letter: 'B', cities: ["保定", "宝鸡", "包头", "北京", "北海"] },
    { letter: 'C', cities: ["长春", "长沙", "常州", "成都", "重庆"] },
    // Add more if needed, but the design mostly shows 'A'.
];

export function CityList() {
  return (
    <div className="flex flex-col">
      {ALL_CITIES.map((group) => (
        <div key={group.letter} id={`city-group-${group.letter}`}>
          <div className="bg-[#f9fafb] px-[16px] py-[4px]">
             <span className="text-[#6a7282] text-[14px] font-medium">{group.letter}</span>
          </div>
          <div className="bg-[#fefbf4] p-[16px] md:grid md:grid-cols-3 md:gap-4">
             {group.cities.map((city) => (
                <div key={city} className="border-b border-[#f5f1e7] py-[14px] md:border-b-0 md:bg-white md:rounded-[8px] md:px-[16px] md:py-[12px] md:shadow-sm cursor-pointer hover:bg-[#fffcf5]">
                   <span className="text-[#755609] text-[15px]">{city}</span>
                </div>
             ))}
          </div>
        </div>
      ))}
    </div>
  );
}
