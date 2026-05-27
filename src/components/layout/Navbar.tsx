"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { layout, navbar } from "@/constants/classes";
import { navCtas, navLinks } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      // Reinicia cuando vuelves al inicio
      if (y < 10) {
        setHideOnScroll(false);
        lastScrollY.current = y;
        return;
      }

      const goingDown = y > lastScrollY.current;
      lastScrollY.current = y;

      // Solo ocultar al bajar (y no si el menú está abierto)
      if (goingDown && !menuOpen) setHideOnScroll(true);
      if (!goingDown || menuOpen) setHideOnScroll(false);
    };

    lastScrollY.current = window.scrollY || 0;
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const shouldHide = hideOnScroll && !menuOpen;

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
        transform: shouldHide ? "translateY(-110%)" : "translateY(0)",
        opacity: shouldHide ? 0 : 1,
        transition: "transform 220ms ease-out, opacity 220ms ease-out",
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
