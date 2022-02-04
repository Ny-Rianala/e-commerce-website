import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const initialState = {
  value: {},
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getProductAsync = createAsyncThunk(
  'product/fetchProduct',
  async (amount) => {
    const response = await fetchProduct(amount);
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
 
  reducers: {
   
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { } = productSlice.actions;

export const selectProduct = (state) => state.product.value;

export default productSlice.reducer;
