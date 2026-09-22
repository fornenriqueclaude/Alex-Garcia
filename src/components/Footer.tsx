import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/datos";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-[13px] font-bold tracking-[0.08em] text-white-soft">
          ALEX<span className="text-blue-soft">·</span>GARCÍA
        </span>
        <p className="text-[13px] text-muted-d">
          Coach online · Culturismo natural &amp; Muay Thai
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-blue-soft hover:underline"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </div>
    </footer>
  );
}
