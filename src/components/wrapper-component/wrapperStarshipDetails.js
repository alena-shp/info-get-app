import React from "react"
import ItemDetails from "../itemDetails"
import WithDataDetails from "../hocComponent/withDataDetails"
import Record from "../record/record"
import WithContext from "../hocComponent/withContext"

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

const mapMethodToPropsStarship = swapiData => {
  return {
    getDetails: swapiData.getStarship,
    getImageUrl: swapiData.getImageStarship
  }
}

const StarshipDetails = WithContext(
  WithDataDetails(StarshipDetailsChild(ItemDetails)),
  mapMethodToPropsStarship
)

export { StarshipDetails }
