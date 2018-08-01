import {  TEST_DISPATCH, LOGIN_DISPATCH } from "../types";


const initialState = {
    isAuthenticated: false, 
    user:{}
};

export default function registerUser(state = initialState, action){
    switch(action.type)
    {
        case TEST_DISPATCH:
        
            return { 
                ...state,
                user : action.payload
            }
        
        case LOGIN_DISPATCH:
            return{
                ...state, 
                isAuthenticated: action.payload
            }

        default:
            return state;

            
    }

}