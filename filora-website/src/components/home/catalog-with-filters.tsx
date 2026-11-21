"use client";

import React, { useState, useMemo } from "react";
import { type Product } from "@/types";
import { ProductCard } from "@/components/products/product-card";
import { ProductModal } from "@/components/products/product-modal";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "lucide-react";

interface CatalogWithFiltersProps {
  products: Product[];
  categories: { id: string; name: string; nameAr: string }[];
}

export function CatalogWithFilters({ products, categories }: CatalogWithFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => p.published !== false);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          (p.nameAr || p.name).toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOption === "price-asc") {
      result = [...result].sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOption === "price-desc") {
      result = [...result].sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortOption === "name") {
      result = [...result].sort((a, b) =>
        (a.nameAr || a.name).localeCompare(b.nameAr || b.name)
      );
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortOption]);

  const sortOptions = [
    { value: null, label: "الترتيب الافتراضي", labelAr: "الترتيب الافتراضي" },
    { value: "name", label: "الأحرف الأبجدية", labelAr: "أ إلى ي" },
    { value: "price-asc", label: "السعر من الأقل للأعلى", labelAr: "السعر: الأقل أولاً" },
    { value: "price-desc", label: "السعر من الأعلى للأقل", labelAr: "السعر: الأعلى أولاً" },
  ];

  return (
    <>
      <div className="container px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Filters sidebar */}
          <aside className="lg:col-span-3 hidden lg:block space-y-6">
            <div className="space-y-3">
              <label className="text-small font-body font-medium text-filora-ink">
                البحث بالاسم أو الكود
              </label>
              <Input
                placeholder="أكتب اسم المنتج أو كوده..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <label className="text-small font-body font-medium text-filora-ink">
                الفئة
              </label>
              <Select
                value={selectedCategory ?? ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <Select.Option value="">جميع الفئات</Select.Option>
                {categories.map((cat) => (
                  <Select.Option key={cat.id} value={cat.id}>
                    {cat.nameAr || cat.name}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-small font-body font-medium text-filora-ink">
                الترتيب
              </label>
              <Select value={sortOption ?? ""} onChange={(e) => setSortOption(e.target.value || null)}>
                {sortOptions.map((opt) => (
                  <Select.Option key={opt.value ?? "none"} value={opt.value ?? ""}>
                    {opt.labelAr}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </aside>

          {/* Products grid */}
          <section className="lg:col-span-9">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
              <div>
                <h2 className="font-heading text-rouge text-h1">منتجات فيلورا</h2>
                <p className="text-body text-filora-text-muted">
                  استعرض تشكيلتنا الكاملة من تاشوات الحناء الفنية
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-small text-filora-text-muted font-body">
                  {filteredProducts.length} منتج
                </span>
                <button className="p-2 text-filora-text-muted hover:text-filora-rouge transition-colors">
                  <LayoutGrid className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(p) => {
                      setSelectedProduct(p);
                      setIsModalOpen(true);
                    }}
                  />
                ))
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-body text-filora-text-muted mb-4">
                    لا توجد منتجات تتوافق مع بحثك
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                      setSortOption(null);
                    }}
                    className="text-small text-filora-rouge hover:underline"
                  >
                    إعادة تعيين التصفية
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
