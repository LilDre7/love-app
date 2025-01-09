'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer className="relative bottom-0 left-0 right-0 bg-black text-white py-16 px-6 min-h-[600px] flex flex-col justify-between rounded-t-3xl z-50 mt-10">
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        <p className="text-sm tracking-wide">14/04/2024</p>
        <h2 className="text-9xl md:text-9xl font-light tracking-wide">TE AMO</h2>

        {/* Circular Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative mt-8 rounded-full border border-white/20 p-14 transition-transform duration-300 hover:scale-110"
        >
          <div className={`absolute inset-0 rounded-full flex items-center justify-center transition-transform duration-300 ${isHovered ? 'animate-spin-slow' : ''
            }`}>
            <a href="mailto:alvaroaburto71@gmail.com" target='_blank' className="text-xs tracking-widest">
              ESCRIBEME
              <br />
              AQUI 💌
            </a>
          </div>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex sm:flex justify-between items-center pt-8 text-sm border-t border-white/10">
        <p className="text-white/60 text-sm text-pretty sm:text-xs tracking-wide uppercase gap-3">
          Que me perdone el tiempo… <br /> ¡pero contigo me quedo toda la vida!
        </p>
        <div className="gap-8 hidden sm:flex">
          <Link href="#" className="hover:text-white/70 transition-colors">
            MI
          </Link>
          <Link href="#" className="hover:text-white/70 transition-colors">
            ALMA
          </Link>
          <Link href="#" className="hover:text-white/70 transition-colors">
            GEMELA
          </Link>
        </div>
      </div>
    </footer>
  )
}

