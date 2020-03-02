import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import "./app.scss"

import swapiService from "./../../services/swapiService"
import { SwapiProveder } from "./../swapiContext/swapiContext"

import Header from "../header/header"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PagePeople from "../pages/pagePeople"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import PagePlanets from "../pages/pagePlanets"
import PageStarships from "../pages/pageStarships"
import { PersonDetails } from "../wrapper-component"

const App = () => {
  const swapiData = new swapiService()

  return (
    <ErrorBoundary>
      <SwapiProveder value={swapiData}>
        <Router>
          <div className="app">
            <Header />
            <RandomPlanet />
            <Route path="/" render={() => "Welcome in board"} exact />
            <Route path="/people" component={PagePeople} exact />
            <Route path="/planets" component={PagePlanets} />
            <Route path="/starships" component={PageStarships} />
            <Route
              path="/people/:id/"
              render={({ match }) => <PersonDetails itemId={match.params.id} />}
            />
          </div>
        </Router>
      </SwapiProveder>
    </ErrorBoundary>
  )
}

export default App
