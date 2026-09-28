import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { GOOGLE_FORM_VIEW } from "@/lib/datos";

const INCLUYE = [
  "Programa de entrenamiento 100% personalizado",
  "Adaptado a tu objetivo, tu nivel y tu disponibilidad",
  "Ajustes semanales según tu progreso real",
  "Entrena desde cualquier lugar: casa, gimnasio o box",
  "Contacto directo conmigo para dudas y feedback",
];

export function Asesoria() {
  return (
    <section id="asesoria" className="relative -mt-10 overflow-hidden rounded-t-[40px] bg-void py-32">
      <Parallax speed={0.3} className="pointer-events-none absolute inset-x-0 top-0 flex justify-center select-none">
        <span aria-hidden className="poster text-[46vw] leading-none text-outline opacity-60">1:1</span>
      </Parallax>
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue/20 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-blue-soft">
              <span className="h-[1.5px] w-6 bg-blue-soft" />
              Asesoría online 1:1
            </span>
            <h2 className="poster text-[52px] text-white-soft sm:text-[76px]">
              Contigo en
              <br />
              <span className="bg-gradient-to-r from-blue-soft to-white-soft bg-clip-text text-transparent">
                cada paso
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted-d">
              Mis asesorías online están pensadas para que progreses estés
              donde estés, con un plan profesional que se adapta a ti — y no
              al revés.
            </p>

            <a
              href={GOOGLE_FORM_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5"
            >
              Solicitar mi asesoría
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          <Parallax speed={-0.08}>
            <div role="list" className="flex flex-col gap-3">
              {INCLUYE.map((item, i) => (
                <Reveal key={item} delay={i * 0.07}>
                  <div role="listitem" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-md transition hover:border-blue-soft/50 hover:bg-blue-soft/[0.07]">
                    <span className="font-display text-[13px] font-bold text-blue-soft/70 transition group-hover:text-blue-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-white-soft/90">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
