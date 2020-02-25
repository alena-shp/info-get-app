import React from "react"
import swapiService from "../../services/swapiService"
import WithDataList from "../hocComponent/withDataList"
import ItemList from "../itemList"

const { getAllPeople, getAllStarships, getAllPlanets } = new swapiService()

const WithChild = (Wrapper, fn) => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>
  }
}

const renderName = ({ name }) => <span>{name}</span>

const PeopleItemList = WithDataList(
  WithChild(ItemList, renderName),
  getAllPeople
)
const PlanetsItemList = WithDataList(
  WithChild(ItemList, renderName),
  getAllPlanets
)
const StarshipsItemList = WithDataList(
  WithChild(ItemList, renderName),
  getAllStarships
)

export { PeopleItemList, PlanetsItemList, StarshipsItemList }
