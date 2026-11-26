import { useState } from 'react';
import { Check, Share2 } from 'lucide-react';
import anMonogram from '../assets/an-monogram.png';
import { WEDDING_DATA } from '../data/weddingData';

const NAV_ITEMS = [
  { href: '#invitation', label: 'Invitation' },
  { href: '#chronometer', label: 'Countdown' },
  { href: '#lineage', label: 'Families' },
  { href: '#schedule', label: 'Schedule' },
];

export default function HeaderBar() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${WEDDING_DATA.couple.combined} — Wedding Invitation`,
          text: `You are cordially invited to the wedding & reception of ${WEDDING_DATA.couple.combined} on Sunday, 13th December 2026.`,
          url: shareUrl,
        });
        return;
      } catch {
        // fallback to copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      setShared(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FBF8F3]/95 backdrop-blur-sm border-b border-[#B58938]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Monogram Brand */}
        <a
          href="#invitation"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <span className="w-11 h-11 rounded-full bg-[#FFFDF9] border border-[#B58938] p-1.5 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={anMonogram}
              alt="A & N Monogram Logo"
              className="w-full h-full object-contain select-none"
            />
          </span>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg font-semibold leading-none text-[#2A2118]">
              Amal &amp; Nikhila
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8F6A24] mt-0.5">
              13 Dec 2026 · Kannur
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-3 sm:gap-6 md:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10.5px] sm:text-[13px] font-medium tracking-[0.03em] sm:tracking-[0.08em] uppercase text-[#6B5B47] hover:text-[#2A2118] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Share CTA */}
        <button
          type="button"
          onClick={handleShare}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#FFFDF9] border border-[#B58938]/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#2A2118] hover:bg-[#B58938] hover:text-[#FFFDF9] hover:border-[#B58938] transition-colors shrink-0"
        >
          {shared ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
