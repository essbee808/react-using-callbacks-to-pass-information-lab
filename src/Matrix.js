import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  // updates selectedColor with whatever is passsed into it as an argument
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  // returns a collection of Cell components
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() { // renders a div containing ColorSelector component and another div
    return (
      <div id="app"> 
        <ColorSelector setSelectedColor={this.setSelectedColor}/>

        <div id="matrix"> 
          {this.genMatrix()} 
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}