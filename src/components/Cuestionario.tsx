"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { GOOGLE_FORM_EMBED, GOOGLE_FORM_VIEW } from "@/lib/datos";

const PIDE = ["Objetivo", "Nivel actual", "Historial", "Disponibilidad", "Material"];

export function Cuestionario() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="cuestionario" className="relative -mt-10 overflow-hidden rounded-t-[40px] bg-paper py-32">
      <Parallax speed={0.4} className="pointer-events-none absolute -left-8 top-0 select-none">
        <span aria-hidden className="poster block text-[26vw] text-outline-light">Paso</span>
      </Parallax>
      <Parallax speed={-0.25} className="pointer-events-none absolute -right-6 bottom-0 select-none">
        <span aria-hidden className="poster block text-[26vw] text-outline-light">Uno</span>
      </Parallax>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue">
            <span className="h-[1.5px] w-6 bg-blue" />
            Primer paso
          </span>
          <h2 className="poster text-[52px] text-ink sm:text-[80px]">Cuestionario de cliente</h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            Antes de diseñar tu plan necesito conocerte. Rellena el
            cuestionario y me pongo en contacto contigo.
          </p>

          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
            {PIDE.map((t) => (
              <li key={t} className="rounded-full border border-line-l bg-white px-4 py-2 text-[13px] font-semibold text-ink">
                {t}
              </li>
            ))}
          </ul>

          {!showForm ? (
            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-bold text-white shadow-[0_14px_34px_-14px_rgba(13,17,32,0.7)] transition hover:-translate-y-0.5 hover:bg-blue"
              >
                Ver cuestionario aquí
              </button>
              <a
                href={GOOGLE_FORM_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line-l bg-white px-7 py-4 text-[15px] font-bold text-ink transition hover:border-blue hover:text-blue"
              >
                Abrir en Google Forms
              </a>
            </div>
          ) : (
            <div className="mt-10 overflow-hidden rounded-3xl border border-line-l bg-white shadow-[0_30px_70px_-30px_rgba(13,17,32,0.35)]">
              <iframe
                src={GOOGLE_FORM_EMBED}
                title="Cuestionario de cliente — Alex García"
                width="100%"
                height="900"
                className="block w-full"
                data-lenis-prevent
              >
                Cargando…
              </iframe>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
