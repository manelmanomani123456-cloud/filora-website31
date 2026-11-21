"use client";

import React from "react";
import { ProductCard } from "@/components/products/product-card";
import { ProductModal } from "@/components/products/product-modal";
import { type Product } from "@/types";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featured = products.filter((p) => p.featured);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Section background="orange" padding="lg">
        <SectionHeading align="center" lang="en">
          Featured
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => {
                setSelectedProduct(p);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </Section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
