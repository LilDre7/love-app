import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MinimalistLayout() {
  const img = "/image/catlistening.jpg";

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-black p-6 md:p-12">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center mb-20">
        <span className="text-sm font-medium">Nuestra Historia</span>
        <Image
          src={img}
          alt="Logo"
          width={50}
          height={50}
          className="opacity-80"
        />
        <span className="text-sm font-medium">STUFF</span>
      </nav>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="text-7xl font-medium mb-2">444</h1>
            <h2 className="text-4xl md:text-5xl font-medium font-serif italic leading-tight">
              Nuestra Historia 🌹
            </h2>
            <p className="text-xl mt-4 font-serif">
              A tu lado soy feliz &
              <br /> - Cualquier sitio es especial.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed max-w-xl">
            <p className=" font-sans">
              Especial fue el día en que nos conocimos, y desde entonces,
              nuestra historia de amor ha sido una aventura mágica.
            </p>
            <p className="mt-4 font-sans">
              Todo comenzó con un encuentro casual, una chispa que se encendió
              en llama. Desde nuestra primera cita en la playa disfrutando del
              uno del otro y, cada momento contigo ha sido mágico. Nuestra
              historia de amor es una de risas, crecimiento y apoyo
              inquebrantable el uno al otro.
            </p>
            <p className="mt-4 font-sans">
              A través de los altibajos, hemos crecido juntos, aprendiendo el
              uno del otro y fortaleciendo nuestro vínculo cada día. Cada
              capítulo de nuestra historia es un testimonio del amor verdadero y
              duradero que compartimos.
            </p>
          </p>
        </div>

        {/* Grid Visual */}
        <div className="relative">
          <div className="aspect-square bg-[#f1f1f1] relative">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-dashed border-gray-300" />
              ))}
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-serif italic text-center">
              Silvana & Alvaro
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center mt-20">
        <span className="text-sm font-medium">TE AMO!</span>
        <div className="flex items-center gap-4">
          <span className="text-sm">@CON MUCHO AMOR </span>
          <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
