import React from "react";

function MyChart() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart"></canvas>
            <img src="p" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyChart;
