import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import anMonogram from '../assets/an-monogram.png';

export default function Preloader({ onComplete }) {
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDone(true);
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
      },
    });

    // Immediate curtain opening without artificial pause
    tl.to(sealRef.current, {
      scale: 1.05,
      opacity: 0,
      duration: 0.25,
      delay: 0.12,
      ease: 'power2.in',
    })
      .add(() => {
        onComplete?.();
      })
      .to(
        [leftDoorRef.current, rightDoorRef.current],
        {
          xPercent: (i) => (i === 0 ? -100 : 100),
          duration: 0.72,
          ease: 'power4.inOut',
        },
        '<0.02'
      );

    return () => tl.kill();
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto"
    >
      {/* Champagne Ivory Silk Invitation Doors */}
      <div className="absolute inset-0 flex">
        <div
          ref={leftDoorRef}
          className="w-1/2 h-full bg-[#F5EDE0] border-r border-[#B58938]/40 will-change-transform relative"
        >
          <div className="absolute inset-6 border-y border-l border-[#B58938]/30 pointer-events-none" />
        </div>
        <div
          ref={rightDoorRef}
          className="w-1/2 h-full bg-[#F5EDE0] will-change-transform relative"
        >
          <div className="absolute inset-6 border-y border-r border-[#B58938]/30 pointer-events-none" />
        </div>
      </div>

      {/* Pearl & Gold A&N Monogram Crest */}
      <div
        ref={sealRef}
        className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center text-[#2A2118]"
      >
        <div className="w-32 h-32 rounded-full border-2 border-[#B58938] bg-[#FFFDF9] p-4 flex flex-col items-center justify-center shadow-[0_18px_45px_-12px_rgba(181,137,56,0.45)]">
          <img
            src={anMonogram}
            alt="A & N Monogram"
            className="w-20 h-auto object-contain select-none"
          />
          <span className="text-[9px] uppercase tracking-[0.26em] text-[#6B5B47] mt-1.5 font-semibold">
            13 · 12 · 26
          </span>
        </div>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#2A2118] mt-6 tracking-wide">
          Amal A. P. &amp; Nikhila K. C.
        </p>
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8F6A24] font-semibold mt-2">
          Kannur, Kerala
        </p>
      </div>
    </div>
  );
}
