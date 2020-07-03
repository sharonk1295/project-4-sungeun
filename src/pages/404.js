import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFoundPage = () => {
    return (
        <Layout>
            <Head title="404 Page Not Found" />
            <h1>Page Not Found</h1>
            <p><Link to="/">Head back home</Link></p>
        </Layout>
    )
}

export default NotFoundPage