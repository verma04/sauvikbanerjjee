import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import Futurism2030 from '../components/futurism2030/Futurism2030'
import Head from 'next/head'

const futurism = () => {
    return (
        <PageLayout>
            <Head>
                <title>Sauvik Banerjjee | Futurism 2030 | Predictions for 2030 | Trends</title>
                <meta name="description" content="Sauvik Banerjjee | Tech Futurist's top predictions for 2030 in Tech and how it will permeate our lives, work, socieites and Universe at large" >

                </meta>
                <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
            </Head>
            <h1 style={{ display: 'none' }} >
                Futurism 2030 - Sauvik Banerjjee
            </h1>
            <Futurism2030 /></PageLayout>
    )
}

export default futurism