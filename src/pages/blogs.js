import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogsStyle from './blogs.module.scss'

export default function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        publishedDate(formatString: "Do MMMM, YYYY")
                        slug
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogsStyle.listNone}>
                {data.allContentfulBlogPost.edges.map(({node}) => (
                    <li className={blogsStyle.post}>
                        <Link to={`blog/${node.slug}`}>
                            <h2>{node.title}</h2>
                            <p>{node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}
