"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GOOGLE_FORM_VIEW, INSTAGRAM_URL } from "@/lib/datos";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#asesoria", label: "Asesoría online" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // resalta el enlace de la sección que ocupa el centro de la pantalla
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-void/85 border-b border-line-d py-3 backdrop-blur-xl"
            : "bg-gradient-to-b from-void/80 to-transparent py-5"
        }`}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-blue via-blue-soft to-ember"
        />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo-ag.png`}
              alt="AG — Alex García"
              className="h-9 w-9 rounded-lg shadow-[0_0_16px_rgba(29,78,216,0.55)]"
            />
            <span className="font-display text-sm font-bold tracking-[0.08em] text-white-soft">
              ALEX<span className="text-blue-soft">·</span>GARCÍA
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  active === l.href ? "text-white-soft" : "text-muted-d hover:text-white-soft"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white-soft transition hover:border-white/30 hover:bg-white/10"
              aria-label="Instagram de Alex García"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={GOOGLE_FORM_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-br from-blue to-blue-soft px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_6px_22px_-8px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5"
            >
              Empezar ahora
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label="Abrir menú"
          >
            <div className="flex w-[22px] flex-col gap-[5px]">
              <span className="h-[2px] w-full rounded bg-white-soft" />
              <span className="h-[2px] w-full rounded bg-white-soft" />
              <span className="h-[2px] w-3/4 rounded bg-white-soft" />
            </div>
          </button>
        </div>
      </header>

      {/* Panel móvil */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-xs flex-col gap-1 bg-[#070a13] p-6 shadow-2xl transition-transform duration-400 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo-ag.png`}
              alt="AG — Alex García"
              className="h-8 w-8 rounded-lg shadow-[0_0_14px_rgba(29,78,216,0.5)]"
            />
            <span className="font-display text-[13px] font-bold tracking-[0.08em] text-white-soft">
              ALEX<span className="text-blue-soft">·</span>GARCÍA
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white-soft"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-white-soft transition hover:bg-white/5"
          >
            {l.label}
          </a>
        ))}
        <a
          href={GOOGLE_FORM_VIEW}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-full bg-gradient-to-br from-blue to-blue-soft px-5 py-3.5 text-center text-[14px] font-bold text-white"
        >
          Empezar ahora
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full border border-white/15 px-5 py-3.5 text-center text-[14px] font-bold text-white-soft"
        >
          Instagram @alex_gj8
        </a>
      </div>
    </>
  );
}
