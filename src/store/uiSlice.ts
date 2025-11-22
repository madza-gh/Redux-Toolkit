import { createSlice } from "@reduxjs/toolkit";

interface UIState{
    loginModalOpen: boolean
    signupModalOpen: boolean
}

const initialState: UIState = {
    loginModalOpen: false,
    signupModalOpen:false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        openLoginModal(state){
            state.loginModalOpen = true
        },
        closeLoginModal(state){
            state.loginModalOpen = false
        },
        openSignupModal(state){
            state.signupModalOpen = true
        },
        closeSignupModal(state){
            state.signupModalOpen = false
        }
    }
})

export const {openLoginModal, closeLoginModal, openSignupModal, closeSignupModal} = uiSlice.actions
export default uiSlice.reducer