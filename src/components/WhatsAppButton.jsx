import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "../config/siteConfig";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip message */}
      <div
        className={`hidden sm:block bg-carbon text-paper text-xs px-3.5 py-2 rounded-lg shadow-lg border border-carbon/20 transition-all duration-300 font-medium ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="text-brand font-semibold">¿Hablamos?</span> Cotizá directamente por WhatsApp
      </div>

      {/* Main button */}
      <a
        href={SITE_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-whatsapp whatsapp-pulse hover:scale-110 transition-transform duration-300 group cursor-pointer"
        aria-label="Contactar por WhatsApp a Gemberth Figueroa"
      >
        <FaWhatsapp className="drop-shadow-sm" />
      </a>
    </div>
  );
}
