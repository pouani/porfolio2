import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky nav px-4 md:px-12 xl:px-16 flex justify-between py-6" >
    <Link to="/" className="logo list-none">David-P.</Link>
    <ul className="list-none hidden md:flex gap-12">
      <Link to="/" className="">Apropos</Link>
      <Link to="/experience" className="">Experiences</Link>
      <Link to="/works" className="">Projets</Link>
      <li>Soft-skills</li>
    </ul>
    <ul className="flex md:hidden">
      <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>

      </li>
    </ul>
  </nav>
  )
}

export default Navbar