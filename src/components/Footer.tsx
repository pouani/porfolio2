import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <nav className="footer px-4 md:px-12 xl:px-16 flex justify-center md:justify-between items-center py-6">
    <li className="footer-copy list-none">
      <span>Copyright 2022 - </span>
      <span className="copy-name">@David Pouani.</span>
    </li>
    <ul className="list-none hidden md:flex gap-12">
      <Link to="/" className="">Apropos</Link>
      <Link to="/experience" className="">Experiences</Link>
      <Link to="/works" className="">Projets</Link>
      <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Footer