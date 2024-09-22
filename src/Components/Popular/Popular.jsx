import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

function Popular() {
  return (
    <dir>
      <div className='popular1'>
        <hr />
      <h1 className='popular2'>Popular In Women</h1>

      <div className='popular3'>
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
      
    </div>
    <hr />
    </dir>
    
  )
}

export default Popular
