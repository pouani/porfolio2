import React from "react";

function About() {
  return (
    <div id="" className="about px-4 md:px-12 xl:px-16 py-8"><br />
      <div data-aos="flip-left" data-aos-delay="80" data-aos-duration="1200" className="about-content-tech mt-3">
        <h4 className="text-center h2">Stack de l'année :</h4>
        <br />
        <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
          <li className="item-tec list-none">Html5</li>
          <li className="item-tec list-none">Css3</li>
          <li className="item-tec list-none">JavaScript</li>
          <li className="item-tec list-none">TypeScript</li>
          <li className="item-tec list-none">Php 8</li>
          <li className="item-tec list-none">C#</li>
          <li className="item-tec list-none">Liquid</li>

          <li className="item-tec list-none">Vuejs(2 et 3)</li>
          <li className="item-tec list-none">Reactjs</li>
          <li className="item-tec list-none">Laravel 8</li>
          <li className="item-tec list-none">Asp.net 5</li>
          <li className="item-tec list-none">Sass</li>
          <li className="item-tec list-none">TailwindCss 2 et 3</li>
          <li className="item-tec list-none">Bootstrap 5</li>

          <li className="item-tec list-none">Git</li>
          <li className="item-tec list-none">Github</li>
          <li className="item-tec list-none">GitLab</li>
          <li className="item-tec list-none">Jira</li>
          <li className="item-tec list-none">Bitbucket</li>
          <li className="item-tec list-none">Docker</li>
        </div>
      </div>
      <br />
      <div data-aos="zoom-in-down" data-aos-duration="1300" className="md:w-1/2 about-content md:mt-6">
        <h2 className="flex items-center gap-2">
          <span className="h2">Apropos de moi</span>
          <hr className="w-1/2 hr mt-1 md:block hidden" />
        </h2>
        <br />

        <p className="about_text">
          Salut, je suis Ulrich POUANI et j’aime créer des concepts dédiés au web.
          Mon interet pour le développement web à commencé dès mon premier stage
          académique dans une structure de la place nommé EKO-Market Hub
          éffectuant dans le secteur du e-commerce. J’ai appri entre autre dans
          cette structure à construire mon premier site utilisant pour cela{" "}
          <strong>Html, Css, JavaScript</strong>.
        </p>
        <br />
        <p>
          Aujourd’hui , j’ai le privilège de travailler dans des startups
          offrants des services digitaux. Actuellement je me concentre
          principalement sur la création des produits digitaux médical pour le
          compte de l’entreprise{" "}
          <a
            className="copy-name"
            target="_blank"
            rel="noreferrer"
            href="https://www.medicasure.com/"
          >
            @medicasure
          </a>
          .
        </p>
      </div>
      <div className="about-svg hidden md:block">
        <svg
          width="412"
          height="501"
          viewBox="0 0 412 501"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="314.992"
            transform="matrix(-1 0 0 1 365.878 352.421)"
            stroke="#2F3343"
            stroke-width="46.2605"
          />
          <circle
            r="328.87"
            transform="matrix(-1 0 0 1 352 352)"
            stroke="#2F3343"
            stroke-width="46.2605"
          />
          <circle
            r="301.955"
            transform="matrix(-1 0 0 1 378.915 339.384)"
            stroke="#3F4352"
            stroke-width="46.2605"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
