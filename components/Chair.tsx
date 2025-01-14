import Image from "next/image";

export default function Chair() {
  const img = "/image/eyes.jpeg";

  return (
    <div className="relative w-full mx-auto bg-[#e6dfd3] p-4 sm:p-20 md:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 min-h-[600px] md:min-h-[800px]">
        {/* Title */}
        <h1 className="col-span-1 sm:col-span-2 md:col-span-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-black/70 mb-2 md:mb-4 font-serif">
          UN POCO DE MI
        </h1>

        {/* Designer credit */}
        <p className="col-span-1 sm:col-span-2 md:col-span-5 text-sm mb-4 md:mb-8  italic font-serif">
          CREAMOS ALGO ESPECIAL 💗
        </p>

        {/* Text blocks grid */}
        <div className="col-span-1 sm:col-span-2 md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          <p className="text-base leading-tight font-serif">
            En cada rincón de esta silla, encuentro un susurro de amor eterno
            que me envuelve y me transporta a un lugar donde solo existen
            nuestros corazones latiendo al unísono.
          </p>
          <p className="text-base leading-tight font-serif">
            Sus curvas delicadas me recuerdan a los abrazos cálidos de un ser
            querido, esos que te envuelven con ternura y te hacen sentir que el
            mundo se detiene por un instante.
          </p>
          <p className="text-base leading-tight font-serif">
            Cada detalle es un poema, escrito con la pasión de un corazón
            enamorado, donde cada línea y cada curva cuentan la historia de un
            amor que desafía el tiempo y el espacio.
          </p>
          <p className="text-base leading-tight font-serif">
            Sentarse aquí es como ser envuelto en los brazos de un amante,
            seguro y amado, donde cada momento se convierte en un recuerdo
            imborrable de cariño y devoción.
          </p>
        </div>

        {/* Side text - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-8 bottom-48 -rotate-90 origin-left">
          <p className="text-black/75 text-sm tracking-wider">
            DISEÑA PARA TI MI AMOR ● 444
          </p>
        </div>

        {/* Mobile version of "design legend" - Visible on mobile, hidden on larger screens */}
        <div className="block md:hidden col-span-1 sm:col-span-2">
          <p className="text-black/75 text-sm tracking-wider mb-4">
            DISEÑA PARA TI MI AMOR ● 444
          </p>
        </div>

        {/* Chair image */}
        <div className="col-span-1 sm:col-span-2 md:col-span-5 relative h-64 sm:h-80 md:h-96">
          <Image
            src={img}
            alt="Wassily Chair design by Marcel Breuer"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
