import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

//import "./header.module.scss"
import headerStyles from "./header.module.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) //tagged template literal

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog/"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// <li>
//             <a
//               className={headerStyles.navItem}
//               href="https://www.google.com"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Google
//             </a>
// </li>
