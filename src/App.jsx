import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/Preloader';
import HeaderBar from './components/HeaderBar';
import HeroPoster from './components/HeroPoster';
import CountdownClock from './components/CountdownClock';
import LineageLedger from './components/LineageLedger';
import ScheduleMatrix from './components/ScheduleMatrix';
import PosterFooter from './components/PosterFooter';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  useEffect(() => {
    if (!preloaderDone) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 18,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.hero-photo-frame', {
        y: 16,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.to('.hero-photo-frame', {
        y: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: '#invitation',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.from('.clock-cell', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#chronometer',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.reveal-block', {
        y: 26,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#lineage',
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from('.schedule-row', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.14,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#schedule',
          start: 'top 82%',
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [preloaderDone]);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#FBF8F3] text-[#2A2118]">
      <Preloader onComplete={handlePreloaderComplete} />
      <HeaderBar />
      <main>
        <HeroPoster />
        <CountdownClock />
        <LineageLedger />
        <ScheduleMatrix />
      </main>
      <PosterFooter />
    </div>
  );
}
