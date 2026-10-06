import { useState, useEffect } from "react";
import {
  businessInfo,
  aboutUs,
  menuCategories,
  menuItems,
  galleryImages,
  testimonials,
  navLinks,
} from "./data";

/* ============================================
   AMOSCO RESTAURANT - MAIN APP COMPONENT
   ============================================
   This is a single-page app with smooth scrolling.
   Each section is a separate component below.
   ============================================ */

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ─── HEADER / NAVIGATION ─────────────────────────── */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🍽️</span>
            <span
              className={`font-[var(--font-heading)] text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? "text-[var(--color-primary)]" : "text-white"
              }`}
            >
              Amosco
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-gold)] ${
                  isScrolled ? "text-[var(--color-text)]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(businessInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[var(--color-primary)]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl mobile-menu-enter">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[var(--color-text)] py-3 px-4 rounded-lg hover:bg-[var(--color-cream)] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(businessInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[var(--color-primary)] text-white py-3 px-4 rounded-lg text-center font-semibold"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── HERO SECTION ─────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/bc8e7ec2-325a-4fa0-a42a-c4998ae1426e/_result.png"
          alt="Delicious Nigerian food at Amosco Restaurant"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-[var(--color-gold)] font-medium text-sm sm:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
          {businessInfo.subtitle}
        </p>
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up delay-100">
          {businessInfo.name}
        </h1>
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-200">
          {businessInfo.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" }); }}
            className="w-full sm:w-auto bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 shadow-lg"
          >
            View Menu
          </a>
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(businessInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT SECTION ────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            About Amosco
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://image.qwenlm.ai/generated-images/2490381d-43fb-4199-adef-e0c36bd6ccdf/_result.png"
              alt="Amosco Restaurant interior and dining experience"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-[var(--color-primary)] text-white p-4 rounded-xl shadow-lg hidden md:block">
              <p className="font-[var(--font-heading)] text-2xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[var(--color-text)] text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
              {aboutUs.story}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutUs.highlights.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm card-hover">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="font-semibold text-[var(--color-dark)] text-sm">{item.title}</h4>
                  <p className="text-[var(--color-text-light)] text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MENU SECTION ─────────────────────────────────── */
function Menu() {
  const [activeCategory, setActiveCategory] = useState("rice");

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            What We Serve
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Our Menu
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide justify-start md:justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[var(--color-primary)] text-white shadow-lg"
                  : "bg-[var(--color-cream)] text-[var(--color-text)] hover:bg-[var(--color-cream-dark)]"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-5 card-hover shadow-sm"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-dark)] text-base md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
                <span className="text-[var(--color-primary)] font-bold text-lg whitespace-nowrap">
                  ₦{item.price.toLocaleString()}
                </span>
              </div>
              {/* Order button for this item */}
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name} (₦${item.price.toLocaleString()})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium hover:underline"
              >
                Order this →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hello! I'd like to see the full menu and place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-all hover:scale-105 shadow-lg"
          >
            <span>📱</span> Order Full Meal on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY SECTION ──────────────────────────────── */
function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            Visual Feast
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Gallery
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="gallery-item cursor-pointer aspect-square"
              onClick={() => setLightboxImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 lightbox-overlay flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src.replace("w=600&h=400", "w=1200&h=800")}
              alt={lightboxImage.alt}
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 font-medium text-lg">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── TESTIMONIALS SECTION ─────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            What People Say
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Customer Reviews
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--color-cream)] rounded-2xl p-6 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[var(--color-gold)] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-text)] text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-dark)] text-sm">{t.name}</p>
                  <p className="text-[var(--color-text-light)] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── LOCATION & HOURS SECTION ─────────────────────── */
function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            Find Us
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Location & Hours
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96">
            <iframe
              src={businessInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amosco Restaurant location on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-dark)]">Address</h4>
                  <p className="text-[var(--color-text-light)]">{businessInfo.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-dark)]">Opening Hours</h4>
                  <p className="text-[var(--color-text-light)]">{businessInfo.hours.weekday}</p>
                  <p className="text-[var(--color-text-light)]">{businessInfo.hours.weekend}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-dark)]">Phone</h4>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-[var(--color-primary)] font-medium hover:underline"
                  >
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={businessInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-all hover:scale-105 shadow-lg mt-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT / RESERVATION SECTION ────────────────── */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `🍽️ *Reservation Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}%0A*Message:* ${formData.message || "None"}`;
    window.open(
      `https://wa.me/${businessInfo.whatsapp}?text=${whatsappText}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-2">
            Book a Table
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-dark)] mb-4">
            Make a Reservation
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-[var(--color-text-light)] mt-4 max-w-lg mx-auto">
            Reserve your table and let us prepare a memorable dining experience for you.
            Your reservation will be sent via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--color-cream)] rounded-2xl p-6 md:p-10 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                  placeholder="+234..."
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                />
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20, 30, 50].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-dark)] mb-1.5">
                  Special Request
                </label>
                <input
                  type="text"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
                  placeholder="Any special requests?"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reserve via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ───────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="font-[var(--font-heading)] text-2xl font-bold">
                {businessInfo.name}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {businessInfo.tagline}. Serving authentic Nigerian and continental cuisine with love and pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}
                  className="text-white/70 hover:text-[var(--color-gold)] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/70">📍 {businessInfo.address}</p>
              <p>
                <a href={`tel:${businessInfo.phone}`} className="text-white/70 hover:text-[var(--color-gold)] transition-colors">
                  📞 {businessInfo.phoneDisplay}
                </a>
              </p>
              <p className="text-white/70">🕐 {businessInfo.hours.weekday}</p>
              <p className="text-white/70">🕐 {businessInfo.hours.weekend}</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={businessInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Made with ❤️ in Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── FLOATING WHATSAPP BUTTON ─────────────────────── */
function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(businessInfo.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl whatsapp-pulse hover:scale-110 transition-transform animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
