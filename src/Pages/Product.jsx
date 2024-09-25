import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Productdisplay from '../Components/Productdisplay/Productdisplay'

function Product() {
  const { all_product} = useContext(Shopcontext)
  const { productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
    </div>
  )
}

export default Product
