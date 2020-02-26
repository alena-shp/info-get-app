import React from "react"
import ItemDetails from "../itemDetails"
import WithDataDetails from "../hocComponent/withDataDetails"
import Record from "../record/record"
import WithContext from "../hocComponent/withContext"


const PersonDetailsChild = Wrapper => {
  return props => {
    return (
      <Wrapper {...props}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="hairColor" label="Hair Color" />
        <Record field="height" label="Height" />
        <Record field="mass" label="Mass" />
        <Record field="skinColor" label="Skin Color" />
      </Wrapper>
    )
  }
}

const PlanetDetailsChild = Wrapper => {
  return props => {
    return (
      <ItemDetails {...props}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    )
  }
}

const StarshipDetailsChild = Wrapper => {
  return props => {
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
}

const mapMethodToPropsPerson = swapiData => {
  return {
    getDetails: swapiData.getPerson,
    getImageUrl: swapiData.getImagePerson
  }
}

const mapMethodToPropsPlanet = swapiData => {
  return {
    getDetails: swapiData.getPlanet,
    getImageUrl: swapiData.getImagePlanet
  }
}

const mapMethodToPropsStarship = swapiData => {
  return {
    getDetails: swapiData.getStarship,
    getImageUrl: swapiData.getImageStarship
  }
}

const PersonDetails = WithContext(
  WithDataDetails(PersonDetailsChild(ItemDetails)),
  mapMethodToPropsPerson
)

const PlanetDetails = WithContext(
  WithDataDetails(PlanetDetailsChild(ItemDetails)),
  mapMethodToPropsPlanet
)
const StarshipDetails = WithContext(
  WithDataDetails(StarshipDetailsChild(ItemDetails)),
  mapMethodToPropsStarship
)

export { PersonDetails, PlanetDetails, StarshipDetails }
