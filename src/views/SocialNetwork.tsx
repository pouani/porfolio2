import React from 'react'

function SocialNetwork() {
  return (
    <div>
        <ul className="flex items-center gap-2 flex-col social-net">
            <hr className="w-1/12 rotate-90"/>
            <li><i className="fa-brands fa-github"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
            <li><i className="fa-solid fa-envelope"></i></li>
        </ul>
    </div>
  )
}

export default SocialNetwork