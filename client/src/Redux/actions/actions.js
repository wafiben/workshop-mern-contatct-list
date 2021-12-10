import { GET_ALL_USERS } from "./actiontype";
import axios from "axios";
export const GetUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("/user");
    dispatch({ type: GET_ALL_USERS, payload: response.data.users });
  } catch (error) {
    console.log(error);
  }
};
export const addUser = (user) => async (dispatch) => {
  try {
    console.log(user);
    const response = await axios.post("/user", user);
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/user/${id}`);
    dispatch(GetUsers())
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, user) => async (dispatch) => {
  try {
    const response = await axios.put(`/user/${id}`, user);
    console.log(response.data.message)
     dispatch(GetUsers()) 
    dispatch({type:'update user',payload:response.data.message})
  } catch (error) {
    console.log(error);
  }
};
export const getOneUser=(id)=>async(dispatch)=>{
  try {
    const response=await axios.get(`/user/${id}`)
    console.log(response.data.user)
    dispatch({type:'GET_SINGLE_USER',payload:response.data.user})
  } catch (error) {
    console.log(error)
  }
}

