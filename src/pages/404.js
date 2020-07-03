import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
    return (
        <Layout>
            <h1>Page Not Found</h1>
            <p><Link to="/">Head back home</Link></p>
        </Layout>
    )
}

export default NotFoundPage