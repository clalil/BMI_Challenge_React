import React, { Component } from 'react'
import { BMICalculator } from '../Modules/BMICalculator'

class DisplayResult extends Component {
  calculate = () => {
    var weight = this.props.weight
    var height = this.props.height

    return BMICalculator(weight, height)
  }
  
  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult