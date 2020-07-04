import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <main className={layoutStyles.content}>
                {props.children}
            </main>
            <Footer />
        </div>
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