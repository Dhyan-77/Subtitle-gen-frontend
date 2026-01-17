import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 border border-white/20 bg-white/10
        backdrop-filter backdrop-blur-xl  ">
        <Link to = "/"><div className="flex items-center gap-3  hover:scale-110  transition-all 2s
            hover:shadow-black transition-all 2s">
          <img
            src="/lll.png"
            alt="Logo"
            className="w-20 h-10 object-contain"
          />
          <span className="text-[25px] font-semibold tracking-wide text-white">
            Video Genius
          </span>
        </div></Link>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link to ="/" ><button className="hover:text-white transition">Home</button></Link>
          <button className="hover:text-white transition">Features</button>
          <button className="hover:text-white transition">Pricing</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav