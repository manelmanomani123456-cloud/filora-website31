import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `من نحن | ${siteConfig.name}`,
  description: "تعرف على قصة فيلورا، رؤيتنا، وفلسفتنا التصميمية المستوحاة من التراث الجزائري والأمازيغي.",
  openGraph: {
    title: `من نحن | ${siteConfig.name}`,
    description: "تعرف على قصة فيلورا، رؤيتنا، وفلسفتنا التصميمية.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <WhatsAppFloat />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none bg-filora-white">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-filora-orange/30" />
          <Container fullWidth>
            <div className="relative z-10 text-center px-6">
              <h1 className="font-heading text-rouge text-display md:text-[3.5rem] mb-6 leading-tight">
                من نحن
              </h1>
              <p className="text-body-lg text-filora-ink/90 max-w-xl mx-auto">
                قصة فيلورا — التميز والأناقة مستوحاة من التراث الجزائري والأمازيغي.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section id="story" className="py-24 bg-filora-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-filora-orange/30 border border-filora-border">
                <img
                  src="/images/about/brand-story.jpg"
                  alt="قصة فيلورا - فن الحناء الجزائري"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <SectionHeading>قصتنا</SectionHeading>
                <p className="text-body text-filora-ink/90 mb-6 leading-relaxed">
                  بدأت فيلورا كحلم لنقل فن الحناء الجزائري العريق إلى شكل عصري يمكن لكل امرأة ارتداؤه بسهولة وأناقة. نؤمن بأن الجمال يكمن في البساطة، وأن التاشوة المؤقتة يمكن أن تحمل معها قصة تراث كامل.
                </p>
                <p className="text-body text-filora-ink/90 mb-8 leading-relaxed">
                  كل تصميم في فيلورا يُرسم بعناية مستوحى من الزخارف الأمازيغية، والنقوش التقليدية، وألوان الصحراء والجزائر. نستخدم أفضل المواد لتقديم منتج آمن على البشرة وسهل التطبيق والإزالة.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="py-24 bg-filora-orange/30">
          <Container>
            <SectionHeading align="center">رؤيتنا ومهمتنا</SectionHeading>
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div className="p-8 bg-filora-white rounded-xl border border-filora-border">
                <div className="w-12 h-12 rounded-full bg-filora-pink flex items-center justify-center mb-6">
                  <span className="text-filora-rouge font-body font-medium">م</span>
                </div>
                <h3 className="font-heading text-rouge text-h2 mb-4">مهمتنا</h3>
                <p className="text-body text-filora-ink/90 leading-relaxed">
                  تقديم تاشوات وملصقات حناء فنية عالية الجودة، مستوحاة من التراث الجزائري، تEnable كل امرأة للتعبير عن أناقتها بأمان وبساطة.
                </p>
              </div>
              <div className="p-8 bg-filora-white rounded-xl border border-filora-border">
                <div className="w-12 h-12 rounded-full bg-filora-pink flex items-center justify-center mb-6">
                  <span className="text-filora-rouge font-body font-medium">ر</span>
                </div>
                <h3 className="font-heading text-rouge text-h2 mb-4">رؤيتنا</h3>
                <p className="text-body text-filora-ink/90 leading-relaxed">
                  أن نكون العلامة الرائدة في فن الحناء المؤقت في الجزائر والعالم العربي، وننقل التراث الأمازيغي إلىglobal audiences بأسلوب عصري وفاخر.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Design Philosophy */}
        <section id="philosophy" className="py-24 bg-filora-white">
          <Container>
            <SectionHeading align="center">فلسفتنا التصميمية</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-filora-border bg-filora-white text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-filora-orange mx-auto mb-4 flex items-center justify-center">
                    <span className="text-filora-rouge font-heading font-medium">{i}</span>
                  </div>
                  <h4 className="font-heading text-rouge text-h3 mb-3">
                    العنصر {i}
                  </h4>
                  <p className="text-small text-filora-text-muted leading-relaxed">
                    تصميم أنيق مستوحى من التراث مع لمسة عصرية.
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Heritage */}
        <section id="heritage" className="py-24 bg-filora-orange/30">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading>التراث الجزائري والأمازيغي</SectionHeading>
                <p className="text-body text-filora-ink/90 mb-6 leading-relaxed">
                  تصاميمنا مستوحاة من الزخارف الأمازيغية التقليدية، وألوان أرض الجزائر، وفن الحناء الذي نقلته generations من النساء الجزائريات. نعيد تقديم هذا التراث بصيغة معاصرة تناسب المرأة العصرية.
                </p>
                <ul className="space-y-3 text-body text-filora-ink/90">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-filora-rouge"></span>
                    زخارف أمازيغية أصلية
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-filora-rouge"></span>
                    ألوان مستوحاة من الصحراء والجزائر
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-filora-rouge"></span>
                    فن الحناء التقليدي بصيغة عصرية
                  </li>
                </ul>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-filora-pink/30 border border-filora-border">
                <img
                  src="/images/about/heritage.jpg"
                  alt="التراث الأمازيغي الجزائري"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Contact CTA */}
        <section id="contact-cta" className="py-24 bg-filora-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center py-16 rounded-2xl bg-filora-rouge text-white">
              <h2 className="font-heading text-h1 mb-6">تواصل معنا</h2>
              <p className="text-body-lg text-filora-orange/90 mb-8">
                هل لديك استفسار؟ فريق فيلورا جاهز للرد على جميع أسئلتك عبر واتساب.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-filora-white text-filora-rouge rounded-full font-body font-medium text-body-lg hover:bg-filora-orange/90 transition-colors focus:outline-none focus:ring-4 focus:ring-filora-white/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.583 1.017c-.168 0-.33.008-.492.026-.49.054-.975.163-1.44.324-.556.193-1.073.432-1.556.747-.488.317-.936.692-1.314 1.13-.385.448-.702.949-.94 1.515-.227.544-.394 1.127-.466 1.742-.074.632-.081 1.268-.081 1.904s.007 1.273.081 1.905c.072.616.239 1.198.466 1.742.238.566.555 1.067.94 1.515.378.438.826.813 1.314 1.13.483.315 1 .554 1.556.747.465.161.95.27 1.44.324.162.018.324.026.492.026h.053c7.418 0 13.443-6.025 13.443-13.443s-6.024-13.443-13.443-13.443z" />
                </svg>
                راسلنا على واتساب
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
