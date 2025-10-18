import { createContext } from "react";
import { products } from "../assets/assets";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to cart function
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }
    return totalCount;
  };
  
  const updateQuantity=async(itemId,size,quantity)=>{
    let cartData= structuredClone(cartItems);
      cartData[itemId][size]=quantity;
      setCartItems(cartData);
  }

  

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // Values to provide
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity

  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
