import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    data: [],
    sushisEaten: [],
    budget: 20
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

  iCantAffordThisSushi = sushi => sushi.price > this.state.budget

  sushiHasBeenEaten = sushi => this.state.sushisEaten.includes(sushi)

  eatSushi = (sushi) => {
    if (this.iCantAffordThisSushi(sushi)) return
    if (this.sushiHasBeenEaten(sushi)) return 

    this.chargeTable(sushi)
    this.setState({ sushisEaten: [...this.state.sushisEaten, sushi] })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.data}
          more={this.showNextFourSushis}
          sushiHasBeenEaten={this.sushiHasBeenEaten}
          eat={this.eatSushi}
        />
        <Table sushisEaten={this.state.sushisEaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;