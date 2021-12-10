import React from 'react'
import UserCard from "./userCard"
import {useSelector} from "react-redux" 
 const List = () => {
     const users=useSelector(state=>state.UserReducer.users)
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {users.map((user)=> <UserCard key={user._id} user={user}/>)}
           
        </div>
    )
}
export default List