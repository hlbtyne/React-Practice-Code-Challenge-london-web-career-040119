import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    data: [],
    sushisEaten: [],
    budget: 1000
  }

  chargeTable = (sushi) => {
    this.setState({ budget: this.state.budget - sushi.price})
    }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }))
    }

  showNextFourSushis = () => {
    const remaining = [...this.state.data].slice(4);
    const removed = [...this.state.data].slice(0, 4);
    const newList =  [remaining, removed].flat()
    this.setState({data: newList});
  }

  eatSushi = (sushi) => {
    this.setState({ sushisEaten: [...this.state.sushisEaten, sushi] })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.data} more={this.showNextFourSushis} eat={this.eatSushi} charge={this.chargeTable}/>
        <Table sushisEaten={this.state.sushisEaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;