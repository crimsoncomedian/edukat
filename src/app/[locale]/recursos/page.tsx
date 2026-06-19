import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function RecursosPage() {
  const t = useTranslations("recursos");

  const productData = t.raw("products") as Record<
    string,
    { title: string; description: string; longDescription: string }
  >;

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-navy text-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl font-bold mb-3">{t("title")}</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
          </div>
        </section>

        {/* Trust strip */}
        <div className="bg-gray-soft border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {[
              { icon: "⬇️", text: t("instantDownload") },
              { icon: "🛡️", text: "Contenido verificado por expertos" },
              { icon: "💳", text: "Pago seguro" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ProductGrid productData={productData} />
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-navy py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {useTranslations("newsletter")("title")}
              </h2>
              <p className="text-blue-200">
                {useTranslations("newsletter")("description")}
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={useTranslations("newsletter")("placeholder")}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage"
              />
              <button
                type="submit"
                className="bg-sage hover:bg-sage-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {useTranslations("newsletter")("button")}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
