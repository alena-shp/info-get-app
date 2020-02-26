import React from "react"
import "./row.scss"

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="row__items">{left}</div>
      <div className="row__details">{right}</div>
    </div>
  )
}

export default Row
