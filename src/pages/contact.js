import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { FaLinkedin } from 'react-icons/fa'
import {IconContext } from 'react-icons'
import contactStyles from './contact.module.css'


const Contact = () => {
    return (
        <Layout>
            <Head title="Contact Me" />
            <h1 className={contactStyles.header}>Connect With Me:</h1>
            <div className={contactStyles.contacts}>
                <IconContext.Provider value={{color: `green`, size: `3rem`}}>
                    <a href="https://www.linkedin.com/in/sung-eun-sul-rd-cdn-685272163/" target="_blank" rel="noreferrer"><FaLinkedin aria-label="Mute volume"/></a>
                </IconContext.Provider>
            </div>
            
        </Layout>
    )
}

export default Contact