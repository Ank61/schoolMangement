import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./Components/Login/login";
import Dashboard from "./Components/Dashboard/dashboard";
import Admission from "./Components/Admission/admission";
import Fee from "./Components/Fee/fee";
function App() {
  return (
    <div>
  <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admission" element={<Admission/>}></Route>
          <Route path="/fee" element={<Fee/>}></Route>
          {/*Restricted Route*/}
          {/* <Route path="/admin/home" element={<Portal admin={authenticate}/>}></Route> */}
          {/* <Route path = "*" element={<NoPage/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
