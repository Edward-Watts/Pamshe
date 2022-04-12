import { createReducer } from '@reduxjs/toolkit';
import * as types from '../actions/Auth'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.authStart, (state, action) => {
        state.error = null
        state.loading = true
    })
    .addCase(types.authSuccess, (state, action) => {
        state.userId = ""
        state.token = ""

    })
})

export default authReducer;

