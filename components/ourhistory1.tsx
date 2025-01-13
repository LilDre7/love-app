export default function TypographicArt() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-16">
        {/* Header */}
        <div className="flex justify-between text-sm tracking-wide text-gray-600">
          <span>be</span>
          <div className="flex gap-4">
            <span>Nunca existe la distancia</span>
            <span>¡Te amo, te extraño!</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-1">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight">
            <span className="block">life</span>
            <span className="block">goes</span>
            <span className="block">on</span>
          </h1>
        </div>

        {/* Lyrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-gray-600">
          <div className="space-y-1">
            <p>eres mi sol mi luna</p>
            <p>y todas mis estrellas</p>
            <p>en cada amanecer</p>
            <p>en cada anochecer</p>
            <p>mi amor eterno</p>
          </div>

          <div className="space-y-1">
            <p>tu amor es mi guía</p>
            <p>en la oscuridad</p>
            <p>mi refugio eterno</p>
            <p>mi paz y mi verdad</p>
          </div>

          <div className="space-y-1">
            <p>como un rayo en el cielo azul</p>
            <p>otro día pasará</p>
            <p>en mi almohada, en mi mesa</p>
            <p>sí, la vida sigue</p>
            <p>como esto otra vez</p>
          </div>
        </div>
      </div>
    </div>
  );
}
