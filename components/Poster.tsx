export default function Poster() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="bg-white p-6 space-y-8">
        <div className="relative">
          <div className="text-center space-y-2">
            <h1 className="text-6xl md:text-9xl font-bold tracking-wider">
              NUESTRO AMOR
            </h1>
            <p className="text-lg tracking-widest uppercase">
              together forever
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl md:text-6xl italic font-serif">SIL & VARO</h2>
        </div>

        <div className="text-[0.8rem] leading-tight text-center max-w-lg mx-auto text-gray-600 uppercase tracking-wider">
          {
            "Cada momento contigo es un tesoro, cada sonrisa un regalo. Eres la luz que me guía, el calor que me abraza, y el amor que me completa. Gracias por ser mi compañero, mi amigo, y mi amor. Te amo más de lo que las palabras pueden expresar."
          }
        </div>

        <div className="flex justify-between items-center text-sm tracking-widest pt-4">
          <span>SET</span>
          <span>YOURSELF</span>
          <span>FREE</span>
        </div>
      </div>
    </div>
  );
}
