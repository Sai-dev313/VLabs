import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyDigitalize from '../components/WhyDigitalize';
import Services from '../components/Services';
import StatsBar from '../components/StatsBar';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <WhyDigitalize />
      <Services />
      <StatsBar />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
