import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Product={
    id: string
    title: string
    price: number
    image: string
}

type ProductState ={
    items: Product[]
}

const initialState: ProductState ={
    items: []
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{

        addProduct(state, action: PayloadAction<Product>){
            state.items.push(action.payload)
        },

        updateProduct(state, action:PayloadAction<Product>){
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if(itemIndex !== -1){state.items[itemIndex] = action.payload}
        },

        removeProduct(state, action:PayloadAction<string>){
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export default productSlice.reducer
export const {addProduct} = productSlice.actions