import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div>
                <h1>Sungeun Sul, RD CDN</h1>
                <p>Luxuriating wellness through proper eating.</p>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header