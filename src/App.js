
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './social/Login';
import Register from './social/Register';
import RequireAuth from './social/RequireAuth';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './Admin/Dashboard';
import MyAppointment from './Admin/MyAppointment';
import MyReview from './Admin/MyReview';
import MyHistory from './Admin/MyHistory';
import Users from './Admin/Users';
import RequireAdmin from './social/RequireAdmin';
import AddDoctor from './Admin/AddDoctor';
import ManageDoctor from './Admin/ManageDoctor';
import Payment from './Admin/Payment';




function App() {
  return (
    <div>
    <Navbar />
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='appointment' element={
        <RequireAuth><Appointment /></RequireAuth>
      }></Route> 
      <Route path='dashboard' element={
        <RequireAuth><Dashboard /></RequireAuth>
      }>
        <Route index element={<MyAppointment />}></Route>
        <Route path='review' element={<MyReview />}></Route>
        <Route path='history' element={<MyHistory />}></Route>
        <Route path='payment/:id' element={<Payment />}></Route>
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        <Route path='managedoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
      </Route> 
      <Route path ='login' element={<Login />}></Route>
      <Route path ='register' element={<Register />}></Route>
      
   </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
