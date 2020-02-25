import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import Row from "../row/row"
import ItemList from "../itemList"
import {
  PeopleItemList,
  PlanetsItemList,
  PersonDetails,
  PlanetDetails
} from "../wrapper-component"

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
      <ErrorBoundary>
        <div className="app">
          <Header />
          {viewRandomPlanet}
          <button className="app__action" onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <Row
            left={<PeopleItemList/>}
            right={<PersonDetails itemId="6" />}
          />
          <Row
            left={<PlanetsItemList />}
            right={<PlanetDetails itemId="4" />}
          />
        </div>
      </ErrorBoundary>
    )
  }
}
export default App
