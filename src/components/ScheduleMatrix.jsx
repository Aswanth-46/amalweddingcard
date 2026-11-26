import { useState } from 'react';
import { Check, Clock, Copy, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalDivider } from './BotanicalOrnament';

export default function ScheduleMatrix() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyAddress = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section
      id="schedule"
      className="scroll-mt-16 bg-[#F8F1E5] text-[#2A2118] py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="block text-[11px] uppercase tracking-[0.24em] font-semibold text-[#8F6A24] mb-2">
            Wedding Itinerary &amp; Venues
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2A2118] tracking-[-0.01em]">
            Sunday, 13th <span className="italic text-gold-foil">December 2026</span>
          </h2>
          <BotanicalDivider className="w-48 h-6 mx-auto mt-4" bg="#F8F1E5" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {WEDDING_DATA.events.map((event) => {
            const isReception = event.id === 'reception';
            const isCopied = copiedId === event.id;

            return (
              <article
                key={event.id}
                className={`schedule-row relative rounded-3xl p-7 sm:p-10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                  isReception
                    ? 'bg-gradient-to-b from-[#FFFDF9] to-[#F3E7D2] text-[#2A2118] border-2 border-[#B58938] shadow-[0_24px_55px_-22px_rgba(181,137,56,0.35)]'
                    : 'bg-[#FFFDF9] text-[#2A2118] border border-[#B58938]/55 shadow-[0_20px_45px_-22px_rgba(42,33,24,0.16)]'
                }`}
              >
                {/* Decorative Inner Hairline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-2xl border border-[#B58938]/25"
                />

                <div className="relative z-10">
                  {/* Top Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span
                      className={`rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold ${
                        isReception
                          ? 'bg-gradient-to-r from-[#B58938] to-[#E7CA88] text-[#231A10]'
                          : 'bg-[#F2E9DA] text-[#8F6A24] border border-[#B58938]/40'
                      }`}
                    >
                      {event.index} · {event.tag}
                    </span>

                    <span className="text-xs uppercase tracking-[0.14em] font-medium text-[#6B5B47]">
                      {event.dateLabel}
                    </span>
                  </div>

                  {/* Title & Timing */}
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2118]">
                    {event.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2.5">
                    <Clock
                      className={`w-4 h-4 shrink-0 ${
                        isReception ? 'text-[#8F6A24]' : 'text-[#9A4A43]'
                      }`}
                    />
                    <p
                      className={`font-serif text-2xl font-medium ${
                        isReception ? 'text-gold-foil' : 'text-[#9A4A43]'
                      }`}
                    >
                      {event.timeLabel}
                    </p>
                  </div>

                  <p className="text-xs uppercase tracking-[0.14em] mt-1 text-[#6B5B47]">
                    {event.cardTimeCopy}
                  </p>

                  {/* Divider */}
                  <div className="h-px my-6 bg-[#B58938]/30" />

                  {/* Venue Details */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#B58938]" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F6A24]">
                        {event.venueLabel}
                      </span>
                      <p className="font-serif text-2xl font-semibold mt-0.5 leading-snug text-[#2A2118]">
                        {event.address}
                      </p>
                      <p className="text-sm mt-2 leading-relaxed text-[#6B5B47]">
                        {event.cardNoteCopy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tactile Copy Address Footer */}
                <div className="relative z-10 mt-8 pt-6 border-t border-[#B58938]/25">
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(event.id, event.address)}
                    aria-label={`Copy ${event.title} address`}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] border transition-colors ${
                      isReception
                        ? 'bg-[#FFFDF9] border-[#B58938] text-[#2A2118] hover:bg-[#B58938] hover:text-[#FFFDF9]'
                        : 'bg-[#FBF8F3] border-[#B58938]/55 text-[#2A2118] hover:bg-[#B58938] hover:text-[#FFFDF9]'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Venue Address</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
