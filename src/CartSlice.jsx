import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },})
  
  state.items = state.items.filter(item => item.name !== action.payload);const { name, quantity } = action.payload;
  const itemToUpdate = state.items.find(item => item.name === name);
  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
  }