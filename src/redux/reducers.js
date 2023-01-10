import { ADD, DELETE, UPDATE } from "./params"

const initialItems = []

export const reducer = (items = initialItems, action)=>{
    switch(action.type){
        case ADD:
            return [...items, action.payload]
        case DELETE:
            return [...[...items].filter(item => item.id !== action.payload)]
        case UPDATE:
            const index = items.findIndex( item=>item.id === action.payload.id)
            const updatedItems = [...items]
            updatedItems[index] = action.payload
            return updatedItems
        default:
            return items
    }
    
}