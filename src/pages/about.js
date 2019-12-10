import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

export default function AboutPage() {
    return (
        <Layout>
            <h1>About</h1>
            <h2>Hello, my name is Pramesywara and i lived in Bogor and now im a Front-end Developer.</h2>
            <p>
                Need a developer? 
                <Link to={'/contact'}>
                    Contact in Here
                </Link>
            </p>
        </Layout>
    )
}
