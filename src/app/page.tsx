'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';
import BackToTop from '@/components/ui/BackToTop';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import ProgramOverview from '@/components/sections/ProgramOverview';
import Programs from '@/components/sections/Programs';
import PlayerJourney from '@/components/sections/PlayerJourney';
import Coaches from '@/components/sections/Coaches';
import SuccessStories from '@/components/sections/SuccessStories';
import Values from '@/components/sections/Values';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        suppressHydrationWarning
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 600ms ease',
        }}
      >
        <Header />
        <main id="main-content" suppressHydrationWarning>
          <Hero />
          <WhoWeAre />
          <ProgramOverview />
          <Programs />
          <PlayerJourney />
          <Coaches />
          <SuccessStories />
          <Values />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
