import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Img from 'gatsby-image/withIEPolyfill'
import { graphql } from 'gatsby'
import aboutStyles from './about.module.css'

const About = (props) => {
    return (
        <Layout>
            <Head title="About" />
            <h1 className={aboutStyles.heading}>About Sungeun</h1>
            <div className={aboutStyles.bio}>
                <div className={aboutStyles.text}>
                    <p>Hello! <br/>My name is Sungeun Sul and I am currently a clinical dietitian based at an in-patient, acute care facility in NY. With my training and passion, I hope to promote a lifestyle that prioritizes health and happiness.</p>
                    <p>My dedication to the nutrition field stemmed from my beloved mother. She was diagnosed with type 2 Diabetes and to ensure she was receiving proper treatment, I was constantly on the search for healthy recipes. I wanted to serve my mom with the best of the best, and while doing so, I learned, and eventually became absorbed into the world of nutrition.</p>
                    <p>Along with being a Certified Diabetes Educator, I strive to increase welllness through eating. When I'm not in my RD role, you can find me running, dancing, taking pictures, or going on countless food adventures around the tri-state area.</p>
                </div>
                <div class={aboutStyles.img}><Img fluid={props.data.aboutImg.childImageSharp.fluid} objectFit="cover" alt="sungeun" style={{border: `double rgb(27, 61, 21) 4px`}}/></div>
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
                }
            }
        }
    }
`

export default About

// ...GatsbyImageSharpFluidLimitPresentationSize