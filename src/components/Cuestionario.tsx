"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { GOOGLE_FORM_EMBED, GOOGLE_FORM_VIEW } from "@/lib/datos";

export function Cuestionario() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="cuestionario" className="bg-paper py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-blue">
            <span className="h-[1.5px] w-4.5 bg-blue" />
            Primer paso
          </span>
          <h2 className="text-[28px] font-semibold text-ink sm:text-[36px]">
            Cuestionario de cliente
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
            Antes de diseñar tu plan necesito conocerte: tu objetivo, tu
            nivel actual, tu historial y tu disponibilidad. Rellena el
            cuestionario y me pongo en contacto contigo.
          </p>

          {!showForm ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.5)] transition hover:-translate-y-0.5"
              >
                Ver cuestionario aquí
              </button>
              <a
                href={GOOGLE_FORM_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line-l px-7 py-4 text-[15px] font-bold text-ink transition hover:border-blue hover:text-blue"
              >
                Abrir en Google Forms
              </a>
            </div>
          ) : (
            <div className="mt-10 overflow-hidden rounded-2xl border border-line-l bg-white shadow-[0_30px_70px_-30px_rgba(13,17,32,0.35)]">
              <iframe
                src={GOOGLE_FORM_EMBED}
                title="Cuestionario de cliente — Alex García"
                width="100%"
                height="900"
                className="block w-full"
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
