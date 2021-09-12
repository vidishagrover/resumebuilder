import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const appReducer = combineReducers({
    auth:authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    document:documentReducer,
    contact : contactReducer,
    education : educationReducer,
})

const rootReducer = (state=initialState,action) => {
    if(action.type==actionTypes.SIGN_OUT){
        state=undefined
    }
    return appReducer(state,action)
} 

export default rootReducer;