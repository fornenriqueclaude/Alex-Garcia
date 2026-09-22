import { Reveal } from "./Reveal";

const PASOS = [
  {
    title: "Cuestionario inicial",
    text: "Rellenas el cuestionario de cliente: objetivo, nivel, historial, disponibilidad y material del que dispones.",
  },
  {
    title: "Plan a tu medida",
    text: "Diseño tu programa de entrenamiento personalizado a partir de esas respuestas — nada de plantillas genéricas.",
  },
  {
    title: "Seguimiento semanal",
    text: "Reviso tu progreso y ajusto cargas, volumen e intensidad cada semana según cómo responde tu cuerpo.",
  },
  {
    title: "Progresas donde estés",
    text: "Entrenas desde cualquier lugar, con comunicación directa conmigo para resolver dudas en el camino.",
  },
];

export function ComoTrabajo() {
  return (
    <section id="como-trabajo" className="bg-paper py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-blue">
            <span className="h-[1.5px] w-4.5 bg-blue" />
            Cómo trabajo
          </span>
          <h2 className="text-[30px] font-semibold text-ink sm:text-[40px]">
            De cero a tu plan, en cuatro pasos
          </h2>
        </Reveal>

        <div className="relative pl-1">
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-line-l" />
          {PASOS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="relative mb-12 grid grid-cols-[48px_1fr] gap-6 last:mb-0">
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-line-l bg-white font-display text-[15px] font-bold text-blue">
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1.5 text-[19px] font-semibold text-ink">{p.title}</h3>
                <p className="max-w-md text-[15px] text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
