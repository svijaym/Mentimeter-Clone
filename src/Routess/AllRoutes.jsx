import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Enterprise from '../Components/Enterprise';
import Login from '../Components/Login';
import Mypresentation from '../Components/Mypresentation';
import Signup from '../Components/Signup';
import Home from './Home';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/enterprise" element={<Enterprise/>}/>
            <Route path="/mypresentation" element={<Mypresentation/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes;