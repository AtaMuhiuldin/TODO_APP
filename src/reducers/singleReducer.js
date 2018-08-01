import jsonData from '../data/jsonData.json';
import {SHOW_SINGLE} from '../actions';

export function showSingle(state = [], action){
    switch(action.type)
    {
        case SHOW_SINGLE:
            const data = {...[ state ,jsonData.find(c => c.id === action.id)]};
            return data;
    }
}