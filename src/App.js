import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Services from './Pages/Home/Services';
import Order from './Pages/Home/Order';
import ServiceDetail from './Pages/Home/ServiceDetail';
import AddProduct from './Pages/Home/AddProduct';
import ManageProduct from './Pages/Home/ManageProduct';
import UpdateProduct from './Pages/Home/UpdateProduct';



function App() {
  return (
    <div className="App ">
      <div className="max-w-7xl mx-auto lg:px-12">

        <Navbar ></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="accessories" element={<Services />} />
          <Route path="/product/:serviceId" element={<ServiceDetail>
          </ServiceDetail>}></Route>

          <Route path="order" element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          } />

          <Route path="add" element={
            <AddProduct></AddProduct>
          } />

          <Route path="manage" element={
            <ManageProduct></ManageProduct>
          } />

          <Route path="update" element={
            <UpdateProduct></UpdateProduct>
          } />

          <Route path="about" element={<RequireAuth> <About></About></RequireAuth>} />

        </Routes>

      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;


