import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Cart from './Pages/Cart';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import RecipieDetail from './Pages/RecipieDetail';
import Home from './Pages/Home';

import Registration from './Pages/Registration';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/recipie/:idMeal' element={<RecipieDetail/>}/>
        <Route path='/user' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
