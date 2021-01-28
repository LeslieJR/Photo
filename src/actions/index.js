import {ADD_PHOTO} from './actionTypes';

export function addPhoto(payload){
    return(
        {
            type: ADD_PHOTO,
            payload
        }
    )
}