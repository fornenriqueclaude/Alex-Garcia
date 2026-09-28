"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { useReducedMotion } from "./Parallax";
import { MUAY_THAI_TEAM_HANDLE, MUAY_THAI_TEAM_URL } from "@/lib/datos";

const ESPECIALIDADES = [
  {
    n: "01",
    title: "Culturismo natural",
    word: "Natural",
    text: "Desarrollo de fuerza y físico basado en progresión de cargas, técnica y constancia — sin atajos ni sustancias. Entrenamiento estructurado para que cada sesión sume hacia tu objetivo.",
    tags: ["Progresión de cargas", "Técnica", "Sin atajos"],
    accent: "text-blue-soft",
    dot: "bg-blue-soft",
    card: "from-[#0f1d4a] via-deep to-void",
    glow: "bg-blue/40",
  },
  {
    n: "02",
    title: "Muay Thai",
    word: "Muay Thai",
    text: "Preparación física y técnica orientada al combate, de la mano de JGS Fight Team. Trabajo de condición, potencia y movilidad aplicado al ring.",
    tags: ["Condición", "Potencia", "Movilidad"],
    accent: "text-ember-soft",
    dot: "bg-ember",
    card: "from-[#3a1410] via-[#140b12] to-void",
    glow: "bg-ember/35",
  },
];

type Item = (typeof ESPECIALIDADES)[number];

function Panel({
  e,
  i,
  total,
  progress,
  reduce,
}: {
  e: Item;
  i: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: own } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // el panel se aleja (escala y se oscurece) cuando el siguiente se apila encima
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i - 1) * 0.08]);
  const dim = useTransform(progress, [start, 1], [0, (total - i - 1) * 0.55]);
  const wordX = useTransform(own, [0, 1], i % 2 ? ["-25%", "5%"] : ["5%", "-25%"]);
  const numY = useTransform(own, [0, 1], ["40%", "-40%"]);

  return (
    <div ref={ref} className="sticky top-0 flex h-[100svh] items-center justify-center px-3 sm:px-6">
      <motion.article
        style={reduce ? { top: i * 28 } : { scale, top: i * 28 }}
        className={`relative flex h-[82svh] w-full max-w-6xl origin-top flex-col justify-end overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${e.card} p-7 sm:p-12`}
      >
        <div className={`pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full ${e.glow} blur-[130px]`} />

        <motion.div
          aria-hidden
          style={reduce ? undefined : { x: wordX }}
          className="poster pointer-events-none absolute left-0 top-[8%] whitespace-nowrap text-[30vw] text-outline select-none sm:top-[4%]"
        >
          {e.word}
        </motion.div>

        <motion.span
          aria-hidden
          style={reduce ? undefined : { y: numY }}
          className="poster pointer-events-none absolute right-6 top-6 text-[120px] text-white/[0.06] sm:right-12 sm:text-[220px]"
        >
          {e.n}
        </motion.span>

        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className={`mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] ${e.accent}`}>
              <span className={`h-2 w-2 rotate-45 ${e.dot}`} />
              Especialidad {e.n}
            </span>
            <h3 className="poster text-[58px] text-white-soft sm:text-[96px]">{e.title}</h3>
          </div>
          <div>
            <p className="text-[16px] leading-relaxed text-muted-d sm:text-[17px]">{e.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {e.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-white-soft backdrop-blur-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          aria-hidden
          style={{ opacity: reduce ? 0 : dim }}
          className="pointer-events-none absolute inset-0 bg-void"
        />
      </motion.article>
    </div>
  );
}

export function Especialidades() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="especialidades" className="relative bg-void pt-28 pb-16">
      <div className="mx-auto mb-4 max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue-soft">
              <span className="h-[1.5px] w-6 bg-blue-soft" />
              Especialidades
            </span>
            <h2 className="poster text-[52px] text-white-soft sm:text-[80px]">
              Dos mundos,
              <br />
              <span className="text-outline">un mismo método</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-muted-d">
            Fuerza y físico por un lado, rendimiento de combate por otro. La
            misma exigencia en ambos.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative">
        {ESPECIALIDADES.map((e, i) => (
          <Panel key={e.n} e={e} i={i} total={ESPECIALIDADES.length} progress={scrollYProgress} reduce={reduce} />
        ))}
      </div>

      <Reveal className="mt-6 text-center text-[13.5px] text-muted-d">
        Muay Thai en colaboración con{" "}
        <a
          href={MUAY_THAI_TEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ember-soft hover:underline"
        >
          {MUAY_THAI_TEAM_HANDLE}
        </a>
      </Reveal>
    </section>
  );
}
