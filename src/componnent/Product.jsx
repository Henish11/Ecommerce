import React from "react";
import { useDispatch } from "react-redux";
import { increaseItem } from "../redux/cartSlice";

const Product = ({item}) => {


  const dispatch = useDispatch()
  const handleIncrease = (item) =>{
    dispatch(increaseItem(item))
  }

  return (
    <div className="product">
      <img src={item.thumbnail} alt="" />
      <div className="bottom-wrap">
        <div className="left-wrap">
          <h3>{item.title}</h3>
          <div className="price">${item.price}</div>
        </div>
        <div className="right-block">
            <button className="main" onClick={()=>{handleIncrease(item)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
