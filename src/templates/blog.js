import React from 'react'
import { graphql } from 'gatsby'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'
import blogPostStyles from './blog.module.css'

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `
// <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const BlogPost = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1 className={blogPostStyles.title}>{props.data.contentfulBlogPost.title}</h1>
            <p className={blogPostStyles.date}>- {props.data.contentfulBlogPost.publishedDate} -</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            <Link to="/blog" className={blogPostStyles.goBack}>&larr; Go Back</Link>
        </Layout>
    )
}

export default BlogPost