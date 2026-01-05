import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/Header'
import PageLayout from '../components/Header/PageLayout'
import Timeline from '../components/timeline/Timeline'

const timeline = () => {
    return (
        <>    <Head>
            <title>Sauvik Banerjjee | Personal Story, Family, Cricket, Transition, India Story</title>
            <meta name="description" content="Sauvik Banerjjee's personal story and journey about growing up, family, cricket, transition to tech and building for India story" >

            </meta>
            <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
        </Head>
            <Header />
            <Timeline />
        </>
    )
}

export default timeline