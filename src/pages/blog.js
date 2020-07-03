import React from 'react'
import Layout from '../components/layout'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const Blog = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }     
    `)

    return (
        <Layout>
          <Head title="Blog" />
            <h1>Blog Posts</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((post) => {
                return (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${post.node.slug}`}>
                            <h3>{post.node.title}</h3>
                        </Link>
                        <p>{post.node.publishedDate}</p>
                    </li>
                )
                })}
            </ol>
        </Layout>
    )
}

export default Blog