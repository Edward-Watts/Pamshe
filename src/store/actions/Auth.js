import { createAction } from '@reduxjs/toolkit';
import * as actionTypes from './actionTypes';


export const authStart = createAction(actionTypes.AUTH_START)

export const authSuccess = createAction(actionTypes.AUTH_SUCCESS)
