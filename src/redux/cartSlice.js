import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: localStorage.getItem("Products")
      ? JSON.parse(localStorage.getItem("Products"))
      : [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    increaseItem: (state, action) => {
      const itemIndex = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (itemIndex < 0) {
        state.products.push({ ...action.payload, itemQuantity: 1 });
      } else {
        state.products[itemIndex].itemQuantity += 1;
      }
      localStorage.setItem("Products", JSON.stringify(state.products));
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.products[itemIndex].itemQuantity > 1) {
        state.products[itemIndex].itemQuantity -= 1;
      } else {
        state.products = state.products.filter((item) => {
          return item.id !== action.payload.id;
        });
      }
      localStorage.setItem("Products", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("Products", JSON.stringify(state.products));
    },
    getTotal: (state) => {
        const {total,quantity} = state.products.reduce((acc,curr)=>{
            const {price,itemQuantity} = curr
            const itemTotal = price * itemQuantity
            acc.total += itemTotal
            acc.quantity += itemQuantity
            return acc
        },{total:0,quantity:0})

        state.totalAmount = total
        state.totalQuantity = quantity

    },
    clearCart:(state)=>{
       state.products = []
       localStorage.setItem("Products", JSON.stringify(state.products));
    }
  },
});

export const { increaseItem, decreaseItem, removeItem, getTotal ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
