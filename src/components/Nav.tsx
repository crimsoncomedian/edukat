"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === "es" ? "en" : "es";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#1B3A5C"/>
            <path d="M8 22 L16 10 L24 22" stroke="#7A9E7E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 18 L21 18" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="8" r="2" fill="#7A9E7E"/>
          </svg>
          <span className="text-xl font-bold text-navy">EduKata</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-navy transition-colors">{t("home")}</Link>
          <Link href="/recursos" className="hover:text-navy transition-colors">{t("resources")}</Link>
          <Link href="/sobre-nosotros" className="hover:text-navy transition-colors">{t("about")}</Link>
          <Link href="/blog" className="hover:text-navy transition-colors">{t("blog")}</Link>
          <Link href="/contacto" className="hover:text-navy transition-colors">{t("contact")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={switchLocale}
            className="text-sm font-medium text-gray-500 hover:text-navy border border-gray-300 rounded px-2 py-1 transition-colors"
          >
            {otherLocale.toUpperCase()}
          </button>

          {/* Cart */}
          <button className="relative p-2 text-gray-600 hover:text-navy transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-sage text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>{t("home")}</Link>
          <Link href="/recursos" onClick={() => setMenuOpen(false)}>{t("resources")}</Link>
          <Link href="/sobre-nosotros" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>{t("blog")}</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>{t("contact")}</Link>
        </div>
      )}
    </header>
  );
}
