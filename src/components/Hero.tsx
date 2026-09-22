"use client";

import { motion } from "framer-motion";
import { GOOGLE_FORM_VIEW, INSTAGRAM_URL } from "@/lib/datos";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-28 pb-20"
    >
      {/* fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f1a38_0%,_#05070d_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,155,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,155,255,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(180deg, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(180deg, black, transparent 78%)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-ember/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-blue/30 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-blue-soft">
              <span className="h-[1.5px] w-5 bg-blue-soft" />
              Coach online
            </span>
            <h1 className="text-[40px] font-semibold leading-[1.05] text-white-soft sm:text-[52px] lg:text-[64px]">
              Construye tu <em className="not-italic text-blue-soft">mejor versión</em>
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-d">
              Transforma tu cuerpo y tu rendimiento con un programa de
              entrenamiento personalizado hecho para ti. Mis asesorías online
              están diseñadas para que progreses desde cualquier lugar,
              siguiendo un plan profesional adaptado a tu objetivo, tu nivel
              y tu disponibilidad.
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href={GOOGLE_FORM_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(29,78,216,0.8)]"
              >
                Rellenar cuestionario inicial
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-7 py-4 text-[15px] font-bold text-white-soft transition hover:border-blue-soft hover:bg-blue-soft/10"
              >
                Escríbeme por Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="font-display text-2xl font-bold text-white-soft">
                  Culturismo natural
                </div>
                <div className="text-[13px] text-muted-d">Fuerza y físico, sin atajos</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-white-soft">Muay Thai</div>
                <div className="text-[13px] text-muted-d">Con JGS Fight Team</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/alex-foto.png"
                alt="Alex García entrenando en el gimnasio"
                className="h-full w-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-blue-soft/40 bg-gradient-to-br from-blue/35 to-[#0a1128]/90 px-5 py-3.5 shadow-[0_14px_34px_-10px_rgba(29,78,216,0.55)] backdrop-blur-sm">
              <div className="font-display text-xl font-bold text-white-soft">+1.500</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-blue-soft">
                Seguidores en Instagram
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted-d sm:flex">
        <span>Descubre más</span>
        <span className="h-8 w-px bg-gradient-to-b from-blue-soft to-transparent" />
      </div>
    </section>
  );
}
