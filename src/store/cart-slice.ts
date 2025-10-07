import {createSlice} from '@reduxjs/toolkit'

type CartItem ={
    id: string
    title: string
    price: number
    quantity: number
}

type CartState ={
    items: CartItem[]
}

const initialState: CartState ={
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(){},
        removeFromCart(){}
    }
})