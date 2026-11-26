import ganapathiImg from '../assets/ganapathi.png';

export function CrestEmblem({ className = 'w-14 h-14' }) {
  return (
    <div
      className={`relative rounded-full border border-[#B58938] bg-[#FFFDF9] p-2 flex items-center justify-center shadow-[0_6px_18px_-8px_rgba(181,137,56,0.45)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-full border border-dashed border-[#B58938]/55"
      />
      <img
        src={ganapathiImg}
        alt="Auspicious Lord Ganapathi Emblem"
        className="w-full h-full object-contain select-none relative z-10"
      />
    </div>
  );
}

export function BotanicalDivider({ className = 'w-48 h-6', bg = '#FBF8F3' }) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="84" y2="12" stroke="#B58938" strokeOpacity="0.45" strokeWidth="1" />
      <line x1="136" y1="12" x2="220" y2="12" stroke="#B58938" strokeOpacity="0.45" strokeWidth="1" />
      <path
        d="M110 4C112.5 8 115.5 10.5 120 12C115.5 13.5 112.5 16 110 20C107.5 16 104.5 13.5 100 12C104.5 10.5 107.5 8 110 4Z"
        stroke="#B58938"
        strokeWidth="1.2"
        fill={bg}
      />
      <circle cx="92" cy="12" r="2" fill="#B58938" fillOpacity="0.75" />
      <circle cx="128" cy="12" r="2" fill="#B58938" fillOpacity="0.75" />
    </svg>
  );
}
