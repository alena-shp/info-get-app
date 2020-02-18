import React from "react"
import "./app.scss"
import Header from "../header/header"
import ItemList from "../itemList"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonDetails from "../personDetails/personDetails"

class App extends React.Component {
  state = {
    showrandomPlanet: true,
    numSelect: 5
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showrandomPlanet: !state.showrandomPlanet
      }
    })
  }
  onItemselected = id => {
    this.setState({
      numSelect: id
    })
  }
  render() {
    const { showrandomPlanet, numSelect } = this.state

    const randomPlanets = showrandomPlanet ? <RandomPlanet /> : null
    return (
      <div className="app">
        <Header />
        {randomPlanets}
        <button className="app__action" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <div className="app__description">
          <ItemList onItemselected={this.onItemselected} />
          <PersonDetails numSelect={numSelect} />
        </div>
      </div>
    )
  }
}
export default App
