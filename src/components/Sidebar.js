import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-rupee-sign"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Montracker
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Figures</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/earning/monthly"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-coins"></i>
          <span>Monthly Earnings</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/earning/annual"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-hand-holding-usd"></i>
          <span>Annual Earnings</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/tasks"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-tasks"></i>
          <span>Tasks</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/tasks/pending"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-thumbtack"></i>
          <span>Pending Tasks</span>
        </Link>
      </li>

      {/* <hr className="sidebar-divider" />

      <div className="sidebar-heading">Overview</div> */}

      

      {/* <li className="nav-item">
        <Link className="nav-link" to="/chart">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li> */}

    </ul>
  );
}

export default Sidebar;
