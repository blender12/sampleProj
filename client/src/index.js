import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import App2 from './app2';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/App2" component={App2}/>
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


