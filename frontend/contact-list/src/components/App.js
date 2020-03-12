import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
     );
  }
}
 
export default App;