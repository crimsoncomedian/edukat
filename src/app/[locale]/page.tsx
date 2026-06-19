import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const productColors = [
  { bg: "#3D6B5C", icon: "🧠" },
  { bg: "#2C5282", icon: "💬" },
  { bg: "#C8956C", icon: "🌿" },
  { bg: "#6B7280", icon: "🕐" },
];

export default function HomePage() {
  const t = useTranslations();

  const products = t.raw("popular.products") as Array<{
    slug: string;
    title: string;
    description: string;
    price: string;
  }>;

  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-4">
                {t("hero.headline1")}<br />{t("hero.headline2")}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
                {t("hero.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/recursos"
                  className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {t("hero.cta_primary")}
                </Link>
                <a
                  href="#how-it-helps"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-soft transition-colors text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t("hero.cta_secondary")}
                </a>
              </div>
            </div>
            {/* Hero image placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-sage/20 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👩‍👴</div>
                <p className="text-navy/40 text-sm font-medium">Imagen del héroe</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUE PROPS ── */}
        <section className="bg-gray-soft border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "⬇️", title: t("valueProps.title1"), desc: t("valueProps.desc1") },
                { icon: "🛡️", title: t("valueProps.title2"), desc: t("valueProps.desc2") },
                { icon: "👨‍👩‍👧", title: t("valueProps.title3"), desc: t("valueProps.desc3") },
                { icon: "📄", title: t("valueProps.title4"), desc: t("valueProps.desc4") },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center gap-2">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-semibold text-navy text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POPULAR RESOURCES ── */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy mb-2">{t("popular.title")}</h2>
              <p className="text-gray-500 text-lg">{t("popular.subtitle")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {products.map((product, i) => (
                <div key={product.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  {/* Book cover placeholder */}
                  <div
                    className="h-44 flex flex-col items-center justify-center p-4 text-white text-center"
                    style={{ backgroundColor: productColors[i].bg }}
                  >
                    <span className="text-4xl mb-2">{productColors[i].icon}</span>
                    <p className="text-sm font-semibold leading-snug">{product.title}</p>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-navy text-sm mb-1">{product.title}</h3>
                    <p className="text-gray-500 text-sm leading-snug flex-1 mb-3">{product.description}</p>
                    <p className="font-bold text-navy text-lg mb-3">{product.price}</p>
                    <Link
                      href={`/recursos/${product.slug}`}
                      className="block text-center bg-sage text-white py-2 rounded-lg text-sm font-semibold hover:bg-sage-dark transition-colors"
                    >
                      {t("popular.viewGuide")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/recursos"
                className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
              >
                {t("popular.browseAll")}
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY FAMILIES TRUST ── */}
        <section id="how-it-helps" className="bg-gray-soft py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy/10 to-sage/20 aspect-[4/3] flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👴👵</div>
                <p className="text-navy/40 text-sm font-medium">Imagen de familia</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-navy mb-8">{t("trust.title")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "👤", title: t("trust.point1_title"), desc: t("trust.point1_desc") },
                  { icon: "🎯", title: t("trust.point2_title"), desc: t("trust.point2_desc") },
                  { icon: "❤️", title: t("trust.point3_title"), desc: t("trust.point3_desc") },
                  { icon: "⏱️", title: t("trust.point4_title"), desc: t("trust.point4_desc") },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="bg-navy py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-4">
              <svg className="w-12 h-12 text-sage shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t("newsletter.title")}</h2>
                <p className="text-blue-200 leading-relaxed">{t("newsletter.description")}</p>
              </div>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage text-base"
                />
                <button
                  type="submit"
                  className="bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  {t("newsletter.button")}
                </button>
              </form>
              <p className="text-blue-300 text-xs mt-2">{t("newsletter.disclaimer")}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
