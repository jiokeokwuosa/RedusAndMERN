import axios from "axios";
import { INPUT_CHANGE, FETCH_EXERCISES, POST_EXERCISE, DELETE_EXERCISE, GET_EXERCISE, UPDATE_EXERCISE } from './types';

export const fetchExercises = () => async dispatch => {
    try {  
        const result = await axios.get('http://localhost:5000/api/v1/exercises');
        // my endpoint repsonse has its own data property. axios equally has its own data property
        if(result.data.data.length >0){
            console.log(result.data.data);
            const allExercises = result.data.data;				
            dispatch({
                type: FETCH_EXERCISES,
                payload:allExercises
            })				
        }        
        
    } catch (error) {
        console.error(error);
    }	

}
export const getExercise = (id) => async dispatch => {
    try {
        const result1 = await axios.get('http://localhost:5000/api/v1/exercises/'+id);
        // my endpoint repsonse has its own data property. axios equally has its own data property
        if(result1.data.data.length >0){
            const theExercise=result1.data.data[0];
            console.log(theExercise);
            dispatch({
                type: GET_EXERCISE,
                payload:theExercise
            })           	
        }
       
    } catch (error) {
        console.error(error);
    }

}
export const postExercise = (exercise) => async dispatch => {    
    try {
        const result = await axios.post('http://localhost:5000/api/v1/exercises/add', exercise);
        console.log(result.data.status);
        dispatch({
            type: POST_EXERCISE,
            payload:result.data.status
        })	
        window.location ='/';
    } catch (error) {
        console.error(error);
    }

}
export const deleteExercise = (id) => async dispatch => {    
    try {
        const result = await axios.delete('http://localhost:5000/api/v1/exercises/'+id);
        console.log(result.status);
        //after deleting from the database, equally delete it from what the user is seeing
        dispatch({
            type: DELETE_EXERCISE,
            payload:id
        })       			
    } catch (error) {
        console.error(error);
    }	

}
export const inputChange = (name, value) => async dispatch => {
    try {       	
        dispatch({
            type: INPUT_CHANGE,
            payload:{
                name:name,
                value:value
            }
        }) 
    } catch (error) {
        console.error(error);
    }    

}
export const updateExercise = (id, exercise) => async dispatch => {
    try {
        const result = await axios.patch('http://localhost:5000/api/v1/exercises/update/'+id, exercise);
        console.log(result.data.status);
        dispatch({
            type: UPDATE_EXERCISE,
            payload:result.data.status
        })	
        window.location ='/';
    } catch (error) {
        console.error(error);
    }   

}
