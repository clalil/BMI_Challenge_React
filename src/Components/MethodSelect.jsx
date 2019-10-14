import React from 'react'

const MethodSelect = () => {
  return (
    <div>
      <select class="form-control" id="method">
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
    </div>
  )
}

export default MethodSelect