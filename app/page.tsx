import React from 'react';

// import components
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Process from '../components/Process/Process';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Process />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;