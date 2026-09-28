"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Parallax, useReducedMotion } from "./Parallax";

const PASOS = [
  {
    title: "Cuestionario inicial",
    text: "Rellenas el cuestionario de cliente: objetivo, nivel, historial, disponibilidad y material del que dispones.",
  },
  {
    title: "Plan a tu medida",
    text: "Diseño tu programa de entrenamiento personalizado a partir de esas respuestas — nada de plantillas genéricas.",
  },
  {
    title: "Seguimiento semanal",
    text: "Reviso tu progreso y ajusto cargas, volumen e intensidad cada semana según cómo responde tu cuerpo.",
  },
  {
    title: "Progresas donde estés",
    text: "Entrenas desde cualquier lugar, con comunicación directa conmigo para resolver dudas en el camino.",
  },
];

export function ComoTrabajo() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-trabajo" className="relative overflow-hidden rounded-t-[40px] bg-paper py-32">
      <Parallax speed={0.35} className="pointer-events-none absolute -right-10 top-10 select-none" >
        <span aria-hidden className="poster text-[40vw] text-outline-light lg:text-[30vw]">4</span>
      </Parallax>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue">
              <span className="h-[1.5px] w-6 bg-blue" />
              Cómo trabajo
            </span>
            <h2 className="poster text-[56px] text-ink sm:text-[84px]">
              De cero
              <br />a tu plan
            </h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Cuatro pasos. Sin plantillas, sin letra pequeña: un proceso claro
              desde el primer mensaje.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-[27px] top-3 bottom-3 w-[2px] bg-line-l" />
          <motion.div
            style={reduce ? undefined : { scaleY: line }}
            className="absolute left-[27px] top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-blue to-blue-soft"
          />

          {PASOS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="relative mb-8 grid grid-cols-[56px_1fr] gap-6 last:mb-0">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-[17px] font-bold text-white shadow-[0_0_0_6px_var(--paper)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="rounded-3xl border border-line-l bg-white p-7 shadow-[0_20px_50px_-35px_rgba(13,17,32,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(29,78,216,0.35)]">
                <h3 className="mb-2 text-[21px] font-semibold text-ink">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
