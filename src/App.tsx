import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import { ScrollDemo } from './components/ScrollDemo'
import WhyOptionsFail from './components/WhyOptionsFail'
import WhatMakesDifferent from './components/WhatMakesDifferent'
import MarketingComparison from './components/MarketingComparison'
import Differentiators from './components/Differentiators'
import Process from './components/Process'
import Guarantee from './components/Guarantee'
import Results from './components/Results'
import IFailedSection from './components/IFailedSection'
import { TimelineDemo } from './components/TimelineDemo'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <ScrollDemo />
        <WhyOptionsFail />
        <WhatMakesDifferent />
        <MarketingComparison />
        <Differentiators />
        <Process />
        <Guarantee />
        <Results />
        <IFailedSection />
        <TimelineDemo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
