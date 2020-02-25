import React from "react"
import swapiService from "../../services/swapiService"
import ItemDetails from "../itemDetails"
import WithDataDetails from "../hocComponent/withDataDetails"
import Record from "../record/record"

const {
  getPerson,
  getPlanet,
  getStarship,
  getImagePerson,
  getImagePlanet,
  getImageStarship
} = new swapiService()

const PersonDetailsChild = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="hairColor" label="Hair Color" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
      <Record field="skinColor" label="Skin Color" />
    </ItemDetails>
  )
}

const PlanetDetailsChild = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

const StarshipDetailsChild = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost in Credits" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />
      <Record field="passengers" label="Passengers" />
      <Record field="cargoCapacity" label="CargoCapacity" />
    </ItemDetails>
  )
}

const PersonDetails = WithDataDetails(
  PersonDetailsChild,
  getPerson,
  getImagePerson
)
const PlanetDetails = WithDataDetails(
  PlanetDetailsChild,
  getPlanet,
  getImagePlanet
)
const StarshipDetails = WithDataDetails(
  StarshipDetailsChild,
  getStarship,
  getImageStarship
)

export { PersonDetails, PlanetDetails, StarshipDetails }
