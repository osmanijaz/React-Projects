import { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './blackCircle.png'
import React from 'react'

export const Navbar = () => {

const [showLinks, setShowLinks] = useState(false)

const linksContainerRef = useRef(null)
const linksRef = useRef(null)





const toggleLinks = ()=>{

  // console.log(linksRef.current.getBoundingClientRect())
  setShowLinks(!showLinks)
}

const linkStyles = {
  height:showLinks?`${linksRef.current.getBoundingClientRect().height}px`: '0px'


}


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />

          <button className="nav-toggle" onClick={toggleLinks}>

            <FaBars />
          </button>
        </div>

        {/* <div className={showLinks ? "links-container show-container" : 'links-container'}> */}
        <div className="links-container" ref={linksContainerRef} style={linkStyles}>


          <ul className="links" ref={linksRef}>

            {links.map((link) => {
              const { id, url, text } = link

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>


        {/* social links */}

        <ul className='social-icons'>
          {social.map((socialIcon)=>{

            const {id, url, icon} = socialIcon 
            return( 
            <li key={id}> 
            <a href={url}>{icon}</a>
            </li>
            )

        



          })}


        </ul>







      </div>
    </nav>
  )}

  export default Navbar