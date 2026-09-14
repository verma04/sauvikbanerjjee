import React from 'react'
import Header from '../components/header/header'
import Timeline from '../components/timeline/timeline'
import Seo from '../components/common/seo'

const TimelinePage = () => {
    return (
        <>
            <Seo
                title="Sauvik Banerjjee | Personal Story, Family, Cricket, Transition, India Story"
                description="Sauvik Banerjjee's personal story and journey about growing up, family, cricket, transition to tech and building for India story"
                canonical="https://sauvikbanerjjee.com/timeline"
                ogImage="/sauvik-banerjjee-og-image.png"
            />
            <Header />
            <Timeline />
        </>
    )
}

export default TimelinePage