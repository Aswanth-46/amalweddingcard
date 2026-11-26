import { useState } from 'react';
import { ArrowUp, Check, Share2 } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { CrestEmblem } from './BotanicalOrnament';

export default function PosterFooter() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${WEDDING_DATA.couple.combined} — Wedding Invitation`,
          text: `Wedding & Reception of ${WEDDING_DATA.couple.combined} on Sunday, 13th December 2026 in Kannur.`,
          url,
        });
        return;
      } catch {
        // fallback
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="bg-[#EFE5D4] text-[#2A2118] border-t border-[#B58938]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center flex flex-col items-center">
        <CrestEmblem className="w-14 h-14 mb-6" />

        <span className="text-[11px] uppercase tracking-[0.26em] text-[#8F6A24] font-semibold">
          With Warm Regards
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#2A2118] mt-2">
          <span className="text-gold-foil">{WEDDING_DATA.couple.groom}</span>{' '}
          <span className="italic text-gold-foil">&amp;</span>{' '}
          <span className="text-gold-foil">{WEDDING_DATA.couple.bride}</span>
        </h2>

        <p className="font-serif italic text-xl text-[#6B5B47] mt-3">
          Sunday, 13th December 2026 · Kannur
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl border-y border-[#B58938]/35 py-6 text-center">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8F6A24] font-semibold mb-1">
              Invited By
            </span>
            <p className="text-sm font-medium text-[#2A2118]">
              {WEDDING_DATA.hosts.parents}
            </p>
            <p className="text-xs text-[#6B5B47] mt-0.5">
              {WEDDING_DATA.hosts.address}
            </p>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8F6A24] font-semibold mb-1">
              {WEDDING_DATA.sharingHappiness.label}
            </span>
            <p className="font-serif text-2xl font-semibold text-[#2A2118]">
              {WEDDING_DATA.sharingHappiness.name}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={handleShare}
            className="btn-luxury-gold"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Invitation Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share Invitation</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-luxury-outline"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
