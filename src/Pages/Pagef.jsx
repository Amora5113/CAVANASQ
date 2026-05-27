// IMPORTA TU LOGO
import logo from "../Assets/Logos/isologogris.png";

// IMPORTA TU IMAGEN PRINCIPAL
import imgf from "../Assets/Img/f.webp";

const featuresLeft = [
  "Acceso controlado",
  "Barda perimetral",
  "Seguridad 24/7",
  "Iluminación exterior",
  "Señalización industrial",
];

const featuresRight = [
  "Servicio de montacargas opcional",
  "Áreas comunes",
  "Infraestructura moderna",
  "Rampa para carga y descarga",
];

export default function Pagef() {
  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LADO IZQUIERDO */}
        <div className="flex items-center justify-center px-8 py-14 md:px-14">
          <div className="max-w-135 w-full">
            {/* TITULO */}
            <h2 className="text-white font-bold text-[34px] md:text-[48px] leading-[1.05] max-w-125">
              Todo lo necesario para una operación eficiente
            </h2>

            {/* LISTAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mt-10">
              {/* COLUMNA IZQUIERDA */}
              <ul className="space-y-4 mb-2">
                {featuresLeft.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white text-[16px] md:text-[19px]"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-5 h-5 object-contain mt-1"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* COLUMNA DERECHA */}
              <ul className="space-y-4">
                {featuresRight.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white text-[16px] md:text-[19px]"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-5 h-5 object-contain mt-1"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div className="w-full h-87.5 md:h-125 lg:h-full">
          <img
            src={imgf}
            alt="imagen general"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}