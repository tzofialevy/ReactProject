import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Route, Routes,useRoutes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';
import AddUser from './components/AddUser/AddUser';
import Manager from './components/Manager/Manager';
import ContainerUser from './components/ContainerUser/ContainerUser';
import ContainerManager from './components/ContainerManager/ContainerManager';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path="header" element={<Header></Header>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path={'home'} element={<HomePage></HomePage>}>
              {/* <Route index element={<ContainerUser></ContainerUser>}></Route> */}
              {/* <Route path={'LinearIndeterminate'} element={<LinearIndeterminate></LinearIndeterminate>}></Route> */}
              <Route path={'manager'} element={<ContainerManager></ContainerManager>}></Route>
              <Route path={'user'} element={<ContainerUser></ContainerUser>}></Route>
            </Route>
            <Route path={'about'} element={<About></About>}></Route>
            <Route path={'addUser'} element={<AddUser></AddUser>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>

        {/* <Route path='header/home/manager' element={<ContainerManager></ContainerManager>}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
