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
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setCanRender(true)
    setIsDesktop(window.innerWidth >= 1024)
  }, [])

  return (
    <PageLayout>
      <Head>
        <title>Sauvik Banerjjee Narrative | Journey, Ideas & Insights</title>
        <meta name="description" content="Explore Sauvik Banerjjee's narrative, ideas and perspectives on technology, leadership, innovation, business and the future." >
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

export default NarrativePage