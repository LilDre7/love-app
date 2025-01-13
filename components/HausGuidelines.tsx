import Image from "next/image";

export default function HausGuidelines() {
  const img = "/image/cathug.jpeg";

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-wide text-neutral-600">
              Create More
            </div>
            <h1 className="font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              HAUS®
            </h1>
            <div className="mt-auto pt-8">
              <div className="space-y-1 text-sm text-neutral-600">
                <p>L.O.V/2025</p>
                <p>ESPERO TE GUSTE • CREADA POR ALVARO</p>
                <div className="pt-2">
                  <div className="h-[1px] w-16 bg-neutral-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e8e3db]">
            <Image
              src={img}
              alt="HAUS brand lifestyle photo"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
