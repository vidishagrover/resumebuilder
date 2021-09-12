import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const documentReducer = (state=initialState.document,action) =>{
    switch(action.type){
        case actionTypes.SET_SKIN : 
            return {...state,id:action.payload.id,skinCd:action.payload.skinCd}
        case actionTypes.UPDATE_SKIN :  // jb back jake template change krenge tb id nhi change hogi
            return {...state,skinCd : action.payload.skinCd}
        default : return state
    }
}

export default documentReducer;