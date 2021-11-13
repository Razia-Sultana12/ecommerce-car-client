import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './Components/Pages/Login/Login';
import DashBoard from './Components/DashBoard/DashBoard';
import Explore from './Components/Pages/Explore/Explore';

import Home from './Components/Pages/Home/Home/Home';
import Header from './Components/Pages/Home/Header/Header';
import Register from './Components/Pages/Register/Register';

function App() {
  return (
    <Router>
      <Header></Header>
    <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/dashboard">
      <DashBoard></DashBoard>
    </Route>
    <Route path="/explore">
      <Explore></Explore>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/register">
      <Register></Register>
    </Route>
    </Switch>
    </Router>
      
    
  );
}

export default App;
