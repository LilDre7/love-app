export default function ServicesPage() {
  const services = [
    "Tu bondad no conoce límites",
    "Me inspiras a ser mi mejor versión",
    "Tu sonrisa ilumina mis días más oscuros",
    "Bailamos al mismo ritmo de la vida",
    "Nuestras charlas matutinas son mi momento favorito",
    "Tu sabiduría e inteligencia me cautivan",
    "Tu amor incondicional me da fuerzas",
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <p className="text-sm tracking-wider font-sans">
            Por esto eres mi persona favorita
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Services Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight italic font-serif">
            ¿Por Qué Te Amo?
          </h1>

          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="border-b border-neutral-300 pb-6">
                <p className="text-sm tracking-wide uppercase font-sans">{service}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-between text-sm tracking-wide pt-8">
          <a href="#" className="hover:opacity-70 transition-opacity">
            © 2024 & 2025
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            Para mí, tú eres verano todo el año.
          </a>
        </footer>
      </div>
    </div>
  );
}
