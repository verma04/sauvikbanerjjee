import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import PageLayout from '../components/Header/PageLayout'
import Timeline from '../components/timeline/Timeline'

const TimelinePage = () => {
    return (
        <>    <Head>
            <title>Sauvik Banerjjee Timeline | Personal Story & Journey</title>
            <meta name="description" content="Explore Sauvik Banerjjee's personal timeline, from childhood and family to cricket, career transition and his journey shaped by India's story." >

            </meta>
            <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
        </Head>
            <Header />
            <Timeline />
        </>
    )
}

export default TimelinePage