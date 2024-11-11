import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from '../components/interface/Interface';
import axiosInstance from "../axios/Axios";

// Async thunk to fetch categories (products)
export const fetchCategories = createAsyncThunk<Product[], void>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/products");
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error occurred');
    }
  }
);

// Enum for predefined categories
enum Category {
  Electronics = 'electronics',
  Jewelry = 'jewelery',
  MenClothing = 'menclothing',
  WomenClothing = 'womensclothing',
}

// Define the state interface
interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  loading: 'idle',
  error: null,
};

// Create the slice
const Categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Reducer to filter items by category
    filterByCategory: (state, action) => {
      const category: Category = action.payload as Category;
      state.filteredItems = state.items.filter((product) => product.category === category);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { filterByCategory } = Categories.actions;

export default Categories.reducer;
