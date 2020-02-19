import React from "react"
import "./app.scss"
import Header from "../header/header"
import ItemList from "../itemList"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonDetails from "../personDetails/personDetails"

class App extends React.Component {
  state = {
    showrandomPlanet: true,
    personId: 5
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
      personId: id
    })
  }
  render() {
    const { showrandomPlanet, personId } = this.state

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
          <PersonDetails personId={personId} />
        </div>
      </div>
    )
  }
}
export default App
