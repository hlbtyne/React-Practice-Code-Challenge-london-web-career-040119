import React, { Component } from 'react'

class Sushi extends Component {
  render() {
    return (
      <div className="sushi">
        <div className="plate" 
        
          onClick={this.props.eat}>
          { 
            this.props.eaten
              ? null
              : <img src={this.props.sushi.img_url} width="100%" />
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