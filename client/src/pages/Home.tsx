import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Bell,
  Check,
  ChevronLeft,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Megaphone,
  PackageCheck,
  Palette,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

const LOGO = "/assets/logo.png";
const HERO_IMG = "/assets/hero.png";
const SERVICES_COFFEE_IMG = "/assets/coffee.png";
const ECOMMERCE_IMG = "/assets/ecommerce.png";
const MARKETING_IMG = "/assets/boombox.png";
const RESULTS_IMG = "/assets/results.png";
const FINAL_CTA_IMG = "/assets/final-cta.png";
const WHATSAPP_NUMBER = "966559999236";
const MAROOF_LOGO = "/assets/maroof.png";
const MINISTRY_LOGO = "/assets/ministry.png";
const VERIFICATION_LOGO = "/assets/ecommerce-trust.png";

const whatsappHref = (message = "مرحباً، أرغب بالبدء مع مبتكر") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.9c0 2.1.55 4.16 1.6 5.98L.12 24l6.28-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.48-8.42ZM12.1 21.78h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.26C2.21 6.45 6.65 2 12.1 2c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.87 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

const services = [
  { icon: Megaphone, title: "التسويق الرقمي", desc: "استراتيجية واضحة وحضور رقمي يقرّب علامتك من جمهورها الصحيح.", color: "#6B9FD4" },
  { icon: ShoppingBag, title: "إنشاء المتاجر", desc: "متجر سريع، مرتب، ومصمم ليحوّل الزيارة إلى طلب.", color: "#D4789F" },
  { icon: BarChart3, title: "إدارة الحملات", desc: "نختبر ونحسّن ونوجّه ميزانيتك نحو ما يصنع فرقاً.", color: "#8E7AD4" },
  { icon: Palette, title: "صناعة المحتوى", desc: "أفكار بصرية ونصوص تُشبه علامتك وتعلق في الذاكرة.", color: "#C57EAD" },
  { icon: Sparkles, title: "المؤثرون", desc: "تعاونات أذكى مع أصوات تصل إلى جمهورك بثقة طبيعية.", color: "#7799D2" },
  { icon: Search, title: "SEO", desc: "نرفع قابلية اكتشافك ونبني حضوراً عضوياً مستمراً.", color: "#B079C2" },
  { icon: Globe, title: "العلامات التجارية", desc: "نحوّل فكرتك إلى علامة لها ملامح وصوت ومكانة.", color: "#6B9FD4" },
];

const ecommerceServices = ["إنشاء وتطوير المتاجر", "UI/UX", "تجهيز المنتجات", "بوابات الدفع", "تحسين معدل التحويل", "ربط الأدوات والخدمات", "تحسين تجربة العميل"];
const marketingServices = ["Paid Ads", "Social Media", "Influencer Marketing", "Content Creation", "SEO", "Marketing Strategy"];

const resultMetrics = [
  { value: "250,000", unit: "ريال", label: "إجمالي المبيعات", note: "من مادة العمل المرفقة" },
  { value: "4", unit: "قنوات", label: "منصات إعلانية", note: "Meta · Google · TikTok · Snapchat" },
  { value: "3", unit: "نماذج", label: "أعمال مختارة", note: "تجارة · محتوى · هوية" },
];

const caseStudies = [
  { title: "تجربة متجر إلكتروني", tag: "E-commerce", image: ECOMMERCE_IMG },
  { title: "حملة ومحتوى اجتماعي", tag: "Campaign", image: MARKETING_IMG },
  { title: "هوية وتجربة علامة", tag: "Branding", image: SERVICES_COFFEE_IMG },
];

const packages = [
  { name: "باقة الانطلاقة", price: "6,000 ريال", period: "3 أشهر", oldPrice: "12,000 ريال", badge: "خصم 50%", description: "الحل المتكامل لتهيئة متجرك وتشغيله وتسويقه باحترافية وتحقيق أول مبيعاتك.", features: ["تهيئة المتجر بالكامل بشكل احترافي", "إدارة الحملات الإعلانية على جميع المنصات", "حملات إعلانية بعدد غير محدود", "إدارة السوشيال ميديا", "بوست + 3 فيديوهات", "تحسين محركات البحث SEO", "تهيئة المتجر للظهور في GEO", "متابعة وتحسين الأداء التسويقي", "استشارات تسويقية مستمرة"], featured: true },
  { name: "باقة إعادة هيكلة المتجر", price: "1,200 ريال", period: "مشروع واحد", description: "تصميم احترافي متكامل لمتجرك مع هوية بصرية مميزة، ومشاهدة التصميم واعتماده قبل بدء التنفيذ.", features: ["تصميم المتجر بالكامل بشكل احترافي", "تصميم هوية بصرية كاملة للمتجر", "تصميم أقسام المتجر بشكل منظم وسهل التصفح", "عرض التصميم كاملاً على Figma قبل التطبيق", "تطبيق وبرمجة المتجر بالكامل", "برمجة CSS مخصصة لتطبيق التصميم على المتجر", "تنفيذ التصميم المعتمد مع الحفاظ على وظائف المتجر"] },
  { name: "باقة الاحتراف", price: "1,500 ريال", period: "شهرياً", oldPrice: "3,000 ريال", badge: "خصم 50%", description: "خدمة تحسين محركات البحث (SEO) + GEO لمتجرك الإلكتروني.", features: ["اختيار الكلمات المفتاحية المناسبة لنشاطك", "تحسين الصفحات الرئيسية وصفحات المنتجات", "تنظيم هيكل المتجر وتحسين تجربة التصفح", "كتابة وتحسين المحتوى المتوافق مع محركات البحث", "تحسين الظهور في نتائج Google ومحركات البحث", "تحسين الظهور في نتائج البحث المدعومة بالذكاء الاصطناعي (GEO)", "ربط أدوات Google للتحليل وتتبع الأداء", "تحليل أداء الكلمات المفتاحية والصفحات", "تعزيز الانتشار والوصول العضوي للمتجر"] },
  { name: "باقة زود", price: "2,200 ريال", period: "شهرياً", oldPrice: "4,400 ريال", badge: "خصم 50%", description: "إدارة الحملات الإعلانية + إدارة حسابات التواصل الاجتماعي.", features: ["إدارة وتحسين الحملات الإعلانية باحترافية", "استهداف الجمهور المناسب وتحسين نتائج الحملات", "متابعة وتحليل أداء الإعلانات بشكل مستمر", "إدارة حسابات التواصل الاجتماعي", "12 تصميماً احترافياً شهرياً", "3 فيديوهات قصيرة شهرياً", "إعداد المحتوى بما يتناسب مع هوية ونشاط المتجر", "تقارير دورية لمتابعة الأداء والنتائج"] },
  { name: "باقة اليوم الوطني الشاملة", price: "9,600 ريال", period: "6 أشهر", oldPrice: "19,200 ريال", badge: "العرض الخاص · خصم 50%", description: "6 أشهر من التسويق المتكامل لمتجرك، بما يعادل 1,600 ريال شهرياً فقط.", features: ["إدارة الحملات الإعلانية والاستراتيجيات واستهداف الجمهور", "إعادة استهداف العملاء والزوار وتحسين الأداء", "72 تصميماً احترافياً و18 فيديو قصيراً خلال 6 أشهر", "كتابة وجدولة ونشر المحتوى", "تحليل وتحسين SEO وGEO والبيانات المنظمة Schema", "تحسين تجربة المستخدم ورحلة العميل داخل المتجر", "تصميم هوية وحملة اليوم الوطني والبنرات", "متابعة وتقارير وتوصيات دورية", "هدايا الباقة: بنر رئيسي واستراتيجية موسمية وتجهيز الرسائل"] },
];

function useIntersection(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ visible, children, delay = 0, className = "" }: { visible: boolean; children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(22px)", transition: `opacity 650ms cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 650ms cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const hero = useIntersection(0.1);
  const servicesSection = useIntersection();
  const ecommerceSection = useIntersection();
  const marketingSection = useIntersection();
  const resultsSection = useIntersection();
  const visionSection = useIntersection();
  const ctaSection = useIntersection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(media.matches);
      if (media.matches) setHeroParallax({ x: 0, y: 0 });
    };
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const unifiedBg = "#E1DFF8";
  const muted = "#6B7280";
  const dark = "#1A1A2E";

  return (
    <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", background: unifiedBg, minHeight: "100vh", color: dark }}>
      <nav style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 50, transition: "all 0.3s", background: scrolled ? "rgba(248,246,255,0.88)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(107,159,212,0.12)" : "none", boxShadow: scrolled ? "0 4px 24px rgba(107,159,212,0.08)" : "none" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <img src={LOGO} alt="مبتكر" style={{ height: 48, objectFit: "contain" }} />
          <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
            {["الرئيسية", "الخدمات", "أعمالنا", "من نحن", "تواصل معنا"].map((item, index) => {
              const hrefs = ["#hero", "#services", "#marketing", "#vision", "#contact"];
              return <a key={item} href={hrefs[index]} style={{ fontSize: 14, fontWeight: 700, color: scrolled ? "#374151" : "rgba(244,242,255,0.92)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#ffbfd6")} onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "#374151" : "rgba(244,242,255,0.92)")}>{item}</a>;
            })}
          </div>
          <a href="/files" className="hidden md:block" style={{ fontSize: 13, fontWeight: 800, color: scrolled ? "#6B9FD4" : "#e1d5ff", textDecoration: "none" }}>مساحة الملفات</a>
          <a href={whatsappHref()} className="hidden md:block" style={{ background: "linear-gradient(135deg, #6B9FD4, #D4789F)", color: "white", borderRadius: 50, padding: "10px 24px", fontSize: 14, fontWeight: 800, textDecoration: "none", boxShadow: "0 4px 16px rgba(107,159,212,0.3)" }}>ابدأ مشروعك</a>
          <button className="md:hidden" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", padding: 8, color: scrolled ? dark : "white" }}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {menuOpen && <div style={{ background: "rgba(248,246,255,0.96)", backdropFilter: "blur(16px)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["الرئيسية", "الخدمات", "أعمالنا", "من نحن", "تواصل معنا"].map((item, index) => <a key={item} href={["#hero", "#services", "#marketing", "#vision", "#contact"][index]} onClick={() => setMenuOpen(false)} style={{ fontSize: 14, fontWeight: 700, color: dark, textDecoration: "none" }}>{item}</a>)}
          <a href="/files" style={{ color: "#6B9FD4", fontSize: 14, fontWeight: 800, textDecoration: "none", textAlign: "center" }}>مساحة الملفات</a>
          <a href={whatsappHref()} style={{ background: "linear-gradient(135deg, #6B9FD4, #D4789F)", color: "white", borderRadius: 50, padding: "10px 24px", fontSize: 14, fontWeight: 800, textDecoration: "none", textAlign: "center" }}>ابدأ مشروعك</a>
        </div>}
      </nav>

      <section id="hero" className="hero-stage" onMouseMove={(event) => {
        if (reducedMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setHeroParallax({ x: (event.clientX - rect.left - rect.width / 2) / 34, y: (event.clientY - rect.top - rect.height / 42) / 42 });
      }} onMouseLeave={() => setHeroParallax({ x: 0, y: 0 })}>
        <div className="hero-future-grid" aria-hidden="true" style={{ transform: reducedMotion ? "none" : `translate3d(${heroParallax.x * 0.12}px, ${heroParallax.y * 0.1}px, 0)` }} />
        <div className="hero-riyadh-glow hero-riyadh-glow-one" aria-hidden="true" />
        <div className="hero-riyadh-glow hero-riyadh-glow-two" aria-hidden="true" />
        <div className="hero-skyline" aria-hidden="true" style={{ transform: reducedMotion ? "none" : `translate3d(${heroParallax.x * 0.06}px, 0, 0)` }}><span>الرياض</span></div>
        <div ref={hero.ref} style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.12fr", gap: "3rem", alignItems: "center" }}>
            <Reveal visible={hero.visible} delay={80}>
              <div className="hero-kicker">من قلب السعودية · إلى كل سوق</div>
              <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.18, margin: "0 0 22px", color: "#fff", letterSpacing: "-0.04em" }}>من السعودية نبتكر..<br /><span style={{ background: "linear-gradient(135deg, #d9c8ff, #ffb7d0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>وللعالم نكبر.</span></h1>
              <p style={{ fontSize: 17, color: "rgba(244,242,255,0.78)", lineHeight: 1.95, margin: "0 0 32px", maxWidth: 520 }}>نبني المتاجر، نصنع العلامات، ونسوّق الأفكار حتى تتحول إلى مبيعات.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}><a href={whatsappHref("مرحباً، أرغب ببدء مشروعي مع مبتكر")} className="hero-primary-action">ابدأ مشروعك <ArrowLeft size={18} /></a><a href="#services" className="hero-secondary-action">شاهد أعمالنا</a></div>
              <div className="hero-signal-row" aria-label="مؤشرات مبتكر"><span>فكرة</span><span>علامة</span><span>نمو</span></div>
            </Reveal>
            <div className="hero-visual-wrap" style={{ opacity: hero.visible ? 1 : 0, transform: `${hero.visible ? "none" : "translateX(-30px)"} translate3d(${reducedMotion ? 0 : heroParallax.x * -0.28}px, ${reducedMotion ? 0 : heroParallax.y * -0.28}px, 0)`, transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.18s ease-out" }}>
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <img src={HERO_IMG} alt="الشخصية السعودية الرئيسية في هوية مبتكر" className="hero-main-character" />
              <div className="hero-floating-note" style={{ transform: reducedMotion ? "none" : `translate3d(${heroParallax.x * 0.12}px, ${heroParallax.y * 0.12}px, 0)` }}><span className="hero-note-icon"><TrendingUp size={17} color="white" /></span><span><small>نحو أثر أكبر</small><strong>فكرة · علامة · نمو</strong></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="creative-section coffee-section" ref={servicesSection.ref}>
        <div className="section-shell coffee-layout">
          <Reveal visible={servicesSection.visible} className="section-copy">
            <div className="section-eyebrow">01 · الخدمات والقهوة</div>
            <h2>خذ لك فنجال..<br /><span>وخلّ التسويق علينا.</span></h2>
            <p>من الاستراتيجية والهوية إلى المتجر والحملات الإعلانية، مُبتكر يجمع كل ما يحتاجه مشروعك للنمو في مكان واحد.</p>
            <div className="service-detail"><div className="service-detail-icon" style={{ background: `${services[activeService].color}22`, color: services[activeService].color }}>{(() => { const Icon = services[activeService].icon; return <Icon size={24} />; })()}</div><div><strong>{services[activeService].title}</strong><span>{services[activeService].desc}</span></div></div>
            <a href={whatsappHref(`مرحباً، أحتاج تفاصيل خدمة ${services[activeService].title}`)} className="text-cta">خلّنا نبدأ <ArrowLeft size={16} /></a>
          </Reveal>
          <div className="coffee-visual" style={{ opacity: servicesSection.visible ? 1 : 0, transform: servicesSection.visible ? "none" : "translateX(-26px)", transition: "all 700ms cubic-bezier(0.23,1,0.32,1) 120ms" }}><div className="coffee-halo" /><img src={SERVICES_COFFEE_IMG} alt="الشخصية السعودية تشرب القهوة بجانب اللابتوب والدلة" /><div className="coffee-stamp">على كيفك<br /><b>نضبطها</b></div></div>
        </div>
        <div className="service-tabs section-shell" role="tablist" aria-label="خدمات مبتكر">{services.map((service, index) => { const Icon = service.icon; const selected = activeService === index; return <button key={service.title} role="tab" aria-selected={selected} onClick={() => setActiveService(index)} className={`service-tab ${selected ? "is-active" : ""}`} style={{ "--tab-color": service.color } as React.CSSProperties}><span className="service-tab-icon"><Icon size={18} /></span><span>{service.title}</span><ChevronLeft size={15} /></button>; })}</div>
      </section>

      <section id="ecommerce" className="creative-section ecommerce-section" ref={ecommerceSection.ref}>
        <div className="section-shell ecommerce-layout">
          <div className="ecommerce-visual" style={{ opacity: ecommerceSection.visible ? 1 : 0, transform: ecommerceSection.visible ? "none" : "translateX(26px)", transition: "all 700ms cubic-bezier(0.23,1,0.32,1)" }}><div className="commerce-ring" /><img src={ECOMMERCE_IMG} alt="الشخصية السعودية جالسة وسط كراتين الشحن وتمسك هاتفاً يعرض متجراً إلكترونياً" /><div className="commerce-float bag"><ShoppingBag size={17} /><span>Shopping Bag</span></div><div className="commerce-float order"><Bell size={16} /><span>طلب جديد</span></div><div className="commerce-float cart"><CreditCard size={16} /><span>Cart</span></div><div className="commerce-float sale"><TrendingUp size={16} /><span>Sales</span></div></div>
          <Reveal visible={ecommerceSection.visible} className="section-copy">
            <div className="section-eyebrow">02 · التجارة الإلكترونية</div>
            <h2>متجرك مو بس<br /><span>واجهة حلوة.</span></h2>
            <h3 className="statement-title">نبنيه عشان يبيع.</h3>
            <p>نصمم ونبني تجربة تجارة إلكترونية متكاملة، من أول نقرة إلى إتمام الطلب.</p>
            <div className="feature-list">{ecommerceServices.map((item) => <div key={item}><Check size={16} /><span>{item}</span></div>)}</div>
            <a href={whatsappHref("مرحباً، أرغب ببناء متجر إلكتروني يبيع")} className="text-cta">ابنِ متجرك معنا <ArrowLeft size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section id="marketing" className="creative-section marketing-section" ref={marketingSection.ref}>
        <div className="section-shell marketing-layout">
          <Reveal visible={marketingSection.visible} className="section-copy">
            <div className="section-eyebrow">03 · التسويق</div>
            <h2>نرفع صوت علامتك.<br /><span>بس مو بالإزعاج.</span></h2>
            <p>نضع علامتك أمام الجمهور الصحيح، بالمحتوى الصحيح، وفي الوقت الصحيح.</p>
            <div className="marketing-service-grid">{marketingServices.map((item, i) => <div key={item} className="marketing-service"><span>0{i + 1}</span><b>{item}</b></div>)}</div>
            <a href={whatsappHref("مرحباً، أرغب بخطة تسويق لعلامتي")} className="text-cta">كبّر حضورك <ArrowLeft size={16} /></a>
          </Reveal>
          <div className="marketing-visual" style={{ opacity: marketingSection.visible ? 1 : 0, transform: marketingSection.visible ? "none" : "translateX(-24px)", transition: "all 700ms cubic-bezier(0.23,1,0.32,1) 120ms" }}><img src={MARKETING_IMG} alt="الشخصية السعودية تحمل مسجلاً قديماً Boombox" /></div>
        </div>
      </section>

      <section id="results" className="results-section" ref={resultsSection.ref}>
        <div className="section-shell results-layout">
          <Reveal visible={resultsSection.visible} className="results-copy">
            <div className="section-eyebrow light">04 · النتائج والنمو</div>
            <h2>الأرقام ما تعرف<br /><span>تجامل.</span></h2>
            <p>نقيس ما يحدث فعلاً، ونترك النتائج المعتمدة تتحدث. هذه لوحة مختصرة من الأعمال والبيانات الظاهرة في مواد مُبتكر الحالية.</p>
            <div className="results-note"><BarChart3 size={20} /><span>المؤشرات المعروضة هنا مرتبطة بمادة العمل الحالية، وأي رقم جديد لا يُنشر قبل اعتماده.</span></div>
            <div className="results-metrics" aria-label="مؤشرات مختارة">{resultMetrics.map((metric) => <div className="result-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.unit}</span><b>{metric.label}</b><small>{metric.note}</small></div>)}</div>
          </Reveal>
          <div className="results-visual" style={{ opacity: resultsSection.visible ? 1 : 0, transform: resultsSection.visible ? "none" : "translateX(-22px)", transition: "all 700ms cubic-bezier(0.23,1,0.32,1) 120ms" }}>
            <img src={RESULTS_IMG} alt="الشخصية السعودية واقفة وتحمل جهازاً لوحياً لمتابعة النتائج" className="results-character" />
            <div className="results-work-strip" aria-label="أعمال مختارة">{caseStudies.map((work) => <div className="results-work" key={work.title}><img src={work.image} alt="" /><div><b>{work.title}</b><small>{work.tag}</small></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="vision" className="vision-section" ref={visionSection.ref}>
        <div className="vision-pattern" aria-hidden="true" /><div className="vision-glow vision-glow-a" aria-hidden="true" /><div className="vision-glow vision-glow-b" aria-hidden="true" /><div className="vision-skyline" aria-hidden="true"><i /><i /><i /><i /><i /><span>الرياض الحديثة · أفق سعودي</span></div>
        <div className="section-shell vision-inner"><Reveal visible={visionSection.visible}><div className="section-eyebrow">05 · من هنا نبدأ</div><h2>نبتكر بطموح سعودي.</h2><p>نؤمن باقتصاد رقمي تقوده الأفكار، وتنمو فيه العلامات السعودية من السوق المحلي إلى العالم.</p><p className="vision-secondary">طموحنا يتقاطع مع مستهدفات رؤية السعودية 2030 نحو اقتصاد رقمي أكثر تنافسية.</p><div className="vision-line"><span>السوق المحلي</span><ArrowLeft size={18} /><span>العالم</span></div><small>إلهام سعودي، ومسار مستقل — لسنا جهة رسمية ولا نمثل رؤية السعودية 2030.</small></Reveal></div>
      </section>

      <section id="packages" className="packages-section"><div className="section-shell"><div className="packages-heading"><div className="section-eyebrow">باقات مصممة لنموك</div><h2>اختر الباقة التي <span>تناسب مرحلتك</span></h2><p>حلول تسويقية متكاملة للمتاجر الإلكترونية، من إعادة الهيكلة إلى الحملات الموسمية والنمو المستمر.</p></div><div className="packages-grid">{packages.map((pkg) => <div key={pkg.name} className={`package-card ${pkg.featured ? "featured" : ""}`}>{pkg.badge && <div className="package-badge">{pkg.badge}</div>}<h3>{pkg.name}</h3><p>{pkg.description}</p><div className="package-price"><strong>{pkg.price}</strong><span>/ {pkg.period}</span>{pkg.oldPrice && <del>{pkg.oldPrice}</del>}</div><div className="package-features">{pkg.features.map((feature) => <div key={feature}><Check size={14} /><span>{feature}</span></div>)}</div><a href={whatsappHref(`مرحباً، أرغب بالاشتراك في ${pkg.name}`)}>اشترك الآن</a></div>)}</div></div></section>

      <section id="contact" className="final-cta-section" ref={ctaSection.ref}><div className="cta-orb cta-orb-a" /><div className="cta-orb cta-orb-b" /><div className="section-shell cta-layout"><Reveal visible={ctaSection.visible} className="cta-copy"><div className="section-eyebrow light">06 · خلّنا نسولف</div><h2>علومك؟<br /><span>عندك مشروع؟</span></h2><p>صبّ القهوة، وقل لنا الفكرة.<br />الباقي علينا.</p><a href={whatsappHref("مرحباً، عندي مشروع وأرغب بالبدء مع مبتكر")} className="cta-button">ابدأ مع مُبتكر <ArrowLeft size={18} /></a><div className="cta-contact"><a href={whatsappHref()}><WhatsAppIcon size={16} /><span dir="ltr">+966 55 999 9236</span></a><a href="mailto:info@mubtaker.sa"><Mail size={16} />info@mubtaker.sa</a></div></Reveal><div className="cta-character" style={{ opacity: ctaSection.visible ? 1 : 0, transform: ctaSection.visible ? "none" : "translateX(-26px)", transition: "all 700ms cubic-bezier(0.23,1,0.32,1) 120ms" }}><div className="majlis-glow" /><img src={FINAL_CTA_IMG} alt="الشخصية السعودية جالسة باسترخاء في جلسة سعودية حديثة وبجانبها دلة وفنجال قهوة" /></div></div></section>

      <section aria-label="شعارات الثقة والتوثيق" style={{ padding: "44px 0 26px", background: "linear-gradient(180deg, #DCD7F4 0%, #C8C7E9 100%)" }}><div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}><p style={{ color: "#292347", fontSize: 13, marginBottom: 6, fontWeight: 800 }}>روابط الجهات ذات العلاقة بالتجارة الإلكترونية في المملكة العربية السعودية</p><p style={{ color: "rgba(41,35,71,0.68)", fontSize: 11, margin: "0 auto 18px", lineHeight: 1.7 }}>توثيق المتجر نفسه يتطلب رابط التوثيق أو الشهادة الفعلية الخاصة بالمنشأة.</p><div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", flexWrap: "wrap", gap: 14 }}><a href="https://maroof.sa/" target="_blank" rel="noreferrer" style={{ minWidth: 180, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={MAROOF_LOGO} alt="شعار معروف" style={{ width: 180, height: 86, objectFit: "contain" }} /></a><a href="https://mc.gov.sa/" target="_blank" rel="noreferrer" style={{ minWidth: 190, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={MINISTRY_LOGO} alt="شعار وزارة التجارة" style={{ width: 190, height: 86, objectFit: "contain" }} /></a><a href="https://business.sa/" target="_blank" rel="noreferrer" style={{ minWidth: 230, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, textDecoration: "none" }}><img src={VERIFICATION_LOGO} alt="شعار المركز السعودي للأعمال" style={{ width: 62, height: 62, objectFit: "contain" }} /><span style={{ color: "#292347", fontSize: 13, fontWeight: 900, lineHeight: 1.5, textAlign: "right" }}>توثيق التجارة الإلكترونية<br /><small style={{ fontSize: 10, fontWeight: 700, opacity: 0.72 }}>المركز السعودي للأعمال</small></span></a></div></div></section>

      <footer style={{ padding: "28px 0", background: "#0F0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}><div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}><img src={LOGO} alt="مبتكر" style={{ height: 40, objectFit: "contain", opacity: 0.7 }} /><a href={whatsappHref("مرحباً، أرغب بالتواصل مع مبتكر")} style={{ display: "flex", alignItems: "center", gap: 8, color: "#B9F5CE", fontSize: 13, fontWeight: 700, textDecoration: "none" }}><WhatsAppIcon size={15} /><span dir="ltr">+966 55 999 9236</span></a><p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>© ٢٠٢٥ مبتكر — جميع الحقوق محفوظة</p><div style={{ display: "flex", gap: 24 }}>{["الخصوصية", "الشروط", "تواصل"].map((label) => <a key={label} href="#contact" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none" }}>{label}</a>)}</div></div></footer>
      <a href={whatsappHref("مرحباً، أرغب بالبدء مع مبتكر عبر الواتساب")} aria-label="تواصل معنا عبر واتساب" style={{ position: "fixed", bottom: 22, right: 22, zIndex: 60, width: 56, height: 56, borderRadius: "50%", background: "#25D366", color: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 26px rgba(37,211,102,0.35)", animation: "whatsappPulse 2.4s ease-in-out infinite" }}><WhatsAppIcon size={28} /></a>

      <style>{`
        .creative-section{position:relative;overflow:hidden;padding:112px 0;background:#E1DFF8}
        .section-shell{width:min(1180px,calc(100% - 48px));margin:0 auto;position:relative;z-index:2}
        .section-eyebrow{display:inline-flex;align-items:center;gap:8px;margin-bottom:18px;color:#6B9FD4;font-size:12px;font-weight:900;letter-spacing:.02em}
        .section-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:#D4789F;box-shadow:0 0 0 5px rgba(212,120,159,.12)}
        .section-eyebrow.light{color:#d8cdf8}.section-copy h2,.vision-inner h2,.packages-heading h2{margin:0 0 20px;color:#1A1A2E;font-size:clamp(2rem,4vw,4rem);font-weight:950;line-height:1.18;letter-spacing:-.04em}.section-copy h2 span,.packages-heading h2 span{background:linear-gradient(135deg,#6B9FD4,#D4789F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.section-copy p{max-width:540px;margin:0 0 24px;color:#64677b;font-size:16px;line-height:2}.coffee-layout,.ecommerce-layout,.marketing-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}.coffee-section{background:linear-gradient(180deg,#E1DFF8 0%,#EEEAFB 100%)}.coffee-visual,.ecommerce-visual,.marketing-visual{position:relative;min-height:520px;display:flex;align-items:center;justify-content:center}.coffee-visual img,.ecommerce-visual img,.marketing-visual img{position:relative;z-index:2;width:min(100%,570px);max-height:570px;object-fit:contain;display:block;filter:drop-shadow(0 24px 30px rgba(54,43,102,.12))}.coffee-halo{position:absolute;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.72),rgba(206,196,244,.18) 62%,transparent 70%)}.coffee-stamp{position:absolute;z-index:3;left:4%;bottom:14%;padding:12px 17px;border-radius:18px;background:rgba(38,29,71,.82);color:#e7defb;font-size:11px;line-height:1.55;box-shadow:0 15px 30px rgba(37,25,75,.16);transform:rotate(-5deg)}.coffee-stamp b{color:#ffbfd6;font-size:16px}.service-detail{display:flex;align-items:center;gap:14px;max-width:490px;margin:28px 0 18px;padding:15px 17px;border:1px solid rgba(107,159,212,.16);border-radius:20px;background:rgba(255,255,255,.46);backdrop-filter:blur(12px)}.service-detail-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:14px;flex:none}.service-detail div:last-child{display:flex;flex-direction:column;gap:4px}.service-detail strong{font-size:14px;color:#292347}.service-detail span{font-size:12px;color:#72758a;line-height:1.65}.text-cta{display:inline-flex;align-items:center;gap:8px;color:#5d83be;font-size:14px;font-weight:900;text-decoration:none}.text-cta:hover{color:#be6f98}.service-tabs{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;margin-top:46px}.service-tab{display:flex;align-items:center;justify-content:center;gap:7px;min-height:54px;padding:10px 11px;border:1px solid rgba(255,255,255,.6);border-radius:18px;background:rgba(255,255,255,.44);color:#60657b;font:inherit;font-size:11px;font-weight:800;cursor:pointer;transition:transform 180ms ease,background 180ms ease,color 180ms ease,box-shadow 180ms ease}.service-tab:hover,.service-tab.is-active{transform:translateY(-3px);background:rgba(255,255,255,.82);color:#292347;box-shadow:0 14px 28px rgba(81,69,139,.11)}.service-tab.is-active{border-color:color-mix(in srgb,var(--tab-color) 40%,white);box-shadow:0 12px 24px color-mix(in srgb,var(--tab-color) 18%,transparent)}.service-tab-icon{width:28px;height:28px;display:grid;place-items:center;border-radius:10px;background:color-mix(in srgb,var(--tab-color) 16%,white);color:var(--tab-color)}.ecommerce-section{background:#f4f0ff}.ecommerce-layout{grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr)}.ecommerce-visual{min-height:570px}.commerce-ring{position:absolute;width:520px;height:360px;border:1px solid rgba(107,159,212,.24);border-radius:50%;transform:rotate(-13deg);box-shadow:0 0 0 28px rgba(107,159,212,.035),0 0 0 56px rgba(212,120,159,.025)}.statement-title{margin:0 0 22px;color:#282047;font-size:clamp(2.1rem,4vw,3.7rem);font-weight:950;line-height:1.1}.feature-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;margin:26px 0 30px}.feature-list div{display:flex;align-items:center;gap:8px;color:#555a70;font-size:12px;font-weight:800}.feature-list svg{flex:none;color:#6B9FD4;padding:3px;width:21px;height:21px;border-radius:50%;background:rgba(107,159,212,.12)}.commerce-float{position:absolute;z-index:4;display:flex;align-items:center;gap:6px;padding:9px 11px;border:1px solid rgba(255,255,255,.74);border-radius:14px;background:rgba(255,255,255,.72);color:#575671;font-size:10px;font-weight:900;box-shadow:0 12px 26px rgba(63,55,114,.12);backdrop-filter:blur(12px);animation:float 4.8s ease-in-out infinite}.commerce-float svg{color:#D4789F}.commerce-float.bag{top:19%;right:4%}.commerce-float.order{top:32%;left:3%;animation-delay:-1.2s}.commerce-float.cart{bottom:18%;right:2%;animation-delay:-2.3s}.commerce-float.sale{bottom:10%;left:8%;animation-delay:-3.1s}.marketing-section{background:linear-gradient(135deg,#e9e5fa 0%,#d8daf4 100%)}.marketing-layout{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr)}.marketing-visual{min-height:520px}.marketing-visual img{width:min(100%,600px);max-height:600px}.social-orbit{position:absolute;border:1px solid rgba(107,159,212,.2);border-radius:50%;transform:rotate(-14deg)}.orbit-a{width:75%;height:48%}.orbit-b{width:55%;height:34%;border-color:rgba(212,120,159,.28);transform:rotate(22deg)}.social-icon{position:absolute;z-index:4;width:42px;height:42px;display:grid;place-items:center;border-radius:14px;color:#fff;font-weight:900;box-shadow:0 14px 24px rgba(57,45,111,.15);animation:float 4.2s ease-in-out infinite}.social-icon.tiktok{top:18%;right:13%;background:#171827;font-size:27px}.social-icon.snap{top:43%;left:6%;background:#f7dc37;color:#111;animation-delay:-1.4s}.social-icon.insta{bottom:20%;right:9%;background:linear-gradient(145deg,#7747a8,#ef6f9b 65%,#f9b05d);animation-delay:-2.6s}.marketing-service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 18px;max-width:520px;margin:26px 0 28px}.marketing-service{display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid rgba(64,60,112,.12)}.marketing-service span{color:#b173a0;font:800 10px/1 monospace}.marketing-service b{color:#44485e;font-size:12px}.results-section{position:relative;overflow:hidden;padding:120px 0;background:linear-gradient(135deg,#17152f 0%,#242043 52%,#3d315b 100%);color:#fff}.results-section::before{content:"";position:absolute;inset:0;opacity:.22;background-image:linear-gradient(rgba(218,207,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(218,207,255,.16) 1px,transparent 1px);background-size:56px 56px;mask-image:linear-gradient(to bottom,black,transparent 86%)}.results-layout{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:70px;align-items:center}.results-copy h2{margin:0 0 20px;color:#fff;font-size:clamp(2rem,4vw,4rem);font-weight:950;line-height:1.18;letter-spacing:-.04em}.results-copy h2 span{color:#ffbfd6}.results-copy p{max-width:420px;color:rgba(245,242,255,.68);font-size:15px;line-height:2}.results-note{display:flex;align-items:flex-start;gap:10px;max-width:410px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.14);color:rgba(245,242,255,.55);font-size:12px;line-height:1.8}.results-note svg{flex:none;color:#d9c8ff}.results-dashboard{position:relative;overflow:hidden;min-height:470px;padding:22px;border:1px solid rgba(226,217,255,.16);border-radius:28px;background:rgba(255,255,255,.07);box-shadow:0 26px 70px rgba(7,4,29,.22);backdrop-filter:blur(14px)}.results-visual{position:relative;min-height:470px;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;border:1px solid rgba(226,217,255,.16);border-radius:28px;background:radial-gradient(circle at 50% 36%,rgba(126,102,186,.34),transparent 46%),linear-gradient(145deg,rgba(255,255,255,.1),rgba(255,255,255,.025));box-shadow:0 26px 70px rgba(7,4,29,.22)}.results-visual::before{content:"";position:absolute;inset:0;opacity:.14;background-image:linear-gradient(rgba(226,217,255,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(226,217,255,.22) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,transparent,black 18%,transparent 92%)}.results-data-status{position:absolute;top:24px;right:24px;z-index:3;display:flex;flex-direction:column;align-items:flex-start;gap:6px;max-width:230px;padding:14px 16px;border:1px solid rgba(255,191,214,.2);border-radius:18px;background:rgba(20,16,48,.42);color:#fff;backdrop-filter:blur(12px)}.results-data-status svg{color:#ffbfd6}.results-data-status span{font-size:12px;font-weight:900}.results-data-status small{color:rgba(240,236,255,.48);font-size:10px;line-height:1.7}.results-visual .results-character{position:relative;bottom:auto;left:auto;z-index:2;width:min(78%,390px);max-height:410px;object-fit:contain;object-position:center bottom;filter:drop-shadow(0 18px 22px rgba(7,4,29,.24))}.dashboard-top{display:flex;align-items:center;justify-content:space-between;gap:12px;color:#eeeaff;font-size:12px;font-weight:900}.dashboard-status{display:inline-flex;align-items:center;gap:6px;color:rgba(238,234,255,.5);font-size:10px;font-weight:700}.dashboard-status i{width:7px;height:7px;border-radius:50%;background:#ffbfd6}.dashboard-empty-state{min-height:380px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:40px 20px;text-align:center}.dashboard-empty-icon{display:grid;place-items:center;width:58px;height:58px;margin-bottom:4px;border:1px solid rgba(255,191,214,.26);border-radius:18px;background:rgba(255,191,214,.1);color:#ffbfd6}.dashboard-empty-state strong{color:#fff;font-size:18px;font-weight:950}.dashboard-empty-state p{max-width:260px;margin:0;color:rgba(240,236,255,.52);font-size:11px;line-height:1.8}.metric-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:22px 0 14px}.metric-card{display:flex;flex-direction:column;gap:5px;padding:14px 12px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:rgba(255,255,255,.06)}.metric-card small{color:rgba(240,236,255,.52);font-size:9px}.metric-card strong{color:#fff;font-size:28px;line-height:1;font-weight:950}.metric-card span{color:rgba(240,236,255,.38);font-size:8px;line-height:1.5}.dashboard-chart{position:relative;height:235px;margin-top:10px;border-radius:20px;overflow:hidden;background:rgba(9,7,30,.28)}.chart-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:38px 38px;mask-image:linear-gradient(to bottom,black,transparent)}.chart-placeholder{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;color:rgba(240,236,255,.68);font-size:12px;font-weight:800;text-align:center}.chart-placeholder span:last-child{color:rgba(240,236,255,.38);font-size:10px;font-weight:600}.results-character{position:absolute;bottom:-12px;left:3%;z-index:2;width:180px;max-height:300px;object-fit:contain;object-position:center bottom;filter:drop-shadow(0 18px 22px rgba(7,4,29,.24))}.vision-section{position:relative;overflow:hidden;padding:130px 0;background:linear-gradient(135deg,#eeeaff 0%,#dad8f1 45%,#c8cce9 100%);text-align:center}.vision-pattern{position:absolute;inset:0;opacity:.28;background-image:linear-gradient(30deg,rgba(107,159,212,.12) 12%,transparent 12.5%,transparent 87%,rgba(107,159,212,.12) 87.5%,rgba(107,159,212,.12)),linear-gradient(150deg,rgba(212,120,159,.08) 12%,transparent 12.5%,transparent 87%,rgba(212,120,159,.08) 87.5%,rgba(212,120,159,.08));background-size:72px 124px}.vision-glow{position:absolute;border-radius:50%;filter:blur(2px);pointer-events:none}.vision-glow-a{top:-140px;right:12%;width:430px;height:430px;background:radial-gradient(circle,rgba(107,159,212,.24),transparent 68%)}.vision-glow-b{bottom:-180px;left:8%;width:460px;height:460px;background:radial-gradient(circle,rgba(212,120,159,.18),transparent 68%)}.vision-skyline{position:absolute;right:0;bottom:0;left:0;height:180px;display:flex;align-items:flex-end;gap:18px;padding:0 7%;opacity:.42;pointer-events:none;background:linear-gradient(to top,rgba(61,62,110,.14),transparent 80%);mask-image:linear-gradient(to top,black,transparent 92%)}.vision-skyline i{display:block;flex:1;max-width:150px;height:var(--tower-height,90px);border-top:1px solid rgba(79,83,132,.38);background:linear-gradient(180deg,rgba(93,96,153,.2),rgba(93,96,153,.04));clip-path:polygon(0 7%,72% 7%,72% 0,100% 0,100% 100%,0 100%)}.vision-skyline i:nth-child(1){--tower-height:78px}.vision-skyline i:nth-child(2){--tower-height:128px;clip-path:polygon(0 8%,56% 8%,56% 0,74% 0,74% 12%,100% 12%,100% 100%,0 100%)}.vision-skyline i:nth-child(3){--tower-height:102px}.vision-skyline i:nth-child(4){--tower-height:150px;clip-path:polygon(0 10%,22% 10%,22% 0,42% 0,42% 6%,100% 6%,100% 100%,0 100%)}.vision-skyline i:nth-child(5){--tower-height:68px}.vision-skyline span{position:absolute;bottom:12px;left:7%;color:rgba(67,69,116,.48);font-size:9px;font-weight:900;letter-spacing:.08em}.vision-inner{max-width:760px}.vision-inner h2{font-size:clamp(2.2rem,5vw,4.7rem)}.vision-inner p{max-width:650px;margin:0 auto 20px;color:#52566c;font-size:17px;line-height:2}.vision-secondary{font-size:14px!important;color:#74778d!important}.vision-line{display:flex;align-items:center;justify-content:center;gap:16px;margin:36px auto 14px;color:#3f4562;font-size:13px;font-weight:900}.vision-line svg{color:#D4789F}.vision-inner small{color:#888ba0;font-size:10px}.packages-section{padding:100px 0;background:rgba(255,255,255,.28)}.packages-heading{text-align:center;margin-bottom:44px}.packages-heading h2{font-size:clamp(2rem,3.5vw,3rem)}.packages-heading p{max-width:600px;margin:0 auto;color:#6B7280;font-size:15px;line-height:1.8}.packages-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:16px;align-items:stretch}.package-card{position:relative;display:flex;flex-direction:column;padding:22px;border:1px solid rgba(255,255,255,.8);border-radius:22px;background:rgba(255,255,255,.78);box-shadow:0 12px 30px rgba(55,64,110,.07)}.package-card.featured{color:#fff;border:0;background:linear-gradient(160deg,rgba(31,41,71,.98),rgba(58,39,88,.98));box-shadow:0 18px 40px rgba(58,39,88,.2)}.package-badge{align-self:flex-start;margin-bottom:14px;padding:5px 10px;border-radius:50px;background:rgba(212,120,159,.16);color:#b45f87;font-size:10px;font-weight:900}.featured .package-badge{background:rgba(212,120,159,.24);color:#ffd8e8}.package-card h3{margin:0 0 10px;font-size:18px;font-weight:900}.package-card>p{min-height:68px;margin:0;color:#6B7280;font-size:12px;line-height:1.8}.featured>p{color:rgba(255,255,255,.72)}.package-price{display:flex;align-items:baseline;gap:6px;margin:16px 0 18px}.package-price strong{font-size:26px;font-weight:950}.package-price span,.package-price del{color:#8b91a5;font-size:10px}.featured .package-price span,.featured .package-price del{color:#c6c8df}.package-price del{margin-right:auto}.package-features{flex:1;padding-top:14px;border-top:1px solid rgba(31,41,71,.08)}.featured .package-features{border-top-color:rgba(255,255,255,.14)}.package-features div{display:flex;align-items:flex-start;gap:7px;margin-bottom:9px;color:#596174;font-size:11px;line-height:1.6}.featured .package-features div{color:rgba(255,255,255,.84)}.package-features svg{flex:none;margin-top:3px;color:#6B9FD4}.featured .package-features svg{color:#e5a0bd}.package-card>a{display:block;margin-top:16px;padding:11px 14px;border-radius:50px;background:rgba(107,159,212,.1);color:#5d8dc0;text-align:center;font-size:12px;font-weight:900;text-decoration:none}.featured>a{color:#fff;background:linear-gradient(135deg,#6B9FD4,#D4789F)}.final-cta-section{position:relative;overflow:hidden;padding:112px 0;background:linear-gradient(135deg,#17152f 0%,#332351 100%)}.cta-orb{position:absolute;border-radius:50%;filter:blur(1px);pointer-events:none}.cta-orb-a{top:-210px;right:8%;width:480px;height:480px;background:radial-gradient(circle,rgba(107,159,212,.24),transparent 66%)}.cta-orb-b{bottom:-190px;left:4%;width:430px;height:430px;background:radial-gradient(circle,rgba(212,120,159,.22),transparent 66%)}.cta-layout{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:50px;align-items:center}.cta-copy h2{margin:0 0 20px;color:#fff;font-size:clamp(2.4rem,5vw,5rem);font-weight:950;line-height:1.1;letter-spacing:-.04em}.cta-copy h2 span{background:linear-gradient(135deg,#d9c8ff,#ffb7d0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.cta-copy p{margin:0 0 30px;color:rgba(255,255,255,.7);font-size:18px;line-height:1.9}.cta-button{display:inline-flex;align-items:center;gap:10px;padding:15px 27px;border-radius:50px;background:linear-gradient(135deg,#e1d5ff,#ffbfd6);color:#211b3e;font-size:15px;font-weight:950;text-decoration:none;box-shadow:0 14px 32px rgba(19,14,47,.25)}.cta-contact{display:flex;flex-wrap:wrap;gap:18px;margin-top:28px}.cta-contact a{display:flex;align-items:center;gap:7px;color:rgba(255,255,255,.55);font-size:11px;text-decoration:none}.cta-contact svg{color:#ffbfd6}.cta-character{position:relative;min-height:430px;display:flex;align-items:center;justify-content:center}.cta-character img{position:relative;z-index:2;width:100%;max-height:500px;object-fit:contain;filter:drop-shadow(0 24px 30px rgba(8,6,28,.32))}.majlis-glow{position:absolute;width:70%;height:65%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.2),transparent 68%)}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes whatsappPulse{0%,100%{transform:scale(1);box-shadow:0 10px 26px rgba(37,211,102,.35)}50%{transform:scale(1.06);box-shadow:0 12px 32px rgba(37,211,102,.5)}}
        @media (max-width:900px){.coffee-layout,.ecommerce-layout,.marketing-layout,.results-layout,.cta-layout{grid-template-columns:1fr;gap:36px}.coffee-visual,.ecommerce-visual,.marketing-visual,.cta-character{order:-1;min-height:360px}.service-tabs{grid-template-columns:repeat(4,1fr)}.results-character{width:150px}.results-copy{order:0}.results-dashboard{min-height:450px}}
        @media (max-width:620px){.section-shell{width:min(100% - 32px,520px)}.creative-section,.results-section,.vision-section,.packages-section,.final-cta-section{padding:78px 0}.coffee-visual,.ecommerce-visual,.marketing-visual,.cta-character{min-height:310px}.coffee-visual img,.ecommerce-visual img,.marketing-visual img{max-height:360px}.coffee-halo{width:290px;height:290px}.coffee-stamp{left:0;bottom:7%;font-size:9px}.service-tabs{grid-template-columns:repeat(2,1fr);gap:8px;margin-top:30px}.service-tab{justify-content:flex-start;font-size:10px}.feature-list,.marketing-service-grid{grid-template-columns:1fr}.commerce-ring{width:330px;height:235px}.commerce-float{font-size:8px;padding:7px 8px}.commerce-float.bag{top:13%;right:0}.commerce-float.order{top:31%;left:0}.commerce-float.cart{bottom:17%;right:0}.commerce-float.sale{bottom:7%;left:2%}.metric-row{grid-template-columns:repeat(2,1fr)}.metric-card strong{font-size:24px}.results-dashboard{padding:14px;border-radius:22px}.dashboard-top{align-items:flex-start;flex-direction:column}.dashboard-chart{height:200px}.results-character{width:118px;left:0}.vision-inner p{font-size:15px}.packages-grid{grid-template-columns:1fr}.cta-copy p{font-size:16px}.cta-character img{max-height:330px}.cta-contact{flex-direction:column;gap:10px}}
        @media (prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation:none!important;transition:none!important}.hero-visual-wrap,.hero-future-grid,.hero-skyline,.hero-floating-note{transform:none!important}.commerce-float,.social-icon{animation:none!important}}
      `}</style>
    </div>
  );
}
