import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/Login/Login'
import 'antd/dist/antd.css';

import Admin from './pages/Admin/Admin'

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
        </BrowserRouter>
        
      
    )
  }
}
