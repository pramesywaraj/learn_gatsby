import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyle from './styling/footer.module.scss'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyle.footer}>
            <p>
                Created with ❤ by <Link to={'/contact'}>{data.site.siteMetadata.author}</Link> 2019
            </p>
        </footer>
    )
}
