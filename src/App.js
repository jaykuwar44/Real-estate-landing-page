import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'
import { Route, Router } from 'react-router-dom'
import Hero from './component/Hero'
import MainSection from './component/MainSection'
import CustomerReview from './component/CustomerReview'
import ContactDetails from './component/ContactDetails'
import Footer from './component/Footer'


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MainSection />
      <CustomerReview />
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default App