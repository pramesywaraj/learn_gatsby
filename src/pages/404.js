import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function LostPage() {
    return (
        <Layout>
            <h1>Oh tidak Anda tersesat :(</h1>
            <p>
                <Link to={'/'}>
                    Klik disini untuk kembali ke jalan yang benar :)
                </Link>
            </p>
        </Layout>
    )
}
