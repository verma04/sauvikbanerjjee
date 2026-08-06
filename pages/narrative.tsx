import React, { useEffect, useState } from 'react'
import PageLayout from '../components/Header/PageLayout'

import dynamic from 'next/dynamic'
import Head from 'next/head'

const NarrativeDesktop = dynamic(
  () => import('../components/newNarative/Narrative'),
  { ssr: false }
)
const Narrative = dynamic(
  () => import('../components/narrative/Narrative'),
  { ssr: false }
)

const NarrativePage = () => {
  const [canRender, setCanRender] = useState(false)
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    setCanRender(true)
    setDesktop(window.innerWidth >= 1024)
  }, [])

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