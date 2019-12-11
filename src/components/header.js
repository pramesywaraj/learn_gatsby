import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyle from './styling/header.module.scss'

export default function Header() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <header className={headerStyle.header}>
            <h1>
                <Link 
                    className={headerStyle.title} 
                    to={'/'}
                >
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link 
                            className={headerStyle.navListItem} 
                            activeClassName={headerStyle.activeNavItem} 
                            to={'/'}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyle.navListItem} 
                            activeClassName={headerStyle.activeNavItem} 
                            to={'/blogs'}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyle.navListItem} 
                            activeClassName={headerStyle.activeNavItem} 
                            to={'/about'}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyle.navListItem} 
                            activeClassName={headerStyle.activeNavItem} 
                            to={'/contact'}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
