import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/interface/Interface";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [] as Product[],
  reducers: {
    addtoCart: (state, action: PayloadAction<Product>) => {
      const foundProduct = state.find((product) => product.id === action.payload.id);
      
      if (foundProduct) {
        (foundProduct.quantity as number)+ 1
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.push(newProduct);
      }
    },
    
    delet: (state, action: PayloadAction<number>) => {
      // حذف العنصر ب
      return state.filter((product) => product.id !== action.payload);
    },
    clearCart: () => {
      // تفريغ العربة
      return [];
    },
  },
});

export const { addtoCart, delet, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
