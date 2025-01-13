export default function CreateMore() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0e8]">
        <div className="w-full max-w-2xl aspect-[4/5] relative p-8 bg-[#f5f0e8]">
          {/* Top identifiers */}
          <div className="flex justify-between text-sm tracking-widest">
            <span>S&A</span>
            <span>22</span>
          </div>
          
          {/* Main content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-center leading-tight">
              14 / 04 / 2024
            </h1>
            
            {/* Oval container for "CONSUME LESS" */}
            <div className="relative mt-4">
              <div className="px-6 py-2 border border-black rounded-full">
                <p className="text-xs tracking-widest">
                  OUR LOVE
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom identifiers */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between text-sm tracking-widest">
            <span>17</span>
            <span>S&A</span>
          </div>
        </div>
      </div>
    )
  }
  
  