import { CityHeader } from "./CityHeader";
import { CitySearch } from "./CitySearch";
import { CurrentLocation } from "./CurrentLocation";
import { HotCities } from "./HotCities";
import { CityList } from "./CityList";
import { AlphabetSidebar } from "./AlphabetSidebar";

interface CitySelectorProps {
  onClose: () => void;
}

export default function CitySelector({ onClose }: CitySelectorProps) {
  return (
    <div className="size-full bg-[#fefbf4] flex flex-col relative animate-in fade-in duration-200">
      <CityHeader onClose={onClose} />
      <CitySearch />
      
      <div className="flex-1 overflow-y-auto scrollbar-hide relative">
        <CurrentLocation city="鄂尔多斯" />
        <HotCities />
        <CityList />
      </div>

      <AlphabetSidebar />
    </div>
  );
}
