import React from "react";
import { Link } from "react-router-dom";
import {GetUsers} from "../Redux/actions/actions"
import {useDispatch} from "react-redux"
function Home() {
  const dispatch=useDispatch()
  const handleClick=()=>{
   dispatch(GetUsers())
  }
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/List">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            LIST
          </button>
        </Link>
      </div>
      <div>
        <Link to="/add">
          <button type="button" className="btn btn-primary">
            Add User
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
