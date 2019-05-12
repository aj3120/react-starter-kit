import React, { Component } from 'react';
import Main from './Components/JS/MainComponent';
import Sub from './Components/JS/SubComponent'
import './App.css';
import { Route, Switch } from 'react-router' 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/sub' component={Sub}/>
        </Switch>
      </div>
    );
  }
}
export default App;
