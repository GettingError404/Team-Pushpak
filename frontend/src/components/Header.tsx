// frontend/src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Notices", href: "#notices" },
  { label: "Contact", href: "#contact" },
];

const Hamburger = ({ open }: { open: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
    <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() => localStorage.getItem("tp-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("tp-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="fixed w-full z-50 top-0">
      <div className="backdrop-blur glass border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400"
          >
            Team Pushpak
          </motion.a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium hover:underline hover:underline-offset-4 transition"
              >
                {n.label}
              </a>
            ))}

            <button
              onClick={() => setDark((s) => !s)}
              aria-label="Toggle theme"
              className="ml-2 px-3 py-1 rounded-md ring-1 ring-white/10"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setDark((s) => !s)} className="px-2 py-1 rounded-md ring-1 ring-white/10">
              {dark ? "☀️" : "🌙"}
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md ring-1 ring-white/6"
            >
              <Hamburger open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="md:hidden">
            <div className="px-6 pb-6 flex flex-col gap-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="py-2 border-b border-white/4">
                  {n.label}
                </a>
              ))}
              <div className="pt-3">
                <button onClick={() => setDark((s) => !s)} className="px-4 py-2 rounded-md w-full">
                  {dark ? "Switch to light" : "Switch to dark"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
