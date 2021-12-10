import {GET_ALL_USERS} from '../actions/actiontype'
const initState={users:[],message:" hello"};
const UserReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {...state,users:action.payload}
         case 'update user' :
             return {...state,message:action.payload}   ;
             case 'Single':
                 return{...state,user:action.payload}
             default :
            return state
    }
}
export default UserReducer;