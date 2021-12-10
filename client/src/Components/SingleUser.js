import React ,{ useEffect}from "react";
import { useSelector ,useDispatch} from "react-redux";
import UserReducer from './../Redux/Reducers/UserReducer';
import {getOneUser} from "../Redux/actions/actions"
import { useParams } from "react-router";

const SingleUser = () => {
    const dispatch=useDispatch()
    const {id}=useParams();
    console.log(id)
    const user=useSelector(state=>state.UserReducer.user)
    useEffect(()=>{
   console.log('hello')
  dispatch(getOneUser(id)) 
    },[])

   if(!user){
       return 'loading';
   }
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">
          {user.email}
        </p>
     
      </div>
    </div>
  );
};

export default SingleUser;
