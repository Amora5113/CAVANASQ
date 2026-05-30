import { useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import c1 from "../Assets/Img/a.webp";
import c3 from "../Assets/Img/c.webp";
import c4 from "../Assets/Img/d.webp";
import c5 from "../Assets/Img/e.webp";
import c6 from "../Assets/Img/f.webp";
import c7 from "../Assets/Img/g.webp";
import c8 from "../Assets/Img/h.webp";
import c9 from "../Assets/Img/i.webp";
import c10 from "../Assets/Img/j.webp";
import c11 from "../Assets/Img/k.webp";

import iconCheck from "../Assets/Imgx/comprobado.webp";

const galleryImages = [
  c3,
  c5,
  c4,
  c7,
  c6,
  c8,
  c9,
  c10,
  c11,
  c1,
];

const benefits = [
  "Entrega inmediata al concluir construcción",
  "Contratos de renta disponibles previo a entrega",
  "Posibilidad de apartar bodega antes de terminación",
  "Solicita planos, precios y disponibilidad actualizada.",
];

export default function Pageh() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;

      const card = container.querySelector(".gallery-card");

      if (!card) return;

      const gap = 20;

      const scrollAmount = card.offsetWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-312.5 mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-blue-900 uppercase tracking-[2px] text-[13px] md:text-[15px]">
            Actualizaciones
          </p>

          <h2 className="text-blue-950 font-extrabold text-[34px] md:text-[58px] leading-none mt-2">
            Un vistazo a tu nuevo espacio.
          </h2>
        </div>

        {/* GALERÍA */}
        <div className="relative mt-14">
          <div className="animate-pulse bg-gray-300 rounded-[22px]" />
          {/* BOTÓN IZQUIERDO */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition hover:scale-110"
          >
            <i className="bi bi-arrow-left-circle-fill text-white text-[38px] md:text-[60px] drop-shadow-2xl"></i>
          </button>

          {/* SCROLL HORIZONTAL */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              px-2
              pl-[6vw]
              md:pl-0
              no-scrollbar
              [scrollbar-width:none]
              [-ms-overflow-style:none]
            "
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="
                  gallery-card
                  shrink-0
                  snap-start
                  md:snap-center
                  overflow-hidden
                  rounded-[22px]
                  w-[88vw]
                  md:w-162.5
                  h-65
                  md:h-105
                "
              >
                <img
                  loading="lazy"
                  src={img}
                  alt={`gallery-${index}`}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>
            ))}
          </div>

          {/* BOTÓN DERECHO */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition hover:scale-110"
          >
            <i className="bi bi-arrow-right-circle-fill text-white text-[38px] md:text-[60px] drop-shadow-2xl"></i>
          </button>
        </div>

        {/* SECCIÓN PRE-ARRENDAMIENTO */}
        <div className="mt-24">
          {/* TITULOS */}
          <h3 className="text-blue-500 font-extrabold text-[36px] md:text-[60px] leading-none">
            Pre-Arrendamiento Disponible
          </h3>

          <p className="text-blue-950 font-bold text-[24px] md:text-[38px] mt-3 leading-tight">
            Asegura tu bodega antes de la finalización del proyecto.
          </p>

          {/* CARD */}
          <div className="mt-10 bg-white rounded-3xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* CONTENIDO */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              {/* ICONO */}
              <div className="shrink-0">
                <img
                  src={iconCheck}
                  alt="check"
                  className="w-20 md:w-25 object-contain"
                />
              </div>

              {/* LISTA */}
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className="text-blue-950 text-[15px] md:text-[17px] flex items-start gap-3"
                  >
                    <span className="text-blue-900 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 items-center">

              {/* BOTÓN NUEVO */}
              <a
                href="https://www.sanquintinm2.com/property/en-renta-4-bodegas-industriales-de-510m2-en-parque-privado-con-seguridad-24-7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-gray-500
                  hover:bg-gray-400
                  transition-all
                  duration-300
                  text-white
                  font-semibold
                  px-12
                  py-4
                  rounded-xl
                  shadow-lg
                  whitespace-nowrap
                  inline-flex
                  items-center
                  justify-center
                "
              >
                Visualízanos
              </a>

              {/* BOTÓN WHATSAPP */}
              <a
                href={`https://wa.me/526161070699?text=${encodeURIComponent(
                  `Hola, me interesa agendar una visita al proyecto CAVANA. 
                  Me gustaría conocer disponibilidad, costos y características de las bodegas industriales.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-blue-500
                  hover:bg-blue-900
                  transition-all
                  duration-300
                  text-white
                  font-semibold
                  px-10
                  py-4
                  rounded-xl
                  shadow-lg
                  whitespace-nowrap
                  inline-flex
                  items-center
                  justify-center
                "
              >
                Agendar Visita
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}