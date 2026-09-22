import { Reveal } from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/datos";

export function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-void py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-start gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/alex-foto.png"
                alt="Alex García, coach online"
                className="h-full w-full object-cover object-[50%_20%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-blue-soft">
              <span className="h-[1.5px] w-4.5 bg-blue-soft" />
              Sobre mí
            </span>
            <h2 className="text-[30px] font-semibold text-white-soft sm:text-[38px]">
              Alex García
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted-d">
              Coach online especializado en culturismo natural y Muay Thai,
              entrenando de la mano de JGS Fight Team. Ayudo a mis clientes a
              construir su mejor versión con un programa de entrenamiento
              personalizado, adaptado a su objetivo, su nivel y su
              disponibilidad — y ajustado cada semana para que el progreso no
              se detenga.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-d">
              El plan se adapta a tu vida, no al revés: entrenes donde
              entrenes, el seguimiento es el mismo.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-6 py-3.5 text-[14px] font-bold text-white-soft transition hover:border-blue-soft hover:bg-blue-soft/10"
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
