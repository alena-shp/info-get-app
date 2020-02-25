import React from "react"
import swapiService from "../../services/swapiService"
import ItemDetails from "../itemDetails"
import WithDataDetails from "../hocComponent/withDataDetails"

const {
  getPerson,
  getPlanet,
  getStarship,
  getImagePerson,
  getImagePlanet,
  getImageStarship
} = new swapiService()

const PeopleDetails = WithDataDetails(ItemDetails, getPerson, getImagePerson)
const PlanetsDetails = WithDataDetails(ItemDetails, getPlanet, getImagePlanet)
const StarshipsDetails = WithDataDetails(
  ItemDetails,
  getStarship,
  getImageStarship
)

export { PeopleDetails, PlanetsDetails, StarshipsDetails }
