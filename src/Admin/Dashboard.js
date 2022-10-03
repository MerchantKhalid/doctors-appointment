import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import UseAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="nav-drawyer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className='text-3xl text-purple-900 font-bold'>Welcome to your Dashboard</h2>
          <Outlet />
        
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="nav-drawyer" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to ="/dashboard">My Appointment</Link></li>
            <li><Link to ="/dashboard/review">My Review</Link></li>
            <li><Link to ="/dashboard/history">My History</Link></li>
            <li>{admin && <>
              <Link to ="/dashboard/users">All Users</Link>
              <Link to ="/dashboard/addDoctor">Add a Doctor</Link>
              <Link to ="/dashboard/managedoctor">Manage Doctor</Link>
            </>
            }</li>
            
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;