import Head from 'next/head'
import React from 'react'
import PageLayout from '../components/Header/PageLayout'
import Inevitable from '../components/inevitable/Inevitable'

const invitable = () => {
    return (
        <PageLayout>

            <Head>
                <title>Sauvik Banerjjee | Tech Trends that will inevitably permeate our lives</title>
                <meta name="description" content="Sauvik Banerjjee | Tech Futurist's top predictions for Tech Trends and how it will permeate our lives, work, behaviours, socieites and Universe at large" >

                </meta>
                <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
            </Head>
            <Inevitable />
            <h1 style={{ display: 'none' }} >
                Inevitable - Sauvik Banerjjee
            </h1>
        </PageLayout>
    )
}

export default invitable