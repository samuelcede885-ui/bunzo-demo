/**
 * BUNZO — marca ficticia de demostración.
 * Todo el contenido editable vive aquí.
 */

export const site = {
  showPending: false,
  demo: true,

  brand: { name: "Bunzo", city: "Demo de concepto" },

  order: {
    whatsapp: null,
    url: null,
    channels: [
      { id: "whatsapp", label: "WhatsApp", href: null, note: "Demo: canal no conectado" },
      { id: "delivery", label: "App de delivery", href: null, note: "Demo: canal no conectado" },
      { id: "store", label: "En tienda", href: "#locales", note: "Visítanos en tu Bunzo más cercano" },
    ],
  },

  catering: {
    contactUrl: null,
    note: "Demo: en una versión real aquí iría el contacto para eventos.",
  },

  social: [
    { id: "instagram", label: "Instagram", href: null },
    { id: "tiktok", label: "TikTok", href: null },
    { id: "web", label: "Sitio web", href: null },
  ],

  nav: [
    { href: "#menu", label: "Menú" },
    { href: "#ingredientes", label: "Ingredientes" },
    { href: "#extras", label: "Shakes" },
    { href: "#catering", label: "Catering" },
    { href: "#locales", label: "Locales" },
  ],
};


export const menu = [
  {
    id: "hamburguesas",
    label: "Hamburguesas",
    items: [
      { id: "clasica", name: "Bunzo Clásica", desc: "Carne, cheddar, lechuga, tomate, cebolla y salsa de la casa.", image: "/images/hq/burger-classic-sm.webp" },
      { id: "bacon", name: "Bacon Bunzo", desc: "Doble carne, doble cheddar, tocineta y salsa de la casa.", image: "/images/hq/burger-bacon-sm.webp" },
      { id: "onion", name: "Bunzo Onion", desc: "Doble carne, cheddar, tocineta y cebolla caramelizada.", image: "/images/hq/burger-onion-sm.webp" },
    ],
  },
  {
    id: "acompanantes",
    label: "Papas y acompañantes",
    items: [
      { id: "papas", name: "Papas sazonadas", desc: "Crujientes, con sal y especias. Con salsa para mojar.", image: "/images/hq/fries-sm.webp" },
      { id: "nuggets", name: "Nuggets", desc: "Empanizados crocantes, jugosos por dentro.", image: "/images/hq/nuggets-sm.webp" },
    ],
  },
  {
    id: "shakes",
    label: "Shakes",
    items: [{ id: "shake-galleta", name: "Shake de Galleta", desc: "Vainilla con galleta triturada, sirope de chocolate y cereza.", image: "/images/hq/shake-oreo-sm.webp" }],
  },
  {
    id: "salsas",
    label: "Salsas",
    items: [{ id: "salsas", name: "Salsas de la casa", desc: "BBQ, chimichurri, chipotle y ajo con hierbas.", image: "/images/hq/sauces-sm.webp" }],
  },
  {
    id: "combos",
    label: "Combos",
    items: [{ id: "combo", name: "Combo Bunzo", desc: "Hamburguesa, papas y refresco.", image: "/images/hq/burger-classic-sm.webp" }],
  },
];

export const featured = [
  { id: "f1", kicker: "Hecha para hambre de verdad", title: ["Más queso.", "Más Bunzo."], image: "/images/hq/burger-onion-sm.webp", alt: "Hamburguesa doble con tocineta, cebolla caramelizada y cheddar", tone: "orange" },
  { id: "f2", kicker: "Siempre crujiente", title: ["Tocineta", "sin pausa."], image: "/images/hq/burger-bacon-sm.webp", alt: "Hamburguesa doble con tocineta y cheddar fundido", tone: "cream" },
  { id: "f3", kicker: "Para llevar", title: ["En papel,", "con las manos."], image: "/images/hq/burger-hand-sm.webp", alt: "Mano sosteniendo una hamburguesa envuelta en papel", tone: "coal" },
  { id: "f4", kicker: "Fresca, de verdad", title: ["Lechuga,", "tomate, todo."], image: "/images/hq/burger-classic-sm.webp", alt: "Hamburguesa con lechuga, cebolla, tomate y cheddar", tone: "yellow" },
];

export const shakeFlavors = ["Galleta", "Vainilla", "Chocolate", "Fresa", "Dulce de leche"];

/** Sucursales de ejemplo (marca ficticia): sin direcciones reales ni enlaces a mapas. */
export const locations = [
  { id: "centro", name: "Centro", address: "Dirección de ejemplo", hours: "12:00 – 23:00 (ejemplo)", demo: true },
  { id: "norte", name: "Norte", address: "Dirección de ejemplo", hours: "12:00 – 23:00 (ejemplo)", demo: true },
  { id: "este", name: "Este", address: "Dirección de ejemplo", hours: "12:00 – 00:00 (ejemplo)", demo: true },
  { id: "playa", name: "Playa", address: "Dirección de ejemplo", hours: "11:00 – 22:00 (ejemplo)", demo: true },
];

export const mapsSearch = () => null;
export const mapsDirections = () => null;

export function orderHref(productName) {
  const { whatsapp, url } = site.order;
  if (whatsapp) {
    const text = productName ? `¡Hola! Quiero pedir: ${productName}` : "¡Hola! Quiero hacer un pedido.";
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
  }
  return url || null;
}

/** Hamburguesa desmontable: capas recortadas de la foto del despiece (public/images/stack).
 *  top/h en px de la imagen original (922×1300). shifts = cuánto se acerca cada capa al armarse. */
export const stack = {
  width: 922,
  height: 1300,
  slices: [
    { src: "/images/stack/s0.webp", top: 0, h: 260 },
    { src: "/images/stack/s1.webp", top: 260, h: 140 },
    { src: "/images/stack/s2.webp", top: 400, h: 57 },
    { src: "/images/stack/s3.webp", top: 457, h: 143 },
    { src: "/images/stack/s4.webp", top: 600, h: 50 },
    { src: "/images/stack/s5.webp", top: 650, h: 105 },
    { src: "/images/stack/s6.webp", top: 755, h: 190 },
    { src: "/images/stack/s7.webp", top: 945, h: 115 },
    { src: "/images/stack/s8.webp", top: 1060, h: 60 },
    { src: "/images/stack/s9.webp", top: 1120, h: 180 },
  ],
  shifts: [62, 38, 42, 40, 30, 38, 55, 45, 48],
  labels: [
    { label: "Pan brioche", text: "Tostado, suave por dentro.", y: 85, side: "left" },
    { label: "Salsa de la casa", text: "Cremosa, con especias.", y: 215, side: "right" },
    { label: "Tocineta", text: "Crujiente, como debe ser.", y: 300, side: "left" },
    { label: "Queso cheddar", text: "Fundido sobre la carne.", y: 410, side: "right" },
    { label: "Carne a la plancha", text: "Jugosa, con costra dorada.", y: 505, side: "left" },
    { label: "Tomate", text: "Fresco, en rodajas.", y: 685, side: "right" },
    { label: "Cebolla morada", text: "Crocante y dulce.", y: 765, side: "left" },
    { label: "Lechuga", text: "Verde y fresca.", y: 850, side: "right" },
    { label: "Doble carne", text: "Porque una no basta.", y: 975, side: "left" },
    { label: "Pan base", text: "La base de todo.", y: 1185, side: "right" },
  ],
};
