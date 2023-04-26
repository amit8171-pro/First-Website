import React from 'react'
import Carousel from '../Component/Carousel'
import Slider from '../Component/Slider'
import Slider2 from '../Component/Slider2'
import Step from '../Component/Step'
import Footer from '../Component/Footer'
import BestSeller from '../Component/BestSeller'
import Trending from '../Component/Trending'
import FreeMoney, { Kids, SpecialOffers } from '../Component/FreeMoney'
import Experts from '../Component/Experts'
import Shop from '../Component/Shop'
import News from '../Component/News'
import Exploring from '../Component/Exploring'


function Home() {
  return (
  <>
  <Carousel/>
  <Slider/>
  <Slider2/>
  <Step/>
  <FreeMoney/>
  <Exploring/>
  <BestSeller/>
  <Kids/>
  <Experts/>
  <Shop/>
  <SpecialOffers/>
  <Trending/>
 <News/>
  <Footer/>

  </>
  )
}

export default Home
