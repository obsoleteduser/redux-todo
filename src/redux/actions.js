import { ADD, DELETE, UPDATE } from "./params"


export const AddItem = (payload) =>{
    return {
        type: ADD,
        payload
    }
}


export const UpdateItem = (payload)=>{
    return {
        type: UPDATE,
        payload
    }
}

export const DeleteItem = (payload) => {
    return{
        type: DELETE,
        payload
    }
}