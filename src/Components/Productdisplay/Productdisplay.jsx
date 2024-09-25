import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../Context/Shopcontext";

function Productdisplay(props) {
  const { product } = props;
  const {addtocart} = useContext(Shopcontext)

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-img-gallery">
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
        </div>
        <div>
          <img
          className="product-main-img"
          src={product.image}
          alt={product.name}
        />
        </div>
      </div>

      <div className="product-right">
        

        <h1 className="product-name">{product.name}</h1>

        <div className="product-rating">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>

        <div className="product-price">
          <span className="old-price">${product.old_price}</span>
          <span className="new-price">${product.new_price}</span>
        </div>

        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit
          necessitatibus id impedit minima perspiciatis!
        </p>

        <div className="product-size-selector">
          <h2>Select Size</h2>
          <div className="sizes">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size">XL</div>
            <div className="size">XXL</div>
          </div>
        </div>

        <button onClick={()=>{addtocart(product.id)}} className="add-to-cart">Add to cart</button>

        <p className="product-category">
          <span>Category:</span> Women, T-shirt, Crop Top
        </p>

        <p className="product-tags">
          <span>Tags:</span> Modern, Latest, Crop Top
        </p>
      </div>
    </div>
  );
}

export default Productdisplay;
