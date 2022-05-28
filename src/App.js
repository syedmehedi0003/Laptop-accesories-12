import './App.css';
import { Routes, Route, Router } from "react-router-dom";
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
import Perchase from './Pages/Home/Perchase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/Dashboard/DashBoard';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Profile from './Pages/Home/Profile';
import MyOrder from './Pages/Dashboard/MyOrder';
import Users from './Pages/Dashboard/Users';



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
              <About></About>
            </RequireAuth>
          } />

          <Route path="add" element={
            <AddProduct></AddProduct>
          } />

          <Route path="manage" element={
            <ManageProduct></ManageProduct>
          } />

          <Route path="update/:id" element={
            <UpdateProduct></UpdateProduct>
          } />

          <Route path="perchase" element={
            <Perchase></Perchase>
          } />

          <Route path="userprofile" element={
            <Profile></Profile>
          } />

          <Route path="dashboard" element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          } >
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="order" element={<Order></Order>}></Route>
            <Route path="uorder" element={<MyOrder></MyOrder>}></Route>
            <Route path="users" element={<Users></Users>}></Route>

          </Route>

          <Route path="about" element={<RequireAuth> <About></About></RequireAuth>} />

        </Routes>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;


