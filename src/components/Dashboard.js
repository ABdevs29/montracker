import React from "react";
import { Link, useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <button
        onClick={() => history.goBack()}
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-long-arrow-alt-left fa-sm text-white-50"></i> Go Back
      </button>
    </div>
  );
}

export default Dashboard;
