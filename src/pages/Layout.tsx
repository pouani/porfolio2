import React from 'react'
import About from '../views/About'
import Header from '../views/Header'
import SocialNetwork from '../views/SocialNetwork'

function Layout() {
  return (
    <div>
        <Header />
        <About />
        <div className="social">
          <SocialNetwork />
        </div>
    </div>
  )
}

export default Layout