import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
//import '../styles/index.scss'
import BackgroundImage from 'gatsby-background-image'
import homeStyles from './index.module.css'

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
                <h1>I am a dietitian</h1>
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
