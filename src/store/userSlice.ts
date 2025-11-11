import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { login, register, userProfile, type UserType } from "../api/userApi";

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    :null

export const loginUser = createAsyncThunk(
    'user/login',
    async(userData: UserType, {rejectWithValue}) =>{
        try {
            const data = await login(userData)
            localStorage.setItem('userInfo', JSON.stringify(data))
            return data

        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "login failed"
            )
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/register',
    async(userData: UserType, {rejectWithValue}) =>{
        try {
            
        } catch (error) {
            
        }
    }
)