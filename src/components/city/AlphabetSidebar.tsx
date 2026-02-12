const ALPHABET = [
  "#", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", 
  "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"
];

export function AlphabetSidebar() {
  return (
    <div className="absolute right-[6px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-[2px] z-50">
      {ALPHABET.map((char) => (
        <div 
          key={char} 
          className={`size-[16px] flex items-center justify-center rounded-full text-[10px] font-medium cursor-pointer ${char === '#' ? 'bg-[#f5c244] text-white' : 'text-[#755609]'}`}
        >
          {char}
        </div>
      ))}
    </div>
  );
}
