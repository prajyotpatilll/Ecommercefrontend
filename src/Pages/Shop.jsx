import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollection/Newcollection'
import Newslatter from '../Components/Neslatter/Newslatter'
import Footer from '../Components/Footer/Footer'


function Shop() {
  return (
    <div>
      <Hero/>
      <Newcollection/>
      <Offers />
      <Popular/>
      <Newslatter/>
      
    </div>
  )
}

export default Shop
