import React, { Component } from 'react'
import DisplayResult from './DisplayResult'
import MethodSelect from './MethodSelect'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 'metric',
      weight: '',
      height: ''
    }
  }

  onChangeValue = e => {
    this.setState({
      method: e.target.value
    })
  }

  render() {
    currentMethod = this.state.method
    return (
      <div>
        <MethodSelect onChangeValue={this.onChangeValue}/>

        <div>
          <label>Weight</label>
          <input 
            name="weight" 
            placeholder={currentMethod === 'metric' ? '(kg)' : '(lbs)'}
            value={this.state.weight} 
            onChange={ (e) => 
          this.setState({ weight: e.target.value })} 
          />
        </div>
        
        <div>
          <label>Height(cm)</label>
          <input 
            name="height" 
            placeholder={currentMethod === 'metric' ? '(cm)' : '(in)'}
            value={this.state.height} 
            onChange={ (e) => 
          this.setState({ height: e.target.value })} 
          />
        </div>

        <DisplayResult
          method={this.state.method}
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    )
  }
}

export default Calculator;