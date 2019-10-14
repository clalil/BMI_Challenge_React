import React, { Component } from "react"
import AppInfo from './Components/AppInfo'
import Calculator from "./Components/Calculator"
import Footer from "./Components/Footer"

class App extends Component {
  render() {
    return (
      <>
      <div className="app-container">
        <AppInfo />
        <Calculator />
      </div>
        <Footer />
      </>
    );
  }
}

export default App;