"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "./Parallax";

const WORDS = ["Culturismo natural", "Muay Thai", "Fuerza", "Disciplina", "Técnica", "Constancia"];

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** Fila infinita cuya velocidad y sentido dependen de la velocidad del scroll. */
function Row({ baseVelocity, outline }: { baseVelocity: number; outline?: boolean }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    const move = direction.current * baseVelocity * (delta / 1000) * (1 + Math.abs(f));
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap pt-[0.15em]">
      <motion.div className="flex shrink-0" style={{ x }}>
        {Array.from({ length: 4 }).map((_, k) => (
          <span key={k} className="flex shrink-0 items-center" aria-hidden={k > 0}>
            {WORDS.map((w) => (
              <span key={w} className="flex items-center">
                <span className={`poster px-6 text-[56px] sm:text-[84px] ${outline ? "text-outline" : "text-white-soft"}`}>
                  {w}
                </span>
                <span className={`h-3 w-3 rotate-45 ${outline ? "bg-ember" : "bg-blue-soft"}`} />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Pilares del método" className="relative overflow-hidden bg-void py-10">
      <div className="-rotate-2 border-y border-white/10 bg-deep py-5">
        <Row baseVelocity={-2.2} />
      </div>
      <div className="mt-2 rotate-1 py-3 opacity-80">
        <Row baseVelocity={1.6} outline />
      </div>
    </section>
  );
}
