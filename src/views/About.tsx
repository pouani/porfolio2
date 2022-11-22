import React from 'react'

function About() {
  return (
    <div id="" className="about flex items-center px-4 md:px-12 xl:px-16 py-8">
        <div className="md:w-1/2 about-content">
            <h2 className="flex items-center gap-2">
                <span className="h2">Apropos de moi</span>
                <hr className="w-1/2 hr mt-1"/>
            </h2><br />
            <p>
                Salut, je m’appel Pouani et j’aime créer des concepts dédiés au web.
                Mon interet pour le développement web à commencé lors de mon premier stage académique
                dans une structure de la place nommé EKO-Market Hub, ou j’ai construit l’un de mes premiers
                site publicitaire en utilisant du code html et css.
            </p><br />
            <p>
              Aujourd’hui , j’ai le privilège de travailler dans des startups offrants des services digitaux.
              Actuellement je me concentre principalement sur la création des produits digitaux médical pour
              le compte de l’entreprise <a className="copy-name" target="_blank" rel="noreferrer" href="https://www.medicasure.com/">@medicasure</a>. 
            </p><br />
            <div className="about-content-tech mt-3">
              <h4>
                Voici quelques technologies avec lesquelles je travailles :
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <ul className="py-2 tech-list">
                <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Html5
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Css3
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Php 8
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    C#
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Liquid
                  </li>
                </ul>
                <ul className="py-2 tech-list">
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Vuejs(2 et 3)
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Reactjs
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Laravel 8
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Asp.net 5
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Sass
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    TailwindCss 2 et 3
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Bootstrap 5
                  </li>
                </ul>
                <ul className="py-2 tech-list">
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Git
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Github
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    GitLab
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Jira
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Bitbucket
                  </li>
                  <li className="flex items-center gap-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    Docker
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className="about-svg hidden md:block">
          <svg width="412" height="501" viewBox="0 0 412 501" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="314.992" transform="matrix(-1 0 0 1 365.878 352.421)" stroke="#2F3343" stroke-width="46.2605"/>
            <circle r="328.87" transform="matrix(-1 0 0 1 352 352)" stroke="#2F3343" stroke-width="46.2605"/>
            <circle r="301.955" transform="matrix(-1 0 0 1 378.915 339.384)" stroke="#3F4352" stroke-width="46.2605"/>
          </svg>
        </div>
    </div>
  )
}

export default About