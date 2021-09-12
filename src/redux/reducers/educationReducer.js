import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const educationReducer = (state=initialState.educationSection,action) =>{
    switch(action.type){
        case actionTypes.ADD_EDUCATION : 
            return {...action.payload.educationSection}
        case actionTypes.UPDATE_EDUCATION : 
            return {...action.payload.educationSection}
        default : return state
    }
}

export default educationReducer;
//similar as contactReducer