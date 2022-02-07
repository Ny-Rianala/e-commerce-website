import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const initialState = {
  value: {},
  status: 'idle',
  isLoading: false,
  error: null,
};

export const getProductAsync = createAsyncThunk(
  'product/fetchProduct',
  async (amount) => {
    const response = await fetchProduct(amount);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getProductAsync.rejected, (state, { payload }) => {
        state.error = payload || 'Error encountered';
        state.status = 'idle'
      })
  },
});

export const selectProduct = (state) => state.product.value;
export const selectLoading = (state) => state.product.status === 'loading';
export const selectProductFetchError = (state) => state.product.error;

export default productSlice.reducer;
