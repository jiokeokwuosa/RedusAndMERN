import axios from "axios";
import { FETCH_USERS, CHANGE_USERNAME } from './types';

export const fetchUsers = () => async dispatch => {
    try {
        const result = await axios.get('http://localhost:5000/api/v1/users');
        // my endpoint repsonse has its own data property. axios equally has its own data property
        if(result.data.data.length >0){
            const allUsers = result.data.data.map(user => {
                return user.username
            })
            console.log(allUsers);
            dispatch({
                type: FETCH_USERS,
                payload:{
                    users:allUsers                    
                }
            }) 
            dispatch({
                type: CHANGE_USERNAME,
                payload:{                   
                    username:allUsers[0]
                }
            })            	
        }
    } catch (error) {
        console.error(error);
    }    

}



