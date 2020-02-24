import React from "react"
import "./../personPage/personPage.scss"

const Record = ({ item, field, label }) => {
  return (
    <li className="card__description-item">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export default Record