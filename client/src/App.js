import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./Components/addUser.js";
import Home from "./Components/Home";
import List from "./Components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import SingleUser from "./Components/SingleUser"

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/List" element={<List />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/details/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
