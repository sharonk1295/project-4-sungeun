import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div>
                <h1><Link className={headerStyles.title} to="/">Sungeun Sul, RD CDN</Link></h1>
                <p>Luxuriating wellness through proper eating.</p>
            </div>
            <nav>
                <ul>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to='/'>Home</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/about">About</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.link} activeClassName={headerStyles.activeLink} to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header