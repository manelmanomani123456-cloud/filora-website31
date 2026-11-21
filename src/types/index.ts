/** Domain types mirroring the planned Supabase schema (finalised in the database phase). */
export interface Category {
  id: string;
  slug: string;
  nameAr: string;
  description: string | null;
  imageUrl: string | null;
  displayOrder: number;
  published: boolean;
}

export interface Product {
  id: string;
  /** Unique, human-editable code such as FL-001. */
  code: string;
  slug: string;
  nameAr: string;
  nameEn: string | null;
  description: string | null;
  instructions: string | null;
  categoryId: string;
  /** Price in DZD; optional. */
  price: number | null;
  mainImage: string;
  gallery: string[];
  featured: boolean;
  isNew: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
