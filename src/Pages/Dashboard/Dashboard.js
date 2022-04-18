import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import "./Dashboard.css";
import DashboardHome from "./DashboardHome/DashboardHome";

const Dashboard = () => {
  const { allContexts } = useAuth();
  const { admin } = allContexts;
  console.log(admin);
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li>
              <Link to="/">
                <i class="fas fa-home"></i>Home
              </Link>
            </li>

            {admin && (
              <li>
                <Link to="/dashboard">
                  <i class="fas fa-user"></i>Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="#">
                <i class="fas fa-user"></i>Profile
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/myorders"}>
                <i class="fas fa-project-diagram"></i>My Order
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reviews">
                <i class="fas fa-address-book"></i>Add Reviews
              </Link>
            </li>
            {admin && (
              <li>
                <Link to={`/dashboard/makeadmin`}>
                  <i class="fas fa-address-card"></i>Make Admin
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to={`/dashboard/manageorder`}>
                  <i class="fas fa-blog"></i>Manage Order
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to={`/dashboard/addproduct`}>
                  <i class="fas fa-map-pin"></i>Add Products
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div class="main_content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
