import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Switch, Route} from "react-router-dom";
import MonthlyEarnings from "./components/MonthlyEarnings";
import AnnualEarnings from "./components/AnnualEarnings";
import Tasks from "./components/Tasks";
import PendingTasks from "./components/PendingTasks";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="content">
          <Topbar />
          <div className="container-fluid">
            <Switch>
            <Route path="/earning/monthly">
              <MonthlyEarnings/>
            </Route>
            <Route path="/earning/annual">
              <AnnualEarnings/>
            </Route>
            <Route exact path="/tasks">
              <Tasks/>
            </Route>
            <Route path="/tasks/pending">
              <PendingTasks/>
            </Route>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
