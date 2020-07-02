import React from 'react'
import Layout from '../components/layout'

import { Link, graphql, useStaticQuery } from 'gatsby'

const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Posts</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((post) => {
                return (
                    <li>
                        <Link to={`/blog/${post.node.fields.slug}`}>
                            <h3>{post.node.frontmatter.title}</h3>
                        </Link>
                        <p>{post.node.frontmatter.date}</p>
                    </li>
                )
                })}
            </ol>
        </Layout>
    )
}

export default Blog