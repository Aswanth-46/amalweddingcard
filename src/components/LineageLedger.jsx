import { HeartHandshake } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalDivider } from './BotanicalOrnament';

export default function LineageLedger() {
  return (
    <section
      id="lineage"
      className="scroll-mt-16 bg-[#FBF8F3] text-[#2A2118] py-16 md:py-24 border-b border-[#B58938]/30 luxury-silk-pattern"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="block text-[11px] uppercase tracking-[0.24em] font-semibold text-[#8F6A24] mb-2">
            Two Families United
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2A2118] tracking-[-0.01em]">
            With Love &amp; Blessings
          </h2>
          <BotanicalDivider className="w-48 h-6 mx-auto my-4" bg="#FBF8F3" />
          <p className="text-sm sm:text-base text-[#6B5B47] leading-relaxed">
            {WEDDING_DATA.hosts.prefix}{' '}
            <strong className="text-[#2A2118] font-semibold">
              {WEDDING_DATA.hosts.parents}
            </strong>{' '}
            — {WEDDING_DATA.hosts.invitationText.toLowerCase()}.
          </p>
        </div>

        {/* Groom & Bride Luxury Stationery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Groom Card */}
          <div className="reveal-block relative rounded-3xl bg-[#FFFDF9] border border-[#B58938]/55 p-8 sm:p-10 shadow-[0_20px_45px_-24px_rgba(42,33,24,0.18)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-2xl border border-[#B58938]/25"
            />
            <div className="relative z-10 text-center flex flex-col items-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#B58938] to-[#E7CA88] text-[#231A10] px-4 py-1 text-[10px] uppercase tracking-[0.22em] font-bold mb-5">
                The Groom
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2A2118]">
                {WEDDING_DATA.couple.groom}
              </h3>

              <div className="w-12 h-px bg-[#B58938] my-5" />

              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8F6A24] font-semibold mb-1.5">
                Son of
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#2A2118] font-medium">
                {WEDDING_DATA.hosts.parents}
              </p>
              <p className="text-sm text-[#6B5B47] mt-2">
                {WEDDING_DATA.hosts.address}
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div className="reveal-block relative rounded-3xl bg-[#FFFDF9] border border-[#B58938]/55 p-8 sm:p-10 shadow-[0_20px_45px_-24px_rgba(42,33,24,0.18)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-2xl border border-[#B58938]/25"
            />
            <div className="relative z-10 text-center flex flex-col items-center">
              <span className="inline-block rounded-full bg-[#9A4A43] text-[#FFFDF9] px-4 py-1 text-[10px] uppercase tracking-[0.22em] font-bold mb-5">
                The Bride
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2A2118]">
                {WEDDING_DATA.couple.bride}
              </h3>

              <div className="w-12 h-px bg-[#B58938] my-5" />

              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8F6A24] font-semibold mb-1.5">
                Daughter of
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#2A2118] font-medium">
                {WEDDING_DATA.brideParents.relation} {WEDDING_DATA.brideParents.parents}
              </p>
              <p className="text-sm text-[#6B5B47] mt-2">
                {WEDDING_DATA.brideParents.address}
              </p>
            </div>
          </div>
        </div>

        {/* Sharing the Happiness Champagne Gold Banner */}
        <div className="reveal-block mt-8 rounded-2xl bg-gradient-to-r from-[#F5ECE0] via-[#FFFDF9] to-[#F5ECE0] text-[#2A2118] border border-[#B58938]/60 px-6 py-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#FFFDF9] border border-[#B58938] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#8F6A24]" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8F6A24] font-semibold">
                {WEDDING_DATA.sharingHappiness.label}
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2118]">
                {WEDDING_DATA.sharingHappiness.name}
              </p>
            </div>
          </div>

          <p className="font-serif italic text-lg text-[#6B5B47]">
            “Your presence and blessings are our greatest gift.”
          </p>
        </div>
      </div>
    </section>
  );
}
