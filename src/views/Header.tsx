import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="svg svg-top hidden md:block">
        <svg width="368" height="435" viewBox="0 0 368 435" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="374.5" transform="matrix(-1 0 0 1 435 17)" stroke="#2F3343" stroke-width="55"/>
            <circle r="391" transform="matrix(-1 0 0 1 418.5 16.5)" stroke="#3F4352" stroke-width="55"/>
            <circle r="359" transform="matrix(-1 0 0 1 439.5 6.5)" stroke="#2F3343" stroke-width="55"/>
        </svg>

        </div>
        <div data-aos="fade-up" data-aos-duration="900" className="mt-44 md:mt-0 header-text px-4 md:px-12 xl:px-16">
            <h3 className="header-welcome">Bienvenue sur mon profil...</h3>
            <div className="mt-8">
                <h1>
                    <span>David Pouani.</span><br />
                    <span className="header-title">Developpeur web front-end</span>
                </h1>
                <p className="mt-8 header-text">
                    Développeur web passionné par l’UI design et l’architecture micro-frontend, 
                    je conçois des expériences numériques exceptionnelles. Ma capacité d’adaptation 
                    me permet d’exercer dans des domains divers avec une bonne courbe d’adaptation.
                    Actuellement, je me concentre  sur la création des produits accessibles par l’humain et dédiés
                    au secteur médical chez <a className="copy-name" target="_blank" rel="noreferrer" href="https://www.medicasure.com/">@medicasure.</a>
                </p>
            </div>
            <button className="mt-8 cursor-pointer header-btn flex items-center">
            <span>Me contacter</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            </button>
        </div>
        <div className="svg svg-bottom">
        <svg width="1124" height="264" viewBox="0 0 1124 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-43" cy="419" r="374.5" stroke="#3F4352" stroke-width="55"/>
            <circle cx="-26.5" cy="418.5" r="391" stroke="#2F3343" stroke-width="55"/>
            <circle cx="-58.5" cy="403.5" r="359" stroke="#3F4352" stroke-width="55"/>
            <circle cx="689" cy="419" r="374.5" stroke="#2F3343" stroke-width="55"/>
            <circle cx="705.5" cy="418.5" r="391" stroke="#2F3343" stroke-width="55"/>
            <circle cx="673.5" cy="403.5" r="359" stroke="#3F4352" stroke-width="55"/>
        </svg>

        </div>
    </div>
  )
}

export default Header