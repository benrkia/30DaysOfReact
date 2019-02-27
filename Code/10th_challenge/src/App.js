import React, { Component } from 'react';

import PureComp from './components/PureComponent'
import StatefullComponent from './components/StatefullComponent'
import StatelessComponent from './components/StatelessComponent'

class App extends Component {
  
  state = {
    date: ''
  }

  componentWillMount = () => {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  tick = () => {
    const date = new Date().toLocaleTimeString();
    this.setState({date});
  }
  
  render() {
    
    const {date} = this.state;
    
    return (
      <div>
        <StatelessComponent />
        <StatefullComponent />
        <PureComp />
        <h1>{date}</h1>
      </div>
    );
  }
}

export default App;
