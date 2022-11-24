import axios from 'axios';


export function getInfo(){ 
    return async (dispatch)=>{
        return dispatch({
            type: 'GET_INFO',
            payload: "payload"
        })        
    }    
}