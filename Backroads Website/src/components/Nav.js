import React from 'react'
import Logo from '../images/logo.svg'
import { pageLinks, socialLinks } from './Data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

<PageLinks/>

        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul> */}

        <ul className="nav-icons">


          {socialLinks.map((link)=>{
            
            
            return <SocialLink key={link.id} {...link} itemClass='nav-icon'/>




          })}



        

        </ul>
      </div>
    </nav>
  )
}

export default Nav