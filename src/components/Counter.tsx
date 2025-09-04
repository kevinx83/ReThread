"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number;   // ms
  prefix?: string;
  suffix?: string;
};

export default function Counter({ to, duration = 1400, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [start, setStart] = useState(false);
  const [val, setVal] = useState(0);

  // start when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStart(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) { setVal(to); return; }

    let frame: number;
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, to, duration]);

  return (
    <span ref={ref} className="num">
      {prefix}{new Intl.NumberFormat("en-US").format(val)}{suffix}
    </span>
  );
}
