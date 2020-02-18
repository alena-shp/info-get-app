import React from "react"
import "./errorIndicator.scss"
import icon from "./errPlanetImg.png"

const ErrorIndicator = () => {
  return (
    <div className="errorIndicator">
      <img src={icon} className="errorIndicator__icon" alt="" />
      <span className="errorIndicator__text">
        BOOM!
        <br />
        something has gone terribly wrong <br />
        (but we already sent droids to fix it)
      </span>
    </div>
  )
}

export default ErrorIndicator
