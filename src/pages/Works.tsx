import React, { useRef } from 'react'
import medicasure from '../images/medicasure.png';
import { motion, useScroll } from "framer-motion";
import GithubProject from '../views/GithubProject';

function Works() {

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="work px-4 md:px-12 xl:px-16 py-8">
        <svg id="progress-circle" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" style={{strokeDashoffset: 0, strokeWidth: 15, fill: 'none'}}/>
            <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
            />
        </svg>
        <div className="">
            <h2 className="flex items-center gap-2 mb-16">
                <span className="h2">Projects Réalisés</span>
                <hr className="w-1/2 hr mt-2 ml-2"/>
            </h2><br />

            <div className="work-content flex gap-16" ref={ref}>
                <div className="work-item m-auto">
                    <div className="md:flex justify-between">
                        <h2 className="work-title">Medicasure</h2>
                        <ul className="flex flex-col items-end">
                            <li className="md:w-3/4">
                                Plateforme de presentation de service offerts par la structure de sante
                                medicasure, avec differents offresaux services.
                            </li>
                            <li className="work-out md:flex justify-center md:items-center loat-right w-full md:w-11/12 mt-4">
                                
                                <ul className="tech grid grid-cols-3 md:flex gap-3">
                                    <li className="">Laravel8</li>
                                    <li>Bootstrap5</li>
                                    <li>Vuejs3</li>
                                    <li>git</li>
                                    <li>BitBucket</li>
                                    <li>Jira</li>
                                </ul>
                            </li>
                        </ul>
                    </div><br />
                    <div className="works-img p-4 md:p-12 example-container">
                        <motion.img whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }} src={medicasure} alt=""/>
                    </div>
                </div>
                <div className="work-item m-auto">
                    <div className="md:flex justify-between">
                        <h2 className="work-title">Medicasure</h2>
                        <ul className="flex flex-col items-end">
                            <li className="md:w-3/4">
                                Plateforme de presentation de service offerts par la structure de sante
                                medicasure, avec differents offresaux services.
                            </li>
                            <li className="work-out md:flex justify-center md:items-center loat-right w-full md:w-11/12 mt-4">
                                
                                <ul className="tech grid grid-cols-3 md:flex gap-3">
                                    <li className="">Laravel8</li>
                                    <li>Bootstrap5</li>
                                    <li>Vuejs3</li>
                                    <li>git</li>
                                    <li>BitBucket</li>
                                    <li>Jira</li>
                                </ul>
                            </li>
                        </ul>
                    </div><br />
                    <div className="works-img p-4 md:p-12 example-container">
                        <motion.img whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }} src={medicasure} alt=""/>
                    </div>
                </div>
                <div className="work-item m-auto">
                    <div className="md:flex justify-between">
                        <h2 className="work-title">Medicasure</h2>
                        <ul className="flex flex-col items-end">
                            <li className="md:w-3/4">
                                Plateforme de presentation de service offerts par la structure de sante
                                medicasure, avec differents offresaux services.
                            </li>
                            <li className="work-out md:flex justify-center md:items-center loat-right w-full md:w-11/12 mt-4">
                                <ul className="tech grid grid-cols-3 md:flex gap-3">
                                    <li className="">Laravel8</li>
                                    <li>Bootstrap5</li>
                                    <li>Vuejs3</li>
                                    <li>git</li>
                                    <li>BitBucket</li>
                                    <li>Jira</li>
                                </ul>
                            </li>
                        </ul>
                    </div><br />
                    <div className="works-img p-4 md:p-12 example-container">
                        <motion.img whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.8 }} src={medicasure} alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <GithubProject />
        </div>
    </div>
  )
}

export default Works