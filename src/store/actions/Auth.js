import { createAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';


export const authStart = createAction(actionTypes.AUTH_START)

export const authSignInSuccess = createAction(actionTypes.AUTH_SIGNIN_SUCCESS)

export const authSignUpSuccess = createAction(actionTypes.AUTH_SIGNUP_SUCCESS)

export const authFail = createAction(actionTypes.AUTH_FAIL)