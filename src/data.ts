/* ============================================
   AMOSCO RESTAURANT - DATA & CONTENT
   ============================================
   EDIT THIS FILE to change menu items, prices,
   contact details, and other content.
   ============================================ */

// ─── CONTACT & BUSINESS DETAILS ─────────────────────
// Change these values to update contact info across the entire site
export const businessInfo = {
  name: "Amosco Restaurant",
  tagline: "Where Every Bite Tells a Story",
  subtitle: "Authentic Nigerian & Continental Cuisine",
  address: "15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  phone: "+2348164896024",
  phoneDisplay: "+234 816 489 6024",
  whatsapp: "2348164896024", // No + sign, no spaces
  whatsappMessage: "Hi Amosco, I'd like to order...",
  email: "info@amoscorestaurant.com",
  hours: {
    weekday: "Mon - Sat: 9:00 AM - 10:00 PM",
    weekend: "Sunday: 12:00 PM - 9:00 PM",
  },
  services: ["Dine-in", "Takeaway", "Delivery", "Events", "Catering"],
  social: {
    instagram: "https://instagram.com/amoscorestaurant",
    facebook: "https://facebook.com/amoscorestaurant",
    tiktok: "https://tiktok.com/@amoscorestaurant",
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.45!3d6.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDguMCJOIDPCsDI3JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890",
  mapLink: "https://maps.google.com/?q=15+Admiralty+Way+Lekki+Lagos+Nigeria",
};

// ─── ABOUT US ───────────────────────────────────────
export const aboutUs = {
  story: `Amosco Restaurant was born from a simple dream — to bring the rich, bold flavours of Nigerian cuisine to every table with warmth and pride. Since our doors first opened, we've been serving up hearty portions of jollof rice, perfectly grilled fish, and soul-warming soups that remind you of home.

Our kitchen blends time-honoured recipes passed down through generations with fresh, continental influences — creating a menu that satisfies every craving. Whether you're here for a family dinner, a business lunch, or a celebration, we promise food made with love and service that feels like family.`,
  highlights: [
    { icon: "🍳", title: "Fresh Daily", desc: "Ingredients sourced fresh every morning" },
    { icon: "👨‍🍳", title: "Expert Chefs", desc: "Skilled cooks with 10+ years experience" },
    { icon: "🚚", title: "Fast Delivery", desc: "Hot food delivered to your doorstep" },
    { icon: "❤️", title: "Made with Love", desc: "Every dish prepared with care" },
  ],
};

// ─── MENU ITEMS ─────────────────────────────────────
// Add, remove, or edit items here. Prices are in Naira (₦).
export const menuCategories = [
  { id: "rice", name: "Rice Dishes", icon: "🍚" },
  { id: "soups", name: "Soups & Swallow", icon: "🥘" },
  { id: "grills", name: "Grills & Proteins", icon: "🍗" },
  { id: "swallows", name: "Swallows", icon: "🫓" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
];

export const menuItems = [
  // Rice Dishes
  { id: 1, category: "rice", name: "Jollof Rice & Chicken", desc: "Smoky party-style jollof with grilled chicken", price: 3500 },
  { id: 2, category: "rice", name: "Jollof Rice & Fish", desc: "Jollof rice served with fried or grilled fish", price: 4000 },
  { id: 3, category: "rice", name: "Fried Rice & Chicken", desc: "Nigerian fried rice with mixed vegetables and chicken", price: 3500 },
  { id: 4, category: "rice", name: "Coconut Rice & Shrimp", desc: "Creamy coconut rice with grilled prawns", price: 5500 },
  { id: 5, category: "rice", name: "Ofada Rice & Ayamase", desc: "Local ofada rice with designer stew and assorted meat", price: 4500 },
  { id: 6, category: "rice", name: "White Rice & Egusi", desc: "Fluffy white rice with rich egusi soup", price: 3000 },

  // Soups & Swallow Combos
  { id: 7, category: "soups", name: "Egusi Soup (Wrap)", desc: "Melon seed soup with assorted meat and stockfish", price: 3000 },
  { id: 8, category: "soups", name: "Ogbono Soup (Wrap)", desc: "Draw soup with beef, tripe, and dried fish", price: 3000 },
  { id: 9, category: "soups", name: "Banga Soup (Wrap)", desc: "Palm nut soup with catfish and periwinkles", price: 3500 },
  { id: 10, category: "soups", name: "Pepper Soup (Goat)", desc: "Spicy goat meat pepper soup with herbs", price: 4000 },
  { id: 11, category: "soups", name: "Edikang Ikong (Wrap)", desc: "Vegetable soup with assorted proteins", price: 4000 },
  { id: 12, category: "soups", name: "Efo Riro (Wrap)", desc: "Rich vegetable soup with locust beans and meat", price: 2500 },

  // Grills & Proteins
  { id: 13, category: "grills", name: "Grilled Whole Fish", desc: "Seasoned whole tilapia, grilled to perfection", price: 5000 },
  { id: 14, category: "grills", name: "Grilled Chicken (Full)", desc: "Marinated whole chicken, charcoal grilled", price: 6000 },
  { id: 15, category: "grills", name: "Grilled Chicken (Half)", desc: "Half portion of our signature grilled chicken", price: 3500 },
  { id: 16, category: "grills", name: "Suya (Beef)", desc: "Spicy grilled beef skewers with yaji spice", price: 2500 },
  { id: 17, category: "grills", name: "Asun (Spicy Goat)", desc: "Peppered grilled goat meat, smoky and hot", price: 4500 },
  { id: 18, category: "grills", name: "Grilled Prawns (6pcs)", desc: "Jumbo prawns with garlic butter sauce", price: 7000 },

  // Swallows
  { id: 19, category: "swallows", name: "Pounded Yam", desc: "Smooth, stretchy pounded yam", price: 1500 },
  { id: 20, category: "swallows", name: "Amala", desc: "Soft yam flour swallow", price: 1000 },
  { id: 21, category: "swallows", name: "Eba (Garri)", desc: "Cassava flour swallow", price: 800 },
  { id: 22, category: "swallows", name: "Fufu (Akpu)", desc: "Fermented cassava swallow", price: 1000 },
  { id: 23, category: "swallows", name: "Semovita", desc: "Semolina wheat swallow", price: 1000 },
  { id: 24, category: "swallows", name: "Wheat", desc: "Whole wheat swallow", price: 1200 },

  // Drinks
  { id: 25, category: "drinks", name: "Chapman", desc: "Classic Nigerian cocktail with fruits", price: 1500 },
  { id: 26, category: "drinks", name: "Zobo Drink", desc: "Hibiscus drink with ginger and pineapple", price: 800 },
  { id: 27, category: "drinks", name: "Fresh Fruit Juice", desc: "Blended seasonal fruits", price: 1200 },
  { id: 28, category: "drinks", name: "Soft Drinks", desc: "Coca-Cola, Fanta, Sprite", price: 500 },
  { id: 29, category: "drinks", name: "Water (Bottled)", desc: "50cl bottled water", price: 300 },
  { id: 30, category: "drinks", name: "Malt Drink", desc: "Maltina or Supermalt", price: 700 },

  // Desserts
  { id: 31, category: "desserts", name: "Puff Puff (10pcs)", desc: "Soft, sweet fried dough balls", price: 1000 },
  { id: 32, category: "desserts", name: "Ice Cream", desc: "Vanilla, chocolate, or strawberry", price: 1500 },
  { id: 33, category: "desserts", name: "Fruit Salad", desc: "Fresh seasonal fruits with cream", price: 2000 },
  { id: 34, category: "desserts", name: "Chin Chin (Pack)", desc: "Crunchy fried pastry snack", price: 800 },
  { id: 35, category: "desserts", name: "Coconut Candy", desc: "Traditional coconut sweet", price: 500 },
  { id: 36, category: "desserts", name: "Plantain Fritters", desc: "Sweet ripe plantain fritters", price: 1200 },
];

// ─── GALLERY IMAGES ─────────────────────────────────
// Replace these with your actual restaurant photos
export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop", alt: "Jollof rice with grilled chicken", caption: "Signature Jollof Rice" },
  { id: 2, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop", alt: "Grilled fish platter", caption: "Fresh Grilled Fish" },
  { id: 3, src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop", alt: "Suya skewers", caption: "Spicy Suya" },
  { id: 4, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop", alt: "Restaurant dining area", caption: "Our Dining Space" },
  { id: 5, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop", alt: "Elegant table setup", caption: "Fine Dining Experience" },
  { id: 6, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop", alt: "Pizza and continental dish", caption: "Continental Specials" },
  { id: 7, src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop", alt: "Fresh fruit drinks", caption: "Fresh Drinks" },
  { id: 8, src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop", alt: "Colorful Nigerian dishes", caption: "Nigerian Delicacies" },
];

// ─── TESTIMONIALS ───────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Chioma A.",
    role: "Regular Customer",
    text: "Amosco's jollof rice is the best in Lagos! Every time I bring my family here, the kids ask when we're coming back. The portions are generous and the taste is consistently amazing.",
    rating: 5,
    avatar: "CA",
  },
  {
    id: 2,
    name: "Emmanuel O.",
    role: "Food Blogger",
    text: "As a food blogger, I've eaten at dozens of restaurants in Lagos. Amosco stands out for their authentic flavours and warm service. The pepper soup is absolutely divine!",
    rating: 5,
    avatar: "EO",
  },
  {
    id: 3,
    name: "Aisha M.",
    role: "Event Client",
    text: "They catered my wedding reception for 200 guests and everything was perfect. The food was delicious, delivery was on time, and the setup was beautiful. Highly recommended!",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 4,
    name: "Tunde B.",
    role: "Corporate Client",
    text: "We order from Amosco every Friday for our office lunch. The delivery is always prompt, the food arrives hot, and my colleagues look forward to it all week. Great value for money!",
    rating: 5,
    avatar: "TB",
  },
];

// ─── NAVIGATION LINKS ───────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
