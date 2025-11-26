import axios from "axios";

const API_URl = "http://localhost:5000/api/users"

export interface UserType{
    _id?: string
    name?: string
    email: string
    password: string
    token?: string
    role?: string
}

export const login = async (userData: UserType): Promise<UserType> => {
    const response = await axios.post(`${API_URl}/logIn`,userData)

    return response.data
}

export const register = async(userData: UserType): Promise<UserType> =>{
    const response = await axios.post(`${API_URl}/signUp`, userData)

    return response.data
}

export const userProfile = async (token: string): Promise<UserType> => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URl}/profile`, config)

    return response.data
} 
