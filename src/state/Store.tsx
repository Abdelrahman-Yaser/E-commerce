import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./AllProductslice";
import cartSlice from './CartSlice'
import  Categories from './Categories.tsx'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart:cartSlice,
    categorie:Categories
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export default store

