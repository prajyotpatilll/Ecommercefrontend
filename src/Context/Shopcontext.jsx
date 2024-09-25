import React,{ createContext} from "react";
import all_product from "../Components/Assets/all_product"

export const Shopcontext = createContext(null);

const Shopcontextprovider = (props) => {
    const contextVlue = { all_product}

    return (
        <Shopcontext.Provider value= {contextVlue}>
            {props.children}

        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;