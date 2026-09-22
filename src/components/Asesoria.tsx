import { Reveal } from "./Reveal";
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
    <section id="asesoria" className="bg-void py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-blue-soft">
              <span className="h-[1.5px] w-4.5 bg-blue-soft" />
              Asesoría online 1:1
            </span>
            <h2 className="text-[30px] font-semibold text-white-soft sm:text-[38px]">
              Entrenamiento personalizado, contigo en cada paso
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted-d">
              Mis asesorías online están pensadas para que progreses estés
              donde estés, con un plan profesional que se adapta a ti — y no
              al revés.
            </p>

            <a
              href={GOOGLE_FORM_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5"
            >
              Solicitar mi asesoría
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-0 rounded-3xl border border-white/10 bg-gradient-to-br from-deep2 to-deep p-2">
              {INCLUYE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-white/5 px-6 py-5 text-[15px] text-muted-d last:border-none"
                >
                  <span className="mt-1.5 h-[6px] w-[6px] flex-shrink-0 rounded-full bg-blue-soft" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
