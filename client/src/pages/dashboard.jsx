import React from 'react'
import Cards from '../components/Cards'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Stats from '../components/stats'
import Testimonial from '../components/Testimonial'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
    <Header />
      <Hero />
      <Cards />
      <Features />
      <Testimonial />
      <Stats />
    <Footer />
    </>
  )
}

export default Dashboard