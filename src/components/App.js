import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogwarts from './Hogwarts';

class App extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      filtered: false,
      sorted: false
    }
    this.filterHandler = this.filterHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }
  filterHandler(){
    console.log("hi")
  }
  sortHandler(){
    console.log("hello")
  }
  render(){
    return (
      <div className="App">
          < Nav />
          <button onClick={this.filterHandler}>Filter</button>
          <button onClick={this.sortHandler}>Sort</button>
          <Hogwarts hogs={hogs} />
      </div>
    )
  }
}

export default App;
