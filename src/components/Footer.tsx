import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="white" fillOpacity="0.1"/>
                <path d="M8 22 L16 10 L24 22" stroke="#7A9E7E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 18 L21 18" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="8" r="2" fill="#7A9E7E"/>
              </svg>
              <span className="text-lg font-bold">EduKata</span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">{t("tagline")}</p>
            <div className="flex gap-3">
              {/* Social icons */}
              {["facebook", "instagram", "email"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  {s === "facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  )}
                  {s === "instagram" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                  )}
                  {s === "email" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-200">{t("explore")}</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/recursos" className="hover:text-white transition-colors">{t("allResources")}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("cognition")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("caregiverSupport")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("dailyLiving")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("bundles")}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-200">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Help + Secure */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-200">{t("help")}</h4>
            <ul className="space-y-2 text-sm text-blue-100 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">{t("faq")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("terms")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("privacy")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("refund")}</a></li>
            </ul>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
              <svg className="w-5 h-5 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-xs font-semibold">{t("secureCheckout")}</p>
                <p className="text-xs text-blue-200">{t("secureCheckoutDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-blue-200">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
