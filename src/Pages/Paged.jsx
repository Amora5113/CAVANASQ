import Mapa from "../Assets/Imgx/maps.webp"
import Montacargas from "../Assets/Imgx/operacionreal.webp"

const Paged = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-14 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px_1fr] gap-10 items-stretch ">

        {/* COLUMNA IZQUIERDA */}
        <div className="bg-blue-950 relative overflow-hidden min-h-140 flex flex-col items-center align-middle px-8 py-12">

          {/* TÍTULO */}
          <h1 className="text-white text-center font-bold uppercase leading-tight
                         text-[clamp(1.9rem,1.8vw,2.2rem)]">
            Punto 
            <br/>
            Estratégico 
            <br/>
            de Operación
            
          </h1>

          {/* CINTA */}
            <div className="bg-white skew-x-[-20deg] mt-4 px-4 py-3">
                <div className="skew-x-20 text-[clamp(1.3rem,1.2vw,1.4rem)] text-center font-semibold">
                    Diseñado para Operación Real
                </div>
            </div>
          

          {/* BOTÓN */}
          <a
            href="https://maps.app.goo.gl/F5LCfFphRKZLfWPn6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 bg-gray-300
                       hover:bg-gray-200
                       hover:scale-105
                       active:scale-95
                       transition-all duration-300
                       text-blue-950
                       font-medium
                       px-14 py-5
                       rounded-lg
                       shadow-lg
                       text-[clamp(18px,1vw,20px)]"
          >

            Como Llegar

          </a>

          {/* IMAGEN */}
          <img
            src={Montacargas}
            alt="Montacargas"
            className="absolute bottom-0 w-[80%] p-5 object-contain"
          />

        </div>

        {/* COLUMNA DERECHA */}
        <div className="relative overflow-hidden">

          <img
            src={Mapa}
            alt="Mapa"
            className="w-full h-full object-contain"
          />

        </div>

      </div>

    </section>
  )
}

export default Paged