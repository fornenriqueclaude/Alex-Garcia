import { Reveal } from "./Reveal";

export function Manifiesto() {
  return (
    <section className="bg-deep py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-7 h-0.5 w-11 bg-blue" />
        <p className="font-display text-[24px] font-semibold leading-snug text-white-soft sm:text-[32px]">
          No se trata de un plan genérico. Se trata de{" "}
          <span className="text-blue-soft">tu</span> plan: tu objetivo, tu
          nivel y tu disponibilidad, con ajustes cada semana.
        </p>
      </Reveal>
    </section>
  );
}
