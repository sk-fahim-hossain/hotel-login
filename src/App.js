import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import LoginFour from './Components/Login/LoginFour';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import Reviews from './Components/Reviews/Reviews';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './hooks/PrivateRoute';




function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<LoginFour></LoginFour>}></Route>
        <Route path="/*" element={<PrivateRoute></PrivateRoute>}>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
