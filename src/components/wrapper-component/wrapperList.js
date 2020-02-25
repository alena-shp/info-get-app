import React from "react"
import swapiService from "../../services/swapiService"
import WithDataList from "../hocComponent/withDataList"
import ItemList from "../itemList"

const { getAllPeople, getAllStarships, getAllPlanets } = new swapiService()

const PeopleItemList = WithDataList(ItemList, getAllPeople)
const PlanetsItemList = WithDataList(ItemList, getAllPlanets)
const StarshipsItemList = WithDataList(ItemList, getAllStarships)

export { PeopleItemList, PlanetsItemList, StarshipsItemList }
