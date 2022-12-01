import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [translate, setTranslate] = React.useState("translate(100%)");

  return (
    <nav className="nav px-4 md:px-12 xl:px-16 flex justify-between py-6" >
      <Link to="/" className="logo list-none" data-aos="fade-down" data-aos-duration="900">David-P.</Link>
      <ul data-aos="fade-left" data-aos-duration="900" className="list-none hidden md:flex gap-12">
        <Link to="/" className="">Apropos</Link>
        <Link to="/experience" className="">Experiences</Link>
        <Link to="/works" className="">Projets</Link>
        <li>Soft-skills</li>
      </ul>
      <ul className="md:hidden">
        <li className='cursor-pointer' onClick={() => { translate === "translate(0)" ? setTranslate("translate(100%)") : setTranslate("translate(0)") }}>
          {
            translate !== "translate(0)" ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          }
        </li>
        <div data-aos="fade-left" data-aos-duration="900" className="nav-mobile rounded-md absolute shadow-2xl w-full gap-6 list-none flex flex-col justify-between" style={{ "transform": translate }} >
          <ul className='flex flex-col gap-6'>
            <Link to="/" className="">Apropos</Link>
            <Link to="/experience" className="">Experiences</Link>
            <Link to="/works" className="">Projets</Link>
            <li>Soft-skills</li>
          </ul>
          <button className="mt-8 cursor-pointer header-btn flex items-center w-44">
            <span>Me contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar