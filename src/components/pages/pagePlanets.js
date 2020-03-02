import React from "react"
import { withRouter } from "react-router-dom"
import { PlanetsItemList } from "../wrapper-component"

const PagePlanets = ({ history }) => {
  console.log(history)
  return (
    <PlanetsItemList
      onItemselected={itemId => {
        history.push(`/planets/${itemId}`)
      }}
    />
  )
}

export default withRouter(PagePlanets)
