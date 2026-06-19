"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products, type Category } from "@/data/products";

type Filter = "all" | Category;

interface ProductData {
  title: string;
  description: string;
}

interface Props {
  productData: Record<string, ProductData>;
}

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "filterAll" },
  { key: "cognition", label: "filterCognition" },
  { key: "caregiver", label: "filterCaregiver" },
  { key: "daily", label: "filterDaily" },
  { key: "communication", label: "filterCommunication" },
];

export default function ProductGrid({ productData }: Props) {
  const t = useTranslations("recursos");
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visible = products.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeFilter === key
                ? "bg-navy text-white border-navy"
                : "bg-white text-gray-600 border-gray-300 hover:border-navy hover:text-navy"
            }`}
          >
            {t(label)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visible.map((product) => {
          const data = productData[product.slug];
          if (!data) return null;
          return (
            <div
              key={product.slug}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col bg-white"
            >
              {/* Cover */}
              <div
                className="h-48 flex flex-col items-center justify-center p-5 text-white text-center"
                style={{ backgroundColor: product.color }}
              >
                <span className="text-5xl mb-3">{product.icon}</span>
                <p className="text-sm font-semibold leading-snug">{data.title}</p>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-navy text-base mb-2 leading-snug">
                  {data.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {data.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-navy">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-sage flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    PDF
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/recursos/${product.slug}`}
                    className="flex-1 text-center border border-navy text-navy py-2 rounded-lg text-sm font-medium hover:bg-gray-soft transition-colors"
                  >
                    {t("viewGuide")}
                  </Link>
                  <a
                    href={product.buyUrl}
                    className="flex-1 text-center bg-sage text-white py-2 rounded-lg text-sm font-semibold hover:bg-sage-dark transition-colors"
                  >
                    {t("buyNow")}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="text-center text-gray-400 py-20 text-lg">No hay recursos en esta categoría todavía.</p>
      )}
    </>
  );
}
