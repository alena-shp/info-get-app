import React from "react"
import "./app.scss"
import Header from "../header/header"
import ItemList from "../itemList"
import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonDetails from "../personDetails/personDetails"

const App = () => {
  return (
    <div className="app">
      <Header />
      <RandomPlanet />
      <div className="app__description">
      <ItemList />
      <PersonDetails />
      </div>
    </div>
  )
}
export default App
