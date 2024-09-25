import React from 'react'
import './Relatedproduct.css'
import data_product from '../Assets/data'
import Item from'../Items/Item'

function Relatedproduct() {
  return (
    <div>
      <div className="popular1">
        <hr />
        <h1 className="popular2">Related Product</h1>

        <div className="collection">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Relatedproduct


