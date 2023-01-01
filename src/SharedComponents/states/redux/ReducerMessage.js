import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionType/actiontype";

export const initialState = {
    loading : false ,
    projects:[],
    error:false
}

export const projectsReducer = (state,action)=>{
switch(action.type){
    case FETCHING_START:
        return {
            ...state,
            loading:true,
        }
    case FETCHING_SUCCESS:
        return {
            ...state,
            loading:false,
            projects:action.payload
        }
    case FETCHING_ERROR:
        return {
            ...state,
            loading:false,
            error:true,
        }
        default:
            return state ;
}
}


