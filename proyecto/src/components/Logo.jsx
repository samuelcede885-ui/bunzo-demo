/** Logotipo de la marca ficticia "Bunzo". Texto vivo + forma SVG: sin archivos externos. */
export default function Logo({ className = "", tone = "light", size = "md" }) {
  const sizes = { sm: "text-[1.7rem]", md: "text-[2.1rem]", lg: "text-[3.2rem]" };
  const fg = tone === "light" ? "text-cream" : "text-coal";
  return (
    <span className={`inline-flex items-center gap-2 ${fg} ${className}`} aria-label="Bunzo">
      <svg viewBox="0 0 48 48" className="size-[1.15em] shrink-0" aria-hidden="true" style={{ fontSize: "inherit" }}>
        <path d="M6 24c0-10 8-17 18-17s18 7 18 17H6Z" fill="var(--color-mustard)" />
        <rect x="5" y="27" width="38" height="5" rx="2.5" fill="var(--color-shack-hot)" />
        <path d="M7 35h34c0 4-4 7-9 7H16c-5 0-9-3-9-7Z" fill="var(--color-mustard)" />
        <circle cx="17" cy="16" r="1.6" fill="var(--color-coal)" />
        <circle cx="25" cy="13" r="1.6" fill="var(--color-coal)" />
        <circle cx="32" cy="17" r="1.6" fill="var(--color-coal)" />
      </svg>
      <span className={`display leading-none ${sizes[size]}`} aria-hidden="true">
        Bunzo
        <span className="ml-1 align-top text-[0.32em] tracking-[0.2em] text-mustard">BURGERS</span>
      </span>
    </span>
  );
}
