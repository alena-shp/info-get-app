import React from "react"
import { withRouter } from "react-router-dom"
import { PeopleItemList } from "../wrapper-component"

const PagePeople = ({ history }) => {
  return (
    <PeopleItemList
      onItemselected={itemId => {
        history.push(`/people/${itemId}`)
      }}
    />
  )
}
export default withRouter(PagePeople)
