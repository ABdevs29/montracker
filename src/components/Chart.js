import React from "react";

function MyChart() {
  return (
    <div class="col-xl-8 col-lg-7">
      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
          <div class="dropdown no-arrow">
            <a
              class="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="myAreaChart"></canvas>
            <img src="p" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyChart;
