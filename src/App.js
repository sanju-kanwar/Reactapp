//import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import React, { Component } from 'react';

import AutoName from './AutoName.json'

class App extends Component{
  render(){
    return (
<div className="App">
  
  <AutoCompleteText items={AutoName}/>


</div>
    );
  }
}
export default App;
