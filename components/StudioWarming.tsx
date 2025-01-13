import Image from "next/image";

export default function StudioWarming() {
  const img = "/image/cart.png";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f7] px-4 py-8">
      <div className="w-full max-w-[1920px] space-y-8">
        {/* Header Names */}
        <div className="text-[11px] tracking-[0.15em] text-gray-800 font-mono text-center">
          Mi sonrisa está lista para recibirte el día que vuelvas. ¿Cuánto
          tardas?
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center space-y-1">
        <h1 className="flex flex-col items-center justify-center gap-1">
          <span className="font-serif text-[5vw] sm:text-[52px] leading-[1.1] mt-4">
            aún yéndote
          </span>
          <span className="font-mono text-[2vw] sm:text-sm tracking-[0.15em]">
            mi amor
          </span>
          <span className="font-serif text-[5vw] sm:text-[52px] leading-[1.1]">
            jamás se iría.
          </span>
        </h1>
      </div>

      {/* Main Image */}
      <div className="py-16">
        <div className="relative aspect-[4/5] w-full max-w-[600px] mx-auto">
          <Image
            src={img}
            alt="Plant on wooden stand next to a dark couch"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Footer Information */}
        <div className="font-mono text-center space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3 text-[3vw] sm:text-base">
              <span className="tracking-[0.15em]">HAZ</span>
              <span className="text-[3vw] sm:text-xl font-light">CLICK</span>
              <span className="tracking-[0.15em]">EN</span>
              <span className="text-[3vw] sm:text-xl font-light">LA</span>
              <span className="tracking-[0.15em]">CARTA</span>
            </div>
            <div className="text-[2vw] sm:text-sm tracking-[0.15em]">
              Tus ojos son para las estrellas
            </div>
          </div>

          <div className="space-y-1 text-[2vw] sm:text-sm tracking-[0.15em]">
            <div>L.O.V.E.</div>
            <div>tú allá y yo acá.</div>
            <div>Nos une la distancia</div>
          </div>

          <div>
            <div className="text-[3vw] sm:text-xl tracking-[0.1em] font-light">
              ALVARO &amp; SIL
            </div>
          </div>

          <div className="text-[1.5vw] sm:text-[10px] tracking-[0.15em] pt-4">
            Llevo tu sonrisa como bandera.
          </div>
        </div>
      </div>
    </div>
  );
}
