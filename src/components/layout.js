import React from 'react'
import Header from './header'
import Footer from './footer'

import './layout.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div
                style={{
                margin: `0 auto`,
                // maxWidth: 960,
                // padding: `0 1.0875rem 1.45rem`,
                padding: `0 1rem 0rem`,
                }}
            >
                <main>{props.children}</main>
                <Footer style={{
                    flex: `1 0 auto`,
                    textAlign: `center`,
                    paddingTop: `45px`,
                    // position: `absolute`,
                    // bottom: `0`, 
                    // width: `100%`,
                    // height: `2.5rem`
                }}>
            </Footer>
            </div>
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