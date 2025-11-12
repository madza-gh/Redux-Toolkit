import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cart-slice'
import productSlice from './productSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice,
        user: userSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>