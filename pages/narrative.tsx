import React, { useEffect, useState } from 'react'
import PageLayout from '../components/header/page-layout'
import dynamic from 'next/dynamic'
import Seo from '../components/common/seo'

import Narrative from '../components/narrative/narrative'
const NarrativeDesktop = dynamic(
  () => import('../components/new-narative/narrative'),
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
      <Seo
        title="Sauvik Banerjjee | Presentation | Thought Leadership | Success Principles"
        description="Sauvik Banerjjee Presentation Seasons 1, 2, 3 and more on POV, thought leadership, success principles for millennials, working professionals, c-suites"
        canonical="https://sauvikbanerjjee.com/narrative"
        ogImage="/sauvik-banerjjee-og-image.png"
      />

      {isDesktop ?
        <NarrativeDesktop />
        :
        <Narrative />
      }
    </PageLayout>
  )
}

export default NarrativePage