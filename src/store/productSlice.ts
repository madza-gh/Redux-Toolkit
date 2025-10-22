import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Product={
    id: string
    title: string
    price: number
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
        }
    }
})

export default productSlice.reducer
export const {addProduct} = productSlice.actions