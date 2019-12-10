import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer>
            <p>
                Created with ❤ by 
                <Link to={'/contact'}>
                    Pramesywara Jembar Panalar
                </Link> 
                2019
            </p>
        </footer>
    )
}
