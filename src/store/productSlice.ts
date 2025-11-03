import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {getProducts, addProducts,  Product} from '../api/productApi.ts'


type ProductState ={
    items: Product[]
    loading: Boolean
    error: string | null
}

const initialState: ProductState ={
    items: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetch",
    async () => {
        return await getProducts()  
    }
)

export const createProduct = createAsyncThunk<Product, Product>(
    "products/create",
    async(productData) =>  {
        return await addProducts(productData)
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending,(state) =>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) =>{
            state.loading = false
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) =>{
            state.loading = false
            state.error = action.error.message || "failed to fetch products"
        })
        .addCase(createProduct.fulfilled, (state, action:PayloadAction<Product>) =>{
            state.items.push(action.payload)
        })
    },
})

export default productSlice.reducer
