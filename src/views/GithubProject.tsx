import React from 'react'

function GithubProject() {
  return (
    <div className="py-16">
        <div className="md:flex">
            <div data-aos="zoom-in" className="mb-6 md:mb-0">
                <h2 className="h2">Project Github</h2><br />
                <p>
                Plateforme de formation en ligne dans le domaine médical
                Après chaque cours et tests de compétences validé, il est
                délivré une attestation de réussite au cours
                </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <li data-aos="flip-left" className="github-item"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <a target="_blank" rel="noreferrer" href="https://github.com/pouani/Vuex-Tuto.git" className="flex flex-col gap-6 justify-between">
                        <div className="flex justify-between">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-regular fa-folder"></i>
                        </div>
                        <h3>
                            Authentification avec Vuex, Axios et Vuejs3
                        </h3>
                        <p>
                            Intégration d'une Api authentification Laravel8 avec Vuex.
                        </p>
                        <p className="github-tech">Vuejs3 - Vuex4 - Axios</p>
                    </a>
                </li>
                <li data-aos="flip-right" className="github-item" 
                data-aos-delay="60"
                data-aos-duration="1200"
                >
                    <a target="_blank" rel="noreferrer" href="https://github.com/pouani/app-chronotys.git" className="flex flex-col gap-6 justify-between">
                        <div className="flex justify-between">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-regular fa-folder"></i>
                        </div>
                        <h3>
                            Interface utilisateur
                            Responsive et crud associé
                        </h3>
                        <p>
                            
                        </p>
                        <p className="github-tech">Vuejs3 - Firebase</p>
                    </a>
                </li>
                <li data-aos="flip-up" className="github-item" 
                    data-aos-delay="70"
                    data-aos-duration="1400"
                >
                    <a target="_blank" rel="noreferrer" href="https://github.com/pouani/Ap_restaurant.git" className="flex flex-col gap-6 justify-between">
                        <div className="flex justify-between">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-regular fa-folder"></i>
                        </div>
                        <h3>
                            Api Ecommerce partiel
                        </h3>
                        <p>
                            Mise sur pieds d’une api laravel ecommerce avec gestion de role.
                        </p>
                        <p className="github-tech">Laravel8 - Mysql - Postman</p>
                    </a>
                </li>
                <li data-aos="flip-down" className="github-item" 
                    data-aos-delay="80"
                    data-aos-duration="1500"
                >
                    <a target="_blank" rel="noreferrer" href="https://github.com/pouani/product-content-challenge.git" className="flex flex-col gap-6 justify-between">
                        <div className="flex justify-between">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-regular fa-folder"></i>
                        </div>
                        <h3>
                            Product preview 
                            card component
                        </h3>
                        <p>
                            Frontend Mentor - Product preview card component
                        </p>
                        <p className="github-tech">Html5 - Css3</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default GithubProject