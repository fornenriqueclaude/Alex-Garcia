import { GOOGLE_FORM_VIEW, INSTAGRAM_HANDLE, INSTAGRAM_URL, MUAY_THAI_TEAM_HANDLE, MUAY_THAI_TEAM_URL } from "@/lib/datos";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-void pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3 sm:px-8">
        <div>
          <span className="font-display text-[13px] font-bold tracking-[0.08em] text-white-soft">
            ALEX<span className="text-blue-soft">·</span>GARCÍA
          </span>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-d">
            Coach online · Culturismo natural &amp; Muay Thai
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-[13px]">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-d">Secciones</span>
          <a href="#especialidades" className="text-white-soft/80 hover:text-white-soft">Especialidades</a>
          <a href="#como-trabajo" className="text-white-soft/80 hover:text-white-soft">Cómo trabajo</a>
          <a href="#asesoria" className="text-white-soft/80 hover:text-white-soft">Asesoría online</a>
          <a href="#sobre-mi" className="text-white-soft/80 hover:text-white-soft">Sobre mí</a>
        </nav>
        <div className="flex flex-col gap-2 text-[13px]">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-d">Contacto</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-soft hover:underline">
            {INSTAGRAM_HANDLE}
          </a>
          <a href={MUAY_THAI_TEAM_URL} target="_blank" rel="noopener noreferrer" className="text-white-soft/80 hover:text-white-soft">
            {MUAY_THAI_TEAM_HANDLE}
          </a>
          <a href={GOOGLE_FORM_VIEW} target="_blank" rel="noopener noreferrer" className="text-white-soft/80 hover:text-white-soft">
            Cuestionario de cliente
          </a>
        </div>
      </div>

      <div aria-hidden className="poster mt-14 select-none whitespace-nowrap text-center text-[19vw] leading-[0.75] text-white/[0.05]">
        Alex García
      </div>
    </footer>
  );
}
