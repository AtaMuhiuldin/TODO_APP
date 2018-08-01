import {ADD_TODO, DELETE_TODO, SAVE_TODO, INCRIMENT_TODO, DECRIMENT_TODO, EDIT_TODO} 
from '../types';
import Todo from "../Todo";


const myState = {
    todoList: [],
    todoCount:0
};

/// LESSION Learned
// must return a copy of new state and dont try to update exiting state becouee 
/// if you update existing state it will not rander changes in compoent 
/// but On Returing copy of new state will trigger rendering
//// dont use {...[]} way to assign arrat use [...array] to assign array





function todoRootReducer(mState = myState, actions){
    
  

    switch(actions.type)
    {   
        case ADD_TODO:
            
            const todo = actions.payload;
            todo.id = mState.todoCount++;
            mState.todoList = [...mState.todoList, todo];
           return {...mState};

        case DELETE_TODO:
            const idDel = actions.payload;
            mState.todoList = [...mState.todoList.filter(c => c.id !== idDel)];
           return {...mState};

        case EDIT_TODO:

            ///// Problem Here ///////////
            
            ////// action.payload contain   Object of TodoTask Dispatched here 
            ///// finding object with id in existing array 
            // var task = newState.todoList.filter(c => c.id === actions.payload.id);
            ///// cheching on which index that is 
            var index = mState.todoList.findIndex(task => task.id === actions.payload.id);
           console.log("action.payload", actions.payload);
            if(index >= 0){
                //// now assigning New ToDo Object to that Array index 
                mState.todoList[index] = {...actions.payload};
            }

            return {...mState};
        case SAVE_TODO:
            // const todo = actions.payload;

            // const todoList = {...todoList};
            // const value = {...todoList.find(c => c.id == todo.id)};
            // value.data = {...todo.data};
            // todoList[index] = {...todo};

            return;
        case INCRIMENT_TODO:
            // const id = actions.payload;
            return;
        case DECRIMENT_TODO:
            // const id = actions.payload;
            return;
        

        default:
            return mState;
    }
 
}   


export default todoRootReducer;