import React from "react"
import ItemDetails from "../itemDetails"
import WithDataDetails from "../hocComponent/withDataDetails"
import Record from "../record/record"
import WithContext from "../hocComponent/withContext"

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

const mapMethodToPropsPlanet = swapiData => {
  return {
    getDetails: swapiData.getPlanet,
    getImageUrl: swapiData.getImagePlanet
  }
}

const PlanetDetails = WithContext(
  WithDataDetails(PlanetDetailsChild(ItemDetails)),
  mapMethodToPropsPlanet
)

export { PlanetDetails }
