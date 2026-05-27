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
    "relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24",
  watermark:
    "pointer-events-none absolute left-1/2 top-[38%] z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(4rem,22vw,13rem)] font-extrabold uppercase leading-none tracking-tighter text-white/10",
  grid: "relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
  card: "group relative aspect-[3/4] w-full overflow-hidden border border-white/15 bg-white/5 shadow-md",
  cardImage:
    "object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105",
  footer:
    "relative z-10 mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:items-end lg:gap-12",
  title: "!text-white sm:text-5xl lg:text-6xl",
  description:
    "max-w-md text-[10px] uppercase leading-relaxed tracking-[0.14em] !text-white/80 sm:text-[11px]",
} as const;

export const hero = {
  section:
    "relative z-20 flex min-h-screen items-center justify-center overflow-visible bg-black pt-[4.5rem]",
  title:
    "inline-block px-8 py-1 text-center text-[clamp(1.25rem,calc((100vw-5rem)/12.5),5.25rem)] font-extrabold uppercase leading-[1.12] tracking-tight text-white whitespace-nowrap drop-shadow-lg",
  caption:
    "text-[11px] leading-relaxed text-white drop-shadow-md",
} as const;

export const about = {
  section: "bg-black text-white",
  grid:
    "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16",
  left: "lg:col-span-5",
  right: "lg:col-span-7",
  portraitCard:
    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl",
  portraitMedia: "relative aspect-[3/4] w-full",
  portraitImage:
    "object-cover object-center grayscale contrast-125 saturate-0",
  portraitTopTitle:
    "pointer-events-none absolute right-6 top-6 z-10 max-w-[62%] text-right text-[clamp(2rem,4.8vw,4rem)] font-semibold leading-[0.92] tracking-tight text-white/95",
  portraitName:
    "pointer-events-none absolute bottom-4 left-5 z-10 text-[clamp(3rem,8vw,5.2rem)] font-semibold leading-none tracking-tight text-white/90",
  portraitVignette:
    "pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent",
  sectionLabel:
    "text-[10px] uppercase tracking-[0.25em] text-white/55",
  headline:
    "text-[clamp(2.2rem,5.5vw,3.75rem)] font-semibold leading-[0.95] tracking-tight text-white",
  bullets: "mt-3 flex max-w-[42rem] flex-col gap-5 lg:mt-1",
  bulletRow: "flex gap-3",
  bulletIcon:
    "mt-0.5 shrink-0 text-base leading-none text-white/75",
  bulletText: "text-[11px] leading-relaxed text-white/72",
  bottomGrid:
    "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-12 sm:items-end",
  workCard:
    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl sm:col-span-9",
  workMedia: "relative aspect-[16/9] w-full",
  workImage:
    "object-cover object-center grayscale transition-transform duration-500 group-hover:scale-[1.03]",
  badge:
    "inline-flex max-w-[8rem] -rotate-6 items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-[10px] uppercase tracking-[0.05em] text-black shadow-lg sm:col-span-3 sm:justify-self-end",
} as const;

export const booking = {
  section: "bg-black text-white",
  sectionTitle: "mb-8 text-white sm:mb-10 sm:text-5xl lg:mb-12 lg:text-6xl",
  intro:
    "shrink-0 text-[clamp(0.75rem,1.2vw,0.9rem)] leading-relaxed text-white/80",
  layout:
    "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:min-h-[34rem]",
  leftCol: "flex h-full min-h-[26rem] flex-col lg:min-h-0",
  leftPanel: "flex h-full min-h-0 flex-col justify-start",
  infoList: "mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5",
  rightCol: "flex h-full min-h-0 flex-col",
  infoCard:
    "flex shrink-0 items-center gap-4 rounded-3xl border border-white/15 bg-white/[0.02] px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:px-6 sm:py-5",
  infoIconWrap:
    "mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-black/35",
  infoTitle:
    "text-[12px] font-semibold text-white",
  infoValue: "mt-1 text-[13px] leading-relaxed text-white/72",
  formCard:
    "flex h-full min-h-[26rem] flex-col rounded-3xl border border-white/15 bg-white/[0.01] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-5 lg:min-h-full",
  label:
    "mb-2 block text-[11px] font-medium text-white/80",
  input:
    "min-h-[3.25rem] w-full rounded-3xl border border-white/20 bg-black/35 px-4 py-3 text-sm text-white placeholder:text-white/28 outline-none transition-colors focus:border-white/60 sm:min-h-[3.5rem]",
  textarea:
    "min-h-0 w-full flex-1 resize-none rounded-3xl border border-white/20 bg-black/35 px-4 py-4 text-sm text-white placeholder:text-white/28 outline-none transition-colors focus:border-white/60",
  textareaField: "flex min-h-0 flex-1 flex-col",
  submit:
    "mt-4 inline-flex w-full items-center justify-center rounded-full border border-white bg-white px-6 py-2.5 text-[11px] font-medium text-black transition-all duration-300 hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
} as const;

export const contacts = {
  section: "bg-black text-white",
  title:
    "text-white text-[clamp(2rem,5.5vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-[2.75rem]",
  details:
    "mt-10 flex flex-col gap-1 sm:mt-12 sm:gap-1.5 lg:mt-14",
  line:
    "text-[11px] uppercase leading-[1.55] tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.16em]",
  link: "transition-opacity duration-300 hover:opacity-70",
} as const;
