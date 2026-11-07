export const SITE_CONFIG = {
  clientName: "Gemberth Figueroa",
  tagline: "FOTOGRAFÍA · ESTRATEGIA DIGITAL · IA",
  location: "Ocaña, Norte de Santander, Colombia",
  instagram: "@gemberthfigueroa1",
  instagramUrl: "https://instagram.com/gemberthfigueroa1",
  
  // WhatsApp Configuration (Colombia +57)
  whatsappNumber: "573104837004", // WhatsApp oficial de Gemberth Figueroa
  whatsappDisplay: "+57 310 483 7004",
  whatsappDefaultMsg: "Hola Gemberth, vi tu sitio web y quiero cotizar una solución para mi negocio.",
  
  // Generate WhatsApp links with preloaded messages
  getWhatsAppUrl: (customMsg) => {
    const msg = encodeURIComponent(customMsg || SITE_CONFIG.whatsappDefaultMsg);
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
  }
};
