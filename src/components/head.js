import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = (props) => {
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
        <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`}>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        
    )
}

export default Head