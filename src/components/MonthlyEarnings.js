import React from 'react'
import { useHistory } from "react-router-dom";

function MonthlyEarnings() {
    const history = useHistory();
    return (
        <>
        <div className="col-xl-6 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">₹40,000</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <button
        onClick={() => history.goBack()}
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-long-arrow-alt-left fa-sm text-white-50"></i> Go Back
      </button>
    </>
    )
}

export default MonthlyEarnings
