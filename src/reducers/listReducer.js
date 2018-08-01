import jsonData from '../data/jsonData.json';
import {SHOW_ALL_EXCEPT , SHOW_ALL, SHOW_SINGLE} from '../actions';

export function showAll(state = jsonData, action){
   switch(action.type)
   {
       case SHOW_ALL_EXCEPT:
            const data = state.filter(c => c.id !== action.id);
            return data;
        case SHOW_ALL:
            return state; 

   }
}

