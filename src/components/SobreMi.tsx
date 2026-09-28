"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Parallax, useReducedMotion } from "./Parallax";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/datos";

export function SobreMi() {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  // la foto se mueve dentro de su marco: efecto "ventana"
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(18% 18% 18% 18% round 28px)", "inset(0% 0% 0% 0% round 28px)"]);

  return (
    <section id="sobre-mi" className="relative -mt-10 overflow-hidden rounded-t-[40px] bg-void py-32">
      <Parallax speed={0.25} className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none">
        <span aria-hidden className="poster block text-[44vw] leading-none text-outline opacity-50">AG</span>
      </Parallax>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            ref={frame}
            style={reduce ? undefined : { clipPath: clip }}
            className="duotone group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10"
          >
            <motion.div style={reduce ? undefined : { y: imgY }} className="absolute -inset-y-[14%] inset-x-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/alex-foto.png`}
                alt="Alex García, coach online"
                className="h-full w-full object-cover object-[50%_20%] transition duration-700 group-hover:[filter:none]"
              />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void/80 to-transparent" />
            <span className="absolute bottom-5 left-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white-soft/80">
              Alex García · Coach
            </span>
          </motion.div>

          <Reveal delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue-soft">
              <span className="h-[1.5px] w-6 bg-blue-soft" />
              Sobre mí
            </span>
            <h2 className="poster text-[64px] text-white-soft sm:text-[96px]">
              Alex
              <br />
              <span className="text-outline">García</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-d">
              Coach online especializado en culturismo natural y Muay Thai,
              entrenando de la mano de JGS Fight Team. Ayudo a mis clientes a
              construir su mejor versión con un programa de entrenamiento
              personalizado, adaptado a su objetivo, su nivel y su
              disponibilidad — y ajustado cada semana para que el progreso no
              se detenga.
            </p>
            <blockquote className="mt-6 border-l-2 border-blue-soft pl-5 font-display text-[20px] font-semibold leading-snug text-white-soft">
              El plan se adapta a tu vida, no al revés: entrenes donde
              entrenes, el seguimiento es el mismo.
            </blockquote>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-6 py-3.5 text-[14px] font-bold text-white-soft transition hover:border-blue-soft hover:bg-blue-soft/10"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
