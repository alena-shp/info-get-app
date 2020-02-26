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

const mapMethodToPropsPerson = swapiData => {
  return {
    getDetails: swapiData.getPerson,
    getImageUrl: swapiData.getImagePerson
  }
}

const PersonDetails = WithContext(
  WithDataDetails(PersonDetailsChild(ItemDetails)),
  mapMethodToPropsPerson
)

export { PersonDetails }
