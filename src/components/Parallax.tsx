"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * `prefers-reduced-motion`, pero seguro para la hidratación: en el servidor y en el
 * primer render del cliente devuelve false, y se actualiza justo después.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

/**
 * Desplaza su contenido en Y mientras cruza el viewport.
 * `speed` positivo = se mueve más lento que el scroll (se queda atrás, capa de fondo);
 * negativo = más rápido (capa de primer plano).
 */
export function Parallax({
  children,
  speed = 0.2,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}%`, `${speed * 100}%`]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/** Progreso de scroll suavizado con muelle, para que las capas no vayan "a tirones". */
export function useSmooth(value: MotionValue<number>) {
  return useSpring(value, { stiffness: 120, damping: 30, mass: 0.4 });
}
