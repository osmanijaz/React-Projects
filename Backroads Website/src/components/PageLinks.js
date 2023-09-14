import React from 'react'
import { pageLinks } from './Data'

const PageLinks = () => {
  return (
    <div>
      {' '}
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PageLinks