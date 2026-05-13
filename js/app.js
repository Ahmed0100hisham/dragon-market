/* ═══════════════════════════════════════════════════════════════
   DRAGON MARKET — Complete Premium JavaScript Application
   Pure Vanilla JS | SPA | Cart | Wishlist | Animations | Chat
   ═══════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────
   1. DATA
   ──────────────────────────────────────────── */

const PRODUCTS = [
  { id:"hanfu-red-dragon", name:"Imperial Red Dragon Hanfu", price:289, originalPrice:350, category:"Heritage", subCategory:"Hanfu", description:"Traditional Chinese Hanfu imperial robe with golden dragon embroidery on crimson silk.", longDescription:"A magnificent traditional Chinese Hanfu robe in imperial crimson red, adorned with hand-embroidered golden dragons symbolizing power and prosperity. Crafted from premium mulberry silk using centuries-old weaving techniques passed down through generations of master artisans. This flowing ceremonial garment captures the majesty of the Ming Dynasty imperial court with its wide sleeves, cross-collar design, and intricate gold thread detailing that catches the light with every movement.", images:["images/clothing/hanfu-red-dragon.jpg"], colors:[{name:"Imperial Red",hex:"#bb0014"},{name:"Royal Gold",hex:"#D4AF37"},{name:"Deep Black",hex:"#0A0A0A"}], sizes:["S","M","L","XL","XXL"], rating:4.9, reviewCount:156, details:["100% Hand-woven Mulberry Silk","Traditional Imperial Dragon Embroidery","Cross-collar wrapping design (Jiaoling Youren)","Wide flowing sleeves with gold trim","Hand-finished with traditional frog closures"], isNew:true },
  { id:"qipao-emerald-phoenix", name:"Emerald Phoenix Qipao", price:195, category:"Heritage", subCategory:"Qipao", description:"Elegant emerald green silk Qipao with golden phoenix embroidery.", longDescription:"A stunning traditional Chinese Qipao (Cheongsam) in deep emerald green silk, featuring exquisite golden phoenix embroidery that symbolizes grace, beauty, and feminine virtue. This form-fitting dress follows the classic Shanghai-style Qipao silhouette with a high mandarin collar, symmetric frog closures, and elegant side slits.", images:["images/clothing/qipao-emerald.jpg"], colors:[{name:"Emerald Green",hex:"#006400"},{name:"Imperial Red",hex:"#bb0014"}], sizes:["XS","S","M","L","XL"], rating:4.8, reviewCount:203, details:["Premium emerald silk satin","Hand-embroidered golden phoenix","Traditional mandarin collar","Custom piping and frog closures"], isNew:true },
  { id:"tang-emperor-robe", name:"Tang Dynasty Emperor Robe", price:899, originalPrice:1200, category:"Heritage", subCategory:"Ceremonial", description:"Reproduction Tang Dynasty emperor ceremonial robe.", longDescription:"An authentic reproduction of the legendary Tang Dynasty emperor ceremonial robe crafted from heavy yellow silk brocade with magnificent cloud and dragon patterns.", images:["images/clothing/tang-emperor.jpg"], colors:[{name:"Imperial Yellow",hex:"#FFD700"}], sizes:["M","L","XL","One Size"], rating:5.0, reviewCount:47, details:["Heavy silk brocade","Twelve imperial symbols","Gold thread dragon medallions"] },
  { id:"ming-scholar-robe", name:"Ming Dynasty Scholar Robe", price:245, category:"Heritage", subCategory:"Scholar", description:"Traditional Ming Dynasty scholar robe in navy blue.", longDescription:"A refined Ming Dynasty scholar robe in deep navy blue silk adorned with graceful white crane embroidery.", images:["images/clothing/ming-scholar.jpg"], colors:[{name:"Navy Blue",hex:"#000080"},{name:"Scholar Gray",hex:"#696969"}], sizes:["S","M","L","XL"], rating:4.7, reviewCount:89, details:["Premium navy blue silk","White crane embroidery","Matching scholar belt included"] },
  { id:"wedding-hanfu-red", name:"Traditional Chinese Wedding Hanfu", price:650, originalPrice:800, category:"Heritage", subCategory:"Wedding", description:"Traditional Chinese bridal Hanfu in brilliant red.", longDescription:"A breathtaking traditional Chinese bridal Hanfu set in brilliant auspicious red with golden phoenix crown.", images:["images/clothing/wedding-hanfu.jpg"], colors:[{name:"Bridal Red",hex:"#cc0000"}], sizes:["S","M","L","XL"], rating:5.0, reviewCount:178, details:["Multi-layered bridal red silk","Golden phoenix crown","Double happiness embroidery"], isNew:true },
  { id:"silk-jacket-gold-dragon", name:"Mandarin Silk Jacket", price:165, category:"Heritage", subCategory:"Jacket", description:"Mandarin collar jacket in black silk with gold dragon.", longDescription:"A sophisticated traditional Chinese mandarin collar jacket from premium black silk with stunning gold dragon pattern.", images:["images/clothing/silk-jacket-gold.jpg"], colors:[{name:"Ink Black",hex:"#0A0A0A"},{name:"Deep Navy",hex:"#000080"}], sizes:["S","M","L","XL","XXL"], rating:4.8, reviewCount:134, details:["Premium black silk","Woven gold dragon pattern","Mandarin collar"] },
  { id:"song-scholar-linen", name:"Song Dynasty Linen Scholar Set", price:175, category:"Heritage", subCategory:"Scholar", description:"Song Dynasty scholar outfit in natural beige linen.", longDescription:"An elegantly understated Song Dynasty scholar outfit in natural beige linen.", images:["images/clothing/song-scholar.jpg"], colors:[{name:"Natural Linen",hex:"#D2B48C"}], sizes:["S","M","L","XL"], rating:4.6, reviewCount:67, details:["100% natural linen","Cross-collared design","Breathable and lightweight"] },
  { id:"miao-embroidery-dress", name:"Miao Ethnic Silver Embroidery Dress", price:520, originalPrice:650, category:"Heritage", subCategory:"Ethnic", description:"Authentic Miao ethnic dress with silver ornaments.", longDescription:"An extraordinary authentic Miao ethnic minority dress from Guizhou province with batik dyeing techniques.", images:["images/clothing/miao-embroidery.jpg"], colors:[{name:"Indigo Blue",hex:"#2E0854"}], sizes:["S","M","L","One Size"], rating:4.9, reviewCount:56, details:["Traditional batik dyeing","Handcrafted silver ornaments","Each piece one-of-a-kind"], isNew:true },
  { id:"wushu-martial-uniform", name:"Traditional Wushu Kung Fu Uniform", price:125, category:"Heritage", subCategory:"Martial Arts", description:"Wushu martial arts uniform in white silk.", longDescription:"A traditional Chinese Wushu training uniform crafted from premium white silk.", images:["images/clothing/wushu-uniform.jpg"], colors:[{name:"Pure White",hex:"#FFFFFF"},{name:"Ink Black",hex:"#0A0A0A"}], sizes:["S","M","L","XL","XXL"], rating:4.7, reviewCount:201, details:["Premium white silk","Black dragon embroidery","Reinforced seams"] },
  { id:"children-hanfu-floral", name:"Children's Floral Hanfu Set", price:89, originalPrice:120, category:"Heritage", subCategory:"Children", description:"Children's Hanfu in pastel pink silk.", longDescription:"An adorable traditional Chinese Hanfu set for children in soft pastel pink silk.", images:["images/clothing/children-hanfu.jpg"], colors:[{name:"Pastel Pink",hex:"#FFB6C1"}], sizes:["2-3Y","4-5Y","6-7Y","8-9Y","10-12Y"], rating:4.9, reviewCount:312, details:["Soft pastel silk blend","Floral embroidery","Comfortable elastic waistband"], isNew:true },
  { id:"custom-dress-1", name:"Premium Custom Heritage Dress", price:299, originalPrice:399, category:"Heritage", subCategory:"Hanfu", description:"Exquisite custom-designed heritage dress with premium silk embroidery.", longDescription:"A stunning custom-designed heritage dress crafted from the finest silk with intricate embroidery patterns. This piece represents modern interpretation of traditional Chinese elegance.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.53 PM.jpeg"], colors:[{name:"Custom Design",hex:"#8B4513"}], sizes:["S","M","L","XL"], rating:5.0, reviewCount:42, details:["Premium silk material","Custom embroidery","Unique design"], isNew:true },
  { id:"custom-dress-2", name:"Elegant Traditional Robe", price:279, originalPrice:350, category:"Heritage", subCategory:"Hanfu", description:"Elegant traditional robe with sophisticated detailing.", longDescription:"A graceful traditional robe featuring sophisticated design and premium craftsmanship.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.53 PM (1).jpeg"], colors:[{name:"Cream",hex:"#FFFDD0"}], sizes:["S","M","L","XL"], rating:4.9, reviewCount:38, details:["Fine silk weave","Traditional design","Hand-finished"], isNew:true },
  { id:"custom-dress-3", name:"Imperial Silk Ensemble", price:349, originalPrice:450, category:"Heritage", subCategory:"Ceremonial", description:"Imperial silk ensemble with luxurious details.", longDescription:"An imperial silk ensemble perfect for special occasions and celebrations.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.53 PM (2).jpeg"], colors:[{name:"Imperial Red",hex:"#CC0000"}], sizes:["M","L","XL"], rating:5.0, reviewCount:45, details:["Pure silk","Imperial quality","Premium embroidery"], isNew:true },
  { id:"custom-dress-4", name:"Royal Heritage Dress", price:329, originalPrice:420, category:"Heritage", subCategory:"Qipao", description:"Royal heritage dress in elegant design.", longDescription:"A royal heritage dress combining traditional aesthetics with contemporary elegance.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.53 PM (3).jpeg"], colors:[{name:"Royal Blue",hex:"#4169E1"}], sizes:["XS","S","M","L","XL"], rating:4.9, reviewCount:51, details:["Premium material","Royal design","Exquisite details"], isNew:true },
  { id:"custom-dress-5", name:"Ceremonial Heritage Robe", price:389, originalPrice:500, category:"Heritage", subCategory:"Ceremonial", description:"Ceremonial robe for formal traditional occasions.", longDescription:"A magnificent ceremonial robe perfect for formal traditional celebrations and ceremonies.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.53 PM (4).jpeg"], colors:[{name:"Gold",hex:"#FFD700"}], sizes:["M","L","XL","One Size"], rating:5.0, reviewCount:48, details:["Ceremonial grade","Premium silk","Hand embroidered"], isNew:true },
  { id:"custom-dress-6", name:"Luxe Traditional Dress", price:259, originalPrice:330, category:"Heritage", subCategory:"Hanfu", description:"Luxurious traditional dress with fine details.", longDescription:"A luxurious traditional dress featuring fine embroidery and premium materials.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.54 PM.jpeg"], colors:[{name:"Burgundy",hex:"#800020"}], sizes:["S","M","L","XL"], rating:4.8, reviewCount:39, details:["Luxury materials","Fine embroidery","Premium finish"], isNew:true },
  { id:"custom-dress-7", name:"Scholar's Fine Garment", price:219, originalPrice:280, category:"Heritage", subCategory:"Scholar", description:"Scholar's fine garment with scholarly elegance.", longDescription:"A fine scholarly garment representing intellectual tradition and cultural refinement.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.54 PM (1).jpeg"], colors:[{name:"Scholar Gray",hex:"#808080"}], sizes:["S","M","L","XL"], rating:4.7, reviewCount:35, details:["Scholarly design","Natural dyes","Traditional weave"], isNew:true },
  { id:"custom-dress-8", name:"Heritage Wedding Ensemble", price:699, originalPrice:850, category:"Heritage", subCategory:"Wedding", description:"Heritage wedding ensemble for bridal ceremonies.", longDescription:"An exquisite heritage wedding ensemble designed for traditional bridal ceremonies with premium materials and detailed craftsmanship.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.55 PM.jpeg"], colors:[{name:"Wedding Red",hex:"#B22222"}], sizes:["S","M","L","XL"], rating:5.0, reviewCount:62, details:["Bridal quality","Premium embroidery","Wedding ensemble"], isNew:true },
  { id:"custom-dress-9", name:"Elegant Festival Dress", price:289, originalPrice:370, category:"Heritage", subCategory:"Hanfu", description:"Elegant festival dress for special celebrations.", longDescription:"An elegant festival dress perfect for celebrations and cultural events with traditional beauty.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.55 PM (1).jpeg"], colors:[{name:"Festival Red",hex:"#DC143C"}], sizes:["S","M","L","XL"], rating:4.9, reviewCount:44, details:["Festival style","Premium silk","Traditional patterns"], isNew:true },
  { id:"custom-dress-10", name:"Noble Heritage Attire", price:359, originalPrice:450, category:"Heritage", subCategory:"Ceremonial", description:"Noble heritage attire for distinguished occasions.", longDescription:"Noble heritage attire representing elegance and prestige for distinguished formal occasions.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.56 PM.jpeg"], colors:[{name:"Noble Purple",hex:"#663399"}], sizes:["M","L","XL"], rating:5.0, reviewCount:41, details:["Noble design","Premium material","Distinguished style"], isNew:true },
  { id:"custom-dress-11", name:"Artisan Heritage Collection", price:399, originalPrice:520, category:"Heritage", subCategory:"Ethnic", description:"Artisan heritage collection piece with unique craftsmanship.", longDescription:"A unique artisan heritage piece showcasing exceptional craftsmanship and cultural artistry.", images:["images/clothing/WhatsApp Image 2026-05-13 at 5.45.56 PM (1).jpeg"], colors:[{name:"Artisan Mix",hex:"#8B7355"}], sizes:["S","M","L","One Size"], rating:5.0, reviewCount:54, details:["Artisan crafted","Unique design","Cultural significance"], isNew:true }
];

const MENU_ITEMS = [
  { id:"peking-duck", name:"Imperial Peking Duck", price:58, category:"Signature", image:"images/food/peking-duck.jpg", desc:"Whole crispy golden roast duck with thin Mandarin pancakes, spring onions, cucumber, and rich hoisin sauce." },
  { id:"dim-sum-assorted", name:"Cantonese Dim Sum Platter", price:36, category:"Classic", image:"images/food/dim-sum.jpg", desc:"Handmade Har Gow crystal shrimp dumplings, Siu Mai pork dumplings, and Char Siu Bao BBQ pork buns." },
  { id:"sichuan-hot-pot", name:"Sichuan Spicy Hot Pot", price:45, category:"Signature", image:"images/food/hot-pot.jpg", desc:"Traditional dual-flavor hot pot with fiery Sichuan pepper broth and golden bone broth." },
  { id:"shanghai-xiaolongbao", name:"Shanghai Soup Dumplings", price:18, category:"Classic", image:"images/food/xiaolongbao.jpg", desc:"Delicate Xiaolongbao filled with savory pork broth with black vinegar and ginger." },
  { id:"kung-pao-chicken", name:"Authentic Kung Pao Chicken", price:22, category:"Classic", image:"images/food/kung-pao-chicken.jpg", desc:"Tender chicken wok-tossed with golden peanuts and Sichuan peppercorns." },
  { id:"longjing-tea-ceremony", name:"Longjing Tea Ceremony Set", price:35, category:"Tea", image:"images/food/tea-ceremony.jpg", desc:"Premium West Lake Longjing green tea with Yixing clay teapot and porcelain cups." },
  { id:"cantonese-sweet-sour-pork", name:"Cantonese Sweet and Sour Pork", price:20, category:"Classic", image:"images/food/sweet-sour-pork.jpg", desc:"Crispy pork chunks in tangy sweet and sour sauce with pineapple." },
  { id:"golden-spring-rolls", name:"Golden Crispy Spring Rolls", price:12, category:"Appetizer", image:"images/food/spring-rolls.jpg", desc:"Hand-rolled spring rolls with pork, cabbage, mushrooms, and glass noodles." },
  { id:"sichuan-mapo-tofu", name:"Authentic Sichuan Mapo Tofu", price:16, category:"Classic", image:"images/food/mapo-tofu.jpg", desc:"Silky tofu in fiery red chili oil sauce with Sichuan peppercorns." },
  { id:"lotus-mooncakes", name:"Traditional Mooncake Gift Box", price:28, category:"Dessert", image:"images/food/mooncakes.jpg", desc:"Handcrafted mooncakes with lotus seed paste and salted egg yolk." }
];

const OFFERS = [
  { title:"Imperial Welcome", code:"WELCOME20", discount:"20% OFF", description:"Available for your first purchase from the Heritage collection.", color:"red" },
  { title:"Lunar New Year", code:"DRAGON26", discount:"15% OFF", description:"Site-wide discount for the Year of the Dragon.", color:"gold" },
  { title:"Midnight Member", code:"SILK30", discount:"30% OFF", description:"Exclusive members-only preview access.", color:"black" }
];

const HERITAGE_JOURNEYS = [
  { year:"3000 BC", title:"The Silk Origin", desc:"The legendary discovery of silk by Empress Leizu. Ancient Chinese artisans developed the secret technique of creating the most luxurious fabric the world had ever known.", img:"images/heritage/silk-weaving.jpg", details:["Silk discovered by Empress Leizu","22,000-year-old fabric remnants","Silk Road established 130 BCE"] },
  { year:"618 AD", title:"The Golden Age of Tang", desc:"The Tang Dynasty ushered in China's golden age of fashion, culture, and cuisine. Imperial court dress reached unprecedented heights.", img:"images/clothing/tang-emperor.jpg", details:["Tang Dynasty lasted 289 years","Chang'an population exceeded 1 million","Cross-cultural exchange flourished"] },
  { year:"1368 AD", title:"Ming Dynasty Refinement", desc:"The Ming Dynasty brought refined elegance to Chinese dress and cuisine with the scholar-official class and Eight Great Culinary Traditions.", img:"images/heritage/calligraphy.jpg", details:["Scholar-Official dress codified","Eight Great Cuisines formalized","Forbidden City constructed"] },
  { year:"Present", title:"Preserving Living Heritage", desc:"Today, master artisans continue to preserve ancient traditions from Miao embroidery to tea ceremonies.", img:"images/heritage/tea-house.jpg", details:["UNESCO Intangible Heritage","1,000+ traditional crafts preserved","Heritage education programs"] }
];

const SIDEBAR_CATS = ["Hanfu", "Qipao", "Ceremonial", "Scholar", "Wedding", "Ethnic", "Martial Arts", "Children"];
const FOOD_CATS = ["All", "Signature", "Classic", "Tea", "Appetizer", "Dessert"];


/* ────────────────────────────────────────────
   2. STATE
   ──────────────────────────────────────────── */

let currentPage = 'home';
let currentProductId = null;
let isCartOpen = false;
let isMobileMenuOpen = false;
let isChatOpen = false;
let cart = JSON.parse(localStorage.getItem('dm-cart') || '[]');
let wishlistItems = JSON.parse(localStorage.getItem('dm-wishlist') || '[]');
let selectedShopCategory = 'All';
let selectedFoodCategory = 'All';
let chatMessages = [
  { role:'bot', text:"Greetings, traveler of the Digital Silk Road. How may I assist your journey through the Dragon Market today?" }
];

// Cursor state
let cursorX = 0, cursorY = 0;
let outlineX = 0, outlineY = 0;
let cursorVisible = false;
let isTouchDevice = false;

// Animation frame IDs for cleanup
let particleRAF = null;
let cursorRAF = null;


/* ────────────────────────────────────────────
   3. SVG ICONS
   ──────────────────────────────────────────── */

const ICONS = {
  flame: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFilled: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  bag: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  ticket: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  bot: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m18 15-6-6-6 6"/></svg>',
  copy: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>'
};


/* ────────────────────────────────────────────
   4. UTILITY HELPERS
   ──────────────────────────────────────────── */

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

function lerp(a, b, t) { return a + (b - a) * t; }

function saveCart() {
  localStorage.setItem('dm-cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('dm-wishlist', JSON.stringify(wishlistItems));
}


/* ────────────────────────────────────────────
   5. LOADING SCREEN (Feature #1)
   ──────────────────────────────────────────── */

function initLoadingScreen() {
  const loader = $('#loader');
  const progressBar = $('#loader-progress');
  if (!loader || !progressBar) { onLoaded(); return; }

  let progress = 0;
  const duration = 2000;
  const interval = 20;
  const step = 100 / (duration / interval);

  const timer = setInterval(() => {
    progress = Math.min(100, progress + step + Math.random() * step * 0.5);
    progressBar.style.width = progress + '%';
    $('#loader-percent').textContent = Math.floor(progress) + '%';

    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(onLoaded, 300);
    }
  }, interval);
}

function onLoaded() {
  document.body.classList.add('loaded');
  const loader = $('#loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 500);
  }
  // Trigger hero entrance after load
  setTimeout(animateHeroEntrance, 400);
}


/* ────────────────────────────────────────────
   6. CUSTOM CURSOR (Feature #2)
   ──────────────────────────────────────────── */

function initCustomCursor() {
  // Detect touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    isTouchDevice = true;
    return;
  }

  const dot = $('#cursor-dot');
  const outline = $('#cursor-outline');
  if (!dot || !outline) return;

  document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      dot.style.opacity = '1';
      outline.style.opacity = '1';
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorVisible = false;
    dot.style.opacity = '0';
    outline.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorVisible = true;
    dot.style.opacity = '1';
    outline.style.opacity = '1';
  });

  // Grow on interactive elements via event delegation
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .product-card, .food-menu-card, input, textarea, [role="button"]');
    if (target) {
      dot.classList.add('cursor-grow');
      outline.classList.add('cursor-grow');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .product-card, .food-menu-card, input, textarea, [role="button"]');
    if (target) {
      dot.classList.remove('cursor-grow');
      outline.classList.remove('cursor-grow');
    }
  });

  // Animation loop
  function updateCursor() {
    outlineX = lerp(outlineX, cursorX, 0.15);
    outlineY = lerp(outlineY, cursorY, 0.15);

    dot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
    outline.style.transform = `translate(${outlineX - 16}px, ${outlineY - 16}px)`;

    cursorRAF = requestAnimationFrame(updateCursor);
  }
  cursorRAF = requestAnimationFrame(updateCursor);
}


/* ────────────────────────────────────────────
   7. SCROLL PROGRESS BAR (Feature #3)
   ──────────────────────────────────────────── */

function updateScrollProgress() {
  const bar = $('#scroll-progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = progress + '%';
}


/* ────────────────────────────────────────────
   8. SPA NAVIGATION (Feature #4)
   ──────────────────────────────────────────── */

function navigateTo(page, productId) {
  currentPage = page;
  currentProductId = productId || null;

  // Hide all page sections
  $$('.page-section').forEach(el => el.classList.remove('active'));

  // Show target page
  const targetId = page === 'product-detail' ? 'page-product-detail' : `page-${page}`;
  const target = $(`#${targetId}`);
  if (target) {
    target.classList.add('active');
    // Re-trigger fade-in animation
    target.style.animation = 'none';
    target.offsetHeight; // force reflow
    target.style.animation = '';
  }

  // Update nav active states
  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
  $$('.mobile-menu-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Close mobile menu if open
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update history state for back button support
  const state = { page, productId: currentProductId };
  const title = page === 'product-detail' && currentProductId
    ? (PRODUCTS.find(p => p.id === currentProductId)?.name || 'Product') + ' | Dragon Market'
    : page.charAt(0).toUpperCase() + page.slice(1) + ' | Dragon Market';
  history.pushState(state, title, page === 'home' ? './' : `#/${page}${currentProductId ? '/' + currentProductId : ''}`);

  // Page-specific initialization
  if (page === 'product-detail' && currentProductId) renderProductDetail(currentProductId);
  if (page === 'shop') renderShopGrid();
  if (page === 'food') renderFoodGrid();
  if (page === 'wishlist') renderWishlist();

  // Re-observe reveal elements after content renders
  setTimeout(observeReveals, 150);
}

function handlePopState(e) {
  const state = e.state || { page: 'home' };
  navigateTo(state.page, state.productId || null);
}


/* ────────────────────────────────────────────
   9. PARALLAX HERO (Feature #5)
   ──────────────────────────────────────────── */

function updateParallaxHero() {
  const hero = $('#hero-bg');
  const heroContent = $('.hero-content');
  if (!hero && !heroContent) return;

  if (hero && window.scrollY < window.innerHeight) {
    const offset = window.scrollY * 0.3;
    hero.style.transform = `translateY(${offset}px) scale(1.1)`;
  }

  if (heroContent && window.scrollY < window.innerHeight) {
    const opacity = 1 - (window.scrollY / (window.innerHeight * 0.8));
    heroContent.style.opacity = Math.max(0, opacity);
    const translateY = window.scrollY * 0.15;
    heroContent.style.transform = `translateY(${translateY}px)`;
  }
}


/* ────────────────────────────────────────────
   10. PARTICLE CANVAS (Feature #6)
   ──────────────────────────────────────────── */

function initParticles() {
  const canvas = $('#particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.size = Math.random() * 2 + 1; // 1-3px
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = -(Math.random() * 0.5 + 0.2); // float upward
      this.opacity = Math.random() * 0.5 + 0.2;
      this.maxOpacity = this.opacity;
      this.life = Math.random() * 300 + 150;
      this.maxLife = this.life;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      // Fade in at start, fade out at end
      const lifeRatio = this.life / this.maxLife;
      if (lifeRatio > 0.9) {
        this.opacity = this.maxOpacity * ((1 - lifeRatio) / 0.1);
      } else if (lifeRatio < 0.2) {
        this.opacity = this.maxOpacity * (lifeRatio / 0.2);
      } else {
        this.opacity = this.maxOpacity;
      }
      if (this.life <= 0 || this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset(false);
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create 50 gold particles
  for (let i = 0; i < 50; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    particleRAF = requestAnimationFrame(animate);
  }
  animate();
}


/* ────────────────────────────────────────────
   11. 3D CARD TILT EFFECT (Feature #7)
   ──────────────────────────────────────────── */

function init3DCardTilt() {
  if (isTouchDevice) return;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt (max 8 degrees)
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Glare / shine effect
    const glare = card.querySelector('.card-glare');
    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glare.style.opacity = '1';
    }
  });

  document.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      const glare = card.querySelector('.card-glare');
      if (glare) glare.style.opacity = '0';
      setTimeout(() => { card.style.transition = ''; }, 500);
    }
  }, true);

  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.product-card');
    if (card && !card.contains(e.relatedTarget)) {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      const glare = card.querySelector('.card-glare');
      if (glare) glare.style.opacity = '0';
      setTimeout(() => { card.style.transition = ''; }, 500);
    }
  });
}


/* ────────────────────────────────────────────
   12. SCROLL REVEAL — IntersectionObserver (Feature #8)
   ──────────────────────────────────────────── */

let revealObserver = null;

function observeReveals() {
  // Disconnect previous observer to avoid duplicates
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, stop observing
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Support reveal, reveal-left, reveal-right, reveal-scale
  // Support stagger delays: reveal-delay-1 through reveal-delay-5
  $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    if (!el.classList.contains('revealed')) {
      revealObserver.observe(el);
    }
  });
}


/* ────────────────────────────────────────────
   13. ANIMATED COUNTERS (Feature #9)
   ──────────────────────────────────────────── */

function initCounters() {
  const counters = $$('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic for smooth deceleration
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          entry.target.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}


/* ────────────────────────────────────────────
   14. HERO ENTRANCE ANIMATION (Feature #10)
   ──────────────────────────────────────────── */

function animateHeroEntrance() {
  const elements = $$('.hero-anim');
  if (!elements.length) return;

  // Staggered delays: badge → title → line → subtitle → buttons → scroll indicator
  const delays = [200, 500, 800, 900, 1000, 1200, 2000];

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = el.dataset.transform || 'translateY(30px)';
    el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    }, delays[i] || 500);
  });
}


/* ────────────────────────────────────────────
   15. CART SYSTEM (Feature #11)
   ──────────────────────────────────────────── */

function getCartCount() {
  return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * (item.qty || 1) : 0);
  }, 0);
}

function addToCart(productId, selectedColor, selectedSize) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const color = selectedColor || product.colors[0].name;
  const size = selectedSize || product.sizes[0];

  // Check if item already in cart with same options
  const existing = cart.find(item => item.id === productId && item.color === color && item.size === size);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ id: productId, color, size, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`${product.name} added to your bag!`);

  // Open cart sidebar
  openCart();
}

function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

function updateCartQty(index, newQty) {
  if (index >= 0 && index < cart.length) {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    cart[index].qty = newQty;
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

function openCart() {
  isCartOpen = true;
  const overlay = $('#cart-overlay');
  const sidebar = $('#cart-sidebar');
  if (overlay) overlay.classList.add('open');
  if (sidebar) sidebar.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  isCartOpen = false;
  const overlay = $('#cart-overlay');
  const sidebar = $('#cart-sidebar');
  if (overlay) overlay.classList.remove('open');
  if (sidebar) sidebar.classList.remove('open');
  if (!isMobileMenuOpen) document.body.style.overflow = '';
}

function updateCartBadge() {
  const badge = $('#cart-badge');
  const count = getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function renderCartItems() {
  const body = $('#cart-items-body');
  const footer = $('#cart-footer');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        ${ICONS.bag}
        <p>Your bag is currently empty.</p>
        <button class="btn-outline-dark" onclick="closeCart(); navigateTo('shop');">Continue Shopping</button>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'flex';

  body.innerHTML = cart.map((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    const itemTotal = product.price * (item.qty || 1);
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${product.images[0]}" alt="${product.name}" onclick="closeCart(); navigateTo('product-detail','${product.id}')">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">
            <h3>${product.name}</h3>
            <button onclick="removeFromCart(${index})" aria-label="Remove item">${ICONS.trash}</button>
          </div>
          <div class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</div>
          <div class="cart-item-bottom">
            <div class="cart-qty">
              <button onclick="updateCartQty(${index}, ${item.qty - 1})">${ICONS.minus}</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${index}, ${item.qty + 1})">${ICONS.plus}</button>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  const countLabel = $('#cart-count-label');
  const subtotalEl = $('#cart-subtotal');
  if (countLabel) countLabel.textContent = getCartCount();
  if (subtotalEl) subtotalEl.textContent = `$${getCartTotal().toFixed(2)}`;
}


/* ────────────────────────────────────────────
   16. WISHLIST SYSTEM (Feature #12)
   ──────────────────────────────────────────── */

function toggleWishlist(productId) {
  const idx = wishlistItems.indexOf(productId);
  if (idx > -1) {
    wishlistItems.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlistItems.push(productId);
    showToast('Added to wishlist!');
  }
  saveWishlist();
  updateWishlistBadge();
  // Re-render current page cards to update heart icons
  if (currentPage === 'shop') renderShopGrid();
  if (currentPage === 'wishlist') renderWishlist();
}

function isWishlisted(productId) {
  return wishlistItems.includes(productId);
}

function updateWishlistBadge() {
  const badge = $('#wishlist-badge');
  if (badge) {
    badge.textContent = wishlistItems.length;
    badge.style.display = wishlistItems.length > 0 ? 'flex' : 'none';
  }
}

function renderWishlist() {
  const container = $('#wishlist-items');
  const countEl = $('#wishlist-count');
  if (!container) return;

  const items = PRODUCTS.filter(p => wishlistItems.includes(p.id));

  if (countEl) countEl.textContent = `${items.length} Saved Items`;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="padding:96px 0;text-align:center;border:1px dashed var(--surface-highest);">
        <p style="color:var(--secondary);margin-bottom:32px;text-transform:uppercase;letter-spacing:0.15em;">Your wishlist is empty.</p>
        <button class="btn-dark" onclick="navigateTo('shop')" style="font-family:var(--font-display);font-size:0.7rem;text-transform:uppercase;letter-spacing:0.15em;padding:16px 48px;font-weight:700;background:var(--gold);">Start Shopping</button>
      </div>`;
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="wishlist-item reveal">
      <div class="wishlist-item-img" onclick="navigateTo('product-detail','${p.id}')"><img src="${p.images[0]}" alt="${p.name}"></div>
      <div class="wishlist-item-info">
        <div>
          <div class="wishlist-item-header">
            <h3>${p.name}</h3>
            <button class="wishlist-item-remove" onclick="toggleWishlist('${p.id}'); renderWishlist();">${ICONS.x}</button>
          </div>
          <div class="wishlist-item-price">$${p.price.toFixed(2)}</div>
          <p class="wishlist-item-desc">${p.description}</p>
        </div>
        <div class="wishlist-item-actions">
          <button class="btn-primary" onclick="addToCart('${p.id}')">${ICONS.bag} Add to Bag</button>
          <button class="btn-outline" onclick="navigateTo('product-detail','${p.id}')">View Details</button>
        </div>
      </div>
    </div>
  `).join('');

  setTimeout(observeReveals, 100);
}


/* ────────────────────────────────────────────
   17. SHOP FILTERING (Feature #13)
   ──────────────────────────────────────────── */

function setShopCategory(cat) {
  selectedShopCategory = cat;
  // Update all filter buttons (mobile + sidebar)
  $$('.shop-filter-btn, .sidebar-cat-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderShopGrid();
}

function renderShopGrid() {
  const grid = $('#product-grid');
  if (!grid) return;

  const filtered = selectedShopCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.subCategory && p.subCategory.toLowerCase() === selectedShopCategory.toLowerCase());

  grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal">
      <div class="card-glare"></div>
      <div class="product-card-img" onclick="navigateTo('product-detail','${p.id}')">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${p.isNew ? '<span class="card-badge new">New</span>' : ''}
        ${p.originalPrice ? `<span class="card-badge sale">-${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>` : ''}
        <button class="product-card-wishlist ${isWishlisted(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}');" aria-label="Toggle wishlist">
          ${isWishlisted(p.id) ? ICONS.heartFilled : ICONS.heart}
        </button>
        <div class="product-card-view" onclick="navigateTo('product-detail','${p.id}')">View Details</div>
      </div>
      <div class="product-card-info">
        <div>
          <div class="name">${p.name}</div>
          <div class="category-label">${p.subCategory || p.category}</div>
        </div>
        <div class="price">$${p.price.toFixed(2)}${p.originalPrice ? `<span class="original">$${p.originalPrice.toFixed(2)}</span>` : ''}</div>
      </div>
    </div>
  `).join('');

  setTimeout(observeReveals, 100);
}

// Mobile shop filter scroll
function scrollShopFilters(direction) {
  const container = $('#shop-mobile-filters');
  if (!container) return;
  const scrollAmount = 200;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}


/* ────────────────────────────────────────────
   18. FOOD FILTERING (Feature #14)
   ──────────────────────────────────────────── */

function setFoodCategory(cat) {
  selectedFoodCategory = cat;
  $$('.food-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderFoodGrid();
}

function renderFoodGrid() {
  const grid = $('#food-grid-cards');
  if (!grid) return;

  const filtered = selectedFoodCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(i => i.category.toLowerCase() === selectedFoodCategory.toLowerCase());

  grid.innerHTML = filtered.map(item => `
    <div class="food-menu-card reveal">
      <div class="food-menu-card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="cat-badge">${item.category}</span>
      </div>
      <div class="food-menu-card-header">
        <h4>${item.name}</h4>
        <span class="price">$${item.price}</span>
      </div>
      <p>${item.desc}</p>
      <button class="order-btn" onclick="showToast('${item.name} added to your order!')">Order Now ${ICONS.arrowRight}</button>
    </div>
  `).join('');

  setTimeout(observeReveals, 100);
}


/* ────────────────────────────────────────────
   19. PRODUCT DETAIL PAGE (Feature #15)
   ──────────────────────────────────────────── */

let detailSelectedColor = '';
let detailSelectedSize = '';

function renderProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    navigateTo('shop');
    return;
  }

  detailSelectedColor = product.colors[0].name;
  detailSelectedSize = product.sizes[0];

  const container = $('#product-detail-content');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumbs">
      <button onclick="navigateTo('home')">Home</button>${ICONS.chevronRight}
      <button onclick="navigateTo('shop')">Heritage Collection</button>${ICONS.chevronRight}
      <span class="breadcrumb-current">${product.name}</span>
    </div>
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="product-thumbs">
          ${product.images.map((img, i) => `<img class="product-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="Thumbnail ${i + 1}" onclick="selectProductImage(this, '${img}')">`).join('')}
        </div>
        <div>
          <img class="product-main-img" id="main-product-img" src="${product.images[0]}" alt="${product.name}">
        </div>
      </div>
      <div class="product-info">
        ${product.isNew ? '<span class="card-badge new" style="display:inline-block;margin-bottom:12px;">New Arrival</span>' : ''}
        <h1>${product.name}</h1>
        <div class="product-price-row">
          <span class="price">$${product.price.toFixed(2)}${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}</span>
          <div class="product-rating">
            <div class="stars">${generateStars(product.rating)}</div>
            <span class="review-text">(${product.rating}/5 from ${product.reviewCount} reviews)</span>
          </div>
        </div>
        <p class="product-long-desc">${product.longDescription}</p>

        <div class="product-options">
          <div>
            <span class="option-label" id="color-label">Color: ${product.colors[0].name}</span>
            <div class="color-options">
              ${product.colors.map(c => `<button class="color-swatch ${c.name === product.colors[0].name ? 'active' : ''}" style="background-color:${c.hex}" title="${c.name}" onclick="selectDetailColor(this, '${c.name}')"></button>`).join('')}
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
              <span class="option-label">Size</span>
              <button style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--secondary);text-decoration:underline;background:none;border:none;cursor:pointer;" onclick="showToast('Size guide coming soon!')">Size Guide</button>
            </div>
            <div class="size-options" id="detail-size-options">
              ${product.sizes.map(s => `<button class="size-btn ${s === product.sizes[0] ? 'active' : ''}" onclick="selectDetailSize(this, '${s}')">${s}</button>`).join('')}
            </div>
          </div>
        </div>

        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}', detailSelectedColor, detailSelectedSize)">Add to Cart</button>
          <div class="product-actions-row">
            <button class="btn-buy-now" onclick="addToCart('${product.id}', detailSelectedColor, detailSelectedSize); closeCart(); showToast('Proceeding to checkout...');">Buy Now</button>
            <button class="btn-wishlist-detail ${isWishlisted(product.id) ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" aria-label="Toggle wishlist">
              ${isWishlisted(product.id) ? ICONS.heartFilled : ICONS.heart}
            </button>
          </div>
        </div>

        <div class="product-accordion">
          <div class="accordion-item open">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <span>Details</span>${ICONS.chevronDown}
            </div>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <ul>${product.details.map(d => `<li>${ICONS.check} ${d}</li>`).join('')}</ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <span>Material & Care</span>${ICONS.chevronDown}
            </div>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>Premium quality assured by Dragon Market's rigorous heritage standards. Each piece undergoes 12 quality inspections before shipping. Dry clean recommended for silk garments.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              <span>Shipping & Returns</span>${ICONS.chevronDown}
            </div>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>Free worldwide shipping on all orders over $200. Standard delivery 5-7 business days. Express delivery 2-3 business days. Free returns within 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += ICONS.star;
    } else if (i - 0.5 <= rating) {
      html += ICONS.star; // Full star for half
    } else {
      html += ICONS.starEmpty;
    }
  }
  return html;
}

function selectProductImage(thumb, src) {
  const mainImg = $('#main-product-img');
  if (mainImg) mainImg.src = src;
  $$('.product-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function selectDetailColor(btn, colorName) {
  btn.parentElement.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  detailSelectedColor = colorName;
  const label = $('#color-label');
  if (label) label.textContent = 'Color: ' + colorName;
}

function selectDetailSize(btn, size) {
  $$('#detail-size-options .size-btn').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  detailSelectedSize = size;
}

function toggleAccordion(header) {
  const item = header.parentElement;
  const isOpen = item.classList.contains('open');

  // Close all accordions in same group
  item.parentElement.querySelectorAll('.accordion-item').forEach(ai => ai.classList.remove('open'));

  // Toggle clicked one
  if (!isOpen) item.classList.add('open');
}


/* ────────────────────────────────────────────
   20. AI CHAT WIDGET (Feature #16)
   ──────────────────────────────────────────── */

const BOT_RESPONSES = [
  "The Imperial Red Dragon Hanfu is one of our most treasured pieces, handcrafted by master artisans in Suzhou. Would you like to know more about its sizing?",
  "Our traditional Chinese cuisine section features authentic recipes from all Eight Great Culinary Traditions. The Peking Duck is particularly popular!",
  "For bespoke tailoring inquiries, I recommend visiting our Heritage page or contacting our Shanghai HQ directly.",
  "Each garment in our collection is made using traditional techniques passed down through generations. The silk used in our Hanfu is sourced from the same regions as the ancient imperial courts.",
  "The Year of the Dragon brings special significance to our collection. Consider using code DRAGON26 for a 15% discount on your purchase!",
  "Our Tang Dynasty Emperor Robe is the most premium piece in our ceremonial collection. Only 50 are crafted each year by our master tailors.",
  "For sizing help, I recommend checking our Size Guide on each product page. Our pieces follow traditional Chinese measurements, but we include international conversions.",
  "The Miao Ethnic Silver Embroidery Dress is truly one-of-a-kind. Each piece takes 3-6 months to complete and no two are exactly alike.",
  "Free worldwide shipping on orders over $200! We ship from our Shanghai warehouse via premium express carriers.",
  "Thank you for your interest in Dragon Market! Is there anything specific about our Heritage collection I can help you with?"
];

function toggleChat() {
  isChatOpen = !isChatOpen;
  const chatWindow = $('#chat-window');
  if (chatWindow) chatWindow.classList.toggle('open', isChatOpen);

  if (isChatOpen) {
    // Focus input
    setTimeout(() => {
      const input = $('#chat-input');
      if (input) input.focus();
    }, 300);
  }
}

function sendChatMessage() {
  const input = $('#chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  chatMessages.push({ role: 'user', text });
  input.value = '';
  renderChatMessages();

  // Show typing indicator
  const msgs = $('#chat-messages');
  if (!msgs) return;
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot';
  typingEl.id = 'chat-typing';
  typingEl.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(typingEl);
  msgs.scrollTop = msgs.scrollHeight;

  // Simulate bot response after 1.5s delay
  setTimeout(() => {
    const typing = $('#chat-typing');
    if (typing) typing.remove();

    const response = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
    chatMessages.push({ role: 'bot', text: response });
    renderChatMessages();
  }, 1500);
}

function renderChatMessages() {
  const msgs = $('#chat-messages');
  if (!msgs) return;

  msgs.innerHTML = chatMessages.map(m => `
    <div class="chat-msg ${m.role}">
      ${m.role === 'bot' ? '<div class="chat-avatar">' + ICONS.bot + '</div>' : ''}
      <div class="chat-bubble">${m.text}</div>
    </div>
  `).join('');

  // Auto-scroll to bottom
  msgs.scrollTop = msgs.scrollHeight;
}


/* ────────────────────────────────────────────
   21. TOAST NOTIFICATIONS (Feature #17)
   ──────────────────────────────────────────── */

let toastTimer = null;

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;

  // Clear existing timer
  if (toastTimer) clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.remove('show');

  // Force reflow to restart animation
  toast.offsetHeight;
  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    toastTimer = null;
  }, 3000);
}


/* ────────────────────────────────────────────
   22. BACK TO TOP WITH PROGRESS (Feature #18)
   ──────────────────────────────────────────── */

function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  // SVG circle progress
  const circle = btn.querySelector('circle.progress-ring');
  const circumference = 2 * Math.PI * 18; // radius = 18

  function updateBackToTop() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    // Show/hide after 300px
    if (scrollTop > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    // Update SVG progress ring
    if (circle) {
      const offset = circumference - (progress * circumference);
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = offset;
    }
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initial call
  updateBackToTop();
}


/* ────────────────────────────────────────────
   23. CONTACT FORM (Feature #19)
   ──────────────────────────────────────────── */

function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We will get back to you soon.');
    form.reset();
  });
}


/* ────────────────────────────────────────────
   24. NAVBAR SCROLL EFFECT (Feature #20)
   ──────────────────────────────────────────── */

function updateNavbarScroll() {
  const navbar = $('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
}


/* ────────────────────────────────────────────
   25. MOBILE MENU (Feature #21)
   ──────────────────────────────────────────── */

function openMobileMenu() {
  isMobileMenuOpen = true;
  const overlay = $('#mobile-overlay');
  const menu = $('#mobile-menu');
  if (overlay) overlay.classList.add('open');
  if (menu) menu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!isMobileMenuOpen) return;
  isMobileMenuOpen = false;
  const overlay = $('#mobile-overlay');
  const menu = $('#mobile-menu');
  if (overlay) overlay.classList.remove('open');
  if (menu) menu.classList.remove('open');
  if (!isCartOpen && !isChatOpen) document.body.style.overflow = '';
}


/* ────────────────────────────────────────────
   26. MARQUEE (Feature #22)
   ──────────────────────────────────────────── */

function initMarquee() {
  const marquees = $$('.marquee-track');
  marquees.forEach(track => {
    // Duplicate content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;
  });
}


/* ────────────────────────────────────────────
   27. OFFERS / COUPONS
   ──────────────────────────────────────────── */

function copyOfferCode(code, btn) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      showToast(`Code "${code}" copied to clipboard!`);
      setTimeout(() => { btn.textContent = 'Copy Code'; }, 2000);
    }).catch(() => {
      fallbackCopy(code);
      btn.textContent = 'Copied!';
      showToast(`Code "${code}" copied!`);
      setTimeout(() => { btn.textContent = 'Copy Code'; }, 2000);
    });
  } else {
    fallbackCopy(code);
    btn.textContent = 'Copied!';
    showToast(`Code "${code}" copied!`);
    setTimeout(() => { btn.textContent = 'Copy Code'; }, 2000);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}


/* ────────────────────────────────────────────
   28. MASTER SCROLL HANDLER
   ──────────────────────────────────────────── */

function handleScroll() {
  updateNavbarScroll();
  updateParallaxHero();
  updateScrollProgress();
}


/* ────────────────────────────────────────────
   29. INITIALIZATION
   ──────────────────────────────────────────── */

function init() {
  // 1. Loading screen
  initLoadingScreen();

  // 2. Custom cursor (disabled)
  // initCustomCursor();

  // 3. Back to top button
  initBackToTop();

  // 4. Particle canvas
  initParticles();

  // 5. 3D card tilt
  init3DCardTilt();

  // 6. Scroll reveal observer
  observeReveals();

  // 7. Animated counters
  initCounters();

  // 8. Marquee
  initMarquee();

  // 9. Contact form
  initContactForm();

  // 10. Update badges
  updateCartBadge();
  updateWishlistBadge();

  // 11. Scroll listener (passive)
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 12. History state for back button
  window.addEventListener('popstate', handlePopState);

  // 13. Navigation via data attributes (event delegation)
  document.addEventListener('click', (e) => {
    const navEl = e.target.closest('[data-navigate]');
    if (navEl) {
      e.preventDefault();
      navigateTo(navEl.dataset.navigate, navEl.dataset.productId);
    }

    // Shop filter buttons
    const shopFilter = e.target.closest('.shop-filter-btn');
    if (shopFilter) {
      setShopCategory(shopFilter.dataset.cat);
    }

    // Sidebar category items
    const sidebarCat = e.target.closest('.sidebar-cat-item');
    if (sidebarCat) {
      setShopCategory(sidebarCat.dataset.cat);
    }

    // Food filter buttons
    const foodFilter = e.target.closest('.food-filter-btn');
    if (foodFilter) {
      setFoodCategory(foodFilter.dataset.cat);
    }

    // Offer copy buttons
    const copyBtn = e.target.closest('[data-copy-code]');
    if (copyBtn) {
      copyOfferCode(copyBtn.dataset.copyCode, copyBtn);
    }

    // Mobile shop filter scroll buttons
    const scrollFilter = e.target.closest('[data-scroll-filters]');
    if (scrollFilter) {
      scrollShopFilters(parseInt(scrollFilter.dataset.scrollFilters));
    }
  });

  // 14. Specific element listeners
  const hamburgerBtn = $('#hamburger-btn');
  const mobileCloseBtn = $('#mobile-close-btn');
  const mobileOverlay = $('#mobile-overlay');
  const cartBtn = $('#cart-btn');
  const cartOverlay = $('#cart-overlay');
  const cartCloseBtn = $('#cart-close-btn');
  const chatFab = $('#chat-fab');
  const chatCloseBtn = $('#chat-close-btn');
  const chatSendBtn = $('#chat-send-btn');
  const chatInput = $('#chat-input');

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  if (chatFab) chatFab.addEventListener('click', toggleChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChat);
  if (chatSendBtn) chatSendBtn.addEventListener('click', sendChatMessage);
  if (chatInput) chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });

  // 15. Close mobile menu on link click
  $$('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 16. Set initial page
  navigateTo('home');

  // 17. Initial scroll effects
  handleScroll();

  // 18. Set initial history state
  history.replaceState({ page: 'home' }, 'Home | Dragon Market', './');
}

// Launch when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


/* ────────────────────────────────────────────
   30. DARK MODE TOGGLE
   ──────────────────────────────────────────── */

function initDarkMode() {
  const btn = $('#dark-mode-btn');
  if (!btn) return;
  const saved = localStorage.getItem('dm-darkmode');
  if (saved === '1') document.body.classList.add('dark-mode');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dm-darkmode', document.body.classList.contains('dark-mode') ? '1' : '0');
    showToast(document.body.classList.contains('dark-mode') ? '🌙 Dark Mode On' : '☀️ Light Mode On');
  });
}


/* ────────────────────────────────────────────
   31. SEARCH OVERLAY
   ──────────────────────────────────────────── */

let isSearchOpen = false;

function openSearch() {
  isSearchOpen = true;
  const overlay = $('#search-overlay');
  if (overlay) overlay.classList.add('open');
  setTimeout(() => {
    const inp = $('#search-main-input');
    if (inp) inp.focus();
  }, 200);
  document.body.style.overflow = 'hidden';
}

function closeSearch() {
  isSearchOpen = false;
  const overlay = $('#search-overlay');
  if (overlay) overlay.classList.remove('open');
  if (!isCartOpen && !isMobileMenuOpen) document.body.style.overflow = '';
  const inp = $('#search-main-input');
  if (inp) inp.value = '';
  const grid = $('#search-results-grid');
  if (grid) grid.innerHTML = '';
  const label = $('#search-results-label');
  if (label) label.textContent = 'Start typing to search...';
}

function handleSearch(query) {
  const grid = $('#search-results-grid');
  const label = $('#search-results-label');
  if (!grid || !label) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    grid.innerHTML = '';
    label.textContent = 'Start typing to search...';
    return;
  }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
    p.category.toLowerCase().includes(q)
  );
  if (results.length === 0) {
    label.textContent = `No results for "${query}"`;
    grid.innerHTML = `<div class="search-no-results">✨ No items found. Try "Hanfu", "Silk", "Wedding"...</div>`;
    return;
  }
  label.textContent = `${results.length} result${results.length > 1 ? 's' : ''} found`;
  grid.innerHTML = results.map(p => `
    <div class="search-result-card" onclick="closeSearch(); navigateTo('product-detail','${p.id}')">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <div class="search-result-info">
        <h4>${p.name}</h4>
        <span>$${p.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

function initSearch() {
  const searchBtn = $('#search-btn');
  const closeBtn = $('#search-close-btn');
  const input = $('#search-main-input');
  const overlay = $('#search-overlay');

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });
  if (input) {
    input.addEventListener('input', (e) => handleSearch(e.target.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });
  }
  // Global ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isSearchOpen) closeSearch();
  });
}


/* ────────────────────────────────────────────
   32. TESTIMONIALS SLIDER
   ──────────────────────────────────────────── */

const TESTIMONIALS = [
  { name: 'Sophia L.', location: 'London, UK', initials: 'SL', text: 'The Imperial Red Dragon Hanfu took my breath away. The silk quality is unmatched — you can feel five thousand years of craftsmanship in every fold. Absolutely worth every penny.', rating: 5 },
  { name: 'Chen Wei', location: 'Singapore', initials: 'CW', text: 'Dragon Market is the only place I trust for authentic traditional garments. The Qipao I received was flawless — the embroidery detail was extraordinary, exactly as pictured.', rating: 5 },
  { name: 'Amara N.', location: 'New York, USA', initials: 'AN', text: 'I ordered the Peking Duck for a family gathering — it arrived perfectly prepared. The flavors transported us straight to Beijing. Incredible authentic experience!', rating: 5 },
  { name: 'Hiroshi T.', location: 'Tokyo, Japan', initials: 'HT', text: 'The Tang Dynasty Emperor Robe is a masterpiece. Every detail is historically accurate. This is museum-quality craftsmanship delivered to your door.', rating: 5 },
  { name: 'Marie D.', location: 'Paris, France', initials: 'MD', text: 'Exceptional service from start to finish. The packaging alone was luxurious — felt like receiving an imperial gift. The Miao embroidery dress is simply stunning.', rating: 5 },
  { name: 'Ahmed K.', location: 'Dubai, UAE', initials: 'AK', text: 'The Tea Ceremony Set brought such elegance to our home. The Yixing clay teapot is beautiful and the Longjing tea is the finest I have ever tasted. Will order again!', rating: 5 },
];

let testimonialsIndex = 0;
let testimonialsAutoPlay = null;

function renderTestimonials() {
  const track = $('#testimonials-track');
  const dotsContainer = $('#testimonials-dots');
  if (!track) return;

  track.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testimonial-card">
      <span class="testimonial-quote-mark">"</span>
      <div class="testimonial-stars">
        ${'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(t.rating)}
      </div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-location">${t.location}</div>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="testimonials-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})" aria-label="Go to testimonial ${i+1}"></button>`
    ).join('');
  }
}

function goToTestimonial(index) {
  const track = $('#testimonials-track');
  const dots = $$('.testimonials-dot');
  if (!track) return;
  const cardWidth = 340 + 24; // width + gap
  const maxIndex = Math.max(0, TESTIMONIALS.length - Math.floor(track.parentElement.offsetWidth / cardWidth));
  testimonialsIndex = Math.max(0, Math.min(index, maxIndex));
  track.style.transform = `translateX(-${testimonialsIndex * cardWidth}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === testimonialsIndex));
}

function initTestimonials() {
  renderTestimonials();
  const prevBtn = $('#testimonials-prev');
  const nextBtn = $('#testimonials-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goToTestimonial(testimonialsIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToTestimonial(testimonialsIndex + 1));
  // Auto-play every 5s
  testimonialsAutoPlay = setInterval(() => {
    const next = testimonialsIndex + 1 >= TESTIMONIALS.length ? 0 : testimonialsIndex + 1;
    goToTestimonial(next);
  }, 5000);
}


/* ────────────────────────────────────────────
   33. COUNTDOWN TIMER
   ──────────────────────────────────────────── */

function initCountdown() {
  // Target: 7 days from now
  const target = new Date();
  target.setDate(target.getDate() + 7);

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = $('#cd-days'), hEl = $('#cd-hours'), mEl = $('#cd-mins'), sEl = $('#cd-secs');
    if (sEl) {
      const prevSecs = sEl.textContent;
      sEl.textContent = pad(secs);
      if (prevSecs !== pad(secs)) { sEl.classList.add('flip'); setTimeout(() => sEl.classList.remove('flip'), 300); }
    }
    if (mEl) mEl.textContent = pad(mins);
    if (hEl) hEl.textContent = pad(hours);
    if (dEl) dEl.textContent = pad(days);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}


/* ────────────────────────────────────────────
   34. QUICK VIEW MODAL
   ──────────────────────────────────────────── */

let isQuickViewOpen = false;

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const overlay = $('#quickview-overlay');
  const content = $('#quickview-content');
  if (!overlay || !content) return;
  content.innerHTML = `
    <div class="quickview-grid">
      <img class="quickview-img" src="${product.images[0]}" alt="${product.name}">
      <div class="quickview-info">
        ${product.isNew ? '<span class="card-badge new" style="display:inline-block;margin-bottom:8px;">New Arrival</span>' : ''}
        <div class="quickview-name">${product.name}</div>
        <div class="quickview-price">$${product.price.toFixed(2)}${product.originalPrice ? `<span style="font-size:1rem;text-decoration:line-through;color:var(--secondary);margin-left:10px;">$${product.originalPrice.toFixed(2)}</span>` : ''}</div>
        <div style="display:flex;gap:3px;color:var(--gold);">${generateStars(product.rating)}</div>
        <p class="quickview-desc">${product.description}</p>
        <div class="quickview-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}'); closeQuickView();">Add to Bag</button>
          <button class="btn-outline" onclick="closeQuickView(); navigateTo('product-detail','${product.id}')">View Full Details →</button>
        </div>
      </div>
    </div>
  `;
  overlay.classList.add('open');
  isQuickViewOpen = true;
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const overlay = $('#quickview-overlay');
  if (overlay) overlay.classList.remove('open');
  isQuickViewOpen = false;
  if (!isCartOpen && !isMobileMenuOpen && !isSearchOpen) document.body.style.overflow = '';
}

function initQuickView() {
  const closeBtn = $('#quickview-close-btn');
  const overlay = $('#quickview-overlay');
  if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeQuickView(); });
}


/* ────────────────────────────────────────────
   35. ENHANCED INIT — wire all new features
   ──────────────────────────────────────────── */

// Patch existing init to include new features
const _origInit = init;
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initSearch();
  initTestimonials();
  initCountdown();
  initQuickView();
});

// Patch renderShopGrid to add quick-view button
const _origRenderShopGrid = renderShopGrid;
renderShopGrid = function() {
  _origRenderShopGrid();
  // Inject quick-view buttons into product cards
  $$('.product-card').forEach(card => {
    const imgDiv = card.querySelector('.product-card-img');
    if (imgDiv && !imgDiv.querySelector('.product-card-quickview')) {
      const onclick = card.querySelector('[onclick]');
      const match = card.innerHTML.match(/navigateTo\('product-detail','([^']+)'\)/);
      if (match) {
        const qvBtn = document.createElement('button');
        qvBtn.className = 'product-card-quickview';
        qvBtn.textContent = '⚡ Quick View';
        qvBtn.onclick = (e) => { e.stopPropagation(); openQuickView(match[1]); };
        imgDiv.appendChild(qvBtn);
      }
    }
  });
};

