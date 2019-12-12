import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

// export const query = graphql `
//         query($slug: String!) {
//             markdownRemark (
//                 fields: { 
//                     slug: { 
//                         eq: $slug
//                     } 
//                 }
//             ) {
//                 frontmatter {
//                     title
//                     date
//                 }

//                 html
//             }
//         }
//     `

export const query = graphql `
    query($slug: String!) {
        contentfulBlogPost (
            slug: { 
                eq: $slug
            } 
        ) {
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            body {
                json
            }
        }
    }
`

export default function Blog({data}) {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file["en-US"].url
                return <img src={url} alt={alt}/>
            }
        }
    }

    return (
        <Layout>
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}
