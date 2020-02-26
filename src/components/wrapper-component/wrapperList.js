import React from "react"
import WithDataList from "../hocComponent/withDataList"
import ItemList from "../itemList"
import WithContext from "../hocComponent/withContext"
import { WithChild } from "../hocComponent"

const renderName = ({ name }) => <span>{name}</span>

const mapMethodToPropsPeople = swapiData => {
  return {
    getData: swapiData.getAllPeople
  }
}

const mapMethodToPropsPlanets = swapiData => {
  return {
    getData: swapiData.getAllPlanets
  }
}

const mapMethodToPropsStarships = swapiData => {
  return {
    getData: swapiData.getAllStarships
  }
}

const PeopleItemList = WithContext(
  WithDataList(WithChild(ItemList, renderName)),
  mapMethodToPropsPeople
)

const PlanetsItemList = WithContext(
  WithDataList(WithChild(ItemList, renderName)),
  mapMethodToPropsPlanets
)

const StarshipsItemList = WithContext(
  WithDataList(WithChild(ItemList, renderName)),
  mapMethodToPropsStarships
)

export { PeopleItemList, PlanetsItemList, StarshipsItemList }
