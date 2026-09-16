import Head from 'next/head'
import React from 'react'
import Futurism from '../components/futurism/Futurism'
import PageLayout from '../components/Header/PageLayout'

const Futurism2050Page = () => {
    return (
        <PageLayout>
            <Head>
                <title>Futurism 2050 | Future Technology Trends & Predictions</title>
                <meta name="description" content="Explore Futurism 2050 by Sauvik Banerjjee, featuring predictions on AI, nanobots, space exploration, quantum computing, BCIs, robotics and VR." >

                </meta>
                <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
            </Head>
            <h1 style={{ display: 'none' }} >
                Futurism 2050 | Future Technology Trends & Predictions
            </h1>
            <Futurism />
        </PageLayout >
    )
}

export default Futurism2050Page