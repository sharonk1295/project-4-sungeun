import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.css'

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact Me" />
            <h1 className={contactStyles.header}>Connect With Me:</h1>
            <a href="https://www.linkedin.com/in/sung-eun-sul-rd-cdn-685272163/" target="_blank" rel="noreferrer">LinkedIn</a>
        </Layout>
    )
}

export default Contact