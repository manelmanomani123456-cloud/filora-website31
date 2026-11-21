export type Product = {
  id: string;
  name: string;
  nameAr: string;
  code: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  price?: number;
  image: string;
  images?: string[];
  availability: "in_stock" | "low_stock" | "out_of_stock";
  featured?: boolean;
  published?: boolean;
  createdAt?: string;
};

export type Category = {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  image?: string;
};

export type SortOption = {
  value: string;
  label: string;
  labelAr: string;
};
