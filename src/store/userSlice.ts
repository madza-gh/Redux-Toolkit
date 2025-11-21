import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
            const data = await register(userData)
            localStorage.setItem('userInfo', JSON.stringify(data))
            return data
            
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Signup failed'
            )
        }
    }
)

export const getUserProfile = createAsyncThunk(
    'user/profile',
    async(_, {getState, rejectWithValue}) =>{
        try {
            const state: any = getState()
            const token = state.user.userInfo?.token
            if(!token) throw new Error('NO TOKEN FOUND')
            
            const data = await userProfile(token)
            return data

        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'profile fetch failed'
            )
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: userInfoFromStorage as UserType | null,
        profile: null as UserType | null,
        loading: false,
        error: null as string | null
    },
    reducers:{
        logout: (state) => {
            state.userInfo = null
            state.profile = null
            localStorage.removeItem('userInfo')
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false,
            state.userInfo = action.payload
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload as string
        })

        .addCase(registerUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(registerUser.fulfilled, (state, action) =>{
            state.loading = false
            state.userInfo = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })

        .addCase(getUserProfile.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    },
})


export const {logout} = userSlice.actions
export default userSlice.reducer