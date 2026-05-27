// IMPORTA TUS IMÁGENES
import agricola from "../Assets/Imgx/corredoragricola.webp";
import trailer from "../Assets/Imgx/transportepesado.webp";
import industrial from "../Assets/Imgx/zonaindustrial.webp";
import carretera from "../Assets/Imgx/conectividadregional.webp";
import logistica from "../Assets/Imgx/nodologistico.webp";
import comercial from "../Assets/Imgx/conexioncomercial.webp";

const cards = [
  {
    title: "Corredor Agrícola Estratégico",
    subtitle: "Cercanía A Zonas De Producción",
    image: agricola,
    className: "h-[300px] ",
  },
  {
    title: "Acceso para Transporte Pesado",
    subtitle: "Operación Eficiente Para Tráiler.",
    image: trailer,
    className: "h-[300px] ",
  },
  {
    title: "Zona Industrial Activa",
    subtitle: "Entorno Empresarial En Crecimiento.",
    image: industrial,
    className: "h-[300px] ",
  },
  {
    title: "Conectividad Regional",
    subtitle: "Acceso A 50m De Carretera Transpeninsular",
    image: carretera,
    className: "h-[300px]",
  },
  {
    title: "Nodo Logístico",
    subtitle: "Ideal Para Distribución Y Almacenamiento.",
    image: logistica,
    className: "h-[300px]",
  },
  {
    title: "Conexión Comercial",
    subtitle: "Proximidad A Centros Industriales.",
    image: comercial,
    className: "h-[300px] ",
  },
];

const Card = ({ title, subtitle, image, className }) => {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      {/* Texto */}
      <div className="absolute bottom-5 left-5 z-10">
        <h3 className="text-blue-500 font-bold text-[20px] leading-[1.05] max-w-80">
          {title}
        </h3>

        <p className="text-white text-[16px] mt-1 font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default function Pagee() {
  return (
    <section className="w-full bg-blue-900/25 py-16 px-5 md:px-10">
      <div className="max-w-300 mx-auto">
        {/* Título */}
        <h2 className="text-center text-blue-950 font-extrabold uppercase text-[28px] md:text-[50px] leading-none mb-12x pb-12">
          UBICACIÓN EN ZONA DE ALTO CRECIMIENTO
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* FILA 1 */}
          <div className="md:col-span-4">
            <Card {...cards[0]} />
          </div>

          <div className="md:col-span-8">
            <Card {...cards[1]} />
          </div>

          {/* FILA 2 */}
          <div className="md:col-span-8">
            <Card {...cards[2]} />
          </div>

          <div className="md:col-span-4">
            <Card {...cards[3]} />
          </div>

          {/* FILA 3 */}
          <div className="md:col-span-4">
            <Card {...cards[4]} />
          </div>

          <div className="md:col-span-8">
            <Card {...cards[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}