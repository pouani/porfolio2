import React from 'react'

function SocialNetwork() {
  return (
    <div data-aos="fade-left">
        <ul className="flex items-center gap-2 flex-col social-net z-40">
            <hr className="w-1/12 rotate-90"/>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/pouani"><i className="fa-brands fa-github"></i></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/david-pouani-5320aa207"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a target="_blank" rel="noreferrer" href="mailto:davidpouani228@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
        </ul>
    </div>
  )
}

export default SocialNetwork