import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './Components/Pages/Login/Login';

import Explore from './Components/Pages/Explore/Explore';

import Home from './Components/Pages/Home/Home/Home';
import Header from './Components/Pages/Home/Header/Header';
import Register from './Components/Pages/Register/Register';

import DashBoard from './Components/Pages/DashBoard/DashBoard';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Order from './Components/Pages/Explore/Order/Order';


import Review from './Components/Pages/DashBoard/NormalUser/Review/Review';


function App() {
  return (
    <AuthProvider>
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
    <Route path='/review'>
      <Review></Review>
    </Route>
    
    <PrivateRoute path="/explore">
      <Explore></Explore>
    </PrivateRoute>
    <PrivateRoute path="/order/:orderId">
            <Order></Order>
          </PrivateRoute>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/register">
      <Register></Register>
    </Route>
   

    </Switch>
    </Router>
    </AuthProvider>
    
    
  );
}

export default App;
