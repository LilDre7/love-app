import Image from "next/image";

export default function TheodorBlack() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-serif">Nuestra Historia</h1>

      {/* Description Text */}
      <div className="max-w-2xl text-sm leading-relaxed">
        <p>
          Especila fue el día en que nos conocimos, y desde entonces, nuestra
          historia de amor ha sido una aventura mágica.
        </p>
        <p className="mt-4">
          Todo comenzó con un encuentro casual, una chispa que se encendió en
          llama. Desde nuestra primera cita tomando café hasta nuestras
          aventuras alrededor del mundo, cada momento contigo ha sido mágico.
          Nuestra historia de amor es una de risas, crecimiento y apoyo
          inquebrantable el uno al otro.
        </p>
        <p className="mt-4">
          A través de los altibajos, hemos crecido juntos, aprendiendo el uno
          del otro y fortaleciendo nuestro vínculo cada día. Cada capítulo de
          nuestra historia es un testimonio del amor verdadero y duradero que
          compartimos.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="aspect-[3/4] relative">
          <Image
            src="/image/bg1.jpg"
            alt="Portrait photo 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-[3/4] relative">
          <Image
            src="/image/bg2.jpg"
            alt="Portrait photo 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-[3/4] relative">
          <Image
            src="/image/bg3.Jpg"
            alt="Portrait photo 3"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer Logo */}
      <div className="pt-12">
        <h2 className="text-4xl md:text-5xl font-serif">
          A tu lado soy feliz<sup className="text-sm">&</sup>
        </h2>
        <p className="text-base mt-2 text-gray-600">
          Cualquier sitio es especial.
        </p>
      </div>
    </div>
  );
}
