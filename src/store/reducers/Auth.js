import { createReducer } from '@reduxjs/toolkit';
import * as types from '../actions/Auth';

const initialState = {
    token: null,
    isSignIn: null,
    isSignUp: null,
    error: null,
    loading: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.authStart, (state, action) => {
        state.loading = true
    })
    .addCase(types.authSignInSuccess, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isSignIn = true
    })
    .addCase(types.authSignUpSuccess, (state,action) => {
        state.loading = false
        state.isSignUp = true

    })
    .addCase(types.authFail, (state,action) => {
        state.loading = false
        state.error = action.payload
    })
})

export default authReducer;

