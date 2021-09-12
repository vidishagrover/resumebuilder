import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const contactReducer = (state=initialState.contactSection,action) =>{
    switch(action.type){
        case actionTypes.ADD_CONTACT : 
            return {...action.payload.contactSection}
        case actionTypes.UPDATE_CONTACT : 
            return {...action.payload.contactSection}
        default : return state
    }
}

export default contactReducer;
//contact starting m null hai toh uske baad jb add krenge info toh vo pura 
// as an object aayega toh vhi return krdo similarily update mai jo chnages hue
// uske baad jo object bna return it completely