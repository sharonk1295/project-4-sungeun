import React from 'react'
import Header from './header'
import Footer from './footer'

import './layout.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            <main style={{ flex: `1 0 auto` }}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}


export default Layout

// {/* <div className={layoutStyles.container}>
//             <div className={layoutStyles.content}>
//                 <Header />
//                 <main>{props.children}</main>
//             </div>
//             <Footer />
//         </div> */}