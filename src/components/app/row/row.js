import React from "react"

const Row = ({ left, right }) => {
  return (
    <div className="person-page">
      <div className="person-page__items">{left}</div>
      <div className="person-page__details">{right}</div>
    </div>
  )
}

export default Row
