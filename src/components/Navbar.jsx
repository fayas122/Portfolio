import { useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar({ lightMode, setLightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <header className="theme-nav fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 lg:px-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveLink("#home")}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="font-serif text-3xl italic tracking-tighter text-[#80e9ad]">
            MF
          </span>

          <span className="theme-heading hidden text-sm font-semibold sm:block">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`border-b pb-2 pt-2 text-[11px] font-medium transition ${
                activeLink === link.href
                  ? "border-[#80e9ad] text-[#80e9ad]"
                  : "border-transparent text-[var(--body-text)] hover:border-[#80e9ad] hover:text-[#80e9ad]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle appearance"
            className="theme-body rounded-full p-2 transition hover:bg-black/5 hover:text-[#80e9ad]"
          >
            {lightMode ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Download CV */}
          <a
            href={personalInfo.resume}
            download
            className="theme-body hidden items-center gap-2 rounded-full border border-[#7da98b]/70 px-4 py-2 text-[10px] transition hover:bg-[#80e9ad] hover:text-[#08110c] sm:flex"
          >
            <Download size={13} />
            Download CV
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="theme-heading rounded-lg p-2 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="theme-surface theme-heading border-t px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMenuOpen(false);
              }}
              className={`mb-1 block rounded-lg border-l-2 px-3 py-3 text-sm transition ${
                activeLink === link.href
                  ? "border-[#80e9ad] bg-black/5 text-[#80e9ad]"
                  : "border-transparent hover:bg-black/5 hover:text-[#80e9ad]"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Download CV */}
          <a
            href={personalInfo.resume}
            download
            className="mt-2 flex items-center gap-2 px-3 py-3 text-sm text-[#80e9ad]"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}