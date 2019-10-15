import React, { Component } from 'react'
import DisplayResult from './DisplayResult'
import MethodSelect from './MethodSelect'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: null,
      weight: '',
      height: ''
    }
  }

  onChangeValue = methodSelector => {
    this.setState({
      method: methodSelector
    })
  }

  render() {
    debugger
    return (
      <div>
        <MethodSelect onChangeValue={this.onChangeValue}/>

        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => 
          this.setState({ weight: e.target.value })} />
        </div>
        
        <div>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => 
          this.setState({ height: e.target.value })} />
        </div>

        {/* <div>
          <label>Weight(lbs)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => 
          this.setState({ weight: e.target.value })} />
        </div>
        
        <div>
          <label>Height(inches)</label>
          <input name="height" value={this.state.height} onChange={ (e) => 
          this.setState({ height: e.target.value })} />
        </div> */}

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