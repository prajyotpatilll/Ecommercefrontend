import React from "react";
import "./Newcollection.css";
import new_collections from "../Assets/new_collections";
import Item from "../Items/Item";

function Newcollection() {
  return (
    <div>
      <div className="popular1">
        <hr />
        <h1 className="popular2">New Collection</h1>

        <div className="collection">
          {new_collections.map((item, i) => {
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
  );
}

export default Newcollection;
