import React, { useContext } from "react";
import "./Cartitems.css";
import { Shopcontext } from "../../Context/Shopcontext";
import remove_icon from '../Assets/cart_cross_icon.png';

const Cartitems = () => {
  const { all_product, cartitem, removecart } = useContext(Shopcontext);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p className="proz">Quantity</p>
        <p className="proz1">Total</p>
        <p className="proz3">Rem</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartitem[product.id] > 0) {
          return (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-title">{product.name}</p>
              <p className="product-price">${product.new_price}</p>
              <div className="quantity-box">
                <button className="quantity">{cartitem[product.id]}</button>
              </div>
              <p className="product-total">${(product.new_price * cartitem[product.id]).toFixed(2)}</p>
              <img
                src={remove_icon}
                onClick={() => removecart(product.id)}
                alt="Remove"
                className="remove-icon"
              />
            </div>
          );
        }
        return null;
      })}
      <div>
        
      </div>
      <hr />
    </div>
  );
};

export default Cartitems;
