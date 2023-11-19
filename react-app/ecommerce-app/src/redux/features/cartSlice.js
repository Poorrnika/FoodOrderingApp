import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        console.log(state.carts[itemIndex].qnty);
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
      console.log(state.carts);
    },
    //decrement product quantity
    decrementQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty -= 1;
        console.log(state.carts[itemIndex]);
      }
    },
    //increment product quantity
    incrementQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (state.carts[itemIndex].qnty >= 1) {
        state.carts[itemIndex].qnty += 1;
      }
    },
    //delete product
    deleteProduct: (state, action) => {
      const data = state.carts.filter((item) => item.id !== action.payload.id);
      state.carts = data;
    },
    //empty the cart
    emptyCart: (state, action) => {
      state.carts = [];
    },
  },
});

export const {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  deleteProduct,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
