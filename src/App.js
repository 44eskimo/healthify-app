import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import LoginPage from './Components/LoginPage';
import './App.css';
import LoginContainer from './Components/LoginContainer';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import CaloriesCalculator from './Components/Calories';
import Tests from './Components/Tests';
import DailyTips from './Components/Dailytips';
import Dietplan1 from './Components/DIetplan1';
import Dietplan2 from './Components/Dietplan2';
import MorningRoutine from './Components/MorningRoutines';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          < Route exact path="/" Component={LoginPage} />
          <Route path="/LoginContainer" Component={LoginContainer} />
          <Route path="/Dashboard" Component={Dashboard} /> 
          <Route path="register" Component={Register} />
          <Route path="/CaloriesCalculator" Component={CaloriesCalculator} />
          <Route path="/Tests" Component={Tests} />
          <Route path='/dailytips' Component={DailyTips}/>
          <Route path="/Dietplan1" Component={Dietplan1} />
          <Route path='/dietplan2' Component={Dietplan2} />
          <Route path="/morning-routine" Component={MorningRoutine} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
