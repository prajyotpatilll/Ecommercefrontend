import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollection/Newcollection'


function Shop() {
  return (
    <div>
      <Hero/>
      <Newcollection/>
      <Offers />
      <Popular/>
    </div>
  )
}

export default Shop
