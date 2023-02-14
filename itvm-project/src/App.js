import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Curosel from './Components/Curosel/Curosel';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar name="E-Commerce"/>}/>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
