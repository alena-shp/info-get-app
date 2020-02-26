import React from "react"
import "./app.scss"

import swapiService from "./../../services/swapiService"
import { SwapiProveder } from "./../swapiContext/swapiContext"

import Header from "../header/header"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PagePeople from "../pages/pagePeople"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import PagePlanets from "../pages/pagePlanets"
import PageStarships from "../pages/pageStarships"

const App = () => {
  const swapiData = new swapiService()

  return (
    <ErrorBoundary>
      <SwapiProveder value={swapiData}>
        <div className="app">
          <Header />
          <RandomPlanet />
          <PagePeople />
          <PagePlanets />
          <PageStarships />
        </div>
      </SwapiProveder>
    </ErrorBoundary>
  )
}

export default App
