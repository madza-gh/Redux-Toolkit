import axios from "axios";

const API_URL = "http://localhost:5000/api/products"

export interface Product{
    _id?: string
    title: string
    price: number
}

export const getProducts = async (): Promise<Product[]> =>{
    const response = await axios.get(API_URL)
    return response.data
}

export const addProduct = async (productData: Product): Promise<Product> =>{
    const response = await axios.post(API_URL, productData)
    return response.data
}