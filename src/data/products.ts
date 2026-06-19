export type Category = "cognition" | "caregiver" | "daily" | "communication";

export interface Product {
  slug: string;
  price: number;
  category: Category;
  color: string;
  icon: string;
  buyUrl: string;
}

export const products: Product[] = [
  {
    slug: "cambios-de-memoria",
    price: 12,
    category: "cognition",
    color: "#3D6B5C",
    icon: "🧠",
    buyUrl: "#",
  },
  {
    slug: "comunicacion-efectiva",
    price: 15,
    category: "communication",
    color: "#2C5282",
    icon: "💬",
    buyUrl: "#",
  },
  {
    slug: "comportamientos-dificiles",
    price: 18,
    category: "caregiver",
    color: "#C8956C",
    icon: "🌿",
    buyUrl: "#",
  },
  {
    slug: "rutinas-diarias",
    price: 10,
    category: "daily",
    color: "#6B7280",
    icon: "🕐",
    buyUrl: "#",
  },
  {
    slug: "seguridad-en-el-hogar",
    price: 14,
    category: "daily",
    color: "#7A9E7E",
    icon: "🏠",
    buyUrl: "#",
  },
  {
    slug: "autocuidado-cuidador",
    price: 13,
    category: "caregiver",
    color: "#9B7EC8",
    icon: "❤️",
    buyUrl: "#",
  },
  {
    slug: "alimentacion-y-nutricion",
    price: 11,
    category: "daily",
    color: "#C8956C",
    icon: "🥗",
    buyUrl: "#",
  },
  {
    slug: "signos-de-alerta",
    price: 16,
    category: "cognition",
    color: "#1B3A5C",
    icon: "⚠️",
    buyUrl: "#",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
