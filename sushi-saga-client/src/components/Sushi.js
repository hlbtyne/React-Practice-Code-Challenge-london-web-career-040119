import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }  

  handleClick = (sushi) => {
    if(sushi.price <= this.props.budget){
      this.setState({ eaten: true })
      if(!this.state.eaten) {
        this.props.eat(sushi)
        this.props.charge(sushi)
      }
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
        
             onClick={() => this.handleClick(this.props.sushi)}>
          { 
            this.state.eaten ? null : <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
  
}

export default Sushi