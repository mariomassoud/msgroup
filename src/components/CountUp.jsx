import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

function easeOutQuad(t) {
  return t * (2 - t);
}

export default function CountUp({ value, duration = 1200, className = "" }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (target === null || !inView) return;
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let frame;
    if (reduceMotion) {
      frame = requestAnimationFrame(() => setDisplay(String(target)));
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(String(Math.round(easeOutQuad(progress) * target)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${display}${suffix}`}
    </span>
  );
}
