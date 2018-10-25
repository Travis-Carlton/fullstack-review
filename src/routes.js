import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Couches from './components/Couches/Couches';
import Home from './components/Home/Home';

export default (

<Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/cool-couches' component={Couches}/>
</Switch>

)