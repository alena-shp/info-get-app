import React from "react"
import { withRouter } from "react-router-dom"
import { StarshipsItemList } from "../wrapper-component"

const PageStarships = ({ histopy }) => {
  return (
    <StarshipsItemList
      onItemselected={itemId => {
        histopy.push(`/starships/${itemId}`)
      }}
    />
  )
}
export default withRouter(PageStarships)
