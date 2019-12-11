import React from 'react'

import Header from '../components/header'
import Footer from '../components/Footer'

import '../styles/styles.scss'
import layoutStyle from './styling/layout.module.scss'


export default function Layout({children}) {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header />
                {children}
            </div>
            
            <Footer />
        </div>
    )
}
