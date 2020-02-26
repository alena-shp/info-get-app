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

const App = () => {
  const swapiData = new swapiService()

  return (
    <ErrorBoundary>
      <SwapiProveder value={swapiData}>
        <div className="app">
          <Header />
          <RandomPlanet />

          <Row left={<PeopleItemList />} right={<PersonDetails itemId="6" />} />
          <Row
            left={<PlanetsItemList />}
            right={<PlanetDetails itemId="4" />}
          />
        </div>
      </SwapiProveder>
    </ErrorBoundary>
  )
}

export default App
