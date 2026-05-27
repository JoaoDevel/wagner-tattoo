"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { layout, navbar } from "@/constants/classes";
import { navCtas, navLinks } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAtTop, setShowAtTop] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const threshold = 12;
    const onScroll = () => {
      const y = window.scrollY || 0;
      setShowAtTop(y <= threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-navbar"
      className={`site-navbar ${navbar.wrapper}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: showAtTop || menuOpen ? "translateY(0)" : "translateY(-120%)",
        opacity: showAtTop || menuOpen ? 1 : 0,
        transition: "transform 180ms ease-out, opacity 180ms ease-out",
      }}
    >
      <Container
        className={cn(
          "flex items-center justify-between gap-4",
          layout.navbarHeight,
        )}
      >
        <Link href="#hero" className={navbar.logo}>
          Blindreason
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex lg:gap-8 xl:gap-10"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navbar.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 sm:gap-3 lg:flex">
          {navCtas.map((cta) => (
            <Button
              key={cta.href}
              href={cta.href}
              variant={cta.variant}
              size="sm"
            >
              {cta.label}
            </Button>
          ))}
        </div>

        <button
          type="button"
          className={navbar.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              navbar.menuIcon,
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(navbar.menuIcon, menuOpen && "opacity-0")}
          />
          <span
            className={cn(
              navbar.menuIcon,
              menuOpen && "translate-y-[-7px] -rotate-45",
            )}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          navbar.mobileMenu,
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <Container
          className={cn(
            "flex flex-1 flex-col justify-center gap-10",
            layout.navbarPaddingTop,
          )}
        >
          <nav className="flex flex-col gap-6" aria-label="Menú móvil">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  navbar.mobileLink,
                  "opacity-0 animate-fade-in-up",
                  menuOpen && "opacity-100",
                )}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            {navCtas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.variant}
                className="w-full justify-center"
                onClick={closeMenu}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
