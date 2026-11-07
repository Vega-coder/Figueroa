import React, { useState } from "react";
import { FiMail, FiPhone, FiInstagram, FiMapPin, FiClock, FiCheck } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Branding",
    budget: "$25,000 - $50,000 MXN",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between selection:bg-gold/20 selection:text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-ink/10">
          <div className="container-editorial">
            <span className="text-[0.68rem] uppercase tracking-[0.3em] text-ash font-medium mb-4 block">
              Contacto & Primer Encuentro
            </span>
            <h1 className="heading-mega text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.94] tracking-tight max-w-6xl">
              Iniciemos una conversación.
            </h1>
            <p className="mt-8 md:mt-12 font-serif italic text-xl sm:text-2xl text-ash max-w-3xl leading-relaxed">
              Cuéntenos su proyecto. La primera consulta es siempre sin compromiso y suele ser el inicio de una colaboración que dura años.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="py-16 md:py-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Form Col */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-12 border border-ink/10 bg-paper">
                  <h2 className="heading-display text-3xl sm:text-4xl text-ink mb-2">
                    Cuéntenos sobre su proyecto.
                  </h2>
                  <p className="font-serif italic text-sm text-ash mb-8">
                    Respondemos personalmente en un plazo máximo de 24 horas hábiles.
                  </p>

                  {submitted ? (
                    <div className="p-8 bg-[#faf9f7] border border-gold/40 text-center">
                      <div className="w-12 h-12 rounded-full bg-gold/15 text-gold-deep flex items-center justify-center mx-auto mb-4 text-xl">
                        <FiCheck />
                      </div>
                      <h3 className="heading-display text-2xl text-ink">Mensaje Recibido</h3>
                      <p className="mt-2 font-serif italic text-ash">
                        Muchas gracias, {formData.name}. Hemos recibido su consulta y revisaremos los detalles con detenimiento. Le responderemos a la brevedad.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", service: "Branding", budget: "", message: "" });
                        }}
                        className="mt-6 text-xs uppercase tracking-[0.2em] font-semibold text-gold-deep hover:underline"
                      >
                        Enviar otra consulta
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Su nombre o el de su firma"
                          className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                            Correo electrónico *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="contacto@empresa.com"
                            className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                            Teléfono / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+57 310 ..."
                            className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                            Disciplina principal
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                          >
                            <option value="Fotografía">Fotografía Profesional</option>
                            <option value="Diseño Gráfico">Diseño Gráfico & Packaging</option>
                            <option value="Branding">Branding & Identidad Completa</option>
                            <option value="Marketing Digital">Marketing Digital Consciente</option>
                            <option value="Social Media">Social Media & Dirección de Arte</option>
                            <option value="Integral">Proyecto Integral Multidisciplinario</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                            Presupuesto estimado
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                          >
                            <option value="A consultar">A consultar según propuesta</option>
                            <option value="$25,000 - $50,000 MXN">$25,000 — $50,000 MXN</option>
                            <option value="$50,000 - $100,000 MXN">$50,000 — $100,000 MXN</option>
                            <option value="Más de $100,000 MXN">Más de $100,000 MXN / Proyectos Internacionales</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.68rem] uppercase tracking-[0.22em] font-semibold text-ink mb-2">
                          Detalles del proyecto *
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Describa la visión de su marca, tiempos deseados y qué espera lograr..."
                          className="w-full bg-[#faf9f7] border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-ink text-paper text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-ink transition-all cursor-pointer"
                      >
                        Enviar consulta al taller →
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Studio Info Col */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h3 className="heading-display text-2xl text-ink mb-4">Información Directa</h3>
                  <p className="font-serif italic text-base text-ash leading-relaxed">
                    Si prefiere una comunicación más directa o desea coordinar una videollamada, estamos a su disposición a través de los siguientes canales:
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-ink/10 text-sm">
                  <div className="flex items-start gap-4">
                    <FiMail className="text-gold-deep text-lg mt-0.5" />
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-ash block">Email</span>
                      <a href="mailto:contacto@gemberthfigueroa.com" className="font-mono text-ink hover:text-gold-deep transition-colors">
                        contacto@gemberthfigueroa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiPhone className="text-gold-deep text-lg mt-0.5" />
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-ash block">Teléfono / WhatsApp</span>
                      <a href="https://wa.me/573104837004" target="_blank" rel="noopener noreferrer" className="font-mono text-ink hover:text-gold-deep transition-colors">
                        +57 310 483 7004
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiInstagram className="text-gold-deep text-lg mt-0.5" />
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-ash block">Instagram</span>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-ink hover:text-gold-deep transition-colors">
                        @gemberthfigueroa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiMapPin className="text-gold-deep text-lg mt-0.5" />
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-ash block">Estudio Físico</span>
                      <span className="text-ink">Ocaña, Norte de Santander · Proyectos en toda Colombia</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FiClock className="text-gold-deep text-lg mt-0.5" />
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-ash block">Horario de Taller</span>
                      <span className="text-ink font-mono text-xs">Lun — Vie: 8:00 — 12:00 | 14:00 — 18:00</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#faf9f7] border border-ink/10">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-gold-deep font-semibold block mb-2">
                    Nota de Admisión
                  </span>
                  <p className="font-serif italic text-xs text-ash leading-relaxed">
                    Para mantener el más alto estándar de atención y calidad artesanal, nuestro estudio solo atiende a tres marcas simultáneamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
