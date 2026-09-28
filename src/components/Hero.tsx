"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { GOOGLE_FORM_VIEW, INSTAGRAM_URL } from "@/lib/datos";
import { useReducedMotion, useSmooth } from "./Parallax";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Desplazamiento según la posición del ratón; `depth` mayor = capa más cercana. */
function useMouseLayer(mx: MotionValue<number>, my: MotionValue<number>, depth: number) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return { x, y };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSmooth(scrollYProgress);

  // cada capa recorre una distancia distinta: cuanto más "lejos", menos se mueve
  const gridY = useTransform(p, [0, 1], ["0%", "35%"]);
  const posterY = useTransform(p, [0, 1], ["0%", "55%"]);
  const posterScale = useTransform(p, [0, 1], [1, 1.12]);
  const photoY = useTransform(p, [0, 1], ["0%", "-22%"]);
  const glowY = useTransform(p, [0, 1], ["0%", "-60%"]);
  const textY = useTransform(p, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(p, [0, 0.55], [1, 0]);

  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 20 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 20 });
  const gridMouse = useMouseLayer(mx, my, -6);
  const posterMouse = useMouseLayer(mx, my, -14);
  const photoMouse = useMouseLayer(mx, my, 22);
  const glowMouse = useMouseLayer(mx, my, 40);

  const onMove = (e: MouseEvent) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mxRaw.set((e.clientX - r.left) / r.width - 0.5);
    myRaw.set((e.clientY - r.top) / r.height - 0.5);
  };

  const s = <T,>(v: T) => (reduce ? undefined : v);

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-28 pb-24"
    >
      {/* capa 0: luz de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f1a38_0%,_#05070d_62%)]" />

      {/* capa 1: rejilla */}
      <motion.div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0" style={s({ y: gridY })}>
        <motion.div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            ...s(gridMouse),
            backgroundImage:
              "linear-gradient(rgba(124,155,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(124,155,255,.45) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black, transparent)",
          }}
        />
      </motion.div>

      {/* capa 2: nombre gigante */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-2vw] flex justify-center"
        style={s({ y: posterY, scale: posterScale })}
      >
        <motion.div style={s(posterMouse)} className="poster whitespace-nowrap text-[27vw] text-outline select-none">
          García
        </motion.div>
      </motion.div>

      {/* capa 4: luces */}
      <motion.div className="pointer-events-none absolute inset-0" style={s({ y: glowY })}>
        <motion.div style={s(glowMouse)} className="absolute inset-0">
          <div className="absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-ember/20 blur-[150px]" />
          <div className="absolute -left-32 bottom-10 h-[460px] w-[460px] rounded-full bg-blue/35 blur-[140px]" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* texto */}
          <motion.div style={s({ y: textY, opacity: textOpacity })}>
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue-soft"
            >
              <span className="h-[1.5px] w-6 bg-blue-soft" />
              Coach online
            </motion.span>

            <h1 className="poster text-[64px] text-white-soft sm:text-[92px] lg:text-[112px]">
              {["Construye", "tu mejor", "versión"].map((line, i) => (
                <span key={line} className="-mt-[0.12em] block overflow-hidden pt-[0.12em] pb-[0.04em]">
                  <motion.span
                    className={`block ${i === 2 ? "pt-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-blue-soft via-white-soft to-ember-soft" : ""}`}
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.09 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="mt-7 max-w-lg text-[17px] leading-relaxed text-muted-d"
            >
              Transforma tu cuerpo y tu rendimiento con un programa de
              entrenamiento personalizado hecho para ti. Progresa desde
              cualquier lugar, con un plan profesional adaptado a tu objetivo,
              tu nivel y tu disponibilidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-3.5"
            >
              <a
                href={GOOGLE_FORM_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(29,78,216,0.9)]"
              >
                Rellenar cuestionario inicial
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-7 py-4 text-[15px] font-bold text-white-soft backdrop-blur-sm transition hover:border-blue-soft hover:bg-blue-soft/10"
              >
                Escríbeme por Instagram
              </a>
            </motion.div>
          </motion.div>

          {/* capa 3: foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            style={s({ y: photoY })}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <motion.div style={s(photoMouse)} className="relative">
              {/* marco desplazado detrás de la foto */}
              <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-[30px] border border-blue-soft/30" />
              <div className="duotone relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/alex-foto.png`}
                  alt="Alex García entrenando en el gimnasio"
                  className="h-full w-full scale-110 object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void/90 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-soft">Especialidades</div>
                    <div className="font-display text-[17px] font-semibold text-white-soft">Culturismo natural · Muay Thai</div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
                className="absolute -left-6 top-10 rounded-2xl border border-blue-soft/40 bg-gradient-to-br from-blue/40 to-deep/90 px-5 py-3.5 shadow-[0_14px_34px_-10px_rgba(29,78,216,0.6)] backdrop-blur-md sm:-left-12"
              >
                <div className="font-display text-2xl font-bold text-white-soft">+1.500</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-blue-soft">
                  Seguidores en Instagram
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
                className="absolute -right-4 bottom-24 rounded-2xl border border-ember/40 bg-gradient-to-br from-ember/30 to-deep/90 px-5 py-3.5 backdrop-blur-md sm:-right-10"
              >
                <div className="font-display text-[15px] font-bold text-white-soft">JGS Fight Team</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ember-soft">Muay Thai</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={s({ opacity: textOpacity })}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-d sm:flex"
      >
        <span>Desliza</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-blue-soft"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
