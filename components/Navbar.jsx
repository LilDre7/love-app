'use client'

import { Home, Wallet2, BarChart3, Shield } from 'lucide-react'
import { useState } from "react"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-2 sm:p-4 bg-transparent z-50">
      <nav className="bg-white rounded-full px-4 sm:px-8 py-2 sm:py-4 shadow-lg flex items-center justify-between sm:justify-center w-full max-w-60">
        <button
          onClick={() => setActiveTab(0)}
          className={`p-2 transition-colors ${activeTab === 0 ? 'text-gray-900' : 'text-gray-400'} hover:text-gray-900`}
        >
          <Home className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`p-2 transition-colors ${activeTab === 1 ? 'text-purple-500' : 'text-gray-400'} hover:text-purple-500`}
        >
          <Wallet2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`p-2 transition-colors ${activeTab === 2 ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-500`}
        >
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`p-2 transition-colors ${activeTab === 3 ? 'text-gray-900' : 'text-gray-400'} hover:text-gray-900`}
        >
          <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </nav>
    </div>
  )
}

