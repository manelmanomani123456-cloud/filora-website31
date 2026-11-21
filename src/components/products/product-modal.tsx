"use client";

import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { type Product } from "@/types";
import { Button } from "@/components/ui/button";
import { buildOrderMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const currentImageIndex = React.useRef(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      currentImageIndex.current = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!product || !isOpen) return null;

  const images = product.images ? [product.image, ...product.images] : [product.image];
  const availabilityLabels: Record<string, string> = {
    in_stock: "متوفر",
    low_stock: "باقي القليل",
    out_of_stock: "غير متوفر",
  };

  const whatsAppMessage = buildOrderMessage({
    name: product.nameAr || product.name,
    code: product.code,
    price: product.price,
  });
  const whatsAppUrl = getWhatsAppUrl(siteConfig.whatsappNumber, whatsAppMessage);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="تفاصيل المنتج"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === modalRef.current) onClose();
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative bg-filora-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 p-2 bg-filora-rouge text-white rounded-full hover:bg-filora-rouge/90 transition-colors focus:outline-none focus:ring-2 focus:ring-filora-rouge/30"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Images gallery */}
        <div className="flex-1 bg-filora-orange/30 p-4 md:w-1/2 flex items-center justify-center">
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  currentImageIndex.current = (currentImageIndex.current - 1 + images.length) % images.length;
                }}
                className="absolute left-4 bg-filora-white/90 p-2 rounded-full shadow-md hover:bg-filora-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-filora-rouge" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  currentImageIndex.current = (currentImageIndex.current + 1) % images.length;
                }}
                className="absolute right-4 bg-filora-white/90 p-2 rounded-full shadow-md hover:bg-filora-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-filora-rouge" />
              </button>
            </>
          )}
          <img
            src={images[currentImageIndex.current % images.length]}
            alt={product.nameAr || product.name}
            className="max-h-[60vh] max-w-full object-contain"
          />
        </div>

        {/* Product info */}
        <div className="flex-1 p-6 md:w-1/2 overflow-y-auto">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="font-heading text-rouge text-h1 mb-2">
                {product.nameAr || product.name}
              </h2>
              <span className="text-small text-filora-text-muted font-body">
                {product.code}
              </span>
            </div>
            <Badge
              variant={
                product.availability === "in_stock"
                  ? "secondary"
                  : product.availability === "out_of_stock"
                    ? "pink"
                    : "default"
              }
            >
              {availabilityLabels[product.availability]}
            </Badge>
          </div>

          {product.price && (
            <div className="mb-6">
              <span className="font-heading text-rouge text-body-lg">
                {product.price} دج
              </span>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-heading text-rouge text-h3 mb-2">الوصف</h3>
            <p className="text-body text-filora-ink/90 leading-relaxed">
              {product.descriptionAr || product.description}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-heading text-rouge text-h3 mb-2">الفئة</h3>
            <span className="text-body text-filora-ink/90 font-body">
              {product.categoryAr || product.category}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-body font-medium hover:bg-[#1eb758] transition-colors focus:outline-none focus:ring-2 focus-ring-[#25D366]/30"
            >
              <Phone className="w-5 h-5" />
              طلب عبر واتساب
            </a>
            <Button variant="outline" onClick={onClose}>
              إغلاق
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
