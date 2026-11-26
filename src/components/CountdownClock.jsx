import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

function calculateRemaining(targetIso) {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, completed: false };
}

export default function CountdownClock() {
  const [activeId, setActiveId] = useState('muhurtham');
  const activeEvent =
    WEDDING_DATA.events.find((e) => e.id === activeId) || WEDDING_DATA.events[0];

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateRemaining(activeEvent.isoStart)
  );

  useEffect(() => {
    setTimeLeft(calculateRemaining(activeEvent.isoStart));
    const timer = window.setInterval(() => {
      setTimeLeft(calculateRemaining(activeEvent.isoStart));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [activeEvent.isoStart]);

  const units = [
    { key: 'DAYS', label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { key: 'HOURS', label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { key: 'MINUTES', label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    {
      key: 'SECONDS',
      label: 'Seconds',
      value: String(timeLeft.seconds).padStart(2, '0'),
      accent: true,
    },
  ];

  return (
    <section
      id="chronometer"
      className="relative scroll-mt-16 bg-[#F4EBDC] text-[#2A2118] py-16 md:py-24 overflow-hidden border-b border-[#B58938]/30"
    >
      {/* Soft Golden Halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[660px] h-[380px] rounded-full bg-[#FFFDF9]/80 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading + Toggle */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 text-[#8F6A24] text-xs uppercase tracking-[0.24em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Counting Down the Moments</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#2A2118] tracking-[-0.01em]">
            Until We Celebrate <span className="italic text-gold-foil">Together</span>
          </h2>
          <p className="text-sm text-[#6B5B47] mt-2">
            {activeEvent.dateLabel} · {activeEvent.timeLabel}
          </p>

          {/* Interactive Pill Switcher */}
          <div
            role="tablist"
            aria-label="Countdown target event"
            className="inline-flex items-center p-1.5 rounded-full bg-[#FFFDF9] border border-[#B58938]/45 mt-7 gap-1 shadow-sm"
          >
            {WEDDING_DATA.events.map((ev) => {
              const isSelected = ev.id === activeId;
              return (
                <button
                  key={ev.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(ev.id)}
                  className={`rounded-full px-4 sm:px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#B58938] via-[#E7CA88] to-[#B58938] text-[#231A10] shadow-sm'
                      : 'text-[#6B5B47] hover:text-[#2A2118]'
                  }`}
                >
                  {ev.title} · {ev.id === 'muhurtham' ? '11:30 AM' : '5:00 PM'}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Light Luxury Arched Medallions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {units.map((unit) => (
            <div
              key={unit.key}
              className="clock-cell relative rounded-t-[140px] rounded-b-2xl bg-[#FFFDF9] border border-[#B58938]/55 px-4 py-8 sm:py-10 flex flex-col items-center justify-center text-center shadow-[0_20px_45px_-22px_rgba(42,33,24,0.18)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 rounded-t-[132px] rounded-b-xl border border-[#B58938]/20"
              />
              <span
                className={`font-serif font-semibold tabular-clock leading-none text-[clamp(3.25rem,7vw,5.25rem)] ${
                  unit.accent ? 'text-gold-foil' : 'text-[#2A2118]'
                }`}
                data-testid={`countdown-${unit.key.toLowerCase()}`}
              >
                {unit.value}
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#6B5B47] mt-3 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8F6A24] font-semibold mt-8">
          {timeLeft.completed
            ? `Celebration Day — ${activeEvent.venueLabel}`
            : `${activeEvent.venueLabel} · ${activeEvent.address}`}
        </p>
      </div>
    </section>
  );
}
