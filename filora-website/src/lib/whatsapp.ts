import { siteConfig } from "@/config/site";

export function buildOrderMessage(product: {
  name: string;
  code: string;
  price?: number;
}): string {
  const lines = [
    `أود طلب منتج من فيلورا`,
    `اسم المنتج: ${product.name}`,
    `كود المنتج: ${product.code}`,
    product.price ? `السعر: ${product.price} دج` : "",
    `رابط الموقع: ${siteConfig.url}`,
  ].filter(Boolean);

  return lines.join("%0A");
}

export function getWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
