import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonPage from "../personPage/personPage"
import ErrorIndicator from "../errorIndicator"
import swapiService from "../../services/swapiService"
import ItemList from "../itemList"
import PersonDetails from "../personDetails/personDetails"
import Row from "./row/row"

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

    const itemList = (
      <ItemList
        onItemselected={this.onItemselected}
        getData={this.swapiData.getAllPlanets}
        renderLabel={elem => `${elem.name} ${elem.diameter} ${elem.population}`}
      />
    )

    const personDetails = <PersonDetails personId={this.state.personId} />

    const viewRandomPlanet = showrandomPlanet ? <RandomPlanet /> : null
    return (
      <div className="app">
        <Header />
        {viewRandomPlanet}
        <button className="app__action" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <PersonPage />

        <Row left={itemList} right={personDetails} />
      </div>
    )
  }
}
export default App
