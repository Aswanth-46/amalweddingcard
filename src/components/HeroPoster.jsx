import { useState } from 'react';
import { ChevronDown, Maximize2, X } from 'lucide-react';
import weddingCardImg from '../assets/wedding-card.jpg';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalDivider, CrestEmblem } from './BotanicalOrnament';

export default function HeroPoster() {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <section
      id="invitation"
      className="relative scroll-mt-16 overflow-hidden bg-[#FBF8F3] luxury-silk-pattern"
    >
      {/* Soft Sunlight & Champagne Gold Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-[#E7CA88]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full bg-[#D9B87A]/18 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-14 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Light Luxury Editorial Invitation Copy (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="hero-fade flex items-center gap-3.5 mb-6">
              <CrestEmblem className="w-14 h-14 shrink-0" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#8F6A24]">
                  Wedding &amp; Reception Invitation
                </p>
                <p className="text-xs text-[#6B5B47]">
                  {WEDDING_DATA.hosts.address}
                </p>
              </div>
            </div>

            <p className="hero-fade font-serif italic text-xl sm:text-2xl text-[#6B5B47] mb-2">
              {WEDDING_DATA.hosts.prefix}{' '}
              <span className="text-[#2A2118] font-semibold not-italic">
                {WEDDING_DATA.hosts.parents}
              </span>
            </p>

            <p className="hero-fade text-sm sm:text-base text-[#6B5B47] max-w-xl leading-relaxed mb-7">
              {WEDDING_DATA.hosts.invitationText}
            </p>

            {/* Espresso & Metallic Gold-Foil Display Names */}
            <h1 className="hero-names font-serif font-semibold tracking-[-0.02em] leading-[0.94] text-[clamp(3.15rem,7vw,5.75rem)] mb-5">
              <span className="mask-reveal">
                <span className="hero-line block text-gold-foil">
                  {WEDDING_DATA.couple.groom}
                </span>
              </span>
              <span className="mask-reveal">
                <span className="hero-line block font-serif italic font-normal text-gold-foil text-[clamp(2.25rem,4.5vw,3.5rem)] my-1">
                  &amp;
                </span>
              </span>
              <span className="mask-reveal">
                <span className="hero-line block text-gold-foil">
                  {WEDDING_DATA.couple.bride}
                </span>
              </span>
            </h1>

            <BotanicalDivider className="hero-fade w-52 h-6 mb-7" bg="#FBF8F3" />

            {/* Date & Ceremony Summary Plaques */}
            <div className="hero-fade w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-left">
              <div className="rounded-2xl bg-[#FFFDF9] border border-[#B58938]/40 px-5 py-4 shadow-[0_14px_30px_-20px_rgba(42,33,24,0.18)]">
                <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#8F6A24]">
                  Muhurtham · Morning
                </span>
                <p className="font-serif text-xl font-semibold text-[#2A2118] mt-1">
                  11:30 a.m. – 12:05 p.m.
                </p>
                <p className="text-xs text-[#6B5B47] mt-1">
                  Bride&apos;s Residence · Poduvachery, Kannur
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#F7EFE1] to-[#EFE3CE] border border-[#B58938]/60 px-5 py-4 shadow-[0_14px_30px_-20px_rgba(181,137,56,0.35)]">
                <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-[#8F6A24]">
                  Reception · Evening
                </span>
                <p className="font-serif text-xl font-semibold text-[#2A2118] mt-1">
                  5:00 p.m. – 9:00 p.m.
                </p>
                <p className="text-xs text-[#594B38] mt-1">
                  Groom&apos;s Residence · Koyyode, Kannur
                </p>
              </div>
            </div>

            {/* Luxury Action Pills */}
            <div className="hero-fade flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#schedule" className="btn-luxury-gold">
                <span>View Ceremony &amp; Reception</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setZoomOpen(true)}
                className="btn-luxury-outline"
              >
                <Maximize2 className="w-4 h-4 text-[#8F6A24]" />
                <span>Inspect Letter Card</span>
              </button>
            </div>
          </div>

          {/* Right Archival Gold-Mounted Wedding Letter Card Photo (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[390px]">
              {/* Outer Gold Filigree Halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl border border-[#B58938]/40 pointer-events-none"
              />

              {/* Framed Letter Card Container (Uncropped Full Card) */}
              <button
                type="button"
                onClick={() => setZoomOpen(true)}
                aria-label="Enlarge wedding invitation letter card"
                className="hero-photo-frame group relative block w-full rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#FFFDF9] to-[#F3EAD9] border-2 border-[#B58938] shadow-[0_28px_60px_-22px_rgba(42,33,24,0.28)] overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[1488/2560] rounded-xl overflow-hidden bg-white border border-[#B58938]/30">
                  <img
                    src={weddingCardImg}
                    alt="Official Wedding Invitation Letter for Amal A. P. and Nikhila K. C."
                    loading="eager"
                    decoding="sync"
                    className="hero-parallax-img w-full h-full object-contain will-change-transform select-none"
                  />
                </div>

                {/* Subtle Luxury Caption Bar */}
                <div className="mt-2.5 px-1.5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2A2118]">
                  <span>Official Invitation Card</span>
                  <span className="inline-flex items-center gap-1 text-[#8F6A24] group-hover:text-[#2A2118] transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>Enlarge</span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luminous Champagne Satin Marquee Ribbon */}
      <div className="bg-[#EFE5D4] text-[#7A591B] border-y border-[#B58938]/40 py-3.5 overflow-hidden">
        <div className="animate-marquee font-serif italic text-base sm:text-lg tracking-wide whitespace-nowrap">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center gap-8 pr-8">
              <span>Amal A. P. &amp; Nikhila K. C.</span>
              <span className="text-[#B58938] text-xs not-italic">✦</span>
              <span>Sunday, 13th December 2026</span>
              <span className="text-[#B58938] text-xs not-italic">✦</span>
              <span>Muhurtham: 11:30 a.m. – 12:05 p.m.</span>
              <span className="text-[#B58938] text-xs not-italic">✦</span>
              <span>Reception: 5:00 p.m. – 9:00 p.m.</span>
              <span className="text-[#B58938] text-xs not-italic">✦</span>
              <span>Koyyode &amp; Poduvachery, Kannur</span>
              <span className="text-[#B58938] text-xs not-italic">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Letter Card */}
      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding Invitation Letter Card Preview"
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 bg-[#2A2118]/75 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-md w-full bg-[#FFFDF9] p-3 rounded-2xl border-2 border-[#B58938] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              aria-label="Close invitation card preview"
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#FFFDF9] text-[#2A2118] border border-[#B58938] flex items-center justify-center hover:bg-[#B58938] hover:text-[#FFFDF9] transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={weddingCardImg}
              alt="Official Wedding Invitation Letter for Amal A. P. and Nikhila K. C."
              className="w-full max-h-[84vh] object-contain rounded-xl bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
