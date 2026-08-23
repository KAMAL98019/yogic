"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <a href="#home" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Sri Sai Ram Homeopathy Clinic"
            width={160}
            height={72}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-dim hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="!px-6 !py-2.5 !text-sm">
            Contact Clinic
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-soft text-cream"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-t border-hairline"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-cream-dim border-b border-hairline last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-5">
                <Button href="#contact" variant="primary" className="w-full">
                  Contact Clinic
                </Button>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
