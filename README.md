# Gemberth Figueroa — Diario Editorial

Recreación integral del Diario Editorial de **Gemberth Figueroa** ([gemberfigueroa.pp.ua/blog](https://www.gemberfigueroa.pp.ua/blog)) utilizando el stack tecnológico moderno de **OCAPLUS**.

---

## 🛠️ Stack Tecnológico (Alineado con OCAPLUS)

| Componente | Tecnología | Versión |
| :--- | :--- | :--- |
| **Entorno & Runtime** | Node.js (ES Modules) | v24+ |
| **Librería UI** | React | ^19.0.0 |
| **Bundler & Dev Server** | Vite | ^6.0.0 |
| **Enrutador** | React Router DOM | ^7.1.0 |
| **Estilos & Utilidades** | Tailwind CSS + PostCSS + Autoprefixer | ^3.4.17 |
| **Iconografía** | React Icons (Feather / Lucide) | ^5.4.0 |

---

## 🎨 Sistema de Diseño Editorial

* **Tipografías:**
  * **Fraunces:** Títulos de impacto *Display* y *Hero* (`.heading-mega`, `.heading-display`).
  * **Cormorant Garamond:** Textos literarios, citas y extractos editoriales (`.italic-editorial`, `.heading-serif`).
  * **Inter:** Navegación, botones y etiquetas en mayúsculas sostenidas (`font-sans`).
  * **JetBrains Mono:** Fechas, metadatos y foliación técnica (`font-mono`).
* **Paleta Cromática:**
  * Fondo: Papel / Blanco cálido (`#FFFFFF`)
  * Tinta: Obsidiana profundo (`#0A0908`)
  * Acento: Dorado champaña (`#C9A961`) y Dorado profundo (`#A88A45`)
  * Neutros: Ceniza de piedra (`#8A8580`)
* **Detalles Interactivos:**
  * Cursor magnético flotante en escritorio con seguimiento reactivo.
  * Menú overlay en pantalla completa con tipografía gigante.
  * Filtro interactivo por categorías (*Filosofía, Proceso, Fotografía, Diseño, Estudio*).
  * Modal de lectura inmersiva con formato de revista de lujo.
  * Formulario de correspondencia / Newsletter con confirmación en vivo.
  * Animación de subrayados y expansiones de *tracking* tipográfico en *hover*.

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación
npm run preview
```
