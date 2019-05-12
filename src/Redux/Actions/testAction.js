import {ActionTypes} from '../ActionTypes'
export const testAction=(data)=>{
    return(
        {
            type:ActionTypes.TEST,
            payload:data
        }
    )
}