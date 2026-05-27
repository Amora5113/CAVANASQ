import logoprincipal from "../Assets/Logos/Logompi.png";
import logo from "../Assets/Logos/Logop.png";
import bgpatron from "../Assets/Imgx/bgpatron.webp";

const benefits = [
  "Ubicación dentro del corredor agrícola",
  "Infraestructura industrial moderna",
  "Espacios nuevos y funcionales",
  "Logística y distribución eficiente",
  "Presencia empresarial sólida",
  "Operación segura y organizada",
];

export default function Pageg() {
  return (
    <section className="relative overflow-hidden py-24 px-6 ">
      
      {/* FONDO PATRÓN */}
      <div className="absolute inset-0">
        <img
          src={bgpatron}
          alt="industrial pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-275 mx-auto flex flex-col items-center">

        {/* SUBTÍTULO */}
        <p className="text-blue-950 tracking-[2px] uppercase text-[18px] md:text-[20px] mb-3 font-light text-center">
          Cavana en San Quintín
        </p>

        {/* TITULO */}
        <h2 className="text-center text-blue-950 font-extrabold uppercase leading-[1.05] text-[34px] md:text-[58px] max-w-225">
          Ventajas Estratégicas para tu Operación
        </h2>

        {/* CARD */}
        <div className="relative mt-14 w-full max-w-190">

          {/* SOMBRA */}
          <div className="absolute inset-0 translate-y-3 scale-[0.97] bg-white/20 rounded-[28px] blur-md" />

          {/* CARD PRINCIPAL */}
          <div className="relative bg-white/95 backdrop-blur-md rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.30)] px-8 md:px-12 py-10 transition-all duration-500 hover:-translate-y-1">

            {/* TEXTO */}
            <p className="text-blue-950 text-[16px] md:text-[18px] leading-relaxed max-w-140">
              Beneficios para empresas del valle de San Quintín o próximas por establecerse en la región.
            </p>

            {/* LISTA */}
            <ul className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-blue-950 text-[15px] md:text-[17px]"
                >
                  {/* BULLET */}
                  <img
                    src={logo}
                    alt="logo"
                    className="w-5 h-5 object-contain mt-1"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* LOGO FLOTANTE */}
            <div className="absolute -bottom-18 right-6 md:right-10 bg-white rounded-full shadow-2xl p-4 md:p-5">
              <img
                src={logoprincipal}
                alt="Cavana"
                className="w-20 md:w-27.5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}