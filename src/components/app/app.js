import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonPage from "../personPage/personPage"

class App extends React.Component {
  state = {
    showrandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showrandomPlanet: !state.showrandomPlanet
      }
    })
  }

  render() {
    const { showrandomPlanet } = this.state

    const viewRandomPlanet = showrandomPlanet ? <RandomPlanet /> : null
    return (
      <div className="app">
        <Header />
        {viewRandomPlanet}
        <button className="app__action" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PersonPage />
        <PersonPage />
        <PersonPage />
      </div>
    )
  }
}
export default App
