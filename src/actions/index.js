import { TEST_DISPATCH, LOGIN_DISPATCH } from "../types";


export const SHOW_ALL = "SHOW_ALL";
 export const SHOW_SINGLE = "SHOW_SINGLE";
 export const SHOW_ALL_EXCEPT = "SHOW_ALL_EXCEPT";


 export function actionShowAllExcept(id){
     const state = {
         type: SHOW_ALL_EXCEPT, 
         id
     }
 }


 export function actionShowSingle(id){
     const state = {
         type: SHOW_SINGLE,
         id
     }
 }

 export function actionShowAll(){
     const state = {
         type: SHOW_ALL
     }
 }


 export function actionAuth(userData){
    const state = {
        type: TEST_DISPATCH, 
        payload: userData
    }
    return state;
 }

 export function loginUser(isAuthenticated){
    const state ={
        type: LOGIN_DISPATCH, 
        payload: isAuthenticated
    }
    return state;
 }