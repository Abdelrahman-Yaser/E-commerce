import {createSlice } from "@reduxjs/toolkit";
import {  Product } from "../components/interface/Interface";
import axiosInstance from "../axios/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk<Product[], void>(
    'products/fetchProducts',
    async (_, thunkAPI) => {
      try {
        const response= await axiosInstance.get("/products")
        
        
        const data= await response.data
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Network error occurred');
      }
    }
  );

interface ProductsState {
  items: Product[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
      });
  },
});
export const { } = productSlice.actions;

export default productSlice.reducer;
