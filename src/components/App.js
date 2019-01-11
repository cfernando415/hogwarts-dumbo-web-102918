import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogwarts from './Hogwarts';

class App extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      q: hogs,
      filtered: false,
      sorted: false
    }
    this.filterHandler = this.filterHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }
  filterHandler(){
    if(this.state.filtered) this.setState({ q: hogs, filtered: false });
    else {
      const qResults = hogs.filter(hog => hog.greased);
      this.setState({ q: qResults, filtered: true });
    }
  }
  sortHandler(){
    if(this.state.sorted) this.setState({ q: hogs, sorted: false });
    else {
      const qResults = this.state.q.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
      this.setState({ q: qResults, sorted: true })
    }
  }
  render(){
    return (
      <div className="App">
          < Nav />
          <button onClick={this.filterHandler}>Filter</button>
          <button onClick={this.sortHandler}>Sort</button>
          <Hogwarts hogs={this.state.q} />
      </div>
    )
  }
}

export default App;
