import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './components/Main'
import AddPhoto from './components/AddPhoto';

class App extends Component{
  render(){
    return (
      <BrowserRouter> 
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/add" component={AddPhoto}/>         
        </Switch>     
    </BrowserRouter>
  );
  }
  
}

export default App;