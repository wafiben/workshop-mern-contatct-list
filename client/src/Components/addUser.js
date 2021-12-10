import React ,{useState}from "react";
import {addUser} from "../Redux/actions/actions"
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router"
const AddUser = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const [user,setUser]=useState({username:" ",email:" ",age:" "});
  const handleChange=(event)=>{
    setUser({...user,[event.target.id]:event.target.value});
  }
 const onSubmit=(event)=>{
  event.preventDefault();
  dispatch(addUser(user))
  setUser({username:" ",email:" ",age:" "});
 
 }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group"  >
        <label for="username">username</label>
        <input onChange ={handleChange}  type="text" className="form-control" id="username" value={user.username} />
      </div>
      <div className="form-group">
        <label for="email">email</label>
        <input onChange ={handleChange} type="email" className="form-control" id="email" value={user.email} />
      </div>
      <div className="form-group">
        <label for="age">age</label>
        <input onChange ={handleChange} type="number" className="form-control" id="age" value={user.age} />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddUser;
