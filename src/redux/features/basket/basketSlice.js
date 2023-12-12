import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const isProduct = state.basket.find(x => x.id === action.payload.id)
      if (isProduct) {
        isProduct.quantity++
      } else {
        state.basket.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromBasket: (state, action) => {
      const isProduct = state.basket.find(x => x.id === action.payload)
      if (isProduct) {
        state.basket = state.basket.filter(x => x.id !== isProduct.id)
      }
    },

    inc: (state, action) => {
      const isProduct = state.basket.find(x => x.id === action.payload)
      if (isProduct) {
        isProduct.quantity++
      }
    },
    dec: (state, action) => {
      const isProduct = state.basket.find(x => x.id === action.payload)
      if (isProduct) {
        isProduct.quantity--
        if (isProduct.quantity === 0) {
          state.basket = state.basket.filter(x => x.id !== isProduct.id)
        }
      }
    }
  }
})

export const { addToBasket, removeFromBasket, inc, dec } = basketSlice.actions
export default basketSlice.reducer
