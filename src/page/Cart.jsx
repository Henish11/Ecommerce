import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeItem,
  getTotal,
  clearCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.products);
  const { totalAmount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(increaseItem(item));
  };
  const handleDecrease = (item) => {
    dispatch(decreaseItem(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItem]);

  return (
    <>
      {cartItem.length === 0 ? (
        <section className="smallContainer"><h1>Please Add Item in Cart</h1></section>
      ) : (
        <section className="smallContainer">
          <div className="cartWrap">
            <h1 style={{marginBottom:'20px'}}>Cart</h1>
            {cartItem.map((item) => (
              <div className="cartBox" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="cartBtn">
                  <button
                    onClick={() => {
                      handleDecrease(item);
                    }}
                  >
                    -
                  </button>
                  <span>{item.itemQuantity}</span>
                  <button
                    onClick={() => {
                      handleIncrease(item);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="price">${item.itemQuantity * item.price}</div>
                <button
                  className="remove"
                  onClick={() => {
                    handleRemove(item);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cartBottom">
            <button onClick={handleClear}>Clear Cart</button>
            <div>
              <span>Total Price : </span>
              <strong>${totalAmount}</strong>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
