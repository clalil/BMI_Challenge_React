import React from 'react'

const MethodSelect = props => {
  return (
    <div>
      <select className="MethodSelect" id="method">
        <option value="metric" onChange={e => props.onChangeValue("metric")}>Metric</option>
        <option value="imperial" onChange={e => props.onChangeValue("imperial")}>Imperial</option>
      </select>
    </div>
  )
}

export default MethodSelect