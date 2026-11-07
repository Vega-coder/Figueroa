import React, { useState } from "react";
import { FiMail, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-ink text-paper relative overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-5 font-display text-[14rem] md:text-[20rem] leading-none text-paper -mr-16 -mb-20">
        GF
      </div>

      <div className="container-editorial relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-[0.68rem] uppercase tracking-[0.35em] text-gold font-medium mb-4 inline-block">
          Correspondencia Privada
        </span>

        <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper tracking-tight">
          Reciba nuestras reflexiones.
        </h2>

        <p className="mt-6 font-serif italic text-base sm:text-lg md:text-xl text-paper/75 max-w-2xl mx-auto leading-relaxed">
          Una vez al mes, una carta con reflexiones sobre el diseño, referencias visuales y notas de nuestro taller. Sin algoritmos, sin ruido comercial.
        </p>

        {isSubscribed ? (
          <div className="mt-10 inline-flex items-center gap-3 bg-paper/10 border border-gold/40 px-6 py-4 text-paper text-sm">
            <FiCheck className="text-gold text-lg" />
            <span className="font-serif">Gracias por unirse a nuestra correspondencia. Le escribiremos pronto.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Su correo electrónico"
                className="w-full bg-paper/5 border border-paper/20 px-5 py-3.5 text-paper placeholder-paper/40 text-sm focus:outline-none focus:border-gold transition-colors font-sans"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gold text-ink text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-paper transition-all duration-300 flex-shrink-0 cursor-pointer"
            >
              Suscribirme →
            </button>
          </form>
        )}

        <div className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-ash font-medium">
          Privacidad garantizada · Puede cancelar en cualquier momento
        </div>
      </div>
    </section>
  );
}
