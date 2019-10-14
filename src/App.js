import React, { Component } from "react"
import Calculator from "./Components/Calculator"
import Footer from "./Components/Footer"

class App extends Component {
  render() {
    return (
      <>
      <div className="app-container">
        <Calculator />
      </div>
          <Footer />
      </>
    );
  }
}

export default App;