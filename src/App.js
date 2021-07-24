import React, { Component } from 'react';
import './App.css';

function Welcome(props) {
  return <p>this is a {props.data.name} paragraph {props.data.year}</p>
}

class Obj {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add() {
    return this.x + this.y
  }
}

console.log(new Obj(2,3))

class Test extends Component {
  constructor(props) {
    super()
  }
  showName() {
    return this.props.data + ' From showName'
  }
  render() {
    return <div>9999 {this.showName()}</div>
  }
}

function App(props) {
  const data = {
    name: 'xiaoming',
    year: 30
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* {title} */}
        <Welcome data={data}  />
        <p>
          Edit and save to reload.props:{props.title}
        </p>
        <Test data="888" />
        <p>{new Obj(3, 4).add()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
