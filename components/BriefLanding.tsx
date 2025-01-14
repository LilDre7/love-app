export default function BriefLanding() {
  return (
    <div className="sm:min-h-screen bg-[#E5E2DD] p-8 md:p-16">
      <header className="grid grid-cols-3 text-sm mb-16">
        <div>444</div>
        <div className="text-center">LOVE LETTER</div>
        <div className="text-right">TO MY LOVE</div>
      </header>

      <main className="max-w-6xl mx-auto">
        <h1 className="text-[#F5F2EE] text-[15vw] font-bold leading-none mb-4">
          I LOVE YOU
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="italic text-neutral-600">
            My Dearest
            <br />
            Love
          </div>
          <div className="italic text-neutral-600">[& Affection]</div>
        </div>

        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-8 text-xs text-neutral-600 mb-8 uppercase">
            <div>
              <p>Tu cara</p>
              <p>Tu sonrisa</p>
              <p>Tu forma de hablar</p>
              <p>Tu cuerpo</p>
            </div>
            <div>
              <p>Inteligente</p>
              <p>Valiente</p>
              <p>Amable</p>
              <p>Podria seguir pero no hay espacio para tanto</p>
            </div>
          </div>

          <div className="text-xs text-neutral-600 max-w-xs mb-8">
            ERES LA RAZÓN DE MI SONRISA Y LA DUEÑA DE MI CORAZÓN.
          </div>

          <button className="bg-[#F5F2EE] text-neutral-800 px-6 py-2 rounded-full text-sm inline-flex items-center gap-2">
            <a
              target="_blank"
              href="https://earth.google.com/web/@8.21923188,27.53794986,-19973.7938389a,22271726.74874067d,35y,0h,0t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA"
            >
              BUSCAME
            </a>
            <span className="ml-2">→</span>
          </button>
        </div>
      </main>
    </div>
  );
}
