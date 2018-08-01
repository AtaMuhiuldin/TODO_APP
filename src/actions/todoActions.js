import {ADD_TODO, DELETE_TODO, SAVE_TODO, INCRIMENT_TODO, DECRIMENT_TODO, EDIT_TODO} from '../types';



export function addTodo(todo){

    const state = {
        type: ADD_TODO, 
        payload: todo
    }
    return state;
}

export function deleteTodo(id){
    const state = {
        type: DELETE_TODO, 
        payload: id
    }
    return state;
}

export function editTodo(todo){
    const state = {
        type: EDIT_TODO, 
        payload: todo
    };
    return state;
}

export function saveTodo(data){
    return{
        types: SAVE_TODO, 
        payload:data
    }
}





export function incrimentTodo(id){
    return{
        types: INCRIMENT_TODO, 
        payload:id
    }
}

export function decrimentTodo(id){
    return{
        types: DECRIMENT_TODO, 
        payload:id
    }
}

