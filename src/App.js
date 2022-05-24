import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="App ">
      <div className="max-w-7xl mx-auto lg:px-12">

        <Navbar ></Navbar >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<RequireAuth> <About></About></RequireAuth>} />

        </Routes>

      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;
