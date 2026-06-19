import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { products, getProductBySlug } from "@/data/products";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "recursos" });
  const products = t.raw("products") as Record<string, { title: string; description: string }>;
  const product = products[slug];
  if (!product) return {};
  return { title: `${product.title} — EduKata`, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Nav />
      <ProductPageContent slug={slug} product={product} />
      <Footer />
    </>
  );
}

function ProductPageContent({
  slug,
  product,
}: {
  slug: string;
  product: ReturnType<typeof getProductBySlug> & object;
}) {
  const t = useTranslations("recursos");
  const allProducts = t.raw("products") as Record<
    string,
    { title: string; description: string; longDescription: string }
  >;
  const data = allProducts[slug];
  if (!data) notFound();

  const includedItems = [
    "Guía en PDF de alta calidad (imprimible)",
    "Listas de verificación prácticas",
    "Estrategias basadas en evidencia",
    "Acceso inmediato tras la compra",
  ];

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="bg-gray-soft border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-navy">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/recursos" className="hover:text-navy">{t("title")}</Link>
          <span className="mx-2">/</span>
          <span className="text-navy font-medium">{data.title}</span>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Book cover */}
          <div className="sticky top-24">
            <div
              className="rounded-2xl aspect-[3/4] flex flex-col items-center justify-center text-white text-center p-8 shadow-xl"
              style={{ backgroundColor: product!.color }}
            >
              <span className="text-8xl mb-6">{product!.icon}</span>
              <h2 className="text-xl font-bold leading-snug mb-2">{data.title}</h2>
              <p className="text-sm opacity-80">EduKata</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              {t("instantDownload")}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold text-navy mb-3 leading-tight">{data.title}</h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">{data.description}</p>

            {/* Price + buy */}
            <div className="bg-gray-soft rounded-xl p-6 mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-navy">${product!.price.toFixed(2)}</span>
                <span className="text-gray-400 text-sm">USD</span>
              </div>
              <a
                href={product!.buyUrl}
                className="block w-full text-center bg-sage hover:bg-sage-dark text-white py-4 rounded-lg text-lg font-bold transition-colors mb-3"
              >
                {t("buyNow")}
              </a>
              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Pago seguro · Descarga inmediata
              </p>
            </div>

            {/* Long description */}
            <h2 className="text-xl font-bold text-navy mb-3">Sobre esta guía</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{data.longDescription}</p>

            {/* What's included */}
            <h2 className="text-xl font-bold text-navy mb-3">¿Qué incluye?</h2>
            <ul className="space-y-2 mb-8">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-sage shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Back link */}
            <Link
              href="/recursos"
              className="inline-flex items-center gap-2 text-navy font-medium hover:underline text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ver todos los recursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
