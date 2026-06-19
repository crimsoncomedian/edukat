import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

const productColors = [
  { bg: "#3D6B5C", icon: "🧠" },
  { bg: "#2C5282", icon: "💬" },
  { bg: "#C8956C", icon: "🌿" },
  { bg: "#6B7280", icon: "🕐" },
];

export default async function HomePage() {
  const t = await getTranslations();
  const nt = await getTranslations("newsletter");

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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/hero.png"
                alt="Cuidadora con adulto mayor"
                fill
                className="object-cover"
                priority
              />
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 md:order-1">
              <Image
                src="/family.png"
                alt="Familia cuidando a adulto mayor"
                fill
                className="object-cover"
              />
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
        <NewsletterSection
          title={nt("title")}
          description={nt("description")}
          placeholder={nt("placeholder")}
          button={nt("button")}
        />
      </main>

      <Footer />
    </>
  );
}
