import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import NewsletterSection from "@/components/NewsletterSection";

export default async function RecursosPage() {
  const t = await getTranslations("recursos");
  const nt = await getTranslations("newsletter");

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

        {/* Newsletter */}
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
