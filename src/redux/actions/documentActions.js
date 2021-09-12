import * as actionTypes from './actionTypes';
const {v4:uuidv4} = require('uuid');

export const setSkinCd = (skinCd) => {
    let id = uuidv4();
    return {type:actionTypes.SET_SKIN,payload:{id:id,skinCd:skinCd}} 
    // isme aise payload mai id:id krke aisa bheja kyuki reducer mai humne action.payload.id kra hai 
    // as document mai do states hai id and skindCd
}

export const updateSkinCd = (skinCd) => {
    return {type:actionTypes.UPDATE_SKIN,payload:{skinCd:skinCd}}
}

