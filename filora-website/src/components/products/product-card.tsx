"use client";

import { type Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const availabilityLabels: Record<string, string> = {
    in_stock: "متوفر",
    low_stock: "باقي القليل",
    out_of_stock: "غير متوفر",
  };

  return (
    <article
      className="group relative rounded-lg bg-filora-white border border-filora-border overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product);
        }
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.nameAr || product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        {product.featured && (
          <Badge variant="pink" className="absolute start-3 top-3">
            مميز
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-4">
        <h3 className="font-heading text-rouge text-body font-semibold mb-1">
          {product.nameAr || product.name}
        </h3>
        <p className="text-small text-filora-text-muted mb-3">{product.code}</p>

        <div className="flex items-center justify-between">
          <span className="text-body font-body font-medium text-filora-ink">
            {product.price ? `${product.price} دج` : "سعر عند التواصل"}
          </span>
          <Badge
            variant={
              product.availability === "in_stock"
                ? "secondary"
                : product.availability === "out_of_stock"
                  ? "pink"
                  : "default"
            }
            className="text-xs"
          >
            {availabilityLabels[product.availability]}
          </Badge>
        </div>
      </div>
    </article>
  );
}
