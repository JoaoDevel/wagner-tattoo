/**
 * Clases Tailwind centralizadas. Edita aquí para cambiar el visual del sitio.
 * Solo utilidades estándar — reconocidas por el IDE y Tailwind v4.
 */

export const layout = {
  page: "bg-black text-white",
  container: "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12",
  navbarHeight: "h-[4.5rem]",
  navbarPaddingTop: "pt-[4.5rem]",
} as const;

export const navbar = {
  wrapper: "border-b border-transparent bg-transparent",
  logo: "text-xs font-bold uppercase tracking-widest text-white md:hidden",
  link: "text-[10px] uppercase tracking-[0.2em] text-white/90 transition-colors duration-300 hover:text-white",
  mobileLink:
    "text-sm uppercase tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-70",
  menuIcon: "h-px w-6 bg-white transition-all duration-300",
  mobileMenu:
    "fixed inset-0 z-[110] flex flex-col bg-black transition-all duration-500 lg:hidden",
  menuButton: "relative z-50 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden",
} as const;

export const button = {
  base: "inline-flex items-center justify-center font-semibold uppercase transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  solid:
    "border border-white bg-white text-black hover:bg-transparent hover:text-white focus-visible:outline-white",
  outline:
    "border border-white bg-transparent text-white hover:bg-white hover:text-black focus-visible:outline-white",
  dark:
    "border border-black bg-black text-white hover:bg-transparent hover:text-black focus-visible:outline-black",
  sm: "px-4 py-2 text-[10px] tracking-[0.18em]",
  md: "px-5 py-2.5 text-[10px] tracking-[0.2em] sm:text-[11px]",
} as const;

export const gallery = {
  section:
    "relative overflow-hidden bg-white py-16 text-black sm:py-20 lg:py-24",
  watermark:
    "pointer-events-none absolute left-1/2 top-[38%] z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(4rem,22vw,13rem)] font-extrabold uppercase leading-none tracking-tighter text-neutral-200",
  grid: "relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
  card: "group relative aspect-[3/4] w-full overflow-hidden border border-black/10 bg-white shadow-md",
  cardImage:
    "object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105",
  footer:
    "relative z-10 mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:items-end lg:gap-12",
  title: "!text-black sm:text-5xl lg:text-6xl",
  description:
    "max-w-md text-[10px] uppercase leading-relaxed tracking-[0.14em] !text-black sm:text-[11px]",
} as const;

export const hero = {
  section:
    "relative flex min-h-screen items-center justify-center overflow-x-clip bg-black pt-[4.5rem]",
  title:
    "inline-block px-8 py-1 text-center text-[clamp(1.25rem,calc((100vw-5rem)/12.5),5.25rem)] font-extrabold uppercase leading-[1.12] tracking-tight text-white whitespace-nowrap drop-shadow-lg",
  caption:
    "text-[11px] leading-relaxed text-white drop-shadow-md",
} as const;
