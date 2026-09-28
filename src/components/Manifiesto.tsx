"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "./Parallax";

const TEXTO =
  "No se trata de un plan genérico. Se trata de tu plan: tu objetivo, tu nivel y tu disponibilidad, con ajustes cada semana.";
const DESTACADAS = new Set(["tu", "plan:", "cada", "semana."]);

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const accent = DESTACADAS.has(word);
  return (
    <motion.span style={{ opacity, y }} className={`mr-[0.25em] inline-block ${accent ? "text-blue-soft" : ""}`}>
      {word}
    </motion.span>
  );
}

/** Sección fija en pantalla: las palabras se iluminan una a una al hacer scroll. */
export function Manifiesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const words = TEXTO.split(" ");
  const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const barScale = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  if (reduce) {
    return (
      <section className="bg-deep py-28">
        <p className="mx-auto max-w-4xl px-6 text-center font-display text-[30px] font-semibold leading-snug text-white-soft sm:text-[48px]">
          {TEXTO}
        </p>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[240vh] bg-deep">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div
          aria-hidden
          style={{ x: bgX }}
          className="poster pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[34vw] text-outline opacity-40"
        >
          Tu plan · Tu plan
        </motion.div>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-blue-soft">Manifiesto</span>
            <div className="h-px w-40 bg-white/10">
              <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-blue-soft" />
            </div>
          </div>
          <p className="font-display text-[34px] font-semibold leading-[1.15] text-white-soft sm:text-[52px] lg:text-[64px]">
            {words.map((w, i) => {
              const start = (i / words.length) * 0.8;
              return <Word key={i} word={w} progress={scrollYProgress} range={[start, start + 0.8 / words.length + 0.04]} />;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
