import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import Row from "../row/row"
import {
  PeopleItemList,
  PlanetsItemList,
  PersonDetails,
  PlanetDetails
} from "../wrapper-component"
import swapiService from "./../../services/swapiService"
import { SwapiProveder } from "./../swapiContext/swapiContext"

class App extends React.Component {
  swapiData = new swapiService()

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
        <SwapiProveder value={this.swapiData}>
          <div className="app">
            <Header />
            {viewRandomPlanet}
            <button className="app__action" onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <Row
              left={<PeopleItemList />}
              right={<PersonDetails itemId="6" />}
            />
            <Row
              left={<PlanetsItemList />}
              right={<PlanetDetails itemId="4" />}
            />
          </div>
        </SwapiProveder>
      </ErrorBoundary>
    )
  }
}
export default App
