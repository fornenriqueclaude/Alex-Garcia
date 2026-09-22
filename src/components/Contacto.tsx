import { Reveal } from "./Reveal";
import { GOOGLE_FORM_VIEW, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/datos";

export function Contacto() {
  return (
    <section id="contacto" className="bg-deep py-28">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-[30px] font-semibold text-white-soft sm:text-[40px]">
          ¿Listo para empezar?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-muted-d">
          Escríbeme por Instagram o rellena el cuestionario de cliente para
          que empecemos a construir tu plan.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href={GOOGLE_FORM_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue to-blue-soft px-7 py-4 text-[15px] font-bold text-white shadow-[0_10px_30px_-10px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5"
          >
            Rellenar cuestionario
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/20 px-7 py-4 text-[15px] font-bold text-white-soft transition hover:border-blue-soft hover:bg-blue-soft/10"
          >
            {INSTAGRAM_HANDLE} en Instagram
          </a>
        </div>
      </Reveal>
    </section>
  );
}
