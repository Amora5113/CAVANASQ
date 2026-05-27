import Bodega from "../Assets/Img/rsf.webp"


const caracteristicasIzquierda = [
  "500 m² de área operativa",
  "6 m de altura libre",
  "Estructura metálica industrial",
  "Piso de alto desempeño",
  "Acceso para transporte pesado",
  "Patio de maniobras",
]

const caracteristicasDerecha = [
  "Infraestructura eléctrica instalada (110V - 220V)",
  "Iluminación natural",
  "Servicios básicos habilitados",
  "Preparación para oficinas",
  "Estacionamiento frontal",
]

const Pagec = () => {
  return (
    <section className="bg-linear-to-r from-blue-900 to-blue-300/80 relative mx-auto  min-h-130 overflow-hidden">


        {/* Contenido Izquierdo */}
        <div className="relative z-10 grid md:grid-cols-2 items-center h-full pl-1 pr-1">
          <div className="relative flex items-end h-full">

            {/* Caja superior */}
            <div className="absolute top-0 left-10 md:left-20 z-20">

              <div className="relative bg-gray-300 px-5 py-5 shadow-lg">
                <h3 className="text-blue-950 text-center uppercase text-lg leading-none">
                  4 Bodegas
                </h3>
                <p className="text-center text-sm mt-1 text-blue-950">
                  DE
                </p>
                <h1 className="text-blue-950 font-bold text-5xl leading-none mt-1">
                  500 m²
                </h1>
              </div>
            </div>
            {/* Imagen */}
            <img
              src={Bodega}
              alt="Bodega Industrial"
              className="w-max object-contain rounded-r-2xl pt-50 relative z-10"
            />
            
          </div>

          {/* CONTENIDO DERECHO */}
          <div className="relative z-20 px-8 md:px-0 py-18 ">

            <h1 className="text-blue-950 font-bold leading-tight text-[clamp(2rem,3vw,3.5rem)]">
              Infraestructura Industrial Moderna
            </h1>

            <h2 className="text-blue-950 mt-8 text-[clamp(22px,1vw,24px)]">
              Primera Etapa <span className="mx-3">|</span> 4 Unidades Exclusivas
            </h2>

            {/* LISTAS */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">

              {/* IZQUIERDA */}
              <ul className="space-y-4 ">
                {caracteristicasIzquierda.map((item, index) => (
                  <li
                    key={index}
                    className="text-white text-[clamp(18px,1vw,21px)] flex items-start gap-2"
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* DERECHA */}
              <ul className="space-y-3 ">
                {caracteristicasDerecha.map((item, index) => (
                  <li
                    key={index}
                    className="text-white text-[clamp(18px,1vw,21px)] flex items-start gap-2"
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* BOTÓN */}
            <a
              href={`${import.meta.env.BASE_URL}REVISTACAVANA.pdf`}
              download
              className="relative z-30 inline-flex items-center gap-3
                        mt-15 bg-blue-900 hover:bg-blue-950
                        hover:scale-105 active:scale-95
                        transition-all duration-300
                        text-white text-center px-10 py-4 rounded-md shadow-lg
                        text-[clamp(18px,1vw,21px)]"
            >
              Solicitar Información Ejecutiva
            </a>

          </div>

        </div>


    </section>
  )
}

export default Pagec