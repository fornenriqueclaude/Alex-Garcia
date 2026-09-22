import { Reveal } from "./Reveal";
import { MUAY_THAI_TEAM_HANDLE, MUAY_THAI_TEAM_URL } from "@/lib/datos";

const ESPECIALIDADES = [
  {
    n: "01",
    title: "Culturismo natural",
    text: "Desarrollo de fuerza y físico basado en progresión de cargas, técnica y constancia — sin atajos ni sustancias. Entrenamiento estructurado para que cada sesión sume hacia tu objetivo.",
  },
  {
    n: "02",
    title: "Muay Thai",
    text: "Preparación física y técnica orientada al combate, de la mano de JGS Fight Team. Trabajo de condición, potencia y movilidad aplicado al ring.",
  },
];

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-void py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-blue-soft">
            <span className="h-[1.5px] w-4.5 bg-blue-soft" />
            Especialidades
          </span>
          <h2 className="text-[30px] font-semibold text-white-soft sm:text-[40px]">
            Dos mundos, un mismo método
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {ESPECIALIDADES.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-deep2 to-deep p-9 transition hover:border-blue-soft/50">
                <span className="font-display text-5xl font-bold text-white/10">
                  {e.n}
                </span>
                <h3 className="mt-5 text-[22px] font-semibold text-white-soft">
                  {e.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-d">
                  {e.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6 text-center text-[13.5px] text-muted-d">
          Muay Thai en colaboración con{" "}
          <a
            href={MUAY_THAI_TEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-soft hover:underline"
          >
            {MUAY_THAI_TEAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
