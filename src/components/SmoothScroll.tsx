"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Scroll con inercia (Lenis). Se desactiva si el usuario prefiere menos movimiento. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      autoRaf: true,
      anchors: true, // el desfase de la barra fija sale de scroll-margin-top (globals.css)
      // el formulario embebido gestiona su propio scroll
      prevent: (node) => node.tagName === "IFRAME",
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
