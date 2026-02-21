"use client";

import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration: number = 500
): number {
  const [current, setCurrent] = useState(target);
  const prevTarget = useRef(target);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = prevTarget.current;
    prevTarget.current = target;

    if (start === target) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setCurrent(start + (target - start) * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return current;
}
