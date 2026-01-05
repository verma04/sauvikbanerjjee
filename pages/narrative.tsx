import React from 'react'
import PageLayout from '../components/Header/PageLayout'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import NarrativeDesktop from '../components/newNarative/Narrative'
import Narrative from '../components/narrative/Narrative'
import { isDesktop } from 'react-device-detect'


const narrative = () => {
  return (

    <PageLayout>
      <Head>
        <title>Sauvik Banerjjee | Presentation | Thought Leadership | Success Principles</title>
        <meta name="description" content="Sauvik Banerjjee Presentation Seasons 1, 2, 3 and more on POV, thought leadership, success principles for millennials, working professionals, c-suites" >

        </meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>


      {isDesktop ?
        <NarrativeDesktop />
        :
        <Narrative />
      }



    </PageLayout>
  )
}

export default narrative