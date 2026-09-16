import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import Futurism2030 from '../components/futurism2030/Futurism2030'
import Head from 'next/head'

const Futurism2030Page = () => {
    return (
        <PageLayout>
            <Head>
                <title>Futurism 2030 | Technology Trends & Future Predictions</title>
                <meta name="description" content="Explore Futurism 2030 by Sauvik Banerjjee, featuring predictions on AI, digital reality, XR, brain-computer interfaces, robotics and future technology." >

                </meta>
                <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
            </Head>
            <h1 style={{ display: 'none' }} >
                Futurism 2030 | Technology Trends & Future Predictions
            </h1>
            <Futurism2030 /></PageLayout>
    )
}

export default Futurism2030Page