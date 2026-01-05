import Head from 'next/head'
import React from 'react'
import Futurism from '../components/futurism/Futurism'
import PageLayout from '../components/Header/PageLayout'

const futurism = () => {
    return (
        <PageLayout>
            <Head>
                <title>Sauvik Banerjjee | Futurism 2050 | Predictions for 2050 | Trends</title>
                <meta name="description" content="Sauvik Banerjjee | Tech Futurist's top predictions for 2050 in Tech and how it will permeate our lives, work, socieites and Universe at large" >

                </meta>
                <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
            </Head>
            <h1 style={{ display: 'none' }} >
                Futurism 2050 - Sauvik Banerjjee
            </h1>
            <Futurism />
        </PageLayout >
    )
}

export default futurism