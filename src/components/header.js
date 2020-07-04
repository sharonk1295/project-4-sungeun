import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

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
        <header className={headerStyles.header}>
            <div className={headerStyles.title}>
                <h1><Link to="/">
                    {data.site.siteMetadata.title}, RD CDN</Link></h1>
                <p>Luxuriating wellness through proper eating.</p>
            </div>
            <nav className={headerStyles.navBar}>
                <ul>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to='/'>Home</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/about">About</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header