import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
//import '../styles/index.scss'
import BackgroundImage from 'gatsby-background-image'
import homeStyles from './index.module.css'
import { Link } from 'gatsby'

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            backImg: file(relativePath: { eq: "food.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImage fluid={data.backImg.childImageSharp.fluid} className={homeStyles.background}>
            <Layout>
                <Head title="Home" />
                <div className={homeStyles.text}>
                    <h1>Welcome! Dive deeper into <br/>nutrition and learn more<br/>about joyful eating.</h1>
                    <button><Link to="/blog">Read More</Link></button>
                </div>
                
            </Layout>
        </BackgroundImage> 
    )
}


export default Home


// {/* <Layout>
// <Head title="Home" />
// <BackgroundImage fluid={data.backImg.childImageSharp.fluid} className={homeStyles.background}>
//     <h1>I am a dietitian</h1>
// </BackgroundImage>
// </Layout> */}
