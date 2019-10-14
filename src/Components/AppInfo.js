  
import React from "react"
import { Container } from 'semantic-ui-react'

const AppInfo = () => {
  return (
    <>
    <Container>
    <p className="header">BMI Calculator</p>
    <p>This calculator is meant for entertainment purposes only.</p>
    <p>
    If you are well trained and muscular, your results will be deceptive. 
    BMI can also give misleading results if you are very tall. 
    For children, adolescents and older people other recommendations apply.
    </p>
    <ul>
        {[["<18.5", "Underweight"],["18.5 < 25", "Normal"],["25 < 30", "Overweight"],[">30", "Obese"]].map(
          arr => {
            return (
            <li>
              <span style={{ fontWeight: "700" }}>A BMI of {arr[0]}</span>
              <span style={{ padding: "0.4rem" }}> means you're  </span>
              <span style={{ fontWeight: "700" }}>{arr[1]}</span>
            </li>
            )
          }
        )}
      </ul>
      </Container>
    </>
  )
}

export default AppInfo;