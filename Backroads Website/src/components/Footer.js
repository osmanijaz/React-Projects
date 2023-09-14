import React from 'react'
import { pageLinks, socialLinks } from './Data'
import SocialLink from './SocialLink'


const Footer = () => {
  return (
    <footer className="section footer">


      <ul className="footer-links">

        {pageLinks.map((link)=>{
          const {id, href, name} = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
         
                {name}
              </a>
            </li>
          )
        })}

        




      </ul>
      <ul className="footer-icons">

        {socialLinks.map((link)=>{
          const {id, href, icon} = link
          return (

            <SocialLink key={link.id} {...link} itemClass='footer-icon'/>

            // <li key={id}>
            //   <a
            //     href={href}
            //     target="_blank"
            //     rel="noreferror"
            //     className="footer-icon"
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>
          )
        })}




   
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id={new Date().getFullYear()}></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer