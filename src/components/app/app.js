import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonPage from "../personPage/personPage"
import ErrorIndicator from "../errorIndicator"
import swapiService from "../../services/swapiService"

class App extends React.Component {
  swapiData = new swapiService()
  state = {
    showrandomPlanet: true,
    errorHas: false
  }

  componentDidCatch() {
    this.setState({
      errorHas: true
    })
  }
  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showrandomPlanet: !state.showrandomPlanet
      }
    })
  }

  render() {
    const { showrandomPlanet, errorHas } = this.state

    if (errorHas) {
      return <ErrorIndicator />
    }

    const viewRandomPlanet = showrandomPlanet ? <RandomPlanet /> : null
    return (
      <div className="app">
        <Header />
        {viewRandomPlanet}
        <button className="app__action" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PersonPage />
      </div>
    )
  }
}
export default App
