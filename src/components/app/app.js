import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonPage from "../personPage/personPage"
import swapiService from "../../services/swapiService"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import Row from "../row/row"
import ItemDetails from "../itemDetails/itemDetails"

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

    const {
      getPerson,
      getStarship,
      getImagePeople,
      getImageStarship
    } = this.swapiData

    const itemPeople = (
      <ItemDetails
        itemId="5"
        getDetails={getPerson}
        getImageUrl={getImagePeople}
      />
    )
    const itemStarship = (
      <ItemDetails
        itemId="10"
        getDetails={getStarship}
        getImageUrl={getImageStarship}
      />
    )

    const viewRandomPlanet = showrandomPlanet ? <RandomPlanet /> : null
    return (
      <ErrorBoundary>
        <div className="app">
          <Header />
          {viewRandomPlanet}
          <button className="app__action" onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <PersonPage />
          <Row left={itemPeople} right={itemStarship} />
        </div>
      </ErrorBoundary>
    )
  }
}
export default App
