import React from "react"
import "./app.scss"
import Header from "../header/header"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PagePeople from "../pages/pagePeople"
import ErrorBoundary from "../errorBoundary/errorBoundary"

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
          <PagePeople />
        </div>
      </SwapiProveder>
    </ErrorBoundary>
  )
}

export default App
