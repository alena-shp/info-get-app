import React from "react"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__text">STAR DB</h1>
      <ul className="header__menu">
        <li>
          <a href="#0">People</a>
        </li>
        <li>
          <a href="#0">Planets</a>
        </li>
        <li>
          <a href="#0">Starships</a>
        </li>
      </ul>
    </div>
  )
}
export default Header
