import { siteConfig } from "@/config/site";

/** Builds a wa.me link with a properly URL-encoded message. */
export function whatsappLink(message: string, number: string = siteConfig.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function productOrderMessage(product: { nameAr: string; code: string }, productUrl: string): string {
  return [
    "السلام عليكم، أريد الاستفسار وطلب هذه الرشمة من فيلورا:",
    "",
    `اسم الرشمة: ${product.nameAr}`,
    `رقم الرشمة: ${product.code}`,
    `رابط المنتج: ${productUrl}`,
  ].join("\n");
}

export const generalInquiryMessage = "السلام عليكم، أريد الاستفسار عن رشمات فيلورا.";

/** wa.me link for a general inquiry (header, footer, floating button). */
export const generalWhatsappLink = () => whatsappLink(generalInquiryMessage);
