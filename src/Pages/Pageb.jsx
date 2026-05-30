import Industria from "../Assets/Imgx/industria.webp"
import Agro from "../Assets/Imgx/agro.webp"
import Logistica from "../Assets/Imgx/logistica.webp"
import Almacen from "../Assets/Imgx/almacen.webp"
import Transporte from "../Assets/Imgx/transporte.webp"
import Logo from "../Assets/Logos/mpigris.png"
import Cavana from "../Assets/Logos/cavanagris.svg"

const sectores = [
  {
    id: 1,
    title: "Sector Agroexportador",
    img: Agro,
  },

  {
    id: 2,
    title: "Operación Logística",
    img: Logistica,
  },

  {
    id: 3,
    title: "Industria de Transformación",
    img: Industria,
  },

  {
    id: 4,
    title: "Almacenamiento de insumos",
    img: Almacen,
  },

  {
    id: 5,
    title: "Transporte Comercial",
    img: Transporte,
  },
]

const Pageb = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-14 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* CONTENIDO IZQUIERDO */}
        <div className="bg-blue-950 rounded-sm p-5 md:p-10 shadow-xl relative overflow-hidden">

          <div className="max-w-md">

            {/* Imagen inferior */}
            <div className="mt-5 flex  uppercase tracking-wide leading-none">
              <img src={Cavana} alt="LogoGris" className="w-100 object-contain"/>
            </div>
          
            <h2 className="text-white font-semibold uppercase text-[clamp(1rem,1.5vw,1.3rem)] mt-2">
              Desarrollo Industrial Privado
            </h2>

            <p className="text-gray-300 text-justify mt-6 leading-relaxed text-[clamp(16px,1.1vw,20px)]">
              Compuesto por 4 bodegas diseñadas para empresas
              que priorizan eficiencia operativa, seguridad y
              proyección de crecimiento. Concebido para responder
              a la creciente demanda industrial en San Quintín,
              integra infraestructura moderna y áreas compartidas
              que optimizan la logística diaria y fortalecen la
              operación empresarial.
            </p>
          </div>

          {/* Imagen inferior */}
          <div className="mt-5 flex justify-end opacity-90">
            <img src={Logo} alt="LogoGris" className="w-100 object-contain"/>
          </div>
        </div>

        {/* CONTENIDO DERECHO */}
        <div>
          <div className="text-center mb-12">
            <h1 className="text-blue-950 text-center font-semibold leading-tight text-[clamp(1.2rem,2vw,2rem)]">
              Ideal para compañías que buscan consolidar su
              presencia en un entorno estratégico.
            </h1>
          </div>

          {/* GRID */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 ">

            {sectores.map((item) => (
              <div key={item.id} className="w-[40%] md:w-40 flex flex-col items-center text-center group">

                {/* Imagen */}
                <div className="w-35 h-35 rounded-3xl overflow-hidden shadow-lg transition-all duration-100 group-hover:scale-105">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover"/>
                </div>

                {/* Texto */}
                <h2 className="mt-4 text-blue-950 leading-tight font-medium text-[clamp(14px,1vw,18px)] max-w-160">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}

export default Pageb