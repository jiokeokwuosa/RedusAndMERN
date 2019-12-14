import { FETCH_EXERCISES, POST_EXERCISE, DELETE_EXERCISE, INPUT_CHANGE, GET_EXERCISE, CHANGE_USERNAME } from '../actions/types';

const initialState  ={
    exercises:[],
    status:'',
    username:'',
    description:'',
    duration:0,
    date: new Date()
    
};

const exerciseReducer = (state= initialState, action) =>{
    switch(action.type){
        case FETCH_EXERCISES:
            return{
                ...state,
                exercises:action.payload                
            }
        case POST_EXERCISE:
            return{
                ...state,
                status:action.payload
            }
        case DELETE_EXERCISE:
            return{
                ...state,
                exercises:state.exercises.filter(el=> el._id !== action.payload)
            }
        case INPUT_CHANGE:
            return{
                ...state,
                [action.payload.name]:action.payload.value                              
            } 
        case CHANGE_USERNAME:
            return{
                ...state,
                username:action.payload.username                             
            }             
        case GET_EXERCISE:
            return{
                ...state,
                username:action.payload.username,
                description:action.payload.description,
                duration:action.payload.duration,
                date: new Date(action.payload.date)
            }
        default:
            return state;
        
    }
}
export default exerciseReducer;