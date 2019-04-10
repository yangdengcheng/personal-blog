import React, { Component } from 'react';
import './App.css'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}

export default App;
