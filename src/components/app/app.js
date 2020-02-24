import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import PersonPage from "../personPage/personPage"
import swapiService from "../../services/swapiService"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import Row from "../row/row"
import ItemDetails, { Record } from "../itemDetails/itemDetails"

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
      >
        
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="hairColor" label="Hair Color" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
        <Record field="skinColor" label="Skin Color" />
      </ItemDetails>
    )
    const itemStarship = (
      <ItemDetails
        itemId="10"
        getDetails={getStarship}
        getImageUrl={getImageStarship}
      >
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="costInCredits" label="Cost in Credits" />
        <Record field="length" label="Length" />
        <Record field="crew" label="Crew" />

      </ItemDetails>
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
