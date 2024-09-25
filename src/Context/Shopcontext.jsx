import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const Shopcontextprovider = (props) => {
  const [cartitem, setcatitem] = useState(getdefaultcart());

  const addtocart = (itemid) => {
    setcatitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartitem)
  };
  
  const removecart = (itemid) => {
    setcatitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const contextVlue = { all_product, cartitem,addtocart,removecart };
 
  return (
    <Shopcontext.Provider value={contextVlue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default Shopcontextprovider;
