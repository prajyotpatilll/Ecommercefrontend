import React, { useContext } from "react";
import "./Css/Shopcategory.css";
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";
import all_product from "../Components/Assets/all_product";

function Shopcategory(props) {
  const { all_product } = useContext(Shopcontext);

  return (
    <div className="shopcategory">
      <img src={props.banner} alt="banner" />
      <div className="shopcategory-sort">
        <p>
          <span>showing 1 to 12</span> out of 36
        </p>
        <div className="shopcategorys">
          sort by <img src={dropdown_icon} alt="sort dropdown" />
        </div>
      </div>
      <div>
        <div className="collection">
          {all_product.map((item, i) => {
            if (item.category === props.cate) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Shopcategory;
