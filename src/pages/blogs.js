import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import blogsStyle from './blogs.module.scss'

export default function Blog() {
    const data = useStaticQuery(graphql `
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
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <li>
                        <h2>
                            <Link to={`blog/${node.fields.slug}`} className={blogsStyle.linkNone}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>{node.frontmatter.date}</p>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}
