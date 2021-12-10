import {GET_ALL_USERS} from '../actions/actiontype'
const initState={users:[],user:{},message:" hello"};
const UserReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {...state,users:action.payload}
         case 'update user' :
             return {...state,message:action.payload};
           case 'GET_SINGLE_USER' :
               return {...state,user:action.payload,message:'alo'}
           default : return state
    }
}
export default UserReducer;