import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import aboutStyles from './about.module.css'

const About = (props) => {
    return (
        <Layout>
            <Head title="About" />
            <h1>Her About Page</h1>
            <div className={aboutStyles.bio}>
                <p>Insert her bio here</p>
                <div class={aboutStyles.img}><Img fluid={props.data.aboutImg.childImageSharp.fluid} /></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        aboutImg: file(relativePath: { eq: "aboutsung.jpeg"}) {
            childImageSharp {
                fluid (maxWidth: 600, maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                }
            }
        }
    }
`

export default About