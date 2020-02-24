import React from "react"
import "./app.scss"
import Header from "../header/header"

import RandomPlanet from "../randomPlanet/randomPlanet"
import swapiService from "../../services/swapiService"
import ErrorBoundary from "../errorBoundary/errorBoundary"
import Row from "../row/row"
import ItemDetails from "../itemDetails/itemDetails"
import ItemList from "../itemList"
import Record from "../record/record"

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
      getAllPeople,
      getAllStarships,
      getPerson,
      getStarship,
      getImagePeople,
      getImageStarship
    } = this.swapiData

    const itemListPeople = (
      <ItemList getData={getAllPeople} onItemselected={() => {}}>
        {e => `${e.name}`}
      </ItemList>
    )

    const itemListStarships = (
      <ItemList getData={getAllStarships} onItemselected={() => {}}>
        {e => `${e.name}`}
      </ItemList>
    )
    const itemDetailsPeople = (
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
    const itemDetailsStarship = (
      <ItemDetails
        itemId="9"
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
          <Row left={itemListPeople} right={itemDetailsPeople} />
          <Row left={itemListStarships} right={itemDetailsStarship} />
        </div>
      </ErrorBoundary>
    )
  }
}
export default App
