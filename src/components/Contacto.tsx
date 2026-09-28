"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "./Parallax";
import { GOOGLE_FORM_VIEW, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/datos";

export function Contacto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const leftX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative -mt-10 flex min-h-[100svh] items-center overflow-hidden rounded-t-[40px] bg-deep py-32"
    >
      <motion.div style={reduce ? undefined : { y: glowY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/4 h-[480px] w-[480px] rounded-full bg-blue/40 blur-[150px]" />
        <div className="absolute bottom-0 right-[8%] h-[420px] w-[420px] rounded-full bg-ember/25 blur-[150px]" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl px-5 text-center sm:px-8">
        <motion.div style={reduce ? undefined : { scale }}>
          <h2 className="poster text-[15vw] text-white-soft lg:text-[150px]">
            <motion.span style={reduce ? undefined : { x: leftX }} className="block">
              ¿Listo para
            </motion.span>
            <motion.span style={reduce ? undefined : { x: rightX }} className="block text-outline">
              empezar?
            </motion.span>
          </h2>
        </motion.div>

        <p className="mx-auto mt-8 max-w-md text-[16px] leading-relaxed text-muted-d">
          Escríbeme por Instagram o rellena el cuestionario de cliente para
          que empecemos a construir tu plan.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a
            href={GOOGLE_FORM_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white-soft px-8 py-4 text-[15px] font-bold text-ink shadow-[0_14px_40px_-12px_rgba(124,155,255,0.6)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Rellenar cuestionario
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-8 py-4 text-[15px] font-bold text-white-soft transition hover:border-blue-soft hover:bg-blue-soft/10"
          >
            {INSTAGRAM_HANDLE} en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
