import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-xl text-gray-600 mb-8">{t("subtitle")}</p>
      <div className="flex gap-4">
        <Link href="/" locale="es" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Español
        </Link>
        <Link href="/" locale="en" className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">
          English
        </Link>
      </div>
    </main>
  );
}
